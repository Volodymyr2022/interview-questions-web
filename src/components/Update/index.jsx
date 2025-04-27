import React, { useEffect, useState } from "react";
import { Formik } from "formik";
import { useNavigate } from "react-router-dom";
import { updateQuestion, removeQuestion } from "../../services/firebase";
import { getData } from "../../services/questions";
import { FaTrash } from 'react-icons/fa';
import "./style.css";

const form = [
  { label: "Link", name: "link" },
  { label: "Title", name: "title" },
  { label: "Url", name: "url" },
  { label: "Level", name: "level" },
  { label: "Theme", name: "theme" },
  { label: "Text", name: "text" },
];

const Update = ({ id }) => {
  const navigate = useNavigate();
  const [initialValues, setInitialValues] = useState(null);

  useEffect(() => {
    const loadQuestion = async () => {
      const questions = await getData();
      if (questions[id]) {
        setInitialValues(questions[id]);
      } else {
        alert("Question not found!");
        navigate("/");
      }
    };

    loadQuestion();
  }, [id, navigate]);

  const handleDelete = async () => {
    if (window.confirm("Are you sure you want to delete this question?")) {
      try {
        await removeQuestion(id);
        alert("Question deleted successfully!");
        navigate("/");
      } catch (error) {
        console.error("Error deleting question:", error);
        alert("Failed to delete question.");
      }
    }
  };

  if (!initialValues) return <div>Loading...</div>;

  return (
    <div className="update-container">
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
            <div className="button-group">
              <button
                type="submit"
                className="submit-button"
                disabled={isSubmitting}
              >
                Update
              </button>
              <FaTrash
                // type="button"
                // className="delete-button"
                style={{ cursor: 'pointer', color: 'red', fontSize: '20px' }} 
                onClick={handleDelete}
              />
      
            </div>
          </form>
        )}
      </Formik>
    </div>
  );
};

export default Update;
