headerScroll = () => {
  
  // init controller
  var controller = new ScrollMagic.Controller();
  
  // build scenes
  new ScrollMagic.Scene({
    duration: 725
    
  })
  .setPin("#scroll-container")
  .addIndicators() // add indicators (requires plugin)
  .addTo(controller);
}

headerScroll();

// lowerScroll = () => {

//   // init controller
//   var controller = new ScrollMagic.Controller();
  
//   new ScrollMagic.Scene({
//     triggerElement: "#content",
//     duration: 600,
//      triggerHook: .6
//   })
//   .removeClassToggle('header-shadow') // add class toggle
//   .addClassToggle('header-down') // add class toggle
//   .addIndicators() // add indicators (requires plugin)
//   .addTo(controller);
// }

// lowerScroll();