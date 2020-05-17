import React, { useCallback, useState } from 'react'
import classNames from 'classnames'
import { SelectOptions } from '~types/InputTypes'

export interface Props {
  tabIndex?: number,
  options: SelectOptions,
  onChange?: (any) => void,
  value: any,
  theme?: 'primary' | 'inverted',
  placeholder?: string
}

interface ThemeStruct {
  item: string,
  select: string,
  container: string,
}

const THEMES: { [k: string]: ThemeStruct } = {
  primary: {
    item: 'bg-white text-black hover:bg-black hover:text-white',
    select: 'bg-white text-black border-black',
    container: 'border-black'
  },
  inverted: {
    item: '',
    select: 'bg-black text-white border-white',
    container: ''
  }
}

export const SmallSelect = ({ tabIndex = 0, options, placeholder, onChange = () => { }, value: passedValue, theme = 'primary' }: Props) => {
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

  const themeStruct = THEMES[theme]

  return (
    <div tabIndex={tabIndex} className='relative outline-none inline-block'>
      <div onClick={setToggle} className={classNames('border cursor-pointer p-2 hover:underline', themeStruct.select)}>
        {value || placeholder}
      </div>
      {
        isOpen &&
          <div className={classNames('border-black border absolute top-0 left-0 bg-white', themeStruct.container)}>
            {options.map((e, i) => <SmallSelectOption option={e} theme={themeStruct} key={i} current={value} onClick={handleChange} />)}
          </div>
      }
    </div>
  )
}

const SmallSelectOption = ({ option, current, onClick, theme }) => {
  const handleClick = useCallback(
    () => {
      onClick(option.value)
    },
    [option]
  )
  return (
    <div className={classNames('hover:text-white hover:bg-black p-2 cursor-pointer select-none', theme.item, { underline: current === option.value })} onClick={handleClick}>
      {option.value}
    </div>
  )
}
