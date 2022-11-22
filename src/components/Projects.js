import styled from '@emotion/styled';
import { Grid, Link, Typography } from '@mui/material';
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
    description: 'abc123',
  });

  const projectContent = event => {
    const newData = {
      title: event.target.getAttribute('data-name'),
      deployed: event.target.getAttribute('data-link'),
      description: event.target.getAttribute('data-description'),
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
            data-description={
              'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse ac hendrerit nibh. Fusce vel ultrices neque. Nulla volutpat, tellus quis tristique malesuada, mi orci condimentum ipsum, in aliquet nulla augue a quam. Morbi ac justo fringilla, pulvinar erat ac, egestas ante. Etiam pellentesque faucibus elit at venenatis. Suspendisse tellus lectus.'
            }
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
            data-description={
              'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse ac hendrerit nibh. Fusce vel ultrices neque. Nulla volutpat, tellus quis tristique malesuada, mi orci condimentum ipsum, in aliquet nulla augue a quam. Morbi ac justo fringilla, pulvinar erat ac, egestas ante. Etiam pellentesque faucibus elit at venenatis. Suspendisse tellus lectus.'
            }
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
            data-description={
              'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse ac hendrerit nibh. Fusce vel ultrices neque. Nulla volutpat, tellus quis tristique malesuada, mi orci condimentum ipsum, in aliquet nulla augue a quam. Morbi ac justo fringilla, pulvinar erat ac, egestas ante. Etiam pellentesque faucibus elit at venenatis. Suspendisse tellus lectus.'
            }
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
            data-description={
              'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse ac hendrerit nibh. Fusce vel ultrices neque. Nulla volutpat, tellus quis tristique malesuada, mi orci condimentum ipsum, in aliquet nulla augue a quam. Morbi ac justo fringilla, pulvinar erat ac, egestas ante. Etiam pellentesque faucibus elit at venenatis. Suspendisse tellus lectus.'
            }
          >
            Final
          </ProjectItems>
        </ProjectGrid>
        <Box textAlign={'center'} sx={{ maxWidth: '40vw' }}>
          <Typography variant="h1">{data.title}</Typography>
          <Typography variant="p" sx={{ display: 'block' }}>
            {data.description}
          </Typography>
          <Link variant="h6" href={data.deployed} target={'_blank'}>
            Deployed App
          </Link>
        </Box>
      </Grid>
    </div>
  );
}
