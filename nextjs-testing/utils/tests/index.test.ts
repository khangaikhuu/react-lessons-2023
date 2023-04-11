import {
  cutTextToLength,
  slugify,
  composeArticleSlug,
  extractArticleIdFromSlug,
} from "../index";

const str = "The quick brown fox jumps over the lazy dog.";

describe("cutTextToLength", () => {
  it("should cut text to length", () => {
    expect(cutTextToLength(str, 20)).toBe("The quick brown fox ...");
  });

  it("should not cut text to length", () => {
    expect(cutTextToLength(str, 100)).toBe(str);
  });
});

describe("slugify makes a string URL-safe", () => {
  it("Should convert a string to URL-safe format", () => {
    const initialString = "This is a string to slugify";
    const slugifiedString = slugify(initialString);
    expect(slugifiedString).toEqual("this-is-a-string-to-slugify");
  });

  it("Should slugify a string with special characters", () => {
    const initialString = "This is a string to slugify!@#$%^&*()+";
    const slugifiedString = slugify(initialString);
    expect(slugifiedString).toEqual("this-is-a-string-to-slugify");
  });
});

describe("composeArticleSlug should create a complete article URL given a title and an ID", () => {
  it("Should create a complete article URL", () => {
    const title = "This is a title";
    const id = 11;
    const articleSlug = composeArticleSlug(id, title);
    expect(articleSlug).toEqual("this-is-a-title-11");
  });

  it("Should create a complete article URL with special characters", () => {
    const title = "This is a title!@#$%^&*()+";
    const id = 1312312;
    const articleSlug = composeArticleSlug(id, title);
    expect(articleSlug).toEqual("this-is-a-title-1312312");
  });
});

describe("extractArticleIdFromSlug should correctly extract the ID out of an article URL", () => {
  it("Should correctly extract the ID out of an article URL", () => {
    const articleUrl = "this-is-a-title-j81j91s";
    const id = extractArticleIdFromSlug(articleUrl);
    expect(id).toEqual("j81j91s");
  });
});
