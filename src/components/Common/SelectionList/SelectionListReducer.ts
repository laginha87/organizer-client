import { Set } from 'immutable'

export type SelectionListState = {
  selectedItems: Set<string>,
}

export type SelectionListAction = ADD | REMOVE | SET

type ADD = {
  type: 'ADD',
  item: string
};

type REMOVE = {
  type: 'REMOVE',
  item: string
};

type SET = {
  type: 'SET',
  item: string
};

export const getInitialState: () => SelectionListState = () => ({
  selectedItems: Set<string>()
})

export const SelectionListReducer: React.Reducer<SelectionListState, SelectionListAction> = (state, action) => {
  switch (action.type) {
    case 'ADD':
      return { ...state, selectedItems: state.selectedItems.add(action.item) }
    case 'REMOVE':
      return { ...state, selectedItems: state.selectedItems.remove(action.item) }
    case 'SET':
      return { ...state, selectedItems: Set([action.item]) }
    default:
      return state
  }
}
