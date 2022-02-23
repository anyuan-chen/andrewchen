import React from 'react'
import styled from 'styled-components'
import TextStyles from '../../util/textStyles'
const WritingContainer = styled.div`
    display: flex;
    flex-direction: column;
    h1{
        ${TextStyles.heading}
        color: white;
        padding-top: 2rem;
    }
    p {
        padding-top: 2rem;
        ${TextStyles.paragraph}
    }
    hr {
        margin-top: 4rem;
        width: 92%;
        opacity: 60%;
    }
`

export default function ArticlePreview({title, description}) {
  return (
    <WritingContainer>
        <h1>{title}</h1>
        <p>{description}</p>
        <hr></hr>
    </WritingContainer>
  )
}
