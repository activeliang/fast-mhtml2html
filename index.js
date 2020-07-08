const Parser = require('./parser');
const iconv = require('iconv-lite');

const convert = (mhtml) => {
  let mhtmlContent = mhtml
  if (!Buffer.isBuffer(mhtml)) {
    mhtmlContent = Buffer.from(mhtml)
  }

  const spitFiles = new Parser({}).parse(mhtmlContent).rewrite().spit()

  const css_array = []
  for (const result of spitFiles) {
    if (result.type == 'text/css') css_array.push(`<style>${result.content}</style>`)
  }

  const isUtf8Encode = spitFiles[0].content.includes('UTF-8')
  let htmlData = isUtf8Encode ? spitFiles[0].content.toString() : iconv.decode(spitFiles[0].content,'GBK')
  htmlData = htmlData.replace(/(<\/head)/, `${css_array.join(' ')}$1`)
  if (!isUtf8Encode) htmlData = htmlData.replace(/GBK/, `UTF-8`)

  return htmlData
}

exports.convert = convert
