# fast-mhtml2html.js

[![npm version](https://badge.fury.io/js/fast-mhtml2html.svg)](https://badge.fury.io/js/fast-mhtml2html) [![circleci](https://circleci.com/gh/msindwan/fast-mhtml2html.svg?style=shield&circle-token=:circle-token)](https://circleci.com/gh/msindwan/fast-mhtml2html)

`fast-mhtml2html` converts `MHTML` files to a single `HTML` file using javascript.

## Usage

`fast-mhtml2html` is compatible with Node >= v10.

**It has only been tested with MHTML files built and used with the latest versions of Chrome**

**Support UTF-8 and GBK**

**支持中文GBK编码网页**

### Node.js Example

```js
const mhtml2html = require('fast-mhtml2html');

const mhtml = '<your MHTML string or MHTML buffer data>';
const html = mhtml2html.convert(mhtml)
```

# Tips
> This project is based on [mhtml-parser: https://github.com/testimio/mhtml-parser](https://github.com/testimio/mhtml-parser), and it does not support Chinese GBK
