import Model from 'ember-data/model';
import attr from 'ember-data/attr';

export default Model.extend({
  phone: attr('number'),
  firstname:  attr('string'),
  lastname: attr('string'),
  email: attr('string'),
  status: attr('boolean'),
});
