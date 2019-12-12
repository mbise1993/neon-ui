import { storiesOf } from '@storybook/html';

import { Text } from './Text';

storiesOf(Text.name, module).add('Default', () =>
  new Text().setText('I am a text element').getHtmlElement()
);
