import React from 'react';
import Header from '../components/Header';
import Search from '../components/Search';

export default function SearchResults(){
  return (
    <div
      className="h-100 d-flex flex-column"
    >
      <Header />
      <Search />
    </div>
  );
}
