let transformRemoveConsolePlugin = [];
if (process.env.NODE_ENV === 'production') {
  transformRemoveConsolePlugin = ['transform-remove-console']
}
module.exports = {
  presets: [ ],
  plugins: [
    ...transformRemoveConsolePlugin
  ]
}
