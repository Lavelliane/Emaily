import React from 'react'
import { connect } from 'react-redux'

export const Landing = (props) => {
  return (
    <div>
        <h1>Emaily</h1>
        Collect Feedback from your Users
    </div>
  )
}

const mapStateToProps = (state) => ({})

const mapDispatchToProps = {}

export default connect(mapStateToProps, mapDispatchToProps)(Landing)