
Template.strplayer.helpers({

});

Template.strplayer.events({
    
    'click .playbutton': function(e) {
        var audio = document.getElementById('audio');
        if (audio.muted == true) audio.muted = false;
        if (audio.paused) audio.play(); // audio will load and then play
        
    },

    'click .pausebutton': function(e) {
        var audio = document.getElementById('audio');
        audio.muted = true;
        // audio.pause(); // audio will load and then play
    }

  
});
