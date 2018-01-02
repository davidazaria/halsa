import React from 'react'
import { Switch, Route } from 'react-router-dom';
import Landing from './Landing';
import test from './test';
import Form from './Form';


const Routes = () => (
  <main>
    <Switch>
      <Route exact path='/' component={Landing}/>

      <Route path='/Form' component={Form}/>

           <Route path='/test' component={test}/>

    </Switch>
  </main>
)

export default Routes;
