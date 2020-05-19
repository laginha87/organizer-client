import React from 'react'
import { Route } from 'react-router-dom'
import { InboxPage } from '~components/Inbox'

export const Routes = () => (
  <>
    <Route path='/' component={InboxPage} exact />
  </>)
