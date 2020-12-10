import React from 'react';
import { connect } from 'react-redux';
import styled from 'styled-components';

import { searchForTerm } from '../actions/apiActions';
import SearchList from './SearchList';

class SearchBar extends React.Component {
    state = {
        textInput: '',
        isOnFocus: false
    }

    handleChange = e => {
        this.setState({
            ...this.state,
            textInput: e.target.value
        });
        if (this.state.textInput.length >= 3){
            this.props.searchForTerm(this.state.textInput);
        }
    }

    handleFocus = e => {
        this.setState({
            ...this.state,
            isOnFocus: true
        })
    }
    handleBlur = e => {
        this.setState({
            ...this.state,
            isOnFocus: false
        })
    }
    
    handleSubmit = e => {
        e.preventDefault();
        
        this.setState({
            ...this.state,
            textInput: ''
        });
    }

    render() {
        return (
            <SearchBarContainer>
                <form onSubmit={this.handleSubmit}>
                    <input 
                        type='text'
                        placeholder='Search...' 
                        value={this.state.textInput} 
                        onChange={this.handleChange}
                        onFocus={this.handleFocus}
                        onBlur={this.handleBlur}
                    />
                    <button>Search</button>
                    {(this.state.isOnFocus && this.props.searchResult) && 
                        <SearchList onmouseover={this.handleFocus}/>
                    }
                </form>
            </SearchBarContainer>
        )
    }
} 

const mapStateToProps = state => {
    return {
        searchResult: state.apiReducer.response,
        isLoading: state.apiReducer.isFetching
    };
}

export default connect(mapStateToProps, { searchForTerm })(SearchBar);

//styling
const SearchBarContainer = styled.div`
    width: 100%;
    /* border: thin black solid; */
    display: flex;
    justify-content: center;

    form {
        width: 100%;
        display: flex;
        justify-content: space-evenly;
        input {
            width: 100%;
            display: inline-block;
            font-size: 1.8rem;
            padding: 0 0.7rem;
        }
        button {
            width: 13%;
            display: inline-block;
            font-size: 1.8rem;
        }
    }
`;