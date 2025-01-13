import React, { useState } from "react";
import { Formik } from "formik";
import question from "../../question.json";
import "./style.css";

const form = [
  {
    label: "Link",
    value: "",
    name: "link",
  },
  {
    label: "Title",
    value: "",
    name: "title",
  },
  {
    label: "Url",
    value: "",
    name: "url",
  },
  {
    label: "Level",
    value: "",
    name: "level",
  },
  {
    label: "Theme",
    value: "",
    name: "theme",
  },
  {
    label: "Text",
    value: "",
    name: "text",
  },
  {
    label: "Id",
    value: "",
    name: "id",
  },
];

const initialValues = {};

form.forEach(({ name, value }) => (initialValues[name] = value));

const Basic = () => {
  const [questions, setQuestions] = useState([question]);

  return (
    <div className="basic-container">
      <h1 className="title">Add a New Question</h1>
      <Formik
        initialValues={initialValues}
        validate={(values) => {
          const errors = {};
          if (!values.link) errors.link = "Required";
          if (!values.title) errors.title = "Required";
          if (!values.level) errors.level = "Required";
          if (!values.theme) errors.theme = "Required";
          if (!values.text) errors.text = "Required";
          return errors;
        }}
        onSubmit={(values, { setSubmitting, resetForm }) => {
          const newQuestion = { ...values, url: values.url || "" };
          setQuestions((prevQuestions) => [...prevQuestions, newQuestion]);
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
      <div className="questions-container">
        <h2 className="questions-title">Current Questions</h2>
        <pre className="questions-list">
          {JSON.stringify(questions, null, 2)}
        </pre>
      </div>
    </div>
  );
};

export default Basic;
