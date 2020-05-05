import React from 'react'
import { useTaskEnums } from '~components/Task/useTaskEnums'
import { Loading } from '~components/Common/Loading'
import { StatsTag } from '~components/Task/StatsTag'
import { TaskDetails } from '~components/Task/__generated__/TaskDetails'

interface Props {
  task: TaskDetails
}

export const TaskStats = ({
  task: {
    ickyness,
    duration,
    priority,
    dificulty
  }
}: Props) => {
  const { ickynesses, dificulties, durations, priorities, isLoading } = useTaskEnums()

  return (
    <Loading
      size='small' component={() =>
        <div className='flex -ml-2'>
          {
            [
              [ickyness, ickynesses],
              [duration, durations],
              [priority, priorities],
              [dificulty, dificulties]
            ].map(([tag, tags], i) => (<StatsTag tag={tag} key={i} tags={tags} />))
          }
        </div>} loading={isLoading}
    />
  )
}
