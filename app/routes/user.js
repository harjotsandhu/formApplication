import Ember from 'ember';

export default Ember.Route.extend({

  model(params) {
   return this.store.findRecord('user', params.id);
 },
 actions:{
   updateUser: function(model) {
     if(model.get('hasDirtyAttributes')){
      model.save().then( (res)=> {
        console.log('done');
      }).catch((err)=> {
        model.rollbackAttributes();
      });
     }
   }
 }
});
