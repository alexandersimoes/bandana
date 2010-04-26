$('document').ready(function(){
        
        //set progress bars to 0
        var load_progress = $('.load_progress');
        var time_progress = $('.time_progress');
        load_progress.css('width', '0');
        time_progress.css('width', '0');
        
        var audio_element = $('.audio').get(0);
        
        // Event listener for song load
        audio_element.addEventListener("canplay", function() {
                audio_element.play();
                //$(".duration span").html(audioElement.duration);
                //$(".filename span").html(audioElement.src);
        }, true);
        
        // Event listener for download progress
        audio_element.addEventListener('progress', function(evt) {			
                //progress bar
                var load_percent = Math.round((evt.loaded/evt.total)*100);
                //console.log('load percentage: ' + load_percent);
                load_progress.css('width', load_percent+'%');
        }, true);
        
        // Event listener for time updates
        audio_element.addEventListener('timeupdate', function(evt) {
                //progress bar
                var time_percent = Math.round((audio_element.currentTime/audio_element.duration)*100);
                //console.log('time percentage: ' + time_percent);
                time_progress.css('width', time_percent+'%');
        }, true);
        
        
        
        
        function song(title, url){
                this.title = title;
                this.url = url;
        }
        
        var playlist = new Array();
        var song_list = $('.song_list a');
        song_list.each(function(index){
                playlist[index] = new song($(this).html(), $(this).attr('href'));
        });
        /*
        $.each(playlist, function(){
                console.log(this.title);
        });
        */
        
        // click event to lead song
        song_list.bind('click', function(evt){
                // stop browser from opening link
                evt.preventDefault();
                
                // keep selected song highlighted only
                song_list.removeClass('active_song');
                $(this).addClass('active_song');
                
                // load the song and play it
                audio_element.setAttribute('src', $(this).attr('href'));
                audio_element.load();
        });						
        
        
        $('.simoes_jukebox .play').bind('click', function(evt) {
                evt.preventDefault();
                audio_element.play();
        });
        
        $('.simoes_jukebox .pause').bind('click', function(evt) {
                evt.preventDefault();
                audio_element.pause();
        });
        /*
        song.addEventListener('canplay', function(evt) {
                console_div.append(Number(new Date()) + ' canplay event called.<br />');
        }, false);
        
        song.addEventListener('progress', function(evt) {
                $('#loaded').html(evt.loaded);
                $('#loaded_total').html(evt.total);
                
                //progress bar
                var load_percent = Math.round((evt.loaded/evt.total)*100);
                //console.log('load percentage: ' + load_percent);
                load_progress.css('width', load_percent+'%');
        }, false);
        
        song.addEventListener('timeupdate', function(evt) {
                $('#played').html(song.currentTime);
                $('#played_total').html(song.duration);
                
                //progress bar
                var time_percent = Math.round((song.currentTime/song.duration)*100);
                //console.log('time percentage: ' + time_percent);
                time_progress.css('width', time_percent+'%');
        }, false);
        */
});