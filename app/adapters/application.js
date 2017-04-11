import RESTAdapter from 'ember-data/adapters/rest';

export default RESTAdapter.extend({
//  namespace: 'v1',
  host: 'http://ec2-34-201-7-46.compute-1.amazonaws.com:3000',
});
