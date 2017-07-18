import React from 'react';

export class Paginations extends React.Component {



    handleOnClick(pageNum) {
        this.props.onClick(pageNum);
    };

    previousPage(){
        if (this.props.activePage>1){
            this.props.onClick(this.props.activePage-1);
        }
        // console.log(this.props.activePage>1)
    };
    nextPage(){
        if (this.props.activePage<this.props.totalPages){
            this.props.onClick(this.props.activePage+1);
        }
        // console.log(this.props.totalPages<1)
    };

    render() {
        const {activePage,pageArray} = this.props;
        return (
            <ul className="pagination">
                {
                    <li onClick={this.previousPage.bind(this)}>
                        <a>
                            <i className="glyphicon glyphicon-chevron-left"></i>
                        </a>
                    </li>
                }
                {
                    pageArray.map(mass=>{
                        const pageNum = mass+1;

                        return (
                            <li className={`${(activePage==mass+1)?"active":""}`}
                                key={mass}
                                onClick={this.handleOnClick.bind(this, pageNum)}>
                                <a>{pageNum}</a>
                            </li>
                        )
                    })
                }
                {
                    <li onClick={this.nextPage.bind(this)}>
                        <a>
                            <i className="glyphicon glyphicon-chevron-right"></i>
                        </a>
                    </li>
                }
            </ul>
        )
    }
}

