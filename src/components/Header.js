import React from 'react';
import styled from 'styled-components';

import { FlexWrapper } from '../styling/GlobalStyling';

export const Header = () => {
  return (
    <HeaderWrapper>
      <HeaderImg src={process.env.PUBLIC_URL + '/images/ted-by-karin.png'} />
      <HeaderHamburger>
        <div></div>
        <div></div>
        <div></div>
      </HeaderHamburger>
    </HeaderWrapper>
  );
};

const HeaderWrapper = styled(FlexWrapper)`
  justify-content: space-between;
  width: 100vw;
`;

const HeaderImg = styled.img`
  width: 40px;
  margin: 30px;
`;

const HeaderHamburger = styled.div`
  margin-right: 30px;
  div {
    width: 35px;
    height: 3px;
    background: #400000;
    margin-bottom: 8px;
  }
`;
