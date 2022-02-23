import React from 'react'
import styled from 'styled-components'
import TextStyles from '../../util/textStyles'

const P = styled.p`
    ${TextStyles.paragraph}
`
export default function Paragraph({children}) {
  return (
    <P>{children}</P>
  )
}
