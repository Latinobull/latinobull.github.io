import { Grid, styled, Typography } from '@mui/material';
import React, { useState } from 'react';
import myImg from '../imgs/IMG_1616.JPG';
import Flip from 'react-reveal/Flip';
// grey #AFB9C5
const ImgEl = styled('img')(() => ({
  width: 400,
  height: 500,
}));
const MyName = styled(Typography)(() => ({
  fontSize: '80px',
  color: '#2B4E63',
  fontFamily: 'monospace',
}));
export default function About() {
  const [show, setShow] = useState(true);
  setInterval(() => {
    if (show) setShow(false);
    else setShow(true);
  }, 10000);
  return (
    <div>
      <Grid
        container
        justifyContent={'space-around'}
        style={{ height: '40vh', backgroundColor: '#AFB9C5' }}
        alignItems={'center'}
      >
        <Flip right opposite when={show}>
          <MyName style={{ transform: 'rotate(45deg)' }}>Donnahue</MyName>
        </Flip>

        <ImgEl src={myImg} />
        <Flip right opposite delay={1000} when={show}>
          <MyName style={{ transform: 'rotate(315deg)' }}> George</MyName>
        </Flip>
      </Grid>
    </div>
  );
}
