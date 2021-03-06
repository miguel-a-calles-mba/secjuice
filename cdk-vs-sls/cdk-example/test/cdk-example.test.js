const { expect, matchTemplate, MatchStyle } = require('@aws-cdk/assert');
const cdk = require('@aws-cdk/core');
const CdkExample = require('../lib/cdk-example-stack');

test('Empty Stack', () => {
    const app = new cdk.App();
    // WHEN
    const stack = new CdkExample.CdkExampleStack(app, 'MyTestStack');
    // THEN
    expect(stack).to(matchTemplate({
      "Resources": {}
    }, MatchStyle.EXACT))
});
