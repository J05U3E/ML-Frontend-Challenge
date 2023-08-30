const React = require('react');
const { hydrateRoot } = require('react-dom/client');
const DetailView = require('../pages/detail-page/view.js')
require('../pages/init-page/SearchBox.css');
require('../pages/detail-page/styles.scss');
require('../pages/detail-page/DetailProduct.css');

const data = window.__PRELOADED_STATE__;

const domNode = document.getElementById('root');
hydrateRoot(domNode, <DetailView data={data} />);
