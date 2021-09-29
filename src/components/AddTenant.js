import React, {Component} from "react";

class AddTenant extends Component{
    state = {
        name: ''
    }
    handleChange = (e) =>{
        this.setState({
            [e.target.id]: e.target.value
        });
    }
    handleSubmit = (e) =>{
        e.preventDefault();

        let tenantName = this.state.name.concat(this.state.name);

        //removing blank spaces to check for empty string
        let newName = this.state.name.replace(/ /g, "");

        if(tenantName && newName){
            this.props.addTenant(this.state);
            this.setState({
                name:''
            })
        }
        
    }
    render(){
        return(
            <div className="tenants">
                <header>
                    <form id="tenants-form">
                        <input type="text" placeholder="Enter tenant name"/>
                        <button type="submit">Add</button>
                    </form>
                </header>
            </div>
        )
    }
}


export default AddTenant;