import {
  Body,
  Button,
  Column,
  Container,
  Head,
  Heading,
  Hr,
  Html,
  Img,
  Link,
  Preview,
  Row,
  Section,
  Tailwind,
  Text,
} from "@react-email/components";
import * as React from "react";
import Footer from "./components/Footer";

const baseUrl = process.env.VERCEL_URL
  ? `https://${process.env.VERCEL_URL}`
  : "";

export const VercelInviteUserEmail = () => {
  return (
    <Html>
      <Head />
      <Tailwind
        config={{
          theme: {
            extend: {
              colors: {
                brand: "#0a2240",
              },
            },
          },
        }}
      >
        <Body className="bg-white my-auto mx-auto font-sans text-neutral-500">
          <Container className="border border-solid border-[#eaeaea] rounded my-[40px] mx-auto p-[20px] w-[565px]">
            <Section className="mt-[32px]">
              <Img
                src="https://portal.mimedia.com/orbic/assets/orbic-logo-44ae3486.png"
                width="100"
                alt="Logo"
                className="my-0 mx-auto"
              />
            </Section>
            <Heading className="text-[24px] font-normal text-center p-0 my-[30px] mx-0">
              Check out your memories from{" "}
              <span className="text-brand">{"this {scope} in {year}"}</span>
            </Heading>
            <Text className="text-[14px] leading-[24px]">
              {
                "Hey {userName}, take a trip down memory lane with these photos."
              }
            </Text>
            <Section>
              <Row>
                <Column align="center">
                  <Img
                    src={`${baseUrl}/static/vercel-arrow.png`}
                    width="12"
                    height="9"
                    alt="invited you to"
                  />
                </Column>
              </Row>
            </Section>
            <Section className="text-center mt-[32px] mb-[32px]">
              <Button
                pX={20}
                pY={12}
                className="bg-brand rounded text-white font-semibold no-underline text-center"
                href={"http://{baseUrl}/{shareKey}"}
              >
                Click here to view on MiMedia!
              </Button>
            </Section>
            <Text className="text-[14px] leading-[24px]">
              If you'd rather not receive these emails from MiMedia in the
              future, please{" "}
              <Link
                href={
                  "https://portal.mimedia.com/#account/unsubscribe?emailType=this_day"
                }
                className="text-brand no-underline text-[12px]"
              >
                unsubscribe.
              </Link>
            </Text>
            <Footer />
          </Container>
        </Body>
      </Tailwind>
    </Html>
  );
};

export default VercelInviteUserEmail;
