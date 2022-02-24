import React from 'react'
import styled from 'styled-components'
const Container = styled.div`
    display: flex;
    justify-content: space-between;
`
export default function ResumeBox({children}) {
  return (
    <Container>
        {children}
    </Container>
  )
}
