const React = require('react');
const { hydrateRoot } = require('react-dom/client');
const InitView = require('../pages/init-page/view.js')
require('../pages/init-page/SearchBox.scss');

hydrateRoot(document.getElementById('root'), <InitView />);
