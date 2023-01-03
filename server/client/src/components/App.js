import React, { useEffect } from 'react'
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import { connect, Connect } from 'react-redux';
import * as actions from '../actions'
import Header from './Header';
import Landing from './Landing';
import Dashboard from './Dashboard';
import SurveyNew from './surveys/SurveyNew';

const App = ({ fetchUser }) => {

  useEffect(() => {
   fetchUser()
  }, [])

  return (
    <div>
        <BrowserRouter>
           <div>
                <Header />
                <Route exact path='/' component={Landing} />
                <Route exact path='/surveys' component={Dashboard} />
                <Route path='/surveys/new' component={SurveyNew} />
           </div>
        </BrowserRouter>
    </div>
  )
}

export default connect(null, actions)(App)