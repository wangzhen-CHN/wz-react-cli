const isDevelopment = process.env.NODE_ENV !== 'production'
const isProduction = process.env.NODE_ENV === 'production'
const isBuildInJenkins =
  process.env.JOB_NAME === 'pms.pangmao.match.ui_TEST' || process.env.JOB_NAME === 'pms.pangmao.match.ui_BUILD'
module.exports = {
  isDevelopment,
  isProduction,
  isBuildInJenkins
}
