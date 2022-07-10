import { PublicRoute } from '../Components'
import React, { Suspense, lazy } from 'react'
import { Switch } from 'react-router-dom'

import LoadingScreen from 'Modules/loading'

//screen
const WikiCollection = lazy(() => import('Modules/wiki_collection'))
const DillDown = lazy(() => import('Modules/drill_down'))
const SignUp = lazy(() => import('Modules/sign_up'))
const SignIn = lazy(() => import('Modules/sign_in'))

export default function AppRoutes() {

  return (
    <Suspense fallback={<LoadingScreen />}>
      <Switch>
        <PublicRoute exact path="/" component={WikiCollection} />
        <PublicRoute exact path="/drill-down" component={DillDown} />
        <PublicRoute exact path="/sign-up" component={SignUp} />
        <PublicRoute exact path="/sign-in" component={SignIn} />
      </Switch>
    </Suspense>
  )
}
