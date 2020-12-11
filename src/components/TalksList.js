import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchTalksData } from '../reducers/talks';
import { baseURL, speakersURL } from '../reducers/urls';

// Components
import { ListedTalk } from './ListedTalk';

export const TalksList = () => {
  const dispatch = useDispatch();
  //   const [currentFilter, setCurrentFilter] = useState(talks);

  const talks = useSelector((store) => store.talks.talks);

  useEffect(() => {
    dispatch(fetchTalksData(baseURL));
  }, []);

  return (
    <div>
      {talks &&
        talks.map((talk) => {
          return <ListedTalk key={talk.url} talk={talk} />;
        })}
    </div>
  );
};
