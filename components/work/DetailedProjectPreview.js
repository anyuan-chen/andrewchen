/* eslint-disable @next/next/no-img-element */
import React from "react";
import styled from "styled-components";
import TextStyles from "../../util/textStyles";
import Link from "next/link";
import Text from "../shared/text";
import theme from "../../theme";


export default function DetailedProjectPreview({
  title,
  description,
  imgUrl,
  link,
  year,
}) {
  return (
    <Link href={`/work/${link}`} passHref>
        <a>
          {imgUrl && <img src={imgUrl} alt={description}></img>}
          <Text fontSize={theme.fontSize.h1} color={theme.colors.white}>{title}</Text>
          <Text fontSize={theme.fontSize.h3} color={theme.colors.lightGray}>{description}</Text>
        </a>
    </Link>
  );
}
