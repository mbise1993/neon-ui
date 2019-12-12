export interface IUiElement {
  getHtmlElement(): HTMLElement;
  getParent(): IUiElement | undefined;
  setParent(element: IUiElement): UiElement;
  destroy(): void;
  getChildren(): IUiElement[];
  addChild(...elements: IUiElement[]): UiElement;
  setText(text: string): UiElement;
  addClass(...classes: string[]): UiElement;
  removeClass(...classes: string[]): UiElement;
  setStyle(style: Partial<CSSStyleDeclaration>): UiElement;
  onClick(handle: (e: MouseEvent) => void): UiElement;
  onHover(handle: (e: MouseEvent) => void): UiElement;
}

export class UiElement implements IUiElement {
  private htmlElement: HTMLElement;
  private parent?: IUiElement;
  private children: IUiElement[] = [];

  constructor(tagName: keyof HTMLElementTagNameMap) {
    this.htmlElement = document.createElement(tagName);
  }

  public getHtmlElement() {
    return this.htmlElement;
  }

  public getParent() {
    return this.parent;
  }

  public setParent(element: IUiElement) {
    element.getHtmlElement().append(this.htmlElement);
    return this;
  }

  public destroy() {
    this.htmlElement.remove();
  }

  public getChildren() {
    return this.children;
  }

  public addChild(...elements: IUiElement[]) {
    elements.forEach(element => {
      this.children.push(element);
      this.htmlElement.append(element.getHtmlElement());
    });

    return this;
  }

  public setText(text: string) {
    this.htmlElement.innerText = text;
    return this;
  }

  public addClass(...classes: string[]) {
    this.htmlElement.classList.add(...classes);
    return this;
  }

  public removeClass(...classes: string[]) {
    this.htmlElement.classList.remove(...classes);
    return this;
  }

  public setStyle(style: Partial<CSSStyleDeclaration>) {
    this.htmlElement.setAttribute('style', JSON.stringify(style));
    return this;
  }

  public onClick(handler: (e: MouseEvent) => void) {
    this.htmlElement.addEventListener('onclick', handler as any);
    return this;
  }

  public onHover(handler: (e: MouseEvent) => void) {
    this.htmlElement.addEventListener('onmouseover', handler as any);
    return this;
  }
}
