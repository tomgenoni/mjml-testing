import { registerDependencies } from 'mjml-validator';
import { BodyComponent } from 'mjml-core';
import * as tokens from '@thumbtack/thumbprint-tokens';

registerDependencies({
  'tp-text': [],
  'mj-body': ['tp-text'],
  'mj-column': ['tp-text'],
});

const fontSizeMap = {
  1: tokens.tpFontBody1Size,
  2: tokens.tpFontBody2Size,
  3: tokens.tpFontBody3Size,
};

export default class TpText extends BodyComponent {
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
        >
            ${this.getContent()}
        </mj-text>
     `);
  }
}
