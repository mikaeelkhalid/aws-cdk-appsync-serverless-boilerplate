#!/usr/bin/env node
import 'source-map-support/register';
import { App } from 'aws-cdk-lib';
import { AppsyncServerlessStack } from '../stacks';

const app = new App();

new AppsyncServerlessStack(app, 'appsync-serverless-stack', {
  env: {
    region: process.env.REGION,
    account: process.env.ACCOUNT,
  },
});

