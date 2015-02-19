// SongModel.js - Defines a backbone model class for songs.
var SongModel = Backbone.Model.extend({

  play: function(){
    console.log("played", this.attributes.title)
    // Triggering an event here will also trigger the event on the collection
    this.trigger('play', this);
  },

  enqueue: function(){
    console.log("Queuded", this.attributes.title)
    this.trigger('enqueue', this);
  }

});
