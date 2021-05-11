import fetch from 'isomorphic-fetch';

const client = {
  getTopics: () => {
    return fetch('data/topics.json')
      .then(function(response) {
        if (response.status >= 400) {
            throw new Error("Bad response from server");
        }
        return response.json();
      })
  }
}

export default client;
