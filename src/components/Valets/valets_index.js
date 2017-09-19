import _ from 'lodash';
import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { fetchValets } from '../../actions';
import MyNav from '../Navbar/Navbar';

class ValetsIndex extends Component {
  componentDidMount(){
    this.props.fetchValets();
  }

  renderPosts() {
  return  _.map(this.props.posts, post => {
      return (
        <li className="list-group-item" key={post.id}>
        <Link to={`/valets/${post.id}`}>
          {post.name}
        </Link>
        </li>
      );
    });
  }

    render() {
      return (
        <div>
          <MyNav />
          <div className="text-xs-right">
          <div className="col-md-4 text-center">
          <br />
          <Link className="btn btn-primary" to="/valets/new">
            Add a New Valet
          </Link>
          </div>
          </div>
          <br />
          <br />
          <h3>Valets</h3>
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

export default connect(mapStateToProps, { fetchValets })(ValetsIndex);
