import React from "react";
import "react-dom";


export class Message extends React.Component{
    constructor(props) {
        super(props);
        this.state = {
            mass:[]
        };
    }

    componentDidMount() {
        return fetch('http://localhost:8081/api/users/1/10')
            .then(response => response.json())
            .then(response=>{
                this.setState({mass:response.data});
                // this.setFullInfo();
                // console.log("getInitialContent +");
            })
            .catch(function(err) {
                console.log('Fetch Error :-S', err);
            });
    }

    setFullInfo(){
        var messId = this.props.match.params.id;
        // console.dir("setFullInfo +");
        console.log(messId,"- messId");
        // console.log(this.state.mass);

        for(let i=0;i<this.state.mass.length;i++){

            if (this.state.mass[i].id==messId){
                return this.state.mass[i].fullInfo;
            }
        }
        return <h3>:-\</h3>
    };

    render () {

        return(
            <div>{this.setFullInfo()}</div>
        )
    }
}