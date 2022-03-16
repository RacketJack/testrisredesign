"use strict";

var SOUND_FX = new (function () {

  // SoundFX Paths
  var _audio_prefix_path = "./soundFX/";
  var _audio_rotateKeys_path = "rotate_keys.WAV";
  var _audio_store_path = "store.WAV";
  var _audio_land_path = "land.WAV";
  var _audio_resolve1_path = "resolve-1.WAV";
  var _audio_resolve2_path = "resolve-2.WAV";
  var _audio_resolve3_path = "resolve-3.WAV";
  var _audio_resolve4_path = "resolve-4.WAV";
  var _audio_loopmusic_path = "13.WAV";

  // Private Functions
  function _makePath(audioPath) {
    return _audio_prefix_path + audioPath;
  }

  function _loadAudio(path, loop = false) {
    path = _makePath(path);
    var audio = new Audio(path);
    audio.load();
    if(loop) audio.loop = true
    return audio;
  }

  function _playAudio(audio) {
    if (!SOUNDFX_FLAG) return;
    audio.currentTime = 0;
    audio.play();
  }

  // Loading Audios
  var rotate_sfx = _loadAudio(_audio_rotateKeys_path);
  var store = _loadAudio(_audio_store_path);
  var land = _loadAudio(_audio_land_path);
  var resolve1 = _loadAudio(_audio_resolve1_path);
  var resolve2 = _loadAudio(_audio_resolve2_path);
  var resolve3 = _loadAudio(_audio_resolve3_path);
  var resolve4 = _loadAudio(_audio_resolve4_path);
  var loopmusic_sfx = _loadAudio(_audio_loopmusic_path, true);

  // Public Functions
  this.rotate = function() {
    _playAudio(rotate_sfx);
  }

  this.store = function() {
    _playAudio(store);
  }

  this.land = function() {
    _playAudio(land);
  }

  this.resolve1 = function() {
    _playAudio(resolve1);
  }

  this.resolve2 = function() {
    _playAudio(resolve2);
  }

  this.resolve3 = function() {
    _playAudio(resolve3);
  }

  this.resolve4 = function() {
    _playAudio(resolve4);
  }

  this.loopmusic = function() {
    _playAudio(loopmusic_sfx);
  }

  this.musicLoaded = function() {
    return loopmusic_sfx.src
  }

  this.pauseMusic = function() {
    loopmusic_sfx.pause()
  }

  this.playMusic = function () {
    loopmusic_sfx.play()
  }

  // this.musicPaused = function() {
  //   return loopmusic_sfx.paused
  // }

})();

function toggleSoundFX() {
  var iconElem = document.querySelector("#game-toggle-sound-btn > .fa");
  SOUNDFX_FLAG = !SOUNDFX_FLAG;
  if(SOUNDFX_FLAG) SOUND_FX.playMusic()
  else SOUND_FX.pauseMusic()
  iconElem.classList[SOUNDFX_FLAG ? "add" : "remove"]("fa-volume-up");
  iconElem.classList[SOUNDFX_FLAG ? "remove" : "add"]("fa-volume-off");
  blurBtn(this);
}