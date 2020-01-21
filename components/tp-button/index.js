import { registerDependencies } from 'mjml-validator';
import { BodyComponent } from 'mjml-core';
import * as tokens from '@thumbtack/thumbprint-tokens';

registerDependencies({
  'tp-button': [],
  'mj-body': ['tp-button'],
  'mj-column': ['tp-button'],
  'mj-hero': ['tp-button'],
});

export default class TpButton extends BodyComponent {
  static endingTag = true;

  static allowedAttributes = {
    'background-color': 'string',
  };

  static defaultAttributes = {
    padding: '8px 16px',
  };

  render() {
    return this.renderMJML(`
        <mj-button>
            ${this.getContent()}
        </mj-button>
     `);
  }
}
