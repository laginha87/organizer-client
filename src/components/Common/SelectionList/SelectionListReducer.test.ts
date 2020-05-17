/* eslint-env jest */
import { Set } from 'immutable'

import { SelectionListReducer, getInitialState } from './SelectionListReducer'

const ITEMS = [{ id: '1' }, { id: '2' }, { id: '3' }]

const expectSelectedItems = (initialState, operation) => {
  const state = SelectionListReducer(initialState, operation)
  return expect(state.selectedItems)
}

const getTestInitialState = () => {
  return getInitialState(ITEMS)
}

describe('SelectionListReducer', () => {
  it('canAdd', () => {
    expectSelectedItems(getTestInitialState(), { type: 'ADD', item: '1' }).toEqual(Set(['1']))
  })

  it('canRemove', () => {
    const initialState = getTestInitialState()
    initialState.selectedItems = Set(['1', '2'])

    expectSelectedItems(initialState, { type: 'REMOVE', item: '2' }).toEqual(Set(['1']))
  })

  it('canSet', () => {
    const initialState = getTestInitialState()
    initialState.selectedItems = Set(['1', '2'])
    expectSelectedItems(initialState, { type: 'SET', item: '3' }).toEqual(Set(['3']))
  })
})
