import React, { Component } from 'react'

export default class Cart extends Component {
  

    // constructor(props){
    //     this.currentRef=React.createRef();
    // }
    state = {
        like: 1
    }
    handleLike = () => {
        this.setState({
            like: this.state.like + 1
        })
    }
    render() {
        return (
            <div className='card'>
                <img src="https://i.pravatar.cc?u=2" alt="..." />
                <div className='card-body'>
                    <h3>usename</h3>
                    <p>age:90</p>
                    <div>
                        {this.state.like} <i onClick={()=>{
                            this.handleLike();
                        }} style={{cursor:'pointer'}} className='fa fa-heart text-danger display=4'></i>
                    </div>
                </div>
            </div>
        )
    }
}
