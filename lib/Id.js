const AttrType = require('./AttrType')

let counter = 0

class Id extends AttrType
{
  static nodeName = 'id'

  static generate() {
    const str = (counter++).toString(36)
    return 'ID_' + str.padStart(4, '0')
  }
}

module.exports = Id
