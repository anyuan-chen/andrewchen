import React from "react";
import Page from "../../layouts/page";
import fs from "fs";
import path from "path";
import { serialize } from "next-mdx-remote/serialize";
import { MDXRemote } from "next-mdx-remote";
import matter from "gray-matter";
import SyntaxHighlighter from "react-syntax-highlighter";
import Button from "../../components/mdx/button";
import Heading from "../../components/mdx/heading";
import Paragraph from "../../components/mdx/paragraph";
import ArticleLayout from "../../components/mdx/articleLayout";
const components = {
    Heading,
    Paragraph,
    Button,
    ArticleLayout,
    SyntaxHighlighter
}
export default function Project({
  mdxSource,
}) {
  return (
    <Page>
      <MDXRemote
        {...mdxSource}
        components={components}
      />
    </Page>
  );
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
  const mdxSource = await serialize(content);
  return {
    props: {
      mdxSource,
      title,
      date,
      description,
      tags,
      year,
      thumbnailUrl,
    },
  };
}
