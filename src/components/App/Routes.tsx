
import { Route } from 'react-router-dom'
import { InboxPage } from '~components/Inbox'
import NewProject from '~components/Project/NewProject'

export const Routes = () => (
  <>
    <Route path='/' component={InboxPage} exact />
    <Route path='/projects/new' component={NewProject} exact />
  </>)
