export interface PrismicObject {
  html: string
  text: string
  raw: {
    type:
      | 'heading1'
      | 'heading2'
      | 'heading3'
      | 'heading4'
      | 'heading5'
      | 'heading6'
    text: string
  }
}

export interface PrismicLink {
  url: string
  target: '_blank' | '_self' | '_parent' | '_top'
}

export interface PrismicImageObject {
  alt: string
  localfile: {
    childImageSharp: any
  }
  url: string
}

export interface PrismicSEO {
  slice_type: 'seo'
  primary: {
    seo_description: PrismicObject
    seo_image: PrismicImageObject
    seo_keywords: PrismicObject
    seo_title: PrismicObject
  }
}
