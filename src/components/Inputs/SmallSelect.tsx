import React, { useCallback, useState } from 'react'
import classNames from 'classnames'
import { SelectOptions } from '~types/InputTypes'

interface Props {
  tabIndex?: number,
  options: SelectOptions,
  onChange?: (any) => void,
  value: any
}
export const SmallSelect = ({ tabIndex = 0, options, onChange = () => { }, value: passedValue }: Props) => {
  const [isOpen, setIsOpen] = useState(false)

  const [value, setValue] = useState(passedValue)

  const setToggle = useCallback(
    () => {
      setIsOpen(true)
    },
    []
  )

  const handleChange = useCallback(
    (value) => {
      onChange(value)
      setValue(value)
      setIsOpen(false)
    },
    []
  )

  return (
    <div tabIndex={tabIndex} className='relative outline-none inline-block'>
      <div onClick={setToggle} className='border border-white cursor-pointer p-2 hover:underline'>
        {value}
      </div>
      {
        isOpen &&
          <div className='border-black border absolute top-0 left-0 bg-white'>
            {options.map((e, i) => <SmallSelectOption option={e} key={i} current={value} onClick={handleChange} />)}
          </div>
      }
    </div>
  )
}

const SmallSelectOption = ({ option, current, onClick }) => {
  const handleClick = useCallback(
    () => {
      onClick(option.value)
    },
    [option]
  )
  return (
    <div className={classNames('hover:text-white hover:bg-black p-2 cursor-pointer select-none', { underline: current === option.value })} onClick={handleClick}>
      {option.value}
    </div>
  )
}
