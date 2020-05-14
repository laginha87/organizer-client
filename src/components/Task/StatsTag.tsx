import React, { FC } from 'react'
import Text from '~components/Common/Text'
import { SelectOptions } from '~types/InputTypes'
import { Dificulty, Priority, Duration, Ickyness } from '__generated__/globalTypes'

export const StatsTag : FC<{ tag: Ickyness | Duration | Priority | Dificulty, tags: SelectOptions }> = ({ tag, tags }) => {
  const index = tags.findIndex(({ value }) => value === tag)
  if (index === 1) {
    return null
  }

  const attrs = index === 2 ? { bold: true } : { light: true }
  return <Text.Small {...attrs}>{tag}</Text.Small>
}
