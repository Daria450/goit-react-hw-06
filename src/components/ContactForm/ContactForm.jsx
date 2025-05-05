import React from 'react'
import { Formik, Form, Field } from 'formik';
import { useId } from 'react';
import s from './ContactForm.module.css';
import { nanoid } from 'nanoid';
import * as Yup from "yup";
import { ErrorMessage } from "formik";
import { useDispatch } from 'react-redux';
import { addContact } from '../../redux/contactsSlice';


const ContactFormSchema = Yup.object().shape({
    name: Yup.string().min(3, "Too Short!").max(50, "Too Long!").required("Required"),
    number: Yup.string().min(2, "Too Short!").max(50, "Too Long!").required("Required")
});


const ContactForm = () => {


    const nameFieldId = useId();
    const numberFieldId = useId();

    const initialValues = {
        id: "",
        name: "",
        number: ""
    };
    const dispatch = useDispatch();

    const handleSubmit = (values, actions) => {
        actions.resetForm();
        const newContact = {
            ...values,
            id: nanoid(),
        };
        dispatch(addContact(newContact))
    };

    return (
        <>
            <Formik initialValues={initialValues} onSubmit={handleSubmit} validationSchema={ContactFormSchema}>
                <Form className={s.form}>
                    <label htmlFor={nameFieldId} className={s.label}>Name
                        <Field className={s.input} type="text" name="name" id={nameFieldId} />
                        <ErrorMessage className={s.error} name="name" component="span" />
                    </label>


                    <label htmlFor={numberFieldId} className={s.label}>Number
                        <Field className={s.input} type="text" name="number" id={numberFieldId} />
                        <ErrorMessage className={s.error} name="number" component="span" />
                    </label>

                    <button type="submit">Add Contact</button>
                </Form>
            </Formik>
        </>
    )
}

export default ContactForm