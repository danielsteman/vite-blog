import React from "react";
import { Link, Text } from "@chakra-ui/react";
import PageTitle from "../components/PageTitle";
import Base from "./Base";
import { ExternalLinkIcon } from "@chakra-ui/icons";

const About = () => {
  const title = "Hi! I'm Daniel 👋";
  return (
    <Base>
      <PageTitle>{title}</PageTitle>
      <Text>
        Enthousiastic about most tech related things and always learning. At
        work I'm focusing on building scalable ML-powered backend applications,
        deploying & maintaining distributed systems and setting up
        organization-wide{" "}
        <Link
          href="https://about.gitlab.com/topics/version-control/what-is-innersource/"
          isExternal
        >
          InnerSource
          <ExternalLinkIcon mx="1px" />.
        </Link>{" "}
        In my own time I'm dabbling with Linux distros (currently exploring the
        rabbit hole of{" "}
        <Link href="https://github.com/danielsteman/nixos-config">
          NixOS
          <ExternalLinkIcon mx="1px" />
        </Link>
        ), microcontroller applications (
        <Link href="https://github.com/danielsteman/sousvide/tree/master">
          sensors
          <ExternalLinkIcon mx="1px" />
        </Link>
        ,{" "}
        <Link href="https://github.com/danielsteman/ckbrd">
          custom keyboards
          <ExternalLinkIcon mx="1px" />
        </Link>
        ).
      </Text>
    </Base>
  );
};

export default About;
