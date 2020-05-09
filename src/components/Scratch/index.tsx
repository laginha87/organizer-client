import { SmallSelect } from '~components/Inputs/SmallSelect'
import React from 'react'
import { SelectionList } from '~components/Common/SelectionList'

export const Scratch = () => {
  return (
    <div className='container mx-auto p-8'>
      <SmallSelect options={[{ value: 'easy', label: 'easy' }, { value: 'hard', label: 'hard' }]} value='easy' />

      <SelectionList
        options={[{ id: '1' }, { id: '2' }, { id: '3' }, { id: '4' }]}
        Option={({ containerRef, item, isHovered, isSelected }) => <div ref={containerRef}>{item.id} {isHovered && 'hovered'} {isSelected && 'selected'} </div>}
      />
    </div>
  )
}
