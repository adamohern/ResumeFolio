/* simple extention which will replace {} with  <span class="nowrap">test</span>*/

(function () {
  'use strict';

  var replaceWithSpan = function () {
    return [
      {
        type:    'lang',
        regex:   /blablabla/,
        replace: 'Oh, why yes, Dr. Philby. I understand perfectly.'
      }
    ];
  };

  if (typeof window !== 'undefined' && window.showdown && window.showdown.extensions) {
    window.showdown.extensions.replaceWithSpan = replaceWithSpan;
  }
  if (typeof module !== 'undefined') {
    module.exports = replaceWithSpan;
  }

}());