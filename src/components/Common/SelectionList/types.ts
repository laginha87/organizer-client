import { RefObject, FC } from 'react'

export type WithId = {
  id: string
}

export type Option = FC<{
  item: WithId,
  isSelected?: boolean,
  isHovered?: boolean,
  containerRef: RefObject<HTMLElement>
}>
