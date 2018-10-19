// Node Modules
import _ from 'lodash';
import React, { Component } from 'react';
import axios from 'axios';
import swal from 'sweetalert';

// Components
import Row from './row';

// Utils
import { timeParser, removeNew } from './utils';

// Main Component
export default class Content extends Component {
  // Component Constructor
  constructor(props) {
    super(props);

    this.state = {
      loading: true,
      news: [],
    };
  }
  async componentWillMount() {
    try {
      const response = await axios.get('/api/news');
      const { data } = response;
      const sortedNews = _.sortBy(data, o => o.created_at).reverse();
      return this.setState({ news: sortedNews, loading: false });
    } catch (e) {
      return e;
    }
  }
  _onRowClick = (url) => {
    return window.open(url);
  }
  _onTrashClick = (id) => {
    swal({
      title: 'Are you sure?',
      text: 'Once deleted, you will not be able to recover this new!',
      icon: 'warning',
      buttons: true,
      dangerMode: true,
    })
      .then((willDelete) => {
        if (willDelete) {
          return removeNew(id).then(() => {
            const { news } = this.state;
            const filtered = news.filter(o => o._id !== id);
            return this.setState({ news: filtered });
          }).then(() => {
            return swal('Poof! The new is gone!', {
              icon: 'success',
            });
          }).catch(() => {
            return swal({
              title: 'Something went wrong :/',
              text: 'Please try again later',
              icon: 'warning',
            });
          });
        }
        return swal('The new is safe!');
      });
  }
  _renderRows = () => {
    const { news, loading } = this.state;
    if (loading) return null;
    return news.map((data) => {
      const { story_title, story_url, show, _id, created_at, author } = data;
      if (!show) return null;
      return (
        <Row
          key={_id}
          title={story_title}
          url={story_url}
          id={_id}
          author={author}
          time={timeParser(new Date(created_at))}
          onRowClick={this._onRowClick}
          onTrashClick={this._onTrashClick}
        />
      );
    });
  }
  render() {
    return (
      <div className="row d-flex justify-content-center">
        <div className="col-md-11">
          <table className="table">
            <tbody>
              {this._renderRows()}
            </tbody>
          </table>
        </div>
      </div>
    );
  }
}
