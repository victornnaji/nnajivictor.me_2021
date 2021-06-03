import React from "react"
import CodeBlock from "@src/components/BlogComponents/CodeBlock"
import { OrderedList, UnorderedList } from "@src/components/BlogComponents/List"
import { domToReact } from "html-react-parser"
import Em from "./Em"
import BlogImage from "./Image"

const replaceCode = (node: any) => {
  if (node.name === "pre") {
    return (
      node.children.length > 0 && (
        <CodeBlock className={getLanguage(node)}>
          {domToReact(getCode(node))}
        </CodeBlock>
      )
    )
  }

  if (node.name === "p" && node.children[0].name === "img") {
    const image = getImage(node.children[0])
    const alt = image.alt || "An image on nnajivictor.me/blog"
    const caption = image.title || "An image on nnajivictor.me/blog"
    const src = image.src || ""
    return (
      <BlogImage className="full-bleed" src={src} alt={alt} caption={caption} />
    )
  }

  if (node.name === "ol") {
    return (
      node.children.length > 0 && (
        <OrderedList>{domToReact(getOrderedList(node))}</OrderedList>
      )
    )
  }
  if (node.name === "ul") {
    return (
      node.children.length > 0 && (
        <UnorderedList>{domToReact(getUnOrderedList(node))}</UnorderedList>
      )
    )
  }

  if (node.name === "a") {
    return (
      <a href={getHref(node)} className="link">
        {domToReact(getLink(node))}
      </a>
    )
  }

  if (node.name === "em") {
    return <Em>{domToReact(getEmphasis(node))}</Em>
  }
}

const getCode = (node: any) => {
  if (node.children.length > 0 && node.children[0].name === "code") {
    return node.children[0].children
  } else {
    return node.children
  }
}

const getOrderedList = (node: any) => {
  if (node.children.length > 0 && node.children[0].name === "ol") {
    return node.children[0].children
  } else {
    return node.children
  }
}

const getUnOrderedList = (node: any) => {
  if (node.children.length > 0 && node.children[0].name === "ul") {
    return node.children[0].children
  } else {
    return node.children
  }
}

const getImage = (node: any) => {
  if (node.name === "img") {
    return node.attribs
  }
}

const getLink = (node: any) => {
  if (node.children.length > 0 && node.children[0].name === "a") {
    return node.children[0].children
  } else {
    return node.children
  }
}

const getHref = (node: any) => {
  if (node.name === "a") {
    return node.attribs.href
  }
}

const getEmphasis = (node: any) => {
  if (node.children.length > 0 && node.children[0].name === "em") {
    return node.children[0].children
  } else {
    return node.children
  }
}

const getLanguage = (node: any) => {
  if (node.children && node.children[0].name === "code") {
    return node.children[0].attribs.class.split(":")[0]
  } else {
    return
  }
}

export { replaceCode }
