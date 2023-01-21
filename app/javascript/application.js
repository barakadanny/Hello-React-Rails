// Entry point for the build script in your package.json
import "@hotwired/turbo-rails"
import "./controllers"
import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import Greetings from './components/Greetings';
import store from './store';

ReactDOM.render(
    <Provider store={store}>
        <Greetings/>
    </Provider>,
  document.getElementById('root'),
);
