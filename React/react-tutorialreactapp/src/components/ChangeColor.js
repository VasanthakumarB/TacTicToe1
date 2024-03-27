import React from "react";

class Changecolor extends React.Component{
    constructor(){
        super();
        this.state={color:'Red'};

    }

    render(){
        return<>
            <h1>My Car Color is {this.state.color}</h1>
            <button onClick={()=>{this.setState({color:'Blue'})}}>Change Color</button>
        </>
    }

}
export default Changecolor;