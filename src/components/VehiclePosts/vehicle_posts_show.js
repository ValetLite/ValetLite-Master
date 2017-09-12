import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { fetchVehicle, deleteVehicle } from '../../actions';
import MyNav from '../Navbar/Navbar';



class VehiclePostsShow extends Component {
  componentDidMount(){
    if (!this.props.post){
      const { id } = this.props.match.params;
      this.props.fetchVehicle(id);
    }
  }

  onDeleteClick() {
    const { id } = this.props.match.params;
    this.props.deleteVehicle(id, () => {
      this.props.history.push('/stores');
    });
  }

  render() {
    const { post } = this.props;

    if (!post) {
      return <div>Loading...</div>;
    }

    return (
      <div>
      <MyNav />
      <div className="text-center jumbotron">
      <h3>{post.name}</h3>
      <h6>Type: {post.type}</h6>
      <p>Price ${post.price}</p>
      </div>
      <br />
      <div className="text-center">
      </div>
      <br />
      <br />
      <div className="footer">
      <Link to="/stores" className="btn btn-primary">Back to Vehicles List</Link>
      <button
        className="btn btn-danger pull-xs-right"
        onClick={this.onDeleteClick.bind(this)}
        >
        Delete
        </button>
        </div>
      </div>
    );
  }
}

function mapStateToProps({ posts }, ownProps) {
  return { post: posts[ownProps.match.params.id] };
}

export default connect(mapStateToProps, { fetchVehicle, deleteVehicle })(VehiclePostsShow);
