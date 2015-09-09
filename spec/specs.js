describe('pigLatin', function() {
  it("adds ay to end of word if word begins with vowel", function() {
    expect(pigLatin("any")).to.equal("anyay");
  });

  it("adds ay to end of word if word begins with more than one vowel", function() {
    expect(pigLatin("each")).to.equal("eachay");
  });

  it("if first letter of word is a consonat move first letter plus ay to end of array", function() {
    expect(pigLatin("pig")).to.equal("igpay");
  });

  it("moves successive consonants to end of word and adds ay", function() {
    expect(pigLatin("track")).to.equal("acktray");
  });

  it("moves 3 successive consonants to end of word and adds ay", function() {
    expect(pigLatin("three")).to.equal("eethray");
  });

  it("moves 'qu' to end of word, if 'qu' starts the word", function() {
    expect(pigLatin("quit")).to.equal("itquay");
  });

  it("does not move 'qu' if 'qu' does not begin the word", function() {
    expect(pigLatin("squeal")).to.equal("ealsquay");
  });
});
