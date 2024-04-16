const { JSDOM } = require('jsdom')

const setupTestEnvironment = () => {
  const dom = new JSDOM('<!DOCTYPE html><div id="result"></div>')
  global.document = dom.window.document
}

module.exports = setupTestEnvironment
