/* eslint-env jest */
import { Set } from 'immutable'

import { SelectionListReducer, getInitialState } from './SelectionListReducer'

describe('SelectionListReducer', () => {
  it('canAdd', () => {
    expect(SelectionListReducer(getInitialState(), { type: 'ADD', item: '1' })).toEqual({ selectedItems: Set(['1']) })
  })

  it('canRemove', () => {
    const initialState = getInitialState()
    initialState.selectedItems = Set(['1', '2'])
    expect(SelectionListReducer(initialState, { type: 'REMOVE', item: '2' })).toEqual({ selectedItems: Set(['1']) })
  })

  it('canSet', () => {
    const initialState = getInitialState()
    initialState.selectedItems = Set(['1', '2'])
    expect(SelectionListReducer(initialState, { type: 'SET', item: '3' })).toEqual({ selectedItems: Set(['3']) })
  })
})