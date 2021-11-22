/* eslint-disable no-param-reassign */
/* eslint-disable camelcase */
// 生成全局样式代码提示
const fs = require('fs-extra')
// eslint-disable-next-line unicorn/import-style
const util = require('util')
const path = require('path')
const child_process = require('child_process')

const exec = util.promisify(child_process.exec)
const rootPath = process.cwd()
const workDir = path.join(__dirname, '../src/assets/style/base')
const targetPath = path.resolve(__dirname, '../.vscode/baseStyle.code-snippets')
const VO = {}
const reg = /(\.[^/|]*?;})/

function isNeedCompile(dir) {
  const compileList = ['margin', 'padding']
  return compileList.includes(dir)
}

async function run(lessFilePath, dir) {
  let filePath = lessFilePath
  const cssFilePath = lessFilePath.replace('/index.less', '/index.css')
  if (isNeedCompile(dir)) {
    await exec(`npx lessc --global-var=zero_px=0px ${lessFilePath} ${cssFilePath}`, { cwd: rootPath })
    filePath = cssFilePath
  }
  let data = fs.readFileSync(filePath, 'utf8')
  data = data.replace(/\s+/g, '')
  data = data.split(reg).filter((item) => reg.test(item))
  data.forEach((item) => {
    item = item.replace(/(.*?)}$/, '$1').split(/{/)
    const classNames = item[0].replace(/\./g, '').replace(/:\w+/g, '').split(',')
    classNames.forEach((className, idx) => {
      const key = `.${className}{${item[1]}}`
      console.log(key)
      VO[key] = {
        prefix: [className],
        body: [className],
        scope: 'typescript,typescriptreact,less'
      }
    })
  })
  if (fs.existsSync(cssFilePath)) {
    fs.removeSync(cssFilePath)
  }
}
async function play() {
  const list = fs.readdirSync(workDir)
  const promisees = []
  list.forEach((dir, index) => {
    const lessFilePath = path.join(workDir, `/${dir}/index.less`)
    if (fs.pathExistsSync(lessFilePath)) {
      promisees.push(run(lessFilePath, dir))
    }
  })
  await Promise.all(promisees)

  fs.writeFileSync(targetPath, JSON.stringify(VO, null, 2), 'utf-8')
}
try {
  play()
} catch (error) {
  console.log(error)
}
