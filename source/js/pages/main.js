module.exports = (function() {

  'use strict';

  var Wheel = require('../modules/wheel.js');
  var LocalisationLightbox = require('../lightboxes/localisationLightbox.js');
  var Map = require('../modules/map.js');
  var Geolocation = require('../modules/geolocation.js');
  var Confetti = require('../modules/confetti.js');

  WOL.app.wheel = new Wheel('#wheel');
  WOL.app.lightbox.localisation = new LocalisationLightbox();

}());
