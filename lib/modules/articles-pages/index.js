module.exports = {
  extend: 'apostrophe-pieces-pages',
  label: 'Article Page',
  alias: 'articlesPages',
  construct (self, options) {
    self.addHelpers({
      toSentence: function (text) {
	      return text.replace('-', ' ');
      }
    });
  }
  // construct: function (self, options) {
  //   self.beforeShow = function (req, callback) {
  //     req.notFound = true;

  //     return callback(null);
  //   };
  // }
};