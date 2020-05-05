import React, { ReactElement, useCallback } from 'react'
import { Field, useField } from 'formik'
import { TailwindWidth, tailwindClassNames } from '~styles'
import { SelectOptions } from '~types/InputTypes'

interface Props {
  name: string,
  options: SelectOptions,
  label?: string,
  w?: TailwindWidth,
}

function SelectInput ({ name, label, options, w = 'full' }: Props): ReactElement {
  const [,, { setValue }] = useField(name)
  const handleKeyDown = useCallback(
    (e: KeyboardEvent) => {
      if (e.which >= 49 && e.which <= 51) {
        setValue(options[e.which - 49].value)
      }
    },
    []
  )

  return (
    <div className='w-full'>
      {label && <label htmlFor={name}>{label}</label>}
      <Field name={name}>
        {({ field, meta }) => (
          <div className={tailwindClassNames({ w })}>
            <select onKeyDown={handleKeyDown} {...field} className='border border-teal-100 hover:border-teal-200 focus:border-teal-400 py-2 px-4 w-full outline-none'>
              {options.map(({ value, label }) => <option value={value} key={value}>{label}</option>)}
            </select>
            {meta.touched &&
              meta.error && <div className='error'>{meta.error}</div>}
          </div>
        )}
      </Field>
    </div>
  )
}

export default SelectInput
