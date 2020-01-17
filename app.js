import mjml2html from 'mjml';
import Handlebars from 'handlebars';
import fs from 'fs';

// Provides function to register custom components
import { registerComponent } from 'mjml-core';

// Import and register custom component
import TpTitle from './components/TpTitle';
import TpText from './components/TpText';
registerComponent(TpTitle);
registerComponent(TpText);

const template = Handlebars.compile(`
  <mjml>
    <mj-head>
        <mj-attributes>
            <mj-text padding="0" />
            <mj-all
                font-family="Mark, Arial"
                color="#676d73"
                font-size="16px"
                line-height="1.6"
            />
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
        </mj-style>
    </mj-head>
    <mj-body>
        <mj-section>
            <tp-title size="2">
                Hi {{name}}, your background check is complete.
            </tp-title>
            <tp-text>
                Congratulations! You passed your background check on June 6, 2017. A badge now appears on your profile which will help to increase your credibility with customers.
            </tp-text>
            <tp-text>
                Thanks for your help in building trust on Thumbtack.
            </tp-text>
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
