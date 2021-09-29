import React, {Component} from 'react';
import DisplayTenant from './DisplayTenant';
import AddTenant from './AddTenant';

class Tenants extends Component{
    state = {
        tenants: [
            {id: 101,
            name: 'Rob'}
        ]
    }

    addTenant = (newTenant) =>{
        newTenant.id = Math.floor(Math.random()*10);

        let tenants = [...this.state.tenants, newTenant];

        this.setState({
            tenants : tenants
        })
    }

    deleteTenant = (id) =>{
        let newData = this.state.tenants.filter( tenant =>{
            return tenant.id !== id;
        })

        this.setState({
            tenants: newData
        })
    }

    render() {
        return (
             <div id='tenant-section'>
                 <DisplayTenant tenants = {this.state.tenants} deleteTenant = {this.deleteTenant}/>
                 <AddTenant addTenant = {this.addTenant} />
             </div>
        );
    }
}

export default Tenants;