import { registerDependencies } from 'mjml-validator';
import { BodyComponent } from 'mjml-core';
import * as tokens from '@thumbtack/thumbprint-tokens';

registerDependencies({
  'tp-text': [],
  'mj-body': ['tp-text'],
  'mj-wrapper': ['tp-text'],
  'mj-section': ['tp-text'],
});

const fontSizeMap = {
  1: tokens.tpFontBody1Size,
  2: tokens.tpFontBody2Size,
  3: tokens.tpFontBody3Size,
};

const spaceMap = {
  1: tokens.tpSpace1,
  2: tokens.tpSpace2,
  3: tokens.tpSpace3,
};

export default class TpText extends BodyComponent {
  static endingTag = true;

  static allowedAttributes = {
    size: 'enum(1,2,3)',
    align: 'enum(left,right,center)',
    'space-bottom': 'enum(1,2,3)',
  };

  // Fallback values
  static defaultAttributes = {
    size: 1,
    align: 'left',
    'space-bottom': '3',
  };

  render() {
    return this.renderMJML(`
         <mj-column width="100%">
            <mj-text
                ${this.htmlAttributes({
                  'padding-bottom': spaceMap[this.getAttribute('space-bottom')],
                  'font-size': fontSizeMap[this.getAttribute('size')],
                })}
            >
                ${this.getContent()}
            </mj-text>
        </mj-column>
    `);
  }
}
