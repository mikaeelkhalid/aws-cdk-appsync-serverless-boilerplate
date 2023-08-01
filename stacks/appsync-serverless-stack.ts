import { Duration, Expiration, Stack, StackProps } from 'aws-cdk-lib';
import {
  GraphqlApi,
  SchemaFile,
  AuthorizationType,
} from 'aws-cdk-lib/aws-appsync';
import { Construct } from 'constructs';

export class AppsyncServerlessStack extends Stack {
  constructor(scope: Construct, id: string, props?: StackProps) {
    super(scope, id, props);

    const api = new GraphqlApi(this, 'graphql-api', {
      name: 'graphql-api',
      schema: SchemaFile.fromAsset('schema.graphql'),
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
  }
}

