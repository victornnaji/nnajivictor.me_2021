import {IGatsbyImageData } from "gatsby-plugin-image";

export interface PageProp {
    caseStudy: {
        CaseStudiesGraphql: {
            challenges: string,
            designProcess: string,
            description: string,
            clientDescription: {
                clientName? : string,
                dateLaunched? : string,
                website?: string,
                awards: AwardProps[]
            },
            mainImage: {
                altText: string,
                databaseId: number | string,
                localFile: ImageProps,
            }, 
            gallery: GalleryProp[]
        }
    }
}

export type GalleryProp = {
    altText: string,
    databaseId: number | string,
    localFile: ImageProps,
}

export type AwardProps = {
    awardItem: string,
}

export type ImageProps = {
    altText: string,
    childImageSharp: {
        gatsbyImageData: IGatsbyImageData
    }
}

export interface CaseStudyProps {
    pageContext: {
        next : {
            node: {
                slug: string;
                CaseStudiesGraphql: {
                    featuredImage: {
                        altText: string,
                        localFile: ImageProps,
                    };
                };
                excerpt?: string | undefined;
                title: string;
            },
        },
        prev : {
            node: {
                slug: string;
                CaseStudiesGraphql: {
                    featuredImage: {
                        altText: string,
                        localFile: ImageProps,
                    };
                };
                excerpt?: string | undefined;
                title: string;
            }
        },
        node: {
            excerpt: string,
            title: string,
            slug: string,
            CaseStudiesGraphql: { }
        }
    }, 
    data : PageProp
}