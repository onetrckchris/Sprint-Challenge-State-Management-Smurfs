import React from 'react';
import { Form, Field, withFormik } from 'formik';
import * as Yup from 'yup';

const SmurfForm = () => {
    return (
        <Form>
            <Field type="text" name="name" placeholder="Name" autoComplete="Off" />
            <Field type="number" name="age" placeholder="Age" autoComplete="Off" />
            <Field type="text" name="height" placeholder="Height" autoComplete="Off" />
            <button type="submit">Add Smurf</button>
        </Form>
    )
}

export default withFormik({
    mapPropsToValues() {
        return {
            name: '',
            age: '',
            height: ''
        }
    },
    validationSchema: Yup.object().shape({
        name: Yup.string().required(),
        age: Yup.number().required(),
        height: Yup.string().required()
    }),
    handleSubmit(values, formikBag) {
        formikBag.resetForm();
        formikBag.props.addSmurf(values);
        formikBag.props.history.push('/');
    }
})(SmurfForm);