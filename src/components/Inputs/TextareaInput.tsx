import React, { ReactElement } from 'react'
import { Field } from 'formik'
import { TailwindWidth, tailwindClassNames } from '~styles'

interface Props {
  name: string
  label?: string
  placeholder?: string,
  w?: TailwindWidth,
}

function TextareaInput ({ name, label, placeholder, w = 'full' }: Props): ReactElement {
  return (
    <div className='w-full'>
      {label && <label htmlFor={name}>{label}</label>}
      <Field name={name}>
        {({ field, meta }) => (
          <div className={tailwindClassNames({ w })}>
            <textarea
              type='text' {...field} className='border border-teal-100 hover:border-teal-200 focus:border-teal-400 py-2 px-4 w-full outline-none'
              placeholder={placeholder}
            />
            {meta.touched &&
              meta.error && <div className='error'>{meta.error}</div>}
          </div>
        )}
      </Field>
    </div>
  )
}

export default TextareaInput
