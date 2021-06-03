import React from 'react'
import Highlight, { defaultProps } from 'prism-react-renderer'
import theme from "prism-react-renderer/themes/nightOwl";

const CodeBlock: React.FC<any> = ({ children, className }) => {

    className = className ? className : 'language-text';
    
    const language = className.replace(/language-/, '') || ""

    return (
      <Highlight {...defaultProps} theme={theme} code={children.trim()} language={language}>
        {({className, tokens, getLineProps, getTokenProps}) => (
          <div className="gatsby-highlight" data-language={language}>
            <pre className={className}>
              {tokens.map((line, i) => (
                  <div key={i} {...getLineProps({line, key: i})}>
                  {line.map((token, key) => (
                      <span key={key} {...getTokenProps({token, key})} />
                  ))}
                  </div>
              ))}
            </pre>
          </div>
        )}
      </Highlight>
    )
}

export default CodeBlock
