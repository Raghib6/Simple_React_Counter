import 'bootstrap/dist/css/bootstrap.css'
import React, { Component } from 'react'
import styles from './Counter.module.css'


export default class Counter extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
             count : 0
        }
    }

    increaseCount = () =>{
        this.setState({
            count : this.state.count + 1
        })
    }

    decreaseCount = () =>{
        this.setState({
            count : this.state.count - 1
        })
    }

    resetCount = () =>{
        this.setState({
            count : 0
        })
    }

    
    render() {
        return (
            <>
                <h1>Simple Counter</h1><br/>
                <button onClick={this.resetCount}>Reset</button>
                <div className={styles.mycontainer}>
                    <button onClick={this.decreaseCount} className='btn btn-danger mr-4'>-</button>
                    <span><h1>{this.state.count}</h1></span>
                    <button onClick={this.increaseCount} className='btn btn-success ml-4'>+</button>
                </div>
                
            </>
            
        )
    }
}
