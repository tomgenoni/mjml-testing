import { registerDependencies } from 'mjml-validator';
import { BodyComponent } from 'mjml-core';
import * as tokens from '@thumbtack/thumbprint-tokens';

registerDependencies({
  'tp-button': [],
  'mj-column': ['tp-button'],
  'mj-hero': ['tp-button'],
});

const themeMap = {
  secondary: { background: 'red' },
};

export default class TpButton extends BodyComponent {
  static endingTag = true;

  static allowedAttributes = {
    'background-color': 'string',
    href: 'string',
    width: 'unit(px,%)',
    'css-class': 'string',
    theme: 'string',
  };

  static defaultAttributes = {
    padding: '8px 16px',
    'css-class': 'button-full-width-anchor-fix',
    theme: 'primary',
  };

  render() {
    return this.renderMJML(`
        <mj-button
              ${this.htmlAttributes({
                href: this.getAttribute('href'),
                width: this.getAttribute('width'),
                'background-color': this.getAttribute('theme')
                  ? themeMap[this.getAttribute('theme')].background
                  : undefined,
              })}
        >
            ${this.getContent()}
        </mj-button>
     `);
  }
}
