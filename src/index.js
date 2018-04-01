import React from 'react'
import { render } from 'react-dom'
import ListPicker from './components/ListPicker'
// import '../node_modules/todomvc-common/base.css'
import '../node_modules/todomvc-app-css/index.css'
// import './index.css'
// import registerServiceWorker from './registerServiceWorker';

// registerServiceWorker();

render(<ListPicker />, document.querySelector('#root'))
