const webpack = require('webpack')
const path = require('path')

let webpackOpts = {
  context: path.resolve(__dirname),
  entry: {
    jxls: './index'
  },
  output: {
    path: path.join(__dirname, 'public/js'),
    filename: '[name].bundle.js'
  }
}

let compiler = webpack(webpackOpts)

compiler.run((err, stats) => {
  if (err) {
    console.log(err)
  } else {
    console.log(stats.toString({ minimal: true, colors: true }))
    console.log('build done.')
  }
})
