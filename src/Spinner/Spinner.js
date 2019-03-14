import React from 'react'
import { BeatLoader } from 'react-spinners'

const Spinner = props => {
    return (
        <div>
          <BeatLoader
            sizeUnit={"px"}
            size={50}
            color={'#123abc'}
          />
        </div> 
      )
}

export default Spinner