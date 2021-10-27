import React from 'react'
import { StyledImage } from './styles'
import { getCaptionFromEdges } from './helpers'

const Image = ({ data }) => (
  <StyledImage
    src={data.display_url}
    alt={getCaptionFromEdges(data.edge_media_to_caption)}
  />
)

export default Image
