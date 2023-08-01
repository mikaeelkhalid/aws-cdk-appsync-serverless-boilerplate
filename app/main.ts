#!/usr/bin/env node
import 'source-map-support/register';
import * as cdk from 'aws-cdk-lib';
import { AppsyncServerlessStack } from '../stacks';

const app = new cdk.App();
new AppsyncServerlessStack(app, 'appsync-serverless-stack', {});

