const { reverseString } = require("./reverse-string");

describe("ReverseString: Reversing a string", () => {
  it("Should reverse successfully", () => {
    expect(reverseString("Hello")).toBe("olleH");
    expect(reverseString("Lorem")).toBe("meroL");
    expect(reverseString("Laian")).toBe("naiaL");
    expect(reverseString("Braum")).toBe("muarB");
  });

  it("Should reverse big string", () => {
    const bigString =
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Nunc sed velit dignissim sodales ut. Gravida cum sociis natoque penatibus et magnis dis parturient montes. Pulvinar elementum integer enim neque volutpat ac. Eu scelerisque felis imperdiet proin fermentum leo vel. Euismod lacinia at quis risus sed. Aenean sed adipiscing diam donec adipiscing tristique risus. Neque viverra justo nec ultrices dui sapien eget mi. Adipiscing vitae proin sagittis nisl. Ac tincidunt vitae semper quis lectus nulla at volutpat. Dui vivamus arcu felis bibendum ut tristique. Eu consequat ac felis donec et odio pellentesque diam volutpat. Ac tortor vitae purus faucibus. In hac habitasse platea dictumst quisque sagittis purus. Placerat orci nulla pellentesque dignissim enim sit amet venenatis urna.";

    expect(reverseString(bigString)).toBe(
      ".anru sitanenev tema tis mine missingid euqsetnellep allun icro tarecalP .surup sittigas euqsiuq tsmutcid aetalp essatibah cah nI .subicuaf surup eativ rotrot cA .taptulov maid euqsetnellep oido te cenod silef ca tauqesnoc uE .euqitsirt tu mudnebib silef ucra sumaviv iuD .taptulov ta allun sutcel siuq repmes eativ tnudicnit cA .lsin sittigas niorp eativ gnicsipidA .im tege neipas iud secirtlu cen otsuj arreviv euqeN .susir euqitsirt gnicsipida cenod maid gnicsipida des naeneA .des susir siuq ta ainical domsiuE .lev oel mutnemref niorp teidrepmi silef euqsirelecs uE .ca taptulov euqen mine regetni mutnemele ranivluP .setnom tneirutrap sid singam te subitanep euqotan siicos muc adivarG .tu selados missingid tilev des cnuN .auqila angam erolod te erobal tu tnudidicni ropmet domsuie od des ,tile gnicsipida rutetcesnoc ,tema tis rolod muspi meroL"
    );
  });
});
