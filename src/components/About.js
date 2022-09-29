import { Grid, styled, Typography } from '@mui/material';
import React, { useState } from 'react';
import myImg from '../imgs/IMG_1616.JPG';
import Flip from 'react-reveal/Flip';
// grey #AFB9C5
const ImgEl = styled('img')(() => ({
  width: 300,
  height: 400,
}));
const MyName = styled(Typography)(() => ({
  fontSize: '80px',
  color: '#2B4E63',
  fontFamily: 'monospace',
}));
const SubHeader = styled(Typography)(() => ({
  fontSize: '30px',
  color: '#2B4E63',
  fontFamily: 'monospace',
  maxWidth: '80vw',
  textAlign: 'center',
}));
export default function About() {
  const [show, setShow] = useState(false);
  const [count, setCount] = useState(0);
  // const myTimer = setInterval(() => {
  //   if (show) setShow(false);
  //   else setShow(true);

  //   if (count > 5) clearInterval(myTimer);
  //   else {
  //     console.log(count);
  //     setCount(count + 1);
  //   }
  // }, 2000);
  return (
    <div>
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
        <Flip right opposite>
          <MyName style={{ transform: 'rotate(90deg)', fontSize: 70 }}>
            Donnahue
          </MyName>
        </Flip>

        <ImgEl src={myImg} />
        <Flip right opposite delay={1000}>
          <MyName style={{ transform: 'rotate(90deg)' }}> George</MyName>
        </Flip>
      </Grid>
      <Grid container justifyContent={'center'}>
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
