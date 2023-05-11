import { Column, Row, Section, Link, Hr } from "@react-email/components";
import React from "react";

const Footer = () => {
  return (
    <Section>
      <Hr className="border border-solid border-[#eaeaea] my-[26px] mx-0 w-full" />
      <Row>
        <Column align="center">
          <Link className="text-brand" href="https://portal.mimedia.com/orbic">
            Home
          </Link>
          <span className="mx-2">|</span>
          <Link className="text-brand" href="https://orbic.us/pages/contact-us">
            Support
          </Link>
        </Column>
      </Row>
    </Section>
  );
};

export default Footer;
