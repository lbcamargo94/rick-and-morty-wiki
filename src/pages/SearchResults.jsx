import React from 'react';
import {
  Tabs,
  Tab,
} from 'react-bootstrap';

import Header from '../components/Header';
import Search from '../components/Search';

export default function SearchResults(){
  return (
    <div
      className="h-100 d-flex flex-column"
    >
      <Header />
      <Tabs
        className="my-3 px-3"
        defaultActiveKey="Characters"
        id="uncontrolled-tab-example"
      >
        {/* Tab Seacrh Characters */}
        <Tab
          eventKey="Characters"
          title="Characters"
        >
          <Search page="Characters"/>
        </Tab>
        {/* Tab Seacrh Locations */}
        <Tab
          eventKey="Locations"
          title="Locations"
        >
          <Search page="Locations"/>
        </Tab>
        {/* Tab Seacrh Episodes */}
        <Tab
          eventKey="Episodes"
          title="Episodes"
        >
          <Search page="Episodes"/>
        </Tab>
      </Tabs>
    </div>
  );
}
