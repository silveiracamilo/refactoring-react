import { useMemo } from 'react';
import hljs from 'highlight.js/lib/core';
import typescript from 'highlight.js/lib/languages/typescript';
import xml from 'highlight.js/lib/languages/xml';
import './themes/github-dark.css';

hljs.registerLanguage('typescript', typescript);
hljs.registerLanguage('xml', xml);

interface ISyntaxHighlight {
    code: string
    language?: 'typescript' | 'xml' | undefined
}

const SyntaxHighlight: React.FC<ISyntaxHighlight> = ({ code, language }) => {
    const codeHtml = useMemo(
        () => {
            if (language) {
                return hljs.highlight(code, { language }).value;
            }
            return hljs.highlightAuto(code).value;
        }, 
        [code, language]
    );

    return (
        <pre className="shadow-3xl text-sm relative overflow-hidden max-w-full tab-size h-full border-2">
            <span className="hljs mb-0 p-4 block min-h-full overflow-auto">
                <code dangerouslySetInnerHTML={{ __html: codeHtml }} />
            </span>
        </pre>
    );
}

export default SyntaxHighlight;
