import React from 'react';
import Loading from '../components/Loading';
import Header from '../components/Header';

export default function mainScreen(){
  return (
    <div>
      <Header />
      <Loading />
    </div>
  );
}
