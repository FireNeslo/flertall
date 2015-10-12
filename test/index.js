var assert = require("assert");
var common = require("./substantiv.json");
var flertall = require("../index");


describe('flertall(ord)', function() {
  it('does normal norwegian plural', function () {
    assert.equal(flertall('bil'), 'biler');
  });
  it('makes -er words end with an "e"', function () {
    assert.equal(flertall('maler'), 'malere');
  });
  it('contracts -el words', function () {
    assert.equal(flertall('ankel'), 'ankler');
  });
  it('uses exeptions', function () {
    assert.equal(flertall('datter'), 'døtre');
    assert.equal(flertall('matmor'), 'matmødre');
  });
  it('handles 100 most common words', function () {
    Object.keys(common).forEach(function(ord) {
      assert.equal(flertall(ord), common[ord]);
    })
  });
  describe('.unntak(ord, flertall)', function () {
    it('adds plural exception', function () {
      flertall.unntak('gwarg', 'gwargeburgel')
      assert.equal(flertall('gwarg'), 'gwargeburgel');
    });
  })
});
