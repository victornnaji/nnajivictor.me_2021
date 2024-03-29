import getShareImage from '@jlengstorf/get-share-image';

export function SEOImage({title, tagline}: {title: string, tagline?: string}){
    return(
        getShareImage({
            title: title,
            tagline: tagline,
            cloudName: 'draakmoik',
            imagePublicID: 'nnajivictor/og-image.png',
            titleFont: 'futura',
            taglineFont: 'futura',
            textColor: 'e6f1ff',
            titleBottomOffset: 350,
            taglineTopOffset: 360,
            titleFontSize: 56,
            taglineFontSize: 30,
            titleLeftOffset: 500,
            taglineLeftOffset: 500
        } as any) 
    )
}