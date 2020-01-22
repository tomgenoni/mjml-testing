import mjml2html from 'mjml';
import Handlebars from 'handlebars';
import fs from 'fs';

const people = ['Tom', 'Dan'];

const mjmlFile = `
  <mjml>
    <mj-body>
        <mj-section>
            <mj-column>
                <mj-raw>
                    {{#each people}}
                </mj-raw>
                    <mj-text>{{this}}</mj-text>
                <mj-raw>
                    {{/each}}
                </mj-raw>
            </mj-column>
        </mj-section>
    </mj-body>
  </mjml>
`;

const mjmlOutput = mjml2html(mjmlFile);

const template = Handlebars.compile(mjmlOutput.html);
const compiled = template({ people: ['Tom', 'Dan'] });

fs.writeFile('index.html', compiled, err => {
  if (err) throw err;
});
