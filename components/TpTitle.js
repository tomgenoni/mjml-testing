import { registerDependencies } from 'mjml-validator';
import { BodyComponent } from 'mjml-core';
import * as tokens from '@thumbtack/thumbprint-tokens';

registerDependencies({
  'tp-title': [],
  'mj-column': ['tp-title'],
});

// const fontSizeMap = {
//   1: tokens.tpFontTitle1Size,
//   2: tokens.tpFontTitle2Size,
//   3: tokens.tpFontTitle3Size,
// };

// const paddingMap = {
//   1: tokens.tpSpace1,
//   2: tokens.tpSpace2,
//   3: tokens.tpSpace3,
// };

export default class TpTitle extends BodyComponent {
  // static endingTag = true;

  //   static allowedAttributes = {
  //     size: 'enum(1,2,3)',
  //     align: 'enum(left,right,center)',
  //     'padding-bottom': 'enum(1,2,3)',
  //   };

  //   // Fallback values
  //   static defaultAttributes = {
  //     size: 1,
  //     align: 'left',
  //     'padding-bottom': '1',
  //   };

  //   //This function defines styles that can be used when rendering (see render() below)
  //   getStyles() {
  //     return {
  //       root: {
  //         'text-align': this.getAttribute('align'),
  //         'font-size': fontSizeMap[this.getAttribute('size')],
  //         'font-family': '-apple-system, BlinkMacSystemFont',
  //         'padding-bottom': paddingMap[this.getAttribute('padding-bottom')],
  //       },
  //     };
  //   }

  render() {
    // Use "renderMJML" if return includes mjml tags

    // return `
    //     <div
    //         ${this.htmlAttributes({
    //           style: 'root', // This will add the 'root' attributes from getStyles() as inline style
    //         })}>
    //         ${this.getContent()}
    //     </div>`;

    return this.renderMJML(`
        <mj-text padding="111px">
           ${this.getContent()}
        </mj-text>
    `);
  }
}
