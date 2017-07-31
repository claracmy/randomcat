
(function() {
  $.bind('discordCommand', function(event) {
    var channel = event.getChannel();
    var command = event.getCommand();

    if (command.equalsIgnoreCase('cat') && channel == 'the_menagerie') {
      var url      = "http://api.giphy.com/v1/gifs/random?api_key=c11f29c3054a4abc84b133536d7aa464&tag=cute+cat"
      var response = $.customAPI.get(url).content;
      var jsonData = JSON.parse(response);
      var catUrl   = jsonData.data.url;
      $.discord.say(channel, catUrl);
    }
  });

  $.bind('initReady', function() {
    $.discord.registerCommand('./discord/handlers/catHandler.js', 'cat', 0);
  });
})();
