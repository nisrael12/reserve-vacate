$(function () { // wait for document ready
  // build scene
  var scene = new ScrollMagic.Scene({triggerElement: "#trigger1", duration: 300})
          .setPin("#pin1")
          .addIndicators({name: "1 (duration: 300)"}) // add indicators (requires plugin)
          .addTo(controller);
});