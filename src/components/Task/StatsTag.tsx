import React from 'react'
import { SmallSelect } from '~components/Inputs/SmallSelect'

export const StatsTag = ({ tag, tags }) => {
  const index = tags.findIndex(({ value }) => value === tag)
  if (index === 1) {
    return null
  }

  // const attrs = index === 2 ? { bold: true } : { light: true }
  return <SmallSelect value={tag} options={tags} />
}
