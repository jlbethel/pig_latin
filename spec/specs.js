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

  it("does move 'qu' if 'qu' does not begin the word", function() {
    expect(pigLatin("squeal")).to.equal("ealsquay");
  });

  it("treats y as a consonant if it is the first letter", function() {
    expect(pigLatin("yo")).to.equal("oyay");
  })

  it("treats y as a vowel unless it is the first letter", function() {
    expect(pigLatin("chymist")).to.equal("ymistchay");
  });

  it("translates phrase", function() {
    expect(pigLatin("any pig can quit")).to.equal("anyay igpay ancay itquay");
  });

});
