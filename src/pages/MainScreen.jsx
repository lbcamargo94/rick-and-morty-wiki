import React from 'react';
import Header from '../components/Header';
import MainCarousel from '../components/MainCarousel';

export default function MainScreen(){
  return (
    <div
      className="vh-100 w-100"
    >
      <Header />
      <MainCarousel />
    </div>
  );
}
