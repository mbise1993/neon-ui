import { IUiElement } from 'UiElement';

export interface ILayout {
  addChild(...element: IUiElement[]): void;
}
