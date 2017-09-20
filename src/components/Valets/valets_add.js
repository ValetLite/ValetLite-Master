import React, { Component } from 'react';
import { Field, reduxForm } from 'redux-form';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { createValet } from '../../actions';



class ValetAdd extends Component {
    renderField(field) {
      const { meta: {touched, error} } = field;
      const className = `form-group ${touched && error ? 'has-danger' : '' }`;

      return (
        <div className={className}>
        <label>{field.label}</label>
        <input className="form-control" type="text" {...field.input} />
        <div className="text-help">
        {touched ? error : ''}
        </div>
        </div>
      );
    }

    onSubmit(values) {
      this.props.createValet(values, () => {
        this.props.history.push('/valets');
      });
    }

    render() {

      const { handleSubmit } = this.props;

      return (
        <form onSubmit={handleSubmit(this.onSubmit.bind(this))}>

        <Field
          label="Valet Name"
          name="name"
          component={this.renderField}
        />
        <button type="submit" className="btn btn-primary">Submit</button>
        <Link to="/valets" className="btn btn-danger">Cancel</Link>
        </form>
      );
    }
  }

  function validate(values) {
    const errors = {};

    if(!values.name) {
      errors.name="Enter a store name!";
    }
    if(!values.type) {
      errors.type="Enter the type of store!";
    }
    if(!values.price) {
      errors.price="Enter the price!";
    }

    return errors;
  }

  export default reduxForm({
    validate,
    form: 'PostsNewForm'
  })(
    connect(null,{ createValet })(ValetAdd)
  );
