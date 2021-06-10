import React from 'react'
import styled from 'styled-components';
import { LiveProvider, LiveEditor, LiveError, LivePreview } from 'react-live';
import { MDXProvider } from '@mdx-js/react';
import {mdx} from '@mdx-js/react'
import { media} from '@src/styles';
import { trackInteractWithCodeSample } from '@src/_utils/analytics';
import { RenderWhenOnscreen } from './RenderWhenOnScreen';



interface Props {
    id: string,
    code: string,
    scope: Object,
    inline: boolean
}

const component = {
    pre: (props: React.HTMLAttributes<HTMLDivElement>) => <div {...props} />,
}


const LiveCodeEditor: React.FC<Props> = ({id, code, inline}) => {
  let hasBeenTracked = false;
  function handleClick(){
    if(!hasBeenTracked){
      trackInteractWithCodeSample({
        component: 'LiveCodeEditor',
        label: id
      })

      hasBeenTracked = true;
    }
  }
    return (
      <RenderWhenOnscreen className="full-bleed">
        <StyledLiveCodeEditor>
          <LiveProvider
            code={code.trim()}
            scope={{mdx}}
            noInline={!inline}
          >
              <pre className="editor-wrapper" onClick={handleClick} role="button" tabIndex={0}>
                <MDXProvider components={component}>
                  <LiveEditor />
                </MDXProvider>
              </pre>

                <div className="preview-wrapper">
                  <LivePreview />
                  <div className="error"><LiveError /></div>
                </div>
          </LiveProvider>
        </StyledLiveCodeEditor>
      </RenderWhenOnscreen>
    )
}

const StyledLiveCodeEditor = styled.section`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  background-color: rgb(23, 42, 69);
  column-gap: 1rem;
  justify-content: center;
  border: 3px solid var(--primary-color);
  margin: 5rem 0;
  ${media.phablet`display: block`}
  
  .editor-wrapper{
    max-height: 70rem;
    overflow: scroll;
    padding: 3rem;
  }
  
  .preview-wrapper{
    padding: 3rem;
    position: relative;
    border-left: 1px solid var(--primary-color);
    background-color: rgba(209, 209, 209, 0.85);

    .error{
      color: #ff0033;
    }
  }
`;

export default LiveCodeEditor
