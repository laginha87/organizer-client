import React, { ReactElement, useContext, useCallback, useEffect } from 'react'
import { useHover } from '~hooks/useHover'
import { Option, WithId } from './types'
import { SelectionContext } from './Context'

interface Props {
  item: WithId,
  Option: Option
}

export const OptionWrapper: (props: Props) => ReactElement = ({ item, Option }) => {
  const [containerRef, isHovered] = useHover()
  const { state, dispatch } = useContext(SelectionContext)!
  const isSelected = state.selectedItems.has(item.id)
  const toggleItem = useCallback(
    (e: MouseEvent) => {
      if (isSelected) {
        dispatch({ type: 'REMOVE', item: item.id })
      } else if (e.getModifierState('Meta')) {
        dispatch({ type: 'ADD', item: item.id })
      } else {
        dispatch({ type: 'SET', item: item.id })
      }
    },
    [isSelected]
  )

  useEffect(() => {
    containerRef.current!.addEventListener('mousedown', toggleItem)
    return () => {
      containerRef.current!.removeEventListener('mousedown', toggleItem)
    }
  }, [toggleItem])

  return <Option item={item} containerRef={containerRef} isHovered={isHovered} isSelected={isSelected} />
}
