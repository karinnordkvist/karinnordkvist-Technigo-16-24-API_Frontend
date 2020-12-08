import React, { useState, useEffect } from 'react';

export const TalksList = () => {
  const [data, setData] = useState([]);

  const getData = () => {
    fetch('https://tedtalks-by-karin.herokuapp.com/')
      .then((res) => res.json())
      .then((json) => {
        console.log(json);
        setData(json);
      });
  };

  useEffect(() => {
    getData();
  }, []);

  console.log(data);

  return (
    <>
      {data &&
        data.map((talk) => {
          return <p>{talk.name}</p>;
        })}
      <p>hej</p>
    </>
  );
};
