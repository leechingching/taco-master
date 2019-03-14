import React from 'react'
import { PacmanLoader } from 'react-spinners'
import { css } from '@emotion/core';
import '../styles.scss';

const override = css`
    margin: auto 45vw;
`;

const Spinner = props => {

    return (
        <div className="Spinner">
          <PacmanLoader
            css={override}
            sizeUnit={'px'}
            size={50}
            width={100}
            color={'#F5A623'}
          />
        </div> 
      )
}

export default Spinner