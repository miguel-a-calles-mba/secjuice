#!/usr/bin/env node
/* bin/cdk-example.js */
/* automatically created file */
/* no code changes made */

'use strict';

const cdk = require('@aws-cdk/core');
const { CdkExampleStack } = require('../lib/cdk-example-stack');

const app = new cdk.App();
new CdkExampleStack(app, 'CdkExampleStack');
