'use strict';

var React = require('react');
var Markdown = require('react-markdown');

module.exports = function MarkdownPreview(props) {
    return (
        <Markdown
            className="preview"
            escapeHtml={true}
            source={props.source}
        />
    );
};