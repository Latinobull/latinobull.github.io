import { Grid, styled, Typography } from '@mui/material';
import React from 'react';
import myImg from '../imgs/IMG_1616.JPG';
import Heading from './Heading';
// grey #AFB9C5
const ImgEl = styled('img')(() => ({
  width: 400,
  height: 400,
}));
const SubHeader = styled(Typography)(() => ({
  fontSize: '30px',
  color: '#2B4E63',
  fontFamily: 'monospace',
  textAlign: 'center',
  maxWidth: '55vw',
}));
export default function About() {
  return (
    <div>
      <Heading text={'Who Am I'}></Heading>
      <Grid
        container
        justifyContent={'space-around'}
        style={{
          backgroundColor: '#AFB9C5',
          paddingTop: 100,
          paddingBottom: 100,
        }}
        alignItems={'center'}
      >
        <ImgEl src={myImg} />
        <SubHeader>
          I am a Full Stack Developer leveraging a background in music to build
          a more intuitive and efficient user experience on the web. Known as an
          innovative problem-solver passionate about developing apps, with a
          focus on backend, user interface, and authentication. Strengths in
          meeting deadlines, understanding documentations and teamwork.
        </SubHeader>
      </Grid>
    </div>
  );
}
