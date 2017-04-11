import Ember from 'ember';

export default Ember.Route.extend({

  model(params) {
   return this.store.findRecord('user', params.id);
 },
 actions:{
   //this action sets the viewUsers property to true, so the route will default to details
   backToDetails: function() {
     this.controllerFor('users').set('viewUsers', true);
   },
   //this actions checks if there are any changes that user made and if the user made changes it sends a put request to the server
   updateUser: function(model) {
     if(model.get('hasDirtyAttributes')){
      model.save().then( (res)=> {
        alert("updated");
      }).catch((err)=> {
        alert(err.errors[0].detail.detail);
        model.rollbackAttributes();
      });
     }
   }
 }
});
