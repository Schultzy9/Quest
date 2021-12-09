import React from 'react';

import { Typography, AppBar, Toolbar, CssBaseline} from '@material-ui/core';
import { DirectionsRun } from '@material-ui/icons';

const Layout = function ({children}) {
  return (
    <>
      <CssBaseline />
      <AppBar className='top-bar' position='sticky'>
        <Toolbar>
          <DirectionsRun />
          <Typography variant='h6'>
            <a href='/'>
              Quest
            </a>
          </Typography>
        </Toolbar>
      </AppBar>
      <div className='content-wrapper'>
        <div className='container'>
          {children}
        </div>
      </div>
    </>
  )
}

export default Layout;
