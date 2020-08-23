/* lib/cdk-example-stack.js */
/* automatically created file */
/* code changes made */

'use strict';

const cdk = require('@aws-cdk/core');

/* addition */
const lambda = require('@aws-cdk/aws-lambda');
const fs = require('fs');
/* end addition */

/* addition 2 */
const dynamodb = require('@aws-cdk/aws-dynamodb');
/* end addition 2 */

class CdkExampleStack extends cdk.Stack {
  /**
   *
   * @param {cdk.Construct} scope
   * @param {string} id
   * @param {cdk.StackProps=} props
   */
  constructor(scope, id, props) {
    super(scope, id, props);
    /* addition */
    const helloSrc = fs.readFileSync('handler.js').toString();
    const helloLambda = new lambda.Function(this, 'HelloLambda', {
      runtime: lambda.Runtime.NODEJS_12_X,
      code: new lambda.InlineCode(helloSrc, {
        encoding: 'utf-8',
      }),
      // InlineCode will create an `index.js` file
      // source code exports a `hello` handler
      handler: 'index.hello',
    });
    /* end addition */

    /* addition 2 */
    const helloTable = new dynamodb.Table(this, 'HelloTable', {
      partitionKey: {
        name: 'PartitionKey',
        type: dynamodb.AttributeType.STRING,
        billingMode: dynamodb.BillingMode.PROVISIONED,
      },
      sortKey: { name: 'SortKey', type: dynamodb.AttributeType.STRING },
      readCapacity: 1,
      writeCapacity: 1,
    });
    helloTable.grantReadData(helloLambda);
    /* end addition 2 */
  }
}

module.exports = { CdkExampleStack };
