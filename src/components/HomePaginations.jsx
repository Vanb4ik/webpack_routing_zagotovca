import React from "react";
import {
    BrowserRouter as Router,
    Route,
    Link
} from 'react-router-dom';

export class HomePaginations extends React.Component{

   render () {

       console.log(this.props.mass);
       console.log(this.state);
       return(
           <div>
              <h2>This is messages application!!</h2>
               <p>Lorem ipsum dolor sit amet.</p>
               <p>Lorem ipsum dolor sit amet.</p>
               <p>Lorem ipsum dolor sit amet.</p>
           </div>

       )
   }
}