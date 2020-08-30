#!/usr/bin/env node
/* bin/cdk-example.js */
/* automatically created file */
/* code changes made */

'use strict';

const cdk = require('@aws-cdk/core');
const { CdkExampleStack } = require('../lib/cdk-example-stack');
const { CloudFrontS3Stack } = require('../lib/cloudfront-s3-stack');

const app = new cdk.App();
new CdkExampleStack(app, 'CdkExampleStack');
new CloudFrontS3Stack(app, 'CloudFrontS3Stack');
