import React, { useEffect } from 'react';
import { fetchTalksData } from '../reducers/talks';

// Components
import { ListedTalk } from './ListedTalk';

export const TalksList = () => {
  useEffect(() => {
    fetchTalksData();
  }, []);

  return (
    <>
      <button onClick={() => fetchTalksData()}>knapp</button>
      {/* {data &&
        data.map((talk) => {
          return <ListedTalk key={talk.url} talk={talk} />;
        })} */}
      <p>hej</p>
    </>
  );
};
