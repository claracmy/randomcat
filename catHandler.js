
(function() {
  $.bind('discordCommand', function(event) {
    var channel = event.getChannel();
    var command = event.getCommand();

    if (command.equalsIgnoreCase('cat') && channel == 'YOUR_CHANNEL_NAME') {
      var url      = "http://api.giphy.com/v1/gifs/random?api_key=YOUR_API_KEY&tag=cute+cat"
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
