import React from 'react';
import PropTypes from 'prop-types';

const Result = props => (
    <React.Fragment>
        <ul>
            <li>{`doi: ${props.doi}`}</li>
            <li>{`abstract: ${props.abstract}`}</li>
            <li>{`type: ${props.type}`}</li>
            <li>{`created: ${props.created}`}</li>
            <li>{`title: ${props.title}`}</li>
            <li>{`author: ${props.author}`}</li>
            <li>{`referenced by count: ${props.isReferencedByCount}`}</li>
        </ul>
        <br />
    </React.Fragment>
)

Result.propTypes = {
    doi: PropTypes.string,
    abstract: PropTypes.string,
    type: PropTypes.string,
    created: PropTypes.string,
    title: PropTypes.string,
    author: PropTypes.string,
    isReferencedByCount:PropTypes.number
}

export default Result
