import React from 'react';
import styled from 'styled-components';
import {
  FlexWrapper,
  MainText,
  MainH3,
  MainH2,
} from '../styling/GlobalStyling';

import { Button } from './Button';
import { Snack } from './Snack';

// ----------------------------------------------------------------

export const ListedTalk = ({ talk }) => {
  const tags = JSON.parse(talk.tags);

  return (
    <ListedTalkWrapper>
      <ListedTalkTextBox>
        <MainH2>▸ {talk.title}</MainH2>
        <MainH3>
          By {talk.main_speaker}, {talk.speaker_occupation}
        </MainH3>
        <MainText>{talk.description}</MainText>
        {/* <MainText>{talk.tags}</MainText> */}

        <SnackWrapper>
          {tags.map((tag) => (
            <Snack text={tag} />
          ))}
        </SnackWrapper>
        <Button text={`▸ Watch ${talk.name} ⎘`} link={talk.url} />
      </ListedTalkTextBox>
    </ListedTalkWrapper>
  );
};

// ----------------------------------------------------------------

const ListedTalkWrapper = styled(FlexWrapper)`
  width: auto;
  margin: 0 auto 30px auto;
`;

const ListedTalkImageBox = styled.div`
  width: 150px;
  height: 100%;
`;

const ListedTalkTextBox = styled(FlexWrapper)`
  flex-direction: column;
  align-items: flex-start;
  width: 80%;
`;

const SnackWrapper = styled.div`
  margin: 10px 0;
`;
