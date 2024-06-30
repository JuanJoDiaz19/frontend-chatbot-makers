import React from 'react';

async function convertMarkdownToHtml(markdownText) {
    try {
        const { default: ReactMarkdown } = await import('react-markdown');

        let html = ReactMarkdown.renderToString(markdownText);
        return html;
    } catch (error) {
        console.error('Error converting Markdown to HTML:', error);
        return null;
    }
}

// Ejemplo de uso
let markdownText = `
# Título

Este es un texto en **Markdown**.
`;

(async () => {
    let html = await convertMarkdownToHtml(markdownText);
    console.log(html);
})();
