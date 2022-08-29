import {
  FormControl, FormLabel, Input, FormHelperText, Textarea, Button,
} from '@chakra-ui/react';
import React, { useState } from 'react';
import PageTitle from '../components/PageTitle';
import Base from './Base';

const Contact = () => {
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');

  const handleEmailChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setEmail(event.target.value);
  };

  const handleMessageChange = (event: React.ChangeEvent<HTMLTextAreaElement>) => {
    setMessage(event.target.value);
  };

  const handleSubmit = (event: any) => {
    console.log(email);
    console.log(message);
    event.preventDefault();
  };

  return (
    <Base>
      <PageTitle>
        Contact
      </PageTitle>
      <form onSubmit={handleSubmit}>
        <FormControl>
          <FormLabel>Email address</FormLabel>
          <Input type="email" onChange={handleEmailChange} value={email} isRequired />
          <FormHelperText>Your email will not be shared.</FormHelperText>
          <Textarea placeholder="Message" mt={6} onChange={handleMessageChange} value={message} isRequired />
        </FormControl>
        <Button type="submit" mt={2}>Send</Button>
      </form>
    </Base>
  );
};

export default Contact;
