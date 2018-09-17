import React from 'react'
import Link from 'gatsby-link'

class Success extends React.Component {
    render() {
        return (
            <container>
            <h2>Message Sent</h2>
                <Link to='/'>Go back to Home</Link>
            </container>
        )
    }
}
export default Success;
