import React from "react";
import { reduxForm, Field } from "redux-form";
import SurveyField from "./SurveyField";

const SurveyForm = ({ handleSubmit }) => {

    const FIELDS = [
        {label: 'Survey Title', name: 'title'},
        {label: 'Subject Line', name: 'subject'},
        {label: 'Email Body', name: 'body'},
        {label: 'Recipient List', name: 'emails'}
    ]

  function renderFields(){
    return FIELDS.map(({label, name}, i) => {
        return <Field component={SurveyField} type="text" label={label} name={name} key={i}/>
    })
  }
  return (
    <div>
      <form onSubmit={handleSubmit(values => console.log(values))}>
        {renderFields()}
        <button type="submit">Submit</button>
      </form>
    </div>
  );
};

export default reduxForm({
  form: "surveyForm",
})(SurveyForm);
