import React, { useCallback } from 'react'
import { SmallSelect } from '~components/Inputs/SmallSelect'
import { SelectOptions } from '~types/InputTypes'
import { useFormikContext } from 'formik'

interface Props {
  options: SelectOptions
  name: string
}

const FormikSmallSelect = ({ options, name }: Props) => {
  const { setFieldValue, values } = useFormikContext()

  const handleChange = useCallback(
    (value) => {
      setFieldValue(name, value)
    },
    [name]
  )
  return (
    <SmallSelect options={options} value={values[name]} onChange={handleChange} />
  )
}

export default FormikSmallSelect
