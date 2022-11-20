import styled from '@emotion/styled';
import { Grid, Typography } from '@mui/material';
import { Box } from '@mui/system';
import React from 'react';
import Heading from './Heading';

const ProjectGrid = styled(Box)(() => ({
  display: 'grid',
  gridTemplateColumns: 'repeat(3, 1fr)',
  gridTemplateRows: 'repeat(3, 300px)',
  gridTemplateAreas: `'main main main'
  'secondary . forth'
  'final final  final'
  `,
  gap: '20px',
  width: '45vw',
}));
const ProjectItems = styled(Box)(() => ({
  backgroundImage: "url('https://via.placeholder.com/150')",
  backgroundSize: 'cover',
}));
export default function Projects() {
  return (
    <div>
      <Heading text={'Projects'}></Heading>
      <Grid
        container
        justifyContent={'space-around'}
        sx={{ margin: '40px 0px' }}
        alignItems={'center'}
      >
        <ProjectGrid>
          <ProjectItems
            onClick={event =>
              console.log(event.target.getAttribute('data-name'))
            }
            sx={{
              gridArea: 'main',
            }}
            data-name={'project1'}
          >
            Main
          </ProjectItems>
          <ProjectItems
            sx={{
              gridArea: 'secondary',
            }}
            data-name={'project2'}
          >
            Secondary
          </ProjectItems>
          <ProjectItems
            sx={{
              gridArea: 'forth',
            }}
            data-name={'project3'}
          >
            Forth
          </ProjectItems>
          <ProjectItems
            sx={{
              gridArea: 'final',
            }}
            data-name={'project4'}
          >
            Final
          </ProjectItems>
        </ProjectGrid>
        <Box textAlign={'center'}>
          <Typography variant="h1">Title</Typography>
          <Typography variant="h6">Deployed</Typography>
        </Box>
      </Grid>
    </div>
  );
}
