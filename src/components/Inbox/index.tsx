import { useQuery } from '@apollo/react-hooks'
import { gql } from 'apollo-boost'
import React from 'react'
import BottomBar from '~components/Common/BottomBar'
import { SelectionList } from '~components/Common/SelectionList'
import { useSelectedContext } from '~components/Common/SelectionList/Context'
import Text from '~components/Common/Text'
import { getInbox, getInbox_inbox as InboxType } from '~components/Inbox/__generated__/getInbox'
import { EditTasks } from '~components/Task/EditTasks'
import Task from '~components/Task/Task'

const getInboxQuery = gql`
  query getInbox {
    inbox {
      ...TaskDetails
    }
    projects {
      name,
      id
    }
  }
  ${Task.fragments}
`

const InboxTasks = ({ projects }) => {
  const { selectedItems } = useSelectedContext<InboxType[]>()
  return (
    <>
      <SelectionList
        Option={Task}
      />
      <BottomBar><EditTasks tasks={selectedItems as any} projects={projects} /></BottomBar>
    </>)
}

export const InboxPage = () => {
  const { data, loading } = useQuery<getInbox>(getInboxQuery)
  return (
    <div className='min-h-screen w-screen bg-black'>
      <div className='container bg-white px-16 min-h-screen mx-auto pt-12'>
        <Text.Large>Inbox</Text.Large>
        {!loading &&
          <SelectionList.Context options={data!.inbox}>
            <InboxTasks projects={data!.projects} />
          </SelectionList.Context>}
      </div>
    </div>)
}
