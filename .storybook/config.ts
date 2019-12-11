import { configure } from '@storybook/html';

// automatically import all files ending in *.stories.ts
const req = require.context('../src', true, /\.stories\.ts$/);

function loadStories() {
  req.keys().forEach(req);
}

configure(loadStories, module);
