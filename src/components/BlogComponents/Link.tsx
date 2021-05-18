import React from 'react'

const Link: React.FC<React.AnchorHTMLAttributes<Element>> = ({children, ...props}) => {
    return (
        <a href={props.href} className="link" rel="noopener noreferrer" target="_blank">
            {children}
        </a>
    )
}

export default Link
