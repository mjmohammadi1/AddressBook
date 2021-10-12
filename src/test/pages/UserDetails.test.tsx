import React from 'react';
import UserDetails from '../../pages/UserDetails';
import * as ReactDOM from 'react-dom';

describe('UserDetails component test suite', () => {
  let container: HTMLDivElement;

  beforeEach(() => {
    container = document.createElement('div');
    document.body.appendChild(container);
    ReactDOM.render(<UserDetails />, container);
  });
  afterEach(() => {
    document.body.removeChild(container);
    container.remove();
  });

  test('Renders correctly initial document', () => {
    const paragraphs = container.querySelectorAll('p');
    const h1s = container.querySelectorAll('h1');

    expect(paragraphs).toHaveLength(2);
    expect(h1s).toHaveLength(1);
  });
});
