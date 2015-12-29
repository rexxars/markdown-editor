'use strict';

var React = require('react');

module.exports = function MarkdownEditor(props) {
    return (
        <textarea
            className="editor"
            defaultValue={props.initialSource}
            onChange={props.onChange}
        />
    );
};