import mjml2html from 'mjml';
import Handlebars from 'handlebars';
import fs from 'fs';

// Provides function to register custom components
import { registerComponent } from 'mjml-core';
import * as tokens from '@thumbtack/thumbprint-tokens';

// Import and register custom component
import TpText from './components/tp-text/';
import TpTitle from './components/tp-title/';
import TpButton from './components/tp-button/';
registerComponent(TpText);
registerComponent(TpTitle);
registerComponent(TpButton);

const template = Handlebars.compile(`
  <mjml>
    <mj-head>
        <mj-attributes>
            <mj-divider padding="8px 16px" border-width="1px" border-color="lightgrey" />
        </mj-attributes>
        <mj-style>
            @font-face {
                font-family: 'Mark';
                font-weight: 400;
                src: url(https://fonts.thumbtack.com/mark/mark-tt-subset.woff2) format('woff2'),
                url(https://fonts.thumbtack.com/mark/mark-tt-subset.woff) format('woff');
            }
            @font-face {
                font-family: 'Mark';
                font-weight: 700;
                src: url(https://fonts.thumbtack.com/mark/mark-tt-subset-bold.woff2) format('woff2'),
                url(https://fonts.thumbtack.com/mark/mark-tt-subset-bold.woff) format('woff');
            }
            body {
                font-family: 'Mark';
                font-weight: 400;
                font-size: 16px;
                line-height: 1.6;
            }
        </mj-style>
    </mj-head>
    <mj-body>
        <mj-section>
            <mj-column>
                <tp-title>This is a title.</tp-title>
                <tp-text>She was so deeply imbedded in my consciousness that for the first year of school I seem to have believed that each of my teachers was my mother in disguise.</tp-text>
                <mj-divider />
                <tp-text>Oh, to be a center fielder, a center fielder and nothing more.</tp-text>
            </mj-column>
        </mj-section>
        <mj-section>
            <mj-column>
                <tp-button width="100%" href="https://thumbtack.com">Button</tp-button>
            </mj-column>
            <mj-column>
                <tp-button width="100%" href="https://thumbtack.com">Button</tp-button>
            </mj-column>
        </mj-section>
    </mj-body>
  </mjml>
`);

const html = template({ name: 'Tom' });
const htmlOutput = mjml2html(html);

if (htmlOutput.errors[0] !== undefined) {
  console.log(htmlOutput.errors[0]);
} else {
  fs.writeFile('index.html', htmlOutput.html, err => {
    if (err) throw err;
  });
}
