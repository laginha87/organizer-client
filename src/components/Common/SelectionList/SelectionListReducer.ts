import { Set } from 'immutable'
import { WithId } from '~components/Common/SelectionList/types'

export type SelectionListState = {
  selectedItems: Set<string>,
  options: WithId[],
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

export const getInitialState: (options: WithId[]) => SelectionListState = (options) => ({
  selectedItems: Set<string>(),
  options
})

export const SelectionListReducer: React.Reducer<SelectionListState, SelectionListAction> = (state, action) => {
  switch (action.type) {
    case 'ADD':
      return { ...state, selectedItems: state.selectedItems.add(action.item) }
    case 'REMOVE':
      return { ...state, selectedItems: state.selectedItems.remove(action.item) }
    case 'SET':
      return { ...state, selectedItems: Set([action.item]) }
  }
}
