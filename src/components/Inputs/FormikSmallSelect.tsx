import React, { useCallback } from 'react'
import { SmallSelect, Props as SmallSelectProps } from '~components/Inputs/SmallSelect'
import { useFormikContext } from 'formik'

interface Props extends Omit<SmallSelectProps, 'value'> {
  name: string
}

const FormikSmallSelect = ({ options, name, ...rest }: Props) => {
  const { setFieldValue, values } = useFormikContext()

  const handleChange = useCallback(
    (value) => {
      setFieldValue(name, value)
    },
    [name]
  )
  return (
    <SmallSelect options={options} value={values[name]} onChange={handleChange} {...rest} />
  )
}

export default FormikSmallSelect
