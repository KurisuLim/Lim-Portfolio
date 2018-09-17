import React from 'react';
import Link from 'gatsby-link';

class Counter extends React.Component {
    constructor(){
        super()
        this.state ={
            count: 0
        }

        this.addClick = this.addClick.bind(this);
        this.minusClick = this.minusClick.bind(this);
    }

    addClick(){
        //alert('Hello World')
        this.setState(prevState => ({
            count: prevState.count + 1,
        }))
    }

    minusClick(){
        this.setState(prevState => ({
            count: prevState.count - 1,
        }))
    }
    render(){
        return (
            <div>
                <h1>Counter</h1>
                <p>counter count: {this.state.count}</p>
                <button
                onClick={this.addClick}>
                Plus
                </button>
                <button
                onClick={this.minusClick}>
                Minus
                </button>
                <div>
                <br />
                    <Link to='/'>Go back to Home</Link>
                </div>
            </div>
        )
    }
}
export default Counter;