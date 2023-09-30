import React from 'react';

class Card extends React.Component {
    constructor()
{
    super();
    this.state={
        name:"",
        gst: "",
        cgst:"",
        sgst:"",
        invoice:"",
        tgst:"",

    }
} 
handleName = (event) => {
    this.setState({
        name:event.target.value
    })
}

handleGst = (event) => {
    this.setState({
        gst:event.target.value
    })
}

exe = (event) =>  {
    this.setState({invoice:parseInt(this.state.name) * parseInt(this.state.gst) / 100 });
    this.setState({cgst:parseInt(this.state.name) * parseInt(this.state.gst) / 100 / 2 });
    this.setState({tgst:parseInt(this.state.name)+ (parseInt(this.state.name)* parseInt(this.state.gst) /100)})

    
   
}






render () {
    return (
        <>
       <form className="form">
       <div className="gst" >
        
        <h1> Calculator</h1> <br/><br/>
        
        <label>Taxable value : </label><br/>
         <input type="number" value={this.state.name} onChange={this.handleName} /> <br/><br/>
         <label>Gst % : </label><br/>
         <input type="number" value={this.state.gst} onChange={this.handleGst} /> <br/><br/>

         <p> CGST : {this.state.cgst} </p> <br/>
         <p> SGST : {this.state.cgst} </p> <br/>
         <h3> Total gst : {this.state.invoice} </h3> <br/>
         <h3>Total invoice value : {this.state.tgst} </h3> <br/> <br/>
         

         <div className="btn"> <button type="button" onClick={this.exe} >Submit</button>
         <button onClick={() => window.location.reload(false)}>Reload</button>
         </div>
         </div>


         </form>
         
            
         

         

        </>
    )
}
}
export default Card;