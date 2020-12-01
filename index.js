function parse (string = '') {
  const response = {}
  response.args = {}
  const strArray = string.split(/ /)
  response.command = strArray.shift()
  const rejoined = strArray.join(' ')
  const resplit = rejoined.split(/--/)
  resplit.shift()
  resplit.forEach(val => {
    const arr = val.split(/ /)
    const name = arr.shift()
    response.args[name] = arr.join(' ').trim()
  })

  return response
}

module.exports = parse
