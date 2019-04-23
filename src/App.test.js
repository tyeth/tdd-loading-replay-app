import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import {mount,shallow} from 'enzyme';


it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<App />, div);
  ReactDOM.unmountComponentAtNode(div);
});

it('renders and hides loading section with default behaviour',()=>{
  jest.useFakeTimers();
  const wrapper = mount(<App />);

  jest.runAllTimers();
  expect(setTimeout.mock.calls.length).toBe(2);
  wrapper.unmount();
})

it('renders a loading section with reset timer paused',()=>{
  jest.useFakeTimers();
  const wrapper = mount(<App resetTimerPaused={true} />);

  jest.runAllTimers();
  expect(setTimeout.mock.calls.length).toBe(1);
  expect(wrapper.html()).toContain("loading...");
  wrapper.unmount();
})

it('renders a hidden history component',()=>{
  const div = document.createElement('div');
  ReactDOM.render(<App />, div);
  expect(div.innerHTML).toContain('<div class="c-history hidden">');
  ReactDOM.unmountComponentAtNode(div);
})
