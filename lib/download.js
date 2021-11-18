const download = require('download-git-repo')
const path = require('path')

module.exports = function (target) {
  target = path.join(target || '.', '.download-temp')
  return new Promise(function(resolve, reject){
    download('direct:https://github.com/isxieyh/gitdownload.git#master', target, { clone: true }, function (err) {
      console.log(err)
    })
  })
}
