import React from 'react'
import { MDXProvider } from '@mdx-js/react';
import CodeBlock from './BlogComponents/CodeBlock';
import BlogPostContainer from '@src/styles/BlogPostContainer';
import FilledButton, { FilledButtonText } from './FilledButton';
import ReactComponentHolder from './BlogComponents/ReactComponent';
import Em from './BlogComponents/Em';
import Paragraph from './BlogComponents/Paragraph';
import Link from './BlogComponents/Link';


const components = {
    pre: (props: React.HTMLAttributes<HTMLDivElement>) => <div {...props} />,
    code: CodeBlock,
    FilledButton, 
    FilledButtonText,
    ReactComponentHolder,
    em: Em,
    p: Paragraph,
    // code: InlineCode,
    a: Link,
}


const PlayGroundTemplate: React.FC = ({children}) => {
    
    return (
        <MDXProvider components={components}>
            <BlogPostContainer>
                {children}
            </BlogPostContainer>
        </MDXProvider>
    )
}

export default PlayGroundTemplate
