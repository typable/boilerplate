// @ts-check

import { html } from './deps.js';

export default function AppComponent() {
  const context = {};

  return html`
    <ctx:global value=${context}>
      <main>
        <h1>boilerplate</h1>
      </main>
    </ctx:global>
  `;
}
