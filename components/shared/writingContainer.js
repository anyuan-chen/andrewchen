import React from 'react'
import styled from 'styled-components'
const Container = styled.div`
    display: flex;
    flex-direction: column;
    row-gap: 4rem;
`
export default function WritingContainer({children}) {
  return (
    <Container>{children}</Container>
  )
}
