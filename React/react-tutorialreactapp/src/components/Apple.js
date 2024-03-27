import React from "react";
class Apple extends React.Component{
    render(){
        const{ fruitsInfo}=this.props;
        const {type, color }=fruitsInfo;

        return(
            <h2>Im {type} {color} Apple </h2>
        )
    }

}
export default Apple;