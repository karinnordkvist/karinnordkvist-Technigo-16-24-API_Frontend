import React from 'react';
import { MainButton } from '../styling/GlobalStyling';

export const Button = ({ text, link }) => {
  return (
    <a href={link} target="_blank" rel="noopener noreferrer">
      <MainButton>{text}</MainButton>
    </a>
  );
};
