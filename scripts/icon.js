const path = require('path')
const fs = require('fs')

const rootPath = path.resolve(__dirname, '../src/assets/svg')

const commonName = fs
  .readdirSync(rootPath)
  .filter((item) => item.includes('.svg'))
  .map((item) => item.replace('.svg', ''))
console.log(path.resolve(__dirname, '../src/componentsUi/Icon/svg.json'), commonName)
fs.writeFile(path.resolve(__dirname, '../src/componentsUi/Icon/svg.json'), JSON.stringify(commonName), () => {})
