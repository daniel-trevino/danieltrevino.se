import React, { useEffect, useState } from 'react'
import styled from 'styled-components'
import get from 'lodash/get'
import { supportsWebp } from '../utils/imageUtils'

const Wrapper = styled.div`
  img {
    width: 100%;
    margin: 0;
  }
`

const Image = ({ onLoad, image, className, critical, fallbackAlt }: any) => {
  const [src, setImgSrc] = useState()

  const loadImage = async () => {
    const supported = await supportsWebp()
    const newSrc = supported
      ? get(image, 'localFile.childImageSharp.fluid.srcWebp')
      : get(image, 'localFile.childImageSharp.fluid.src')
    setImgSrc(newSrc)
  }

  useEffect(() => {
    if (image && image.localFile) {
      loadImage()
    }
  }, [])

  if (!image || Object.values(image).filter(Boolean).length === 0) {
    return null
  }
  const { alt, url } = image

  if (!image.localFile) {
    return (
      <Wrapper className={className}>
        <img alt={alt || fallbackAlt} onLoad={url && onLoad} src={url} />
      </Wrapper>
    )
  }

  const defaultImage = critical
    ? get(image, 'localFile.childImageSharp.fluid.src')
    : get(image, 'localFile.childImageSharp.fluid.base64')

  // src = checks if the image is fully loaded as srcWebp
  // defaultImage = checks if the image comes as base64
  // image.url = defaults to the public url of the image (Ex. SVG images)
  const imgSrc = src || defaultImage || image.url

  return (
    <Wrapper className={className}>
      <img alt={alt || fallbackAlt} onLoad={src && onLoad} src={imgSrc} />
    </Wrapper>
  )
}

export default Image
