import { registerDependencies } from 'mjml-validator';
import { BodyComponent } from 'mjml-core';

registerDependencies({
  'tp-foo': [],
  'mj-body': ['tp-foo'],
  'mj-column': ['tp-foo'],
});

export default class TpFoo extends BodyComponent {
  static endingTag = true;

  static allowedAttributes = {
    color: 'color',
  };

  static defaultAttributes = {
    color: 'red',
  };

  getStyles() {
    return {
      root: {
        color: this.getAttribute('color'),
      },
    };
  }

  render() {
    // Use "renderMJML" if return includes mjml tags
    // return this.renderMJML(`<mj-text>${this.getContent()}</mj-text>`);

    // Use if only returning HTML string
    return `
        <div
            ${this.htmlAttributes({
              style: 'root', // This will add the 'root' attributes from getStyles() as inline style
            })}>
            ${this.getContent()}
        </div>`;
  }
}
