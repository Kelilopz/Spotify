import { LitElement, css, html } from 'lit';

class MyElement extends LitElement {
  render() {
    return html`
      <h1>Hello World</h1>
    `;
  }

  static get styles() {
    return css`
      :host {
        display: block;
        text-align: center;
        padding: 1rem;
        font-family: Arial, sans-serif;
      }
    `;
  }
}

customElements.define('my-element', MyElement);
