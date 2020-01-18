import { registerDependencies } from 'mjml-validator';
import { BodyComponent } from 'mjml-core';
import * as tokens from '@thumbtack/thumbprint-tokens';

registerDependencies({
  'tp-button': [],
  'mj-body': ['tp-button'],
  'mj-wrapper': ['tp-button'],
  'mj-section': ['tp-button'],
});

const spaceMap = {
  1: tokens.tpSpace1,
  2: tokens.tpSpace2,
  3: tokens.tpSpace3,
};

export default class TpButton extends BodyComponent {
  static endingTag = true;

  static allowedAttributes = {
    align: 'enum(left,right,center)',
    href: 'string',
  };

  // Fallback values
  static defaultAttributes = {
    align: 'left',
    href: '',
  };

  render() {
    return this.renderMJML(`
         <mj-column width="100%">
            <mj-button
                ${this.htmlAttributes({
                  align: this.getAttribute('align'),
                  href: this.getAttribute('href'),
                  color: tokens.tpColorWhite,
                  'background-color': tokens.tpColorBlue,
                  padding: 0,
                  'font-weight': 700,
                  'text-align': 'center',
                  'inner-padding': '13px 23px',
                  'border-radius': '4px',
                })}
            >
                ${this.getContent()}
            </mj-button>
        </mj-column>
    `);
  }
}
