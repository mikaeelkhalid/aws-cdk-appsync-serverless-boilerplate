#!/usr/bin/env node
import 'source-map-support/register';
import { App } from 'aws-cdk-lib';
import { AppsyncServerlessStack } from '../stacks';
import { config } from '../config';

const { prefix } = config;

const app = new App();

new AppsyncServerlessStack(app, `${prefix}-serverless-stack`, {
  env: {
    region: process.env.REGION,
    account: process.env.ACCOUNT,
  },
});

