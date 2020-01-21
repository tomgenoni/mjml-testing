import { registerDependencies } from 'mjml-validator';
import { BodyComponent } from 'mjml-core';
import * as tokens from '@thumbtack/thumbprint-tokens';

registerDependencies({
  'tp-title': [],
  'mj-body': ['tp-title'],
  'mj-wrapper': ['tp-title'],
  'mj-section': ['tp-title'],
});

const fontSizeMap = {
  1: tokens.tpFontTitle1Size,
  2: tokens.tpFontTitle2Size,
  3: tokens.tpFontTitle3Size,
};

const spaceMap = {
  1: tokens.tpSpace1,
  2: tokens.tpSpace2,
  3: tokens.tpSpace3,
};

export default class TpTitle extends BodyComponent {
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
                  'font-weight': 700,
                  color: tokens.tpColorBlack,
                  'line-height': '1.1',
                })}
            >
                ${this.getContent()}
            </mj-text>
        </mj-column>
    `);
  }
}
