import styled from '@emotion/styled';
import { Box, Grid, TextField, Typography } from '@mui/material';
import React from 'react';
import Heading from './Heading';

const ContactBox = styled(Grid)(() => ({
  flexDirection: 'row',
  justifyContent: 'space-around',
  margin: '100px 0',
}));
export default function Contact() {
  return (
    <div>
      <Heading text={'Contact Me'}></Heading>
      <ContactBox container>
        <Typography>Donnahuegjr@gmail.com</Typography>
        <Typography>Linkedin</Typography>
        <Typography>Github</Typography>
      </ContactBox>
    </div>
  );
}
