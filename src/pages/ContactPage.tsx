import { useFormik } from 'formik';
import {
  FormControl, FormLabel, Input, FormHelperText, Textarea, Button,
} from '@chakra-ui/react';
import React from 'react';
import PageTitle from '../components/PageTitle';
import PageBase from './PageBase';

const ContactPage = () => {
  const formik = useFormik({
    initialValues: {
      email: '',
      message: '',
    },
    onSubmit: (values) => {
      alert(JSON.stringify(values, null, 2));
    },
  });

  (
    <PageBase>
      <PageTitle title="Contact" />
      <FormControl>
        <FormLabel>Email address</FormLabel>
        <Input
          id="email"
          name="email"
          type="email"
          variant="filled"
          onChange={formik.handleChange}
          value={formik.values.email}
          isRequired
        />
        <FormHelperText>Your email will not be shared.</FormHelperText>
        <Textarea
          placeholder="Message"
          mt={2}
          id="message"
          name="message"
          variant="filled"
          onChange={formik.handleChange}
          value={formik.values.message}
          isRequired
        />
      </FormControl>
      <Button type="submit" mt={2}>Send</Button>
    </PageBase>
  );
};

export default ContactPage;
