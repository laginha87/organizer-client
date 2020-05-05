import { FC } from 'react'
import { DocumentNode } from 'graphql'

export interface FCWithFragment<T> extends FC<T> {
  fragments: DocumentNode
}
