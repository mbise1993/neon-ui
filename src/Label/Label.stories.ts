import { storiesOf } from '@storybook/html';

import { Label } from './Label';

storiesOf(Label.name, module).add('Default', () =>
  new Label().setText('I am a label').getHtmlElement()
);
