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
        ) and microcontroller applications (such as this{" "}
        <Link href="https://github.com/danielsteman/sousvide/tree/master">
          sensor
          <ExternalLinkIcon mx="1px" />
        </Link>
        and my{" "}
        <Link href="https://github.com/danielsteman/ckbrd">
          custom split keyboard
          <ExternalLinkIcon mx="1px" />
        </Link>
        ).
      </Text>
      <Text mt={2}>
        Since a couple of years, I also have experience building frontend
        projects, mainly using React and Typescript. Although it's not my
        specialty, the rendering paradigms and opportunities to optimize web
        app performance interest me. Ultimately, I aim to be (backend-biased) full-stack, such that I can
        contribute to projects at any stage.
      </Text>
    </Base>
  );
};

export default About;
