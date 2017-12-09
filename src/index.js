/* eslint-disable no-unused-vars */

const app = new Vue({
  el: '#app',

  data: {
    newName: '',
    names: ['ore', 'ayo', 'ade'],
    title: 'Type a new Name in the input box, then click this button to add a new name to the list',
  },

  methods: {
    addName() {
      if (!this.names.includes(this.newName)) {
        this.names.push(this.newName);
        this.newName = '';
      }
    },
  },

});

