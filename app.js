import mjml2html from 'mjml';
import Handlebars from 'handlebars';

// Provides function to register custom components
import { registerComponent } from 'mjml-core';

// Import and register custom component
import TpFoo from './components/TpFoo';
import TpTitle from './components/TpTitle';
registerComponent(TpFoo);
registerComponent(TpTitle);

const template = Handlebars.compile(`
  <mjml>
    <mj-body>
        <mj-section>
            <mj-column>
                <tp-title>
                    --- component ---
                </tp-title>
                <mj-text padding="789px">
                    --- mjml ---
                </mj-text>
                {{#each people}}
                    <tp-foo>Hi {{this}}</tp-foo>
                {{/each}}
            </mj-column>
        </mj-section>
    </mj-body>
  </mjml>
`);

const html = template({ people: ['Tom', 'Dan'] });
const htmlOutput = mjml2html(html);

/*
  Print the HTML generated and MJML errors if any
*/
console.log(htmlOutput);
