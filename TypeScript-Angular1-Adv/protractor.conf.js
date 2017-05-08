exports.config = {
  seleniumAddress: 'http://localhost:4444/wd/hub',
  directConnect: true,
  baseUrl: 'http://localhost:8080',
capabilities: {
  'browserName': 'chrome'
},
  specs: ['tests/e2e-spec.js']
};