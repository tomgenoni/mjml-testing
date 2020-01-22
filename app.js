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
            <mj-divider padding="16px" border-width="1px" border-color="${tokens.tpColorGray300}" />
            <mj-text
                font-family="Mark, Arial, sans-serif"
                padding="8px 16px"
                font-size="16px"
                color="${tokens.tpColorBlack300}"
                line-height="1.6"
                align="left"
            />
            <mj-button
                font-family="Mark, Arial, sans-serif"
                padding="8px 16px"
                inner-padding="16px 24px"
                background-color="${tokens.tpColorBlue}"
                font-size="16px"
                color="#ffffff"
                align="left"
                font-weight="700"
            />
            <mj-image padding="8px 16px" />
            <mj-section padding="8px 16px" />
            <mj-table padding="8px 24px" />
            <mj-spacer height="24px" />
            <mj-wrapper padding="24px 0" />
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
            .button-full-width-anchor-fix a {
                display: block !important;
            }
        </mj-style>
    </mj-head>
    <mj-body background-color="#ffffff">
        <mj-section>
            <mj-column>
                <tp-title>Hi {{name}}.</tp-title>
                <tp-text>She was so deeply imbedded in my consciousness that for the first year of school I seem to have believed that each of my teachers was my mother in disguise.</tp-text>
                <mj-divider />
                <mj-text>Oh, to be a center fielder, a center fielder and nothing more.</mj-text>
                <tp-text>Oh, to be a center fielder, a center fielder and nothing more.</tp-text>
                <mj-button href="https://google.com">tp Button</mj-button>
                <tp-button href="https://google.com" theme="secondary">Primary</tp-button>
            </mj-column>
        </mj-section>
    </mj-body>
  </mjml>
`);

const html = template({ name: 'Tom' });
const htmlOutput = mjml2html(html, { minify: true });

if (htmlOutput.errors[0] !== undefined) {
  console.log(htmlOutput.errors[0]);
} else {
  fs.writeFile('index.html', htmlOutput.html, err => {
    if (err) throw err;
  });
}
