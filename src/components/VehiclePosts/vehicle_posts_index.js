import _ from 'lodash';
import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { fetchVehicles } from '../../actions';


class VehiclePostsIndex extends Component {
  componentDidMount(){
    this.props.fetchVehicles();
  }

  renderPosts() {
  return  _.map(this.props.posts, post => {
      return (
        <li className="list-group-item" key={post.id}>
        <Link to={`/vehicles/${post.id}`}>
          {post.owner}
        </Link>
        </li>
      );
    });
  }

    render() {
      return (
        <div>

          <div className="text-xs-right">
          <div className="col-md-4 text-center">
          <br />
          <Link className="btn btn-primary" to="/vehicles/new">
            Add a New Vehicle
          </Link>
          </div>
          </div>
          <br />
          <br />
          <h3>Vehicles</h3>
          <ul className="list-group">
            {this.renderPosts()}
          </ul>
        </div>
      );
    }
  }

function mapStateToProps(state) {
  return { posts: state.posts };
}

export default connect(mapStateToProps, { fetchVehicles })(VehiclePostsIndex);
