import ApplicationRouter from './application';

export default ApplicationRouter.extend({
  pathForType: function(){
    return 'users';
  },
  primaryKey: 'phone'
});
