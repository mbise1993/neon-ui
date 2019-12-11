import { storiesOf } from '@storybook/html';

import { Button } from './Button';

storiesOf('Button', module)
  .add('Default', () => new Button().setContent('Test').getHtmlElement());
