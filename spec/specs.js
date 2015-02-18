describe("Pig", function(){
  it("will return a number when you call rollDice", function(){
    var test = Object.create(Pig);
    expect((test.rollDice() <= 6) && (test.rollDice() >= 1)).to.eql(true);
  });
});
