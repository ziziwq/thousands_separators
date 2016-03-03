var thousands_separators = require('../src/separators.js');

describe('thousands_separators', function() {

  it('when inshould print correct text', function() {
    var input = 1000;
    var expectText = '1,000';
    expect(thousands_separators(input)).toBe(expectText);
  });

  it('should print correct text', function() {
    var input = 10000000;
    var expectText = '10,000,000';
    expect(thousands_separators(input)).toBe(expectText);
  });

  it('should print correct text', function() {
    var input = 10000.23;
    var expectText = '10,000.23';
    expect(thousands_separators(input)).toBe(expectText);
  });

  it('should print correct text', function() {
    var input = 1000.0;
    var expectText = '1,000';
    expect(thousands_separators(input)).toBe(expectText);
  });


});
