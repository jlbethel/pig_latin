describe('pigLatin', function() {
  it("adds ay to end of word if word begins with vowel", function() {
    expect(pigLatin("any")).to.equal("anyay");
  });

  it("if first letter of word is a consonat move first letter plus ay to end of array", function() {
    expect(pigLatin("pig")).to.equal("igpay");
  });

  it("moves successive consonants to end of word and adds ay", function() {
    expect(pigLatin("track")).to.equal("acktray");
  })
});
