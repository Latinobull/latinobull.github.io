import { Grid, styled, Typography } from '@mui/material';
import React from 'react';

const MyGrid = styled(Grid)(() => ({
  backgroundColor: '#060607',
  maxHeight: '200px',
  padding: '100px 0px',
}));

const MyName = styled(Typography)(() => ({
  fontSize: '40px',
  fontFamily: 'monospace',
  fontWeight: 700,
  letterSpacing: '.3rem',
  color: '#E3CDB3',
  textDecoration: 'none',
}));
export default function Footer() {
  return (
    <>
      <MyGrid container justifyContent={'space-around'} alignItems={'center'}>
        <Grid item>
          <MyName>Linkedin</MyName>
        </Grid>
        <Grid item>
          <MyName>Github</MyName>
        </Grid>
        <Grid item>
          <MyName>Resume</MyName>
        </Grid>
      </MyGrid>
    </>
  );
}
