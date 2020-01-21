import { registerDependencies } from 'mjml-validator';
import { BodyComponent } from 'mjml-core';
import * as tokens from '@thumbtack/thumbprint-tokens';

registerDependencies({
  'tp-title': [],
  'mj-hero': ['tp-title'],
  'mj-column': ['tp-title'],
});

const fontSizeMap = {
  1: tokens.tpFontTitle1Size,
  2: tokens.tpFontTitle2Size,
  3: tokens.tpFontTitle3Size,
};

export default class TpTitle extends BodyComponent {
  static endingTag = true;

  static allowedAttributes = {
    size: 'enum(1,2,3)',
  };

  static defaultAttributes = {
    size: 1,
    padding: '8px 16px',
    align: 'left',
  };

  render() {
    return this.renderMJML(`
        <mj-text
            font-size="${fontSizeMap[this.getAttribute('size')]}"
            color="${tokens.tpColorBlack}"
            font-weight="700"
        >
            ${this.getContent()}
        </mj-text>
     `);
  }
}
