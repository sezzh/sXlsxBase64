(function () {
  sXlsxBase64 = Window.sXlsxBase64
  // alert('working')
  var json = {
    foo: 'bar'
  }
  
  var btnDownload = document.querySelector('[data-test="descarga"]')
  var btnGenerate = document.querySelector('[data-test="link"]')
  btnGenerate.addEventListener('click', function (event) {
    event.preventDefault()
    btnDownload.href = sXlsxBase64.jsonToXlsxBase64(json)
  })
})()
