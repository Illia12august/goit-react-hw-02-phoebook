import { nanoid } from 'nanoid';
import { ErrorMessage, Formik, Form, Field } from 'formik';
import { Component } from 'react';

import * as Yup from 'yup';
const contactValidation = Yup.object().shape({
  name: Yup.string()
    .min(2, 'Too short!')
    .max(70, 'Too Long!')
    .required('Required'),
  phoneNumber: Yup.string()
    .min(9, 'Too short!')
    .max(9, 'Too Long!')
    .required('Required'),
});
export default class AddContact extends Component {
  addContactInComponent = (values, act) => {
    const newContact = {
      id: nanoid(),
      name: values.name,
      number: values.phoneNumber,
    };
    this.props.addContact(newContact);

    act.resetForm();
  };
  render() {
    return (
      <Formik
        initialValues={{ name: '', phoneNumber: '' }}
        onSubmit={this.addContactInComponent}
        validationSchema={contactValidation}
      >
        {({ isSubmitting }) => (
          <Form>
            Name
            <Field type="text" name="name" placeholder="Ariana Grande" />
            <ErrorMessage name="name" />
            Number
            <Field type="text" name="phoneNumber" placeholder="123-45-67" />
            <ErrorMessage name="phoneNumber" />
            <button type="submit" disabled={isSubmitting}>
              Add contact
            </button>
          </Form>
        )}
      </Formik>
    );
  }
}
