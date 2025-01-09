import React, { useState } from 'react';
import { Formik } from 'formik';
import './style.css';

const Basic = () => {
  const [questions, setQuestions] = useState([
    {
      link: "#is-postmessages-synchronous",
      title: "Is postMessages synchronous",
      url: "",
      level: "intermediate",
      theme: "JavaScript, Web APIs",
      text: "### Is postMessages synchronous?\n\nThe `postMessage` API is asynchronous. The message is posted to the message queue and handled later, allowing the rest of the script to continue executing without blocking.\n\nExample:\n\n```javascript\nwindow.postMessage('message', 'https://example.com');\nconsole.log('Message sent');  // Output: Message sent\n```",
    },
    {
      link: "#is-postmessages test",
      title: "Is postMessages test",
      url: "https://www.tiktok.com/oembed?url=https://www.tiktok.com/@scout2015/video/6718335390845095173",
      level: "basic",
      theme: "JavaScript, React",
      text: "### Is postMessages synchronous?\n\nThe `postMessage` API is asynchronous. The message is posted to the message queue and handled later, allowing the rest of the script to continue executing without blocking.\n\nExample:\n\n```javascript\nwindow.postMessage('message', 'https://example.com');\nconsole.log('Message sent');  // Output: Message sent\n```",
    },
  ]);

  return (
    <div className="basic-container">
      <h1 className="title">Add a New Question</h1>
      <Formik
        initialValues={{
          link: '',
          title: '',
          url: '',
          level: '',
          theme: '',
          text: '',
        }}
        validate={values => {
          const errors = {};
          if (!values.link) errors.link = 'Required';
          if (!values.title) errors.title = 'Required';
          if (!values.level) errors.level = 'Required';
          if (!values.theme) errors.theme = 'Required';
          if (!values.text) errors.text = 'Required';
          return errors;
        }}
        onSubmit={(values, { setSubmitting, resetForm }) => {
          const newQuestion = { ...values, url: values.url || '' };
          setQuestions(prevQuestions => [...prevQuestions, newQuestion]);
          alert('Question added successfully!');
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
            <div className="form-group">
              <label>Link</label>
              <input
                type="text"
                name="link"
                className="input-field"
                onChange={handleChange}
                onBlur={handleBlur}
                value={values.link}
              />
              {errors.link && touched.link && <div className="error">{errors.link}</div>}
            </div>
            <div className="form-group">
              <label>Title</label>
              <input
                type="text"
                name="title"
                className="input-field"
                onChange={handleChange}
                onBlur={handleBlur}
                value={values.title}
              />
              {errors.title && touched.title && <div className="error">{errors.title}</div>}
            </div>
            <div className="form-group">
              <label>URL (Optional)</label>
              <input
                type="text"
                name="url"
                className="input-field"
                onChange={handleChange}
                onBlur={handleBlur}
                value={values.url}
              />
            </div>
            <div className="form-group">
              <label>Level</label>
              <input
                type="text"
                name="level"
                className="input-field"
                onChange={handleChange}
                onBlur={handleBlur}
                value={values.level}
              />
              {errors.level && touched.level && <div className="error">{errors.level}</div>}
            </div>
            <div className="form-group">
              <label>Theme</label>
              <input
                type="text"
                name="theme"
                className="input-field"
                onChange={handleChange}
                onBlur={handleBlur}
                value={values.theme}
              />
              {errors.theme && touched.theme && <div className="error">{errors.theme}</div>}
            </div>
            <div className="form-group">
              <label>Text</label>
              <textarea
                name="text"
                className="textarea-field"
                onChange={handleChange}
                onBlur={handleBlur}
                value={values.text}
              />
              {errors.text && touched.text && <div className="error">{errors.text}</div>}
            </div>
            <button type="submit" className="submit-button" disabled={isSubmitting}>
              Submit
            </button>
          </form>
        )}
      </Formik>
      <div className="questions-container">
        <h2 className="questions-title">Current Questions</h2>
        <pre className="questions-list">{JSON.stringify(questions, null, 2)}</pre>
      </div>
    </div>
  );
};

export default Basic;