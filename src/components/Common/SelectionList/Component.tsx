import React, { ReactElement, useReducer } from 'react';
import { SelectionContext } from './Context';
import { OptionWrapper } from './Option';
import { getInitialState, SelectionListReducer } from './SelectionListReducer';
import { Option, WithId } from './types';
interface Props {
  options: WithId[],
  Option: Option
}

export const SelectionList: (props: Props) => ReactElement = ({ Option, options }) => {
  const [state, dispatch] = useReducer(SelectionListReducer, getInitialState())

  return (
    <SelectionContext.Provider value={{ state, dispatch }}>
      {options.map((item, i) => <OptionWrapper item={item} key={i} Option={Option} />)}
    </SelectionContext.Provider>
  )
}