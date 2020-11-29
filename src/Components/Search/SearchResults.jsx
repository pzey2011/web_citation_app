import React from 'react'
import Result from './Result'

const SearchResults = props => props.results.map( item=>
    <Result {...item}/>
)

export default SearchResults
