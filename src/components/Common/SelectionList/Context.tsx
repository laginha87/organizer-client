import { createContext, Dispatch, useContext } from 'react'
import { SelectionListState, SelectionListAction } from './SelectionListReducer'
import { WithId } from '~components/Common/SelectionList/types'

export const SelectionContext = createContext<{ state: SelectionListState, dispatch: Dispatch<SelectionListAction> }>(null as any)

export const useSelectedContext = <T extends WithId[]>() => {
  const { state: { options, selectedItems } } = useContext(SelectionContext)!
  return {
    selectedItems: options.filter((e) => selectedItems.has(e.id!)) as T
  }
}
