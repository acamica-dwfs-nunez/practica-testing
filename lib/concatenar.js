module.exports = function(...args) {
  let settings = { separator: ' ' }
  let lastElement = args[args.length - 1]
  let newString = ''
  if (lastElement instanceof Object && lastElement.separator) {
    Object.assign(settings, lastElement)
    args.pop()
  }

  for (const value of args) {
    if (typeof value !== 'string') {
      if (!(value instanceof String)) {
        throw new TypeError(`all the parameters except the last needs to be a string`)
      }
    }
  }

  for (const string of args) {
    newString = newString.concat(string + settings.separator)
  }

  return
}
