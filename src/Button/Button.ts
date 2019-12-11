import UiElement from '../UiElement';

import './Button.css';

export interface ButtonOptions {
  height?: number;
  width?: number;
  stretch?: boolean;
}

const defaultOptions: ButtonOptions = {};

export class Button extends UiElement<'button'> {
  public static readonly Class = 'neon-button';

  constructor(options?: ButtonOptions) {
    super('button');

    this.addClass(Button.Class);

    options = { ...defaultOptions, ...options };
    this.setStyle({
      flex: options.stretch ? '1' : '0',
      height: options.height ? `${options.height}px` : 'auto',
      width: options.width ? `${options.width}px` : 'auto',
    });
  }
}
