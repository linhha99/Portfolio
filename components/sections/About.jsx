import {
  GridItem,
  Image,
  Link,
  SimpleGrid,
  Text,
  useBreakpointValue,
  useColorModeValue,
  VStack,
} from "@chakra-ui/react";
import React from "react";

import { colors } from "../../theme";
import SectionContainer from "../SectionContainer";

const Bio = ({ secondary }) => (
  <GridItem>
    <VStack m="auto" w="75%" spacing="12px" pt="5%">
      <Text>
        Hi, I&apos;m <strong style={{ color: secondary }}>Tuan Linh</strong> ! I studied communications and computer networks at the Hanoi University of
        Industry,
        {/* and I&apos;m currently working at{" "} */}
        {/* <Link href="https://www.sailpoint.com/" isExternal>
          SailPoint
        </Link>{" "}
        as a <strong style={{ color: secondary }}>Software Engineer II</strong>{" "}
        on the Platform Workflows team. Prior to that, I was at{" "}
        <Link href="https://www.citigroup.com/citi/" isExternal>
          Citigroup
        </Link>{" "}
        &{"  "}
        <Link href="https://citylitics.com/" isExternal>
          Citylitics
        </Link>{" "}
        as a{" "}
        <strong style={{ color: secondary }}>Software Developer Intern</strong>. */}
      </Text>
      <Text>
        I am a programmer with a strong passion for coding and problem-solving.
        I believe in writing clean and efficient code, and always strive to improve my skills through continuous learning and development.
        {/* <strong style={{ color: secondary }}>
          <Link
            href="https://www.credly.com/badges/517ae2cf-990f-4e3f-acf7-c7dc692c67a0/public_url"
            isExternal
          >
            AWS Certified Developer
          </Link>
        </strong> */}
      </Text>
    </VStack>
  </GridItem>
);

const Headshot = () => (
  <GridItem>
    <Image
      m="auto"
      src="/me.jpg"
      alt="Jarrod Servilla"
      zIndex={1}
      className="image"
      onClick={() => {
        window.open("http://linkedin.com/in/jarrod-servilla");
      }}
    />
  </GridItem>
);

export default function About() {
  const shouldAlternate = useBreakpointValue({ base: false, md: true });
  const secondary = useColorModeValue(
    colors.secondary.light,
    colors.secondary.dark
  );
  return (
    <SectionContainer
      id="about"
      name="about"
      headerMt="-5%"
      headerText="About Me"
      useHeaderStyle
    >
      <SimpleGrid
        pl="10%"
        pt="5%"
        pr="10%"
        spacing={12}
        columns={[1, null, 2]}
        justifyContent="center"
      >
        {shouldAlternate ? <Bio secondary={secondary} /> : <Headshot />}
        {shouldAlternate ? <Headshot /> : <Bio secondary={secondary} />}
      </SimpleGrid>
    </SectionContainer>
  );
}
