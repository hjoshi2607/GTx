import React from 'react';

class PropertyList extends React.Component{
    state = {
        isDetailVisible: false
    }

    handleClick = (e) =>{
        this.setState(prevProps => {
            return{
                isDetailVisible : !prevProps.isDetailVisible
            }
        })
    }
}

export default PropertyList;