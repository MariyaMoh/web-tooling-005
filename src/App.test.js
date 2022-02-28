import { render, screen } from '@testing-library/react';
// import userEvent from '@testing-library/user-event';
// import { useState } from 'react';
import App from './App';

describe('App', () => {
  it('should not break when rendering App compnent', () => {
    render(<App />);
    expect(screen.getByTestId('main')).toBeVisible();
  });
  // it ('should get data for us',()=>{

  // });
  // const DefaultInner={
  //   allbreeds:["pug","baskiat"],
  //   selectrandom: () => {},
  //   selectedbreed : null,
  //   setSelectedbreed: () => {},
  // };
});
