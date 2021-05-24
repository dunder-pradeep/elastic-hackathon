import React, { Component } from 'react';

import Button from '@material-ui/core/Button'

class Navbar extends Component {
    state = { isAuth:true }
    render() { 
        return (
            <div className='navbar-container'>
                <div className='authgroup'>
                <Button color='primary'>Courses</Button>
                <Button color = 'primary'>Graph</Button>
                </div>
               
                <Button color = 'primary'>Home</Button>

                {this.state.isAuth &&
                    <div className='authgroup'>
                <Button color='primary'>Login</Button>
                    <Button color='primary'>Register</Button>
                    </div>}
                    
                
               
              

            </div>
         );
    }
}
 
export default Navbar;