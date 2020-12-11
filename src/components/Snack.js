import React from 'react';
import styled from 'styled-components';

export const Snack = ({ text }) => {
  return <SnackWrapper>{text}</SnackWrapper>;
};

const SnackWrapper = styled.span`
  display: inline;
  font-size: 10px;
  text-transform: uppercase;

  &:after {
    content: ', ';
  }

  &:last-child:after {
    content: ' ';
  }
`;
