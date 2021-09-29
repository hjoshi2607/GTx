import React from 'react';
import PropertyList from './PropertyList';

const Properties = ({properties}) =>{
    const propertyList = properties.length ? properties.map( property => {

        return(
            <PropertyList property = {property} id={property.id}/>
        )
    }) : (<p>No properties available</p>);

    return(
        <div className = 'main-section'>
            {propertyList}
        </div>
    )
}

export default Properties;