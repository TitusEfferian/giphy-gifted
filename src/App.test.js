import React from 'react';
import ReactDOM from 'react-dom';
import Header from './Components/HeaderSearch';
import Content from './Components/Content';
import { SEARCH_ENDPOINT } from './apis';

it('renders content without crashing with no data', () => {
  const div = document.createElement('div');
  ReactDOM.render(<Content data={[]}/>, div);
  ReactDOM.unmountComponentAtNode(div);
});

it('renders content without crashing with data', async () => {
  const div = document.createElement('div');
  const result = await fetch(`${SEARCH_ENDPOINT}miku`)
  const parse = await result.json()
  ReactDOM.render(<Content data={parse.data}/>, div);
  ReactDOM.unmountComponentAtNode(div);
});

it('renders headers without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<Header value='' onClick={()=>{}} onChange={()=>{}} />, div);
  ReactDOM.unmountComponentAtNode(div);
});
