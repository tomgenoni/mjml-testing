import { registerDependencies } from 'mjml-validator';
import { BodyComponent } from 'mjml-core';
import * as tokens from '@thumbtack/thumbprint-tokens';

registerDependencies({
  'tp-button': [],
  'mj-column': ['tp-button'],
  'mj-hero': ['tp-button'],
});

const themeMap = {
  secondary: { background: 'white', border: '2px solid gray', color: 'black' },
};

export default class TpButton extends BodyComponent {
  static endingTag = true;

  static allowedAttributes = {
    href: 'string',
    width: 'unit(px,%)',
    theme: 'enum(secondary)',
  };

  static defaultAttributes = {
    padding: '8px 16px',
    'css-class': 'button-full-width-anchor-fix',
  };

  render() {
    return this.renderMJML(`
        <mj-button
            href="${this.getAttribute('href')}"
            width="${this.getAttribute('width')}"
            background-color="${
              this.getAttribute('theme')
                ? themeMap[this.getAttribute('theme')].background
                : tokens.tpColorBlue
            }"
            border="${
              this.getAttribute('theme')
                ? themeMap[this.getAttribute('theme')].border
                : undefined
            }"
            color="${
              this.getAttribute('theme')
                ? themeMap[this.getAttribute('theme')].color
                : '#ffffff'
            }"
        >
            ${this.getContent()}
        </mj-button>
     `);
  }
}
