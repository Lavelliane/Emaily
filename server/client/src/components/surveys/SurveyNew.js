import React, { useState } from 'react'
import { reduxForm } from 'redux-form'
import SurveyForm from './SurveyForm'
import SurveyFormReview from './SurveyFormReview'

const SurveyNew = () => {
  const [showFormReview, setShowFormReview] = useState(false)



  return (
    <div>
        {showFormReview === true && <SurveyFormReview onCancel={() => setShowFormReview(false)}/>}
        {showFormReview === false && <SurveyForm onSurveySubmit={() => setShowFormReview(true)}/>}
    </div>
  )
}

export default reduxForm({
  form: 'surveyForm'
})(SurveyNew)
