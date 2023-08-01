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
  }
}

