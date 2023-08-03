# AWS CDK AppSync Serverless Boilerplate

[![Mikaeel Khalid](https://badgen.now.sh/badge/by/mikaeelkhalid/purple)](https://github.com/mikaeelkhalid)

This repository contains a boilerplate to kickstart your serverless journey with AWS CDK and AppSync.

## Features

- AWS CDK-based infrastructure setup
- AWS AppSync configuration for GraphQL endpoints
- Serverless functions with AWS Lambda, and AWS DynamoDB
- Easy deployment scripts

## Prerequisites

- [Node.js](https://nodejs.org/)
- [AWS CLI](https://aws.amazon.com/cli/)
- [AWS CDK Toolkit](https://docs.aws.amazon.com/cdk/latest/guide/cli.html)

## Getting Started

1. **Clone the repository:**

   ```bash
   git clone https://github.com/mikaeelkhalid/aws-cdk-appsync-serverless-boilerplate.git
   cd aws-cdk-appsync-serverless-boilerplate
   ```

2. **Install dependencies:**

   ```bash
   npm install
   ```

3. **Deploy to AWS:**

   First, you need to bootstrap the AWS environment to use AWS CDK.

   ```bash
   cdk bootstrap
   ```

   Then, deploy the stack.

   ```bash
   cdk deploy
   ```

## Usage

After deploying, you can use the following queries and mutations in the AWS AppSync console:

### Query

```graphql
query listNotes {
  listNotes {
    id
    name
    completed
  }
}
```

### Mutation

```graphql
mutation createNote {
  createNote(note: { id: "01", name: "Note Name", completed: false }) {
    id
    name
    completed
  }
}
```

---

Feel free to adjust or refine as needed!
