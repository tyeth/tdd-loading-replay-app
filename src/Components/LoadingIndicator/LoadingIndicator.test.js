import React from 'react';
import LoadingIndicator from './LoadingIndicator';
import {shallow} from 'enzyme';


describe('LoadingIndicator', () => {
    describe('when isLoading is false', () => {
      it('should render children', () => {
        const wrapper = shallow(
          <LoadingIndicator isLoading={false}>
            <div>ahoy!</div>
          </LoadingIndicator>
        );
        expect(wrapper.html()).toEqual('<div>ahoy!</div>')
        wrapper.unmount();
      });
    });


    describe('when isLoading is true',()=>{
      describe('given 200ms have not elapsed',()=>{
        it('should render nothing',()=>{
          const wrapper = shallow(
            <LoadingIndicator isLoading={true}>
              <div>ahoy!</div>
            </LoadingIndicator>
          );
          expect(wrapper.html()).toBe(null);
          wrapper.unmount();
        })
      });

      describe('given 200ms have elapsed',()=>{
        it('should render the loading indicator',()=>{
          jest.useFakeTimers();
          const wrapper = shallow(
            <LoadingIndicator isLoading={true}>
              <div>ahoy!</div>
            </LoadingIndicator>
          );

          // assert that setTimeout was called exactly once.
          expect(setTimeout.mock.calls.length).toEqual(1);

          // assert that the 2nd argument to the call to setTimeout is 200
          expect(setTimeout.mock.calls[0][1]).toEqual(1000);

          jest.runAllTimers();
          expect(wrapper.html()).toBe('<div>loading...</div>');
          wrapper.unmount();
        });
      });

      describe('on unmount',()=>{
        it('should clear timeout',()=>{
          jest.useFakeTimers();

          const stubHandle = 12345;
          setTimeout.mockReturnValue(stubHandle);

          const wrapper = shallow(
            <LoadingIndicator isLoading={true}>
              <div>ahoy!</div>
            </LoadingIndicator>
          );

          wrapper.unmount();
          expect(clearTimeout.mock.calls.length).toEqual(1);
          expect(clearTimeout.mock.calls[0][0]).toEqual(stubHandle);
        });
      });
    });
  });