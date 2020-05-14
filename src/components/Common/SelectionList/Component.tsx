import React, { useReducer, FC } from 'react'
import { SelectionContext } from './Context'
import { OptionWrapper } from './Option'
import { getInitialState, SelectionListReducer } from './SelectionListReducer'
import { Option, WithId } from './types'
interface Props {
  options: WithId[],
  Option: Option
}

export const SelectionList: FC<Props> & { Context: FC } = ({ Option, options }) => {
  return <>{options.map((item, i) => <OptionWrapper item={item} key={i} Option={Option} />)}</>
}

const Context: FC = ({ children }) => {
  const [state, dispatch] = useReducer(SelectionListReducer, getInitialState())
  return (
    <SelectionContext.Provider value={{ state, dispatch }}>
      {children}
    </SelectionContext.Provider>)
}

SelectionList.Context = Context
