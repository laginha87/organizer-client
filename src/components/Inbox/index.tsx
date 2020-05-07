import React from 'react'
import Text from '~components/Common/Text'
import { useQuery } from '@apollo/react-hooks'
import { gql } from 'apollo-boost'
import Task from '~components/Task/Task'
import { getInbox } from '~components/Inbox/__generated__/getInbox'
import BottomBar from '~components/Common/BottomBar'

const getInboxQuery = gql`
  query getInbox {
    inbox {
      ...TaskDetails
    }
  }
  ${Task.fragments}
`

export const InboxPage = () => {
  const { data: tasks, loading } = useQuery<getInbox>(getInboxQuery)
  return (
    <div className='min-h-screen w-screen bg-black'>
      <div className='container bg-white px-16 min-h-screen mx-auto pt-12'>
        <Text.Large>Inbox</Text.Large>

        {!loading && tasks!.inbox.map((task, i) => <Task task={task} key={i} />)}
        <BottomBar />
      </div>
    </div>)
}
