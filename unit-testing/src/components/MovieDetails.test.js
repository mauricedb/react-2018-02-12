import React from 'react';
// import ReactDOM from 'react-dom';
import { render, unmountComponentAtNode } from 'react-dom';

import { MovieDetails } from './MovieDetails';

describe('The MovieDetails component', () => {
  it('renders without data without crashing', () => {
    const div = document.createElement('div');
    render(
      <MovieDetails
        movies={[]}
        match={{
          params: {
            movieId: 42
          }
        }}
      />,
      div
    );

    // console.log(div.innerHTML);
    unmountComponentAtNode(div);
  });

  it('renders with data without crashing', () => {
    const div = document.createElement('div');
    render(
      <MovieDetails
        movies={[
          {
            id: 42,
            title: 'Hitchhikers guide',
            poster_path: 'image.jpg',
            vote_average: 8
          }
        ]}
        match={{
          params: {
            movieId: 42
          }
        }}
      />,
      div
    );

    // console.log(div.innerHTML);
    unmountComponentAtNode(div);
  });
});
