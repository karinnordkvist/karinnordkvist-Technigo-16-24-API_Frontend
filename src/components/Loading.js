import React from 'react';
import { useSelector } from 'react-redux';
import { Circular } from 'styled-loaders-react';
import styled from 'styled-components';

// ----------------------------------------------------------------

export const Loading = () => {
  const isLoading = useSelector((state) => state.ui.isLoading);

  return (
    isLoading && (
      <LoadingWrapper>
        {/* <Circular color="#000" size="80px" /> */}
        <p>LOADING</p>
      </LoadingWrapper>
    )
  );
};

// -----------------------------------------------------------------------

const LoadingWrapper = styled.div`
  height: 100vh;
  width: 100vw;
  background: none;
  display: flex;
  align-items: center;
  justify-content: center;
`;
