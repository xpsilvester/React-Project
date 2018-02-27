import React from 'react';
import ReactDom from 'react-dom';

import getRouter from './router/router';
import './scss/style.scss';

if (module.hot) {
    module.hot.accept();
}

ReactDom.render(
    getRouter(), document.getElementById('app'));