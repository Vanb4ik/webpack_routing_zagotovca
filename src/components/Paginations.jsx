import React from 'react';

export class Paginations extends React.Component {

    setActiveClass(){
        return (this.props.activePage==this.props.children+1?"active":"")
    }
    render() {
        const {children,onClick} = this.props;
        return (
            <li  className={`${this.setActiveClass()}`}>
                <a onClick={onClick}>{children+1}</a>
            </li>
        )
    }
}

