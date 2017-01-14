import React from 'react'

export const Login = ({ login }) => (
  <div>
    <a href="/api/auth/twitter">Sign in with Twitter</a>
  </div>
)

import {login} from 'APP/app/reducers/auth'
import {connect} from 'react-redux'

export default connect (
  state => ({}),
  {login},
) (Login)
