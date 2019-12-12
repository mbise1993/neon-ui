import { IUiElement, UiElement } from '../UiElement';

export interface IText extends IUiElement {}

export class Text extends UiElement implements IText {
  public static readonly className = 'neon-text';

  constructor() {
    super('span');

    this.addClass(Text.className);
  }
}
