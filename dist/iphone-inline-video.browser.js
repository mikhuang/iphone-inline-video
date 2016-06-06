var makeVideoPlayableInline=function(){"use strict";function e(e){var r=this;this.start=function(i){if(i||!r.id){r.id=requestAnimationFrame(r.start);e(i-(r.prev||i));r.prev=i}};this.stop=function(){cancelAnimationFrame(r.id);delete r.id;delete r.prev}}function r(e,r,i,n){function t(r){if(Boolean(e[i])===Boolean(n)){r.stopImmediatePropagation()}delete e[i]}e.addEventListener(r,t,false);return t}function i(e,r,i,n){function t(){return i[r]}function d(e){i[r]=e}if(n){d(e[r])}Object.defineProperty(e,r,{get:t,set:d})}var n=typeof Symbol==="undefined"?function(e){return"@"+(e||"@")+Math.random().toString(26)}:Symbol;var t=/iPhone|iPod/i.test(navigator.userAgent);var d=n();var u=n();var a=n("nativeplay");var o=n("nativepause");function v(e){var r=new Audio;r.src=e.currentSrc||e.src;return r}var s=[];s.i=0;function f(e,r){if((s.tue||0)+200<Date.now()){e[u]=true;s.tue=Date.now()}e.currentTime=r;s[++s.i%3]=r*100|0/100}function c(e){return e.driver.currentTime>=e.video.duration}function p(e){var r=this;if(!r.hasAudio){r.driver.currentTime=r.video.currentTime+e/1e3;if(r.video.loop&&c(r)){r.driver.currentTime=0}}f(r.video,r.driver.currentTime);if(r.video.ended){r.video.pause(true);return false}}function l(){var e=this;var r=e[d];if(e.webkitDisplayingFullscreen){e[a]();return}if(!e.paused){return}if(!e.buffered.length){e.load()}r.driver.play();r.updater.start();e.dispatchEvent(new Event("play"));e.dispatchEvent(new Event("playing"))}function m(e){var r=this;var i=r[d];i.driver.pause();i.updater.stop();if(r.webkitDisplayingFullscreen){r[o]()}if(r.paused&&!e){return}r.dispatchEvent(new Event("pause"));if(r.ended){r[u]=true;r.dispatchEvent(new Event("ended"))}}function h(r,i){var n=r[d]={};n.hasAudio=i;n.video=r;n.updater=new e(p.bind(n));if(i){n.driver=v(r)}else{n.driver={muted:true,paused:true,pause:function t(){n.driver.paused=true},play:function u(){n.driver.paused=false;if(c(n)){f(r,0)}},get ended(){return c(n)}}}r.addEventListener("emptied",function(){if(n.driver.src&&n.driver.src!==r.src){f(r,0);r.pause();n.driver.src=r.src}},false);r.addEventListener("webkitbeginfullscreen",function(){if(!r.paused){r.pause();r[a]()}else if(i&&!n.driver.buffered.length){n.driver.load()}});if(i){r.addEventListener("webkitendfullscreen",function(){n.driver.currentTime=n.video.currentTime});r.addEventListener("seeking",function(){if(s.indexOf(n.video.currentTime*100|0/100)<0){n.driver.currentTime=n.video.currentTime}})}}function g(e){var n=e[d];e[a]=e.play;e[o]=e.pause;e.play=l;e.pause=m;e.__driver__=n.driver;e.__updater__=n.updater;i(e,"paused",n.driver);i(e,"muted",n.driver,true);i(e,"ended",n.driver);i(e,"loop",n.driver,true);r(e,"seeking");r(e,"seeked");r(e,"timeupdate",u,false);r(e,"ended",u,false)}function y(e){var r=arguments.length<=1||arguments[1]===undefined?true:arguments[1];var i=arguments.length<=2||arguments[2]===undefined?true:arguments[2];if(i&&!t){return}h(e,r);g(e);if(!r&&e.autoplay){e.play()}}return y}();
