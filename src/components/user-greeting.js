import React, { Component } from 'react'

export class UserGreeting extends Component {
    constructor(props) {
        super(props);
        this.state = {
            isLogged: false
        }
    }
  render() {

    //short-circuit approach

    return this.state.isLogged && <div>Welcome Prudhvi</div>

    // Ternary approach
    // return this.state.isLogged?
    // <div>Welcome Prudhvi</div>:
    // <div>Welcome User</div>

    //variable approach

    // let message
    // if(this.state.isLogged) {
    //     message = <div> Welcome Prudhvi</div>
    // }
    // else {
    //     message = <div>Welcome User</div>
    // }
    // return <div>{message}</div>

    //if-else approach
    // if(this.state.isLogged) {
    //     return <div> Welcome Prudhvi</div>   
    // }
    // else {
    //     return <div> Welcome User</div>
    // }
  }
}

export default UserGreeting
