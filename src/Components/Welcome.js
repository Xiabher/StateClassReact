import React, {Component} from "react";


class Welcome extends Component{

   constructor (){
     super()
     this.state = {
       message: "welcome visitor"
     }
   }


   changeMessage(){
     this.setState({
       message: "thank you for subscribing"
     })
   }

  render()
  {
    return (
        <>
        <h1> {this.state.message}  </h1>
        <button onClick={()=>this.changeMessage()}>SUBSCRIBE</button>
        </>
    )
    
  }
}


export default Welcome; 