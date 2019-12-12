import { storiesOf } from '@storybook/html';

import { Button } from './Button';

storiesOf(Button.name, module).add('Default', () =>
  new Button().setText('Button').getHtmlElement()
);
