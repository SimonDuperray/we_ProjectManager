import React, { Component } from 'react'

class HelpMarkdown extends Component {
    render() {
        return (
            <div style={{textAlign: 'center'}}>
                <h1 id="titleMarkdownHelp">Commands for Markdown edit</h1>
                <ul id="commandsMarkdown">
                    <li>* <b>bold</b></li>
                    <li>$ <i>italic</i></li>
                    <li>_ <u>underline</u></li>
                </ul>
            </div>
        )
    }
}

export default HelpMarkdown