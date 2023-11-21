import React from 'react';
import { useQuery } from '@tanstack/react-query';
import axios from 'axios';

export const Home = () => {
  const { data ,isLoading,isError,refetch} = useQuery(['cat'], () => {
    return axios.get('https://catfact.ninja/fact').then((res) => res.data);
  });

  if (isLoading){
    return <h1>Loading</h1>
  }

  if (isError){
    return <h1>Their is an Error</h1>
  }



  return (
    <div className="Home">
      <h1>This is the Home page </h1>
      <p>{data?.fact}</p>
      <button onClick={refetch}> Refresh </button>
    </div>
  );
};
