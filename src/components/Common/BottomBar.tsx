import React, { FC } from 'react'

interface Props {

}

const BottomBar: FC<Props> = ({ children }) => {
  return (
    <div className='w-full fixed left-0 bottom-0 px-16'>
      <div className='bg-black h-12 mx-16 text-white'>
        {children}
      </div>
    </div>
  )
}

export default BottomBar
