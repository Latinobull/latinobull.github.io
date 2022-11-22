import styled from '@emotion/styled';
import { Grid, Typography } from '@mui/material';
import { Box } from '@mui/system';
import React from 'react';
import { useState } from 'react';
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
  const [data, setData] = useState({
    title: 'Project Title',
    deployed: 'Deployed Application Link',
  });

  const projectContent = event => {
    const newData = {
      title: event.target.getAttribute('data-name'),
      deployed: event.target.getAttribute('data-link'),
    };
    setData(newData);
  };
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
            onClick={event => projectContent(event)}
            sx={{
              gridArea: 'main',
            }}
            data-name={'project1'}
            data-link={'https://www.google.com'}
          >
            Main
          </ProjectItems>
          <ProjectItems
            onClick={event => projectContent(event)}
            sx={{
              gridArea: 'secondary',
            }}
            data-name={'project2'}
            data-link={'https://www.google.com'}
          >
            Secondary
          </ProjectItems>
          <ProjectItems
            onClick={event => projectContent(event)}
            sx={{
              gridArea: 'forth',
            }}
            data-name={'project3'}
            data-link={'https://www.google.com'}
          >
            Forth
          </ProjectItems>
          <ProjectItems
            onClick={event => projectContent(event)}
            sx={{
              gridArea: 'final',
            }}
            data-name={'project4'}
            data-link={'https://www.google.com'}
          >
            Final
          </ProjectItems>
        </ProjectGrid>
        <Box textAlign={'center'}>
          <Typography variant="h1">{data.title}</Typography>
          <Typography variant="h6">{data.deployed}</Typography>
        </Box>
      </Grid>
    </div>
  );
}
