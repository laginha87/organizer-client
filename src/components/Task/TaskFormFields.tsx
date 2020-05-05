import React, { FC } from 'react'
import SelectInput from '~components/Inputs/SelectInput'
import TextareaInput from '~components/Inputs/TextareaInput'
import TextInput from '~components/Inputs/TextInput'
import { SelectOptions } from '~types/InputTypes'

export interface TaskFormValues {
  title: string,
  description: string,
  priority: string,
  ickyness: string,
  duration: string,
  dificulty: string,
}

export interface TaskFormFieldsProps {
  priorities: SelectOptions,
  ickynesses: SelectOptions,
  durations: SelectOptions,
  dificulties: SelectOptions,
}

export const TaskFormFields: FC<TaskFormFieldsProps> = ({
  priorities,
  ickynesses,
  durations,
  dificulties
}) => {
  return (
    <>
      <TextInput name='title' placeholder='Write up your task...' />
      <TextareaInput name='description' />
      <div className='flex'>
        <SelectInput options={priorities} name='priority' w='1/2' />
        <SelectInput options={ickynesses} name='ickyness' w='1/2' />
      </div>
      <div className='flex'>
        <SelectInput options={durations} name='duration' w='1/2' />
        <SelectInput options={dificulties} name='dificulty' w='1/2' />
      </div>
    </>
  )
}
