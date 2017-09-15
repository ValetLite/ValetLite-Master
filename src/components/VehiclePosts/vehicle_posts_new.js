import React, { Component } from 'react';
import { Field, reduxForm } from 'redux-form';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { createVehicle } from '../../actions';
import MyNav from '../Navbar/Navbar';


class VehiclePostsNew extends Component {
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
      this.props.createVehicle(values, () => {
        this.props.history.push('/vehicles');
      });
    }

    render() {

      const { handleSubmit } = this.props;

      return (
        <div className="col-xs-4 col-xs-offset-4">
        <form onSubmit={handleSubmit(this.onSubmit.bind(this))}>
        <MyNav />
        <Field
          label="Make"
          name="make"
          component={this.renderField}
        />
        <Field
          label="Model"
          name="model"
          component={this.renderField}
        />
        <Field
          label="Year"
          name="year"
          component={this.renderField}
        />
        <Field
          label="Color"
          name="color"
          component={this.renderField}
        />
        <Field
          label="Plate"
          name="plate"
          component={this.renderField}
        />
        <Field
          label="Owner"
          name="owner"
          component={this.renderField}
        />
        <Field
          label="Phone"
          name="phone"
          component={this.renderField}
        />
        <Field
          label="Space"
          name="space"
          component={this.renderField}
        />
        <Field
          label="Photo"
          name="photo"
          component={this.renderField}
        />
        <Field
          label="Comments"
          name="comments"
          component={this.renderField}
        />
        <button type="submit" className="btn btn-primary">Submit</button>
        <Link to="/vehicles" className="btn btn-danger">Cancel</Link>
        </form>
        </div>
      );
    }
  }

  function validate(values) {
    const errors = {};

    if(!values.make) {
      errors.make="Enter a vehicle make!";
    }
    if(!values.model) {
      errors.model="Enter the model of vehicle!";
    }
    if(!values.year) {
      errors.year="Enter the year!";
    }
    if(!values.color) {
      errors.color="Enter a vehicle color!";
    }
    if(!values.plate) {
      errors.plate="Enter the license plate number!";
    }
    if(!values.owner) {
      errors.owner="Enter the owner's name!";
    }if(!values.phone) {
      errors.phone="Enter a the owner's phone number!";
    }
    if(!values.space) {
      errors.space="Enter the parking space number!";
    }
    if(!values.photo) {
      errors.photo="Enter a link to a photo!";
    }
    if(!values.comments) {
      errors.comments="Enter relevant comments!";
    }

    return errors;
  }

  export default reduxForm({
    validate,
    form: 'PostsNewForm'
  })(
    connect(null,{ createVehicle })(VehiclePostsNew)
  );
