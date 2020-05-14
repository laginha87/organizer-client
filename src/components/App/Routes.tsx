import React from 'react'
import { Route } from 'react-router-dom'
import { InboxPage } from '~components/Inbox'
import { Scratch } from '~components/Scratch'

export const Routes = () => (
  <>
    <Route path='/scratch' component={Scratch} exact />
    <Route path='/' component={InboxPage} exact />
  </>)
