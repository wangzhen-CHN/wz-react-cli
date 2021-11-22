const path = require('path')
const fs = require('fs')
const { isBuildInJenkins } = require('./env')
// Get the working directory of the file executed by node
const appDirectory = fs.realpathSync(process.cwd())

/**
 * Resolve absolute path from relative path
 * @param {string} relativePath relative path
 */
function resolveApp(relativePath) {
  return path.resolve(appDirectory, relativePath)
}

// Default module extension
const moduleFileExtensions = ['ts', 'tsx', 'js', 'jsx']

/**
 * Resolve module path
 * @param {function} resolveFn resolve function
 * @param {string} filePath file path
 */
function resolveModule(resolveFn, filePath) {
  // Check if the file exists
  const extension = moduleFileExtensions.find((ex) => fs.existsSync(resolveFn(`${filePath}.${ex}`)))

  if (extension) {
    return resolveFn(`${filePath}.${extension}`)
  }
  return resolveFn(`${filePath}.ts`) // default is .ts
}

module.exports = {
  appBuild: resolveApp('dist'),
  appPublic: resolveApp('public'),
  appServer: resolveApp('server'),
  appIndex: resolveModule(resolveApp, 'src/index'), // Package entry path
  appHtml: resolveApp('public/index.ejs'),
  appNodeModules: resolveApp('node_modules'), // node_modules path
  appSrc: resolveApp('src'),
  appPackageJson: resolveApp('package.json'),
  appTsConfig: resolveApp('tsconfig.json'),
  appSvgIconPath: resolveApp('src/assets/svg'), // svg 图标
  globalLessPath: resolveApp('src/assets/style/global.less'), // 共享 less 变量
  webpackPublicPath: '/',
  moduleFileExtensions
}
