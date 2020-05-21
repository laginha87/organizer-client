import { gql } from 'apollo-boost'
import { useQuery } from '@apollo/react-hooks'
import { useMemo } from 'react'
import { SelectOptions } from '~types/InputTypes'

export const generateGetEnumQuery = (name) => gql`
  query GetEnums {
    __type(name: "${name}") {
      enumValues {
        name,
        description
      }
    }
  }
`

export const useEnum = (name: string): [SelectOptions, boolean] => {
  const { data, loading } = useQuery<any>(generateGetEnumQuery(name))

  const options = useMemo(() => {
    if (data) {
      return data.__type.enumValues.map(({ name, description }) => ({ value: name, label: description }))
    }
  }, [data])
  return [options, loading]
}
