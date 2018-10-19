// Require babel-register for ES6
require('@babel/register');

// Node Modules
const axios = require('axios');
const _ = require('lodash');

// Schema
const HackerNew = require('../models/news');

// Async function to fetch data from api
async function fetchData() {
  try {
    const response = await axios.get('https://hn.algolia.com/api/v1/search_by_date?query=nodejs');
    return response;
  } catch (e) {
    return e;
  }
}

function timeout() {
  setTimeout(async () => {
    try {
      const newsData = await fetchData();
      const { hits } = newsData.data;

      _.forEach(hits, (hit) => {
        const { objectID, created_at, story_title, title, author, url, story_url } = hit;
        const New = new HackerNew({
          id: objectID,
          created_at,
          story_title: story_title === null ? title : story_title,
          author,
          story_url: story_url === null ? url : story_url,
        });
        New.show = New.story_title !== null;
        New.save((err) => {
          if (err) console.log(err.errmsg);
        });
      });
      return timeout();
    } catch (e) {
      console.log(e);
      return timeout();
    }
  }, 3600000);
}

// Export a timeout function to fetch data once an hour
module.exports = async function firstFetch() {
  try {
    const newsData = await fetchData();
    const { hits } = newsData.data;

    _.forEach(hits, (hit) => {
      const { objectID, created_at, story_title, title, author, url, story_url } = hit;
      const New = new HackerNew({
        id: objectID,
        created_at,
        story_title: story_title === null ? title : story_title,
        author,
        story_url: story_url === null ? url : story_url,
      });
      New.show = New.story_title !== null;
      New.save((err) => {
        if (err) console.log(err.errmsg);
      });
    });
    return timeout();
  } catch (e) {
    console.log(e);
    return timeout();
  }
};
