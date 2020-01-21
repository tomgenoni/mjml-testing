import { registerDependencies } from 'mjml-validator';
import { BodyComponent } from 'mjml-core';
import * as tokens from '@thumbtack/thumbprint-tokens';

import conditionalTag from 'mjml-core/lib/helpers/conditionalTag';

registerDependencies({
  'tp-title': [],
  'mj-column': ['tp-title'],
  'mj-hero': ['tp-title'],
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
    'background-color': 'color',
    color: 'color',
    height: 'unit(px,%)',
    'space-bottom': 'enum(1,2,3)',
  };

  static defaultAttributes = {
    size: 1,
    align: 'left',
    color: tokens.tpColorBlack,
    padding: '8px 16px',
  };

  getStyles() {
    return {
      text: {
        'font-size': fontSizeMap[this.getAttribute('size')],
        'font-weight': 700,
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
