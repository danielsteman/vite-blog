import React from 'react';
import PageTitle from '../components/PageTitle';
import PageBase from './PageBase';

const ContactPage = () => {
  const title = 'Contact';
  return (
    <PageBase>
      <PageTitle title={title} />
    </PageBase>
  );
};

export default ContactPage;
