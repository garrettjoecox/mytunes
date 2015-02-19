// SongQueue.js - Defines a backbone model class for the song queue.
var SongQueue = Songs.extend({

  initialize: function(){
  },

  enqueue: function(song){
    // Modified backbone src code (line 681) to not merge duplicate models
    this.add(song, {merge: false});
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
  },

  removeQueue: function(song){
    this.models.splice(this.models.indexOf(song), 1);
    // use this.models.splice instead of this.remove
    //   so can remove duplicate songs in queue
  }
});
