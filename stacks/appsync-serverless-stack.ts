import { Duration, Expiration, Stack, StackProps } from 'aws-cdk-lib';
import {
  GraphqlApi,
  SchemaFile,
  AuthorizationType,
} from 'aws-cdk-lib/aws-appsync';
import { AttributeType, BillingMode, Table } from 'aws-cdk-lib/aws-dynamodb';
import { Runtime } from 'aws-cdk-lib/aws-lambda';
import { NodejsFunction } from 'aws-cdk-lib/aws-lambda-nodejs';
import { Construct } from 'constructs';
import { join } from 'path';

export class AppsyncServerlessStack extends Stack {
  constructor(scope: Construct, id: string, props?: StackProps) {
    super(scope, id, props);

    const api = new GraphqlApi(this, 'notes-appsync-api', {
      name: 'notes-appsync-api',
      schema: SchemaFile.fromAsset('graphql/schema.graphql'),
      authorizationConfig: {
        defaultAuthorization: {
          authorizationType: AuthorizationType.API_KEY,
          apiKeyConfig: {
            expires: Expiration.after(Duration.days(365)),
          },
        },
      },
      xrayEnabled: true,
    });

    const notesLambda = new NodejsFunction(this, 'notes-lambda', {
      functionName: 'notes-lambda',
      runtime: Runtime.NODEJS_16_X,
      entry: join(__dirname, '../lambdas/notesLambda.ts'),
      memorySize: 1024,
    });

    const lambdaDataSource = api.addLambdaDataSource(
      'lambda-data-source',
      notesLambda
    );

    lambdaDataSource.createResolver('query-resolver', {
      typeName: 'Query',
      fieldName: 'listNotes',
    });

    lambdaDataSource.createResolver('mutation-resolver', {
      typeName: 'Mutation',
      fieldName: 'createNote',
    });

    const notesTable = new Table(this, 'notes-api-table', {
      tableName: 'notes-api-table',
      billingMode: BillingMode.PAY_PER_REQUEST,
      partitionKey: {
        name: 'id',
        type: AttributeType.STRING,
      },
    });

    notesTable.grantFullAccess(notesLambda);

    notesLambda.addEnvironment('NOTES_TABLE', notesTable.tableName);
  }
}

