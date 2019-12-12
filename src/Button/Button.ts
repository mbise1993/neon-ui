import { IUiElement, UiElement } from '../UiElement';

import './Button.css';

export interface IButton extends IUiElement {}

export interface ButtonOptions {
  height?: number;
  width?: number;
  stretch?: boolean;
}

const defaultOptions: ButtonOptions = {};

export class Button extends UiElement implements IButton {
  public static readonly className = 'neon-button';

  constructor(options?: ButtonOptions) {
    super('button');

    this.addClass(Button.className);

    options = { ...defaultOptions, ...options };
    this.setStyle({
      flex: options.stretch ? '1' : '0',
      height: options.height ? `${options.height}px` : 'auto',
      width: options.width ? `${options.width}px` : 'auto'
    });
  }
}
