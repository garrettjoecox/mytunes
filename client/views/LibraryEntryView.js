// LibraryEntryView.js - Defines a backbone view class for the entries that will appear within the library views. These will be inserted using the "subview" pattern.
var LibraryEntryView = Backbone.View.extend({

  tagName: 'tr',

  template: _.template('<td><%= artist %></td><td class="btn grey"><%= title %></td><td></td><td class="btn blue darken-2">Queue</td>'),

  events: {
    'click': function(thing) {
      if (thing.target.innerHTML !== "Queue"){
        console.log(this.model)
        this.model.play();
      }else{
        this.model.enqueue();
      }
    }
  },

  render: function(){
    return this.$el.html(this.template(this.model.attributes));
  }

});
