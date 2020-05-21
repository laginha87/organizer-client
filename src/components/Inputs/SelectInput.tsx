import React, { ReactElement, useCallback } from 'react'
import { Field, useField } from 'formik'
import { SelectOptions } from '~types/InputTypes'

interface Props {
  name: string,
  options: SelectOptions,
  label?: string,
  includeBlankOption?: boolean,
}

function SelectInput ({ name, label, options }: Props): ReactElement {
  const [, , { setValue }] = useField(name)
  const handleKeyDown = useCallback(
    (e: KeyboardEvent) => {
      if (e.which >= 49 && e.which <= 51) {
        setValue(options[e.which - 49].value)
      }
    },
    []
  )

  return (
    <div className='w-full' data-testid={`select-${name}`}>
      <div>{label && <label htmlFor={name}>{label}</label>}</div>
      <div>
        <Field name={name}>
          {({ field, meta }) => (
            <>
              <select onKeyDown={handleKeyDown} className='text-black' {...field}>
                <option />
                {options.map(({ value, label }) => <option value={value} key={value}>{label}</option>)}
              </select>
              {meta.touched &&
                meta.error && <div className='error'>{meta.error}</div>}
            </>
          )}
        </Field>
      </div>
    </div>
  )
}

export default SelectInput
