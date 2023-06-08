import { AttrType } from './AttrType.js'

let counter = 0

export class Id extends AttrType
{
  static nodeName = 'id'

  static generate() {
    const str = (counter++).toString(36)
    return 'ID_' + str.padStart(4, '0')
  }
}
