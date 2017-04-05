import RESTAdapter from 'ember-data/adapters/rest';

export default RESTAdapter.extend({
//  namespace: 'v1',
  host: 'http://localhost:3000',
});
