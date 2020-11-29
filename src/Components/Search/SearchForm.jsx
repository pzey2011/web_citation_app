
import React, { Component } from 'react';
import axios from 'axios';
class SearchForm extends Component {
    state = {
        searchValue: '',
    }
    searchInputChange = (event) =>{
        this.setState({searchValue:event.currentTarget.value});
    }
    handleSubmit = (event)=>{
        event.preventDefault();
        axios.get(`https://api.crossref.org/works?query=${this.state.searchValue}`, { mode: 'no-cors' })
        .then(response => {
            console.log(response.data.message.items);
            
            let results = [];
            response.data.message.items.map(item=>{
                const createdTime =  item.created['date-parts'][0].join(" ");
                const title = item.title.join(" ");
                let authors=[];
                if(item.author)
                {
                    item.author.forEach(author => {
                        authors.push(`${author.given.charAt(0)}.${author.family},`)
                    });
                }
                const author = (authors.length>0)?authors.join(" "):"";
                let data = {
                    author:author,
                    abstract:(item.abstract)?item.abstract:"",
                    doi:item.DOI,
                    type:item.type,
                    created:createdTime,
                    title:title,
                    isReferencedByCount:item['is-referenced-by-count']
                }
                results.push(data);
            })
            this.props.showResults();
            this.props.resultsInfo(results);
        })
        .catch(error => console.log(error));
    }
    render() {
        return (
            <form onSubmit={this.handleSubmit}>
                <div className="form-group">
                    <button type="submit">
                        <i className="fas fa-search"></i>
                    </button>
                    <input type="text" value={this.state.searchValue} onChange={this.searchInputChange}/>                
                </div>

            </form>
        );
    }
}

export default SearchForm;