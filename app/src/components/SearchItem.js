import React from 'react';
import styled from 'styled-components';

import { getSongName, getArtistName } from '../services/index';

class SearchItem extends React.Component {

    handleClick = e => {
        console.log('clicked');
    }

    render() {
        return (
            <SearchItemContainer onClick={this.handleClick}>
                <p className='song-name'>{getSongName(this.props.item.name)}</p>
                <p className='artist-name'>{getArtistName(this.props.item.name)}</p>

            </SearchItemContainer>
        )
    }
}

export default SearchItem

//styling
const SearchItemContainer = styled.div`
    width: 100%;
    padding: 0.3rem 0.7rem;
    font-size: 1.5rem;
    &:hover {
        background: whitesmoke;
    }
    .song-name {
        font-weight: bolder;
    }
    .artist-name {
        font-weight: normal;
    }
`;