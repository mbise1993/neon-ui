export class UiElement<TTagName extends keyof HTMLElementTagNameMap> {
  private element: HTMLElementTagNameMap[TTagName];

  constructor(tagName: TTagName) {
    this.element = document.createElement(tagName);
  }

  public getHtmlElement() {
    return this.element;
  }

  public mount(parent: Node) {
    parent.appendChild(this.element);
    return this;
  }

  public destroy() {
    this.element.remove();
  }

  public setContent(content: HTMLElement | string | number) {
    if (content instanceof HTMLElement) {
      this.element.appendChild(content);
    } else {
      this.element.innerText = content.toString();
    }

    return this;
  }

  public addClass(classname: string) {
    this.element.classList.add(classname);
    return this;
  }

  public removeClass(classname: string) {
    this.element.classList.remove(classname);
    return this;
  }

  public setStyle(style: Partial<CSSStyleDeclaration>) {
    this.element.setAttribute('style', JSON.stringify(style));
    return this;
  }

  public onClick(handler: (e: MouseEvent) => void) {
    this.element.addEventListener('onclick', handler as any);
    return this;
  }

  public onHover(handler: (e: MouseEvent) => void) {
    this.element.addEventListener('onmouseover', handler as any);
    return this;
  }
}
