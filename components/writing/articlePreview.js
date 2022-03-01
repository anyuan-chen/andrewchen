import React from "react";
import styled from "styled-components";
import media from "../../util/media";
import Link from "next/link";
import TextStyles from "../../util/textStyles";
import Title from "../shared/title";
import { AnimatePresence, motion } from "framer-motion";
import theme from "../../theme";

const Container = styled(motion.div)`
  display: flex;
  flex-direction: column;
`;
const Row = styled(motion.div)`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
`;

const Line = styled.hr`
  margin-top: 6rem;
  height: 1px;
  opacity: 20%;
  color: gray;
`;
const gogray = {
  rest: { ease: "easeOut", duration: 0.2, type: "tween" },
  hover: {
    opacity: 0.8,
    transition: {
      duration: 0.4,
      type: "tween",
      ease: "easeIn",
    },
  },
};
export default function ArticlePreview({ title, description, date, url }) {
  return (
    <Link href={url}>
      <a>
        <AnimatePresence>
          <Container initial="rest" whileHover="hover" animate="rest">
            <motion.div variants={gogray}>
              <Title
                fontSize={theme.fontSize.h2}
                color={theme.colors.white}
                style={{ fontWeight: 500 }}
              >
                {title}
              </Title>
              <Title fontSize={theme.fontSize.p} color={theme.colors.lightGray}>
                {description}
              </Title>
              <Row>
                <motion.div>
                  <Title
                    fontSize={theme.fontSize.p}
                    color={theme.colors.gray}
                    style={{ textDecoration: "underline" }}
                  >
                    Read More
                  </Title>
                </motion.div>

                <div>
                  <Title
                    fontSize={theme.fontSize.p}
                    color={theme.colors.gray}
                    fontStyle="italic"
                  >
                    {date}
                  </Title>
                </div>
              </Row>
              <Line></Line>
            </motion.div>
          </Container>
        </AnimatePresence>
      </a>
    </Link>
  );
}
