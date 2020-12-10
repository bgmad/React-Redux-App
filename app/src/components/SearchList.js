import React from 'react';
import { connect } from 'react-redux';
import styled from 'styled-components';

import SearchItem from './SearchItem';

class SearchList extends React.Component {

    render() {
        return (
            <SearchResultList>
                {this.props.searchResult.map(item => <SearchItem item={item}/>)}
            </SearchResultList>
        )
    }
}

const mapStateToProps = state => {
    return {
        isLoading: state.apiReducer.isFetching,
        searchResult: state.apiReducer.response
    }
} 

export default connect(mapStateToProps)(SearchList)

//styling
const SearchResultList = styled.div`
    width: 96%;
    position: absolute;
    background: white;
    top: 2.5rem;
    left: 0;
    
    
    
    
    /* border: thin black solid; */
`;