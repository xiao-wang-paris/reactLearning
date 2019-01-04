import './SearchBar.css';

import React from 'react';

const sortByOptions = {
    "Best Match": 'best_match',
    "Highest Rated": 'rating',
    "Most Reviewed" : 'review_count'
};

class SearchBar extends React.Component {
   
    constructor(props){
        super(props);
        this.state={term:'', location:'', sortBy:'best_match'};
        this.handleTermChange=this.handleTermChange.bind(this);
        this.handleLocationChange=this.handleLocationChange.bind(this);
    }
        
    getSortByClass(sortByOption){
        if(this.state.sortBy == sortByOption){
            return 'active';
        }
        return '';
    }

    handleSortByChange(sortByOption){
        this.setState({sortBy : sortByOption});
        console.log(this.state);
    }

    handleTermChange(e){
        this.setState({term:e.target.value});
        console.log(this.state);
    }

    handleLocationChange(e){
        this.setState({location:e.target.value});
        console.log(this.state);
    }
    
    renderSortByOptions(){
        return Object.keys(sortByOptions).map( sortByOption => {
            let sortByOptionValue = sortByOptions[sortByOption];
            return <li className={this.getSortByClass(sortByOptionValue)} key={sortByOptionValue} onClick={this.handleSortByChange.bind(this,sortByOptionValue)}>{sortByOption}</li>;
          }
        );
    }

    render() {
        return(
        <div className="SearchBar">
        <div className="SearchBar-sort-options">
          <ul>
            {this.renderSortByOptions()}
          </ul>
        </div>
        <div className="SearchBar-fields">
          <input placeholder="Search Businesses" onChange={this.handleTermChange}/>
          <input placeholder="Where?" onChange={this.handleLocationChange}/>
        </div>
        <div className="SearchBar-submit">
          <a>Let's Go</a>
        </div>
      </div>);
    }
}

export default SearchBar;