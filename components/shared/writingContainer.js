import React from 'react'
import styled from 'styled-components'
const Container = styled.div`
    display: flex;
    flex-direction: column;
`
export default function WritingContainer({children}) {
  return (
    <Container>{children}</Container>
  )
}
