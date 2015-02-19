// SongQueue.js - Defines a backbone model class for the song queue.
var SongQueue = Songs.extend({

  initialize: function(){
  },

  playFirst: function(){
    // play the song at this.models[0]
    this.models[0].play();
    this.models.shift();
    console.log(this.models);
  }
});
