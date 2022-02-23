import React from 'react'
import fs from "fs"
import path from "path"
export default function Article({name}) {
  return (
    <div>{name}</div>
  )
}
export async function getStaticProps({params}){
    return {
        props: {
            name: params.article
        }
    }
}
export async function getStaticPaths() {
   const listOfFiles = fs.readdirSync(path.join("articles"));
   console.log(listOfFiles)
   return {
       paths: listOfFiles.map((article) => {
           return {
               params: {
                    article: article.substr(0, article.length - 4)
               }
           }
       }),
       fallback: false
   }
}
