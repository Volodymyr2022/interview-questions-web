import React from "react";
import { Formik } from "formik";
import { addQuestion } from "../../services/firebase";
import "./style.css";

const form = [
  { label: "Link", value: "", name: "link" },
  { label: "Title", value: "", name: "title" },
  { label: "Url", value: "", name: "url" },
  { label: "Level", value: "", name: "level" },
  { label: "Theme", value: "", name: "theme" },
  { label: "Text", value: "", name: "text" },
];

const initialValues = {};
form.forEach(({ name, value }) => (initialValues[name] = value));

const Basic = () => {
 
  return (
    <div className="basic-container">
      <h1 className="title">Add a New Question</h1>
      <Formik
        initialValues={initialValues}
        validate={(values) => {
          const errors = {};
          form.forEach(({ name }) => {
            if (name !== "url" && !values[name]) {
              errors[name] = "Required";
            }
          });

          return errors;
        }}
        onSubmit={(values, { setSubmitting, resetForm }) => {
          const newQuestion = { ...values, url: values.url || "" };
          addQuestion(newQuestion);
          alert("Question added successfully!");
          setSubmitting(false);
          resetForm();
        }}
      >
        {({
          values,
          errors,
          touched,
          handleChange,
          handleBlur,
          handleSubmit,
          isSubmitting,
        }) => (
          <form onSubmit={handleSubmit} className="form-container">
            {form.map(({ label, value, name }) => (
              <div className="form-group" key={name}>
                <label>{label}</label>
                <input
                  type="text"
                  name={name}
                  className="input-field"
                  onChange={handleChange}
                  onBlur={handleBlur}
                  value={values[name]}
                />
                {errors[name] && touched[name] && (
                  <div className="error">{errors[name]}</div>
                )}
              </div>
            ))}

            <button
              type="submit"
              className="submit-button"
              disabled={isSubmitting}
            >
              Submit
            </button>
          </form>
        )}
      </Formik>
    </div>
  );
};

export default Basic;
