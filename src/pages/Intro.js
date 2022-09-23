import { Grid, styled, Typography, Button } from '@mui/material';
import React, { useCallback, useState } from 'react';
import Particles from 'react-particles';
import { loadFull } from 'tsparticles';
import Fade from 'react-reveal/Fade';
const delay = ms => new Promise(res => setTimeout(res, ms));
const MyGrid = styled(Grid)({
  justifyContent: 'center',
  alignItems: 'center',
  minHeight: '100vh',
});
const MyText = styled(Typography)({
  color: 'white',
  zIndex: 0,
  fontSize: 50,
});
const MyButton = styled(Button)({
  color: 'red',
  zIndex: 0,
  fontSize: 30,
  backgroundColor: 'black',
  boxShadow: 'red',
});
export default function Intro() {
  const particlesInit = useCallback(async engine => {
    console.log(engine);
    // you can initiate the tsParticles instance (engine) here, adding custom shapes or presets
    // this loads the tsparticles package bundle, it's the easiest method for getting everything ready
    // starting from v2 you can add only the features you need reducing the bundle size
    await loadFull(engine);
  }, []);
  const particlesLoaded = useCallback(async container => {
    await console.log(container);
  }, []);
  const [animation, setAnimation] = useState(false);

  const afterAnimation = async () => {
    await delay(5000);
    setAnimation(true);
    console.log('hey');
  };
  return (
    <div style={{ position: 'relative' }}>
      <div
        style={{
          position: 'absolute',
        }}
      >
        <Particles
          id="tsparticles"
          init={particlesInit}
          loaded={particlesLoaded}
          options={{
            fpsLimit: 60,
            particles: {
              number: {
                value: 40,
                density: {
                  enable: true,
                  value_area: 800,
                },
              },
              color: {
                value: '#FF0000',
                animation: {
                  enable: false,
                  speed: 20,
                  sync: true,
                },
              },
              shape: {
                type: 'polygon',
                stroke: {
                  width: 2,
                },
                polygon: {
                  nb_sides: 6,
                },
              },
              opacity: {
                value: 0.5,
                random: false,
                anim: {
                  enable: false,
                  speed: 3,
                  opacity_min: 0.1,
                  sync: false,
                },
              },
              size: {
                value: 20,
                random: true,
                anim: {
                  enable: false,
                  speed: 20,
                  size_min: 0.1,
                  sync: false,
                },
              },
              links: {
                enable: false,
                distance: 100,
                color: '#ffffff',
                opacity: 0.4,
                width: 1,
              },
              move: {
                enable: true,
                speed: 6,
                direction: 'down',
                random: false,
                straight: false,
                out_mode: 'out',
                attract: {
                  enable: false,
                  rotateX: 600,
                  rotateY: 1200,
                },
              },
            },
            interactivity: {
              detect_on: 'canvas',
              events: {
                onhover: {
                  enable: true,
                  mode: 'repulse',
                },
                onclick: {
                  enable: true,
                  mode: 'push',
                },
                resize: true,
              },
              modes: {
                grab: {
                  distance: 400,
                  line_linked: {
                    opacity: 1,
                  },
                },
                bubble: {
                  distance: 400,
                  size: 40,
                  duration: 2,
                  opacity: 0.8,
                },
                repulse: {
                  distance: 200,
                },
                push: {
                  particles_nb: 4,
                },
                remove: {
                  particles_nb: 2,
                },
              },
            },
            retina_detect: true,
            background: {
              color: '#000000',
              image: '',
              position: '50% 50%',
              repeat: 'no-repeat',
              size: 'cover',
            },
          }}
        />
      </div>
      <MyGrid container direction="column">
        <Fade
          top
          duration={3000}
          delay={2000}
          onReveal={() => afterAnimation()}
        >
          <MyText>This is Donnahue George</MyText>
        </Fade>
        {animation && (
          <Fade bottom duration={3000}>
            <MyButton variant="outlined">Click to enter</MyButton>
          </Fade>
        )}
      </MyGrid>
    </div>
  );
}
