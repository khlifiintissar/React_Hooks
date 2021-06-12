import React from 'react'
import Description from './Description'
import App from '../App'
import { Route } from 'react-router'

function Router() {
    return (
            <div>
                <Route exact path="/"  component={App}/>
                <Route path="/description/:title" component={Description}/>
            </div>
    )
}

export default Router 
