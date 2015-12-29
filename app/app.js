'use strict';

var React = require('react');
var debounce = require('lodash.debounce');
var Editor = require('./editor');
var Preview = require('./preview');
var getDefaultSource = require('./default-source');
var supportsLocalStorage = require('./has-local-storage');

var hasLocalStorage = supportsLocalStorage();
var initialSource = getDefaultSource();

module.exports = React.createClass({
    getInitialState: function() {
        return {
            source: initialSource
        };
    },

    onChange: function(e) {
        this.setState({ source: e.target.value });

        this.storeSource(e.target.value);
    },

    storeSource: debounce(function(src) {
        if (!hasLocalStorage) {
            return;
        }

        localStorage.markdownSource = src || initialSource;
    }, 250),

    render: function() {
        return (
            <div className="app">
                <Editor onChange={this.onChange} initialSource={initialSource} />
                <Preview source={this.state.source} />
            </div>
        );
    }
});