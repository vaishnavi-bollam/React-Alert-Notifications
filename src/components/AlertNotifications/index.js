// Write your code here

import {Component} from 'react'
import {AiFillCheckCircle} from 'react-icons/ai'
import {RiErrorWarningFill} from 'react-icons/ri'
import {MdWarning, MdInfo} from 'react-icons/md'
import {GrFormClose} from 'react-icons/gr'

import Notification from '../Notification/index'

class AlertNotifications extends Component {
  render() {
    return (
      <div>
        <h1>Alert Notifications</h1>
        <Notification>
          <AiFillCheckCircle />
          <h1>Success</h1>
          <p>You can access all the files in the folder</p>
          <GrFormClose />
        </Notification>
        <Notification>
          <RiErrorWarningFill />
          <h1>Error</h1>
          <p>Sorry, you are not authorized to have access to delete the file</p>
          <GrFormClose />
        </Notification>
        <Notification>
          <MdWarning />
          <h1>Warning</h1>
          <p>Viewers of this file can see comments and suggestions</p>
          <GrFormClose />
        </Notification>
        <Notification>
          <MdInfo />
          <h1>Info</h1>
          <p>Anyone on the internet can view these files</p>
          <GrFormClose />
        </Notification>
      </div>
    )
  }
}

export default AlertNotifications
