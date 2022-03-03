const getFile = async (wordType: string) =>
  await (
    await fetch(
      (process.env.NODE_ENV === "production" ? "https://domain.vercel.app/db/" : "http://localhost:3000/db/") +
        wordType,
    )
  ).text();

async function phraseGenerator(words: string) {
  let phrase = "hello";
  return phrase
}

const vowelTester = (phrase: string) => new RegExp(/[aeiou]/gi).test(phrase[0]);

export async function funcFoo(query: string) {
  const words = query.split(" ");
  const aString: string = "foo";
  let phrase = await phraseGenerator(aString);

  return phrase;
}