const React = require('react');
const { hydrateRoot } = require('react-dom/client');
const InitView = require('../pages/init-page/view.js')
require('../pages/init-page/styles.scss');
require('../pages/init-page/SearchBox.css');

hydrateRoot(document.getElementById('root'), <InitView />);
