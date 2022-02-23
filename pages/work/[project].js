import React from "react";
import Page from "../../layouts/page";
import fs from "fs";
import path from "path";
import { serialize } from "next-mdx-remote/serialize";
import { MDXRemote } from "next-mdx-remote";
import matter from "gray-matter";
import SyntaxHighlighter from "react-syntax-highlighter";
import Button from "../../components/mdx/button";
import Heading from "../../components/mdx/h1";
import Paragraph from "../../components/mdx/p";
export default function Project({
  mdxSource,
  title,
  date,
  description,
  tags,
  year,
  thumbnailUrl,
}) {
  return (
    <Page>
      <h1>{title}</h1>
      <h2>{date}</h2>
      <MDXRemote {...mdxSource} components={{SyntaxHighlighter, Button, h1: Heading, p: Paragraph}} />
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
