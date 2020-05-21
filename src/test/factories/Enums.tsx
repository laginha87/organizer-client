import { generateGetEnumQuery } from '~hooks/useEnum'

const generateEnumMock = (name, options) => ({
  request: {
    query: generateGetEnumQuery(name)
  },
  result: {
    data: {
      __type: {
        enumValues: options.map(([name, description]) => ({ name, description, __typename: '__EnumValue' })),
        __typename: '__Type'
      }
    }
  }
})

export const Enums = {
  Ickyness: generateEnumMock('Dificulty', [['easy', 'Easy'], ['medium', 'Medium'], ['hard', 'Hard']]),
  Dificulty: generateEnumMock('Ickyness', [['frog', 'Frog'], ['tepid', 'Tepid'], ['chicken', 'Chicken']]),
  Duration: generateEnumMock('Duration', [['short', 'Short'], ['normal', 'Normal'], ['long', 'Long']]),
  Priority: generateEnumMock('Priority', [['low', 'Low'], ['medium', 'Medium'], ['high', 'High']])
}
