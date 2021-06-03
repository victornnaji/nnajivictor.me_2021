export const strip_tags = (html: string) =>{ 
    return html.replace(/<[^>]+>/g, '')
}