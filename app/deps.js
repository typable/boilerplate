// @ts-check

import React from 'https://cdn.skypack.dev/react';
import ReactDOM from 'https://cdn.skypack.dev/react-dom';
import figure from 'https://cdn.typable.dev/figure';

const { dict } = figure(React.createElement);

const global = React.createContext({});

const ContextBundle = {
  global: global.Provider,
};

const html = dict({
  ctx: ContextBundle,
});

export { html, global, React, ReactDOM };
