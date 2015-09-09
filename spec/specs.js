describe('pigLatin', function() {
  it("adds ay to end of word if word begins with vowel", function() {
    expect(pigLatin("any")).to.equal("anyay");
  });

  // it("moves first letter plus ay to end of array", function() {
  //   expect(pigLatin("pig")).to.equal("igpay");
  // });


});
