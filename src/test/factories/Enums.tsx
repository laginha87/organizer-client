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
  Ickyness: generateEnumMock('Ickyness', [['chicken', 'Chicken']]),
  Dificulty: generateEnumMock('Dificulty', [['easy', 'Chicken']]),
  Duration: generateEnumMock('Duration', [['long', 'Chicken']]),
  Priority: generateEnumMock('Priority', [['low', 'Chicken']])
}
