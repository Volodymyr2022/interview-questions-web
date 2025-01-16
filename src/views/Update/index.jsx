import React, { useEffect, useState } from "react";
import { Formik } from "formik";
import { useParams, useNavigate } from "react-router-dom";
import { fetchAllQuestions, updateQuestion } from "../../services/firebase";
import "./style.css";

const form = [
  { label: "Link", name: "link" },
  { label: "Title", name: "title" },
  { label: "Url", name: "url" },
  { label: "Level", name: "level" },
  { label: "Theme", name: "theme" },
  { label: "Text", name: "text" },
];

const Update = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [initialValues, setInitialValues] = useState(null);

  useEffect(() => {
    const loadQuestion = async () => {
      const questions = await fetchAllQuestions();
      if (questions[id]) {
        setInitialValues(questions[id]);
      } else {
        alert("Question not found!");
        navigate("/");
      }
    };

    loadQuestion();
  }, [id, navigate]);

  if (!initialValues) return <div>Loading...</div>;

  return (
    <div className="update-container">
      <h1 className="title">Update Question</h1>
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
        onSubmit={async (values, { setSubmitting }) => {
          try {
            await updateQuestion(id, values);
            alert("Question updated successfully!");
            navigate("/");
          } catch (error) {
            console.error("Error updating question:", error);
            alert("Failed to update question.");
          } finally {
            setSubmitting(false);
          }
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
            {form.map(({ label, name }) => (
              <div className="form-group" key={name}>
                <label>{label}</label>
                <input
                  type="text"
                  name={name}
                  className="input-field"
                  onChange={handleChange}
                  onBlur={handleBlur}
                  value={values[name] || ""}
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
              Update
            </button>
          </form>
        )}
      </Formik>
    </div>
  );
};

export default Update;
