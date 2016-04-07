'use strict';

jest.unmock('../js/components/Home');

import React from 'react';
import ReactDOM from 'react-dom';
import TestUtils from 'react-addons-test-utils';
import Home from '../js/components/Home';
import configureStore from '../js/store/configureStore';

describe('Home component', () => {

  it('changes the text after click', () => {
    const store = configureStore();
    const homeComponent = TestUtils.renderIntoDocument(
      <Provider store={store}>
        <Home />
      </Provider>
    );

    const homeNode = ReactDOM.findDOMNode(homeComponent);

    console.log(homeNode);

    TestUtils.Simulate.click(
      TestUtils.findRenderedDOMComponentWithTag(homeComponent, 'button')
    );
    
    console.log(homeNode);
  });

});
