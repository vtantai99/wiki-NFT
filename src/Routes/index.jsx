import { PublicRoute, PrivateRoute, StrictRoute, CustomRoute } from '../Components'
import React, { Suspense, lazy } from 'react'
import { useDispatch } from 'react-redux'
import { Switch, Route, Redirect } from 'react-router-dom'

import { useInjectReducer } from 'Stores'
import { checkNetwork } from './store/actions'

import reducer from './store/reducer'
import LoadingScreen from 'Modules/loading'
import WikiCollection from 'Modules/wiki_collection'

//screen
const HomeScreen = lazy(() => import('Modules/home'))
const AboutScreen = lazy(() => import('Modules/about'))
const CollectionDetailScreen = lazy(() => import('Modules/collection_detail'))

export default function AppRoutes({ isOnline = true }) {
  // useInjectReducer({ key: 'globalStore', reducer })
  const dispatch = useDispatch()

  // useEffect(async () => {
  //     dispatch(checkNetwork(isOnline))
  // }, [isOnline])

  return (
    <Suspense fallback={<LoadingScreen />}>
      <Switch>
        <CustomRoute exact path="/loading" component={LoadingScreen} />
        {/* <PublicRoute exact path="/" component={HomeScreen} /> */}
        <PublicRoute exact path="/" component={WikiCollection} />
        <PublicRoute exact path="/about-us" component={AboutScreen} />
        <PublicRoute exact path="/collection-detail" component={CollectionDetailScreen} />
      </Switch>
    </Suspense>
  )
}
