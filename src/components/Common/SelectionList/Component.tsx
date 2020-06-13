import { useReducer, FC, useContext } from 'react'
import { SelectionContext } from './Context'
import { OptionWrapper } from './Option'
import { getInitialState, SelectionListReducer } from './SelectionListReducer'
import { Option, WithId } from './types'
interface Props {
  Option: Option
}

interface ContextProps {
  options: WithId[],
}

export const SelectionList: FC<Props> & { Context: FC<ContextProps> } = ({ Option }) => {
  const { state: { options } } = useContext(SelectionContext)
  return <>{options.map((item, i) => <OptionWrapper item={item} key={i} Option={Option} />)}</>
}

const Context: FC<ContextProps> = ({ children, options }) => {
  const [state, dispatch] = useReducer(SelectionListReducer, getInitialState(options))
  return (
    <SelectionContext.Provider value={{ state, dispatch }}>
      {children}
    </SelectionContext.Provider>)
}

SelectionList.Context = Context
