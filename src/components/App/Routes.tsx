import React from 'react'
import { NewTaskPage } from '~components/Task/NewTask'
import { Route } from 'react-router-dom'
import { InboxPage } from '~components/Inbox'
import { Scratch } from '~components/Scratch'

export const Routes = () => (
  <>
    <Route path='/' component={NewTaskPage} exact />
    <Route path='/inbox' component={InboxPage} exact />
    <Route path='/scratch' component={Scratch} exact />
  </>)
