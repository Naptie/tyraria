const n = `{\r
  "fileTypes": [],\r
  "injectionSelector": "L:text.html.markdown",\r
  "patterns": [\r
    {\r
      "include": "#fenced-block-typst"\r
    },\r
    {\r
      "include": "#fenced-block-typst-code"\r
    }\r
  ],\r
  "repository": {\r
    "fenced-block-typst": {\r
      "begin": "(^|\\\\G)(\\\\s*)(\\\\\`{3,}|~{3,})\\\\s*(?i:(typ|typst)(\\\\s+[^\`~]*)?$)",\r
      "name": "markup.fenced_code.block.markdown",\r
      "end": "(^|\\\\G)(\\\\2|\\\\s{0,3})(\\\\3)\\\\s*$",\r
      "beginCaptures": {\r
        "3": {\r
          "name": "punctuation.definition.markdown"\r
        },\r
        "4": {\r
          "name": "fenced_code.block.language.markdown"\r
        },\r
        "5": {\r
          "name": "fenced_code.block.language.attributes.markdown"\r
        }\r
      },\r
      "endCaptures": {\r
        "3": {\r
          "name": "punctuation.definition.markdown"\r
        }\r
      },\r
      "patterns": [\r
        {\r
          "begin": "(^|\\\\G)(\\\\s*)(.*)",\r
          "while": "(^|\\\\G)(?!\\\\s*([\`~]{3,})\\\\s*$)",\r
          "contentName": "meta.embedded.block.typst",\r
          "patterns": [\r
            {\r
              "include": "source.typst"\r
            }\r
          ]\r
        }\r
      ]\r
    },\r
    "fenced-block-typst-code": {\r
      "begin": "(^|\\\\G)(\\\\s*)(\\\\\`{3,}|~{3,})\\\\s*(?i:(typc)(\\\\s+[^\`~]*)?$)",\r
      "name": "markup.fenced_code.block.markdown",\r
      "end": "(^|\\\\G)(\\\\2|\\\\s{0,3})(\\\\3)\\\\s*$",\r
      "beginCaptures": {\r
        "3": {\r
          "name": "punctuation.definition.markdown"\r
        },\r
        "4": {\r
          "name": "fenced_code.block.language.markdown"\r
        },\r
        "5": {\r
          "name": "fenced_code.block.language.attributes.markdown"\r
        }\r
      },\r
      "endCaptures": {\r
        "3": {\r
          "name": "punctuation.definition.markdown"\r
        }\r
      },\r
      "patterns": [\r
        {\r
          "begin": "(^|\\\\G)(\\\\s*)(.*)",\r
          "while": "(^|\\\\G)(?!\\\\s*([\`~]{3,})\\\\s*$)",\r
          "contentName": "meta.embedded.block.typst-code",\r
          "patterns": [\r
            {\r
              "include": "source.typst-code"\r
            }\r
          ]\r
        }\r
      ]\r
    }\r
  },\r
  "scopeName": "markdown.typst.codeblock"\r
}\r
`;
export {
  n as default
};
