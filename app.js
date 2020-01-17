import mjml2html from 'mjml';
import Handlebars from 'handlebars';
import fs from 'fs';

// Provides function to register custom components
import { registerComponent } from 'mjml-core';

// Import and register custom component
import TpFoo from './components/TpFoo';
import TpTitle from './components/TpTitle';
registerComponent(TpFoo);
registerComponent(TpTitle);

const template = Handlebars.compile(`
  <mjml>
    <mj-head>
        <mj-attributes>
            <mj-text padding="0" />
            <mj-all font-family="Arial" color="#2f3033" />
        </mj-attributes>
    </mj-head>
    <mj-body>
        <mj-section>
            <tp-title size="1" padding="2">
                --- component ---
            </tp-title>
        </mj-section>
    </mj-body>
  </mjml>
`);

const html = template({ people: ['Tom', 'Dan'] });
const htmlOutput = mjml2html(html);

console.log(htmlOutput.errors);

fs.writeFile('index.html', htmlOutput.html, err => {
  if (err) throw err;
});
