import React from 'react'
import { render } from 'react-dom'
import Router from './components/Router'
// import '../node_modules/todomvc-common/base.css'
import '../node_modules/todomvc-app-css/index.css'
// import './index.css'
// import registerServiceWorker from './registerServiceWorker';

// registerServiceWorker();

render(<Router />, document.querySelector('#root'))
