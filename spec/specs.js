describe('pigLatin', function() {
  it("moves first letter to the end of word", function() {
    expect(pigLatin("pig")).to.equal("igp");
  });
});
