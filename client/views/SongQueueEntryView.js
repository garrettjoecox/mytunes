// SongQueueEntryView.js - Defines a backbone view class for the song queue entries.
var SongQueueEntryView = Backbone.View.extend({

  tagName: 'tr',

  template: _.template('<td>(<%= artist %>)</td><td><%= title %></td><td>Remove</td>'),

  events: {
    'click': function(thing) {
      if (thing.target.innerHTML === "Remove"){
        this.model.removeQueue(this.model);
      }
    }
  },

  render: function(){
    return this.$el.html(this.template(this.model.attributes));
  }

});
