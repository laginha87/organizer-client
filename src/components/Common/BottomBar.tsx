import { FC } from 'react'

interface Props {

}

const BottomBar: FC<Props> = ({ children }) => {
  return (
    <div className='w-full fixed left-0 bottom-0 px-16' data-testId='bottom-bar'>
      <div className='bg-black mx-16 text-white px-8 py-8'>
        {children}
      </div>
    </div>
  )
}

export default BottomBar
