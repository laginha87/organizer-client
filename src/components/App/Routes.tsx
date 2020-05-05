import React from 'react'
import { NewTaskPage } from '~components/Task/NewTask'
import { Route } from 'react-router-dom'
import { InboxPage } from '~components/Inbox'

export const Routes = () => (
  <>
    <Route path='/' component={NewTaskPage} exact />
    <Route path='/inbox' component={InboxPage} exact />
  </>)
