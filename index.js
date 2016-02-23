module.exports = function(source) {
  return source.replace(/require\('.+\.scss'\)/g, '{}');
};
