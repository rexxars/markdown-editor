'use strict';

var hasLocalStorage = require('./has-local-storage');

module.exports = function getDefautlSource() {
    return (hasLocalStorage() && localStorage.markdownSource) || [
        '# markdown-editor', '',
        'Super simple markdown editor/previewer, based on ',
        '[react-markdown](https://github.com/rexxars/react-markdown)',
        '',
        '**Note: HTML input is disabled in this editor, for now**',
        '',

        '## Flow', '',
        '* When source in the editor is changed:',
        '  * Callback is triggered',
        '  * Updates state on app component',
        '  * App component sets new source on preview component (react-markdown)',
        '  * Changes are reflected!',
        '* As a bonus, a debounced method stores the editor value to localStorage (if available)',
        '',

        '## License', '',
        '* MIT-licensed'
    ].join('\n');
};
