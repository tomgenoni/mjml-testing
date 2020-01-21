import { registerDependencies } from 'mjml-validator';
import { BodyComponent } from 'mjml-core';
import * as tokens from '@thumbtack/thumbprint-tokens';

import widthParser from 'mjml-core/lib/helpers/widthParser';

registerDependencies({
  'tp-button': [],
  'mj-column': ['tp-button'],
  'mj-hero': ['tp-button'],
});

export default class TpButton extends BodyComponent {
  static endingTag = true;

  static allowedAttributes = {
    align: 'enum(left,center,right)',
    href: 'string',
    name: 'string',
    rel: 'string',
    target: 'string',
    width: 'unit(px,%)',
  };

  static defaultAttributes = {
    align: 'left',
    'background-color': tokens.tpColorBlue,
    'border-radius': '3px',
    color: '#ffffff',
    target: '_blank',
    padding: '8px 16px',
  };

  getStyles() {
    return {
      table: {
        'border-collapse': 'separate',
        width: this.getAttribute('width'),
        'line-height': '100%',
      },
      td: {
        'border-radius': this.getAttribute('border-radius'),
        cursor: 'auto',
        height: this.getAttribute('height'),
        'mso-padding-alt': this.getAttribute('inner-padding'),
        'text-align': this.getAttribute('text-align'),
        background: this.getAttribute('background-color'),
      },
      content: {
        display: 'inline-block',
        width: this.calculateAWidth(this.getAttribute('width')),
        background: this.getAttribute('background-color'),
        color: this.getAttribute('color'),
        'font-size': '16px',
        'font-style': this.getAttribute('font-style'),
        'font-weight': 700,
        'line-height': 1.6,
        margin: '0',
        padding: '10px 25px',
        'mso-padding-alt': '0px',
        'border-radius': this.getAttribute('border-radius'),
        'text-decoration': 'none',
      },
    };
  }

  calculateAWidth(width) {
    if (!width) return null;

    const { parsedWidth, unit } = widthParser(width);

    // impossible to handle percents because it depends on padding and text width
    if (unit !== 'px') return null;

    const { borders } = this.getBoxWidths();

    const innerPaddings =
      this.getShorthandAttrValue('inner-padding', 'left') +
      this.getShorthandAttrValue('inner-padding', 'right');

    return `${parsedWidth - innerPaddings - borders}px`;
  }

  render() {
    const tag = this.getAttribute('href') ? 'a' : 'p';

    return `
      <table
        ${this.htmlAttributes({
          border: '0',
          cellpadding: '0',
          cellspacing: '0',
          role: 'presentation',
          style: 'table',
        })}
      >
        <tr>
          <td
            ${this.htmlAttributes({
              align: 'center',
              bgcolor:
                this.getAttribute('background-color') === 'none'
                  ? undefined
                  : this.getAttribute('background-color'),
              role: 'presentation',
              style: 'td',
              valign: this.getAttribute('vertical-align'),
            })}
          >
            <${tag}
              ${this.htmlAttributes({
                href: this.getAttribute('href'),
                rel: this.getAttribute('rel'),
                name: this.getAttribute('name'),
                style: 'content',
                target: tag === 'a' ? this.getAttribute('target') : undefined,
              })}
            >
              ${this.getContent()}
            </${tag}>
          </td>
        </tr>
      </table>
    `;
  }
}
