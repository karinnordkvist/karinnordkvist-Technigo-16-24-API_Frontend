import React from 'react';
import styled from 'styled-components';

import { FlexWrapper, MainH3 } from '../styling/GlobalStyling';

export const Navigation = () => {
  return (
    <NavigationWrapper>
      <MainH3>Sort by:</MainH3>
    </NavigationWrapper>
  );
};

const NavigationWrapper = styled(FlexWrapper)``;
