import React from 'react';
import { Card } from 'react-bootstrap';

export default function Video() {
  return (
    <div
      className="align-items-center bg-success d-flex flex-row
      justify-content-center h-100 w-100 p-0"
    >
      <Card
      className="h-100 w-100 p-1"
      >
        <iframe
          className="h-100 w-100 rounded"
          src="https://www.youtube.com/embed/UFFi9PWKDjg"
          title="YouTube video player"
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen 
        />
      </Card>
    </div>
  );
}
