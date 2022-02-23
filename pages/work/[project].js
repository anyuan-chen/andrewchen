import React from "react";
import Page from "../../layouts/page";
import fs from "fs";
import path from "path";
import matter from "gray-matter";
export default function Project({
  content,
  title,
  date,
  description,
  tags,
  year,
  thumbnailUrl,
}) {
  return <Page>
      <h1>{title}</h1>
      <h2>{date}</h2>
  </Page>;
}
export async function getStaticPaths() {
  const files = fs.readdirSync(path.join("portfolio"));
  return {
    paths: files.map((file) => {
      return {
        params: {
          project: file.substr(0, file.length - 4),
        },
      };
    }),
    fallback: false,
  };
}
export async function getStaticProps({ params }) {
  const file = fs.readFileSync(path.join("portfolio", `${params.project}.mdx`));
  const {
    content,
    data: { title, date, description, tags, year, thumbnailUrl },
  } = matter(file);
  return {
    props: {
      content,
      title,
      date,
      description,
      tags,
      year,
      thumbnailUrl,
    },
  };
}
