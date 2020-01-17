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

const paddingMap = {
  1: tokens.tpSpace1,
  2: tokens.tpSpace2,
  3: tokens.tpSpace3,
};

export default class TpTitle extends BodyComponent {
  static endingTag = true;

  static allowedAttributes = {
    size: 'enum(1,2,3)',
    align: 'enum(left,right,center)',
    padding: 'enum(1,2,3)',
  };

  // Fallback values
  static defaultAttributes = {
    size: 1,
    align: 'left',
    padding: '1',
  };

  render() {
    return this.renderMJML(`
         <mj-column width="100%">
            <mj-text
                ${this.htmlAttributes({
                  padding: paddingMap[this.getAttribute('padding')],
                  'font-size': fontSizeMap[this.getAttribute('size')],
                })}
            >
                ${this.getContent()}
            </mj-text>
        </mj-column>
    `);
  }
}
