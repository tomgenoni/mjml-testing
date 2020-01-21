import { registerDependencies } from 'mjml-validator';
import { BodyComponent } from 'mjml-core';
import * as tokens from '@thumbtack/thumbprint-tokens';

import conditionalTag from 'mjml-core/lib/helpers/conditionalTag';

registerDependencies({
  'tp-text': [],
  'mj-column': ['tp-text'],
  'mj-hero': ['tp-text'],
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
    'background-color': 'color',
    color: 'color',
    height: 'unit(px,%)',
    'space-bottom': 'enum(1,2,3)',
    'font-weight': 'enum(400,700)',
  };

  static defaultAttributes = {
    size: 1,
    align: 'left',
    color: tokens.tpColorBlack300,
    'font-weight': 400,
    padding: '8px 16px',
  };

  getStyles() {
    return {
      text: {
        'font-size': fontSizeMap[this.getAttribute('size')],
        'font-weight': this.getAttribute('font-weight'),
        'text-align': this.getAttribute('align'),
        'padding-bottom': spaceMap[this.getAttribute('space-bottom')],
        color: this.getAttribute('color'),
        height: this.getAttribute('height'),
      },
    };
  }

  renderContent() {
    return `
      <div
        ${this.htmlAttributes({
          style: 'text',
        })}
      >${this.getContent()}</div>
    `;
  }

  render() {
    const height = this.getAttribute('height');

    return height
      ? `
        ${conditionalTag(`
          <table role="presentation" border="0" cellpadding="0" cellspacing="0"><tr><td height="${height}" style="vertical-align:top;height:${height};">
        `)}
        ${this.renderContent()}
        ${conditionalTag(`
          </td></tr></table>
        `)}
      `
      : this.renderContent();
  }
}
