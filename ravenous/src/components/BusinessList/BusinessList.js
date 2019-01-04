import './BusinessList.css';

import Business from '../Business/Business'
import React from 'react';

class BusinessList extends React.Component {
    render(){
        return (
            <div className="BusinessList">
                {this.props.businesses.map(business => <Business key={business.id} business={business}/>)}
            </div>
        );
    }
}

export default BusinessList