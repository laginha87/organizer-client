import { SmallSelect } from '~components/Inputs/SmallSelect'
import React from 'react'

export const Scratch = () => {
  return (
    <div className='container mx-auto p-8'>
      <SmallSelect options={[{ value: 'easy', label: 'easy' }, { value: 'hard', label: 'hard' }]} value='easy' />
    </div>
  )
}
