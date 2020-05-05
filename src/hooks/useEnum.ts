import { gql } from 'apollo-boost'
import { useQuery } from '@apollo/react-hooks'
import { useMemo } from 'react'
import { SelectOptions } from '~types/InputTypes'

export const useEnum = (name: string): [SelectOptions, boolean] => {
  const { data, loading } = useQuery<any>(gql`
  query GetEnums {
      __type(name: "${name}") {
        name,
        enumValues {
          name,
          description
        }
      }
    }
`)

  const options = useMemo(() => {
    if (data) {
      return data.__type.enumValues.map(({ name, description }) => ({ value: name, label: description }))
    }
  }, [data])
  return [options, loading]
}
