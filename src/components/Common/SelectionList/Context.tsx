import { createContext, Dispatch } from 'react'
import { SelectionListState, SelectionListAction } from './SelectionListReducer'

export const SelectionContext = createContext<{ state: SelectionListState, dispatch: Dispatch<SelectionListAction> } | null>(null)
