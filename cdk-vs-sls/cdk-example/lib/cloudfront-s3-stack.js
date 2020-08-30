/* lib/cloudfront-s3.js */
/* new file */

'use strict';

const cdk = require('@aws-cdk/core');
const {
  CloudFrontToS3,
} = require('@aws-solutions-constructs/aws-cloudfront-s3');

class CloudFrontS3Stack extends cdk.Stack {
  /**
   *
   * @param {cdk.Construct} scope
   * @param {string} id
   * @param {cdk.StackProps=} props
   */
  constructor(scope, id, props) {
    super(scope, id, props);
    new CloudFrontToS3(stack, 'cloudfront-s3', {});
  }
}

module.exports = { CloudFrontS3Stack };
