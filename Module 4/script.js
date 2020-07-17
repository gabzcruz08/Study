(function () {
   var names = ["Juan", "Gabz", "Julie", "Kyle", "Janzrel", "Jego", "Lester", "Paula", "Ina", "Julius"];
   for (var name in names) {
      var firstLetter = names[name].charAt(0).toLowerCase();
       if (firstLetter === 'j') {
          byeSpeaker.speak(names[name]);
  } else {
    helloSpeaker.speak(names[name]);
  }
}

})();