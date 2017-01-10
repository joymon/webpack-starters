#TypeScript AngularJS 1.x Advaned sample

- If run from disk it just bootstraps angular but no components will be rendered
- It uses webpack-dev-server to serve html templates for angular. If we run from disk it is not finding the templates.
- It uses minification using UglifyJsPlugin webpack plugin
- It uses code splitting. vendor.bundle.js contains Angular 1 in minified form and bundle.js contains app code.