import React from 'react'
import styled from 'styled-components'
import TextStyles from '../../util/textStyles'
const Row = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: end;
    h2 {
        ${TextStyles.oversized}
    }
    h3 {
        ${TextStyles.heading}
        color: white;
    }
`
export default function WorkRow({projectName, year}) {
  return (
    <Row>
        <h2>{projectName}</h2>
        <h3>{year}</h3>
    </Row>
  )
}