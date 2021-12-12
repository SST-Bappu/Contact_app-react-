import React from "react";

class AddContact extends React.Component{
    state ={
        name:"",
        email:"",
        message:"",
    };
    add = (e)=>{
        e.preventDefault();
        if (this.state.name ==="" || this.state.email==="" || this.state.message==="")
        {
            alert("All fields are required");
            return
        }
        else{
            this.props.ContactHandler(this.state)
            this.setState({name:"",email:"",message:""})
            this.props.history.push("/")
        }
        }
    render(){
        return (
            <div className="ui main">
                <h2>Add Contact</h2>
                <form className="ui form" onSubmit={this.add}>
                    <div className="field">
                        <label>Name</label>
                        <input type = "text" id='name' name="name" placeholder="Name"
                        value={this.state.name} 
                        onChange={(e)=>this.setState({name:e.target.value})}/>
                    </div>

                    <div className="field">
                        <label>Email</label>
                        <input type = "text" id = 'email' name="email" placeholder="username@mail.com" 
                        value={this.state.email}
                        onChange={(e)=>this.setState({email:e.target.value})}/>
                    </div>

                    <div className="field">
                        <label>Message</label>
                        <textarea name="message" id ='message' placeholder="Write your message here..."
                        value={this.state.message} 
                        onChange={(e)=>this.setState({message:e.target.value})}/>
                    </div>
                    <button className="ui button blue">Send</button>
                </form>
            </div>
        );
    }
}

export default AddContact;