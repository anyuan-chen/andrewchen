import React from 'react'
import styled from 'styled-components'
import TextStyles from '../../util/textStyles'

const Row = styled.div`
    display: flex;
    h2 {
        ${TextStyles.oversized}
    }
    h3 {
        ${TextStyles.subtitleInter}
    }
`
export default function workRow({projectName, year}) {
  return (
    <Row>
        <h2>{projectName}</h2>
        <h3>{year}</h3>
    </Row>
  )
}
