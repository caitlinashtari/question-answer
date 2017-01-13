import Ember from 'ember';

export default Ember.Component.extend({
  addNewQuestion: false,
  actions: {
    questionFormShow() {
      this.set('addNewQuestion', true);
    },

    saveQuestion1() {
      var params = {
        title: this.get('title') ? this.get('title') : "",
        content: this.get('content') ? this.get('content') : "",
        author: this.get('author') ? this.get('author') : "",
        date: this.get('date') ? this.get('date') : "",
        image: this.get('image') ? this.get('image') : "",
      };
      this.set('addNewQuestion', false);
      this.sendAction('saveQuestion2', params);
    }
  }
});
