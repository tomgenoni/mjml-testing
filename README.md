# mjml-testing

A minimal example of mlml compiling with:

1. Custom components built on mjml's core components
2. Thumbprint tokens for colors, font sizes, etc.
3. Handlebars for data

## Run locally

```
yarn && yarn start
```

This will output `index.html` to the root. You can drag into a web browser to render and inspect.


## Compilation order

When using Handlebars for templating it should run before mjml.

```
<mj-column>
     {{#each people}}
         <mj-text>{{this}}</mj-text>
     {{/each}}
</mj-column>
```

It is possible to run Handlebars last but their are significant downsides:

1. The Handlebars conditionals must be wrapped in `<mj-raw>` tags.

```
<mj-column>
    <mj-raw>
        {{#each people}}
    </mj-raw>
        <mj-text>{{this}}</mj-text>
    <mj-raw>
        {{/each}}
    </mj-raw>
</mj-column>
```

2. Handlebar variables should **not** be wrapped in `<mj-raw>` tags.

```
<mj-text>
    <mj-raw>{{name}}</mj-raw>
</mj-text>
```

as the resulting HTML will contain `<mj-raw>` tags.

```
<p>
    <mj-raw>Tom</mj-raw>
</p>
```

3. We would not be able to use mjml's built-in minification unless we added more code to the source when the conditional used greater/less than tag.

```
<mj-column>
    <mj-raw>
        <!-- htmlmin:ignore -->{{#if foo < 5}}<!-- htmlmin:ignore -->
    </mj-raw>
        <mj-text>{{this}}</mj-text>
    <mj-raw>
        {{/if}}
    </mj-raw>
</mj-column>
```

See https://mjml.io/documentation/#mjml-raw for more details.
