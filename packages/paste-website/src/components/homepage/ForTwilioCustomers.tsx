import { Box } from "@twilio-paste/box";
import { Text } from "@twilio-paste/text";
import Image from "next/image";
import * as React from "react";

import PuzzleIllo from "../../assets/illustrations/puzzle_illo.svg";
import { BouncyAnchor } from "./BouncyAnchor";

const ForTwilioCustomers: React.FC = (): React.ReactElement => {
  return (
    <Box
      display="flex"
      justifyContent="center"
      width="100%"
      backgroundColor="colorBackgroundInverse"
      marginTop="space170"
      element="FOR_TWILIO_CUSTOMERS_WRAPPER"
    >
      <Box
        element="FOR_TWILIO_CUSTOMERS"
        width="100%"
        // maxWidth={HOMEPAGE_SITE_CONTENT_MAX_WIDTH}
        maxWidth="1334px"
        display="flex"
        justifyContent="space-between"
        alignItems="center"
        columnGap="space90"
        marginX={["space70", "space80", "space140"]}
        paddingY={["space200", "space200", "space200", "space0"]}
        position="relative"
      >
        <Box display="flex" flexDirection="column" textAlign="left" zIndex="zIndex10" paddingY="space200">
          <Text
            as="h3"
            color="colorTextInverse"
            fontWeight="fontWeightExtrabold"
            fontSize="fontSize110"
            lineHeight="lineHeightDisplay20"
            paddingBottom="space130"
          >
            For Twilions and Twilio customers alike
          </Text>
          <Text as="p" color="colorTextInverse" marginBottom="space70">
            Rapidly build enterprise-grade, inclusive, and extensible experiences that look and feel like your brand.
            Paste works great with Flex plugins, CodeExchange apps, and more.
          </Text>
          <Box color="colorTextInverse" fontWeight="fontWeightSemibold" lineHeight="lineHeight40">
            <BouncyAnchor href="" text="Eng quick start" inverse />
          </Box>
          <Box color="colorTextInverse" fontWeight="fontWeightSemibold" lineHeight="lineHeight40">
            <BouncyAnchor href="" text="Customization overview" inverse />
          </Box>
          <Box color="colorTextInverse" fontWeight="fontWeightSemibold" lineHeight="lineHeight40">
            <BouncyAnchor href="" text="Figma Community file" inverse />
          </Box>
        </Box>
        <Box
          display={["none", "none", "flex", "flex"]}
          width="100%"
          maxWidth="size70"
          maxHeight="460px"
          top="-50px"
          position="relative"
        >
          <Image src={PuzzleIllo} width={695} height={527} aria-hidden="true" role="img" alt="" />
        </Box>
      </Box>
    </Box>
  );
};

export { ForTwilioCustomers };