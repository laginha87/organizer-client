import React, { FC } from 'react'

export const HorizontalList: FC<{ children: React.ReactElement[] }> = ({ children }) => {
  return (
    <div className='flex -ml-2'>
      {children.map((e, i) => <div className='ml-2' key={i}>{e}</div>)}
    </div>)
}
