import React from 'react'
import { FCWithFragment } from '~types/graphql'
import { gql } from 'apollo-boost'
import Text from '~components/Common/Text'
import { TaskDetails } from '~components/Task/__generated__/TaskDetails'
import { TaskStats } from '~components/Task/TaskStats'
import { useHover } from '~hooks/useHover'

const Task: FCWithFragment<{
  task: TaskDetails
}> = ({ task }) => {
  const [containerRef, isHovered] = useHover<HTMLDivElement>()
  const borderColor = isHovered ? 'gray' : 'white'

  return (
    <div className={`pt-4 pl-2 border-l-4 border-${borderColor}`} ref={containerRef}>
      <div className='flex items-start'>
        <div className='w-6 h-6 border-4 border-black mr-3' />
        <div className='pb-8 border-gray border-b-2 flex-grow'>
          <Text mb='2'>{task.title}</Text>
          <TaskStats task={task} />
        </div>
      </div>
    </div>
  )
}

Task.fragments = gql`
  fragment TaskDetails on Task {
          id
    dificulty
    ickyness
    duration
    priority
    title
    description
  }
`
export default Task
