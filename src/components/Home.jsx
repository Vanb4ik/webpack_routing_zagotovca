import React from "react";
import {
    BrowserRouter as Router,
    Route,
    Link
} from 'react-router-dom';
import {AutorPrevey} from "./AutorPrevey";
import {Paginations} from "./Paginations";

export class Home extends React.Component{
    constructor(props) {
        super(props);
        this.state = {
            activePage:1,
            articlesArray:[],       //масив статів
            pageArray:[],           //масив сторінок
            totalPages:0,           //загальна кількість сторінок
            currentPage:1,          //поточна група сторінок
            numberOfTime:5          //кількість елементів на сторінці
        };
    }
    get() {
        const requestURL = `http://localhost:8081/api/users/${this.state.currentPage}/${this.state.numberOfTime}`;
        fetch(requestURL)
            .then(response => response.json())
            .then(response=>{
                console.log(response);
                var pageNumbers=[];
                for(let i=0;i< response.totalPages;i++){
                    pageNumbers.push(i);
                }

                this.setState({
                    articlesArray:response.data,
                    totalPages:response.totalPages,
                    pageArray:pageNumbers
                });
            })
            .catch(function(err) {
                console.log('Fetch Error :-S', err);
            });
    }
    componentDidMount(){
        this.get();
    }


    sowActivePage(num){
        this.setState({currentPage:num,activePage:num}, () => {
            console.log(this.state.currentPage+"-currentPage");
            console.log(num+"num");
            this.get();
        });
    }

    sowFullContent(massages){
        console.log(`/messages/${massages.id}`);
        this.props.history.push(`/messages/${massages.id}`);
    }

    render(){
        const {articlesArray,pageArray,activePage} = this.state;
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
                <div>
                    <ul className="pagination">
                        {
                            pageArray.map(mass=>{
                             return (
                                 <Paginations
                                     key={mass}
                                     activePage={activePage}
                                     onClick={this.sowActivePage.bind(this,mass+1)}>
                                     {mass}
                                 </Paginations>
                             )
                         })
                        }

                    </ul>
                </div>
            </div>

        )
    }

}