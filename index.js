'use strict'
var json2xls = require('json2xls')
var Buffer = require('buffer').Buffer

function SxlsxBase64 () {
  this.jsonToXlsxBrowser = function jsonToXlsxBrowser (jsonData) {
    var binary = json2xls(jsonData)
    return Buffer.from(binary, 'binary')
  }
  this.jsonToXlsxBase64 = function jsonToXlsxBase64 (jsonData) {
    var binary = json2xls(jsonData)
    var xls = Buffer.from(binary, 'binary')
    var uri = 'data:application/octect-stream;base64,' +
      encodeURIComponent(xls.toString('base64'))
    return uri
  }
}

var sXlsxBase64 = new SxlsxBase64()

Window.sXlsxBase64 = sXlsxBase64
