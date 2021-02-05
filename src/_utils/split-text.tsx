import React from 'react';

type SplitWordArg = {
    text: string, 
    style:string, 
    key: any
}

export const SplitWord: React.FC<SplitWordArg> = ({text, style, key}) => {
    return <p className={style} style={{display: 'block', textAlign: 'start', position: 'relative'}} key={key}>{text}</p>
}

type SplitCharArg = {
    text: string,
    style: string,
}

export const SplitChar: React.FC<SplitCharArg> = ({text, style}) => {
    return (
      <>
        {text.split("").map((char: string, index: number) => (
          <span
            className={style}
            aria-hidden="true"
            key={index}
            style={{ display: "inline-block", position: "relative" }}
          >
            {char === " " ? (char = "\u00A0") : char}
          </span>
        ))}
      </>
    )
}