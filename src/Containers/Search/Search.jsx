import React, { Component } from 'react';
import SearchForm from '../../Components/Search/SearchForm';
import SearchResults from '../../Components/Search/SearchResults';

class Search extends Component {
    state={
        showResults:false,
        searchResults:[],
    }
    render() {
        return (
            (!this.state.showResults)?
                <SearchForm 
                    showResults={()=>this.setState({showResults:true})} 
                    resultsInfo={(results)=>this.setState({searchResults:results})}
                />:
                <SearchResults 
                    results={this.state.searchResults}
                />
        );
    }
}

export default Search;