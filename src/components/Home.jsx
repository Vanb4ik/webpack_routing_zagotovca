import React from "react";
import {AutorPrevey} from "./AutorPrevey";
import {HomePaginations} from "./HomePaginations"


export class Home extends React.Component{
    constructor(props) {
        super(props);
        this.state = {
            articlesArray:[],        //масив статів
            pageArray:[],            //масив сторінок
            totalPages:0,       //загальна кількість сторінок
            currentPage:1,      //поточна група сторінок
            numberOfTime:5      //кількість елементів на сторінці
        };

    }

    componentDidMount(){
        fetch(`http://localhost:8081/api/users/
        ${this.state.currentPage}/${this.state.numberOfTime}`)
            .then(response => response.json())
            .then(response=>{
                console.log(response);
                this.setState({
                    articlesArray:response.data,
                    totalPages:response.totalPages
                });
                var pageNumbers=[];
                for(let i=0;i<this.state.totalPages;i++){
                    pageNumbers.push(i);
                }
                this.setState({pageArray:pageNumbers});
            })
            .catch(function(err) {
                console.log('Fetch Error :-S', err);
            });

    }
    componentDidUpdate(){

    }

    sowFullContent(massages){
        console.log(`/messages/${massages.id}`);
        this.props.history.push(`/messages/${massages.id}`);
    }

    render(){
        const {articlesArray,pageArray} = this.state;
        return(
            <div className="list-group">
                <div >{
                    articlesArray.map(massages=>{
                        return(
                            <AutorPrevey
                                onClick={this.sowFullContent.bind(this,massages)}
                                key = {massages.id}
                                id={massages.id}
                                shortInfo = {massages.shortInfo}
                                fullName = {massages.fullName}
                            />
                        )
                    })
                }
                </div>
                <div>{
                    <ul className="pagination">
                        <li><a href="#">1</a></li>
                        <li><a href="#">2</a></li>
                        <li><a href="#">3</a></li>
                        <li><a href="#">4</a></li>
                        <li><a href="#">5</a></li>
                    </ul>
                }
                </div>
            </div>

        )
    }

}