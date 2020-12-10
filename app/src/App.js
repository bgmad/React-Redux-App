import React from 'react';
import { connect } from 'react-redux';

import { searchForTerm } from './actions/apiActions';
import SearchBar from './components/SearchBar';
import { getSongName, getArtistName } from './services/index';

function App(props) {
  console.log(props.response);
  return (
    <div>
      <SearchBar/>
      <div>
        {props.response && props.response.map(item => <p>{getSongName(item.name)}</p>)}
      </div>
    </div>
  );
}

const mapStateToProps = state => {
  // console.log(state)
  return {
    isFetching: state.apiReducer.isFetching,
    error: state.apiReducer.error,
    response: state.apiReducer.response
  }
}

export default connect(mapStateToProps, { searchForTerm })(App);
