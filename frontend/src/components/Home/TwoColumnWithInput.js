import React from "react";
import styled from "styled-components";
import tw from "twin.macro";
//eslint-disable-next-line
// import { css } from "styled-components/macro";


import { ReactComponent as SvgDecoratorBlob1 } from "./../../images/svg-decorator-blob-1.svg";

const Container = tw.div`relative bg-gray-lightest`;
const TwoColumn = tw.div`flex flex-col lg:flex-row lg:items-center max-w-screen-xl mx-auto py-20 md:py-0`;
const LeftColumn = tw.div`relative lg:w-5/12 text-center max-w-lg mx-auto lg:max-w-none lg:text-left`;
const RightColumn = tw.div`relative mt-12 lg:mt-0 flex-1 flex flex-col justify-center lg:self-end`;

const Heading = tw.h1`font-bold text-3xl md:text-3xl lg:text-4xl xl:text-5xl text-gray-900 leading-tight`;
const Paragraph = tw.p`my-5 lg:my-8 text-base xl:text-lg`;

const Actions = styled.div`
  ${tw`relative max-w-md text-center mx-auto lg:mx-0`}
  input {
    ${tw`sm:pr-48 pl-8 py-4 sm:py-5 rounded-full border-2 w-full font-medium focus:outline-none transition duration-300  focus:border-changed-100 hover:border-gray-500`}
  }
  button {
    ${tw`w-full sm:absolute right-0 top-0 bottom-0 bg-changed-300 text-gray-100 font-bold mr-2 my-4 sm:my-2 rounded-full py-4 flex items-center justify-center sm:w-40 sm:leading-none focus:outline-none hover:bg-changed-100 transition duration-300`}
  }
`;

const IllustrationContainer = tw.div`flex justify-center lg:justify-end items-center`;

// Random Decorator Blobs (shapes that you see in background)
const DecoratorBlob1 = styled(SvgDecoratorBlob1)`
  ${tw`pointer-events-none opacity-5 absolute left-0 bottom-0 h-64 w-64 transform -translate-x-2/3 -z-10`}
`;



const Hero= () => {
  return (
    <>
      <Container>
        <TwoColumn>
          <LeftColumn>
            <Heading>
            Maximus Vulputate urna, <span tw="text-changed-100">Nunc at tempus massa!!.</span>
            </Heading>
            <Paragraph>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam finibus maximus luctus. Aliquam mauris ante, consectetur in facilisis eget, scelerisque nec tortor. Fusce efficitur metus in nunc faucibus, at placerat nisl pretium. Curabitur nec elit mi. Sed laoreet eros ac urna pellentesque rutrum. Curabitur ex tortor, aliquet at mauris ac, maximus vulputate urna.
            </Paragraph>
            <Actions>
              <input type="text" placeholder="Your E-mail Address" />
              <button>Get Started</button>
            </Actions>
            {/* <CustomersLogoStrip>
              <p>Our TRUSTED Customers</p>
              <img src={CustomersLogoStripImage} alt="Our Customers" />
            </CustomersLogoStrip> */}
          </LeftColumn>
          <RightColumn>
            <IllustrationContainer>
              <img src="https://img.freepik.com/free-vector/save-planet-concept-with-people-taking-care-earth_23-2148522570.jpg?w=740&t=st=1653536296~exp=1653536896~hmac=4630eef54d5995bc1f4ee54ec0c2d97feb56712afe54bf93b7c06092acbecd67" alt="Design Illustration" />
            </IllustrationContainer>
          </RightColumn>
        </TwoColumn>
        <DecoratorBlob1 />
      </Container>
    </>
  );
};
export default Hero