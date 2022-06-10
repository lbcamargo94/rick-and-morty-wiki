import React, { Suspense } from 'react';
import { Route } from 'react-router-dom';
import { Switch } from 'react-router-dom';

const Home = React.lazy(() => import('../pages/Home'));
const Characters = React.lazy(() => import('../pages/Characters'));
const Locations = React.lazy(() => import('../pages/Locations'));
const Episodes = React.lazy(() => import('../pages/Episodes'));
const Search = React.lazy(() => import('../pages/Search'));

export default function NavigationRoutes() {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <Switch>
        <Route exact path="/" component={Home} />
        <Route path="/characters/:pageId" component={Characters} />
        <Route path="/locations/:pageId" component={Locations} />
        <Route path="/episodes/:pageId" component={Episodes} />
        <Route path="/search" component={Search} />
      </Switch>
    </Suspense>
  );
}
