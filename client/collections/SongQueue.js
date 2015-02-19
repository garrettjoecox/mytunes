// SongQueue.js - Defines a backbone model class for the song queue.
var SongQueue = Songs.extend({

  initialize: function(){
  },

  enqueue: function(song){
    this.add(song);
    if (this.models.length < 2) {
      this.playFirst();
    }
    this.trigger('enqueue', this);
  },

  playFirst: function(){
    // play the song at this.models[0]
    this.models[0].play();
    //this.models.shift();
    this.trigger('enqueue', this);
  },

  ended: function(){
    this.models.shift();
    this.playFirst();
  }
});
