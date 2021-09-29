import React from 'react';

const DisplayTenant = ({tenants, deleteTenant}) => {
    const tenantList = tenants.length ? tenants.map( tenant => {
        let {id, name} = tenant;

        return(
            <div className="card review-element" style={{width: "18rem"}}>
                <div className="card-body">
                    <h5 className="card-title">{name}</h5>
                    <button className="btn btn-outline-danger" onClick = { () => {deleteTenant(id)}}>Delete</button>
                </div>
            </div>
        )
    }) : <p>No tenants added yet</p>

    return(
        <div className='tenant-display'>
            {tenantList}
        </div>
    )
}

export default DisplayTenant;