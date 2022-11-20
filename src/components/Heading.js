import styled from '@emotion/styled';
import { Typography } from '@mui/material';
import React from 'react';

const MainHeading = styled(Typography)(() => ({
  fontSize: '60px',
  backgroundColor: '#AFB9C5',
  textAlign: 'center',
  padding: '100px',
  color: '#2B4E63',
}));

export default function Heading({ text }) {
  return <MainHeading>{text}</MainHeading>;
}
