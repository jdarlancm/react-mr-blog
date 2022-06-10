import React from "react";
import { connect } from "react-redux";
import { fetchPosts } from "../actions";

class PostList extends React.Component {
  componentDidMount() {
    this.props.fetchPosts();
  }

  rednderList() {
    return this.props.posts.map((post) => {
      return (
        <div className="item" key={post.id}>
          <i class="large middle aligned icon user" />
          <div className="content">
            <div className="description">
              <h2>{post.title}</h2>
              <p>{post.body}</p>
            </div>
          </div>
        </div>
      );
    });
  }

  render() {
    return <div className="ui relaxed divided list">{this.rednderList()}</div>;
  }
}

const mapStateToPrpos = (state) => {
  return { posts: state.posts };
};

export default connect(mapStateToPrpos, { fetchPosts })(PostList);
