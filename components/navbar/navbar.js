import React from "react";
import { motion, useCycle, AnimatePresence } from "framer-motion";
import styled from "styled-components";
import { Hamburger } from "../icons/hamburger";
import { Logo } from "../icons/logo";
import TextStyles from "../../util/textStyles";
import media from "../../util/media";
const links = [
  { name: "Home", to: "/", id: 1 },
  { name: "Work", to: "/work", id: 2 },
  { name: "Writing", to: "/writing", id: 3 },
  { name: "About", to: "/about", id: 4 },
  { name: "Contact", to: "/contact", id: 5 },
];

const Aside = styled.aside`
  background-color: #021923;
  width: 28.75rem;
  height: 100vh;
  position: fixed;
  z-index: 2;
  a {
    color: white;
    text-decoration: none;
    font-size: 5.75rem;
    font-weight: 400;
    font-family: Platform;
    display: block;
    margin: 20px;
  }
`;
const DesktopNav = styled.nav`
  display: none;
  @media ${media.laptop} {
    display: flex;
    flex-direction: column;
    padding-left: 70px;
    padding-top: 50px;
    background-color: white;
    width: 16.666vw;
    height: 100vh;
    a {
      background: none;
      text-decoration: underline rgba(0, 0, 0, 0);
      width: 0%;
      text-align: left;
      border-top: 1px solid #d8d8d8;
      text-underline-offset: 3px;
      width: 170px;
      padding-top: 25px;
      padding-bottom: 25px; 
      ${TextStyles.laptopNav}
    }
    a:first-child {
      border-top: none;
    }
    a:last-child {
      border-bottom: 1px solid #d8d8d8;
    }
  }
`;
const StyledButton = styled.button`
  cursor: pointer;
  margin: 1.25rem;
  border: none;
  padding: 0.5rem 1rem;
`;
const ButtonContainer = styled.div`
  position: fixed;
  top: 0;
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100vw;
  padding: 0 25px;
  background-color: #021923;
  height: 90px;
  box-sizing: border-box;
  border: 7px solid #cacaca;


  @media ${media.laptop} {
    display: none;
  }
`;
const Container = styled.div`
  margin: 8.5rem 1.4rem;
`;
const StyledHamburger = styled(Hamburger)`
  color: white;
  @media ${media.laptop} {
    display: none;
  }
`;
const StyledLogo = styled(Logo)`
  @media ${media.laptop} {
    color: black;
    height: 191.7px;
    width: 170px;
    margin-bottom: 100px;
  }
  color: white;
`;
const itemVariants = {
  closed: {
    opacity: 0,
  },
  open: {
    opacity: 1, 
  },
};
const sideVariants = {
  closed: {
    transition: {
      staggerChildren: 0.05,
      staggerDirection: -1,
    },
  },
  open: {
    transition: {
      staggerChildren: 0.05,
      staggerDirection: 1,
    },
  },
};
export default function Navbar() {
  const [open, cycleOpen] = useCycle(false, true);
  return (
    <div style={{ display: "flex" }}>
      <AnimatePresence>
        {open && (
          <Aside
            as={motion.aside}
            initial={{ width: 0 }}
            animate={{ width: 300 }}
            exit={{ width: 0, transition: { delay: 0.7, duration: 0.3 } }}
          >
            <Container
              as={motion.div}
              variants={sideVariants}
              initial="closed"
              animate="open"
              exit="closed"
            >
              {links.map(({ name, to, id }) => (
                <motion.a key={id} href={to} variants={itemVariants}>
                  {name}
                </motion.a>
              ))}
            </Container>
          </Aside>
        )}
      </AnimatePresence>
      <ButtonContainer>
        <StyledLogo></StyledLogo>
        <StyledButton onClick={cycleOpen}>
          <StyledHamburger></StyledHamburger>
        </StyledButton>
      </ButtonContainer>
      <DesktopNav>
        <motion.a href="/" whileHover={{ scale: 1.03 }}>
          <StyledLogo></StyledLogo>
        </motion.a>
        {links.map(({ name, to, id }) => (
          <motion.a
            key={id}
            href={to}
            variants={itemVariants}
            whileHover={{ textDecoration: "underline rgba(0,0,0,1)" }}
          >
            {name}
          </motion.a>
        ))}
      </DesktopNav>
    </div>
  );
}

// /* eslint-disable @next/next/no-img-element */
// import React from "react";
// import styled from "styled-components";
// import media from "../../util/media";
// import { Logo } from "../icons/logo";
// import { Hamburger } from "../icons/hamburger";
// import NavbarElement from "./navbarElement";
// import { AnimatePresence, motion, useCycle } from "framer-motion";
// import TextStyles from "../../util/textStyles";

// const Background = styled.div`
//   background-color: #021923;
//   display: flex;
//   align-items: center;
//   padding-left: 25px;
//   padding-right: 25px;
//   justify-content: space-between;
//   @media (${media.laptop}) {
//     background-color: #f2f2f2;
//     height: 100vh;
//     background-color: white;
//     flex-direction: column;
//     align-items: flex-start;
//     justify-content: flex-start;
//     padding-top: 50px;
//     padding-left: 50px;
//     padding-right: 50px;
//   }
// `;
// const StyledLogo = styled(Logo)`
//   color: white;
//   @media (${media.laptop}) {
//     color: black;
//     height: 191.7px;
//     width: 170px;
//   }
// `;
// const StyledHamburger = styled(Hamburger)`
//   color: white;
//   @media (${media.laptop}) {
//     display: none;
//   }
// `;
// const DesktopNav = styled.nav`
//   display: none;
//   @media (${media.laptop}) {
//     display: flex;
//     flex-direction: column;
//     padding-top: 100px;
//     border-bottom: 1px solid #d8d8d8;
//   }
// `;
// const links = [
//   { text: "home", link: "/" },
//   { text: "work", link: "/work" },
//   { text: "writing", link: "/writing" },
//   { text: "about", link: "/about" },
//   { text: "contact", link: "/contact" },
// ];
// const MobileNav = styled.nav`
//   padding-top: 70px;
//   position: fixed;
// `;

// export default function Navbar() {
//   return (
//     <Background>
//       <StyledLogo></StyledLogo>
//       <button>
//         <StyledHamburger></StyledHamburger>
//       </button>
//       <DesktopNav>
//         {links.map((link, index) => {
//           return (
//             <NavbarElement
//               key={index}
//               text={link.text}
//               link={link.link}
//             ></NavbarElement>
//           );
//         })}
//       </DesktopNav>
//       <motion.aside initial={{ width: 0 }}>
//         <MobileNav>
//           {links.map((link, index) => {
//             return (
//               <NavbarElement
//                 key={index}
//                 text={link.text}
//                 link={link.link}
//               ></NavbarElement>
//             );
//           })}
//         </MobileNav>
//       </motion.aside>
//     </Background>
//   );
// }
