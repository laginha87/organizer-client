import React from 'react'
import Text from '~components/Common/Text'

export const StatsTag = ({ tag, tags }) => {
  const index = tags.findIndex(({ value }) => value === tag)
  if (index === 1) {
    return null
  }

  const attrs = index === 2 ? { bold: true } : { light: true }
  return <Text.Small ml='2' {...attrs}>{tag}</Text.Small>
}
