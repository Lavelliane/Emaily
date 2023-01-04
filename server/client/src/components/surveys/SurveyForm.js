import React from "react";
import { Link } from "react-router-dom";
import { reduxForm, Field } from "redux-form";
import SurveyField from "./SurveyField";
import validateEmail from "../../utils/validateEmail";
import formFields from "./formFields";

const SurveyForm = ({ handleSubmit, onSurveySubmit }) => {  

  function renderFields(){
    return formFields.map(({label, name}, i) => {
        return <Field component={SurveyField} type="text" label={label} name={name} key={i}/>
    })
  }
  return (
    <div className="container">
      <form onSubmit={handleSubmit(onSurveySubmit)}>
        {renderFields()}
        <Link to="/surveys" className="red btn-flat white-text">Cancel</Link>
        <button type="submit" className="teal btn-flat right white-text">
          Next
          <i className="material-icons right">done</i>
        </button>
      </form>
    </div>
  );
};

function validate(values) {
  const errors = {}
  errors.recipients = validateEmail(values.recipients || '')
  formFields.forEach(({name}) => {
    if(!values[name]){
      errors[name] = 'You must provide a value'
    }
  })
  return errors;
}

export default reduxForm({
  validate,
  form: "surveyForm",
  destroyOnUnmount: false,
})(SurveyForm);
