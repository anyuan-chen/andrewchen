import React from 'react'

const WritingContainer = styled.div`
    display: flex;
    flex-direction: column;
`

export default function ArticlePreview({title, description}) {
  return (
    <div>
        <h1>{title}</h1>
        <h2>{description}</h2>
        <hr></hr>
    </div>
  )
}
