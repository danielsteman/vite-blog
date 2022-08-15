import React from 'react';
import {
  Box,
  Heading,
  HStack,
  Link,
  Text,
} from '@chakra-ui/react';
import { ExternalLinkIcon } from '@chakra-ui/icons';
import PageTitle from '../components/PageTitle';
import PageBase from './PageBase';

const ExperiencePage = () => (
  <PageBase>
    <PageTitle title="Professional" />
    <Box py={4} mb={4}>
      <Heading size="lg" fontWeight={400}>
        Data and Software Engineer
      </Heading>
      <Link href="https://www.asr.nl/" isExternal w="fit-content">
        <HStack>
          <Heading size="md" fontWeight={700} py={2}>
            a.s.r.
          </Heading>
          <ExternalLinkIcon mx="2px" />
        </HStack>
      </Link>
      <Heading size="sm" fontWeight={700} py={2}>
        May 2022 - Present
      </Heading>
      <Text>
        Scaling data science by designing, testing and deploying containerized Python code on Azure-managed Kubernetes. The stack includes, but is not limited to, infrastructure as code (Terraform), CI/CD (AzDevops), orchestration (Airflow), deployment (Helm), API development (FastAPI), MLops, parallelization (Dask, Spark).
      </Text>
    </Box>
    <Box py={4} mb={4}>
      <Heading size="lg" fontWeight={400}>
        IT Trainee
      </Heading>
      <Link href="https://www.asr.nl/" isExternal w="fit-content">
        <HStack>
          <Heading size="md" fontWeight={700} py={2}>
            a.s.r.
          </Heading>
          <ExternalLinkIcon mx="2px" />
        </HStack>
      </Link>
      <Heading size="sm" fontWeight={700} py={2}>
        Jan 2021 - May 2022
      </Heading>
      <Text>
        Three rotations in the fields of Infrastructure & Cloud, Data Science and Software Development. I became acquainted with the backend and frontend of asr.nl.
      </Text>
    </Box>
    <Box py={4}>
      <Heading size="lg" fontWeight={400}>
        Analyst
      </Heading>
      <Link href="https://virtuagym.com/" isExternal w="fit-content">
        <HStack>
          <Heading size="md" fontWeight={700} py={2}>
            Virtuagym
          </Heading>
          <ExternalLinkIcon mx="2px" />
        </HStack>
      </Link>
      <Heading size="sm" fontWeight={700} py={2}>
        Feb 2017 - Dec 2020
      </Heading>
      <Text>
        During my studies I continued to work at Virtuagym on a part-time basis. I automated business processes within the finance department through scripting in VBA and Python, while contributing to the integration of a new payment provider (Stripe).
      </Text>
    </Box>
    <PageTitle title="Educational" />
    <Box py={4}>
      <Link
        href="https://vu.nl/en/education/master/finance-duisenberg-honours-programme-in-finance-and-technology"
        isExternal
        w="fit-content"
      >
        <HStack>
          <Heading size="md" fontWeight={700} py={2}>
            VU Amsterdam
          </Heading>
          <ExternalLinkIcon mx="2px" />
        </HStack>
      </Link>
      <Heading size="sm" fontWeight={700} py={2}>2019 - 2020</Heading>
      <Text>
        Finance & Technology (honours programme). Thesis:
        {' '}
        <Link href="https://github.com/danielsteman/thesis-msc-finance"><i>Backtesting a high frequency cointegration-based trading strategy</i></Link>
        {' '}
        written in Python (grade: 8).
      </Text>
    </Box>
    <Box py={4}>
      <Link
        href="https://www.thehagueuniversity.com/programmes/bachelors/international-business-4"
        isExternal
        w="fit-content"
      >
        <HStack>
          <Heading size="md" fontWeight={700} py={2}>
            The Hague University of Applied Sciences
          </Heading>
          <ExternalLinkIcon mx="2px" />
        </HStack>
      </Link>
      <Heading size="sm" fontWeight={700} py={2}>2013 - 2017</Heading>
      <Text>
        A four-year international business programme with one semester abroad in Seoul, South Korea.
      </Text>
    </Box>
  </PageBase>
);

export default ExperiencePage;
