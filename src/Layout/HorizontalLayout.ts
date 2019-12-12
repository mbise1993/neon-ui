import { ILayout } from './Layout';
import { UiElement } from 'UiElement';

export class HorizontalLayout extends UiElement implements ILayout {
  public static className = 'neon-horizontal-layout';

  constructor() {
    super('div');

    this.addClass(HorizontalLayout.className);
  }
}
