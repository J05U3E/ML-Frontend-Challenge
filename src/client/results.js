const React = require('react');
const { hydrateRoot } = require('react-dom/client');
const ResultsView = require('../pages/results-page/view.js');
require('../pages/init-page/SearchBox.scss');
require('../pages/results-page/Card.scss');
require('../pages/results-page/SearchResult.scss');

const data = window.__PRELOADED_STATE__;

hydrateRoot(document.getElementById('root'), <ResultsView data={data} />);
