import { IUiElement, UiElement } from '../UiElement';

export interface ILabel extends IUiElement {}

export class Label extends UiElement implements ILabel {
  public static readonly className = 'neon-label';

  constructor() {
    super('label');

    this.addClass(Label.className);
  }
}
