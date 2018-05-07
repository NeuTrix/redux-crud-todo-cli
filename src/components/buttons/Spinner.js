import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { colors, media } from '../../helpers/cssConstants';

const Spinner = (props) =>  {
    const Spins = styled.div `
    border: 20px solid #f3f3f3; /* Light grey */
    border-top: 20px solid ${ props.color };
    border-radius: 50%;
    width: 60px;
    height: 60px;
    
    animation: spin 2s linear infinite;
    @keyframes spin {
        from { transform: rotate(0deg); }
        to { transform: rotate(360deg); }
    }
    `;
    return (
        <Spins/>
    )
}

Spinner.propTypes ={
	color: PropTypes.string.isRequired,
};

Spinner.defatultProps = {
    color: 'grey',
}

export default Spinner;