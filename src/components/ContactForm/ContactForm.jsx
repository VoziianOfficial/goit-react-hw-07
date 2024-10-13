import React from "react";
import { useDispatch } from "react-redux";
import { addContact } from "../../redux/contactsSlice";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import s from "./ContactForm.module.css";

const ContactForm = () => {
  const dispatch = useDispatch();

  const validationSchema = Yup.object({
    name: Yup.string().required("Name is required"),
    number: Yup.string().required("Number is required"),
  });

  const handleSubmit = (values, { resetForm }) => {
    dispatch(addContact(values.name, values.number));
    resetForm();
  };

  return (
    <Formik
      initialValues={{ name: "", number: "" }}
      validationSchema={validationSchema}
      onSubmit={handleSubmit}
    >
      {() => (
        <Form className={s.contactForm}>
          <label className={s.p}>Name</label>
          <Field className={s.formInput} name="name" type="text" />
          <ErrorMessage className={s.errorMessage} name="name" />

          <label className={s.p}>Number</label>
          <Field className={s.formInput} name="number" type="text" />
          <ErrorMessage className={s.errorMessage} name="number" />

          <button className={s.formBtn} type="submit">
            Add Contact
          </button>
        </Form>
      )}
    </Formik>
  );
};

export default ContactForm;
