
import React from 'react'
import {
    BrowserRouter as Router,
    Route,
    Link,
    Switch
} from 'react-router-dom';

import {Header} from "./Header";
import {Home} from "./Home";
import {Message} from "./Message";

class RouteConfigExample extends React.Component{

    render() {
        return (
            <Router>
                <div>
                    <Header/>
                    <div className="container">
                        <Route exact path="/" component={Home}/>
                        {/*<Route exact path="/:num" component={Home}/>*/}
                        <Route exact path="/messages/:id" component={Message}/>
                    </div>
                </div>
            </Router>
        )
    }
}


export default RouteConfigExample;
