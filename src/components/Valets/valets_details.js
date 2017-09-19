import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { fetchValet, deleteValet } from '../../actions';


class ValetDetails extends Component {
  componentDidMount(){
    if (!this.props.post){
      const { id } = this.props.match.params;
      this.props.fetchValet(id);
    }
  }

  onDeleteClick() {
    const { id } = this.props.match.params;
    this.props.deleteValet(id, () => {
      this.props.history.push('/valets');
    });
  }

  render() {
    const { post } = this.props;

    if (!post) {
      return <div>Loading...</div>;
    }

    return (
      <div>
      <div className="text-center jumbotron">
      <h3>{post.name}</h3>
      </div>
      <div className="footer">
      <Link to="/valets" className="btn btn-primary">Back to Valets List</Link>
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

export default connect(mapStateToProps, { fetchValet, deleteValet })(ValetDetails);
