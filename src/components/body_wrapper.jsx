import React, { Component } from 'react';

import { Results } from '@elastic/react-search-ui'

import { getConfig } from './../config/config-helper';

import Button from '@material-ui/core/Button'

class BodyWrap extends Component {
    state = {  }
    render() { 
        return (
            <div>{<Results
                titleField={getConfig().titleField}
                urlField={getConfig().urlField}
                shouldTrackClickThrough={true}
            />}
                            
                <Button variant='contained' disableElevation color='primary'>Add +</Button>
            </div>
         );
    }
}
 
export default BodyWrap;