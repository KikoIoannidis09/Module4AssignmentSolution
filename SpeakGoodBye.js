var speakWord = "Good Bye";

(function() {
var byeSpeaker = {
    speak: function(name) {
      console.log(speakWord + " " + name);
    }
  };

  window.byeSpeaker = byeSpeaker;
})();