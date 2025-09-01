const n = `{\r
  "$schema": "https://raw.githubusercontent.com/martinring/tmlanguage/master/tmlanguage.json",\r
  "scopeName": "source.typst",\r
  "name": "typst",\r
  "patterns": [\r
    {\r
      "include": "#shebang"\r
    },\r
    {\r
      "include": "#markup"\r
    }\r
  ],\r
  "repository": {\r
    "common": {\r
      "patterns": [\r
        {\r
          "include": "#strictComments"\r
        },\r
        {\r
          "include": "#blockRaw"\r
        },\r
        {\r
          "include": "#inlineRaw"\r
        }\r
      ]\r
    },\r
    "math": {\r
      "patterns": [\r
        {\r
          "include": "#markupEscape"\r
        },\r
        {\r
          "include": "#stringLiteral"\r
        },\r
        {\r
          "include": "#markupEnterCode"\r
        },\r
        {\r
          "begin": "([_^\\\\/√∛∜])\\\\s*([\\\\[\\\\(\\\\{⌈⌊⌜⌞❲⟦⟨⟪⟬⟮⦃⦅⦇⦉⦋⦍⦏⦑⦓⦕⦗⧘⧚⧼])",\r
          "end": "([\\\\]\\\\)\\\\}⌉⌋⌝⌟❳⟧⟩⟫⟭⟯⦄⦆⦈⦊⦌⦎⦐⦒⦔⦖⦘⧙⧛⧽])|(?=\\\\$)|$",\r
          "beginCaptures": {\r
            "1": {\r
              "name": "punctuation.math.operator.typst"\r
            },\r
            "2": {\r
              "name": "constant.other.symbol.typst"\r
            }\r
          },\r
          "endCaptures": {\r
            "0": {\r
              "name": "constant.other.symbol.typst"\r
            }\r
          },\r
          "patterns": [\r
            {\r
              "include": "#mathParen"\r
            },\r
            {\r
              "include": "#math"\r
            }\r
          ]\r
        },\r
        {\r
          "match": "[_^'&\\\\/√∛∜]",\r
          "name": "punctuation.math.operator.typst"\r
        },\r
        {\r
          "include": "#strictMathFuncCallOrPropAccess"\r
        },\r
        {\r
          "include": "#mathPrimary"\r
        },\r
        {\r
          "include": "#mathMoreBrace"\r
        }\r
      ]\r
    },\r
    "markup": {\r
      "patterns": [\r
        {\r
          "include": "#common"\r
        },\r
        {\r
          "include": "#markupEnterCode"\r
        },\r
        {\r
          "include": "#markupEscape"\r
        },\r
        {\r
          "name": "punctuation.definition.linebreak.typst",\r
          "match": "\\\\\\\\"\r
        },\r
        {\r
          "name": "punctuation.definition.nonbreaking-space.typst",\r
          "match": "\\\\~"\r
        },\r
        {\r
          "name": "punctuation.definition.shy.typst",\r
          "match": "-\\\\?"\r
        },\r
        {\r
          "name": "punctuation.definition.em-dash.typst",\r
          "match": "---"\r
        },\r
        {\r
          "name": "punctuation.definition.en-dash.typst",\r
          "match": "--"\r
        },\r
        {\r
          "name": "punctuation.definition.ellipsis.typst",\r
          "match": "\\\\.\\\\.\\\\."\r
        },\r
        {\r
          "include": "#markupLink"\r
        },\r
        {\r
          "include": "#markupMath"\r
        },\r
        {\r
          "include": "#markupHeading"\r
        },\r
        {\r
          "name": "punctuation.definition.list.unnumbered.typst",\r
          "match": "^\\\\s*-\\\\s+"\r
        },\r
        {\r
          "name": "punctuation.definition.list.numbered.typst",\r
          "match": "^\\\\s*([0-9]+\\\\.|\\\\+)\\\\s+"\r
        },\r
        {\r
          "include": "#markupLabel"\r
        },\r
        {\r
          "include": "#markupReference"\r
        },\r
        {\r
          "include": "#markupBrace"\r
        }\r
      ]\r
    },\r
    "shebang": {\r
      "name": "comment.line.shebang.typst",\r
      "begin": "^(#!)",\r
      "beginCaptures": {\r
        "1": {\r
          "name": "punctuation.definition.comment.line.shebang.typst"\r
        }\r
      },\r
      "end": "\\\\n"\r
    },\r
    "code": {\r
      "patterns": [\r
        {\r
          "include": "#common"\r
        },\r
        {\r
          "include": "#comments"\r
        },\r
        {\r
          "name": "punctuation.terminator.statement.typst",\r
          "match": ";"\r
        },\r
        {\r
          "include": "#expression"\r
        }\r
      ]\r
    },\r
    "comments": {\r
      "patterns": [\r
        {\r
          "include": "#blockComment"\r
        },\r
        {\r
          "include": "#lineComment"\r
        }\r
      ]\r
    },\r
    "codeBlock": {\r
      "begin": "\\\\{",\r
      "end": "\\\\}",\r
      "beginCaptures": {\r
        "0": {\r
          "name": "meta.brace.curly.typst"\r
        }\r
      },\r
      "endCaptures": {\r
        "0": {\r
          "name": "meta.brace.curly.typst"\r
        }\r
      },\r
      "patterns": [\r
        {\r
          "include": "#code"\r
        }\r
      ]\r
    },\r
    "codeMath": {\r
      "name": "markup.math.typst",\r
      "begin": "(?<![\\\\)\\\\]])\\\\$",\r
      "end": "\\\\$",\r
      "beginCaptures": {\r
        "0": {\r
          "name": "punctuation.definition.string.begin.math.typst"\r
        }\r
      },\r
      "endCaptures": {\r
        "0": {\r
          "name": "punctuation.definition.string.end.math.typst"\r
        }\r
      },\r
      "patterns": [\r
        {\r
          "include": "#math"\r
        }\r
      ]\r
    },\r
    "contentBlock": {\r
      "begin": "\\\\[",\r
      "end": "\\\\]",\r
      "beginCaptures": {\r
        "0": {\r
          "name": "meta.brace.square.typst"\r
        }\r
      },\r
      "endCaptures": {\r
        "0": {\r
          "name": "meta.brace.square.typst"\r
        }\r
      },\r
      "patterns": [\r
        {\r
          "include": "#contentBlock"\r
        },\r
        {\r
          "include": "#markup"\r
        }\r
      ]\r
    },\r
    "keywordConstants": {\r
      "patterns": [\r
        {\r
          "name": "keyword.other.none.typst",\r
          "match": "(?<!\\\\)|\\\\]|\\\\})\\\\bnone\\\\b(?!-)"\r
        },\r
        {\r
          "name": "keyword.other.auto.typst",\r
          "match": "(?<!\\\\)|\\\\]|\\\\})\\\\bauto\\\\b(?!-)"\r
        },\r
        {\r
          "name": "constant.language.boolean.typst",\r
          "match": "(?<!\\\\)|\\\\]|\\\\})\\\\b(false|true)\\\\b(?!-)"\r
        }\r
      ]\r
    },\r
    "constants": {\r
      "patterns": [\r
        {\r
          "name": "constant.numeric.length.typst",\r
          "match": "(?:\\\\d+\\\\.(?!\\\\d)|\\\\d*\\\\.?\\\\d+(?:[eE][+-]?\\\\d+)?)(?<!\\\\.)(mm|pt|cm|in|em)($|\\\\b)"\r
        },\r
        {\r
          "name": "constant.numeric.angle.typst",\r
          "match": "(?:\\\\d+\\\\.(?!\\\\d)|\\\\d*\\\\.?\\\\d+(?:[eE][+-]?\\\\d+)?)(?<!\\\\.)(rad|deg)($|\\\\b)"\r
        },\r
        {\r
          "name": "constant.numeric.percentage.typst",\r
          "match": "(?:\\\\d+\\\\.(?!\\\\d)|\\\\d*\\\\.?\\\\d+(?:[eE][+-]?\\\\d+)?)%"\r
        },\r
        {\r
          "name": "constant.numeric.fr.typst",\r
          "match": "(?:\\\\d+\\\\.(?!\\\\d)|\\\\d*\\\\.?\\\\d+(?:[eE][+-]?\\\\d+)?)(?<!\\\\.)fr"\r
        },\r
        {\r
          "name": "constant.numeric.integer.typst",\r
          "match": "(?<!\\\\)|\\\\]|\\\\})(^|(?<=\\\\s|#)|\\\\b)\\\\d+\\\\b(?!\\\\.(?:[^\\\\p{XID_Start}_]|$)|[eE])"\r
        },\r
        {\r
          "name": "constant.numeric.hex.typst",\r
          "match": "(?<!\\\\)|\\\\]|\\\\})(^|(?<=\\\\s|#)|\\\\b)0x[0-9a-fA-F]+\\\\b"\r
        },\r
        {\r
          "name": "constant.numeric.octal.typst",\r
          "match": "(?<!\\\\)|\\\\]|\\\\})(^|(?<=\\\\s|#)|\\\\b)0o[0-7]+\\\\b"\r
        },\r
        {\r
          "name": "constant.numeric.binary.typst",\r
          "match": "(?<!\\\\)|\\\\]|\\\\})(^|(?<=\\\\s|#)|\\\\b)0b[01]+\\\\b"\r
        },\r
        {\r
          "name": "constant.numeric.float.typst",\r
          "match": "(?:\\\\d+\\\\.(?!\\\\d)|\\\\d*\\\\.?\\\\d+(?:[eE][+-]?\\\\d+)?)(?:)"\r
        },\r
        {\r
          "include": "#stringLiteral"\r
        }\r
      ]\r
    },\r
    "primitiveColors": {\r
      "match": "\\\\b(red|blue|green|black|white|gray|silver|eastern|navy|aqua|teal|purple|fuchsia|maroon|orange|yellow|olive|lime|ltr|rtl|ttb|btt|start|left|center|right|end|top|horizon|bottom)\\\\b(?!-)",\r
      "name": "variable.other.constant.builtin.typst"\r
    },\r
    "primitiveFunctions": {\r
      "match": "\\\\b(?:luma|oklab|oklch|rgb|cmyk|range)\\\\b(?!-)",\r
      "name": "support.function.builtin.typst"\r
    },\r
    "primitiveTypes": {\r
      "match": "\\\\b(any|str|int|float|bool|type|length|content|array|dictionary|arguments)\\\\b(?!-)",\r
      "name": "entity.name.type.primitive.typst"\r
    },\r
    "identifier": {\r
      "match": "(?<!\\\\)|\\\\]|\\\\})\\\\b[\\\\p{XID_Start}_][\\\\p{XID_Continue}_\\\\-]*",\r
      "name": "variable.other.readwrite.typst"\r
    },\r
    "paramOrArgName": {\r
      "match": "(?!(show|import|include)\\\\s*\\\\:)((?<!\\\\)|\\\\]|\\\\})\\\\b[\\\\p{XID_Start}_][\\\\p{XID_Continue}_\\\\-]*)\\\\s*(\\\\:)",\r
      "captures": {\r
        "2": {\r
          "name": "variable.other.readwrite.typst"\r
        },\r
        "3": {\r
          "name": "punctuation.separator.colon.typst"\r
        }\r
      }\r
    },\r
    "stringLiteral": {\r
      "name": "string.quoted.double.typst",\r
      "begin": "\\"",\r
      "end": "\\"",\r
      "beginCaptures": {\r
        "0": {\r
          "name": "punctuation.definition.string.typst"\r
        }\r
      },\r
      "endCaptures": {\r
        "0": {\r
          "name": "punctuation.definition.string.typst"\r
        }\r
      },\r
      "patterns": [\r
        {\r
          "match": "(\\\\\\\\(?:[^u]|u\\\\{?[0-9a-zA-Z]*\\\\}?))|[^\\\\\\\\\\"]+",\r
          "captures": {\r
            "1": {\r
              "name": "constant.character.escape.string.typst"\r
            }\r
          }\r
        }\r
      ]\r
    },\r
    "strictComments": {\r
      "patterns": [\r
        {\r
          "include": "#blockComment"\r
        },\r
        {\r
          "include": "#strictLineComment"\r
        }\r
      ]\r
    },\r
    "blockComment": {\r
      "name": "comment.block.typst",\r
      "begin": "\\\\/\\\\*",\r
      "end": "\\\\*\\\\/",\r
      "beginCaptures": {\r
        "0": {\r
          "name": "punctuation.definition.comment.typst"\r
        }\r
      },\r
      "patterns": [\r
        {\r
          "include": "#blockComment"\r
        }\r
      ]\r
    },\r
    "lineComment": {\r
      "name": "comment.line.double-slash.typst",\r
      "begin": "\\\\/\\\\/",\r
      "end": "(?=$|\\\\n)",\r
      "beginCaptures": {\r
        "0": {\r
          "name": "punctuation.definition.comment.typst"\r
        }\r
      }\r
    },\r
    "strictLineComment": {\r
      "name": "comment.line.double-slash.typst",\r
      "begin": "(?<!:)\\\\/\\\\/",\r
      "end": "(?=$|\\\\n)",\r
      "beginCaptures": {\r
        "0": {\r
          "name": "punctuation.definition.comment.typst"\r
        }\r
      }\r
    },\r
    "mathIdentifier": {\r
      "match": "(?:(?<=_)|\\\\b)(?:(?!_)[\\\\p{XID_Start}])(?:(?!_)[\\\\p{XID_Continue}])+",\r
      "name": "variable.other.readwrite.typst"\r
    },\r
    "mathBrace": {\r
      "name": "markup.content.brace.typst",\r
      "match": "[{}]"\r
    },\r
    "mathParen": {\r
      "begin": "[\\\\[\\\\(\\\\{⌈⌊⌜⌞❲⟦⟨⟪⟬⟮⦃⦅⦇⦉⦋⦍⦏⦑⦓⦕⦗⧘⧚⧼]",\r
      "end": "([\\\\]\\\\)\\\\}⌉⌋⌝⌟❳⟧⟩⟫⟭⟯⦄⦆⦈⦊⦌⦎⦐⦒⦔⦖⦘⧙⧛⧽])|(?=\\\\$)|$",\r
      "beginCaptures": {\r
        "0": {\r
          "name": "markup.content.brace.typst"\r
        }\r
      },\r
      "endCaptures": {\r
        "0": {\r
          "name": "markup.content.brace.typst"\r
        }\r
      },\r
      "patterns": [\r
        {\r
          "include": "#mathParen"\r
        },\r
        {\r
          "include": "#math"\r
        }\r
      ]\r
    },\r
    "mathPrimary": {\r
      "begin": "(?:(?<=_)|\\\\b)(?:(?!_)[\\\\p{XID_Start}])(?:(?!_)[\\\\p{XID_Continue}])+",\r
      "beginCaptures": {\r
        "0": {\r
          "name": "variable.other.readwrite.typst"\r
        }\r
      },\r
      "end": "(?!(?:\\\\(|\\\\.[\\\\p{XID_Start}]))|(?=\\\\$)",\r
      "patterns": [\r
        {\r
          "include": "#strictMathFuncCallOrPropAccess"\r
        },\r
        {\r
          "match": "(\\\\.)((?:(?!_)[\\\\p{XID_Start}])(?:(?!_)[\\\\p{XID_Continue}])*)",\r
          "captures": {\r
            "1": {\r
              "name": "keyword.operator.accessor.typst"\r
            },\r
            "2": {\r
              "name": "variable.other.readwrite.typst"\r
            }\r
          }\r
        },\r
        {\r
          "include": "#mathCallArgs"\r
        },\r
        {\r
          "include": "#mathIdentifier"\r
        }\r
      ]\r
    },\r
    "mathMoreBrace": {\r
      "name": "markup.content.brace.typst",\r
      "match": "[{}()\\\\[\\\\]]"\r
    },\r
    "mathCallArgs": {\r
      "begin": "\\\\(",\r
      "end": "\\\\)|(?=\\\\$)",\r
      "beginCaptures": {\r
        "0": {\r
          "name": "meta.brace.round.typst"\r
        }\r
      },\r
      "endCaptures": {\r
        "0": {\r
          "name": "meta.brace.round.typst"\r
        }\r
      },\r
      "patterns": [\r
        {\r
          "include": "#comments"\r
        },\r
        {\r
          "include": "#mathParen"\r
        },\r
        {\r
          "match": ",",\r
          "name": "punctuation.separator.comma.typst"\r
        },\r
        {\r
          "include": "#math"\r
        }\r
      ]\r
    },\r
    "strictMathFuncCallOrPropAccess": {\r
      "name": "meta.expr.call.typst",\r
      "begin": "(?=(?:(?:(\\\\.)((?:(?!_)[\\\\p{XID_Start}])(?:(?!_)[\\\\p{XID_Continue}])*)|(?:(?<=_)|\\\\b)(?:(?!_)[\\\\p{XID_Start}])(?:(?!_)[\\\\p{XID_Continue}])+)(?=\\\\()))",\r
      "end": "(?:(?<=[\\\\)])(?![\\\\(\\\\.]|(?:(?<=_)|\\\\b)(?:(?!_)[\\\\p{XID_Start}])(?:(?!_)[\\\\p{XID_Continue}])+(?=\\\\()))|(?=[\\\\$\\\\s;,\\\\}\\\\]\\\\)]|$)",\r
      "patterns": [\r
        {\r
          "match": "\\\\.",\r
          "name": "keyword.operator.accessor.typst"\r
        },\r
        {\r
          "match": "(?:(?<=_)|\\\\b)(?:(?!_)[\\\\p{XID_Start}])(?:(?!_)[\\\\p{XID_Continue}])+(?=\\\\()",\r
          "name": "entity.name.function.typst",\r
          "captures": {\r
            "0": {\r
              "name": "entity.name.function.typst",\r
              "patterns": [\r
                {\r
                  "include": "#primitiveFunctions"\r
                },\r
                {\r
                  "include": "#primitiveTypes"\r
                },\r
                {\r
                  "match": ".*",\r
                  "name": "entity.name.function.typst"\r
                }\r
              ]\r
            }\r
          }\r
        },\r
        {\r
          "include": "#mathIdentifier"\r
        },\r
        {\r
          "match": "(\\\\()\\\\s*(\\\\))",\r
          "captures": {\r
            "1": {\r
              "name": "meta.brace.round.typst"\r
            },\r
            "2": {\r
              "name": "meta.brace.round.typst"\r
            }\r
          }\r
        },\r
        {\r
          "include": "#mathCallArgs"\r
        }\r
      ]\r
    },\r
    "markupBrace": {\r
      "name": "markup.content.brace.typst",\r
      "match": "[{}()\\\\[\\\\]]"\r
    },\r
    "markupMath": {\r
      "name": "markup.math.typst",\r
      "begin": "\\\\$",\r
      "end": "\\\\$",\r
      "beginCaptures": {\r
        "0": {\r
          "name": "punctuation.definition.string.begin.math.typst"\r
        }\r
      },\r
      "endCaptures": {\r
        "0": {\r
          "name": "punctuation.definition.string.end.math.typst"\r
        }\r
      },\r
      "patterns": [\r
        {\r
          "include": "#math"\r
        }\r
      ]\r
    },\r
    "markupLabel": {\r
      "name": "string.other.label.typst",\r
      "match": "<[\\\\p{XID_Start}_][\\\\p{XID_Continue}_\\\\-\\\\.:]*>"\r
    },\r
    "markupReference": {\r
      "name": "string.other.reference.typst",\r
      "match": "(@)[\\\\p{XID_Start}_](?:[\\\\p{XID_Continue}_\\\\-]|[\\\\.:](?!:\\\\s|$|([\\\\.:]*[^\\\\p{XID_Continue}_\\\\-\\\\.:])))*",\r
      "captures": {\r
        "1": {\r
          "name": "punctuation.definition.reference.typst"\r
        }\r
      }\r
    },\r
    "markupEscape": {\r
      "name": "constant.character.escape.content.typst",\r
      "match": "\\\\\\\\(?:[^u]|u\\\\{?[0-9a-zA-Z]*\\\\}?)"\r
    },\r
    "markupHeading": {\r
      "name": "markup.heading.typst",\r
      "begin": "^\\\\s*(=+)(?:(?=[\\\\r\\\\n]|$)|[^\\\\S\\\\n]+)",\r
      "end": "\\\\n|(?=<)",\r
      "beginCaptures": {\r
        "1": {\r
          "name": "punctuation.definition.heading.typst"\r
        }\r
      },\r
      "patterns": [\r
        {\r
          "include": "#markup"\r
        }\r
      ]\r
    },\r
    "markupEnterCode": {\r
      "patterns": [\r
        {\r
          "match": "(#)\\\\s",\r
          "captures": {\r
            "1": {\r
              "name": "punctuation.definition.hash.typst"\r
            }\r
          }\r
        },\r
        {\r
          "match": "(#)(;)",\r
          "captures": {\r
            "1": {\r
              "name": "punctuation.definition.hash.typst"\r
            },\r
            "2": {\r
              "name": "punctuation.terminator.statement.typst"\r
            }\r
          }\r
        },\r
        {\r
          "begin": "#(?=(?:break|continue|and|or|not|return|as|in|include|import|let|else|if|for|while|context|set|show)\\\\b(?!-))",\r
          "end": "(?<=;)|(?<=[\\\\}\\\\]\\\\)])(?![;\\\\(\\\\[\\\\$]|(?:\\\\.(?<!\\\\)|\\\\]|\\\\})\\\\b[\\\\p{XID_Start}_][\\\\p{XID_Continue}_\\\\-]*(?=[\\\\(\\\\[])))|(?<!#)(?=[\\"\\\\\\\\\\\\_\\\\{])|(?<![#\\\\]\\\\}\\\\]])(?=\\\\[)|(?=\\\\.(?:[^0-9\\\\p{XID_Start}_]|$))|(?=[\\\\s,\\\\}\\\\]\\\\)\\\\#\\\\$\\\\+\\\\-\\\\*\\\\/\\\\=]|$)|(;)",\r
          "beginCaptures": {\r
            "0": {\r
              "name": "keyword.control.hash.typst"\r
            }\r
          },\r
          "endCaptures": {\r
            "1": {\r
              "name": "punctuation.terminator.statement.typst"\r
            }\r
          },\r
          "patterns": [\r
            {\r
              "include": "#expression"\r
            }\r
          ]\r
        },\r
        {\r
          "begin": "#(?=(?:any|str|int|float|bool|type|length|content|array|dictionary|arguments)\\\\b(?!-))",\r
          "end": "(?<=;)|(?<=[\\\\}\\\\]\\\\)])(?![;\\\\(\\\\[\\\\$]|(?:\\\\.(?<!\\\\)|\\\\]|\\\\})\\\\b[\\\\p{XID_Start}_][\\\\p{XID_Continue}_\\\\-]*(?=[\\\\(\\\\[])))|(?<!#)(?=[\\"\\\\\\\\\\\\_\\\\{])|(?<![#\\\\]\\\\}\\\\]])(?=\\\\[)|(?=\\\\.(?:[^0-9\\\\p{XID_Start}_]|$))|(?=[\\\\s,\\\\}\\\\]\\\\)\\\\#\\\\$\\\\+\\\\-\\\\*\\\\/\\\\=]|$)|(;)",\r
          "beginCaptures": {\r
            "0": {\r
              "name": "entity.name.type.primitive.hash.typst"\r
            }\r
          },\r
          "endCaptures": {\r
            "1": {\r
              "name": "punctuation.terminator.statement.typst"\r
            }\r
          },\r
          "patterns": [\r
            {\r
              "include": "#expression"\r
            }\r
          ]\r
        },\r
        {\r
          "begin": "#(?=(?:none)\\\\b(?!-))",\r
          "end": "(?<=;)|(?<=[\\\\}\\\\]\\\\)])(?![;\\\\(\\\\[\\\\$]|(?:\\\\.(?<!\\\\)|\\\\]|\\\\})\\\\b[\\\\p{XID_Start}_][\\\\p{XID_Continue}_\\\\-]*(?=[\\\\(\\\\[])))|(?<!#)(?=[\\"\\\\\\\\\\\\_\\\\{])|(?<![#\\\\]\\\\}\\\\]])(?=\\\\[)|(?=\\\\.(?:[^0-9\\\\p{XID_Start}_]|$))|(?=[\\\\s,\\\\}\\\\]\\\\)\\\\#\\\\$\\\\+\\\\-\\\\*\\\\/\\\\=]|$)|(;)",\r
          "beginCaptures": {\r
            "0": {\r
              "name": "keyword.other.none.hash.typst"\r
            }\r
          },\r
          "endCaptures": {\r
            "1": {\r
              "name": "punctuation.terminator.statement.typst"\r
            }\r
          },\r
          "patterns": [\r
            {\r
              "include": "#expression"\r
            }\r
          ]\r
        },\r
        {\r
          "begin": "#(?=(?:false|true)\\\\b(?!-))",\r
          "end": "(?<=;)|(?<=[\\\\}\\\\]\\\\)])(?![;\\\\(\\\\[\\\\$]|(?:\\\\.(?<!\\\\)|\\\\]|\\\\})\\\\b[\\\\p{XID_Start}_][\\\\p{XID_Continue}_\\\\-]*(?=[\\\\(\\\\[])))|(?<!#)(?=[\\"\\\\\\\\\\\\_\\\\{])|(?<![#\\\\]\\\\}\\\\]])(?=\\\\[)|(?=\\\\.(?:[^0-9\\\\p{XID_Start}_]|$))|(?=[\\\\s,\\\\}\\\\]\\\\)\\\\#\\\\$\\\\+\\\\-\\\\*\\\\/\\\\=]|$)|(;)",\r
          "beginCaptures": {\r
            "0": {\r
              "name": "constant.language.boolean.hash.typst"\r
            }\r
          },\r
          "endCaptures": {\r
            "1": {\r
              "name": "punctuation.terminator.statement.typst"\r
            }\r
          },\r
          "patterns": [\r
            {\r
              "include": "#expression"\r
            }\r
          ]\r
        },\r
        {\r
          "begin": "#(?=[\\\\p{XID_Start}_][\\\\p{XID_Continue}_\\\\-]*[\\\\(\\\\[])",\r
          "end": "(?<=;)|(?<=[\\\\}\\\\]\\\\)])(?![;\\\\(\\\\[\\\\$]|(?:\\\\.(?<!\\\\)|\\\\]|\\\\})\\\\b[\\\\p{XID_Start}_][\\\\p{XID_Continue}_\\\\-]*(?=[\\\\(\\\\[])))|(?<!#)(?=[\\"\\\\\\\\\\\\_\\\\{])|(?<![#\\\\]\\\\}\\\\]])(?=\\\\[)|(?=\\\\.(?:[^0-9\\\\p{XID_Start}_]|$))|(?=[\\\\s,\\\\}\\\\]\\\\)\\\\#\\\\$\\\\+\\\\-\\\\*\\\\/\\\\=]|$)|(;)",\r
          "beginCaptures": {\r
            "0": {\r
              "name": "entity.name.function.hash.typst"\r
            }\r
          },\r
          "endCaptures": {\r
            "1": {\r
              "name": "punctuation.terminator.statement.typst"\r
            }\r
          },\r
          "patterns": [\r
            {\r
              "include": "#expression"\r
            }\r
          ]\r
        },\r
        {\r
          "begin": "#(?=[\\\\p{XID_Start}_])",\r
          "end": "(?<=;)|(?<=[\\\\}\\\\]\\\\)])(?![;\\\\(\\\\[\\\\$]|(?:\\\\.(?<!\\\\)|\\\\]|\\\\})\\\\b[\\\\p{XID_Start}_][\\\\p{XID_Continue}_\\\\-]*(?=[\\\\(\\\\[])))|(?<!#)(?=[\\"\\\\\\\\\\\\_\\\\{])|(?<![#\\\\]\\\\}\\\\]])(?=\\\\[)|(?=\\\\.(?:[^0-9\\\\p{XID_Start}_]|$))|(?=[\\\\s,\\\\}\\\\]\\\\)\\\\#\\\\$\\\\+\\\\-\\\\*\\\\/\\\\=]|$)|(;)",\r
          "beginCaptures": {\r
            "0": {\r
              "name": "variable.other.readwrite.hash.typst"\r
            }\r
          },\r
          "endCaptures": {\r
            "1": {\r
              "name": "punctuation.terminator.statement.typst"\r
            }\r
          },\r
          "patterns": [\r
            {\r
              "include": "#expression"\r
            }\r
          ]\r
        },\r
        {\r
          "begin": "#(?=\\\\\\")",\r
          "end": "(?<=;)|(?<=[\\\\}\\\\]\\\\)])(?![;\\\\(\\\\[\\\\$]|(?:\\\\.(?<!\\\\)|\\\\]|\\\\})\\\\b[\\\\p{XID_Start}_][\\\\p{XID_Continue}_\\\\-]*(?=[\\\\(\\\\[])))|(?<!#)(?=[\\"\\\\\\\\\\\\_\\\\{])|(?<![#\\\\]\\\\}\\\\]])(?=\\\\[)|(?=\\\\.(?:[^0-9\\\\p{XID_Start}_]|$))|(?=[\\\\s,\\\\}\\\\]\\\\)\\\\#\\\\$\\\\+\\\\-\\\\*\\\\/\\\\=]|$)|(;)",\r
          "beginCaptures": {\r
            "0": {\r
              "name": "string.hash.hash.typst"\r
            }\r
          },\r
          "endCaptures": {\r
            "1": {\r
              "name": "punctuation.terminator.statement.typst"\r
            }\r
          },\r
          "patterns": [\r
            {\r
              "include": "#expression"\r
            }\r
          ]\r
        },\r
        {\r
          "begin": "#(?=\\\\d|\\\\.\\\\d)",\r
          "end": "(?<=;)|(?<=[\\\\}\\\\]\\\\)])(?![;\\\\(\\\\[\\\\$]|(?:\\\\.(?<!\\\\)|\\\\]|\\\\})\\\\b[\\\\p{XID_Start}_][\\\\p{XID_Continue}_\\\\-]*(?=[\\\\(\\\\[])))|(?<!#)(?=[\\"\\\\\\\\\\\\_\\\\{])|(?<![#\\\\]\\\\}\\\\]])(?=\\\\[)|(?=\\\\.(?:[^0-9\\\\p{XID_Start}_]|$))|(?=[\\\\s,\\\\}\\\\]\\\\)\\\\#\\\\$\\\\+\\\\-\\\\*\\\\/\\\\=]|$)|(;)",\r
          "beginCaptures": {\r
            "0": {\r
              "name": "constant.numeric.hash.typst"\r
            }\r
          },\r
          "endCaptures": {\r
            "1": {\r
              "name": "punctuation.terminator.statement.typst"\r
            }\r
          },\r
          "patterns": [\r
            {\r
              "include": "#expression"\r
            }\r
          ]\r
        },\r
        {\r
          "begin": "#(?:)",\r
          "end": "(?<=;)|(?<=[\\\\}\\\\]\\\\)])(?![;\\\\(\\\\[\\\\$]|(?:\\\\.(?<!\\\\)|\\\\]|\\\\})\\\\b[\\\\p{XID_Start}_][\\\\p{XID_Continue}_\\\\-]*(?=[\\\\(\\\\[])))|(?<!#)(?=[\\"\\\\\\\\\\\\_\\\\{])|(?<![#\\\\]\\\\}\\\\]])(?=\\\\[)|(?=\\\\.(?:[^0-9\\\\p{XID_Start}_]|$))|(?=[\\\\s,\\\\}\\\\]\\\\)\\\\#\\\\$\\\\+\\\\-\\\\*\\\\/\\\\=]|$)|(;)",\r
          "beginCaptures": {\r
            "0": {\r
              "name": "keyword.control.hash.typst"\r
            }\r
          },\r
          "endCaptures": {\r
            "1": {\r
              "name": "punctuation.terminator.statement.typst"\r
            }\r
          },\r
          "patterns": [\r
            {\r
              "include": "#expression"\r
            }\r
          ]\r
        }\r
      ]\r
    },\r
    "markupBold": {\r
      "name": "markup.bold.typst",\r
      "begin": "(?:(^\\\\*|\\\\*$|((?<=[\\\\W\\\\p{Han}\\\\p{Hangul}\\\\p{Katakana}\\\\p{Hiragana}])\\\\*)|(\\\\*(?=[\\\\W\\\\p{Han}\\\\p{Hangul}\\\\p{Katakana}\\\\p{Hiragana}]))))",\r
      "end": "(?:(^\\\\*|\\\\*$|((?<=[\\\\W\\\\p{Han}\\\\p{Hangul}\\\\p{Katakana}\\\\p{Hiragana}])\\\\*)|(\\\\*(?=[\\\\W\\\\p{Han}\\\\p{Hangul}\\\\p{Katakana}\\\\p{Hiragana}]))))|\\\\n|(?=\\\\])",\r
      "beginCaptures": {\r
        "0": {\r
          "name": "punctuation.definition.bold.typst"\r
        }\r
      },\r
      "endCaptures": {\r
        "0": {\r
          "name": "punctuation.definition.bold.typst"\r
        }\r
      },\r
      "patterns": [\r
        {\r
          "include": "#markup"\r
        }\r
      ]\r
    },\r
    "markupLink": {\r
      "name": "markup.underline.link.typst",\r
      "begin": "(?:https?):\\\\/\\\\/",\r
      "end": "(?=[\\\\s\\\\]\\\\)]|(?=[!,.:;?'](?:[\\\\s\\\\]\\\\)]|$)))",\r
      "patterns": [\r
        {\r
          "include": "#markupLinkParen"\r
        },\r
        {\r
          "include": "#markupLinkBracket"\r
        },\r
        {\r
          "match": "(^|\\\\G)(?:[0-9a-zA-Z#$%&*\\\\+\\\\-\\\\/\\\\=\\\\@\\\\_\\\\~]+|(?:[!,.:;?']+(?![\\\\s\\\\]\\\\)]|$)))"\r
        }\r
      ]\r
    },\r
    "markupLinkParen": {\r
      "begin": "\\\\(",\r
      "end": "\\\\)|(?=[\\\\s\\\\]])",\r
      "patterns": [\r
        {\r
          "include": "#markupLink"\r
        }\r
      ]\r
    },\r
    "markupLinkBracket": {\r
      "begin": "\\\\[",\r
      "end": "\\\\]|(?=[\\\\s\\\\)])",\r
      "patterns": [\r
        {\r
          "include": "#markupLink"\r
        }\r
      ]\r
    },\r
    "markupItalic": {\r
      "name": "markup.italic.typst",\r
      "begin": "(?:(^_|_$|((?<=[\\\\W\\\\p{Han}\\\\p{Hangul}\\\\p{Katakana}\\\\p{Hiragana}])_)|(_(?=[\\\\W\\\\p{Han}\\\\p{Hangul}\\\\p{Katakana}\\\\p{Hiragana}]))))",\r
      "end": "(?:(^_|_$|((?<=[\\\\W\\\\p{Han}\\\\p{Hangul}\\\\p{Katakana}\\\\p{Hiragana}])_)|(_(?=[\\\\W\\\\p{Han}\\\\p{Hangul}\\\\p{Katakana}\\\\p{Hiragana}]))))|\\\\n|(?=\\\\])",\r
      "beginCaptures": {\r
        "0": {\r
          "name": "punctuation.definition.italic.typst"\r
        }\r
      },\r
      "endCaptures": {\r
        "0": {\r
          "name": "punctuation.definition.italic.typst"\r
        }\r
      },\r
      "patterns": [\r
        {\r
          "include": "#markup"\r
        }\r
      ]\r
    },\r
    "inlineRaw": {\r
      "name": "markup.raw.inline.typst string.other.raw.typst",\r
      "begin": "\`",\r
      "end": "\`",\r
      "beginCaptures": {\r
        "0": {\r
          "name": "punctuation.definition.raw.inline.typst"\r
        }\r
      },\r
      "endCaptures": {\r
        "0": {\r
          "name": "punctuation.definition.raw.inline.typst"\r
        }\r
      }\r
    },\r
    "blockRaw": {\r
      "patterns": [\r
        {\r
          "include": "#batchfile"\r
        },\r
        {\r
          "include": "#bibtex"\r
        },\r
        {\r
          "include": "#c"\r
        },\r
        {\r
          "include": "#clojure"\r
        },\r
        {\r
          "include": "#coffee"\r
        },\r
        {\r
          "include": "#cpp"\r
        },\r
        {\r
          "include": "#css"\r
        },\r
        {\r
          "include": "#cs"\r
        },\r
        {\r
          "include": "#dart"\r
        },\r
        {\r
          "include": "#diff"\r
        },\r
        {\r
          "include": "#dockerfile"\r
        },\r
        {\r
          "include": "#elixir"\r
        },\r
        {\r
          "include": "#erlang"\r
        },\r
        {\r
          "include": "#fs"\r
        },\r
        {\r
          "include": "#git-commit"\r
        },\r
        {\r
          "include": "#git-rebase"\r
        },\r
        {\r
          "include": "#go"\r
        },\r
        {\r
          "include": "#groovy"\r
        },\r
        {\r
          "include": "#handlebars"\r
        },\r
        {\r
          "include": "#html"\r
        },\r
        {\r
          "include": "#ini"\r
        },\r
        {\r
          "include": "#java"\r
        },\r
        {\r
          "include": "#js"\r
        },\r
        {\r
          "include": "#jsonc"\r
        },\r
        {\r
          "include": "#json"\r
        },\r
        {\r
          "include": "#julia"\r
        },\r
        {\r
          "include": "#latex"\r
        },\r
        {\r
          "include": "#less"\r
        },\r
        {\r
          "include": "#log"\r
        },\r
        {\r
          "include": "#lua"\r
        },\r
        {\r
          "include": "#makefile"\r
        },\r
        {\r
          "include": "#markdown"\r
        },\r
        {\r
          "include": "#objc"\r
        },\r
        {\r
          "include": "#perl"\r
        },\r
        {\r
          "include": "#perl6"\r
        },\r
        {\r
          "include": "#php"\r
        },\r
        {\r
          "include": "#powershell"\r
        },\r
        {\r
          "include": "#pug"\r
        },\r
        {\r
          "include": "#r"\r
        },\r
        {\r
          "include": "#regexp"\r
        },\r
        {\r
          "include": "#re"\r
        },\r
        {\r
          "include": "#ruby"\r
        },\r
        {\r
          "include": "#scss"\r
        },\r
        {\r
          "include": "#sql"\r
        },\r
        {\r
          "include": "#swift"\r
        },\r
        {\r
          "include": "#typst"\r
        },\r
        {\r
          "include": "#typst-code"\r
        },\r
        {\r
          "include": "#xml"\r
        },\r
        {\r
          "include": "#xsl"\r
        },\r
        {\r
          "include": "#yaml"\r
        },\r
        {\r
          "include": "#python"\r
        },\r
        {\r
          "include": "#rust"\r
        },\r
        {\r
          "include": "#scala"\r
        },\r
        {\r
          "include": "#shell"\r
        },\r
        {\r
          "include": "#ts"\r
        },\r
        {\r
          "include": "#tsx"\r
        },\r
        {\r
          "include": "#twig"\r
        },\r
        {\r
          "include": "#vb"\r
        },\r
        {\r
          "include": "#blockRawGeneral"\r
        }\r
      ]\r
    },\r
    "batchfile": {\r
      "lang": "batchfile",\r
      "patterns": [\r
        {\r
          "name": "markup.raw.block.typst",\r
          "match": "(\`{3,})(batchfile|bat|batch)\\\\b(.*?)(\\\\1)",\r
          "captures": {\r
            "1": {\r
              "name": "punctuation.definition.raw.begin.typst"\r
            },\r
            "2": {\r
              "name": "fenced_code.block.language.typst"\r
            },\r
            "3": {\r
              "name": "meta.embedded.block.batchfile",\r
              "patterns": [\r
                {\r
                  "include": "source.batchfile"\r
                }\r
              ]\r
            },\r
            "4": {\r
              "name": "punctuation.definition.raw.end.typst"\r
            }\r
          }\r
        },\r
        {\r
          "name": "markup.raw.block.typst",\r
          "begin": "(\`{6})(batchfile|bat|batch)\\\\b",\r
          "beginCaptures": {\r
            "1": {\r
              "name": "punctuation.definition.raw.begin.typst"\r
            },\r
            "2": {\r
              "name": "fenced_code.block.language.typst"\r
            }\r
          },\r
          "end": "\\\\s*(\\\\1)",\r
          "endCaptures": {\r
            "1": {\r
              "name": "punctuation.definition.raw.end.typst"\r
            }\r
          },\r
          "patterns": [\r
            {\r
              "begin": "(^|\\\\G)(\\\\s*)",\r
              "while": "(^|\\\\G)(?!\\\\s*\`{6,}\\\\s*)",\r
              "contentName": "meta.embedded.block.batchfile",\r
              "patterns": [\r
                {\r
                  "include": "source.batchfile"\r
                }\r
              ]\r
            }\r
          ]\r
        },\r
        {\r
          "name": "markup.raw.block.typst",\r
          "begin": "(\`{5})(batchfile|bat|batch)\\\\b",\r
          "beginCaptures": {\r
            "1": {\r
              "name": "punctuation.definition.raw.begin.typst"\r
            },\r
            "2": {\r
              "name": "fenced_code.block.language.typst"\r
            }\r
          },\r
          "end": "\\\\s*(\\\\1)",\r
          "endCaptures": {\r
            "1": {\r
              "name": "punctuation.definition.raw.end.typst"\r
            }\r
          },\r
          "patterns": [\r
            {\r
              "begin": "(^|\\\\G)(\\\\s*)",\r
              "while": "(^|\\\\G)(?!\\\\s*\`{5,}\\\\s*)",\r
              "contentName": "meta.embedded.block.batchfile",\r
              "patterns": [\r
                {\r
                  "include": "source.batchfile"\r
                }\r
              ]\r
            }\r
          ]\r
        },\r
        {\r
          "name": "markup.raw.block.typst",\r
          "begin": "(\`{4})(batchfile|bat|batch)\\\\b",\r
          "beginCaptures": {\r
            "1": {\r
              "name": "punctuation.definition.raw.begin.typst"\r
            },\r
            "2": {\r
              "name": "fenced_code.block.language.typst"\r
            }\r
          },\r
          "end": "\\\\s*(\\\\1)",\r
          "endCaptures": {\r
            "1": {\r
              "name": "punctuation.definition.raw.end.typst"\r
            }\r
          },\r
          "patterns": [\r
            {\r
              "begin": "(^|\\\\G)(\\\\s*)",\r
              "while": "(^|\\\\G)(?!\\\\s*\`{4,}\\\\s*)",\r
              "contentName": "meta.embedded.block.batchfile",\r
              "patterns": [\r
                {\r
                  "include": "source.batchfile"\r
                }\r
              ]\r
            }\r
          ]\r
        },\r
        {\r
          "name": "markup.raw.block.typst",\r
          "begin": "(\`{3})(batchfile|bat|batch)\\\\b",\r
          "beginCaptures": {\r
            "1": {\r
              "name": "punctuation.definition.raw.begin.typst"\r
            },\r
            "2": {\r
              "name": "fenced_code.block.language.typst"\r
            }\r
          },\r
          "end": "\\\\s*(\\\\1)",\r
          "endCaptures": {\r
            "1": {\r
              "name": "punctuation.definition.raw.end.typst"\r
            }\r
          },\r
          "patterns": [\r
            {\r
              "begin": "(^|\\\\G)(\\\\s*)",\r
              "while": "(^|\\\\G)(?!\\\\s*\`{3,}\\\\s*)",\r
              "contentName": "meta.embedded.block.batchfile",\r
              "patterns": [\r
                {\r
                  "include": "source.batchfile"\r
                }\r
              ]\r
            }\r
          ]\r
        }\r
      ]\r
    },\r
    "bibtex": {\r
      "lang": "bibtex",\r
      "patterns": [\r
        {\r
          "name": "markup.raw.block.typst",\r
          "match": "(\`{3,})(bibtex)\\\\b(.*?)(\\\\1)",\r
          "captures": {\r
            "1": {\r
              "name": "punctuation.definition.raw.begin.typst"\r
            },\r
            "2": {\r
              "name": "fenced_code.block.language.typst"\r
            },\r
            "3": {\r
              "name": "meta.embedded.block.bibtex",\r
              "patterns": [\r
                {\r
                  "include": "source.bibtex"\r
                }\r
              ]\r
            },\r
            "4": {\r
              "name": "punctuation.definition.raw.end.typst"\r
            }\r
          }\r
        },\r
        {\r
          "name": "markup.raw.block.typst",\r
          "begin": "(\`{6})(bibtex)\\\\b",\r
          "beginCaptures": {\r
            "1": {\r
              "name": "punctuation.definition.raw.begin.typst"\r
            },\r
            "2": {\r
              "name": "fenced_code.block.language.typst"\r
            }\r
          },\r
          "end": "\\\\s*(\\\\1)",\r
          "endCaptures": {\r
            "1": {\r
              "name": "punctuation.definition.raw.end.typst"\r
            }\r
          },\r
          "patterns": [\r
            {\r
              "begin": "(^|\\\\G)(\\\\s*)",\r
              "while": "(^|\\\\G)(?!\\\\s*\`{6,}\\\\s*)",\r
              "contentName": "meta.embedded.block.bibtex",\r
              "patterns": [\r
                {\r
                  "include": "source.bibtex"\r
                }\r
              ]\r
            }\r
          ]\r
        },\r
        {\r
          "name": "markup.raw.block.typst",\r
          "begin": "(\`{5})(bibtex)\\\\b",\r
          "beginCaptures": {\r
            "1": {\r
              "name": "punctuation.definition.raw.begin.typst"\r
            },\r
            "2": {\r
              "name": "fenced_code.block.language.typst"\r
            }\r
          },\r
          "end": "\\\\s*(\\\\1)",\r
          "endCaptures": {\r
            "1": {\r
              "name": "punctuation.definition.raw.end.typst"\r
            }\r
          },\r
          "patterns": [\r
            {\r
              "begin": "(^|\\\\G)(\\\\s*)",\r
              "while": "(^|\\\\G)(?!\\\\s*\`{5,}\\\\s*)",\r
              "contentName": "meta.embedded.block.bibtex",\r
              "patterns": [\r
                {\r
                  "include": "source.bibtex"\r
                }\r
              ]\r
            }\r
          ]\r
        },\r
        {\r
          "name": "markup.raw.block.typst",\r
          "begin": "(\`{4})(bibtex)\\\\b",\r
          "beginCaptures": {\r
            "1": {\r
              "name": "punctuation.definition.raw.begin.typst"\r
            },\r
            "2": {\r
              "name": "fenced_code.block.language.typst"\r
            }\r
          },\r
          "end": "\\\\s*(\\\\1)",\r
          "endCaptures": {\r
            "1": {\r
              "name": "punctuation.definition.raw.end.typst"\r
            }\r
          },\r
          "patterns": [\r
            {\r
              "begin": "(^|\\\\G)(\\\\s*)",\r
              "while": "(^|\\\\G)(?!\\\\s*\`{4,}\\\\s*)",\r
              "contentName": "meta.embedded.block.bibtex",\r
              "patterns": [\r
                {\r
                  "include": "source.bibtex"\r
                }\r
              ]\r
            }\r
          ]\r
        },\r
        {\r
          "name": "markup.raw.block.typst",\r
          "begin": "(\`{3})(bibtex)\\\\b",\r
          "beginCaptures": {\r
            "1": {\r
              "name": "punctuation.definition.raw.begin.typst"\r
            },\r
            "2": {\r
              "name": "fenced_code.block.language.typst"\r
            }\r
          },\r
          "end": "\\\\s*(\\\\1)",\r
          "endCaptures": {\r
            "1": {\r
              "name": "punctuation.definition.raw.end.typst"\r
            }\r
          },\r
          "patterns": [\r
            {\r
              "begin": "(^|\\\\G)(\\\\s*)",\r
              "while": "(^|\\\\G)(?!\\\\s*\`{3,}\\\\s*)",\r
              "contentName": "meta.embedded.block.bibtex",\r
              "patterns": [\r
                {\r
                  "include": "source.bibtex"\r
                }\r
              ]\r
            }\r
          ]\r
        }\r
      ]\r
    },\r
    "c": {\r
      "lang": "c",\r
      "patterns": [\r
        {\r
          "name": "markup.raw.block.typst",\r
          "match": "(\`{3,})(c|h)\\\\b(.*?)(\\\\1)",\r
          "captures": {\r
            "1": {\r
              "name": "punctuation.definition.raw.begin.typst"\r
            },\r
            "2": {\r
              "name": "fenced_code.block.language.typst"\r
            },\r
            "3": {\r
              "name": "meta.embedded.block.c",\r
              "patterns": [\r
                {\r
                  "include": "source.c"\r
                }\r
              ]\r
            },\r
            "4": {\r
              "name": "punctuation.definition.raw.end.typst"\r
            }\r
          }\r
        },\r
        {\r
          "name": "markup.raw.block.typst",\r
          "begin": "(\`{6})(c|h)\\\\b",\r
          "beginCaptures": {\r
            "1": {\r
              "name": "punctuation.definition.raw.begin.typst"\r
            },\r
            "2": {\r
              "name": "fenced_code.block.language.typst"\r
            }\r
          },\r
          "end": "\\\\s*(\\\\1)",\r
          "endCaptures": {\r
            "1": {\r
              "name": "punctuation.definition.raw.end.typst"\r
            }\r
          },\r
          "patterns": [\r
            {\r
              "begin": "(^|\\\\G)(\\\\s*)",\r
              "while": "(^|\\\\G)(?!\\\\s*\`{6,}\\\\s*)",\r
              "contentName": "meta.embedded.block.c",\r
              "patterns": [\r
                {\r
                  "include": "source.c"\r
                }\r
              ]\r
            }\r
          ]\r
        },\r
        {\r
          "name": "markup.raw.block.typst",\r
          "begin": "(\`{5})(c|h)\\\\b",\r
          "beginCaptures": {\r
            "1": {\r
              "name": "punctuation.definition.raw.begin.typst"\r
            },\r
            "2": {\r
              "name": "fenced_code.block.language.typst"\r
            }\r
          },\r
          "end": "\\\\s*(\\\\1)",\r
          "endCaptures": {\r
            "1": {\r
              "name": "punctuation.definition.raw.end.typst"\r
            }\r
          },\r
          "patterns": [\r
            {\r
              "begin": "(^|\\\\G)(\\\\s*)",\r
              "while": "(^|\\\\G)(?!\\\\s*\`{5,}\\\\s*)",\r
              "contentName": "meta.embedded.block.c",\r
              "patterns": [\r
                {\r
                  "include": "source.c"\r
                }\r
              ]\r
            }\r
          ]\r
        },\r
        {\r
          "name": "markup.raw.block.typst",\r
          "begin": "(\`{4})(c|h)\\\\b",\r
          "beginCaptures": {\r
            "1": {\r
              "name": "punctuation.definition.raw.begin.typst"\r
            },\r
            "2": {\r
              "name": "fenced_code.block.language.typst"\r
            }\r
          },\r
          "end": "\\\\s*(\\\\1)",\r
          "endCaptures": {\r
            "1": {\r
              "name": "punctuation.definition.raw.end.typst"\r
            }\r
          },\r
          "patterns": [\r
            {\r
              "begin": "(^|\\\\G)(\\\\s*)",\r
              "while": "(^|\\\\G)(?!\\\\s*\`{4,}\\\\s*)",\r
              "contentName": "meta.embedded.block.c",\r
              "patterns": [\r
                {\r
                  "include": "source.c"\r
                }\r
              ]\r
            }\r
          ]\r
        },\r
        {\r
          "name": "markup.raw.block.typst",\r
          "begin": "(\`{3})(c|h)\\\\b",\r
          "beginCaptures": {\r
            "1": {\r
              "name": "punctuation.definition.raw.begin.typst"\r
            },\r
            "2": {\r
              "name": "fenced_code.block.language.typst"\r
            }\r
          },\r
          "end": "\\\\s*(\\\\1)",\r
          "endCaptures": {\r
            "1": {\r
              "name": "punctuation.definition.raw.end.typst"\r
            }\r
          },\r
          "patterns": [\r
            {\r
              "begin": "(^|\\\\G)(\\\\s*)",\r
              "while": "(^|\\\\G)(?!\\\\s*\`{3,}\\\\s*)",\r
              "contentName": "meta.embedded.block.c",\r
              "patterns": [\r
                {\r
                  "include": "source.c"\r
                }\r
              ]\r
            }\r
          ]\r
        }\r
      ]\r
    },\r
    "clojure": {\r
      "lang": "clojure",\r
      "patterns": [\r
        {\r
          "name": "markup.raw.block.typst",\r
          "match": "(\`{3,})(clojure|clj|cljs)\\\\b(.*?)(\\\\1)",\r
          "captures": {\r
            "1": {\r
              "name": "punctuation.definition.raw.begin.typst"\r
            },\r
            "2": {\r
              "name": "fenced_code.block.language.typst"\r
            },\r
            "3": {\r
              "name": "meta.embedded.block.clojure",\r
              "patterns": [\r
                {\r
                  "include": "source.clojure"\r
                }\r
              ]\r
            },\r
            "4": {\r
              "name": "punctuation.definition.raw.end.typst"\r
            }\r
          }\r
        },\r
        {\r
          "name": "markup.raw.block.typst",\r
          "begin": "(\`{6})(clojure|clj|cljs)\\\\b",\r
          "beginCaptures": {\r
            "1": {\r
              "name": "punctuation.definition.raw.begin.typst"\r
            },\r
            "2": {\r
              "name": "fenced_code.block.language.typst"\r
            }\r
          },\r
          "end": "\\\\s*(\\\\1)",\r
          "endCaptures": {\r
            "1": {\r
              "name": "punctuation.definition.raw.end.typst"\r
            }\r
          },\r
          "patterns": [\r
            {\r
              "begin": "(^|\\\\G)(\\\\s*)",\r
              "while": "(^|\\\\G)(?!\\\\s*\`{6,}\\\\s*)",\r
              "contentName": "meta.embedded.block.clojure",\r
              "patterns": [\r
                {\r
                  "include": "source.clojure"\r
                }\r
              ]\r
            }\r
          ]\r
        },\r
        {\r
          "name": "markup.raw.block.typst",\r
          "begin": "(\`{5})(clojure|clj|cljs)\\\\b",\r
          "beginCaptures": {\r
            "1": {\r
              "name": "punctuation.definition.raw.begin.typst"\r
            },\r
            "2": {\r
              "name": "fenced_code.block.language.typst"\r
            }\r
          },\r
          "end": "\\\\s*(\\\\1)",\r
          "endCaptures": {\r
            "1": {\r
              "name": "punctuation.definition.raw.end.typst"\r
            }\r
          },\r
          "patterns": [\r
            {\r
              "begin": "(^|\\\\G)(\\\\s*)",\r
              "while": "(^|\\\\G)(?!\\\\s*\`{5,}\\\\s*)",\r
              "contentName": "meta.embedded.block.clojure",\r
              "patterns": [\r
                {\r
                  "include": "source.clojure"\r
                }\r
              ]\r
            }\r
          ]\r
        },\r
        {\r
          "name": "markup.raw.block.typst",\r
          "begin": "(\`{4})(clojure|clj|cljs)\\\\b",\r
          "beginCaptures": {\r
            "1": {\r
              "name": "punctuation.definition.raw.begin.typst"\r
            },\r
            "2": {\r
              "name": "fenced_code.block.language.typst"\r
            }\r
          },\r
          "end": "\\\\s*(\\\\1)",\r
          "endCaptures": {\r
            "1": {\r
              "name": "punctuation.definition.raw.end.typst"\r
            }\r
          },\r
          "patterns": [\r
            {\r
              "begin": "(^|\\\\G)(\\\\s*)",\r
              "while": "(^|\\\\G)(?!\\\\s*\`{4,}\\\\s*)",\r
              "contentName": "meta.embedded.block.clojure",\r
              "patterns": [\r
                {\r
                  "include": "source.clojure"\r
                }\r
              ]\r
            }\r
          ]\r
        },\r
        {\r
          "name": "markup.raw.block.typst",\r
          "begin": "(\`{3})(clojure|clj|cljs)\\\\b",\r
          "beginCaptures": {\r
            "1": {\r
              "name": "punctuation.definition.raw.begin.typst"\r
            },\r
            "2": {\r
              "name": "fenced_code.block.language.typst"\r
            }\r
          },\r
          "end": "\\\\s*(\\\\1)",\r
          "endCaptures": {\r
            "1": {\r
              "name": "punctuation.definition.raw.end.typst"\r
            }\r
          },\r
          "patterns": [\r
            {\r
              "begin": "(^|\\\\G)(\\\\s*)",\r
              "while": "(^|\\\\G)(?!\\\\s*\`{3,}\\\\s*)",\r
              "contentName": "meta.embedded.block.clojure",\r
              "patterns": [\r
                {\r
                  "include": "source.clojure"\r
                }\r
              ]\r
            }\r
          ]\r
        }\r
      ]\r
    },\r
    "coffee": {\r
      "lang": "coffee",\r
      "patterns": [\r
        {\r
          "name": "markup.raw.block.typst",\r
          "match": "(\`{3,})(coffee|Cakefile|coffee\\\\.erb)\\\\b(.*?)(\\\\1)",\r
          "captures": {\r
            "1": {\r
              "name": "punctuation.definition.raw.begin.typst"\r
            },\r
            "2": {\r
              "name": "fenced_code.block.language.typst"\r
            },\r
            "3": {\r
              "name": "meta.embedded.block.coffee",\r
              "patterns": [\r
                {\r
                  "include": "source.coffee"\r
                }\r
              ]\r
            },\r
            "4": {\r
              "name": "punctuation.definition.raw.end.typst"\r
            }\r
          }\r
        },\r
        {\r
          "name": "markup.raw.block.typst",\r
          "begin": "(\`{6})(coffee|Cakefile|coffee\\\\.erb)\\\\b",\r
          "beginCaptures": {\r
            "1": {\r
              "name": "punctuation.definition.raw.begin.typst"\r
            },\r
            "2": {\r
              "name": "fenced_code.block.language.typst"\r
            }\r
          },\r
          "end": "\\\\s*(\\\\1)",\r
          "endCaptures": {\r
            "1": {\r
              "name": "punctuation.definition.raw.end.typst"\r
            }\r
          },\r
          "patterns": [\r
            {\r
              "begin": "(^|\\\\G)(\\\\s*)",\r
              "while": "(^|\\\\G)(?!\\\\s*\`{6,}\\\\s*)",\r
              "contentName": "meta.embedded.block.coffee",\r
              "patterns": [\r
                {\r
                  "include": "source.coffee"\r
                }\r
              ]\r
            }\r
          ]\r
        },\r
        {\r
          "name": "markup.raw.block.typst",\r
          "begin": "(\`{5})(coffee|Cakefile|coffee\\\\.erb)\\\\b",\r
          "beginCaptures": {\r
            "1": {\r
              "name": "punctuation.definition.raw.begin.typst"\r
            },\r
            "2": {\r
              "name": "fenced_code.block.language.typst"\r
            }\r
          },\r
          "end": "\\\\s*(\\\\1)",\r
          "endCaptures": {\r
            "1": {\r
              "name": "punctuation.definition.raw.end.typst"\r
            }\r
          },\r
          "patterns": [\r
            {\r
              "begin": "(^|\\\\G)(\\\\s*)",\r
              "while": "(^|\\\\G)(?!\\\\s*\`{5,}\\\\s*)",\r
              "contentName": "meta.embedded.block.coffee",\r
              "patterns": [\r
                {\r
                  "include": "source.coffee"\r
                }\r
              ]\r
            }\r
          ]\r
        },\r
        {\r
          "name": "markup.raw.block.typst",\r
          "begin": "(\`{4})(coffee|Cakefile|coffee\\\\.erb)\\\\b",\r
          "beginCaptures": {\r
            "1": {\r
              "name": "punctuation.definition.raw.begin.typst"\r
            },\r
            "2": {\r
              "name": "fenced_code.block.language.typst"\r
            }\r
          },\r
          "end": "\\\\s*(\\\\1)",\r
          "endCaptures": {\r
            "1": {\r
              "name": "punctuation.definition.raw.end.typst"\r
            }\r
          },\r
          "patterns": [\r
            {\r
              "begin": "(^|\\\\G)(\\\\s*)",\r
              "while": "(^|\\\\G)(?!\\\\s*\`{4,}\\\\s*)",\r
              "contentName": "meta.embedded.block.coffee",\r
              "patterns": [\r
                {\r
                  "include": "source.coffee"\r
                }\r
              ]\r
            }\r
          ]\r
        },\r
        {\r
          "name": "markup.raw.block.typst",\r
          "begin": "(\`{3})(coffee|Cakefile|coffee\\\\.erb)\\\\b",\r
          "beginCaptures": {\r
            "1": {\r
              "name": "punctuation.definition.raw.begin.typst"\r
            },\r
            "2": {\r
              "name": "fenced_code.block.language.typst"\r
            }\r
          },\r
          "end": "\\\\s*(\\\\1)",\r
          "endCaptures": {\r
            "1": {\r
              "name": "punctuation.definition.raw.end.typst"\r
            }\r
          },\r
          "patterns": [\r
            {\r
              "begin": "(^|\\\\G)(\\\\s*)",\r
              "while": "(^|\\\\G)(?!\\\\s*\`{3,}\\\\s*)",\r
              "contentName": "meta.embedded.block.coffee",\r
              "patterns": [\r
                {\r
                  "include": "source.coffee"\r
                }\r
              ]\r
            }\r
          ]\r
        }\r
      ]\r
    },\r
    "cpp": {\r
      "lang": "cpp",\r
      "patterns": [\r
        {\r
          "name": "markup.raw.block.typst",\r
          "match": "(\`{3,})(cpp|c\\\\+\\\\+|cxx)\\\\b(.*?)(\\\\1)",\r
          "captures": {\r
            "1": {\r
              "name": "punctuation.definition.raw.begin.typst"\r
            },\r
            "2": {\r
              "name": "fenced_code.block.language.typst"\r
            },\r
            "3": {\r
              "name": "meta.embedded.block.cpp",\r
              "patterns": [\r
                {\r
                  "include": "source.cpp"\r
                }\r
              ]\r
            },\r
            "4": {\r
              "name": "punctuation.definition.raw.end.typst"\r
            }\r
          }\r
        },\r
        {\r
          "name": "markup.raw.block.typst",\r
          "begin": "(\`{6})(cpp|c\\\\+\\\\+|cxx)\\\\b",\r
          "beginCaptures": {\r
            "1": {\r
              "name": "punctuation.definition.raw.begin.typst"\r
            },\r
            "2": {\r
              "name": "fenced_code.block.language.typst"\r
            }\r
          },\r
          "end": "\\\\s*(\\\\1)",\r
          "endCaptures": {\r
            "1": {\r
              "name": "punctuation.definition.raw.end.typst"\r
            }\r
          },\r
          "patterns": [\r
            {\r
              "begin": "(^|\\\\G)(\\\\s*)",\r
              "while": "(^|\\\\G)(?!\\\\s*\`{6,}\\\\s*)",\r
              "contentName": "meta.embedded.block.cpp",\r
              "patterns": [\r
                {\r
                  "include": "source.cpp"\r
                }\r
              ]\r
            }\r
          ]\r
        },\r
        {\r
          "name": "markup.raw.block.typst",\r
          "begin": "(\`{5})(cpp|c\\\\+\\\\+|cxx)\\\\b",\r
          "beginCaptures": {\r
            "1": {\r
              "name": "punctuation.definition.raw.begin.typst"\r
            },\r
            "2": {\r
              "name": "fenced_code.block.language.typst"\r
            }\r
          },\r
          "end": "\\\\s*(\\\\1)",\r
          "endCaptures": {\r
            "1": {\r
              "name": "punctuation.definition.raw.end.typst"\r
            }\r
          },\r
          "patterns": [\r
            {\r
              "begin": "(^|\\\\G)(\\\\s*)",\r
              "while": "(^|\\\\G)(?!\\\\s*\`{5,}\\\\s*)",\r
              "contentName": "meta.embedded.block.cpp",\r
              "patterns": [\r
                {\r
                  "include": "source.cpp"\r
                }\r
              ]\r
            }\r
          ]\r
        },\r
        {\r
          "name": "markup.raw.block.typst",\r
          "begin": "(\`{4})(cpp|c\\\\+\\\\+|cxx)\\\\b",\r
          "beginCaptures": {\r
            "1": {\r
              "name": "punctuation.definition.raw.begin.typst"\r
            },\r
            "2": {\r
              "name": "fenced_code.block.language.typst"\r
            }\r
          },\r
          "end": "\\\\s*(\\\\1)",\r
          "endCaptures": {\r
            "1": {\r
              "name": "punctuation.definition.raw.end.typst"\r
            }\r
          },\r
          "patterns": [\r
            {\r
              "begin": "(^|\\\\G)(\\\\s*)",\r
              "while": "(^|\\\\G)(?!\\\\s*\`{4,}\\\\s*)",\r
              "contentName": "meta.embedded.block.cpp",\r
              "patterns": [\r
                {\r
                  "include": "source.cpp"\r
                }\r
              ]\r
            }\r
          ]\r
        },\r
        {\r
          "name": "markup.raw.block.typst",\r
          "begin": "(\`{3})(cpp|c\\\\+\\\\+|cxx)\\\\b",\r
          "beginCaptures": {\r
            "1": {\r
              "name": "punctuation.definition.raw.begin.typst"\r
            },\r
            "2": {\r
              "name": "fenced_code.block.language.typst"\r
            }\r
          },\r
          "end": "\\\\s*(\\\\1)",\r
          "endCaptures": {\r
            "1": {\r
              "name": "punctuation.definition.raw.end.typst"\r
            }\r
          },\r
          "patterns": [\r
            {\r
              "begin": "(^|\\\\G)(\\\\s*)",\r
              "while": "(^|\\\\G)(?!\\\\s*\`{3,}\\\\s*)",\r
              "contentName": "meta.embedded.block.cpp",\r
              "patterns": [\r
                {\r
                  "include": "source.cpp"\r
                }\r
              ]\r
            }\r
          ]\r
        }\r
      ]\r
    },\r
    "css": {\r
      "lang": "css",\r
      "patterns": [\r
        {\r
          "name": "markup.raw.block.typst",\r
          "match": "(\`{3,})(css|css\\\\.erb)\\\\b(.*?)(\\\\1)",\r
          "captures": {\r
            "1": {\r
              "name": "punctuation.definition.raw.begin.typst"\r
            },\r
            "2": {\r
              "name": "fenced_code.block.language.typst"\r
            },\r
            "3": {\r
              "name": "meta.embedded.block.css",\r
              "patterns": [\r
                {\r
                  "include": "source.css"\r
                }\r
              ]\r
            },\r
            "4": {\r
              "name": "punctuation.definition.raw.end.typst"\r
            }\r
          }\r
        },\r
        {\r
          "name": "markup.raw.block.typst",\r
          "begin": "(\`{6})(css|css\\\\.erb)\\\\b",\r
          "beginCaptures": {\r
            "1": {\r
              "name": "punctuation.definition.raw.begin.typst"\r
            },\r
            "2": {\r
              "name": "fenced_code.block.language.typst"\r
            }\r
          },\r
          "end": "\\\\s*(\\\\1)",\r
          "endCaptures": {\r
            "1": {\r
              "name": "punctuation.definition.raw.end.typst"\r
            }\r
          },\r
          "patterns": [\r
            {\r
              "begin": "(^|\\\\G)(\\\\s*)",\r
              "while": "(^|\\\\G)(?!\\\\s*\`{6,}\\\\s*)",\r
              "contentName": "meta.embedded.block.css",\r
              "patterns": [\r
                {\r
                  "include": "source.css"\r
                }\r
              ]\r
            }\r
          ]\r
        },\r
        {\r
          "name": "markup.raw.block.typst",\r
          "begin": "(\`{5})(css|css\\\\.erb)\\\\b",\r
          "beginCaptures": {\r
            "1": {\r
              "name": "punctuation.definition.raw.begin.typst"\r
            },\r
            "2": {\r
              "name": "fenced_code.block.language.typst"\r
            }\r
          },\r
          "end": "\\\\s*(\\\\1)",\r
          "endCaptures": {\r
            "1": {\r
              "name": "punctuation.definition.raw.end.typst"\r
            }\r
          },\r
          "patterns": [\r
            {\r
              "begin": "(^|\\\\G)(\\\\s*)",\r
              "while": "(^|\\\\G)(?!\\\\s*\`{5,}\\\\s*)",\r
              "contentName": "meta.embedded.block.css",\r
              "patterns": [\r
                {\r
                  "include": "source.css"\r
                }\r
              ]\r
            }\r
          ]\r
        },\r
        {\r
          "name": "markup.raw.block.typst",\r
          "begin": "(\`{4})(css|css\\\\.erb)\\\\b",\r
          "beginCaptures": {\r
            "1": {\r
              "name": "punctuation.definition.raw.begin.typst"\r
            },\r
            "2": {\r
              "name": "fenced_code.block.language.typst"\r
            }\r
          },\r
          "end": "\\\\s*(\\\\1)",\r
          "endCaptures": {\r
            "1": {\r
              "name": "punctuation.definition.raw.end.typst"\r
            }\r
          },\r
          "patterns": [\r
            {\r
              "begin": "(^|\\\\G)(\\\\s*)",\r
              "while": "(^|\\\\G)(?!\\\\s*\`{4,}\\\\s*)",\r
              "contentName": "meta.embedded.block.css",\r
              "patterns": [\r
                {\r
                  "include": "source.css"\r
                }\r
              ]\r
            }\r
          ]\r
        },\r
        {\r
          "name": "markup.raw.block.typst",\r
          "begin": "(\`{3})(css|css\\\\.erb)\\\\b",\r
          "beginCaptures": {\r
            "1": {\r
              "name": "punctuation.definition.raw.begin.typst"\r
            },\r
            "2": {\r
              "name": "fenced_code.block.language.typst"\r
            }\r
          },\r
          "end": "\\\\s*(\\\\1)",\r
          "endCaptures": {\r
            "1": {\r
              "name": "punctuation.definition.raw.end.typst"\r
            }\r
          },\r
          "patterns": [\r
            {\r
              "begin": "(^|\\\\G)(\\\\s*)",\r
              "while": "(^|\\\\G)(?!\\\\s*\`{3,}\\\\s*)",\r
              "contentName": "meta.embedded.block.css",\r
              "patterns": [\r
                {\r
                  "include": "source.css"\r
                }\r
              ]\r
            }\r
          ]\r
        }\r
      ]\r
    },\r
    "cs": {\r
      "lang": "cs",\r
      "patterns": [\r
        {\r
          "name": "markup.raw.block.typst",\r
          "match": "(\`{3,})(cs|csharp|c#)\\\\b(.*?)(\\\\1)",\r
          "captures": {\r
            "1": {\r
              "name": "punctuation.definition.raw.begin.typst"\r
            },\r
            "2": {\r
              "name": "fenced_code.block.language.typst"\r
            },\r
            "3": {\r
              "name": "meta.embedded.block.cs",\r
              "patterns": [\r
                {\r
                  "include": "source.cs"\r
                }\r
              ]\r
            },\r
            "4": {\r
              "name": "punctuation.definition.raw.end.typst"\r
            }\r
          }\r
        },\r
        {\r
          "name": "markup.raw.block.typst",\r
          "begin": "(\`{6})(cs|csharp|c#)\\\\b",\r
          "beginCaptures": {\r
            "1": {\r
              "name": "punctuation.definition.raw.begin.typst"\r
            },\r
            "2": {\r
              "name": "fenced_code.block.language.typst"\r
            }\r
          },\r
          "end": "\\\\s*(\\\\1)",\r
          "endCaptures": {\r
            "1": {\r
              "name": "punctuation.definition.raw.end.typst"\r
            }\r
          },\r
          "patterns": [\r
            {\r
              "begin": "(^|\\\\G)(\\\\s*)",\r
              "while": "(^|\\\\G)(?!\\\\s*\`{6,}\\\\s*)",\r
              "contentName": "meta.embedded.block.cs",\r
              "patterns": [\r
                {\r
                  "include": "source.cs"\r
                }\r
              ]\r
            }\r
          ]\r
        },\r
        {\r
          "name": "markup.raw.block.typst",\r
          "begin": "(\`{5})(cs|csharp|c#)\\\\b",\r
          "beginCaptures": {\r
            "1": {\r
              "name": "punctuation.definition.raw.begin.typst"\r
            },\r
            "2": {\r
              "name": "fenced_code.block.language.typst"\r
            }\r
          },\r
          "end": "\\\\s*(\\\\1)",\r
          "endCaptures": {\r
            "1": {\r
              "name": "punctuation.definition.raw.end.typst"\r
            }\r
          },\r
          "patterns": [\r
            {\r
              "begin": "(^|\\\\G)(\\\\s*)",\r
              "while": "(^|\\\\G)(?!\\\\s*\`{5,}\\\\s*)",\r
              "contentName": "meta.embedded.block.cs",\r
              "patterns": [\r
                {\r
                  "include": "source.cs"\r
                }\r
              ]\r
            }\r
          ]\r
        },\r
        {\r
          "name": "markup.raw.block.typst",\r
          "begin": "(\`{4})(cs|csharp|c#)\\\\b",\r
          "beginCaptures": {\r
            "1": {\r
              "name": "punctuation.definition.raw.begin.typst"\r
            },\r
            "2": {\r
              "name": "fenced_code.block.language.typst"\r
            }\r
          },\r
          "end": "\\\\s*(\\\\1)",\r
          "endCaptures": {\r
            "1": {\r
              "name": "punctuation.definition.raw.end.typst"\r
            }\r
          },\r
          "patterns": [\r
            {\r
              "begin": "(^|\\\\G)(\\\\s*)",\r
              "while": "(^|\\\\G)(?!\\\\s*\`{4,}\\\\s*)",\r
              "contentName": "meta.embedded.block.cs",\r
              "patterns": [\r
                {\r
                  "include": "source.cs"\r
                }\r
              ]\r
            }\r
          ]\r
        },\r
        {\r
          "name": "markup.raw.block.typst",\r
          "begin": "(\`{3})(cs|csharp|c#)\\\\b",\r
          "beginCaptures": {\r
            "1": {\r
              "name": "punctuation.definition.raw.begin.typst"\r
            },\r
            "2": {\r
              "name": "fenced_code.block.language.typst"\r
            }\r
          },\r
          "end": "\\\\s*(\\\\1)",\r
          "endCaptures": {\r
            "1": {\r
              "name": "punctuation.definition.raw.end.typst"\r
            }\r
          },\r
          "patterns": [\r
            {\r
              "begin": "(^|\\\\G)(\\\\s*)",\r
              "while": "(^|\\\\G)(?!\\\\s*\`{3,}\\\\s*)",\r
              "contentName": "meta.embedded.block.cs",\r
              "patterns": [\r
                {\r
                  "include": "source.cs"\r
                }\r
              ]\r
            }\r
          ]\r
        }\r
      ]\r
    },\r
    "dart": {\r
      "lang": "dart",\r
      "patterns": [\r
        {\r
          "name": "markup.raw.block.typst",\r
          "match": "(\`{3,})(dart)\\\\b(.*?)(\\\\1)",\r
          "captures": {\r
            "1": {\r
              "name": "punctuation.definition.raw.begin.typst"\r
            },\r
            "2": {\r
              "name": "fenced_code.block.language.typst"\r
            },\r
            "3": {\r
              "name": "meta.embedded.block.dart",\r
              "patterns": [\r
                {\r
                  "include": "source.dart"\r
                }\r
              ]\r
            },\r
            "4": {\r
              "name": "punctuation.definition.raw.end.typst"\r
            }\r
          }\r
        },\r
        {\r
          "name": "markup.raw.block.typst",\r
          "begin": "(\`{6})(dart)\\\\b",\r
          "beginCaptures": {\r
            "1": {\r
              "name": "punctuation.definition.raw.begin.typst"\r
            },\r
            "2": {\r
              "name": "fenced_code.block.language.typst"\r
            }\r
          },\r
          "end": "\\\\s*(\\\\1)",\r
          "endCaptures": {\r
            "1": {\r
              "name": "punctuation.definition.raw.end.typst"\r
            }\r
          },\r
          "patterns": [\r
            {\r
              "begin": "(^|\\\\G)(\\\\s*)",\r
              "while": "(^|\\\\G)(?!\\\\s*\`{6,}\\\\s*)",\r
              "contentName": "meta.embedded.block.dart",\r
              "patterns": [\r
                {\r
                  "include": "source.dart"\r
                }\r
              ]\r
            }\r
          ]\r
        },\r
        {\r
          "name": "markup.raw.block.typst",\r
          "begin": "(\`{5})(dart)\\\\b",\r
          "beginCaptures": {\r
            "1": {\r
              "name": "punctuation.definition.raw.begin.typst"\r
            },\r
            "2": {\r
              "name": "fenced_code.block.language.typst"\r
            }\r
          },\r
          "end": "\\\\s*(\\\\1)",\r
          "endCaptures": {\r
            "1": {\r
              "name": "punctuation.definition.raw.end.typst"\r
            }\r
          },\r
          "patterns": [\r
            {\r
              "begin": "(^|\\\\G)(\\\\s*)",\r
              "while": "(^|\\\\G)(?!\\\\s*\`{5,}\\\\s*)",\r
              "contentName": "meta.embedded.block.dart",\r
              "patterns": [\r
                {\r
                  "include": "source.dart"\r
                }\r
              ]\r
            }\r
          ]\r
        },\r
        {\r
          "name": "markup.raw.block.typst",\r
          "begin": "(\`{4})(dart)\\\\b",\r
          "beginCaptures": {\r
            "1": {\r
              "name": "punctuation.definition.raw.begin.typst"\r
            },\r
            "2": {\r
              "name": "fenced_code.block.language.typst"\r
            }\r
          },\r
          "end": "\\\\s*(\\\\1)",\r
          "endCaptures": {\r
            "1": {\r
              "name": "punctuation.definition.raw.end.typst"\r
            }\r
          },\r
          "patterns": [\r
            {\r
              "begin": "(^|\\\\G)(\\\\s*)",\r
              "while": "(^|\\\\G)(?!\\\\s*\`{4,}\\\\s*)",\r
              "contentName": "meta.embedded.block.dart",\r
              "patterns": [\r
                {\r
                  "include": "source.dart"\r
                }\r
              ]\r
            }\r
          ]\r
        },\r
        {\r
          "name": "markup.raw.block.typst",\r
          "begin": "(\`{3})(dart)\\\\b",\r
          "beginCaptures": {\r
            "1": {\r
              "name": "punctuation.definition.raw.begin.typst"\r
            },\r
            "2": {\r
              "name": "fenced_code.block.language.typst"\r
            }\r
          },\r
          "end": "\\\\s*(\\\\1)",\r
          "endCaptures": {\r
            "1": {\r
              "name": "punctuation.definition.raw.end.typst"\r
            }\r
          },\r
          "patterns": [\r
            {\r
              "begin": "(^|\\\\G)(\\\\s*)",\r
              "while": "(^|\\\\G)(?!\\\\s*\`{3,}\\\\s*)",\r
              "contentName": "meta.embedded.block.dart",\r
              "patterns": [\r
                {\r
                  "include": "source.dart"\r
                }\r
              ]\r
            }\r
          ]\r
        }\r
      ]\r
    },\r
    "diff": {\r
      "lang": "diff",\r
      "patterns": [\r
        {\r
          "name": "markup.raw.block.typst",\r
          "match": "(\`{3,})(diff|patch|rej)\\\\b(.*?)(\\\\1)",\r
          "captures": {\r
            "1": {\r
              "name": "punctuation.definition.raw.begin.typst"\r
            },\r
            "2": {\r
              "name": "fenced_code.block.language.typst"\r
            },\r
            "3": {\r
              "name": "meta.embedded.block.diff",\r
              "patterns": [\r
                {\r
                  "include": "source.diff"\r
                }\r
              ]\r
            },\r
            "4": {\r
              "name": "punctuation.definition.raw.end.typst"\r
            }\r
          }\r
        },\r
        {\r
          "name": "markup.raw.block.typst",\r
          "begin": "(\`{6})(diff|patch|rej)\\\\b",\r
          "beginCaptures": {\r
            "1": {\r
              "name": "punctuation.definition.raw.begin.typst"\r
            },\r
            "2": {\r
              "name": "fenced_code.block.language.typst"\r
            }\r
          },\r
          "end": "\\\\s*(\\\\1)",\r
          "endCaptures": {\r
            "1": {\r
              "name": "punctuation.definition.raw.end.typst"\r
            }\r
          },\r
          "patterns": [\r
            {\r
              "begin": "(^|\\\\G)(\\\\s*)",\r
              "while": "(^|\\\\G)(?!\\\\s*\`{6,}\\\\s*)",\r
              "contentName": "meta.embedded.block.diff",\r
              "patterns": [\r
                {\r
                  "include": "source.diff"\r
                }\r
              ]\r
            }\r
          ]\r
        },\r
        {\r
          "name": "markup.raw.block.typst",\r
          "begin": "(\`{5})(diff|patch|rej)\\\\b",\r
          "beginCaptures": {\r
            "1": {\r
              "name": "punctuation.definition.raw.begin.typst"\r
            },\r
            "2": {\r
              "name": "fenced_code.block.language.typst"\r
            }\r
          },\r
          "end": "\\\\s*(\\\\1)",\r
          "endCaptures": {\r
            "1": {\r
              "name": "punctuation.definition.raw.end.typst"\r
            }\r
          },\r
          "patterns": [\r
            {\r
              "begin": "(^|\\\\G)(\\\\s*)",\r
              "while": "(^|\\\\G)(?!\\\\s*\`{5,}\\\\s*)",\r
              "contentName": "meta.embedded.block.diff",\r
              "patterns": [\r
                {\r
                  "include": "source.diff"\r
                }\r
              ]\r
            }\r
          ]\r
        },\r
        {\r
          "name": "markup.raw.block.typst",\r
          "begin": "(\`{4})(diff|patch|rej)\\\\b",\r
          "beginCaptures": {\r
            "1": {\r
              "name": "punctuation.definition.raw.begin.typst"\r
            },\r
            "2": {\r
              "name": "fenced_code.block.language.typst"\r
            }\r
          },\r
          "end": "\\\\s*(\\\\1)",\r
          "endCaptures": {\r
            "1": {\r
              "name": "punctuation.definition.raw.end.typst"\r
            }\r
          },\r
          "patterns": [\r
            {\r
              "begin": "(^|\\\\G)(\\\\s*)",\r
              "while": "(^|\\\\G)(?!\\\\s*\`{4,}\\\\s*)",\r
              "contentName": "meta.embedded.block.diff",\r
              "patterns": [\r
                {\r
                  "include": "source.diff"\r
                }\r
              ]\r
            }\r
          ]\r
        },\r
        {\r
          "name": "markup.raw.block.typst",\r
          "begin": "(\`{3})(diff|patch|rej)\\\\b",\r
          "beginCaptures": {\r
            "1": {\r
              "name": "punctuation.definition.raw.begin.typst"\r
            },\r
            "2": {\r
              "name": "fenced_code.block.language.typst"\r
            }\r
          },\r
          "end": "\\\\s*(\\\\1)",\r
          "endCaptures": {\r
            "1": {\r
              "name": "punctuation.definition.raw.end.typst"\r
            }\r
          },\r
          "patterns": [\r
            {\r
              "begin": "(^|\\\\G)(\\\\s*)",\r
              "while": "(^|\\\\G)(?!\\\\s*\`{3,}\\\\s*)",\r
              "contentName": "meta.embedded.block.diff",\r
              "patterns": [\r
                {\r
                  "include": "source.diff"\r
                }\r
              ]\r
            }\r
          ]\r
        }\r
      ]\r
    },\r
    "dockerfile": {\r
      "lang": "dockerfile",\r
      "patterns": [\r
        {\r
          "name": "markup.raw.block.typst",\r
          "match": "(\`{3,})(dockerfile|Dockerfile)\\\\b(.*?)(\\\\1)",\r
          "captures": {\r
            "1": {\r
              "name": "punctuation.definition.raw.begin.typst"\r
            },\r
            "2": {\r
              "name": "fenced_code.block.language.typst"\r
            },\r
            "3": {\r
              "name": "meta.embedded.block.dockerfile",\r
              "patterns": [\r
                {\r
                  "include": "source.dockerfile"\r
                }\r
              ]\r
            },\r
            "4": {\r
              "name": "punctuation.definition.raw.end.typst"\r
            }\r
          }\r
        },\r
        {\r
          "name": "markup.raw.block.typst",\r
          "begin": "(\`{6})(dockerfile|Dockerfile)\\\\b",\r
          "beginCaptures": {\r
            "1": {\r
              "name": "punctuation.definition.raw.begin.typst"\r
            },\r
            "2": {\r
              "name": "fenced_code.block.language.typst"\r
            }\r
          },\r
          "end": "\\\\s*(\\\\1)",\r
          "endCaptures": {\r
            "1": {\r
              "name": "punctuation.definition.raw.end.typst"\r
            }\r
          },\r
          "patterns": [\r
            {\r
              "begin": "(^|\\\\G)(\\\\s*)",\r
              "while": "(^|\\\\G)(?!\\\\s*\`{6,}\\\\s*)",\r
              "contentName": "meta.embedded.block.dockerfile",\r
              "patterns": [\r
                {\r
                  "include": "source.dockerfile"\r
                }\r
              ]\r
            }\r
          ]\r
        },\r
        {\r
          "name": "markup.raw.block.typst",\r
          "begin": "(\`{5})(dockerfile|Dockerfile)\\\\b",\r
          "beginCaptures": {\r
            "1": {\r
              "name": "punctuation.definition.raw.begin.typst"\r
            },\r
            "2": {\r
              "name": "fenced_code.block.language.typst"\r
            }\r
          },\r
          "end": "\\\\s*(\\\\1)",\r
          "endCaptures": {\r
            "1": {\r
              "name": "punctuation.definition.raw.end.typst"\r
            }\r
          },\r
          "patterns": [\r
            {\r
              "begin": "(^|\\\\G)(\\\\s*)",\r
              "while": "(^|\\\\G)(?!\\\\s*\`{5,}\\\\s*)",\r
              "contentName": "meta.embedded.block.dockerfile",\r
              "patterns": [\r
                {\r
                  "include": "source.dockerfile"\r
                }\r
              ]\r
            }\r
          ]\r
        },\r
        {\r
          "name": "markup.raw.block.typst",\r
          "begin": "(\`{4})(dockerfile|Dockerfile)\\\\b",\r
          "beginCaptures": {\r
            "1": {\r
              "name": "punctuation.definition.raw.begin.typst"\r
            },\r
            "2": {\r
              "name": "fenced_code.block.language.typst"\r
            }\r
          },\r
          "end": "\\\\s*(\\\\1)",\r
          "endCaptures": {\r
            "1": {\r
              "name": "punctuation.definition.raw.end.typst"\r
            }\r
          },\r
          "patterns": [\r
            {\r
              "begin": "(^|\\\\G)(\\\\s*)",\r
              "while": "(^|\\\\G)(?!\\\\s*\`{4,}\\\\s*)",\r
              "contentName": "meta.embedded.block.dockerfile",\r
              "patterns": [\r
                {\r
                  "include": "source.dockerfile"\r
                }\r
              ]\r
            }\r
          ]\r
        },\r
        {\r
          "name": "markup.raw.block.typst",\r
          "begin": "(\`{3})(dockerfile|Dockerfile)\\\\b",\r
          "beginCaptures": {\r
            "1": {\r
              "name": "punctuation.definition.raw.begin.typst"\r
            },\r
            "2": {\r
              "name": "fenced_code.block.language.typst"\r
            }\r
          },\r
          "end": "\\\\s*(\\\\1)",\r
          "endCaptures": {\r
            "1": {\r
              "name": "punctuation.definition.raw.end.typst"\r
            }\r
          },\r
          "patterns": [\r
            {\r
              "begin": "(^|\\\\G)(\\\\s*)",\r
              "while": "(^|\\\\G)(?!\\\\s*\`{3,}\\\\s*)",\r
              "contentName": "meta.embedded.block.dockerfile",\r
              "patterns": [\r
                {\r
                  "include": "source.dockerfile"\r
                }\r
              ]\r
            }\r
          ]\r
        }\r
      ]\r
    },\r
    "elixir": {\r
      "lang": "elixir",\r
      "patterns": [\r
        {\r
          "name": "markup.raw.block.typst",\r
          "match": "(\`{3,})(elixir)\\\\b(.*?)(\\\\1)",\r
          "captures": {\r
            "1": {\r
              "name": "punctuation.definition.raw.begin.typst"\r
            },\r
            "2": {\r
              "name": "fenced_code.block.language.typst"\r
            },\r
            "3": {\r
              "name": "meta.embedded.block.elixir",\r
              "patterns": [\r
                {\r
                  "include": "source.elixir"\r
                }\r
              ]\r
            },\r
            "4": {\r
              "name": "punctuation.definition.raw.end.typst"\r
            }\r
          }\r
        },\r
        {\r
          "name": "markup.raw.block.typst",\r
          "begin": "(\`{6})(elixir)\\\\b",\r
          "beginCaptures": {\r
            "1": {\r
              "name": "punctuation.definition.raw.begin.typst"\r
            },\r
            "2": {\r
              "name": "fenced_code.block.language.typst"\r
            }\r
          },\r
          "end": "\\\\s*(\\\\1)",\r
          "endCaptures": {\r
            "1": {\r
              "name": "punctuation.definition.raw.end.typst"\r
            }\r
          },\r
          "patterns": [\r
            {\r
              "begin": "(^|\\\\G)(\\\\s*)",\r
              "while": "(^|\\\\G)(?!\\\\s*\`{6,}\\\\s*)",\r
              "contentName": "meta.embedded.block.elixir",\r
              "patterns": [\r
                {\r
                  "include": "source.elixir"\r
                }\r
              ]\r
            }\r
          ]\r
        },\r
        {\r
          "name": "markup.raw.block.typst",\r
          "begin": "(\`{5})(elixir)\\\\b",\r
          "beginCaptures": {\r
            "1": {\r
              "name": "punctuation.definition.raw.begin.typst"\r
            },\r
            "2": {\r
              "name": "fenced_code.block.language.typst"\r
            }\r
          },\r
          "end": "\\\\s*(\\\\1)",\r
          "endCaptures": {\r
            "1": {\r
              "name": "punctuation.definition.raw.end.typst"\r
            }\r
          },\r
          "patterns": [\r
            {\r
              "begin": "(^|\\\\G)(\\\\s*)",\r
              "while": "(^|\\\\G)(?!\\\\s*\`{5,}\\\\s*)",\r
              "contentName": "meta.embedded.block.elixir",\r
              "patterns": [\r
                {\r
                  "include": "source.elixir"\r
                }\r
              ]\r
            }\r
          ]\r
        },\r
        {\r
          "name": "markup.raw.block.typst",\r
          "begin": "(\`{4})(elixir)\\\\b",\r
          "beginCaptures": {\r
            "1": {\r
              "name": "punctuation.definition.raw.begin.typst"\r
            },\r
            "2": {\r
              "name": "fenced_code.block.language.typst"\r
            }\r
          },\r
          "end": "\\\\s*(\\\\1)",\r
          "endCaptures": {\r
            "1": {\r
              "name": "punctuation.definition.raw.end.typst"\r
            }\r
          },\r
          "patterns": [\r
            {\r
              "begin": "(^|\\\\G)(\\\\s*)",\r
              "while": "(^|\\\\G)(?!\\\\s*\`{4,}\\\\s*)",\r
              "contentName": "meta.embedded.block.elixir",\r
              "patterns": [\r
                {\r
                  "include": "source.elixir"\r
                }\r
              ]\r
            }\r
          ]\r
        },\r
        {\r
          "name": "markup.raw.block.typst",\r
          "begin": "(\`{3})(elixir)\\\\b",\r
          "beginCaptures": {\r
            "1": {\r
              "name": "punctuation.definition.raw.begin.typst"\r
            },\r
            "2": {\r
              "name": "fenced_code.block.language.typst"\r
            }\r
          },\r
          "end": "\\\\s*(\\\\1)",\r
          "endCaptures": {\r
            "1": {\r
              "name": "punctuation.definition.raw.end.typst"\r
            }\r
          },\r
          "patterns": [\r
            {\r
              "begin": "(^|\\\\G)(\\\\s*)",\r
              "while": "(^|\\\\G)(?!\\\\s*\`{3,}\\\\s*)",\r
              "contentName": "meta.embedded.block.elixir",\r
              "patterns": [\r
                {\r
                  "include": "source.elixir"\r
                }\r
              ]\r
            }\r
          ]\r
        }\r
      ]\r
    },\r
    "erlang": {\r
      "lang": "erlang",\r
      "patterns": [\r
        {\r
          "name": "markup.raw.block.typst",\r
          "match": "(\`{3,})(erlang)\\\\b(.*?)(\\\\1)",\r
          "captures": {\r
            "1": {\r
              "name": "punctuation.definition.raw.begin.typst"\r
            },\r
            "2": {\r
              "name": "fenced_code.block.language.typst"\r
            },\r
            "3": {\r
              "name": "meta.embedded.block.erlang",\r
              "patterns": [\r
                {\r
                  "include": "source.erlang"\r
                }\r
              ]\r
            },\r
            "4": {\r
              "name": "punctuation.definition.raw.end.typst"\r
            }\r
          }\r
        },\r
        {\r
          "name": "markup.raw.block.typst",\r
          "begin": "(\`{6})(erlang)\\\\b",\r
          "beginCaptures": {\r
            "1": {\r
              "name": "punctuation.definition.raw.begin.typst"\r
            },\r
            "2": {\r
              "name": "fenced_code.block.language.typst"\r
            }\r
          },\r
          "end": "\\\\s*(\\\\1)",\r
          "endCaptures": {\r
            "1": {\r
              "name": "punctuation.definition.raw.end.typst"\r
            }\r
          },\r
          "patterns": [\r
            {\r
              "begin": "(^|\\\\G)(\\\\s*)",\r
              "while": "(^|\\\\G)(?!\\\\s*\`{6,}\\\\s*)",\r
              "contentName": "meta.embedded.block.erlang",\r
              "patterns": [\r
                {\r
                  "include": "source.erlang"\r
                }\r
              ]\r
            }\r
          ]\r
        },\r
        {\r
          "name": "markup.raw.block.typst",\r
          "begin": "(\`{5})(erlang)\\\\b",\r
          "beginCaptures": {\r
            "1": {\r
              "name": "punctuation.definition.raw.begin.typst"\r
            },\r
            "2": {\r
              "name": "fenced_code.block.language.typst"\r
            }\r
          },\r
          "end": "\\\\s*(\\\\1)",\r
          "endCaptures": {\r
            "1": {\r
              "name": "punctuation.definition.raw.end.typst"\r
            }\r
          },\r
          "patterns": [\r
            {\r
              "begin": "(^|\\\\G)(\\\\s*)",\r
              "while": "(^|\\\\G)(?!\\\\s*\`{5,}\\\\s*)",\r
              "contentName": "meta.embedded.block.erlang",\r
              "patterns": [\r
                {\r
                  "include": "source.erlang"\r
                }\r
              ]\r
            }\r
          ]\r
        },\r
        {\r
          "name": "markup.raw.block.typst",\r
          "begin": "(\`{4})(erlang)\\\\b",\r
          "beginCaptures": {\r
            "1": {\r
              "name": "punctuation.definition.raw.begin.typst"\r
            },\r
            "2": {\r
              "name": "fenced_code.block.language.typst"\r
            }\r
          },\r
          "end": "\\\\s*(\\\\1)",\r
          "endCaptures": {\r
            "1": {\r
              "name": "punctuation.definition.raw.end.typst"\r
            }\r
          },\r
          "patterns": [\r
            {\r
              "begin": "(^|\\\\G)(\\\\s*)",\r
              "while": "(^|\\\\G)(?!\\\\s*\`{4,}\\\\s*)",\r
              "contentName": "meta.embedded.block.erlang",\r
              "patterns": [\r
                {\r
                  "include": "source.erlang"\r
                }\r
              ]\r
            }\r
          ]\r
        },\r
        {\r
          "name": "markup.raw.block.typst",\r
          "begin": "(\`{3})(erlang)\\\\b",\r
          "beginCaptures": {\r
            "1": {\r
              "name": "punctuation.definition.raw.begin.typst"\r
            },\r
            "2": {\r
              "name": "fenced_code.block.language.typst"\r
            }\r
          },\r
          "end": "\\\\s*(\\\\1)",\r
          "endCaptures": {\r
            "1": {\r
              "name": "punctuation.definition.raw.end.typst"\r
            }\r
          },\r
          "patterns": [\r
            {\r
              "begin": "(^|\\\\G)(\\\\s*)",\r
              "while": "(^|\\\\G)(?!\\\\s*\`{3,}\\\\s*)",\r
              "contentName": "meta.embedded.block.erlang",\r
              "patterns": [\r
                {\r
                  "include": "source.erlang"\r
                }\r
              ]\r
            }\r
          ]\r
        }\r
      ]\r
    },\r
    "fs": {\r
      "lang": "fs",\r
      "patterns": [\r
        {\r
          "name": "markup.raw.block.typst",\r
          "match": "(\`{3,})(fs|fsharp|f#)\\\\b(.*?)(\\\\1)",\r
          "captures": {\r
            "1": {\r
              "name": "punctuation.definition.raw.begin.typst"\r
            },\r
            "2": {\r
              "name": "fenced_code.block.language.typst"\r
            },\r
            "3": {\r
              "name": "meta.embedded.block.fs",\r
              "patterns": [\r
                {\r
                  "include": "source.fs"\r
                }\r
              ]\r
            },\r
            "4": {\r
              "name": "punctuation.definition.raw.end.typst"\r
            }\r
          }\r
        },\r
        {\r
          "name": "markup.raw.block.typst",\r
          "begin": "(\`{6})(fs|fsharp|f#)\\\\b",\r
          "beginCaptures": {\r
            "1": {\r
              "name": "punctuation.definition.raw.begin.typst"\r
            },\r
            "2": {\r
              "name": "fenced_code.block.language.typst"\r
            }\r
          },\r
          "end": "\\\\s*(\\\\1)",\r
          "endCaptures": {\r
            "1": {\r
              "name": "punctuation.definition.raw.end.typst"\r
            }\r
          },\r
          "patterns": [\r
            {\r
              "begin": "(^|\\\\G)(\\\\s*)",\r
              "while": "(^|\\\\G)(?!\\\\s*\`{6,}\\\\s*)",\r
              "contentName": "meta.embedded.block.fs",\r
              "patterns": [\r
                {\r
                  "include": "source.fs"\r
                }\r
              ]\r
            }\r
          ]\r
        },\r
        {\r
          "name": "markup.raw.block.typst",\r
          "begin": "(\`{5})(fs|fsharp|f#)\\\\b",\r
          "beginCaptures": {\r
            "1": {\r
              "name": "punctuation.definition.raw.begin.typst"\r
            },\r
            "2": {\r
              "name": "fenced_code.block.language.typst"\r
            }\r
          },\r
          "end": "\\\\s*(\\\\1)",\r
          "endCaptures": {\r
            "1": {\r
              "name": "punctuation.definition.raw.end.typst"\r
            }\r
          },\r
          "patterns": [\r
            {\r
              "begin": "(^|\\\\G)(\\\\s*)",\r
              "while": "(^|\\\\G)(?!\\\\s*\`{5,}\\\\s*)",\r
              "contentName": "meta.embedded.block.fs",\r
              "patterns": [\r
                {\r
                  "include": "source.fs"\r
                }\r
              ]\r
            }\r
          ]\r
        },\r
        {\r
          "name": "markup.raw.block.typst",\r
          "begin": "(\`{4})(fs|fsharp|f#)\\\\b",\r
          "beginCaptures": {\r
            "1": {\r
              "name": "punctuation.definition.raw.begin.typst"\r
            },\r
            "2": {\r
              "name": "fenced_code.block.language.typst"\r
            }\r
          },\r
          "end": "\\\\s*(\\\\1)",\r
          "endCaptures": {\r
            "1": {\r
              "name": "punctuation.definition.raw.end.typst"\r
            }\r
          },\r
          "patterns": [\r
            {\r
              "begin": "(^|\\\\G)(\\\\s*)",\r
              "while": "(^|\\\\G)(?!\\\\s*\`{4,}\\\\s*)",\r
              "contentName": "meta.embedded.block.fs",\r
              "patterns": [\r
                {\r
                  "include": "source.fs"\r
                }\r
              ]\r
            }\r
          ]\r
        },\r
        {\r
          "name": "markup.raw.block.typst",\r
          "begin": "(\`{3})(fs|fsharp|f#)\\\\b",\r
          "beginCaptures": {\r
            "1": {\r
              "name": "punctuation.definition.raw.begin.typst"\r
            },\r
            "2": {\r
              "name": "fenced_code.block.language.typst"\r
            }\r
          },\r
          "end": "\\\\s*(\\\\1)",\r
          "endCaptures": {\r
            "1": {\r
              "name": "punctuation.definition.raw.end.typst"\r
            }\r
          },\r
          "patterns": [\r
            {\r
              "begin": "(^|\\\\G)(\\\\s*)",\r
              "while": "(^|\\\\G)(?!\\\\s*\`{3,}\\\\s*)",\r
              "contentName": "meta.embedded.block.fs",\r
              "patterns": [\r
                {\r
                  "include": "source.fs"\r
                }\r
              ]\r
            }\r
          ]\r
        }\r
      ]\r
    },\r
    "git-commit": {\r
      "lang": "git-commit",\r
      "patterns": [\r
        {\r
          "name": "markup.raw.block.typst",\r
          "match": "(\`{3,})(git-commit|COMMIT_EDITMSG|MERGE_MSG)\\\\b(.*?)(\\\\1)",\r
          "captures": {\r
            "1": {\r
              "name": "punctuation.definition.raw.begin.typst"\r
            },\r
            "2": {\r
              "name": "fenced_code.block.language.typst"\r
            },\r
            "3": {\r
              "name": "meta.embedded.block.git-commit",\r
              "patterns": [\r
                {\r
                  "include": "text.git-commit"\r
                }\r
              ]\r
            },\r
            "4": {\r
              "name": "punctuation.definition.raw.end.typst"\r
            }\r
          }\r
        },\r
        {\r
          "name": "markup.raw.block.typst",\r
          "begin": "(\`{6})(git-commit|COMMIT_EDITMSG|MERGE_MSG)\\\\b",\r
          "beginCaptures": {\r
            "1": {\r
              "name": "punctuation.definition.raw.begin.typst"\r
            },\r
            "2": {\r
              "name": "fenced_code.block.language.typst"\r
            }\r
          },\r
          "end": "\\\\s*(\\\\1)",\r
          "endCaptures": {\r
            "1": {\r
              "name": "punctuation.definition.raw.end.typst"\r
            }\r
          },\r
          "patterns": [\r
            {\r
              "begin": "(^|\\\\G)(\\\\s*)",\r
              "while": "(^|\\\\G)(?!\\\\s*\`{6,}\\\\s*)",\r
              "contentName": "meta.embedded.block.git-commit",\r
              "patterns": [\r
                {\r
                  "include": "text.git-commit"\r
                }\r
              ]\r
            }\r
          ]\r
        },\r
        {\r
          "name": "markup.raw.block.typst",\r
          "begin": "(\`{5})(git-commit|COMMIT_EDITMSG|MERGE_MSG)\\\\b",\r
          "beginCaptures": {\r
            "1": {\r
              "name": "punctuation.definition.raw.begin.typst"\r
            },\r
            "2": {\r
              "name": "fenced_code.block.language.typst"\r
            }\r
          },\r
          "end": "\\\\s*(\\\\1)",\r
          "endCaptures": {\r
            "1": {\r
              "name": "punctuation.definition.raw.end.typst"\r
            }\r
          },\r
          "patterns": [\r
            {\r
              "begin": "(^|\\\\G)(\\\\s*)",\r
              "while": "(^|\\\\G)(?!\\\\s*\`{5,}\\\\s*)",\r
              "contentName": "meta.embedded.block.git-commit",\r
              "patterns": [\r
                {\r
                  "include": "text.git-commit"\r
                }\r
              ]\r
            }\r
          ]\r
        },\r
        {\r
          "name": "markup.raw.block.typst",\r
          "begin": "(\`{4})(git-commit|COMMIT_EDITMSG|MERGE_MSG)\\\\b",\r
          "beginCaptures": {\r
            "1": {\r
              "name": "punctuation.definition.raw.begin.typst"\r
            },\r
            "2": {\r
              "name": "fenced_code.block.language.typst"\r
            }\r
          },\r
          "end": "\\\\s*(\\\\1)",\r
          "endCaptures": {\r
            "1": {\r
              "name": "punctuation.definition.raw.end.typst"\r
            }\r
          },\r
          "patterns": [\r
            {\r
              "begin": "(^|\\\\G)(\\\\s*)",\r
              "while": "(^|\\\\G)(?!\\\\s*\`{4,}\\\\s*)",\r
              "contentName": "meta.embedded.block.git-commit",\r
              "patterns": [\r
                {\r
                  "include": "text.git-commit"\r
                }\r
              ]\r
            }\r
          ]\r
        },\r
        {\r
          "name": "markup.raw.block.typst",\r
          "begin": "(\`{3})(git-commit|COMMIT_EDITMSG|MERGE_MSG)\\\\b",\r
          "beginCaptures": {\r
            "1": {\r
              "name": "punctuation.definition.raw.begin.typst"\r
            },\r
            "2": {\r
              "name": "fenced_code.block.language.typst"\r
            }\r
          },\r
          "end": "\\\\s*(\\\\1)",\r
          "endCaptures": {\r
            "1": {\r
              "name": "punctuation.definition.raw.end.typst"\r
            }\r
          },\r
          "patterns": [\r
            {\r
              "begin": "(^|\\\\G)(\\\\s*)",\r
              "while": "(^|\\\\G)(?!\\\\s*\`{3,}\\\\s*)",\r
              "contentName": "meta.embedded.block.git-commit",\r
              "patterns": [\r
                {\r
                  "include": "text.git-commit"\r
                }\r
              ]\r
            }\r
          ]\r
        }\r
      ]\r
    },\r
    "git-rebase": {\r
      "lang": "git-rebase",\r
      "patterns": [\r
        {\r
          "name": "markup.raw.block.typst",\r
          "match": "(\`{3,})(git-rebase|git-rebase-todo)\\\\b(.*?)(\\\\1)",\r
          "captures": {\r
            "1": {\r
              "name": "punctuation.definition.raw.begin.typst"\r
            },\r
            "2": {\r
              "name": "fenced_code.block.language.typst"\r
            },\r
            "3": {\r
              "name": "meta.embedded.block.git-rebase",\r
              "patterns": [\r
                {\r
                  "include": "text.git-rebase"\r
                }\r
              ]\r
            },\r
            "4": {\r
              "name": "punctuation.definition.raw.end.typst"\r
            }\r
          }\r
        },\r
        {\r
          "name": "markup.raw.block.typst",\r
          "begin": "(\`{6})(git-rebase|git-rebase-todo)\\\\b",\r
          "beginCaptures": {\r
            "1": {\r
              "name": "punctuation.definition.raw.begin.typst"\r
            },\r
            "2": {\r
              "name": "fenced_code.block.language.typst"\r
            }\r
          },\r
          "end": "\\\\s*(\\\\1)",\r
          "endCaptures": {\r
            "1": {\r
              "name": "punctuation.definition.raw.end.typst"\r
            }\r
          },\r
          "patterns": [\r
            {\r
              "begin": "(^|\\\\G)(\\\\s*)",\r
              "while": "(^|\\\\G)(?!\\\\s*\`{6,}\\\\s*)",\r
              "contentName": "meta.embedded.block.git-rebase",\r
              "patterns": [\r
                {\r
                  "include": "text.git-rebase"\r
                }\r
              ]\r
            }\r
          ]\r
        },\r
        {\r
          "name": "markup.raw.block.typst",\r
          "begin": "(\`{5})(git-rebase|git-rebase-todo)\\\\b",\r
          "beginCaptures": {\r
            "1": {\r
              "name": "punctuation.definition.raw.begin.typst"\r
            },\r
            "2": {\r
              "name": "fenced_code.block.language.typst"\r
            }\r
          },\r
          "end": "\\\\s*(\\\\1)",\r
          "endCaptures": {\r
            "1": {\r
              "name": "punctuation.definition.raw.end.typst"\r
            }\r
          },\r
          "patterns": [\r
            {\r
              "begin": "(^|\\\\G)(\\\\s*)",\r
              "while": "(^|\\\\G)(?!\\\\s*\`{5,}\\\\s*)",\r
              "contentName": "meta.embedded.block.git-rebase",\r
              "patterns": [\r
                {\r
                  "include": "text.git-rebase"\r
                }\r
              ]\r
            }\r
          ]\r
        },\r
        {\r
          "name": "markup.raw.block.typst",\r
          "begin": "(\`{4})(git-rebase|git-rebase-todo)\\\\b",\r
          "beginCaptures": {\r
            "1": {\r
              "name": "punctuation.definition.raw.begin.typst"\r
            },\r
            "2": {\r
              "name": "fenced_code.block.language.typst"\r
            }\r
          },\r
          "end": "\\\\s*(\\\\1)",\r
          "endCaptures": {\r
            "1": {\r
              "name": "punctuation.definition.raw.end.typst"\r
            }\r
          },\r
          "patterns": [\r
            {\r
              "begin": "(^|\\\\G)(\\\\s*)",\r
              "while": "(^|\\\\G)(?!\\\\s*\`{4,}\\\\s*)",\r
              "contentName": "meta.embedded.block.git-rebase",\r
              "patterns": [\r
                {\r
                  "include": "text.git-rebase"\r
                }\r
              ]\r
            }\r
          ]\r
        },\r
        {\r
          "name": "markup.raw.block.typst",\r
          "begin": "(\`{3})(git-rebase|git-rebase-todo)\\\\b",\r
          "beginCaptures": {\r
            "1": {\r
              "name": "punctuation.definition.raw.begin.typst"\r
            },\r
            "2": {\r
              "name": "fenced_code.block.language.typst"\r
            }\r
          },\r
          "end": "\\\\s*(\\\\1)",\r
          "endCaptures": {\r
            "1": {\r
              "name": "punctuation.definition.raw.end.typst"\r
            }\r
          },\r
          "patterns": [\r
            {\r
              "begin": "(^|\\\\G)(\\\\s*)",\r
              "while": "(^|\\\\G)(?!\\\\s*\`{3,}\\\\s*)",\r
              "contentName": "meta.embedded.block.git-rebase",\r
              "patterns": [\r
                {\r
                  "include": "text.git-rebase"\r
                }\r
              ]\r
            }\r
          ]\r
        }\r
      ]\r
    },\r
    "go": {\r
      "lang": "go",\r
      "patterns": [\r
        {\r
          "name": "markup.raw.block.typst",\r
          "match": "(\`{3,})(go|golang)\\\\b(.*?)(\\\\1)",\r
          "captures": {\r
            "1": {\r
              "name": "punctuation.definition.raw.begin.typst"\r
            },\r
            "2": {\r
              "name": "fenced_code.block.language.typst"\r
            },\r
            "3": {\r
              "name": "meta.embedded.block.go",\r
              "patterns": [\r
                {\r
                  "include": "source.go"\r
                }\r
              ]\r
            },\r
            "4": {\r
              "name": "punctuation.definition.raw.end.typst"\r
            }\r
          }\r
        },\r
        {\r
          "name": "markup.raw.block.typst",\r
          "begin": "(\`{6})(go|golang)\\\\b",\r
          "beginCaptures": {\r
            "1": {\r
              "name": "punctuation.definition.raw.begin.typst"\r
            },\r
            "2": {\r
              "name": "fenced_code.block.language.typst"\r
            }\r
          },\r
          "end": "\\\\s*(\\\\1)",\r
          "endCaptures": {\r
            "1": {\r
              "name": "punctuation.definition.raw.end.typst"\r
            }\r
          },\r
          "patterns": [\r
            {\r
              "begin": "(^|\\\\G)(\\\\s*)",\r
              "while": "(^|\\\\G)(?!\\\\s*\`{6,}\\\\s*)",\r
              "contentName": "meta.embedded.block.go",\r
              "patterns": [\r
                {\r
                  "include": "source.go"\r
                }\r
              ]\r
            }\r
          ]\r
        },\r
        {\r
          "name": "markup.raw.block.typst",\r
          "begin": "(\`{5})(go|golang)\\\\b",\r
          "beginCaptures": {\r
            "1": {\r
              "name": "punctuation.definition.raw.begin.typst"\r
            },\r
            "2": {\r
              "name": "fenced_code.block.language.typst"\r
            }\r
          },\r
          "end": "\\\\s*(\\\\1)",\r
          "endCaptures": {\r
            "1": {\r
              "name": "punctuation.definition.raw.end.typst"\r
            }\r
          },\r
          "patterns": [\r
            {\r
              "begin": "(^|\\\\G)(\\\\s*)",\r
              "while": "(^|\\\\G)(?!\\\\s*\`{5,}\\\\s*)",\r
              "contentName": "meta.embedded.block.go",\r
              "patterns": [\r
                {\r
                  "include": "source.go"\r
                }\r
              ]\r
            }\r
          ]\r
        },\r
        {\r
          "name": "markup.raw.block.typst",\r
          "begin": "(\`{4})(go|golang)\\\\b",\r
          "beginCaptures": {\r
            "1": {\r
              "name": "punctuation.definition.raw.begin.typst"\r
            },\r
            "2": {\r
              "name": "fenced_code.block.language.typst"\r
            }\r
          },\r
          "end": "\\\\s*(\\\\1)",\r
          "endCaptures": {\r
            "1": {\r
              "name": "punctuation.definition.raw.end.typst"\r
            }\r
          },\r
          "patterns": [\r
            {\r
              "begin": "(^|\\\\G)(\\\\s*)",\r
              "while": "(^|\\\\G)(?!\\\\s*\`{4,}\\\\s*)",\r
              "contentName": "meta.embedded.block.go",\r
              "patterns": [\r
                {\r
                  "include": "source.go"\r
                }\r
              ]\r
            }\r
          ]\r
        },\r
        {\r
          "name": "markup.raw.block.typst",\r
          "begin": "(\`{3})(go|golang)\\\\b",\r
          "beginCaptures": {\r
            "1": {\r
              "name": "punctuation.definition.raw.begin.typst"\r
            },\r
            "2": {\r
              "name": "fenced_code.block.language.typst"\r
            }\r
          },\r
          "end": "\\\\s*(\\\\1)",\r
          "endCaptures": {\r
            "1": {\r
              "name": "punctuation.definition.raw.end.typst"\r
            }\r
          },\r
          "patterns": [\r
            {\r
              "begin": "(^|\\\\G)(\\\\s*)",\r
              "while": "(^|\\\\G)(?!\\\\s*\`{3,}\\\\s*)",\r
              "contentName": "meta.embedded.block.go",\r
              "patterns": [\r
                {\r
                  "include": "source.go"\r
                }\r
              ]\r
            }\r
          ]\r
        }\r
      ]\r
    },\r
    "groovy": {\r
      "lang": "groovy",\r
      "patterns": [\r
        {\r
          "name": "markup.raw.block.typst",\r
          "match": "(\`{3,})(groovy|gvy)\\\\b(.*?)(\\\\1)",\r
          "captures": {\r
            "1": {\r
              "name": "punctuation.definition.raw.begin.typst"\r
            },\r
            "2": {\r
              "name": "fenced_code.block.language.typst"\r
            },\r
            "3": {\r
              "name": "meta.embedded.block.groovy",\r
              "patterns": [\r
                {\r
                  "include": "source.groovy"\r
                }\r
              ]\r
            },\r
            "4": {\r
              "name": "punctuation.definition.raw.end.typst"\r
            }\r
          }\r
        },\r
        {\r
          "name": "markup.raw.block.typst",\r
          "begin": "(\`{6})(groovy|gvy)\\\\b",\r
          "beginCaptures": {\r
            "1": {\r
              "name": "punctuation.definition.raw.begin.typst"\r
            },\r
            "2": {\r
              "name": "fenced_code.block.language.typst"\r
            }\r
          },\r
          "end": "\\\\s*(\\\\1)",\r
          "endCaptures": {\r
            "1": {\r
              "name": "punctuation.definition.raw.end.typst"\r
            }\r
          },\r
          "patterns": [\r
            {\r
              "begin": "(^|\\\\G)(\\\\s*)",\r
              "while": "(^|\\\\G)(?!\\\\s*\`{6,}\\\\s*)",\r
              "contentName": "meta.embedded.block.groovy",\r
              "patterns": [\r
                {\r
                  "include": "source.groovy"\r
                }\r
              ]\r
            }\r
          ]\r
        },\r
        {\r
          "name": "markup.raw.block.typst",\r
          "begin": "(\`{5})(groovy|gvy)\\\\b",\r
          "beginCaptures": {\r
            "1": {\r
              "name": "punctuation.definition.raw.begin.typst"\r
            },\r
            "2": {\r
              "name": "fenced_code.block.language.typst"\r
            }\r
          },\r
          "end": "\\\\s*(\\\\1)",\r
          "endCaptures": {\r
            "1": {\r
              "name": "punctuation.definition.raw.end.typst"\r
            }\r
          },\r
          "patterns": [\r
            {\r
              "begin": "(^|\\\\G)(\\\\s*)",\r
              "while": "(^|\\\\G)(?!\\\\s*\`{5,}\\\\s*)",\r
              "contentName": "meta.embedded.block.groovy",\r
              "patterns": [\r
                {\r
                  "include": "source.groovy"\r
                }\r
              ]\r
            }\r
          ]\r
        },\r
        {\r
          "name": "markup.raw.block.typst",\r
          "begin": "(\`{4})(groovy|gvy)\\\\b",\r
          "beginCaptures": {\r
            "1": {\r
              "name": "punctuation.definition.raw.begin.typst"\r
            },\r
            "2": {\r
              "name": "fenced_code.block.language.typst"\r
            }\r
          },\r
          "end": "\\\\s*(\\\\1)",\r
          "endCaptures": {\r
            "1": {\r
              "name": "punctuation.definition.raw.end.typst"\r
            }\r
          },\r
          "patterns": [\r
            {\r
              "begin": "(^|\\\\G)(\\\\s*)",\r
              "while": "(^|\\\\G)(?!\\\\s*\`{4,}\\\\s*)",\r
              "contentName": "meta.embedded.block.groovy",\r
              "patterns": [\r
                {\r
                  "include": "source.groovy"\r
                }\r
              ]\r
            }\r
          ]\r
        },\r
        {\r
          "name": "markup.raw.block.typst",\r
          "begin": "(\`{3})(groovy|gvy)\\\\b",\r
          "beginCaptures": {\r
            "1": {\r
              "name": "punctuation.definition.raw.begin.typst"\r
            },\r
            "2": {\r
              "name": "fenced_code.block.language.typst"\r
            }\r
          },\r
          "end": "\\\\s*(\\\\1)",\r
          "endCaptures": {\r
            "1": {\r
              "name": "punctuation.definition.raw.end.typst"\r
            }\r
          },\r
          "patterns": [\r
            {\r
              "begin": "(^|\\\\G)(\\\\s*)",\r
              "while": "(^|\\\\G)(?!\\\\s*\`{3,}\\\\s*)",\r
              "contentName": "meta.embedded.block.groovy",\r
              "patterns": [\r
                {\r
                  "include": "source.groovy"\r
                }\r
              ]\r
            }\r
          ]\r
        }\r
      ]\r
    },\r
    "handlebars": {\r
      "lang": "handlebars",\r
      "patterns": [\r
        {\r
          "name": "markup.raw.block.typst",\r
          "match": "(\`{3,})(handlebars|hbs)\\\\b(.*?)(\\\\1)",\r
          "captures": {\r
            "1": {\r
              "name": "punctuation.definition.raw.begin.typst"\r
            },\r
            "2": {\r
              "name": "fenced_code.block.language.typst"\r
            },\r
            "3": {\r
              "name": "meta.embedded.block.handlebars",\r
              "patterns": [\r
                {\r
                  "include": "text.html.handlebars"\r
                }\r
              ]\r
            },\r
            "4": {\r
              "name": "punctuation.definition.raw.end.typst"\r
            }\r
          }\r
        },\r
        {\r
          "name": "markup.raw.block.typst",\r
          "begin": "(\`{6})(handlebars|hbs)\\\\b",\r
          "beginCaptures": {\r
            "1": {\r
              "name": "punctuation.definition.raw.begin.typst"\r
            },\r
            "2": {\r
              "name": "fenced_code.block.language.typst"\r
            }\r
          },\r
          "end": "\\\\s*(\\\\1)",\r
          "endCaptures": {\r
            "1": {\r
              "name": "punctuation.definition.raw.end.typst"\r
            }\r
          },\r
          "patterns": [\r
            {\r
              "begin": "(^|\\\\G)(\\\\s*)",\r
              "while": "(^|\\\\G)(?!\\\\s*\`{6,}\\\\s*)",\r
              "contentName": "meta.embedded.block.handlebars",\r
              "patterns": [\r
                {\r
                  "include": "text.html.handlebars"\r
                }\r
              ]\r
            }\r
          ]\r
        },\r
        {\r
          "name": "markup.raw.block.typst",\r
          "begin": "(\`{5})(handlebars|hbs)\\\\b",\r
          "beginCaptures": {\r
            "1": {\r
              "name": "punctuation.definition.raw.begin.typst"\r
            },\r
            "2": {\r
              "name": "fenced_code.block.language.typst"\r
            }\r
          },\r
          "end": "\\\\s*(\\\\1)",\r
          "endCaptures": {\r
            "1": {\r
              "name": "punctuation.definition.raw.end.typst"\r
            }\r
          },\r
          "patterns": [\r
            {\r
              "begin": "(^|\\\\G)(\\\\s*)",\r
              "while": "(^|\\\\G)(?!\\\\s*\`{5,}\\\\s*)",\r
              "contentName": "meta.embedded.block.handlebars",\r
              "patterns": [\r
                {\r
                  "include": "text.html.handlebars"\r
                }\r
              ]\r
            }\r
          ]\r
        },\r
        {\r
          "name": "markup.raw.block.typst",\r
          "begin": "(\`{4})(handlebars|hbs)\\\\b",\r
          "beginCaptures": {\r
            "1": {\r
              "name": "punctuation.definition.raw.begin.typst"\r
            },\r
            "2": {\r
              "name": "fenced_code.block.language.typst"\r
            }\r
          },\r
          "end": "\\\\s*(\\\\1)",\r
          "endCaptures": {\r
            "1": {\r
              "name": "punctuation.definition.raw.end.typst"\r
            }\r
          },\r
          "patterns": [\r
            {\r
              "begin": "(^|\\\\G)(\\\\s*)",\r
              "while": "(^|\\\\G)(?!\\\\s*\`{4,}\\\\s*)",\r
              "contentName": "meta.embedded.block.handlebars",\r
              "patterns": [\r
                {\r
                  "include": "text.html.handlebars"\r
                }\r
              ]\r
            }\r
          ]\r
        },\r
        {\r
          "name": "markup.raw.block.typst",\r
          "begin": "(\`{3})(handlebars|hbs)\\\\b",\r
          "beginCaptures": {\r
            "1": {\r
              "name": "punctuation.definition.raw.begin.typst"\r
            },\r
            "2": {\r
              "name": "fenced_code.block.language.typst"\r
            }\r
          },\r
          "end": "\\\\s*(\\\\1)",\r
          "endCaptures": {\r
            "1": {\r
              "name": "punctuation.definition.raw.end.typst"\r
            }\r
          },\r
          "patterns": [\r
            {\r
              "begin": "(^|\\\\G)(\\\\s*)",\r
              "while": "(^|\\\\G)(?!\\\\s*\`{3,}\\\\s*)",\r
              "contentName": "meta.embedded.block.handlebars",\r
              "patterns": [\r
                {\r
                  "include": "text.html.handlebars"\r
                }\r
              ]\r
            }\r
          ]\r
        }\r
      ]\r
    },\r
    "html": {\r
      "lang": "html",\r
      "patterns": [\r
        {\r
          "name": "markup.raw.block.typst",\r
          "match": "(\`{3,})(html|htm|shtml|xhtml|inc|tmpl|tpl)\\\\b(.*?)(\\\\1)",\r
          "captures": {\r
            "1": {\r
              "name": "punctuation.definition.raw.begin.typst"\r
            },\r
            "2": {\r
              "name": "fenced_code.block.language.typst"\r
            },\r
            "3": {\r
              "name": "meta.embedded.block.html",\r
              "patterns": [\r
                {\r
                  "include": "text.html.basic"\r
                }\r
              ]\r
            },\r
            "4": {\r
              "name": "punctuation.definition.raw.end.typst"\r
            }\r
          }\r
        },\r
        {\r
          "name": "markup.raw.block.typst",\r
          "begin": "(\`{6})(html|htm|shtml|xhtml|inc|tmpl|tpl)\\\\b",\r
          "beginCaptures": {\r
            "1": {\r
              "name": "punctuation.definition.raw.begin.typst"\r
            },\r
            "2": {\r
              "name": "fenced_code.block.language.typst"\r
            }\r
          },\r
          "end": "\\\\s*(\\\\1)",\r
          "endCaptures": {\r
            "1": {\r
              "name": "punctuation.definition.raw.end.typst"\r
            }\r
          },\r
          "patterns": [\r
            {\r
              "begin": "(^|\\\\G)(\\\\s*)",\r
              "while": "(^|\\\\G)(?!\\\\s*\`{6,}\\\\s*)",\r
              "contentName": "meta.embedded.block.html",\r
              "patterns": [\r
                {\r
                  "include": "text.html.basic"\r
                }\r
              ]\r
            }\r
          ]\r
        },\r
        {\r
          "name": "markup.raw.block.typst",\r
          "begin": "(\`{5})(html|htm|shtml|xhtml|inc|tmpl|tpl)\\\\b",\r
          "beginCaptures": {\r
            "1": {\r
              "name": "punctuation.definition.raw.begin.typst"\r
            },\r
            "2": {\r
              "name": "fenced_code.block.language.typst"\r
            }\r
          },\r
          "end": "\\\\s*(\\\\1)",\r
          "endCaptures": {\r
            "1": {\r
              "name": "punctuation.definition.raw.end.typst"\r
            }\r
          },\r
          "patterns": [\r
            {\r
              "begin": "(^|\\\\G)(\\\\s*)",\r
              "while": "(^|\\\\G)(?!\\\\s*\`{5,}\\\\s*)",\r
              "contentName": "meta.embedded.block.html",\r
              "patterns": [\r
                {\r
                  "include": "text.html.basic"\r
                }\r
              ]\r
            }\r
          ]\r
        },\r
        {\r
          "name": "markup.raw.block.typst",\r
          "begin": "(\`{4})(html|htm|shtml|xhtml|inc|tmpl|tpl)\\\\b",\r
          "beginCaptures": {\r
            "1": {\r
              "name": "punctuation.definition.raw.begin.typst"\r
            },\r
            "2": {\r
              "name": "fenced_code.block.language.typst"\r
            }\r
          },\r
          "end": "\\\\s*(\\\\1)",\r
          "endCaptures": {\r
            "1": {\r
              "name": "punctuation.definition.raw.end.typst"\r
            }\r
          },\r
          "patterns": [\r
            {\r
              "begin": "(^|\\\\G)(\\\\s*)",\r
              "while": "(^|\\\\G)(?!\\\\s*\`{4,}\\\\s*)",\r
              "contentName": "meta.embedded.block.html",\r
              "patterns": [\r
                {\r
                  "include": "text.html.basic"\r
                }\r
              ]\r
            }\r
          ]\r
        },\r
        {\r
          "name": "markup.raw.block.typst",\r
          "begin": "(\`{3})(html|htm|shtml|xhtml|inc|tmpl|tpl)\\\\b",\r
          "beginCaptures": {\r
            "1": {\r
              "name": "punctuation.definition.raw.begin.typst"\r
            },\r
            "2": {\r
              "name": "fenced_code.block.language.typst"\r
            }\r
          },\r
          "end": "\\\\s*(\\\\1)",\r
          "endCaptures": {\r
            "1": {\r
              "name": "punctuation.definition.raw.end.typst"\r
            }\r
          },\r
          "patterns": [\r
            {\r
              "begin": "(^|\\\\G)(\\\\s*)",\r
              "while": "(^|\\\\G)(?!\\\\s*\`{3,}\\\\s*)",\r
              "contentName": "meta.embedded.block.html",\r
              "patterns": [\r
                {\r
                  "include": "text.html.basic"\r
                }\r
              ]\r
            }\r
          ]\r
        }\r
      ]\r
    },\r
    "ini": {\r
      "lang": "ini",\r
      "patterns": [\r
        {\r
          "name": "markup.raw.block.typst",\r
          "match": "(\`{3,})(ini|conf)\\\\b(.*?)(\\\\1)",\r
          "captures": {\r
            "1": {\r
              "name": "punctuation.definition.raw.begin.typst"\r
            },\r
            "2": {\r
              "name": "fenced_code.block.language.typst"\r
            },\r
            "3": {\r
              "name": "meta.embedded.block.ini",\r
              "patterns": [\r
                {\r
                  "include": "source.ini"\r
                }\r
              ]\r
            },\r
            "4": {\r
              "name": "punctuation.definition.raw.end.typst"\r
            }\r
          }\r
        },\r
        {\r
          "name": "markup.raw.block.typst",\r
          "begin": "(\`{6})(ini|conf)\\\\b",\r
          "beginCaptures": {\r
            "1": {\r
              "name": "punctuation.definition.raw.begin.typst"\r
            },\r
            "2": {\r
              "name": "fenced_code.block.language.typst"\r
            }\r
          },\r
          "end": "\\\\s*(\\\\1)",\r
          "endCaptures": {\r
            "1": {\r
              "name": "punctuation.definition.raw.end.typst"\r
            }\r
          },\r
          "patterns": [\r
            {\r
              "begin": "(^|\\\\G)(\\\\s*)",\r
              "while": "(^|\\\\G)(?!\\\\s*\`{6,}\\\\s*)",\r
              "contentName": "meta.embedded.block.ini",\r
              "patterns": [\r
                {\r
                  "include": "source.ini"\r
                }\r
              ]\r
            }\r
          ]\r
        },\r
        {\r
          "name": "markup.raw.block.typst",\r
          "begin": "(\`{5})(ini|conf)\\\\b",\r
          "beginCaptures": {\r
            "1": {\r
              "name": "punctuation.definition.raw.begin.typst"\r
            },\r
            "2": {\r
              "name": "fenced_code.block.language.typst"\r
            }\r
          },\r
          "end": "\\\\s*(\\\\1)",\r
          "endCaptures": {\r
            "1": {\r
              "name": "punctuation.definition.raw.end.typst"\r
            }\r
          },\r
          "patterns": [\r
            {\r
              "begin": "(^|\\\\G)(\\\\s*)",\r
              "while": "(^|\\\\G)(?!\\\\s*\`{5,}\\\\s*)",\r
              "contentName": "meta.embedded.block.ini",\r
              "patterns": [\r
                {\r
                  "include": "source.ini"\r
                }\r
              ]\r
            }\r
          ]\r
        },\r
        {\r
          "name": "markup.raw.block.typst",\r
          "begin": "(\`{4})(ini|conf)\\\\b",\r
          "beginCaptures": {\r
            "1": {\r
              "name": "punctuation.definition.raw.begin.typst"\r
            },\r
            "2": {\r
              "name": "fenced_code.block.language.typst"\r
            }\r
          },\r
          "end": "\\\\s*(\\\\1)",\r
          "endCaptures": {\r
            "1": {\r
              "name": "punctuation.definition.raw.end.typst"\r
            }\r
          },\r
          "patterns": [\r
            {\r
              "begin": "(^|\\\\G)(\\\\s*)",\r
              "while": "(^|\\\\G)(?!\\\\s*\`{4,}\\\\s*)",\r
              "contentName": "meta.embedded.block.ini",\r
              "patterns": [\r
                {\r
                  "include": "source.ini"\r
                }\r
              ]\r
            }\r
          ]\r
        },\r
        {\r
          "name": "markup.raw.block.typst",\r
          "begin": "(\`{3})(ini|conf)\\\\b",\r
          "beginCaptures": {\r
            "1": {\r
              "name": "punctuation.definition.raw.begin.typst"\r
            },\r
            "2": {\r
              "name": "fenced_code.block.language.typst"\r
            }\r
          },\r
          "end": "\\\\s*(\\\\1)",\r
          "endCaptures": {\r
            "1": {\r
              "name": "punctuation.definition.raw.end.typst"\r
            }\r
          },\r
          "patterns": [\r
            {\r
              "begin": "(^|\\\\G)(\\\\s*)",\r
              "while": "(^|\\\\G)(?!\\\\s*\`{3,}\\\\s*)",\r
              "contentName": "meta.embedded.block.ini",\r
              "patterns": [\r
                {\r
                  "include": "source.ini"\r
                }\r
              ]\r
            }\r
          ]\r
        }\r
      ]\r
    },\r
    "java": {\r
      "lang": "java",\r
      "patterns": [\r
        {\r
          "name": "markup.raw.block.typst",\r
          "match": "(\`{3,})(java|bsh)\\\\b(.*?)(\\\\1)",\r
          "captures": {\r
            "1": {\r
              "name": "punctuation.definition.raw.begin.typst"\r
            },\r
            "2": {\r
              "name": "fenced_code.block.language.typst"\r
            },\r
            "3": {\r
              "name": "meta.embedded.block.java",\r
              "patterns": [\r
                {\r
                  "include": "source.java"\r
                }\r
              ]\r
            },\r
            "4": {\r
              "name": "punctuation.definition.raw.end.typst"\r
            }\r
          }\r
        },\r
        {\r
          "name": "markup.raw.block.typst",\r
          "begin": "(\`{6})(java|bsh)\\\\b",\r
          "beginCaptures": {\r
            "1": {\r
              "name": "punctuation.definition.raw.begin.typst"\r
            },\r
            "2": {\r
              "name": "fenced_code.block.language.typst"\r
            }\r
          },\r
          "end": "\\\\s*(\\\\1)",\r
          "endCaptures": {\r
            "1": {\r
              "name": "punctuation.definition.raw.end.typst"\r
            }\r
          },\r
          "patterns": [\r
            {\r
              "begin": "(^|\\\\G)(\\\\s*)",\r
              "while": "(^|\\\\G)(?!\\\\s*\`{6,}\\\\s*)",\r
              "contentName": "meta.embedded.block.java",\r
              "patterns": [\r
                {\r
                  "include": "source.java"\r
                }\r
              ]\r
            }\r
          ]\r
        },\r
        {\r
          "name": "markup.raw.block.typst",\r
          "begin": "(\`{5})(java|bsh)\\\\b",\r
          "beginCaptures": {\r
            "1": {\r
              "name": "punctuation.definition.raw.begin.typst"\r
            },\r
            "2": {\r
              "name": "fenced_code.block.language.typst"\r
            }\r
          },\r
          "end": "\\\\s*(\\\\1)",\r
          "endCaptures": {\r
            "1": {\r
              "name": "punctuation.definition.raw.end.typst"\r
            }\r
          },\r
          "patterns": [\r
            {\r
              "begin": "(^|\\\\G)(\\\\s*)",\r
              "while": "(^|\\\\G)(?!\\\\s*\`{5,}\\\\s*)",\r
              "contentName": "meta.embedded.block.java",\r
              "patterns": [\r
                {\r
                  "include": "source.java"\r
                }\r
              ]\r
            }\r
          ]\r
        },\r
        {\r
          "name": "markup.raw.block.typst",\r
          "begin": "(\`{4})(java|bsh)\\\\b",\r
          "beginCaptures": {\r
            "1": {\r
              "name": "punctuation.definition.raw.begin.typst"\r
            },\r
            "2": {\r
              "name": "fenced_code.block.language.typst"\r
            }\r
          },\r
          "end": "\\\\s*(\\\\1)",\r
          "endCaptures": {\r
            "1": {\r
              "name": "punctuation.definition.raw.end.typst"\r
            }\r
          },\r
          "patterns": [\r
            {\r
              "begin": "(^|\\\\G)(\\\\s*)",\r
              "while": "(^|\\\\G)(?!\\\\s*\`{4,}\\\\s*)",\r
              "contentName": "meta.embedded.block.java",\r
              "patterns": [\r
                {\r
                  "include": "source.java"\r
                }\r
              ]\r
            }\r
          ]\r
        },\r
        {\r
          "name": "markup.raw.block.typst",\r
          "begin": "(\`{3})(java|bsh)\\\\b",\r
          "beginCaptures": {\r
            "1": {\r
              "name": "punctuation.definition.raw.begin.typst"\r
            },\r
            "2": {\r
              "name": "fenced_code.block.language.typst"\r
            }\r
          },\r
          "end": "\\\\s*(\\\\1)",\r
          "endCaptures": {\r
            "1": {\r
              "name": "punctuation.definition.raw.end.typst"\r
            }\r
          },\r
          "patterns": [\r
            {\r
              "begin": "(^|\\\\G)(\\\\s*)",\r
              "while": "(^|\\\\G)(?!\\\\s*\`{3,}\\\\s*)",\r
              "contentName": "meta.embedded.block.java",\r
              "patterns": [\r
                {\r
                  "include": "source.java"\r
                }\r
              ]\r
            }\r
          ]\r
        }\r
      ]\r
    },\r
    "js": {\r
      "lang": "js",\r
      "patterns": [\r
        {\r
          "name": "markup.raw.block.typst",\r
          "match": "(\`{3,})(js|jsx|javascript|es6|mjs|cjs|dataviewjs)\\\\b(.*?)(\\\\1)",\r
          "captures": {\r
            "1": {\r
              "name": "punctuation.definition.raw.begin.typst"\r
            },\r
            "2": {\r
              "name": "fenced_code.block.language.typst"\r
            },\r
            "3": {\r
              "name": "meta.embedded.block.js",\r
              "patterns": [\r
                {\r
                  "include": "source.js"\r
                }\r
              ]\r
            },\r
            "4": {\r
              "name": "punctuation.definition.raw.end.typst"\r
            }\r
          }\r
        },\r
        {\r
          "name": "markup.raw.block.typst",\r
          "begin": "(\`{6})(js|jsx|javascript|es6|mjs|cjs|dataviewjs)\\\\b",\r
          "beginCaptures": {\r
            "1": {\r
              "name": "punctuation.definition.raw.begin.typst"\r
            },\r
            "2": {\r
              "name": "fenced_code.block.language.typst"\r
            }\r
          },\r
          "end": "\\\\s*(\\\\1)",\r
          "endCaptures": {\r
            "1": {\r
              "name": "punctuation.definition.raw.end.typst"\r
            }\r
          },\r
          "patterns": [\r
            {\r
              "begin": "(^|\\\\G)(\\\\s*)",\r
              "while": "(^|\\\\G)(?!\\\\s*\`{6,}\\\\s*)",\r
              "contentName": "meta.embedded.block.js",\r
              "patterns": [\r
                {\r
                  "include": "source.js"\r
                }\r
              ]\r
            }\r
          ]\r
        },\r
        {\r
          "name": "markup.raw.block.typst",\r
          "begin": "(\`{5})(js|jsx|javascript|es6|mjs|cjs|dataviewjs)\\\\b",\r
          "beginCaptures": {\r
            "1": {\r
              "name": "punctuation.definition.raw.begin.typst"\r
            },\r
            "2": {\r
              "name": "fenced_code.block.language.typst"\r
            }\r
          },\r
          "end": "\\\\s*(\\\\1)",\r
          "endCaptures": {\r
            "1": {\r
              "name": "punctuation.definition.raw.end.typst"\r
            }\r
          },\r
          "patterns": [\r
            {\r
              "begin": "(^|\\\\G)(\\\\s*)",\r
              "while": "(^|\\\\G)(?!\\\\s*\`{5,}\\\\s*)",\r
              "contentName": "meta.embedded.block.js",\r
              "patterns": [\r
                {\r
                  "include": "source.js"\r
                }\r
              ]\r
            }\r
          ]\r
        },\r
        {\r
          "name": "markup.raw.block.typst",\r
          "begin": "(\`{4})(js|jsx|javascript|es6|mjs|cjs|dataviewjs)\\\\b",\r
          "beginCaptures": {\r
            "1": {\r
              "name": "punctuation.definition.raw.begin.typst"\r
            },\r
            "2": {\r
              "name": "fenced_code.block.language.typst"\r
            }\r
          },\r
          "end": "\\\\s*(\\\\1)",\r
          "endCaptures": {\r
            "1": {\r
              "name": "punctuation.definition.raw.end.typst"\r
            }\r
          },\r
          "patterns": [\r
            {\r
              "begin": "(^|\\\\G)(\\\\s*)",\r
              "while": "(^|\\\\G)(?!\\\\s*\`{4,}\\\\s*)",\r
              "contentName": "meta.embedded.block.js",\r
              "patterns": [\r
                {\r
                  "include": "source.js"\r
                }\r
              ]\r
            }\r
          ]\r
        },\r
        {\r
          "name": "markup.raw.block.typst",\r
          "begin": "(\`{3})(js|jsx|javascript|es6|mjs|cjs|dataviewjs)\\\\b",\r
          "beginCaptures": {\r
            "1": {\r
              "name": "punctuation.definition.raw.begin.typst"\r
            },\r
            "2": {\r
              "name": "fenced_code.block.language.typst"\r
            }\r
          },\r
          "end": "\\\\s*(\\\\1)",\r
          "endCaptures": {\r
            "1": {\r
              "name": "punctuation.definition.raw.end.typst"\r
            }\r
          },\r
          "patterns": [\r
            {\r
              "begin": "(^|\\\\G)(\\\\s*)",\r
              "while": "(^|\\\\G)(?!\\\\s*\`{3,}\\\\s*)",\r
              "contentName": "meta.embedded.block.js",\r
              "patterns": [\r
                {\r
                  "include": "source.js"\r
                }\r
              ]\r
            }\r
          ]\r
        }\r
      ]\r
    },\r
    "jsonc": {\r
      "lang": "jsonc",\r
      "patterns": [\r
        {\r
          "name": "markup.raw.block.typst",\r
          "match": "(\`{3,})(jsonc)\\\\b(.*?)(\\\\1)",\r
          "captures": {\r
            "1": {\r
              "name": "punctuation.definition.raw.begin.typst"\r
            },\r
            "2": {\r
              "name": "fenced_code.block.language.typst"\r
            },\r
            "3": {\r
              "name": "meta.embedded.block.jsonc",\r
              "patterns": [\r
                {\r
                  "include": "source.json.comments"\r
                }\r
              ]\r
            },\r
            "4": {\r
              "name": "punctuation.definition.raw.end.typst"\r
            }\r
          }\r
        },\r
        {\r
          "name": "markup.raw.block.typst",\r
          "begin": "(\`{6})(jsonc)\\\\b",\r
          "beginCaptures": {\r
            "1": {\r
              "name": "punctuation.definition.raw.begin.typst"\r
            },\r
            "2": {\r
              "name": "fenced_code.block.language.typst"\r
            }\r
          },\r
          "end": "\\\\s*(\\\\1)",\r
          "endCaptures": {\r
            "1": {\r
              "name": "punctuation.definition.raw.end.typst"\r
            }\r
          },\r
          "patterns": [\r
            {\r
              "begin": "(^|\\\\G)(\\\\s*)",\r
              "while": "(^|\\\\G)(?!\\\\s*\`{6,}\\\\s*)",\r
              "contentName": "meta.embedded.block.jsonc",\r
              "patterns": [\r
                {\r
                  "include": "source.json.comments"\r
                }\r
              ]\r
            }\r
          ]\r
        },\r
        {\r
          "name": "markup.raw.block.typst",\r
          "begin": "(\`{5})(jsonc)\\\\b",\r
          "beginCaptures": {\r
            "1": {\r
              "name": "punctuation.definition.raw.begin.typst"\r
            },\r
            "2": {\r
              "name": "fenced_code.block.language.typst"\r
            }\r
          },\r
          "end": "\\\\s*(\\\\1)",\r
          "endCaptures": {\r
            "1": {\r
              "name": "punctuation.definition.raw.end.typst"\r
            }\r
          },\r
          "patterns": [\r
            {\r
              "begin": "(^|\\\\G)(\\\\s*)",\r
              "while": "(^|\\\\G)(?!\\\\s*\`{5,}\\\\s*)",\r
              "contentName": "meta.embedded.block.jsonc",\r
              "patterns": [\r
                {\r
                  "include": "source.json.comments"\r
                }\r
              ]\r
            }\r
          ]\r
        },\r
        {\r
          "name": "markup.raw.block.typst",\r
          "begin": "(\`{4})(jsonc)\\\\b",\r
          "beginCaptures": {\r
            "1": {\r
              "name": "punctuation.definition.raw.begin.typst"\r
            },\r
            "2": {\r
              "name": "fenced_code.block.language.typst"\r
            }\r
          },\r
          "end": "\\\\s*(\\\\1)",\r
          "endCaptures": {\r
            "1": {\r
              "name": "punctuation.definition.raw.end.typst"\r
            }\r
          },\r
          "patterns": [\r
            {\r
              "begin": "(^|\\\\G)(\\\\s*)",\r
              "while": "(^|\\\\G)(?!\\\\s*\`{4,}\\\\s*)",\r
              "contentName": "meta.embedded.block.jsonc",\r
              "patterns": [\r
                {\r
                  "include": "source.json.comments"\r
                }\r
              ]\r
            }\r
          ]\r
        },\r
        {\r
          "name": "markup.raw.block.typst",\r
          "begin": "(\`{3})(jsonc)\\\\b",\r
          "beginCaptures": {\r
            "1": {\r
              "name": "punctuation.definition.raw.begin.typst"\r
            },\r
            "2": {\r
              "name": "fenced_code.block.language.typst"\r
            }\r
          },\r
          "end": "\\\\s*(\\\\1)",\r
          "endCaptures": {\r
            "1": {\r
              "name": "punctuation.definition.raw.end.typst"\r
            }\r
          },\r
          "patterns": [\r
            {\r
              "begin": "(^|\\\\G)(\\\\s*)",\r
              "while": "(^|\\\\G)(?!\\\\s*\`{3,}\\\\s*)",\r
              "contentName": "meta.embedded.block.jsonc",\r
              "patterns": [\r
                {\r
                  "include": "source.json.comments"\r
                }\r
              ]\r
            }\r
          ]\r
        }\r
      ]\r
    },\r
    "json": {\r
      "lang": "json",\r
      "patterns": [\r
        {\r
          "name": "markup.raw.block.typst",\r
          "match": "(\`{3,})(json|json5|sublime-settings|sublime-menu|sublime-keymap|sublime-mousemap|sublime-theme|sublime-build|sublime-project|sublime-completions)\\\\b(.*?)(\\\\1)",\r
          "captures": {\r
            "1": {\r
              "name": "punctuation.definition.raw.begin.typst"\r
            },\r
            "2": {\r
              "name": "fenced_code.block.language.typst"\r
            },\r
            "3": {\r
              "name": "meta.embedded.block.json",\r
              "patterns": [\r
                {\r
                  "include": "source.json"\r
                }\r
              ]\r
            },\r
            "4": {\r
              "name": "punctuation.definition.raw.end.typst"\r
            }\r
          }\r
        },\r
        {\r
          "name": "markup.raw.block.typst",\r
          "begin": "(\`{6})(json|json5|sublime-settings|sublime-menu|sublime-keymap|sublime-mousemap|sublime-theme|sublime-build|sublime-project|sublime-completions)\\\\b",\r
          "beginCaptures": {\r
            "1": {\r
              "name": "punctuation.definition.raw.begin.typst"\r
            },\r
            "2": {\r
              "name": "fenced_code.block.language.typst"\r
            }\r
          },\r
          "end": "\\\\s*(\\\\1)",\r
          "endCaptures": {\r
            "1": {\r
              "name": "punctuation.definition.raw.end.typst"\r
            }\r
          },\r
          "patterns": [\r
            {\r
              "begin": "(^|\\\\G)(\\\\s*)",\r
              "while": "(^|\\\\G)(?!\\\\s*\`{6,}\\\\s*)",\r
              "contentName": "meta.embedded.block.json",\r
              "patterns": [\r
                {\r
                  "include": "source.json"\r
                }\r
              ]\r
            }\r
          ]\r
        },\r
        {\r
          "name": "markup.raw.block.typst",\r
          "begin": "(\`{5})(json|json5|sublime-settings|sublime-menu|sublime-keymap|sublime-mousemap|sublime-theme|sublime-build|sublime-project|sublime-completions)\\\\b",\r
          "beginCaptures": {\r
            "1": {\r
              "name": "punctuation.definition.raw.begin.typst"\r
            },\r
            "2": {\r
              "name": "fenced_code.block.language.typst"\r
            }\r
          },\r
          "end": "\\\\s*(\\\\1)",\r
          "endCaptures": {\r
            "1": {\r
              "name": "punctuation.definition.raw.end.typst"\r
            }\r
          },\r
          "patterns": [\r
            {\r
              "begin": "(^|\\\\G)(\\\\s*)",\r
              "while": "(^|\\\\G)(?!\\\\s*\`{5,}\\\\s*)",\r
              "contentName": "meta.embedded.block.json",\r
              "patterns": [\r
                {\r
                  "include": "source.json"\r
                }\r
              ]\r
            }\r
          ]\r
        },\r
        {\r
          "name": "markup.raw.block.typst",\r
          "begin": "(\`{4})(json|json5|sublime-settings|sublime-menu|sublime-keymap|sublime-mousemap|sublime-theme|sublime-build|sublime-project|sublime-completions)\\\\b",\r
          "beginCaptures": {\r
            "1": {\r
              "name": "punctuation.definition.raw.begin.typst"\r
            },\r
            "2": {\r
              "name": "fenced_code.block.language.typst"\r
            }\r
          },\r
          "end": "\\\\s*(\\\\1)",\r
          "endCaptures": {\r
            "1": {\r
              "name": "punctuation.definition.raw.end.typst"\r
            }\r
          },\r
          "patterns": [\r
            {\r
              "begin": "(^|\\\\G)(\\\\s*)",\r
              "while": "(^|\\\\G)(?!\\\\s*\`{4,}\\\\s*)",\r
              "contentName": "meta.embedded.block.json",\r
              "patterns": [\r
                {\r
                  "include": "source.json"\r
                }\r
              ]\r
            }\r
          ]\r
        },\r
        {\r
          "name": "markup.raw.block.typst",\r
          "begin": "(\`{3})(json|json5|sublime-settings|sublime-menu|sublime-keymap|sublime-mousemap|sublime-theme|sublime-build|sublime-project|sublime-completions)\\\\b",\r
          "beginCaptures": {\r
            "1": {\r
              "name": "punctuation.definition.raw.begin.typst"\r
            },\r
            "2": {\r
              "name": "fenced_code.block.language.typst"\r
            }\r
          },\r
          "end": "\\\\s*(\\\\1)",\r
          "endCaptures": {\r
            "1": {\r
              "name": "punctuation.definition.raw.end.typst"\r
            }\r
          },\r
          "patterns": [\r
            {\r
              "begin": "(^|\\\\G)(\\\\s*)",\r
              "while": "(^|\\\\G)(?!\\\\s*\`{3,}\\\\s*)",\r
              "contentName": "meta.embedded.block.json",\r
              "patterns": [\r
                {\r
                  "include": "source.json"\r
                }\r
              ]\r
            }\r
          ]\r
        }\r
      ]\r
    },\r
    "julia": {\r
      "lang": "julia",\r
      "patterns": [\r
        {\r
          "name": "markup.raw.block.typst",\r
          "match": "(\`{3,})(julia)\\\\b(.*?)(\\\\1)",\r
          "captures": {\r
            "1": {\r
              "name": "punctuation.definition.raw.begin.typst"\r
            },\r
            "2": {\r
              "name": "fenced_code.block.language.typst"\r
            },\r
            "3": {\r
              "name": "meta.embedded.block.julia",\r
              "patterns": [\r
                {\r
                  "include": "source.julia"\r
                }\r
              ]\r
            },\r
            "4": {\r
              "name": "punctuation.definition.raw.end.typst"\r
            }\r
          }\r
        },\r
        {\r
          "name": "markup.raw.block.typst",\r
          "begin": "(\`{6})(julia)\\\\b",\r
          "beginCaptures": {\r
            "1": {\r
              "name": "punctuation.definition.raw.begin.typst"\r
            },\r
            "2": {\r
              "name": "fenced_code.block.language.typst"\r
            }\r
          },\r
          "end": "\\\\s*(\\\\1)",\r
          "endCaptures": {\r
            "1": {\r
              "name": "punctuation.definition.raw.end.typst"\r
            }\r
          },\r
          "patterns": [\r
            {\r
              "begin": "(^|\\\\G)(\\\\s*)",\r
              "while": "(^|\\\\G)(?!\\\\s*\`{6,}\\\\s*)",\r
              "contentName": "meta.embedded.block.julia",\r
              "patterns": [\r
                {\r
                  "include": "source.julia"\r
                }\r
              ]\r
            }\r
          ]\r
        },\r
        {\r
          "name": "markup.raw.block.typst",\r
          "begin": "(\`{5})(julia)\\\\b",\r
          "beginCaptures": {\r
            "1": {\r
              "name": "punctuation.definition.raw.begin.typst"\r
            },\r
            "2": {\r
              "name": "fenced_code.block.language.typst"\r
            }\r
          },\r
          "end": "\\\\s*(\\\\1)",\r
          "endCaptures": {\r
            "1": {\r
              "name": "punctuation.definition.raw.end.typst"\r
            }\r
          },\r
          "patterns": [\r
            {\r
              "begin": "(^|\\\\G)(\\\\s*)",\r
              "while": "(^|\\\\G)(?!\\\\s*\`{5,}\\\\s*)",\r
              "contentName": "meta.embedded.block.julia",\r
              "patterns": [\r
                {\r
                  "include": "source.julia"\r
                }\r
              ]\r
            }\r
          ]\r
        },\r
        {\r
          "name": "markup.raw.block.typst",\r
          "begin": "(\`{4})(julia)\\\\b",\r
          "beginCaptures": {\r
            "1": {\r
              "name": "punctuation.definition.raw.begin.typst"\r
            },\r
            "2": {\r
              "name": "fenced_code.block.language.typst"\r
            }\r
          },\r
          "end": "\\\\s*(\\\\1)",\r
          "endCaptures": {\r
            "1": {\r
              "name": "punctuation.definition.raw.end.typst"\r
            }\r
          },\r
          "patterns": [\r
            {\r
              "begin": "(^|\\\\G)(\\\\s*)",\r
              "while": "(^|\\\\G)(?!\\\\s*\`{4,}\\\\s*)",\r
              "contentName": "meta.embedded.block.julia",\r
              "patterns": [\r
                {\r
                  "include": "source.julia"\r
                }\r
              ]\r
            }\r
          ]\r
        },\r
        {\r
          "name": "markup.raw.block.typst",\r
          "begin": "(\`{3})(julia)\\\\b",\r
          "beginCaptures": {\r
            "1": {\r
              "name": "punctuation.definition.raw.begin.typst"\r
            },\r
            "2": {\r
              "name": "fenced_code.block.language.typst"\r
            }\r
          },\r
          "end": "\\\\s*(\\\\1)",\r
          "endCaptures": {\r
            "1": {\r
              "name": "punctuation.definition.raw.end.typst"\r
            }\r
          },\r
          "patterns": [\r
            {\r
              "begin": "(^|\\\\G)(\\\\s*)",\r
              "while": "(^|\\\\G)(?!\\\\s*\`{3,}\\\\s*)",\r
              "contentName": "meta.embedded.block.julia",\r
              "patterns": [\r
                {\r
                  "include": "source.julia"\r
                }\r
              ]\r
            }\r
          ]\r
        }\r
      ]\r
    },\r
    "latex": {\r
      "lang": "latex",\r
      "patterns": [\r
        {\r
          "name": "markup.raw.block.typst",\r
          "match": "(\`{3,})(latex|tex)\\\\b(.*?)(\\\\1)",\r
          "captures": {\r
            "1": {\r
              "name": "punctuation.definition.raw.begin.typst"\r
            },\r
            "2": {\r
              "name": "fenced_code.block.language.typst"\r
            },\r
            "3": {\r
              "name": "meta.embedded.block.latex",\r
              "patterns": [\r
                {\r
                  "include": "text.tex.latex"\r
                }\r
              ]\r
            },\r
            "4": {\r
              "name": "punctuation.definition.raw.end.typst"\r
            }\r
          }\r
        },\r
        {\r
          "name": "markup.raw.block.typst",\r
          "begin": "(\`{6})(latex|tex)\\\\b",\r
          "beginCaptures": {\r
            "1": {\r
              "name": "punctuation.definition.raw.begin.typst"\r
            },\r
            "2": {\r
              "name": "fenced_code.block.language.typst"\r
            }\r
          },\r
          "end": "\\\\s*(\\\\1)",\r
          "endCaptures": {\r
            "1": {\r
              "name": "punctuation.definition.raw.end.typst"\r
            }\r
          },\r
          "patterns": [\r
            {\r
              "begin": "(^|\\\\G)(\\\\s*)",\r
              "while": "(^|\\\\G)(?!\\\\s*\`{6,}\\\\s*)",\r
              "contentName": "meta.embedded.block.latex",\r
              "patterns": [\r
                {\r
                  "include": "text.tex.latex"\r
                }\r
              ]\r
            }\r
          ]\r
        },\r
        {\r
          "name": "markup.raw.block.typst",\r
          "begin": "(\`{5})(latex|tex)\\\\b",\r
          "beginCaptures": {\r
            "1": {\r
              "name": "punctuation.definition.raw.begin.typst"\r
            },\r
            "2": {\r
              "name": "fenced_code.block.language.typst"\r
            }\r
          },\r
          "end": "\\\\s*(\\\\1)",\r
          "endCaptures": {\r
            "1": {\r
              "name": "punctuation.definition.raw.end.typst"\r
            }\r
          },\r
          "patterns": [\r
            {\r
              "begin": "(^|\\\\G)(\\\\s*)",\r
              "while": "(^|\\\\G)(?!\\\\s*\`{5,}\\\\s*)",\r
              "contentName": "meta.embedded.block.latex",\r
              "patterns": [\r
                {\r
                  "include": "text.tex.latex"\r
                }\r
              ]\r
            }\r
          ]\r
        },\r
        {\r
          "name": "markup.raw.block.typst",\r
          "begin": "(\`{4})(latex|tex)\\\\b",\r
          "beginCaptures": {\r
            "1": {\r
              "name": "punctuation.definition.raw.begin.typst"\r
            },\r
            "2": {\r
              "name": "fenced_code.block.language.typst"\r
            }\r
          },\r
          "end": "\\\\s*(\\\\1)",\r
          "endCaptures": {\r
            "1": {\r
              "name": "punctuation.definition.raw.end.typst"\r
            }\r
          },\r
          "patterns": [\r
            {\r
              "begin": "(^|\\\\G)(\\\\s*)",\r
              "while": "(^|\\\\G)(?!\\\\s*\`{4,}\\\\s*)",\r
              "contentName": "meta.embedded.block.latex",\r
              "patterns": [\r
                {\r
                  "include": "text.tex.latex"\r
                }\r
              ]\r
            }\r
          ]\r
        },\r
        {\r
          "name": "markup.raw.block.typst",\r
          "begin": "(\`{3})(latex|tex)\\\\b",\r
          "beginCaptures": {\r
            "1": {\r
              "name": "punctuation.definition.raw.begin.typst"\r
            },\r
            "2": {\r
              "name": "fenced_code.block.language.typst"\r
            }\r
          },\r
          "end": "\\\\s*(\\\\1)",\r
          "endCaptures": {\r
            "1": {\r
              "name": "punctuation.definition.raw.end.typst"\r
            }\r
          },\r
          "patterns": [\r
            {\r
              "begin": "(^|\\\\G)(\\\\s*)",\r
              "while": "(^|\\\\G)(?!\\\\s*\`{3,}\\\\s*)",\r
              "contentName": "meta.embedded.block.latex",\r
              "patterns": [\r
                {\r
                  "include": "text.tex.latex"\r
                }\r
              ]\r
            }\r
          ]\r
        }\r
      ]\r
    },\r
    "less": {\r
      "lang": "less",\r
      "patterns": [\r
        {\r
          "name": "markup.raw.block.typst",\r
          "match": "(\`{3,})(less)\\\\b(.*?)(\\\\1)",\r
          "captures": {\r
            "1": {\r
              "name": "punctuation.definition.raw.begin.typst"\r
            },\r
            "2": {\r
              "name": "fenced_code.block.language.typst"\r
            },\r
            "3": {\r
              "name": "meta.embedded.block.less",\r
              "patterns": [\r
                {\r
                  "include": "source.css.less"\r
                }\r
              ]\r
            },\r
            "4": {\r
              "name": "punctuation.definition.raw.end.typst"\r
            }\r
          }\r
        },\r
        {\r
          "name": "markup.raw.block.typst",\r
          "begin": "(\`{6})(less)\\\\b",\r
          "beginCaptures": {\r
            "1": {\r
              "name": "punctuation.definition.raw.begin.typst"\r
            },\r
            "2": {\r
              "name": "fenced_code.block.language.typst"\r
            }\r
          },\r
          "end": "\\\\s*(\\\\1)",\r
          "endCaptures": {\r
            "1": {\r
              "name": "punctuation.definition.raw.end.typst"\r
            }\r
          },\r
          "patterns": [\r
            {\r
              "begin": "(^|\\\\G)(\\\\s*)",\r
              "while": "(^|\\\\G)(?!\\\\s*\`{6,}\\\\s*)",\r
              "contentName": "meta.embedded.block.less",\r
              "patterns": [\r
                {\r
                  "include": "source.css.less"\r
                }\r
              ]\r
            }\r
          ]\r
        },\r
        {\r
          "name": "markup.raw.block.typst",\r
          "begin": "(\`{5})(less)\\\\b",\r
          "beginCaptures": {\r
            "1": {\r
              "name": "punctuation.definition.raw.begin.typst"\r
            },\r
            "2": {\r
              "name": "fenced_code.block.language.typst"\r
            }\r
          },\r
          "end": "\\\\s*(\\\\1)",\r
          "endCaptures": {\r
            "1": {\r
              "name": "punctuation.definition.raw.end.typst"\r
            }\r
          },\r
          "patterns": [\r
            {\r
              "begin": "(^|\\\\G)(\\\\s*)",\r
              "while": "(^|\\\\G)(?!\\\\s*\`{5,}\\\\s*)",\r
              "contentName": "meta.embedded.block.less",\r
              "patterns": [\r
                {\r
                  "include": "source.css.less"\r
                }\r
              ]\r
            }\r
          ]\r
        },\r
        {\r
          "name": "markup.raw.block.typst",\r
          "begin": "(\`{4})(less)\\\\b",\r
          "beginCaptures": {\r
            "1": {\r
              "name": "punctuation.definition.raw.begin.typst"\r
            },\r
            "2": {\r
              "name": "fenced_code.block.language.typst"\r
            }\r
          },\r
          "end": "\\\\s*(\\\\1)",\r
          "endCaptures": {\r
            "1": {\r
              "name": "punctuation.definition.raw.end.typst"\r
            }\r
          },\r
          "patterns": [\r
            {\r
              "begin": "(^|\\\\G)(\\\\s*)",\r
              "while": "(^|\\\\G)(?!\\\\s*\`{4,}\\\\s*)",\r
              "contentName": "meta.embedded.block.less",\r
              "patterns": [\r
                {\r
                  "include": "source.css.less"\r
                }\r
              ]\r
            }\r
          ]\r
        },\r
        {\r
          "name": "markup.raw.block.typst",\r
          "begin": "(\`{3})(less)\\\\b",\r
          "beginCaptures": {\r
            "1": {\r
              "name": "punctuation.definition.raw.begin.typst"\r
            },\r
            "2": {\r
              "name": "fenced_code.block.language.typst"\r
            }\r
          },\r
          "end": "\\\\s*(\\\\1)",\r
          "endCaptures": {\r
            "1": {\r
              "name": "punctuation.definition.raw.end.typst"\r
            }\r
          },\r
          "patterns": [\r
            {\r
              "begin": "(^|\\\\G)(\\\\s*)",\r
              "while": "(^|\\\\G)(?!\\\\s*\`{3,}\\\\s*)",\r
              "contentName": "meta.embedded.block.less",\r
              "patterns": [\r
                {\r
                  "include": "source.css.less"\r
                }\r
              ]\r
            }\r
          ]\r
        }\r
      ]\r
    },\r
    "log": {\r
      "lang": "log",\r
      "patterns": [\r
        {\r
          "name": "markup.raw.block.typst",\r
          "match": "(\`{3,})(log)\\\\b(.*?)(\\\\1)",\r
          "captures": {\r
            "1": {\r
              "name": "punctuation.definition.raw.begin.typst"\r
            },\r
            "2": {\r
              "name": "fenced_code.block.language.typst"\r
            },\r
            "3": {\r
              "name": "meta.embedded.block.log",\r
              "patterns": [\r
                {\r
                  "include": "text.log"\r
                }\r
              ]\r
            },\r
            "4": {\r
              "name": "punctuation.definition.raw.end.typst"\r
            }\r
          }\r
        },\r
        {\r
          "name": "markup.raw.block.typst",\r
          "begin": "(\`{6})(log)\\\\b",\r
          "beginCaptures": {\r
            "1": {\r
              "name": "punctuation.definition.raw.begin.typst"\r
            },\r
            "2": {\r
              "name": "fenced_code.block.language.typst"\r
            }\r
          },\r
          "end": "\\\\s*(\\\\1)",\r
          "endCaptures": {\r
            "1": {\r
              "name": "punctuation.definition.raw.end.typst"\r
            }\r
          },\r
          "patterns": [\r
            {\r
              "begin": "(^|\\\\G)(\\\\s*)",\r
              "while": "(^|\\\\G)(?!\\\\s*\`{6,}\\\\s*)",\r
              "contentName": "meta.embedded.block.log",\r
              "patterns": [\r
                {\r
                  "include": "text.log"\r
                }\r
              ]\r
            }\r
          ]\r
        },\r
        {\r
          "name": "markup.raw.block.typst",\r
          "begin": "(\`{5})(log)\\\\b",\r
          "beginCaptures": {\r
            "1": {\r
              "name": "punctuation.definition.raw.begin.typst"\r
            },\r
            "2": {\r
              "name": "fenced_code.block.language.typst"\r
            }\r
          },\r
          "end": "\\\\s*(\\\\1)",\r
          "endCaptures": {\r
            "1": {\r
              "name": "punctuation.definition.raw.end.typst"\r
            }\r
          },\r
          "patterns": [\r
            {\r
              "begin": "(^|\\\\G)(\\\\s*)",\r
              "while": "(^|\\\\G)(?!\\\\s*\`{5,}\\\\s*)",\r
              "contentName": "meta.embedded.block.log",\r
              "patterns": [\r
                {\r
                  "include": "text.log"\r
                }\r
              ]\r
            }\r
          ]\r
        },\r
        {\r
          "name": "markup.raw.block.typst",\r
          "begin": "(\`{4})(log)\\\\b",\r
          "beginCaptures": {\r
            "1": {\r
              "name": "punctuation.definition.raw.begin.typst"\r
            },\r
            "2": {\r
              "name": "fenced_code.block.language.typst"\r
            }\r
          },\r
          "end": "\\\\s*(\\\\1)",\r
          "endCaptures": {\r
            "1": {\r
              "name": "punctuation.definition.raw.end.typst"\r
            }\r
          },\r
          "patterns": [\r
            {\r
              "begin": "(^|\\\\G)(\\\\s*)",\r
              "while": "(^|\\\\G)(?!\\\\s*\`{4,}\\\\s*)",\r
              "contentName": "meta.embedded.block.log",\r
              "patterns": [\r
                {\r
                  "include": "text.log"\r
                }\r
              ]\r
            }\r
          ]\r
        },\r
        {\r
          "name": "markup.raw.block.typst",\r
          "begin": "(\`{3})(log)\\\\b",\r
          "beginCaptures": {\r
            "1": {\r
              "name": "punctuation.definition.raw.begin.typst"\r
            },\r
            "2": {\r
              "name": "fenced_code.block.language.typst"\r
            }\r
          },\r
          "end": "\\\\s*(\\\\1)",\r
          "endCaptures": {\r
            "1": {\r
              "name": "punctuation.definition.raw.end.typst"\r
            }\r
          },\r
          "patterns": [\r
            {\r
              "begin": "(^|\\\\G)(\\\\s*)",\r
              "while": "(^|\\\\G)(?!\\\\s*\`{3,}\\\\s*)",\r
              "contentName": "meta.embedded.block.log",\r
              "patterns": [\r
                {\r
                  "include": "text.log"\r
                }\r
              ]\r
            }\r
          ]\r
        }\r
      ]\r
    },\r
    "lua": {\r
      "lang": "lua",\r
      "patterns": [\r
        {\r
          "name": "markup.raw.block.typst",\r
          "match": "(\`{3,})(lua)\\\\b(.*?)(\\\\1)",\r
          "captures": {\r
            "1": {\r
              "name": "punctuation.definition.raw.begin.typst"\r
            },\r
            "2": {\r
              "name": "fenced_code.block.language.typst"\r
            },\r
            "3": {\r
              "name": "meta.embedded.block.lua",\r
              "patterns": [\r
                {\r
                  "include": "source.lua"\r
                }\r
              ]\r
            },\r
            "4": {\r
              "name": "punctuation.definition.raw.end.typst"\r
            }\r
          }\r
        },\r
        {\r
          "name": "markup.raw.block.typst",\r
          "begin": "(\`{6})(lua)\\\\b",\r
          "beginCaptures": {\r
            "1": {\r
              "name": "punctuation.definition.raw.begin.typst"\r
            },\r
            "2": {\r
              "name": "fenced_code.block.language.typst"\r
            }\r
          },\r
          "end": "\\\\s*(\\\\1)",\r
          "endCaptures": {\r
            "1": {\r
              "name": "punctuation.definition.raw.end.typst"\r
            }\r
          },\r
          "patterns": [\r
            {\r
              "begin": "(^|\\\\G)(\\\\s*)",\r
              "while": "(^|\\\\G)(?!\\\\s*\`{6,}\\\\s*)",\r
              "contentName": "meta.embedded.block.lua",\r
              "patterns": [\r
                {\r
                  "include": "source.lua"\r
                }\r
              ]\r
            }\r
          ]\r
        },\r
        {\r
          "name": "markup.raw.block.typst",\r
          "begin": "(\`{5})(lua)\\\\b",\r
          "beginCaptures": {\r
            "1": {\r
              "name": "punctuation.definition.raw.begin.typst"\r
            },\r
            "2": {\r
              "name": "fenced_code.block.language.typst"\r
            }\r
          },\r
          "end": "\\\\s*(\\\\1)",\r
          "endCaptures": {\r
            "1": {\r
              "name": "punctuation.definition.raw.end.typst"\r
            }\r
          },\r
          "patterns": [\r
            {\r
              "begin": "(^|\\\\G)(\\\\s*)",\r
              "while": "(^|\\\\G)(?!\\\\s*\`{5,}\\\\s*)",\r
              "contentName": "meta.embedded.block.lua",\r
              "patterns": [\r
                {\r
                  "include": "source.lua"\r
                }\r
              ]\r
            }\r
          ]\r
        },\r
        {\r
          "name": "markup.raw.block.typst",\r
          "begin": "(\`{4})(lua)\\\\b",\r
          "beginCaptures": {\r
            "1": {\r
              "name": "punctuation.definition.raw.begin.typst"\r
            },\r
            "2": {\r
              "name": "fenced_code.block.language.typst"\r
            }\r
          },\r
          "end": "\\\\s*(\\\\1)",\r
          "endCaptures": {\r
            "1": {\r
              "name": "punctuation.definition.raw.end.typst"\r
            }\r
          },\r
          "patterns": [\r
            {\r
              "begin": "(^|\\\\G)(\\\\s*)",\r
              "while": "(^|\\\\G)(?!\\\\s*\`{4,}\\\\s*)",\r
              "contentName": "meta.embedded.block.lua",\r
              "patterns": [\r
                {\r
                  "include": "source.lua"\r
                }\r
              ]\r
            }\r
          ]\r
        },\r
        {\r
          "name": "markup.raw.block.typst",\r
          "begin": "(\`{3})(lua)\\\\b",\r
          "beginCaptures": {\r
            "1": {\r
              "name": "punctuation.definition.raw.begin.typst"\r
            },\r
            "2": {\r
              "name": "fenced_code.block.language.typst"\r
            }\r
          },\r
          "end": "\\\\s*(\\\\1)",\r
          "endCaptures": {\r
            "1": {\r
              "name": "punctuation.definition.raw.end.typst"\r
            }\r
          },\r
          "patterns": [\r
            {\r
              "begin": "(^|\\\\G)(\\\\s*)",\r
              "while": "(^|\\\\G)(?!\\\\s*\`{3,}\\\\s*)",\r
              "contentName": "meta.embedded.block.lua",\r
              "patterns": [\r
                {\r
                  "include": "source.lua"\r
                }\r
              ]\r
            }\r
          ]\r
        }\r
      ]\r
    },\r
    "makefile": {\r
      "lang": "makefile",\r
      "patterns": [\r
        {\r
          "name": "markup.raw.block.typst",\r
          "match": "(\`{3,})(makefile|makefile|GNUmakefile|OCamlMakefile)\\\\b(.*?)(\\\\1)",\r
          "captures": {\r
            "1": {\r
              "name": "punctuation.definition.raw.begin.typst"\r
            },\r
            "2": {\r
              "name": "fenced_code.block.language.typst"\r
            },\r
            "3": {\r
              "name": "meta.embedded.block.makefile",\r
              "patterns": [\r
                {\r
                  "include": "source.makefile"\r
                }\r
              ]\r
            },\r
            "4": {\r
              "name": "punctuation.definition.raw.end.typst"\r
            }\r
          }\r
        },\r
        {\r
          "name": "markup.raw.block.typst",\r
          "begin": "(\`{6})(makefile|makefile|GNUmakefile|OCamlMakefile)\\\\b",\r
          "beginCaptures": {\r
            "1": {\r
              "name": "punctuation.definition.raw.begin.typst"\r
            },\r
            "2": {\r
              "name": "fenced_code.block.language.typst"\r
            }\r
          },\r
          "end": "\\\\s*(\\\\1)",\r
          "endCaptures": {\r
            "1": {\r
              "name": "punctuation.definition.raw.end.typst"\r
            }\r
          },\r
          "patterns": [\r
            {\r
              "begin": "(^|\\\\G)(\\\\s*)",\r
              "while": "(^|\\\\G)(?!\\\\s*\`{6,}\\\\s*)",\r
              "contentName": "meta.embedded.block.makefile",\r
              "patterns": [\r
                {\r
                  "include": "source.makefile"\r
                }\r
              ]\r
            }\r
          ]\r
        },\r
        {\r
          "name": "markup.raw.block.typst",\r
          "begin": "(\`{5})(makefile|makefile|GNUmakefile|OCamlMakefile)\\\\b",\r
          "beginCaptures": {\r
            "1": {\r
              "name": "punctuation.definition.raw.begin.typst"\r
            },\r
            "2": {\r
              "name": "fenced_code.block.language.typst"\r
            }\r
          },\r
          "end": "\\\\s*(\\\\1)",\r
          "endCaptures": {\r
            "1": {\r
              "name": "punctuation.definition.raw.end.typst"\r
            }\r
          },\r
          "patterns": [\r
            {\r
              "begin": "(^|\\\\G)(\\\\s*)",\r
              "while": "(^|\\\\G)(?!\\\\s*\`{5,}\\\\s*)",\r
              "contentName": "meta.embedded.block.makefile",\r
              "patterns": [\r
                {\r
                  "include": "source.makefile"\r
                }\r
              ]\r
            }\r
          ]\r
        },\r
        {\r
          "name": "markup.raw.block.typst",\r
          "begin": "(\`{4})(makefile|makefile|GNUmakefile|OCamlMakefile)\\\\b",\r
          "beginCaptures": {\r
            "1": {\r
              "name": "punctuation.definition.raw.begin.typst"\r
            },\r
            "2": {\r
              "name": "fenced_code.block.language.typst"\r
            }\r
          },\r
          "end": "\\\\s*(\\\\1)",\r
          "endCaptures": {\r
            "1": {\r
              "name": "punctuation.definition.raw.end.typst"\r
            }\r
          },\r
          "patterns": [\r
            {\r
              "begin": "(^|\\\\G)(\\\\s*)",\r
              "while": "(^|\\\\G)(?!\\\\s*\`{4,}\\\\s*)",\r
              "contentName": "meta.embedded.block.makefile",\r
              "patterns": [\r
                {\r
                  "include": "source.makefile"\r
                }\r
              ]\r
            }\r
          ]\r
        },\r
        {\r
          "name": "markup.raw.block.typst",\r
          "begin": "(\`{3})(makefile|makefile|GNUmakefile|OCamlMakefile)\\\\b",\r
          "beginCaptures": {\r
            "1": {\r
              "name": "punctuation.definition.raw.begin.typst"\r
            },\r
            "2": {\r
              "name": "fenced_code.block.language.typst"\r
            }\r
          },\r
          "end": "\\\\s*(\\\\1)",\r
          "endCaptures": {\r
            "1": {\r
              "name": "punctuation.definition.raw.end.typst"\r
            }\r
          },\r
          "patterns": [\r
            {\r
              "begin": "(^|\\\\G)(\\\\s*)",\r
              "while": "(^|\\\\G)(?!\\\\s*\`{3,}\\\\s*)",\r
              "contentName": "meta.embedded.block.makefile",\r
              "patterns": [\r
                {\r
                  "include": "source.makefile"\r
                }\r
              ]\r
            }\r
          ]\r
        }\r
      ]\r
    },\r
    "markdown": {\r
      "lang": "markdown",\r
      "patterns": [\r
        {\r
          "name": "markup.raw.block.typst",\r
          "match": "(\`{3,})(markdown|md)\\\\b(.*?)(\\\\1)",\r
          "captures": {\r
            "1": {\r
              "name": "punctuation.definition.raw.begin.typst"\r
            },\r
            "2": {\r
              "name": "fenced_code.block.language.typst"\r
            },\r
            "3": {\r
              "name": "meta.embedded.block.markdown",\r
              "patterns": [\r
                {\r
                  "include": "text.html.markdown"\r
                }\r
              ]\r
            },\r
            "4": {\r
              "name": "punctuation.definition.raw.end.typst"\r
            }\r
          }\r
        },\r
        {\r
          "name": "markup.raw.block.typst",\r
          "begin": "(\`{6})(markdown|md)\\\\b",\r
          "beginCaptures": {\r
            "1": {\r
              "name": "punctuation.definition.raw.begin.typst"\r
            },\r
            "2": {\r
              "name": "fenced_code.block.language.typst"\r
            }\r
          },\r
          "end": "\\\\s*(\\\\1)",\r
          "endCaptures": {\r
            "1": {\r
              "name": "punctuation.definition.raw.end.typst"\r
            }\r
          },\r
          "patterns": [\r
            {\r
              "begin": "(^|\\\\G)(\\\\s*)",\r
              "while": "(^|\\\\G)(?!\\\\s*\`{6,}\\\\s*)",\r
              "contentName": "meta.embedded.block.markdown",\r
              "patterns": [\r
                {\r
                  "include": "text.html.markdown"\r
                }\r
              ]\r
            }\r
          ]\r
        },\r
        {\r
          "name": "markup.raw.block.typst",\r
          "begin": "(\`{5})(markdown|md)\\\\b",\r
          "beginCaptures": {\r
            "1": {\r
              "name": "punctuation.definition.raw.begin.typst"\r
            },\r
            "2": {\r
              "name": "fenced_code.block.language.typst"\r
            }\r
          },\r
          "end": "\\\\s*(\\\\1)",\r
          "endCaptures": {\r
            "1": {\r
              "name": "punctuation.definition.raw.end.typst"\r
            }\r
          },\r
          "patterns": [\r
            {\r
              "begin": "(^|\\\\G)(\\\\s*)",\r
              "while": "(^|\\\\G)(?!\\\\s*\`{5,}\\\\s*)",\r
              "contentName": "meta.embedded.block.markdown",\r
              "patterns": [\r
                {\r
                  "include": "text.html.markdown"\r
                }\r
              ]\r
            }\r
          ]\r
        },\r
        {\r
          "name": "markup.raw.block.typst",\r
          "begin": "(\`{4})(markdown|md)\\\\b",\r
          "beginCaptures": {\r
            "1": {\r
              "name": "punctuation.definition.raw.begin.typst"\r
            },\r
            "2": {\r
              "name": "fenced_code.block.language.typst"\r
            }\r
          },\r
          "end": "\\\\s*(\\\\1)",\r
          "endCaptures": {\r
            "1": {\r
              "name": "punctuation.definition.raw.end.typst"\r
            }\r
          },\r
          "patterns": [\r
            {\r
              "begin": "(^|\\\\G)(\\\\s*)",\r
              "while": "(^|\\\\G)(?!\\\\s*\`{4,}\\\\s*)",\r
              "contentName": "meta.embedded.block.markdown",\r
              "patterns": [\r
                {\r
                  "include": "text.html.markdown"\r
                }\r
              ]\r
            }\r
          ]\r
        },\r
        {\r
          "name": "markup.raw.block.typst",\r
          "begin": "(\`{3})(markdown|md)\\\\b",\r
          "beginCaptures": {\r
            "1": {\r
              "name": "punctuation.definition.raw.begin.typst"\r
            },\r
            "2": {\r
              "name": "fenced_code.block.language.typst"\r
            }\r
          },\r
          "end": "\\\\s*(\\\\1)",\r
          "endCaptures": {\r
            "1": {\r
              "name": "punctuation.definition.raw.end.typst"\r
            }\r
          },\r
          "patterns": [\r
            {\r
              "begin": "(^|\\\\G)(\\\\s*)",\r
              "while": "(^|\\\\G)(?!\\\\s*\`{3,}\\\\s*)",\r
              "contentName": "meta.embedded.block.markdown",\r
              "patterns": [\r
                {\r
                  "include": "text.html.markdown"\r
                }\r
              ]\r
            }\r
          ]\r
        }\r
      ]\r
    },\r
    "objc": {\r
      "lang": "objc",\r
      "patterns": [\r
        {\r
          "name": "markup.raw.block.typst",\r
          "match": "(\`{3,})(objc|objective-c|mm|obj-c|m)\\\\b(.*?)(\\\\1)",\r
          "captures": {\r
            "1": {\r
              "name": "punctuation.definition.raw.begin.typst"\r
            },\r
            "2": {\r
              "name": "fenced_code.block.language.typst"\r
            },\r
            "3": {\r
              "name": "meta.embedded.block.objc",\r
              "patterns": [\r
                {\r
                  "include": "source.objc"\r
                }\r
              ]\r
            },\r
            "4": {\r
              "name": "punctuation.definition.raw.end.typst"\r
            }\r
          }\r
        },\r
        {\r
          "name": "markup.raw.block.typst",\r
          "begin": "(\`{6})(objc|objective-c|mm|obj-c|m)\\\\b",\r
          "beginCaptures": {\r
            "1": {\r
              "name": "punctuation.definition.raw.begin.typst"\r
            },\r
            "2": {\r
              "name": "fenced_code.block.language.typst"\r
            }\r
          },\r
          "end": "\\\\s*(\\\\1)",\r
          "endCaptures": {\r
            "1": {\r
              "name": "punctuation.definition.raw.end.typst"\r
            }\r
          },\r
          "patterns": [\r
            {\r
              "begin": "(^|\\\\G)(\\\\s*)",\r
              "while": "(^|\\\\G)(?!\\\\s*\`{6,}\\\\s*)",\r
              "contentName": "meta.embedded.block.objc",\r
              "patterns": [\r
                {\r
                  "include": "source.objc"\r
                }\r
              ]\r
            }\r
          ]\r
        },\r
        {\r
          "name": "markup.raw.block.typst",\r
          "begin": "(\`{5})(objc|objective-c|mm|obj-c|m)\\\\b",\r
          "beginCaptures": {\r
            "1": {\r
              "name": "punctuation.definition.raw.begin.typst"\r
            },\r
            "2": {\r
              "name": "fenced_code.block.language.typst"\r
            }\r
          },\r
          "end": "\\\\s*(\\\\1)",\r
          "endCaptures": {\r
            "1": {\r
              "name": "punctuation.definition.raw.end.typst"\r
            }\r
          },\r
          "patterns": [\r
            {\r
              "begin": "(^|\\\\G)(\\\\s*)",\r
              "while": "(^|\\\\G)(?!\\\\s*\`{5,}\\\\s*)",\r
              "contentName": "meta.embedded.block.objc",\r
              "patterns": [\r
                {\r
                  "include": "source.objc"\r
                }\r
              ]\r
            }\r
          ]\r
        },\r
        {\r
          "name": "markup.raw.block.typst",\r
          "begin": "(\`{4})(objc|objective-c|mm|obj-c|m)\\\\b",\r
          "beginCaptures": {\r
            "1": {\r
              "name": "punctuation.definition.raw.begin.typst"\r
            },\r
            "2": {\r
              "name": "fenced_code.block.language.typst"\r
            }\r
          },\r
          "end": "\\\\s*(\\\\1)",\r
          "endCaptures": {\r
            "1": {\r
              "name": "punctuation.definition.raw.end.typst"\r
            }\r
          },\r
          "patterns": [\r
            {\r
              "begin": "(^|\\\\G)(\\\\s*)",\r
              "while": "(^|\\\\G)(?!\\\\s*\`{4,}\\\\s*)",\r
              "contentName": "meta.embedded.block.objc",\r
              "patterns": [\r
                {\r
                  "include": "source.objc"\r
                }\r
              ]\r
            }\r
          ]\r
        },\r
        {\r
          "name": "markup.raw.block.typst",\r
          "begin": "(\`{3})(objc|objective-c|mm|obj-c|m)\\\\b",\r
          "beginCaptures": {\r
            "1": {\r
              "name": "punctuation.definition.raw.begin.typst"\r
            },\r
            "2": {\r
              "name": "fenced_code.block.language.typst"\r
            }\r
          },\r
          "end": "\\\\s*(\\\\1)",\r
          "endCaptures": {\r
            "1": {\r
              "name": "punctuation.definition.raw.end.typst"\r
            }\r
          },\r
          "patterns": [\r
            {\r
              "begin": "(^|\\\\G)(\\\\s*)",\r
              "while": "(^|\\\\G)(?!\\\\s*\`{3,}\\\\s*)",\r
              "contentName": "meta.embedded.block.objc",\r
              "patterns": [\r
                {\r
                  "include": "source.objc"\r
                }\r
              ]\r
            }\r
          ]\r
        }\r
      ]\r
    },\r
    "perl": {\r
      "lang": "perl",\r
      "patterns": [\r
        {\r
          "name": "markup.raw.block.typst",\r
          "match": "(\`{3,})(perl|pl|pm|pod|t|PL|psgi|vcl)\\\\b(.*?)(\\\\1)",\r
          "captures": {\r
            "1": {\r
              "name": "punctuation.definition.raw.begin.typst"\r
            },\r
            "2": {\r
              "name": "fenced_code.block.language.typst"\r
            },\r
            "3": {\r
              "name": "meta.embedded.block.perl",\r
              "patterns": [\r
                {\r
                  "include": "source.perl"\r
                }\r
              ]\r
            },\r
            "4": {\r
              "name": "punctuation.definition.raw.end.typst"\r
            }\r
          }\r
        },\r
        {\r
          "name": "markup.raw.block.typst",\r
          "begin": "(\`{6})(perl|pl|pm|pod|t|PL|psgi|vcl)\\\\b",\r
          "beginCaptures": {\r
            "1": {\r
              "name": "punctuation.definition.raw.begin.typst"\r
            },\r
            "2": {\r
              "name": "fenced_code.block.language.typst"\r
            }\r
          },\r
          "end": "\\\\s*(\\\\1)",\r
          "endCaptures": {\r
            "1": {\r
              "name": "punctuation.definition.raw.end.typst"\r
            }\r
          },\r
          "patterns": [\r
            {\r
              "begin": "(^|\\\\G)(\\\\s*)",\r
              "while": "(^|\\\\G)(?!\\\\s*\`{6,}\\\\s*)",\r
              "contentName": "meta.embedded.block.perl",\r
              "patterns": [\r
                {\r
                  "include": "source.perl"\r
                }\r
              ]\r
            }\r
          ]\r
        },\r
        {\r
          "name": "markup.raw.block.typst",\r
          "begin": "(\`{5})(perl|pl|pm|pod|t|PL|psgi|vcl)\\\\b",\r
          "beginCaptures": {\r
            "1": {\r
              "name": "punctuation.definition.raw.begin.typst"\r
            },\r
            "2": {\r
              "name": "fenced_code.block.language.typst"\r
            }\r
          },\r
          "end": "\\\\s*(\\\\1)",\r
          "endCaptures": {\r
            "1": {\r
              "name": "punctuation.definition.raw.end.typst"\r
            }\r
          },\r
          "patterns": [\r
            {\r
              "begin": "(^|\\\\G)(\\\\s*)",\r
              "while": "(^|\\\\G)(?!\\\\s*\`{5,}\\\\s*)",\r
              "contentName": "meta.embedded.block.perl",\r
              "patterns": [\r
                {\r
                  "include": "source.perl"\r
                }\r
              ]\r
            }\r
          ]\r
        },\r
        {\r
          "name": "markup.raw.block.typst",\r
          "begin": "(\`{4})(perl|pl|pm|pod|t|PL|psgi|vcl)\\\\b",\r
          "beginCaptures": {\r
            "1": {\r
              "name": "punctuation.definition.raw.begin.typst"\r
            },\r
            "2": {\r
              "name": "fenced_code.block.language.typst"\r
            }\r
          },\r
          "end": "\\\\s*(\\\\1)",\r
          "endCaptures": {\r
            "1": {\r
              "name": "punctuation.definition.raw.end.typst"\r
            }\r
          },\r
          "patterns": [\r
            {\r
              "begin": "(^|\\\\G)(\\\\s*)",\r
              "while": "(^|\\\\G)(?!\\\\s*\`{4,}\\\\s*)",\r
              "contentName": "meta.embedded.block.perl",\r
              "patterns": [\r
                {\r
                  "include": "source.perl"\r
                }\r
              ]\r
            }\r
          ]\r
        },\r
        {\r
          "name": "markup.raw.block.typst",\r
          "begin": "(\`{3})(perl|pl|pm|pod|t|PL|psgi|vcl)\\\\b",\r
          "beginCaptures": {\r
            "1": {\r
              "name": "punctuation.definition.raw.begin.typst"\r
            },\r
            "2": {\r
              "name": "fenced_code.block.language.typst"\r
            }\r
          },\r
          "end": "\\\\s*(\\\\1)",\r
          "endCaptures": {\r
            "1": {\r
              "name": "punctuation.definition.raw.end.typst"\r
            }\r
          },\r
          "patterns": [\r
            {\r
              "begin": "(^|\\\\G)(\\\\s*)",\r
              "while": "(^|\\\\G)(?!\\\\s*\`{3,}\\\\s*)",\r
              "contentName": "meta.embedded.block.perl",\r
              "patterns": [\r
                {\r
                  "include": "source.perl"\r
                }\r
              ]\r
            }\r
          ]\r
        }\r
      ]\r
    },\r
    "perl6": {\r
      "lang": "perl6",\r
      "patterns": [\r
        {\r
          "name": "markup.raw.block.typst",\r
          "match": "(\`{3,})(perl6|p6|pl6|pm6|nqp)\\\\b(.*?)(\\\\1)",\r
          "captures": {\r
            "1": {\r
              "name": "punctuation.definition.raw.begin.typst"\r
            },\r
            "2": {\r
              "name": "fenced_code.block.language.typst"\r
            },\r
            "3": {\r
              "name": "meta.embedded.block.perl6",\r
              "patterns": [\r
                {\r
                  "include": "source.perl.6"\r
                }\r
              ]\r
            },\r
            "4": {\r
              "name": "punctuation.definition.raw.end.typst"\r
            }\r
          }\r
        },\r
        {\r
          "name": "markup.raw.block.typst",\r
          "begin": "(\`{6})(perl6|p6|pl6|pm6|nqp)\\\\b",\r
          "beginCaptures": {\r
            "1": {\r
              "name": "punctuation.definition.raw.begin.typst"\r
            },\r
            "2": {\r
              "name": "fenced_code.block.language.typst"\r
            }\r
          },\r
          "end": "\\\\s*(\\\\1)",\r
          "endCaptures": {\r
            "1": {\r
              "name": "punctuation.definition.raw.end.typst"\r
            }\r
          },\r
          "patterns": [\r
            {\r
              "begin": "(^|\\\\G)(\\\\s*)",\r
              "while": "(^|\\\\G)(?!\\\\s*\`{6,}\\\\s*)",\r
              "contentName": "meta.embedded.block.perl6",\r
              "patterns": [\r
                {\r
                  "include": "source.perl.6"\r
                }\r
              ]\r
            }\r
          ]\r
        },\r
        {\r
          "name": "markup.raw.block.typst",\r
          "begin": "(\`{5})(perl6|p6|pl6|pm6|nqp)\\\\b",\r
          "beginCaptures": {\r
            "1": {\r
              "name": "punctuation.definition.raw.begin.typst"\r
            },\r
            "2": {\r
              "name": "fenced_code.block.language.typst"\r
            }\r
          },\r
          "end": "\\\\s*(\\\\1)",\r
          "endCaptures": {\r
            "1": {\r
              "name": "punctuation.definition.raw.end.typst"\r
            }\r
          },\r
          "patterns": [\r
            {\r
              "begin": "(^|\\\\G)(\\\\s*)",\r
              "while": "(^|\\\\G)(?!\\\\s*\`{5,}\\\\s*)",\r
              "contentName": "meta.embedded.block.perl6",\r
              "patterns": [\r
                {\r
                  "include": "source.perl.6"\r
                }\r
              ]\r
            }\r
          ]\r
        },\r
        {\r
          "name": "markup.raw.block.typst",\r
          "begin": "(\`{4})(perl6|p6|pl6|pm6|nqp)\\\\b",\r
          "beginCaptures": {\r
            "1": {\r
              "name": "punctuation.definition.raw.begin.typst"\r
            },\r
            "2": {\r
              "name": "fenced_code.block.language.typst"\r
            }\r
          },\r
          "end": "\\\\s*(\\\\1)",\r
          "endCaptures": {\r
            "1": {\r
              "name": "punctuation.definition.raw.end.typst"\r
            }\r
          },\r
          "patterns": [\r
            {\r
              "begin": "(^|\\\\G)(\\\\s*)",\r
              "while": "(^|\\\\G)(?!\\\\s*\`{4,}\\\\s*)",\r
              "contentName": "meta.embedded.block.perl6",\r
              "patterns": [\r
                {\r
                  "include": "source.perl.6"\r
                }\r
              ]\r
            }\r
          ]\r
        },\r
        {\r
          "name": "markup.raw.block.typst",\r
          "begin": "(\`{3})(perl6|p6|pl6|pm6|nqp)\\\\b",\r
          "beginCaptures": {\r
            "1": {\r
              "name": "punctuation.definition.raw.begin.typst"\r
            },\r
            "2": {\r
              "name": "fenced_code.block.language.typst"\r
            }\r
          },\r
          "end": "\\\\s*(\\\\1)",\r
          "endCaptures": {\r
            "1": {\r
              "name": "punctuation.definition.raw.end.typst"\r
            }\r
          },\r
          "patterns": [\r
            {\r
              "begin": "(^|\\\\G)(\\\\s*)",\r
              "while": "(^|\\\\G)(?!\\\\s*\`{3,}\\\\s*)",\r
              "contentName": "meta.embedded.block.perl6",\r
              "patterns": [\r
                {\r
                  "include": "source.perl.6"\r
                }\r
              ]\r
            }\r
          ]\r
        }\r
      ]\r
    },\r
    "php": {\r
      "lang": "php",\r
      "patterns": [\r
        {\r
          "name": "markup.raw.block.typst",\r
          "match": "(\`{3,})(php|php|php3|php4|php5|phtml|aw|ctp)\\\\b(.*?)(\\\\1)",\r
          "captures": {\r
            "1": {\r
              "name": "punctuation.definition.raw.begin.typst"\r
            },\r
            "2": {\r
              "name": "fenced_code.block.language.typst"\r
            },\r
            "3": {\r
              "name": "meta.embedded.block.php",\r
              "patterns": [\r
                {\r
                  "include": "text.html.basic"\r
                },\r
                {\r
                  "include": "source.php"\r
                }\r
              ]\r
            },\r
            "4": {\r
              "name": "punctuation.definition.raw.end.typst"\r
            }\r
          }\r
        },\r
        {\r
          "name": "markup.raw.block.typst",\r
          "begin": "(\`{6})(php|php|php3|php4|php5|phtml|aw|ctp)\\\\b",\r
          "beginCaptures": {\r
            "1": {\r
              "name": "punctuation.definition.raw.begin.typst"\r
            },\r
            "2": {\r
              "name": "fenced_code.block.language.typst"\r
            }\r
          },\r
          "end": "\\\\s*(\\\\1)",\r
          "endCaptures": {\r
            "1": {\r
              "name": "punctuation.definition.raw.end.typst"\r
            }\r
          },\r
          "patterns": [\r
            {\r
              "begin": "(^|\\\\G)(\\\\s*)",\r
              "while": "(^|\\\\G)(?!\\\\s*\`{6,}\\\\s*)",\r
              "contentName": "meta.embedded.block.php",\r
              "patterns": [\r
                {\r
                  "include": "text.html.basic"\r
                },\r
                {\r
                  "include": "source.php"\r
                }\r
              ]\r
            }\r
          ]\r
        },\r
        {\r
          "name": "markup.raw.block.typst",\r
          "begin": "(\`{5})(php|php|php3|php4|php5|phtml|aw|ctp)\\\\b",\r
          "beginCaptures": {\r
            "1": {\r
              "name": "punctuation.definition.raw.begin.typst"\r
            },\r
            "2": {\r
              "name": "fenced_code.block.language.typst"\r
            }\r
          },\r
          "end": "\\\\s*(\\\\1)",\r
          "endCaptures": {\r
            "1": {\r
              "name": "punctuation.definition.raw.end.typst"\r
            }\r
          },\r
          "patterns": [\r
            {\r
              "begin": "(^|\\\\G)(\\\\s*)",\r
              "while": "(^|\\\\G)(?!\\\\s*\`{5,}\\\\s*)",\r
              "contentName": "meta.embedded.block.php",\r
              "patterns": [\r
                {\r
                  "include": "text.html.basic"\r
                },\r
                {\r
                  "include": "source.php"\r
                }\r
              ]\r
            }\r
          ]\r
        },\r
        {\r
          "name": "markup.raw.block.typst",\r
          "begin": "(\`{4})(php|php|php3|php4|php5|phtml|aw|ctp)\\\\b",\r
          "beginCaptures": {\r
            "1": {\r
              "name": "punctuation.definition.raw.begin.typst"\r
            },\r
            "2": {\r
              "name": "fenced_code.block.language.typst"\r
            }\r
          },\r
          "end": "\\\\s*(\\\\1)",\r
          "endCaptures": {\r
            "1": {\r
              "name": "punctuation.definition.raw.end.typst"\r
            }\r
          },\r
          "patterns": [\r
            {\r
              "begin": "(^|\\\\G)(\\\\s*)",\r
              "while": "(^|\\\\G)(?!\\\\s*\`{4,}\\\\s*)",\r
              "contentName": "meta.embedded.block.php",\r
              "patterns": [\r
                {\r
                  "include": "text.html.basic"\r
                },\r
                {\r
                  "include": "source.php"\r
                }\r
              ]\r
            }\r
          ]\r
        },\r
        {\r
          "name": "markup.raw.block.typst",\r
          "begin": "(\`{3})(php|php|php3|php4|php5|phtml|aw|ctp)\\\\b",\r
          "beginCaptures": {\r
            "1": {\r
              "name": "punctuation.definition.raw.begin.typst"\r
            },\r
            "2": {\r
              "name": "fenced_code.block.language.typst"\r
            }\r
          },\r
          "end": "\\\\s*(\\\\1)",\r
          "endCaptures": {\r
            "1": {\r
              "name": "punctuation.definition.raw.end.typst"\r
            }\r
          },\r
          "patterns": [\r
            {\r
              "begin": "(^|\\\\G)(\\\\s*)",\r
              "while": "(^|\\\\G)(?!\\\\s*\`{3,}\\\\s*)",\r
              "contentName": "meta.embedded.block.php",\r
              "patterns": [\r
                {\r
                  "include": "text.html.basic"\r
                },\r
                {\r
                  "include": "source.php"\r
                }\r
              ]\r
            }\r
          ]\r
        }\r
      ]\r
    },\r
    "powershell": {\r
      "lang": "powershell",\r
      "patterns": [\r
        {\r
          "name": "markup.raw.block.typst",\r
          "match": "(\`{3,})(powershell|ps1|psm1|psd1)\\\\b(.*?)(\\\\1)",\r
          "captures": {\r
            "1": {\r
              "name": "punctuation.definition.raw.begin.typst"\r
            },\r
            "2": {\r
              "name": "fenced_code.block.language.typst"\r
            },\r
            "3": {\r
              "name": "meta.embedded.block.powershell",\r
              "patterns": [\r
                {\r
                  "include": "source.powershell"\r
                }\r
              ]\r
            },\r
            "4": {\r
              "name": "punctuation.definition.raw.end.typst"\r
            }\r
          }\r
        },\r
        {\r
          "name": "markup.raw.block.typst",\r
          "begin": "(\`{6})(powershell|ps1|psm1|psd1)\\\\b",\r
          "beginCaptures": {\r
            "1": {\r
              "name": "punctuation.definition.raw.begin.typst"\r
            },\r
            "2": {\r
              "name": "fenced_code.block.language.typst"\r
            }\r
          },\r
          "end": "\\\\s*(\\\\1)",\r
          "endCaptures": {\r
            "1": {\r
              "name": "punctuation.definition.raw.end.typst"\r
            }\r
          },\r
          "patterns": [\r
            {\r
              "begin": "(^|\\\\G)(\\\\s*)",\r
              "while": "(^|\\\\G)(?!\\\\s*\`{6,}\\\\s*)",\r
              "contentName": "meta.embedded.block.powershell",\r
              "patterns": [\r
                {\r
                  "include": "source.powershell"\r
                }\r
              ]\r
            }\r
          ]\r
        },\r
        {\r
          "name": "markup.raw.block.typst",\r
          "begin": "(\`{5})(powershell|ps1|psm1|psd1)\\\\b",\r
          "beginCaptures": {\r
            "1": {\r
              "name": "punctuation.definition.raw.begin.typst"\r
            },\r
            "2": {\r
              "name": "fenced_code.block.language.typst"\r
            }\r
          },\r
          "end": "\\\\s*(\\\\1)",\r
          "endCaptures": {\r
            "1": {\r
              "name": "punctuation.definition.raw.end.typst"\r
            }\r
          },\r
          "patterns": [\r
            {\r
              "begin": "(^|\\\\G)(\\\\s*)",\r
              "while": "(^|\\\\G)(?!\\\\s*\`{5,}\\\\s*)",\r
              "contentName": "meta.embedded.block.powershell",\r
              "patterns": [\r
                {\r
                  "include": "source.powershell"\r
                }\r
              ]\r
            }\r
          ]\r
        },\r
        {\r
          "name": "markup.raw.block.typst",\r
          "begin": "(\`{4})(powershell|ps1|psm1|psd1)\\\\b",\r
          "beginCaptures": {\r
            "1": {\r
              "name": "punctuation.definition.raw.begin.typst"\r
            },\r
            "2": {\r
              "name": "fenced_code.block.language.typst"\r
            }\r
          },\r
          "end": "\\\\s*(\\\\1)",\r
          "endCaptures": {\r
            "1": {\r
              "name": "punctuation.definition.raw.end.typst"\r
            }\r
          },\r
          "patterns": [\r
            {\r
              "begin": "(^|\\\\G)(\\\\s*)",\r
              "while": "(^|\\\\G)(?!\\\\s*\`{4,}\\\\s*)",\r
              "contentName": "meta.embedded.block.powershell",\r
              "patterns": [\r
                {\r
                  "include": "source.powershell"\r
                }\r
              ]\r
            }\r
          ]\r
        },\r
        {\r
          "name": "markup.raw.block.typst",\r
          "begin": "(\`{3})(powershell|ps1|psm1|psd1)\\\\b",\r
          "beginCaptures": {\r
            "1": {\r
              "name": "punctuation.definition.raw.begin.typst"\r
            },\r
            "2": {\r
              "name": "fenced_code.block.language.typst"\r
            }\r
          },\r
          "end": "\\\\s*(\\\\1)",\r
          "endCaptures": {\r
            "1": {\r
              "name": "punctuation.definition.raw.end.typst"\r
            }\r
          },\r
          "patterns": [\r
            {\r
              "begin": "(^|\\\\G)(\\\\s*)",\r
              "while": "(^|\\\\G)(?!\\\\s*\`{3,}\\\\s*)",\r
              "contentName": "meta.embedded.block.powershell",\r
              "patterns": [\r
                {\r
                  "include": "source.powershell"\r
                }\r
              ]\r
            }\r
          ]\r
        }\r
      ]\r
    },\r
    "pug": {\r
      "lang": "pug",\r
      "patterns": [\r
        {\r
          "name": "markup.raw.block.typst",\r
          "match": "(\`{3,})(pug|jade)\\\\b(.*?)(\\\\1)",\r
          "captures": {\r
            "1": {\r
              "name": "punctuation.definition.raw.begin.typst"\r
            },\r
            "2": {\r
              "name": "fenced_code.block.language.typst"\r
            },\r
            "3": {\r
              "name": "meta.embedded.block.pug",\r
              "patterns": [\r
                {\r
                  "include": "text.pug"\r
                }\r
              ]\r
            },\r
            "4": {\r
              "name": "punctuation.definition.raw.end.typst"\r
            }\r
          }\r
        },\r
        {\r
          "name": "markup.raw.block.typst",\r
          "begin": "(\`{6})(pug|jade)\\\\b",\r
          "beginCaptures": {\r
            "1": {\r
              "name": "punctuation.definition.raw.begin.typst"\r
            },\r
            "2": {\r
              "name": "fenced_code.block.language.typst"\r
            }\r
          },\r
          "end": "\\\\s*(\\\\1)",\r
          "endCaptures": {\r
            "1": {\r
              "name": "punctuation.definition.raw.end.typst"\r
            }\r
          },\r
          "patterns": [\r
            {\r
              "begin": "(^|\\\\G)(\\\\s*)",\r
              "while": "(^|\\\\G)(?!\\\\s*\`{6,}\\\\s*)",\r
              "contentName": "meta.embedded.block.pug",\r
              "patterns": [\r
                {\r
                  "include": "text.pug"\r
                }\r
              ]\r
            }\r
          ]\r
        },\r
        {\r
          "name": "markup.raw.block.typst",\r
          "begin": "(\`{5})(pug|jade)\\\\b",\r
          "beginCaptures": {\r
            "1": {\r
              "name": "punctuation.definition.raw.begin.typst"\r
            },\r
            "2": {\r
              "name": "fenced_code.block.language.typst"\r
            }\r
          },\r
          "end": "\\\\s*(\\\\1)",\r
          "endCaptures": {\r
            "1": {\r
              "name": "punctuation.definition.raw.end.typst"\r
            }\r
          },\r
          "patterns": [\r
            {\r
              "begin": "(^|\\\\G)(\\\\s*)",\r
              "while": "(^|\\\\G)(?!\\\\s*\`{5,}\\\\s*)",\r
              "contentName": "meta.embedded.block.pug",\r
              "patterns": [\r
                {\r
                  "include": "text.pug"\r
                }\r
              ]\r
            }\r
          ]\r
        },\r
        {\r
          "name": "markup.raw.block.typst",\r
          "begin": "(\`{4})(pug|jade)\\\\b",\r
          "beginCaptures": {\r
            "1": {\r
              "name": "punctuation.definition.raw.begin.typst"\r
            },\r
            "2": {\r
              "name": "fenced_code.block.language.typst"\r
            }\r
          },\r
          "end": "\\\\s*(\\\\1)",\r
          "endCaptures": {\r
            "1": {\r
              "name": "punctuation.definition.raw.end.typst"\r
            }\r
          },\r
          "patterns": [\r
            {\r
              "begin": "(^|\\\\G)(\\\\s*)",\r
              "while": "(^|\\\\G)(?!\\\\s*\`{4,}\\\\s*)",\r
              "contentName": "meta.embedded.block.pug",\r
              "patterns": [\r
                {\r
                  "include": "text.pug"\r
                }\r
              ]\r
            }\r
          ]\r
        },\r
        {\r
          "name": "markup.raw.block.typst",\r
          "begin": "(\`{3})(pug|jade)\\\\b",\r
          "beginCaptures": {\r
            "1": {\r
              "name": "punctuation.definition.raw.begin.typst"\r
            },\r
            "2": {\r
              "name": "fenced_code.block.language.typst"\r
            }\r
          },\r
          "end": "\\\\s*(\\\\1)",\r
          "endCaptures": {\r
            "1": {\r
              "name": "punctuation.definition.raw.end.typst"\r
            }\r
          },\r
          "patterns": [\r
            {\r
              "begin": "(^|\\\\G)(\\\\s*)",\r
              "while": "(^|\\\\G)(?!\\\\s*\`{3,}\\\\s*)",\r
              "contentName": "meta.embedded.block.pug",\r
              "patterns": [\r
                {\r
                  "include": "text.pug"\r
                }\r
              ]\r
            }\r
          ]\r
        }\r
      ]\r
    },\r
    "r": {\r
      "lang": "r",\r
      "patterns": [\r
        {\r
          "name": "markup.raw.block.typst",\r
          "match": "(\`{3,})(r|R|r|s|S|Rprofile)\\\\b(.*?)(\\\\1)",\r
          "captures": {\r
            "1": {\r
              "name": "punctuation.definition.raw.begin.typst"\r
            },\r
            "2": {\r
              "name": "fenced_code.block.language.typst"\r
            },\r
            "3": {\r
              "name": "meta.embedded.block.r",\r
              "patterns": [\r
                {\r
                  "include": "source.r"\r
                }\r
              ]\r
            },\r
            "4": {\r
              "name": "punctuation.definition.raw.end.typst"\r
            }\r
          }\r
        },\r
        {\r
          "name": "markup.raw.block.typst",\r
          "begin": "(\`{6})(r|R|r|s|S|Rprofile)\\\\b",\r
          "beginCaptures": {\r
            "1": {\r
              "name": "punctuation.definition.raw.begin.typst"\r
            },\r
            "2": {\r
              "name": "fenced_code.block.language.typst"\r
            }\r
          },\r
          "end": "\\\\s*(\\\\1)",\r
          "endCaptures": {\r
            "1": {\r
              "name": "punctuation.definition.raw.end.typst"\r
            }\r
          },\r
          "patterns": [\r
            {\r
              "begin": "(^|\\\\G)(\\\\s*)",\r
              "while": "(^|\\\\G)(?!\\\\s*\`{6,}\\\\s*)",\r
              "contentName": "meta.embedded.block.r",\r
              "patterns": [\r
                {\r
                  "include": "source.r"\r
                }\r
              ]\r
            }\r
          ]\r
        },\r
        {\r
          "name": "markup.raw.block.typst",\r
          "begin": "(\`{5})(r|R|r|s|S|Rprofile)\\\\b",\r
          "beginCaptures": {\r
            "1": {\r
              "name": "punctuation.definition.raw.begin.typst"\r
            },\r
            "2": {\r
              "name": "fenced_code.block.language.typst"\r
            }\r
          },\r
          "end": "\\\\s*(\\\\1)",\r
          "endCaptures": {\r
            "1": {\r
              "name": "punctuation.definition.raw.end.typst"\r
            }\r
          },\r
          "patterns": [\r
            {\r
              "begin": "(^|\\\\G)(\\\\s*)",\r
              "while": "(^|\\\\G)(?!\\\\s*\`{5,}\\\\s*)",\r
              "contentName": "meta.embedded.block.r",\r
              "patterns": [\r
                {\r
                  "include": "source.r"\r
                }\r
              ]\r
            }\r
          ]\r
        },\r
        {\r
          "name": "markup.raw.block.typst",\r
          "begin": "(\`{4})(r|R|r|s|S|Rprofile)\\\\b",\r
          "beginCaptures": {\r
            "1": {\r
              "name": "punctuation.definition.raw.begin.typst"\r
            },\r
            "2": {\r
              "name": "fenced_code.block.language.typst"\r
            }\r
          },\r
          "end": "\\\\s*(\\\\1)",\r
          "endCaptures": {\r
            "1": {\r
              "name": "punctuation.definition.raw.end.typst"\r
            }\r
          },\r
          "patterns": [\r
            {\r
              "begin": "(^|\\\\G)(\\\\s*)",\r
              "while": "(^|\\\\G)(?!\\\\s*\`{4,}\\\\s*)",\r
              "contentName": "meta.embedded.block.r",\r
              "patterns": [\r
                {\r
                  "include": "source.r"\r
                }\r
              ]\r
            }\r
          ]\r
        },\r
        {\r
          "name": "markup.raw.block.typst",\r
          "begin": "(\`{3})(r|R|r|s|S|Rprofile)\\\\b",\r
          "beginCaptures": {\r
            "1": {\r
              "name": "punctuation.definition.raw.begin.typst"\r
            },\r
            "2": {\r
              "name": "fenced_code.block.language.typst"\r
            }\r
          },\r
          "end": "\\\\s*(\\\\1)",\r
          "endCaptures": {\r
            "1": {\r
              "name": "punctuation.definition.raw.end.typst"\r
            }\r
          },\r
          "patterns": [\r
            {\r
              "begin": "(^|\\\\G)(\\\\s*)",\r
              "while": "(^|\\\\G)(?!\\\\s*\`{3,}\\\\s*)",\r
              "contentName": "meta.embedded.block.r",\r
              "patterns": [\r
                {\r
                  "include": "source.r"\r
                }\r
              ]\r
            }\r
          ]\r
        }\r
      ]\r
    },\r
    "regexp": {\r
      "lang": "regexp",\r
      "patterns": [\r
        {\r
          "name": "markup.raw.block.typst",\r
          "match": "(\`{3,})(regexp)\\\\b(.*?)(\\\\1)",\r
          "captures": {\r
            "1": {\r
              "name": "punctuation.definition.raw.begin.typst"\r
            },\r
            "2": {\r
              "name": "fenced_code.block.language.typst"\r
            },\r
            "3": {\r
              "name": "meta.embedded.block.regexp",\r
              "patterns": [\r
                {\r
                  "include": "source.js.regexp"\r
                }\r
              ]\r
            },\r
            "4": {\r
              "name": "punctuation.definition.raw.end.typst"\r
            }\r
          }\r
        },\r
        {\r
          "name": "markup.raw.block.typst",\r
          "begin": "(\`{6})(regexp)\\\\b",\r
          "beginCaptures": {\r
            "1": {\r
              "name": "punctuation.definition.raw.begin.typst"\r
            },\r
            "2": {\r
              "name": "fenced_code.block.language.typst"\r
            }\r
          },\r
          "end": "\\\\s*(\\\\1)",\r
          "endCaptures": {\r
            "1": {\r
              "name": "punctuation.definition.raw.end.typst"\r
            }\r
          },\r
          "patterns": [\r
            {\r
              "begin": "(^|\\\\G)(\\\\s*)",\r
              "while": "(^|\\\\G)(?!\\\\s*\`{6,}\\\\s*)",\r
              "contentName": "meta.embedded.block.regexp",\r
              "patterns": [\r
                {\r
                  "include": "source.js.regexp"\r
                }\r
              ]\r
            }\r
          ]\r
        },\r
        {\r
          "name": "markup.raw.block.typst",\r
          "begin": "(\`{5})(regexp)\\\\b",\r
          "beginCaptures": {\r
            "1": {\r
              "name": "punctuation.definition.raw.begin.typst"\r
            },\r
            "2": {\r
              "name": "fenced_code.block.language.typst"\r
            }\r
          },\r
          "end": "\\\\s*(\\\\1)",\r
          "endCaptures": {\r
            "1": {\r
              "name": "punctuation.definition.raw.end.typst"\r
            }\r
          },\r
          "patterns": [\r
            {\r
              "begin": "(^|\\\\G)(\\\\s*)",\r
              "while": "(^|\\\\G)(?!\\\\s*\`{5,}\\\\s*)",\r
              "contentName": "meta.embedded.block.regexp",\r
              "patterns": [\r
                {\r
                  "include": "source.js.regexp"\r
                }\r
              ]\r
            }\r
          ]\r
        },\r
        {\r
          "name": "markup.raw.block.typst",\r
          "begin": "(\`{4})(regexp)\\\\b",\r
          "beginCaptures": {\r
            "1": {\r
              "name": "punctuation.definition.raw.begin.typst"\r
            },\r
            "2": {\r
              "name": "fenced_code.block.language.typst"\r
            }\r
          },\r
          "end": "\\\\s*(\\\\1)",\r
          "endCaptures": {\r
            "1": {\r
              "name": "punctuation.definition.raw.end.typst"\r
            }\r
          },\r
          "patterns": [\r
            {\r
              "begin": "(^|\\\\G)(\\\\s*)",\r
              "while": "(^|\\\\G)(?!\\\\s*\`{4,}\\\\s*)",\r
              "contentName": "meta.embedded.block.regexp",\r
              "patterns": [\r
                {\r
                  "include": "source.js.regexp"\r
                }\r
              ]\r
            }\r
          ]\r
        },\r
        {\r
          "name": "markup.raw.block.typst",\r
          "begin": "(\`{3})(regexp)\\\\b",\r
          "beginCaptures": {\r
            "1": {\r
              "name": "punctuation.definition.raw.begin.typst"\r
            },\r
            "2": {\r
              "name": "fenced_code.block.language.typst"\r
            }\r
          },\r
          "end": "\\\\s*(\\\\1)",\r
          "endCaptures": {\r
            "1": {\r
              "name": "punctuation.definition.raw.end.typst"\r
            }\r
          },\r
          "patterns": [\r
            {\r
              "begin": "(^|\\\\G)(\\\\s*)",\r
              "while": "(^|\\\\G)(?!\\\\s*\`{3,}\\\\s*)",\r
              "contentName": "meta.embedded.block.regexp",\r
              "patterns": [\r
                {\r
                  "include": "source.js.regexp"\r
                }\r
              ]\r
            }\r
          ]\r
        }\r
      ]\r
    },\r
    "re": {\r
      "lang": "re",\r
      "patterns": [\r
        {\r
          "name": "markup.raw.block.typst",\r
          "match": "(\`{3,})(re)\\\\b(.*?)(\\\\1)",\r
          "captures": {\r
            "1": {\r
              "name": "punctuation.definition.raw.begin.typst"\r
            },\r
            "2": {\r
              "name": "fenced_code.block.language.typst"\r
            },\r
            "3": {\r
              "name": "meta.embedded.block.re",\r
              "patterns": [\r
                {\r
                  "include": "source.regexp.python"\r
                }\r
              ]\r
            },\r
            "4": {\r
              "name": "punctuation.definition.raw.end.typst"\r
            }\r
          }\r
        },\r
        {\r
          "name": "markup.raw.block.typst",\r
          "begin": "(\`{6})(re)\\\\b",\r
          "beginCaptures": {\r
            "1": {\r
              "name": "punctuation.definition.raw.begin.typst"\r
            },\r
            "2": {\r
              "name": "fenced_code.block.language.typst"\r
            }\r
          },\r
          "end": "\\\\s*(\\\\1)",\r
          "endCaptures": {\r
            "1": {\r
              "name": "punctuation.definition.raw.end.typst"\r
            }\r
          },\r
          "patterns": [\r
            {\r
              "begin": "(^|\\\\G)(\\\\s*)",\r
              "while": "(^|\\\\G)(?!\\\\s*\`{6,}\\\\s*)",\r
              "contentName": "meta.embedded.block.re",\r
              "patterns": [\r
                {\r
                  "include": "source.regexp.python"\r
                }\r
              ]\r
            }\r
          ]\r
        },\r
        {\r
          "name": "markup.raw.block.typst",\r
          "begin": "(\`{5})(re)\\\\b",\r
          "beginCaptures": {\r
            "1": {\r
              "name": "punctuation.definition.raw.begin.typst"\r
            },\r
            "2": {\r
              "name": "fenced_code.block.language.typst"\r
            }\r
          },\r
          "end": "\\\\s*(\\\\1)",\r
          "endCaptures": {\r
            "1": {\r
              "name": "punctuation.definition.raw.end.typst"\r
            }\r
          },\r
          "patterns": [\r
            {\r
              "begin": "(^|\\\\G)(\\\\s*)",\r
              "while": "(^|\\\\G)(?!\\\\s*\`{5,}\\\\s*)",\r
              "contentName": "meta.embedded.block.re",\r
              "patterns": [\r
                {\r
                  "include": "source.regexp.python"\r
                }\r
              ]\r
            }\r
          ]\r
        },\r
        {\r
          "name": "markup.raw.block.typst",\r
          "begin": "(\`{4})(re)\\\\b",\r
          "beginCaptures": {\r
            "1": {\r
              "name": "punctuation.definition.raw.begin.typst"\r
            },\r
            "2": {\r
              "name": "fenced_code.block.language.typst"\r
            }\r
          },\r
          "end": "\\\\s*(\\\\1)",\r
          "endCaptures": {\r
            "1": {\r
              "name": "punctuation.definition.raw.end.typst"\r
            }\r
          },\r
          "patterns": [\r
            {\r
              "begin": "(^|\\\\G)(\\\\s*)",\r
              "while": "(^|\\\\G)(?!\\\\s*\`{4,}\\\\s*)",\r
              "contentName": "meta.embedded.block.re",\r
              "patterns": [\r
                {\r
                  "include": "source.regexp.python"\r
                }\r
              ]\r
            }\r
          ]\r
        },\r
        {\r
          "name": "markup.raw.block.typst",\r
          "begin": "(\`{3})(re)\\\\b",\r
          "beginCaptures": {\r
            "1": {\r
              "name": "punctuation.definition.raw.begin.typst"\r
            },\r
            "2": {\r
              "name": "fenced_code.block.language.typst"\r
            }\r
          },\r
          "end": "\\\\s*(\\\\1)",\r
          "endCaptures": {\r
            "1": {\r
              "name": "punctuation.definition.raw.end.typst"\r
            }\r
          },\r
          "patterns": [\r
            {\r
              "begin": "(^|\\\\G)(\\\\s*)",\r
              "while": "(^|\\\\G)(?!\\\\s*\`{3,}\\\\s*)",\r
              "contentName": "meta.embedded.block.re",\r
              "patterns": [\r
                {\r
                  "include": "source.regexp.python"\r
                }\r
              ]\r
            }\r
          ]\r
        }\r
      ]\r
    },\r
    "ruby": {\r
      "lang": "ruby",\r
      "patterns": [\r
        {\r
          "name": "markup.raw.block.typst",\r
          "match": "(\`{3,})(ruby|rb|rbx|rjs|Rakefile|rake|cgi|fcgi|gemspec|irbrc|Capfile|ru|prawn|Cheffile|Gemfile|Guardfile|Hobofile|Vagrantfile|Appraisals|Rantfile|Berksfile|Berksfile\\\\.lock|Thorfile|Puppetfile)\\\\b(.*?)(\\\\1)",\r
          "captures": {\r
            "1": {\r
              "name": "punctuation.definition.raw.begin.typst"\r
            },\r
            "2": {\r
              "name": "fenced_code.block.language.typst"\r
            },\r
            "3": {\r
              "name": "meta.embedded.block.ruby",\r
              "patterns": [\r
                {\r
                  "include": "source.ruby"\r
                }\r
              ]\r
            },\r
            "4": {\r
              "name": "punctuation.definition.raw.end.typst"\r
            }\r
          }\r
        },\r
        {\r
          "name": "markup.raw.block.typst",\r
          "begin": "(\`{6})(ruby|rb|rbx|rjs|Rakefile|rake|cgi|fcgi|gemspec|irbrc|Capfile|ru|prawn|Cheffile|Gemfile|Guardfile|Hobofile|Vagrantfile|Appraisals|Rantfile|Berksfile|Berksfile\\\\.lock|Thorfile|Puppetfile)\\\\b",\r
          "beginCaptures": {\r
            "1": {\r
              "name": "punctuation.definition.raw.begin.typst"\r
            },\r
            "2": {\r
              "name": "fenced_code.block.language.typst"\r
            }\r
          },\r
          "end": "\\\\s*(\\\\1)",\r
          "endCaptures": {\r
            "1": {\r
              "name": "punctuation.definition.raw.end.typst"\r
            }\r
          },\r
          "patterns": [\r
            {\r
              "begin": "(^|\\\\G)(\\\\s*)",\r
              "while": "(^|\\\\G)(?!\\\\s*\`{6,}\\\\s*)",\r
              "contentName": "meta.embedded.block.ruby",\r
              "patterns": [\r
                {\r
                  "include": "source.ruby"\r
                }\r
              ]\r
            }\r
          ]\r
        },\r
        {\r
          "name": "markup.raw.block.typst",\r
          "begin": "(\`{5})(ruby|rb|rbx|rjs|Rakefile|rake|cgi|fcgi|gemspec|irbrc|Capfile|ru|prawn|Cheffile|Gemfile|Guardfile|Hobofile|Vagrantfile|Appraisals|Rantfile|Berksfile|Berksfile\\\\.lock|Thorfile|Puppetfile)\\\\b",\r
          "beginCaptures": {\r
            "1": {\r
              "name": "punctuation.definition.raw.begin.typst"\r
            },\r
            "2": {\r
              "name": "fenced_code.block.language.typst"\r
            }\r
          },\r
          "end": "\\\\s*(\\\\1)",\r
          "endCaptures": {\r
            "1": {\r
              "name": "punctuation.definition.raw.end.typst"\r
            }\r
          },\r
          "patterns": [\r
            {\r
              "begin": "(^|\\\\G)(\\\\s*)",\r
              "while": "(^|\\\\G)(?!\\\\s*\`{5,}\\\\s*)",\r
              "contentName": "meta.embedded.block.ruby",\r
              "patterns": [\r
                {\r
                  "include": "source.ruby"\r
                }\r
              ]\r
            }\r
          ]\r
        },\r
        {\r
          "name": "markup.raw.block.typst",\r
          "begin": "(\`{4})(ruby|rb|rbx|rjs|Rakefile|rake|cgi|fcgi|gemspec|irbrc|Capfile|ru|prawn|Cheffile|Gemfile|Guardfile|Hobofile|Vagrantfile|Appraisals|Rantfile|Berksfile|Berksfile\\\\.lock|Thorfile|Puppetfile)\\\\b",\r
          "beginCaptures": {\r
            "1": {\r
              "name": "punctuation.definition.raw.begin.typst"\r
            },\r
            "2": {\r
              "name": "fenced_code.block.language.typst"\r
            }\r
          },\r
          "end": "\\\\s*(\\\\1)",\r
          "endCaptures": {\r
            "1": {\r
              "name": "punctuation.definition.raw.end.typst"\r
            }\r
          },\r
          "patterns": [\r
            {\r
              "begin": "(^|\\\\G)(\\\\s*)",\r
              "while": "(^|\\\\G)(?!\\\\s*\`{4,}\\\\s*)",\r
              "contentName": "meta.embedded.block.ruby",\r
              "patterns": [\r
                {\r
                  "include": "source.ruby"\r
                }\r
              ]\r
            }\r
          ]\r
        },\r
        {\r
          "name": "markup.raw.block.typst",\r
          "begin": "(\`{3})(ruby|rb|rbx|rjs|Rakefile|rake|cgi|fcgi|gemspec|irbrc|Capfile|ru|prawn|Cheffile|Gemfile|Guardfile|Hobofile|Vagrantfile|Appraisals|Rantfile|Berksfile|Berksfile\\\\.lock|Thorfile|Puppetfile)\\\\b",\r
          "beginCaptures": {\r
            "1": {\r
              "name": "punctuation.definition.raw.begin.typst"\r
            },\r
            "2": {\r
              "name": "fenced_code.block.language.typst"\r
            }\r
          },\r
          "end": "\\\\s*(\\\\1)",\r
          "endCaptures": {\r
            "1": {\r
              "name": "punctuation.definition.raw.end.typst"\r
            }\r
          },\r
          "patterns": [\r
            {\r
              "begin": "(^|\\\\G)(\\\\s*)",\r
              "while": "(^|\\\\G)(?!\\\\s*\`{3,}\\\\s*)",\r
              "contentName": "meta.embedded.block.ruby",\r
              "patterns": [\r
                {\r
                  "include": "source.ruby"\r
                }\r
              ]\r
            }\r
          ]\r
        }\r
      ]\r
    },\r
    "scss": {\r
      "lang": "scss",\r
      "patterns": [\r
        {\r
          "name": "markup.raw.block.typst",\r
          "match": "(\`{3,})(scss)\\\\b(.*?)(\\\\1)",\r
          "captures": {\r
            "1": {\r
              "name": "punctuation.definition.raw.begin.typst"\r
            },\r
            "2": {\r
              "name": "fenced_code.block.language.typst"\r
            },\r
            "3": {\r
              "name": "meta.embedded.block.scss",\r
              "patterns": [\r
                {\r
                  "include": "source.css.scss"\r
                }\r
              ]\r
            },\r
            "4": {\r
              "name": "punctuation.definition.raw.end.typst"\r
            }\r
          }\r
        },\r
        {\r
          "name": "markup.raw.block.typst",\r
          "begin": "(\`{6})(scss)\\\\b",\r
          "beginCaptures": {\r
            "1": {\r
              "name": "punctuation.definition.raw.begin.typst"\r
            },\r
            "2": {\r
              "name": "fenced_code.block.language.typst"\r
            }\r
          },\r
          "end": "\\\\s*(\\\\1)",\r
          "endCaptures": {\r
            "1": {\r
              "name": "punctuation.definition.raw.end.typst"\r
            }\r
          },\r
          "patterns": [\r
            {\r
              "begin": "(^|\\\\G)(\\\\s*)",\r
              "while": "(^|\\\\G)(?!\\\\s*\`{6,}\\\\s*)",\r
              "contentName": "meta.embedded.block.scss",\r
              "patterns": [\r
                {\r
                  "include": "source.css.scss"\r
                }\r
              ]\r
            }\r
          ]\r
        },\r
        {\r
          "name": "markup.raw.block.typst",\r
          "begin": "(\`{5})(scss)\\\\b",\r
          "beginCaptures": {\r
            "1": {\r
              "name": "punctuation.definition.raw.begin.typst"\r
            },\r
            "2": {\r
              "name": "fenced_code.block.language.typst"\r
            }\r
          },\r
          "end": "\\\\s*(\\\\1)",\r
          "endCaptures": {\r
            "1": {\r
              "name": "punctuation.definition.raw.end.typst"\r
            }\r
          },\r
          "patterns": [\r
            {\r
              "begin": "(^|\\\\G)(\\\\s*)",\r
              "while": "(^|\\\\G)(?!\\\\s*\`{5,}\\\\s*)",\r
              "contentName": "meta.embedded.block.scss",\r
              "patterns": [\r
                {\r
                  "include": "source.css.scss"\r
                }\r
              ]\r
            }\r
          ]\r
        },\r
        {\r
          "name": "markup.raw.block.typst",\r
          "begin": "(\`{4})(scss)\\\\b",\r
          "beginCaptures": {\r
            "1": {\r
              "name": "punctuation.definition.raw.begin.typst"\r
            },\r
            "2": {\r
              "name": "fenced_code.block.language.typst"\r
            }\r
          },\r
          "end": "\\\\s*(\\\\1)",\r
          "endCaptures": {\r
            "1": {\r
              "name": "punctuation.definition.raw.end.typst"\r
            }\r
          },\r
          "patterns": [\r
            {\r
              "begin": "(^|\\\\G)(\\\\s*)",\r
              "while": "(^|\\\\G)(?!\\\\s*\`{4,}\\\\s*)",\r
              "contentName": "meta.embedded.block.scss",\r
              "patterns": [\r
                {\r
                  "include": "source.css.scss"\r
                }\r
              ]\r
            }\r
          ]\r
        },\r
        {\r
          "name": "markup.raw.block.typst",\r
          "begin": "(\`{3})(scss)\\\\b",\r
          "beginCaptures": {\r
            "1": {\r
              "name": "punctuation.definition.raw.begin.typst"\r
            },\r
            "2": {\r
              "name": "fenced_code.block.language.typst"\r
            }\r
          },\r
          "end": "\\\\s*(\\\\1)",\r
          "endCaptures": {\r
            "1": {\r
              "name": "punctuation.definition.raw.end.typst"\r
            }\r
          },\r
          "patterns": [\r
            {\r
              "begin": "(^|\\\\G)(\\\\s*)",\r
              "while": "(^|\\\\G)(?!\\\\s*\`{3,}\\\\s*)",\r
              "contentName": "meta.embedded.block.scss",\r
              "patterns": [\r
                {\r
                  "include": "source.css.scss"\r
                }\r
              ]\r
            }\r
          ]\r
        }\r
      ]\r
    },\r
    "sql": {\r
      "lang": "sql",\r
      "patterns": [\r
        {\r
          "name": "markup.raw.block.typst",\r
          "match": "(\`{3,})(sql|ddl|dml)\\\\b(.*?)(\\\\1)",\r
          "captures": {\r
            "1": {\r
              "name": "punctuation.definition.raw.begin.typst"\r
            },\r
            "2": {\r
              "name": "fenced_code.block.language.typst"\r
            },\r
            "3": {\r
              "name": "meta.embedded.block.sql",\r
              "patterns": [\r
                {\r
                  "include": "source.sql"\r
                }\r
              ]\r
            },\r
            "4": {\r
              "name": "punctuation.definition.raw.end.typst"\r
            }\r
          }\r
        },\r
        {\r
          "name": "markup.raw.block.typst",\r
          "begin": "(\`{6})(sql|ddl|dml)\\\\b",\r
          "beginCaptures": {\r
            "1": {\r
              "name": "punctuation.definition.raw.begin.typst"\r
            },\r
            "2": {\r
              "name": "fenced_code.block.language.typst"\r
            }\r
          },\r
          "end": "\\\\s*(\\\\1)",\r
          "endCaptures": {\r
            "1": {\r
              "name": "punctuation.definition.raw.end.typst"\r
            }\r
          },\r
          "patterns": [\r
            {\r
              "begin": "(^|\\\\G)(\\\\s*)",\r
              "while": "(^|\\\\G)(?!\\\\s*\`{6,}\\\\s*)",\r
              "contentName": "meta.embedded.block.sql",\r
              "patterns": [\r
                {\r
                  "include": "source.sql"\r
                }\r
              ]\r
            }\r
          ]\r
        },\r
        {\r
          "name": "markup.raw.block.typst",\r
          "begin": "(\`{5})(sql|ddl|dml)\\\\b",\r
          "beginCaptures": {\r
            "1": {\r
              "name": "punctuation.definition.raw.begin.typst"\r
            },\r
            "2": {\r
              "name": "fenced_code.block.language.typst"\r
            }\r
          },\r
          "end": "\\\\s*(\\\\1)",\r
          "endCaptures": {\r
            "1": {\r
              "name": "punctuation.definition.raw.end.typst"\r
            }\r
          },\r
          "patterns": [\r
            {\r
              "begin": "(^|\\\\G)(\\\\s*)",\r
              "while": "(^|\\\\G)(?!\\\\s*\`{5,}\\\\s*)",\r
              "contentName": "meta.embedded.block.sql",\r
              "patterns": [\r
                {\r
                  "include": "source.sql"\r
                }\r
              ]\r
            }\r
          ]\r
        },\r
        {\r
          "name": "markup.raw.block.typst",\r
          "begin": "(\`{4})(sql|ddl|dml)\\\\b",\r
          "beginCaptures": {\r
            "1": {\r
              "name": "punctuation.definition.raw.begin.typst"\r
            },\r
            "2": {\r
              "name": "fenced_code.block.language.typst"\r
            }\r
          },\r
          "end": "\\\\s*(\\\\1)",\r
          "endCaptures": {\r
            "1": {\r
              "name": "punctuation.definition.raw.end.typst"\r
            }\r
          },\r
          "patterns": [\r
            {\r
              "begin": "(^|\\\\G)(\\\\s*)",\r
              "while": "(^|\\\\G)(?!\\\\s*\`{4,}\\\\s*)",\r
              "contentName": "meta.embedded.block.sql",\r
              "patterns": [\r
                {\r
                  "include": "source.sql"\r
                }\r
              ]\r
            }\r
          ]\r
        },\r
        {\r
          "name": "markup.raw.block.typst",\r
          "begin": "(\`{3})(sql|ddl|dml)\\\\b",\r
          "beginCaptures": {\r
            "1": {\r
              "name": "punctuation.definition.raw.begin.typst"\r
            },\r
            "2": {\r
              "name": "fenced_code.block.language.typst"\r
            }\r
          },\r
          "end": "\\\\s*(\\\\1)",\r
          "endCaptures": {\r
            "1": {\r
              "name": "punctuation.definition.raw.end.typst"\r
            }\r
          },\r
          "patterns": [\r
            {\r
              "begin": "(^|\\\\G)(\\\\s*)",\r
              "while": "(^|\\\\G)(?!\\\\s*\`{3,}\\\\s*)",\r
              "contentName": "meta.embedded.block.sql",\r
              "patterns": [\r
                {\r
                  "include": "source.sql"\r
                }\r
              ]\r
            }\r
          ]\r
        }\r
      ]\r
    },\r
    "swift": {\r
      "lang": "swift",\r
      "patterns": [\r
        {\r
          "name": "markup.raw.block.typst",\r
          "match": "(\`{3,})(swift)\\\\b(.*?)(\\\\1)",\r
          "captures": {\r
            "1": {\r
              "name": "punctuation.definition.raw.begin.typst"\r
            },\r
            "2": {\r
              "name": "fenced_code.block.language.typst"\r
            },\r
            "3": {\r
              "name": "meta.embedded.block.swift",\r
              "patterns": [\r
                {\r
                  "include": "source.swift"\r
                }\r
              ]\r
            },\r
            "4": {\r
              "name": "punctuation.definition.raw.end.typst"\r
            }\r
          }\r
        },\r
        {\r
          "name": "markup.raw.block.typst",\r
          "begin": "(\`{6})(swift)\\\\b",\r
          "beginCaptures": {\r
            "1": {\r
              "name": "punctuation.definition.raw.begin.typst"\r
            },\r
            "2": {\r
              "name": "fenced_code.block.language.typst"\r
            }\r
          },\r
          "end": "\\\\s*(\\\\1)",\r
          "endCaptures": {\r
            "1": {\r
              "name": "punctuation.definition.raw.end.typst"\r
            }\r
          },\r
          "patterns": [\r
            {\r
              "begin": "(^|\\\\G)(\\\\s*)",\r
              "while": "(^|\\\\G)(?!\\\\s*\`{6,}\\\\s*)",\r
              "contentName": "meta.embedded.block.swift",\r
              "patterns": [\r
                {\r
                  "include": "source.swift"\r
                }\r
              ]\r
            }\r
          ]\r
        },\r
        {\r
          "name": "markup.raw.block.typst",\r
          "begin": "(\`{5})(swift)\\\\b",\r
          "beginCaptures": {\r
            "1": {\r
              "name": "punctuation.definition.raw.begin.typst"\r
            },\r
            "2": {\r
              "name": "fenced_code.block.language.typst"\r
            }\r
          },\r
          "end": "\\\\s*(\\\\1)",\r
          "endCaptures": {\r
            "1": {\r
              "name": "punctuation.definition.raw.end.typst"\r
            }\r
          },\r
          "patterns": [\r
            {\r
              "begin": "(^|\\\\G)(\\\\s*)",\r
              "while": "(^|\\\\G)(?!\\\\s*\`{5,}\\\\s*)",\r
              "contentName": "meta.embedded.block.swift",\r
              "patterns": [\r
                {\r
                  "include": "source.swift"\r
                }\r
              ]\r
            }\r
          ]\r
        },\r
        {\r
          "name": "markup.raw.block.typst",\r
          "begin": "(\`{4})(swift)\\\\b",\r
          "beginCaptures": {\r
            "1": {\r
              "name": "punctuation.definition.raw.begin.typst"\r
            },\r
            "2": {\r
              "name": "fenced_code.block.language.typst"\r
            }\r
          },\r
          "end": "\\\\s*(\\\\1)",\r
          "endCaptures": {\r
            "1": {\r
              "name": "punctuation.definition.raw.end.typst"\r
            }\r
          },\r
          "patterns": [\r
            {\r
              "begin": "(^|\\\\G)(\\\\s*)",\r
              "while": "(^|\\\\G)(?!\\\\s*\`{4,}\\\\s*)",\r
              "contentName": "meta.embedded.block.swift",\r
              "patterns": [\r
                {\r
                  "include": "source.swift"\r
                }\r
              ]\r
            }\r
          ]\r
        },\r
        {\r
          "name": "markup.raw.block.typst",\r
          "begin": "(\`{3})(swift)\\\\b",\r
          "beginCaptures": {\r
            "1": {\r
              "name": "punctuation.definition.raw.begin.typst"\r
            },\r
            "2": {\r
              "name": "fenced_code.block.language.typst"\r
            }\r
          },\r
          "end": "\\\\s*(\\\\1)",\r
          "endCaptures": {\r
            "1": {\r
              "name": "punctuation.definition.raw.end.typst"\r
            }\r
          },\r
          "patterns": [\r
            {\r
              "begin": "(^|\\\\G)(\\\\s*)",\r
              "while": "(^|\\\\G)(?!\\\\s*\`{3,}\\\\s*)",\r
              "contentName": "meta.embedded.block.swift",\r
              "patterns": [\r
                {\r
                  "include": "source.swift"\r
                }\r
              ]\r
            }\r
          ]\r
        }\r
      ]\r
    },\r
    "typst": {\r
      "lang": "typst",\r
      "patterns": [\r
        {\r
          "name": "markup.raw.block.typst",\r
          "match": "(\`{3,})(typst|typ)\\\\b(.*?)(\\\\1)",\r
          "captures": {\r
            "1": {\r
              "name": "punctuation.definition.raw.begin.typst"\r
            },\r
            "2": {\r
              "name": "fenced_code.block.language.typst"\r
            },\r
            "3": {\r
              "name": "meta.embedded.block.typst",\r
              "patterns": [\r
                {\r
                  "include": "source.typst"\r
                }\r
              ]\r
            },\r
            "4": {\r
              "name": "punctuation.definition.raw.end.typst"\r
            }\r
          }\r
        },\r
        {\r
          "name": "markup.raw.block.typst",\r
          "begin": "(\`{6})(typst|typ)\\\\b",\r
          "beginCaptures": {\r
            "1": {\r
              "name": "punctuation.definition.raw.begin.typst"\r
            },\r
            "2": {\r
              "name": "fenced_code.block.language.typst"\r
            }\r
          },\r
          "end": "\\\\s*(\\\\1)",\r
          "endCaptures": {\r
            "1": {\r
              "name": "punctuation.definition.raw.end.typst"\r
            }\r
          },\r
          "patterns": [\r
            {\r
              "begin": "(^|\\\\G)(\\\\s*)",\r
              "while": "(^|\\\\G)(?!\\\\s*\`{6,}\\\\s*)",\r
              "contentName": "meta.embedded.block.typst",\r
              "patterns": [\r
                {\r
                  "include": "source.typst"\r
                }\r
              ]\r
            }\r
          ]\r
        },\r
        {\r
          "name": "markup.raw.block.typst",\r
          "begin": "(\`{5})(typst|typ)\\\\b",\r
          "beginCaptures": {\r
            "1": {\r
              "name": "punctuation.definition.raw.begin.typst"\r
            },\r
            "2": {\r
              "name": "fenced_code.block.language.typst"\r
            }\r
          },\r
          "end": "\\\\s*(\\\\1)",\r
          "endCaptures": {\r
            "1": {\r
              "name": "punctuation.definition.raw.end.typst"\r
            }\r
          },\r
          "patterns": [\r
            {\r
              "begin": "(^|\\\\G)(\\\\s*)",\r
              "while": "(^|\\\\G)(?!\\\\s*\`{5,}\\\\s*)",\r
              "contentName": "meta.embedded.block.typst",\r
              "patterns": [\r
                {\r
                  "include": "source.typst"\r
                }\r
              ]\r
            }\r
          ]\r
        },\r
        {\r
          "name": "markup.raw.block.typst",\r
          "begin": "(\`{4})(typst|typ)\\\\b",\r
          "beginCaptures": {\r
            "1": {\r
              "name": "punctuation.definition.raw.begin.typst"\r
            },\r
            "2": {\r
              "name": "fenced_code.block.language.typst"\r
            }\r
          },\r
          "end": "\\\\s*(\\\\1)",\r
          "endCaptures": {\r
            "1": {\r
              "name": "punctuation.definition.raw.end.typst"\r
            }\r
          },\r
          "patterns": [\r
            {\r
              "begin": "(^|\\\\G)(\\\\s*)",\r
              "while": "(^|\\\\G)(?!\\\\s*\`{4,}\\\\s*)",\r
              "contentName": "meta.embedded.block.typst",\r
              "patterns": [\r
                {\r
                  "include": "source.typst"\r
                }\r
              ]\r
            }\r
          ]\r
        },\r
        {\r
          "name": "markup.raw.block.typst",\r
          "begin": "(\`{3})(typst|typ)\\\\b",\r
          "beginCaptures": {\r
            "1": {\r
              "name": "punctuation.definition.raw.begin.typst"\r
            },\r
            "2": {\r
              "name": "fenced_code.block.language.typst"\r
            }\r
          },\r
          "end": "\\\\s*(\\\\1)",\r
          "endCaptures": {\r
            "1": {\r
              "name": "punctuation.definition.raw.end.typst"\r
            }\r
          },\r
          "patterns": [\r
            {\r
              "begin": "(^|\\\\G)(\\\\s*)",\r
              "while": "(^|\\\\G)(?!\\\\s*\`{3,}\\\\s*)",\r
              "contentName": "meta.embedded.block.typst",\r
              "patterns": [\r
                {\r
                  "include": "source.typst"\r
                }\r
              ]\r
            }\r
          ]\r
        }\r
      ]\r
    },\r
    "typst-code": {\r
      "lang": "typst-code",\r
      "patterns": [\r
        {\r
          "name": "markup.raw.block.typst",\r
          "match": "(\`{3,})(typst-code|typc)\\\\b(.*?)(\\\\1)",\r
          "captures": {\r
            "1": {\r
              "name": "punctuation.definition.raw.begin.typst"\r
            },\r
            "2": {\r
              "name": "fenced_code.block.language.typst"\r
            },\r
            "3": {\r
              "name": "meta.embedded.block.typst-code",\r
              "patterns": [\r
                {\r
                  "include": "source.typst-code"\r
                }\r
              ]\r
            },\r
            "4": {\r
              "name": "punctuation.definition.raw.end.typst"\r
            }\r
          }\r
        },\r
        {\r
          "name": "markup.raw.block.typst",\r
          "begin": "(\`{6})(typst-code|typc)\\\\b",\r
          "beginCaptures": {\r
            "1": {\r
              "name": "punctuation.definition.raw.begin.typst"\r
            },\r
            "2": {\r
              "name": "fenced_code.block.language.typst"\r
            }\r
          },\r
          "end": "\\\\s*(\\\\1)",\r
          "endCaptures": {\r
            "1": {\r
              "name": "punctuation.definition.raw.end.typst"\r
            }\r
          },\r
          "patterns": [\r
            {\r
              "begin": "(^|\\\\G)(\\\\s*)",\r
              "while": "(^|\\\\G)(?!\\\\s*\`{6,}\\\\s*)",\r
              "contentName": "meta.embedded.block.typst-code",\r
              "patterns": [\r
                {\r
                  "include": "source.typst-code"\r
                }\r
              ]\r
            }\r
          ]\r
        },\r
        {\r
          "name": "markup.raw.block.typst",\r
          "begin": "(\`{5})(typst-code|typc)\\\\b",\r
          "beginCaptures": {\r
            "1": {\r
              "name": "punctuation.definition.raw.begin.typst"\r
            },\r
            "2": {\r
              "name": "fenced_code.block.language.typst"\r
            }\r
          },\r
          "end": "\\\\s*(\\\\1)",\r
          "endCaptures": {\r
            "1": {\r
              "name": "punctuation.definition.raw.end.typst"\r
            }\r
          },\r
          "patterns": [\r
            {\r
              "begin": "(^|\\\\G)(\\\\s*)",\r
              "while": "(^|\\\\G)(?!\\\\s*\`{5,}\\\\s*)",\r
              "contentName": "meta.embedded.block.typst-code",\r
              "patterns": [\r
                {\r
                  "include": "source.typst-code"\r
                }\r
              ]\r
            }\r
          ]\r
        },\r
        {\r
          "name": "markup.raw.block.typst",\r
          "begin": "(\`{4})(typst-code|typc)\\\\b",\r
          "beginCaptures": {\r
            "1": {\r
              "name": "punctuation.definition.raw.begin.typst"\r
            },\r
            "2": {\r
              "name": "fenced_code.block.language.typst"\r
            }\r
          },\r
          "end": "\\\\s*(\\\\1)",\r
          "endCaptures": {\r
            "1": {\r
              "name": "punctuation.definition.raw.end.typst"\r
            }\r
          },\r
          "patterns": [\r
            {\r
              "begin": "(^|\\\\G)(\\\\s*)",\r
              "while": "(^|\\\\G)(?!\\\\s*\`{4,}\\\\s*)",\r
              "contentName": "meta.embedded.block.typst-code",\r
              "patterns": [\r
                {\r
                  "include": "source.typst-code"\r
                }\r
              ]\r
            }\r
          ]\r
        },\r
        {\r
          "name": "markup.raw.block.typst",\r
          "begin": "(\`{3})(typst-code|typc)\\\\b",\r
          "beginCaptures": {\r
            "1": {\r
              "name": "punctuation.definition.raw.begin.typst"\r
            },\r
            "2": {\r
              "name": "fenced_code.block.language.typst"\r
            }\r
          },\r
          "end": "\\\\s*(\\\\1)",\r
          "endCaptures": {\r
            "1": {\r
              "name": "punctuation.definition.raw.end.typst"\r
            }\r
          },\r
          "patterns": [\r
            {\r
              "begin": "(^|\\\\G)(\\\\s*)",\r
              "while": "(^|\\\\G)(?!\\\\s*\`{3,}\\\\s*)",\r
              "contentName": "meta.embedded.block.typst-code",\r
              "patterns": [\r
                {\r
                  "include": "source.typst-code"\r
                }\r
              ]\r
            }\r
          ]\r
        }\r
      ]\r
    },\r
    "xml": {\r
      "lang": "xml",\r
      "patterns": [\r
        {\r
          "name": "markup.raw.block.typst",\r
          "match": "(\`{3,})(xml|xsd|tld|jsp|pt|cpt|dtml|rss|opml)\\\\b(.*?)(\\\\1)",\r
          "captures": {\r
            "1": {\r
              "name": "punctuation.definition.raw.begin.typst"\r
            },\r
            "2": {\r
              "name": "fenced_code.block.language.typst"\r
            },\r
            "3": {\r
              "name": "meta.embedded.block.xml",\r
              "patterns": [\r
                {\r
                  "include": "text.xml"\r
                }\r
              ]\r
            },\r
            "4": {\r
              "name": "punctuation.definition.raw.end.typst"\r
            }\r
          }\r
        },\r
        {\r
          "name": "markup.raw.block.typst",\r
          "begin": "(\`{6})(xml|xsd|tld|jsp|pt|cpt|dtml|rss|opml)\\\\b",\r
          "beginCaptures": {\r
            "1": {\r
              "name": "punctuation.definition.raw.begin.typst"\r
            },\r
            "2": {\r
              "name": "fenced_code.block.language.typst"\r
            }\r
          },\r
          "end": "\\\\s*(\\\\1)",\r
          "endCaptures": {\r
            "1": {\r
              "name": "punctuation.definition.raw.end.typst"\r
            }\r
          },\r
          "patterns": [\r
            {\r
              "begin": "(^|\\\\G)(\\\\s*)",\r
              "while": "(^|\\\\G)(?!\\\\s*\`{6,}\\\\s*)",\r
              "contentName": "meta.embedded.block.xml",\r
              "patterns": [\r
                {\r
                  "include": "text.xml"\r
                }\r
              ]\r
            }\r
          ]\r
        },\r
        {\r
          "name": "markup.raw.block.typst",\r
          "begin": "(\`{5})(xml|xsd|tld|jsp|pt|cpt|dtml|rss|opml)\\\\b",\r
          "beginCaptures": {\r
            "1": {\r
              "name": "punctuation.definition.raw.begin.typst"\r
            },\r
            "2": {\r
              "name": "fenced_code.block.language.typst"\r
            }\r
          },\r
          "end": "\\\\s*(\\\\1)",\r
          "endCaptures": {\r
            "1": {\r
              "name": "punctuation.definition.raw.end.typst"\r
            }\r
          },\r
          "patterns": [\r
            {\r
              "begin": "(^|\\\\G)(\\\\s*)",\r
              "while": "(^|\\\\G)(?!\\\\s*\`{5,}\\\\s*)",\r
              "contentName": "meta.embedded.block.xml",\r
              "patterns": [\r
                {\r
                  "include": "text.xml"\r
                }\r
              ]\r
            }\r
          ]\r
        },\r
        {\r
          "name": "markup.raw.block.typst",\r
          "begin": "(\`{4})(xml|xsd|tld|jsp|pt|cpt|dtml|rss|opml)\\\\b",\r
          "beginCaptures": {\r
            "1": {\r
              "name": "punctuation.definition.raw.begin.typst"\r
            },\r
            "2": {\r
              "name": "fenced_code.block.language.typst"\r
            }\r
          },\r
          "end": "\\\\s*(\\\\1)",\r
          "endCaptures": {\r
            "1": {\r
              "name": "punctuation.definition.raw.end.typst"\r
            }\r
          },\r
          "patterns": [\r
            {\r
              "begin": "(^|\\\\G)(\\\\s*)",\r
              "while": "(^|\\\\G)(?!\\\\s*\`{4,}\\\\s*)",\r
              "contentName": "meta.embedded.block.xml",\r
              "patterns": [\r
                {\r
                  "include": "text.xml"\r
                }\r
              ]\r
            }\r
          ]\r
        },\r
        {\r
          "name": "markup.raw.block.typst",\r
          "begin": "(\`{3})(xml|xsd|tld|jsp|pt|cpt|dtml|rss|opml)\\\\b",\r
          "beginCaptures": {\r
            "1": {\r
              "name": "punctuation.definition.raw.begin.typst"\r
            },\r
            "2": {\r
              "name": "fenced_code.block.language.typst"\r
            }\r
          },\r
          "end": "\\\\s*(\\\\1)",\r
          "endCaptures": {\r
            "1": {\r
              "name": "punctuation.definition.raw.end.typst"\r
            }\r
          },\r
          "patterns": [\r
            {\r
              "begin": "(^|\\\\G)(\\\\s*)",\r
              "while": "(^|\\\\G)(?!\\\\s*\`{3,}\\\\s*)",\r
              "contentName": "meta.embedded.block.xml",\r
              "patterns": [\r
                {\r
                  "include": "text.xml"\r
                }\r
              ]\r
            }\r
          ]\r
        }\r
      ]\r
    },\r
    "xsl": {\r
      "lang": "xsl",\r
      "patterns": [\r
        {\r
          "name": "markup.raw.block.typst",\r
          "match": "(\`{3,})(xsl|xslt)\\\\b(.*?)(\\\\1)",\r
          "captures": {\r
            "1": {\r
              "name": "punctuation.definition.raw.begin.typst"\r
            },\r
            "2": {\r
              "name": "fenced_code.block.language.typst"\r
            },\r
            "3": {\r
              "name": "meta.embedded.block.xsl",\r
              "patterns": [\r
                {\r
                  "include": "text.xml.xsl"\r
                }\r
              ]\r
            },\r
            "4": {\r
              "name": "punctuation.definition.raw.end.typst"\r
            }\r
          }\r
        },\r
        {\r
          "name": "markup.raw.block.typst",\r
          "begin": "(\`{6})(xsl|xslt)\\\\b",\r
          "beginCaptures": {\r
            "1": {\r
              "name": "punctuation.definition.raw.begin.typst"\r
            },\r
            "2": {\r
              "name": "fenced_code.block.language.typst"\r
            }\r
          },\r
          "end": "\\\\s*(\\\\1)",\r
          "endCaptures": {\r
            "1": {\r
              "name": "punctuation.definition.raw.end.typst"\r
            }\r
          },\r
          "patterns": [\r
            {\r
              "begin": "(^|\\\\G)(\\\\s*)",\r
              "while": "(^|\\\\G)(?!\\\\s*\`{6,}\\\\s*)",\r
              "contentName": "meta.embedded.block.xsl",\r
              "patterns": [\r
                {\r
                  "include": "text.xml.xsl"\r
                }\r
              ]\r
            }\r
          ]\r
        },\r
        {\r
          "name": "markup.raw.block.typst",\r
          "begin": "(\`{5})(xsl|xslt)\\\\b",\r
          "beginCaptures": {\r
            "1": {\r
              "name": "punctuation.definition.raw.begin.typst"\r
            },\r
            "2": {\r
              "name": "fenced_code.block.language.typst"\r
            }\r
          },\r
          "end": "\\\\s*(\\\\1)",\r
          "endCaptures": {\r
            "1": {\r
              "name": "punctuation.definition.raw.end.typst"\r
            }\r
          },\r
          "patterns": [\r
            {\r
              "begin": "(^|\\\\G)(\\\\s*)",\r
              "while": "(^|\\\\G)(?!\\\\s*\`{5,}\\\\s*)",\r
              "contentName": "meta.embedded.block.xsl",\r
              "patterns": [\r
                {\r
                  "include": "text.xml.xsl"\r
                }\r
              ]\r
            }\r
          ]\r
        },\r
        {\r
          "name": "markup.raw.block.typst",\r
          "begin": "(\`{4})(xsl|xslt)\\\\b",\r
          "beginCaptures": {\r
            "1": {\r
              "name": "punctuation.definition.raw.begin.typst"\r
            },\r
            "2": {\r
              "name": "fenced_code.block.language.typst"\r
            }\r
          },\r
          "end": "\\\\s*(\\\\1)",\r
          "endCaptures": {\r
            "1": {\r
              "name": "punctuation.definition.raw.end.typst"\r
            }\r
          },\r
          "patterns": [\r
            {\r
              "begin": "(^|\\\\G)(\\\\s*)",\r
              "while": "(^|\\\\G)(?!\\\\s*\`{4,}\\\\s*)",\r
              "contentName": "meta.embedded.block.xsl",\r
              "patterns": [\r
                {\r
                  "include": "text.xml.xsl"\r
                }\r
              ]\r
            }\r
          ]\r
        },\r
        {\r
          "name": "markup.raw.block.typst",\r
          "begin": "(\`{3})(xsl|xslt)\\\\b",\r
          "beginCaptures": {\r
            "1": {\r
              "name": "punctuation.definition.raw.begin.typst"\r
            },\r
            "2": {\r
              "name": "fenced_code.block.language.typst"\r
            }\r
          },\r
          "end": "\\\\s*(\\\\1)",\r
          "endCaptures": {\r
            "1": {\r
              "name": "punctuation.definition.raw.end.typst"\r
            }\r
          },\r
          "patterns": [\r
            {\r
              "begin": "(^|\\\\G)(\\\\s*)",\r
              "while": "(^|\\\\G)(?!\\\\s*\`{3,}\\\\s*)",\r
              "contentName": "meta.embedded.block.xsl",\r
              "patterns": [\r
                {\r
                  "include": "text.xml.xsl"\r
                }\r
              ]\r
            }\r
          ]\r
        }\r
      ]\r
    },\r
    "yaml": {\r
      "lang": "yaml",\r
      "patterns": [\r
        {\r
          "name": "markup.raw.block.typst",\r
          "match": "(\`{3,})(yaml|yml)\\\\b(.*?)(\\\\1)",\r
          "captures": {\r
            "1": {\r
              "name": "punctuation.definition.raw.begin.typst"\r
            },\r
            "2": {\r
              "name": "fenced_code.block.language.typst"\r
            },\r
            "3": {\r
              "name": "meta.embedded.block.yaml",\r
              "patterns": [\r
                {\r
                  "include": "source.yaml"\r
                }\r
              ]\r
            },\r
            "4": {\r
              "name": "punctuation.definition.raw.end.typst"\r
            }\r
          }\r
        },\r
        {\r
          "name": "markup.raw.block.typst",\r
          "begin": "(\`{6})(yaml|yml)\\\\b",\r
          "beginCaptures": {\r
            "1": {\r
              "name": "punctuation.definition.raw.begin.typst"\r
            },\r
            "2": {\r
              "name": "fenced_code.block.language.typst"\r
            }\r
          },\r
          "end": "\\\\s*(\\\\1)",\r
          "endCaptures": {\r
            "1": {\r
              "name": "punctuation.definition.raw.end.typst"\r
            }\r
          },\r
          "patterns": [\r
            {\r
              "begin": "(^|\\\\G)(\\\\s*)",\r
              "while": "(^|\\\\G)(?!\\\\s*\`{6,}\\\\s*)",\r
              "contentName": "meta.embedded.block.yaml",\r
              "patterns": [\r
                {\r
                  "include": "source.yaml"\r
                }\r
              ]\r
            }\r
          ]\r
        },\r
        {\r
          "name": "markup.raw.block.typst",\r
          "begin": "(\`{5})(yaml|yml)\\\\b",\r
          "beginCaptures": {\r
            "1": {\r
              "name": "punctuation.definition.raw.begin.typst"\r
            },\r
            "2": {\r
              "name": "fenced_code.block.language.typst"\r
            }\r
          },\r
          "end": "\\\\s*(\\\\1)",\r
          "endCaptures": {\r
            "1": {\r
              "name": "punctuation.definition.raw.end.typst"\r
            }\r
          },\r
          "patterns": [\r
            {\r
              "begin": "(^|\\\\G)(\\\\s*)",\r
              "while": "(^|\\\\G)(?!\\\\s*\`{5,}\\\\s*)",\r
              "contentName": "meta.embedded.block.yaml",\r
              "patterns": [\r
                {\r
                  "include": "source.yaml"\r
                }\r
              ]\r
            }\r
          ]\r
        },\r
        {\r
          "name": "markup.raw.block.typst",\r
          "begin": "(\`{4})(yaml|yml)\\\\b",\r
          "beginCaptures": {\r
            "1": {\r
              "name": "punctuation.definition.raw.begin.typst"\r
            },\r
            "2": {\r
              "name": "fenced_code.block.language.typst"\r
            }\r
          },\r
          "end": "\\\\s*(\\\\1)",\r
          "endCaptures": {\r
            "1": {\r
              "name": "punctuation.definition.raw.end.typst"\r
            }\r
          },\r
          "patterns": [\r
            {\r
              "begin": "(^|\\\\G)(\\\\s*)",\r
              "while": "(^|\\\\G)(?!\\\\s*\`{4,}\\\\s*)",\r
              "contentName": "meta.embedded.block.yaml",\r
              "patterns": [\r
                {\r
                  "include": "source.yaml"\r
                }\r
              ]\r
            }\r
          ]\r
        },\r
        {\r
          "name": "markup.raw.block.typst",\r
          "begin": "(\`{3})(yaml|yml)\\\\b",\r
          "beginCaptures": {\r
            "1": {\r
              "name": "punctuation.definition.raw.begin.typst"\r
            },\r
            "2": {\r
              "name": "fenced_code.block.language.typst"\r
            }\r
          },\r
          "end": "\\\\s*(\\\\1)",\r
          "endCaptures": {\r
            "1": {\r
              "name": "punctuation.definition.raw.end.typst"\r
            }\r
          },\r
          "patterns": [\r
            {\r
              "begin": "(^|\\\\G)(\\\\s*)",\r
              "while": "(^|\\\\G)(?!\\\\s*\`{3,}\\\\s*)",\r
              "contentName": "meta.embedded.block.yaml",\r
              "patterns": [\r
                {\r
                  "include": "source.yaml"\r
                }\r
              ]\r
            }\r
          ]\r
        }\r
      ]\r
    },\r
    "python": {\r
      "lang": "python",\r
      "patterns": [\r
        {\r
          "name": "markup.raw.block.typst",\r
          "match": "(\`{3,})(python|py|py3|rpy|pyw|cpy|SConstruct|Sconstruct|sconstruct|SConscript|gyp|gypi)\\\\b(.*?)(\\\\1)",\r
          "captures": {\r
            "1": {\r
              "name": "punctuation.definition.raw.begin.typst"\r
            },\r
            "2": {\r
              "name": "fenced_code.block.language.typst"\r
            },\r
            "3": {\r
              "name": "meta.embedded.block.python",\r
              "patterns": [\r
                {\r
                  "include": "source.python"\r
                }\r
              ]\r
            },\r
            "4": {\r
              "name": "punctuation.definition.raw.end.typst"\r
            }\r
          }\r
        },\r
        {\r
          "name": "markup.raw.block.typst",\r
          "begin": "(\`{6})(python|py|py3|rpy|pyw|cpy|SConstruct|Sconstruct|sconstruct|SConscript|gyp|gypi)\\\\b",\r
          "beginCaptures": {\r
            "1": {\r
              "name": "punctuation.definition.raw.begin.typst"\r
            },\r
            "2": {\r
              "name": "fenced_code.block.language.typst"\r
            }\r
          },\r
          "end": "\\\\s*(\\\\1)",\r
          "endCaptures": {\r
            "1": {\r
              "name": "punctuation.definition.raw.end.typst"\r
            }\r
          },\r
          "patterns": [\r
            {\r
              "begin": "(^|\\\\G)(\\\\s*)",\r
              "while": "(^|\\\\G)(?!\\\\s*\`{6,}\\\\s*)",\r
              "contentName": "meta.embedded.block.python",\r
              "patterns": [\r
                {\r
                  "include": "source.python"\r
                }\r
              ]\r
            }\r
          ]\r
        },\r
        {\r
          "name": "markup.raw.block.typst",\r
          "begin": "(\`{5})(python|py|py3|rpy|pyw|cpy|SConstruct|Sconstruct|sconstruct|SConscript|gyp|gypi)\\\\b",\r
          "beginCaptures": {\r
            "1": {\r
              "name": "punctuation.definition.raw.begin.typst"\r
            },\r
            "2": {\r
              "name": "fenced_code.block.language.typst"\r
            }\r
          },\r
          "end": "\\\\s*(\\\\1)",\r
          "endCaptures": {\r
            "1": {\r
              "name": "punctuation.definition.raw.end.typst"\r
            }\r
          },\r
          "patterns": [\r
            {\r
              "begin": "(^|\\\\G)(\\\\s*)",\r
              "while": "(^|\\\\G)(?!\\\\s*\`{5,}\\\\s*)",\r
              "contentName": "meta.embedded.block.python",\r
              "patterns": [\r
                {\r
                  "include": "source.python"\r
                }\r
              ]\r
            }\r
          ]\r
        },\r
        {\r
          "name": "markup.raw.block.typst",\r
          "begin": "(\`{4})(python|py|py3|rpy|pyw|cpy|SConstruct|Sconstruct|sconstruct|SConscript|gyp|gypi)\\\\b",\r
          "beginCaptures": {\r
            "1": {\r
              "name": "punctuation.definition.raw.begin.typst"\r
            },\r
            "2": {\r
              "name": "fenced_code.block.language.typst"\r
            }\r
          },\r
          "end": "\\\\s*(\\\\1)",\r
          "endCaptures": {\r
            "1": {\r
              "name": "punctuation.definition.raw.end.typst"\r
            }\r
          },\r
          "patterns": [\r
            {\r
              "begin": "(^|\\\\G)(\\\\s*)",\r
              "while": "(^|\\\\G)(?!\\\\s*\`{4,}\\\\s*)",\r
              "contentName": "meta.embedded.block.python",\r
              "patterns": [\r
                {\r
                  "include": "source.python"\r
                }\r
              ]\r
            }\r
          ]\r
        },\r
        {\r
          "name": "markup.raw.block.typst",\r
          "begin": "(\`{3})(python|py|py3|rpy|pyw|cpy|SConstruct|Sconstruct|sconstruct|SConscript|gyp|gypi)\\\\b",\r
          "beginCaptures": {\r
            "1": {\r
              "name": "punctuation.definition.raw.begin.typst"\r
            },\r
            "2": {\r
              "name": "fenced_code.block.language.typst"\r
            }\r
          },\r
          "end": "\\\\s*(\\\\1)",\r
          "endCaptures": {\r
            "1": {\r
              "name": "punctuation.definition.raw.end.typst"\r
            }\r
          },\r
          "patterns": [\r
            {\r
              "begin": "(^|\\\\G)(\\\\s*)",\r
              "while": "(^|\\\\G)(?!\\\\s*\`{3,}\\\\s*)",\r
              "contentName": "meta.embedded.block.python",\r
              "patterns": [\r
                {\r
                  "include": "source.python"\r
                }\r
              ]\r
            }\r
          ]\r
        }\r
      ]\r
    },\r
    "rust": {\r
      "lang": "rust",\r
      "patterns": [\r
        {\r
          "name": "markup.raw.block.typst",\r
          "match": "(\`{3,})(rust|rs)\\\\b(.*?)(\\\\1)",\r
          "captures": {\r
            "1": {\r
              "name": "punctuation.definition.raw.begin.typst"\r
            },\r
            "2": {\r
              "name": "fenced_code.block.language.typst"\r
            },\r
            "3": {\r
              "name": "meta.embedded.block.rust",\r
              "patterns": [\r
                {\r
                  "include": "source.rust"\r
                }\r
              ]\r
            },\r
            "4": {\r
              "name": "punctuation.definition.raw.end.typst"\r
            }\r
          }\r
        },\r
        {\r
          "name": "markup.raw.block.typst",\r
          "begin": "(\`{6})(rust|rs)\\\\b",\r
          "beginCaptures": {\r
            "1": {\r
              "name": "punctuation.definition.raw.begin.typst"\r
            },\r
            "2": {\r
              "name": "fenced_code.block.language.typst"\r
            }\r
          },\r
          "end": "\\\\s*(\\\\1)",\r
          "endCaptures": {\r
            "1": {\r
              "name": "punctuation.definition.raw.end.typst"\r
            }\r
          },\r
          "patterns": [\r
            {\r
              "begin": "(^|\\\\G)(\\\\s*)",\r
              "while": "(^|\\\\G)(?!\\\\s*\`{6,}\\\\s*)",\r
              "contentName": "meta.embedded.block.rust",\r
              "patterns": [\r
                {\r
                  "include": "source.rust"\r
                }\r
              ]\r
            }\r
          ]\r
        },\r
        {\r
          "name": "markup.raw.block.typst",\r
          "begin": "(\`{5})(rust|rs)\\\\b",\r
          "beginCaptures": {\r
            "1": {\r
              "name": "punctuation.definition.raw.begin.typst"\r
            },\r
            "2": {\r
              "name": "fenced_code.block.language.typst"\r
            }\r
          },\r
          "end": "\\\\s*(\\\\1)",\r
          "endCaptures": {\r
            "1": {\r
              "name": "punctuation.definition.raw.end.typst"\r
            }\r
          },\r
          "patterns": [\r
            {\r
              "begin": "(^|\\\\G)(\\\\s*)",\r
              "while": "(^|\\\\G)(?!\\\\s*\`{5,}\\\\s*)",\r
              "contentName": "meta.embedded.block.rust",\r
              "patterns": [\r
                {\r
                  "include": "source.rust"\r
                }\r
              ]\r
            }\r
          ]\r
        },\r
        {\r
          "name": "markup.raw.block.typst",\r
          "begin": "(\`{4})(rust|rs)\\\\b",\r
          "beginCaptures": {\r
            "1": {\r
              "name": "punctuation.definition.raw.begin.typst"\r
            },\r
            "2": {\r
              "name": "fenced_code.block.language.typst"\r
            }\r
          },\r
          "end": "\\\\s*(\\\\1)",\r
          "endCaptures": {\r
            "1": {\r
              "name": "punctuation.definition.raw.end.typst"\r
            }\r
          },\r
          "patterns": [\r
            {\r
              "begin": "(^|\\\\G)(\\\\s*)",\r
              "while": "(^|\\\\G)(?!\\\\s*\`{4,}\\\\s*)",\r
              "contentName": "meta.embedded.block.rust",\r
              "patterns": [\r
                {\r
                  "include": "source.rust"\r
                }\r
              ]\r
            }\r
          ]\r
        },\r
        {\r
          "name": "markup.raw.block.typst",\r
          "begin": "(\`{3})(rust|rs)\\\\b",\r
          "beginCaptures": {\r
            "1": {\r
              "name": "punctuation.definition.raw.begin.typst"\r
            },\r
            "2": {\r
              "name": "fenced_code.block.language.typst"\r
            }\r
          },\r
          "end": "\\\\s*(\\\\1)",\r
          "endCaptures": {\r
            "1": {\r
              "name": "punctuation.definition.raw.end.typst"\r
            }\r
          },\r
          "patterns": [\r
            {\r
              "begin": "(^|\\\\G)(\\\\s*)",\r
              "while": "(^|\\\\G)(?!\\\\s*\`{3,}\\\\s*)",\r
              "contentName": "meta.embedded.block.rust",\r
              "patterns": [\r
                {\r
                  "include": "source.rust"\r
                }\r
              ]\r
            }\r
          ]\r
        }\r
      ]\r
    },\r
    "scala": {\r
      "lang": "scala",\r
      "patterns": [\r
        {\r
          "name": "markup.raw.block.typst",\r
          "match": "(\`{3,})(scala|sbt)\\\\b(.*?)(\\\\1)",\r
          "captures": {\r
            "1": {\r
              "name": "punctuation.definition.raw.begin.typst"\r
            },\r
            "2": {\r
              "name": "fenced_code.block.language.typst"\r
            },\r
            "3": {\r
              "name": "meta.embedded.block.scala",\r
              "patterns": [\r
                {\r
                  "include": "source.scala"\r
                }\r
              ]\r
            },\r
            "4": {\r
              "name": "punctuation.definition.raw.end.typst"\r
            }\r
          }\r
        },\r
        {\r
          "name": "markup.raw.block.typst",\r
          "begin": "(\`{6})(scala|sbt)\\\\b",\r
          "beginCaptures": {\r
            "1": {\r
              "name": "punctuation.definition.raw.begin.typst"\r
            },\r
            "2": {\r
              "name": "fenced_code.block.language.typst"\r
            }\r
          },\r
          "end": "\\\\s*(\\\\1)",\r
          "endCaptures": {\r
            "1": {\r
              "name": "punctuation.definition.raw.end.typst"\r
            }\r
          },\r
          "patterns": [\r
            {\r
              "begin": "(^|\\\\G)(\\\\s*)",\r
              "while": "(^|\\\\G)(?!\\\\s*\`{6,}\\\\s*)",\r
              "contentName": "meta.embedded.block.scala",\r
              "patterns": [\r
                {\r
                  "include": "source.scala"\r
                }\r
              ]\r
            }\r
          ]\r
        },\r
        {\r
          "name": "markup.raw.block.typst",\r
          "begin": "(\`{5})(scala|sbt)\\\\b",\r
          "beginCaptures": {\r
            "1": {\r
              "name": "punctuation.definition.raw.begin.typst"\r
            },\r
            "2": {\r
              "name": "fenced_code.block.language.typst"\r
            }\r
          },\r
          "end": "\\\\s*(\\\\1)",\r
          "endCaptures": {\r
            "1": {\r
              "name": "punctuation.definition.raw.end.typst"\r
            }\r
          },\r
          "patterns": [\r
            {\r
              "begin": "(^|\\\\G)(\\\\s*)",\r
              "while": "(^|\\\\G)(?!\\\\s*\`{5,}\\\\s*)",\r
              "contentName": "meta.embedded.block.scala",\r
              "patterns": [\r
                {\r
                  "include": "source.scala"\r
                }\r
              ]\r
            }\r
          ]\r
        },\r
        {\r
          "name": "markup.raw.block.typst",\r
          "begin": "(\`{4})(scala|sbt)\\\\b",\r
          "beginCaptures": {\r
            "1": {\r
              "name": "punctuation.definition.raw.begin.typst"\r
            },\r
            "2": {\r
              "name": "fenced_code.block.language.typst"\r
            }\r
          },\r
          "end": "\\\\s*(\\\\1)",\r
          "endCaptures": {\r
            "1": {\r
              "name": "punctuation.definition.raw.end.typst"\r
            }\r
          },\r
          "patterns": [\r
            {\r
              "begin": "(^|\\\\G)(\\\\s*)",\r
              "while": "(^|\\\\G)(?!\\\\s*\`{4,}\\\\s*)",\r
              "contentName": "meta.embedded.block.scala",\r
              "patterns": [\r
                {\r
                  "include": "source.scala"\r
                }\r
              ]\r
            }\r
          ]\r
        },\r
        {\r
          "name": "markup.raw.block.typst",\r
          "begin": "(\`{3})(scala|sbt)\\\\b",\r
          "beginCaptures": {\r
            "1": {\r
              "name": "punctuation.definition.raw.begin.typst"\r
            },\r
            "2": {\r
              "name": "fenced_code.block.language.typst"\r
            }\r
          },\r
          "end": "\\\\s*(\\\\1)",\r
          "endCaptures": {\r
            "1": {\r
              "name": "punctuation.definition.raw.end.typst"\r
            }\r
          },\r
          "patterns": [\r
            {\r
              "begin": "(^|\\\\G)(\\\\s*)",\r
              "while": "(^|\\\\G)(?!\\\\s*\`{3,}\\\\s*)",\r
              "contentName": "meta.embedded.block.scala",\r
              "patterns": [\r
                {\r
                  "include": "source.scala"\r
                }\r
              ]\r
            }\r
          ]\r
        }\r
      ]\r
    },\r
    "shell": {\r
      "lang": "shell",\r
      "patterns": [\r
        {\r
          "name": "markup.raw.block.typst",\r
          "match": "(\`{3,})(shell|sh|bash|zsh|bashrc|bash_profile|bash_login|profile|bash_logout|\\\\.textmate_init)\\\\b(.*?)(\\\\1)",\r
          "captures": {\r
            "1": {\r
              "name": "punctuation.definition.raw.begin.typst"\r
            },\r
            "2": {\r
              "name": "fenced_code.block.language.typst"\r
            },\r
            "3": {\r
              "name": "meta.embedded.block.shell",\r
              "patterns": [\r
                {\r
                  "include": "source.shell"\r
                }\r
              ]\r
            },\r
            "4": {\r
              "name": "punctuation.definition.raw.end.typst"\r
            }\r
          }\r
        },\r
        {\r
          "name": "markup.raw.block.typst",\r
          "begin": "(\`{6})(shell|sh|bash|zsh|bashrc|bash_profile|bash_login|profile|bash_logout|\\\\.textmate_init)\\\\b",\r
          "beginCaptures": {\r
            "1": {\r
              "name": "punctuation.definition.raw.begin.typst"\r
            },\r
            "2": {\r
              "name": "fenced_code.block.language.typst"\r
            }\r
          },\r
          "end": "\\\\s*(\\\\1)",\r
          "endCaptures": {\r
            "1": {\r
              "name": "punctuation.definition.raw.end.typst"\r
            }\r
          },\r
          "patterns": [\r
            {\r
              "begin": "(^|\\\\G)(\\\\s*)",\r
              "while": "(^|\\\\G)(?!\\\\s*\`{6,}\\\\s*)",\r
              "contentName": "meta.embedded.block.shell",\r
              "patterns": [\r
                {\r
                  "include": "source.shell"\r
                }\r
              ]\r
            }\r
          ]\r
        },\r
        {\r
          "name": "markup.raw.block.typst",\r
          "begin": "(\`{5})(shell|sh|bash|zsh|bashrc|bash_profile|bash_login|profile|bash_logout|\\\\.textmate_init)\\\\b",\r
          "beginCaptures": {\r
            "1": {\r
              "name": "punctuation.definition.raw.begin.typst"\r
            },\r
            "2": {\r
              "name": "fenced_code.block.language.typst"\r
            }\r
          },\r
          "end": "\\\\s*(\\\\1)",\r
          "endCaptures": {\r
            "1": {\r
              "name": "punctuation.definition.raw.end.typst"\r
            }\r
          },\r
          "patterns": [\r
            {\r
              "begin": "(^|\\\\G)(\\\\s*)",\r
              "while": "(^|\\\\G)(?!\\\\s*\`{5,}\\\\s*)",\r
              "contentName": "meta.embedded.block.shell",\r
              "patterns": [\r
                {\r
                  "include": "source.shell"\r
                }\r
              ]\r
            }\r
          ]\r
        },\r
        {\r
          "name": "markup.raw.block.typst",\r
          "begin": "(\`{4})(shell|sh|bash|zsh|bashrc|bash_profile|bash_login|profile|bash_logout|\\\\.textmate_init)\\\\b",\r
          "beginCaptures": {\r
            "1": {\r
              "name": "punctuation.definition.raw.begin.typst"\r
            },\r
            "2": {\r
              "name": "fenced_code.block.language.typst"\r
            }\r
          },\r
          "end": "\\\\s*(\\\\1)",\r
          "endCaptures": {\r
            "1": {\r
              "name": "punctuation.definition.raw.end.typst"\r
            }\r
          },\r
          "patterns": [\r
            {\r
              "begin": "(^|\\\\G)(\\\\s*)",\r
              "while": "(^|\\\\G)(?!\\\\s*\`{4,}\\\\s*)",\r
              "contentName": "meta.embedded.block.shell",\r
              "patterns": [\r
                {\r
                  "include": "source.shell"\r
                }\r
              ]\r
            }\r
          ]\r
        },\r
        {\r
          "name": "markup.raw.block.typst",\r
          "begin": "(\`{3})(shell|sh|bash|zsh|bashrc|bash_profile|bash_login|profile|bash_logout|\\\\.textmate_init)\\\\b",\r
          "beginCaptures": {\r
            "1": {\r
              "name": "punctuation.definition.raw.begin.typst"\r
            },\r
            "2": {\r
              "name": "fenced_code.block.language.typst"\r
            }\r
          },\r
          "end": "\\\\s*(\\\\1)",\r
          "endCaptures": {\r
            "1": {\r
              "name": "punctuation.definition.raw.end.typst"\r
            }\r
          },\r
          "patterns": [\r
            {\r
              "begin": "(^|\\\\G)(\\\\s*)",\r
              "while": "(^|\\\\G)(?!\\\\s*\`{3,}\\\\s*)",\r
              "contentName": "meta.embedded.block.shell",\r
              "patterns": [\r
                {\r
                  "include": "source.shell"\r
                }\r
              ]\r
            }\r
          ]\r
        }\r
      ]\r
    },\r
    "ts": {\r
      "lang": "ts",\r
      "patterns": [\r
        {\r
          "name": "markup.raw.block.typst",\r
          "match": "(\`{3,})(ts|typescript)\\\\b(.*?)(\\\\1)",\r
          "captures": {\r
            "1": {\r
              "name": "punctuation.definition.raw.begin.typst"\r
            },\r
            "2": {\r
              "name": "fenced_code.block.language.typst"\r
            },\r
            "3": {\r
              "name": "meta.embedded.block.ts",\r
              "patterns": [\r
                {\r
                  "include": "source.ts"\r
                }\r
              ]\r
            },\r
            "4": {\r
              "name": "punctuation.definition.raw.end.typst"\r
            }\r
          }\r
        },\r
        {\r
          "name": "markup.raw.block.typst",\r
          "begin": "(\`{6})(ts|typescript)\\\\b",\r
          "beginCaptures": {\r
            "1": {\r
              "name": "punctuation.definition.raw.begin.typst"\r
            },\r
            "2": {\r
              "name": "fenced_code.block.language.typst"\r
            }\r
          },\r
          "end": "\\\\s*(\\\\1)",\r
          "endCaptures": {\r
            "1": {\r
              "name": "punctuation.definition.raw.end.typst"\r
            }\r
          },\r
          "patterns": [\r
            {\r
              "begin": "(^|\\\\G)(\\\\s*)",\r
              "while": "(^|\\\\G)(?!\\\\s*\`{6,}\\\\s*)",\r
              "contentName": "meta.embedded.block.ts",\r
              "patterns": [\r
                {\r
                  "include": "source.ts"\r
                }\r
              ]\r
            }\r
          ]\r
        },\r
        {\r
          "name": "markup.raw.block.typst",\r
          "begin": "(\`{5})(ts|typescript)\\\\b",\r
          "beginCaptures": {\r
            "1": {\r
              "name": "punctuation.definition.raw.begin.typst"\r
            },\r
            "2": {\r
              "name": "fenced_code.block.language.typst"\r
            }\r
          },\r
          "end": "\\\\s*(\\\\1)",\r
          "endCaptures": {\r
            "1": {\r
              "name": "punctuation.definition.raw.end.typst"\r
            }\r
          },\r
          "patterns": [\r
            {\r
              "begin": "(^|\\\\G)(\\\\s*)",\r
              "while": "(^|\\\\G)(?!\\\\s*\`{5,}\\\\s*)",\r
              "contentName": "meta.embedded.block.ts",\r
              "patterns": [\r
                {\r
                  "include": "source.ts"\r
                }\r
              ]\r
            }\r
          ]\r
        },\r
        {\r
          "name": "markup.raw.block.typst",\r
          "begin": "(\`{4})(ts|typescript)\\\\b",\r
          "beginCaptures": {\r
            "1": {\r
              "name": "punctuation.definition.raw.begin.typst"\r
            },\r
            "2": {\r
              "name": "fenced_code.block.language.typst"\r
            }\r
          },\r
          "end": "\\\\s*(\\\\1)",\r
          "endCaptures": {\r
            "1": {\r
              "name": "punctuation.definition.raw.end.typst"\r
            }\r
          },\r
          "patterns": [\r
            {\r
              "begin": "(^|\\\\G)(\\\\s*)",\r
              "while": "(^|\\\\G)(?!\\\\s*\`{4,}\\\\s*)",\r
              "contentName": "meta.embedded.block.ts",\r
              "patterns": [\r
                {\r
                  "include": "source.ts"\r
                }\r
              ]\r
            }\r
          ]\r
        },\r
        {\r
          "name": "markup.raw.block.typst",\r
          "begin": "(\`{3})(ts|typescript)\\\\b",\r
          "beginCaptures": {\r
            "1": {\r
              "name": "punctuation.definition.raw.begin.typst"\r
            },\r
            "2": {\r
              "name": "fenced_code.block.language.typst"\r
            }\r
          },\r
          "end": "\\\\s*(\\\\1)",\r
          "endCaptures": {\r
            "1": {\r
              "name": "punctuation.definition.raw.end.typst"\r
            }\r
          },\r
          "patterns": [\r
            {\r
              "begin": "(^|\\\\G)(\\\\s*)",\r
              "while": "(^|\\\\G)(?!\\\\s*\`{3,}\\\\s*)",\r
              "contentName": "meta.embedded.block.ts",\r
              "patterns": [\r
                {\r
                  "include": "source.ts"\r
                }\r
              ]\r
            }\r
          ]\r
        }\r
      ]\r
    },\r
    "tsx": {\r
      "lang": "tsx",\r
      "patterns": [\r
        {\r
          "name": "markup.raw.block.typst",\r
          "match": "(\`{3,})(tsx)\\\\b(.*?)(\\\\1)",\r
          "captures": {\r
            "1": {\r
              "name": "punctuation.definition.raw.begin.typst"\r
            },\r
            "2": {\r
              "name": "fenced_code.block.language.typst"\r
            },\r
            "3": {\r
              "name": "meta.embedded.block.tsx",\r
              "patterns": [\r
                {\r
                  "include": "source.tsx"\r
                }\r
              ]\r
            },\r
            "4": {\r
              "name": "punctuation.definition.raw.end.typst"\r
            }\r
          }\r
        },\r
        {\r
          "name": "markup.raw.block.typst",\r
          "begin": "(\`{6})(tsx)\\\\b",\r
          "beginCaptures": {\r
            "1": {\r
              "name": "punctuation.definition.raw.begin.typst"\r
            },\r
            "2": {\r
              "name": "fenced_code.block.language.typst"\r
            }\r
          },\r
          "end": "\\\\s*(\\\\1)",\r
          "endCaptures": {\r
            "1": {\r
              "name": "punctuation.definition.raw.end.typst"\r
            }\r
          },\r
          "patterns": [\r
            {\r
              "begin": "(^|\\\\G)(\\\\s*)",\r
              "while": "(^|\\\\G)(?!\\\\s*\`{6,}\\\\s*)",\r
              "contentName": "meta.embedded.block.tsx",\r
              "patterns": [\r
                {\r
                  "include": "source.tsx"\r
                }\r
              ]\r
            }\r
          ]\r
        },\r
        {\r
          "name": "markup.raw.block.typst",\r
          "begin": "(\`{5})(tsx)\\\\b",\r
          "beginCaptures": {\r
            "1": {\r
              "name": "punctuation.definition.raw.begin.typst"\r
            },\r
            "2": {\r
              "name": "fenced_code.block.language.typst"\r
            }\r
          },\r
          "end": "\\\\s*(\\\\1)",\r
          "endCaptures": {\r
            "1": {\r
              "name": "punctuation.definition.raw.end.typst"\r
            }\r
          },\r
          "patterns": [\r
            {\r
              "begin": "(^|\\\\G)(\\\\s*)",\r
              "while": "(^|\\\\G)(?!\\\\s*\`{5,}\\\\s*)",\r
              "contentName": "meta.embedded.block.tsx",\r
              "patterns": [\r
                {\r
                  "include": "source.tsx"\r
                }\r
              ]\r
            }\r
          ]\r
        },\r
        {\r
          "name": "markup.raw.block.typst",\r
          "begin": "(\`{4})(tsx)\\\\b",\r
          "beginCaptures": {\r
            "1": {\r
              "name": "punctuation.definition.raw.begin.typst"\r
            },\r
            "2": {\r
              "name": "fenced_code.block.language.typst"\r
            }\r
          },\r
          "end": "\\\\s*(\\\\1)",\r
          "endCaptures": {\r
            "1": {\r
              "name": "punctuation.definition.raw.end.typst"\r
            }\r
          },\r
          "patterns": [\r
            {\r
              "begin": "(^|\\\\G)(\\\\s*)",\r
              "while": "(^|\\\\G)(?!\\\\s*\`{4,}\\\\s*)",\r
              "contentName": "meta.embedded.block.tsx",\r
              "patterns": [\r
                {\r
                  "include": "source.tsx"\r
                }\r
              ]\r
            }\r
          ]\r
        },\r
        {\r
          "name": "markup.raw.block.typst",\r
          "begin": "(\`{3})(tsx)\\\\b",\r
          "beginCaptures": {\r
            "1": {\r
              "name": "punctuation.definition.raw.begin.typst"\r
            },\r
            "2": {\r
              "name": "fenced_code.block.language.typst"\r
            }\r
          },\r
          "end": "\\\\s*(\\\\1)",\r
          "endCaptures": {\r
            "1": {\r
              "name": "punctuation.definition.raw.end.typst"\r
            }\r
          },\r
          "patterns": [\r
            {\r
              "begin": "(^|\\\\G)(\\\\s*)",\r
              "while": "(^|\\\\G)(?!\\\\s*\`{3,}\\\\s*)",\r
              "contentName": "meta.embedded.block.tsx",\r
              "patterns": [\r
                {\r
                  "include": "source.tsx"\r
                }\r
              ]\r
            }\r
          ]\r
        }\r
      ]\r
    },\r
    "twig": {\r
      "lang": "twig",\r
      "patterns": [\r
        {\r
          "name": "markup.raw.block.typst",\r
          "match": "(\`{3,})(twig)\\\\b(.*?)(\\\\1)",\r
          "captures": {\r
            "1": {\r
              "name": "punctuation.definition.raw.begin.typst"\r
            },\r
            "2": {\r
              "name": "fenced_code.block.language.typst"\r
            },\r
            "3": {\r
              "name": "meta.embedded.block.twig",\r
              "patterns": [\r
                {\r
                  "include": "source.twig"\r
                }\r
              ]\r
            },\r
            "4": {\r
              "name": "punctuation.definition.raw.end.typst"\r
            }\r
          }\r
        },\r
        {\r
          "name": "markup.raw.block.typst",\r
          "begin": "(\`{6})(twig)\\\\b",\r
          "beginCaptures": {\r
            "1": {\r
              "name": "punctuation.definition.raw.begin.typst"\r
            },\r
            "2": {\r
              "name": "fenced_code.block.language.typst"\r
            }\r
          },\r
          "end": "\\\\s*(\\\\1)",\r
          "endCaptures": {\r
            "1": {\r
              "name": "punctuation.definition.raw.end.typst"\r
            }\r
          },\r
          "patterns": [\r
            {\r
              "begin": "(^|\\\\G)(\\\\s*)",\r
              "while": "(^|\\\\G)(?!\\\\s*\`{6,}\\\\s*)",\r
              "contentName": "meta.embedded.block.twig",\r
              "patterns": [\r
                {\r
                  "include": "source.twig"\r
                }\r
              ]\r
            }\r
          ]\r
        },\r
        {\r
          "name": "markup.raw.block.typst",\r
          "begin": "(\`{5})(twig)\\\\b",\r
          "beginCaptures": {\r
            "1": {\r
              "name": "punctuation.definition.raw.begin.typst"\r
            },\r
            "2": {\r
              "name": "fenced_code.block.language.typst"\r
            }\r
          },\r
          "end": "\\\\s*(\\\\1)",\r
          "endCaptures": {\r
            "1": {\r
              "name": "punctuation.definition.raw.end.typst"\r
            }\r
          },\r
          "patterns": [\r
            {\r
              "begin": "(^|\\\\G)(\\\\s*)",\r
              "while": "(^|\\\\G)(?!\\\\s*\`{5,}\\\\s*)",\r
              "contentName": "meta.embedded.block.twig",\r
              "patterns": [\r
                {\r
                  "include": "source.twig"\r
                }\r
              ]\r
            }\r
          ]\r
        },\r
        {\r
          "name": "markup.raw.block.typst",\r
          "begin": "(\`{4})(twig)\\\\b",\r
          "beginCaptures": {\r
            "1": {\r
              "name": "punctuation.definition.raw.begin.typst"\r
            },\r
            "2": {\r
              "name": "fenced_code.block.language.typst"\r
            }\r
          },\r
          "end": "\\\\s*(\\\\1)",\r
          "endCaptures": {\r
            "1": {\r
              "name": "punctuation.definition.raw.end.typst"\r
            }\r
          },\r
          "patterns": [\r
            {\r
              "begin": "(^|\\\\G)(\\\\s*)",\r
              "while": "(^|\\\\G)(?!\\\\s*\`{4,}\\\\s*)",\r
              "contentName": "meta.embedded.block.twig",\r
              "patterns": [\r
                {\r
                  "include": "source.twig"\r
                }\r
              ]\r
            }\r
          ]\r
        },\r
        {\r
          "name": "markup.raw.block.typst",\r
          "begin": "(\`{3})(twig)\\\\b",\r
          "beginCaptures": {\r
            "1": {\r
              "name": "punctuation.definition.raw.begin.typst"\r
            },\r
            "2": {\r
              "name": "fenced_code.block.language.typst"\r
            }\r
          },\r
          "end": "\\\\s*(\\\\1)",\r
          "endCaptures": {\r
            "1": {\r
              "name": "punctuation.definition.raw.end.typst"\r
            }\r
          },\r
          "patterns": [\r
            {\r
              "begin": "(^|\\\\G)(\\\\s*)",\r
              "while": "(^|\\\\G)(?!\\\\s*\`{3,}\\\\s*)",\r
              "contentName": "meta.embedded.block.twig",\r
              "patterns": [\r
                {\r
                  "include": "source.twig"\r
                }\r
              ]\r
            }\r
          ]\r
        }\r
      ]\r
    },\r
    "vb": {\r
      "lang": "vb",\r
      "patterns": [\r
        {\r
          "name": "markup.raw.block.typst",\r
          "match": "(\`{3,})(vb)\\\\b(.*?)(\\\\1)",\r
          "captures": {\r
            "1": {\r
              "name": "punctuation.definition.raw.begin.typst"\r
            },\r
            "2": {\r
              "name": "fenced_code.block.language.typst"\r
            },\r
            "3": {\r
              "name": "meta.embedded.block.vb",\r
              "patterns": [\r
                {\r
                  "include": "source.asp.vb.net"\r
                }\r
              ]\r
            },\r
            "4": {\r
              "name": "punctuation.definition.raw.end.typst"\r
            }\r
          }\r
        },\r
        {\r
          "name": "markup.raw.block.typst",\r
          "begin": "(\`{6})(vb)\\\\b",\r
          "beginCaptures": {\r
            "1": {\r
              "name": "punctuation.definition.raw.begin.typst"\r
            },\r
            "2": {\r
              "name": "fenced_code.block.language.typst"\r
            }\r
          },\r
          "end": "\\\\s*(\\\\1)",\r
          "endCaptures": {\r
            "1": {\r
              "name": "punctuation.definition.raw.end.typst"\r
            }\r
          },\r
          "patterns": [\r
            {\r
              "begin": "(^|\\\\G)(\\\\s*)",\r
              "while": "(^|\\\\G)(?!\\\\s*\`{6,}\\\\s*)",\r
              "contentName": "meta.embedded.block.vb",\r
              "patterns": [\r
                {\r
                  "include": "source.asp.vb.net"\r
                }\r
              ]\r
            }\r
          ]\r
        },\r
        {\r
          "name": "markup.raw.block.typst",\r
          "begin": "(\`{5})(vb)\\\\b",\r
          "beginCaptures": {\r
            "1": {\r
              "name": "punctuation.definition.raw.begin.typst"\r
            },\r
            "2": {\r
              "name": "fenced_code.block.language.typst"\r
            }\r
          },\r
          "end": "\\\\s*(\\\\1)",\r
          "endCaptures": {\r
            "1": {\r
              "name": "punctuation.definition.raw.end.typst"\r
            }\r
          },\r
          "patterns": [\r
            {\r
              "begin": "(^|\\\\G)(\\\\s*)",\r
              "while": "(^|\\\\G)(?!\\\\s*\`{5,}\\\\s*)",\r
              "contentName": "meta.embedded.block.vb",\r
              "patterns": [\r
                {\r
                  "include": "source.asp.vb.net"\r
                }\r
              ]\r
            }\r
          ]\r
        },\r
        {\r
          "name": "markup.raw.block.typst",\r
          "begin": "(\`{4})(vb)\\\\b",\r
          "beginCaptures": {\r
            "1": {\r
              "name": "punctuation.definition.raw.begin.typst"\r
            },\r
            "2": {\r
              "name": "fenced_code.block.language.typst"\r
            }\r
          },\r
          "end": "\\\\s*(\\\\1)",\r
          "endCaptures": {\r
            "1": {\r
              "name": "punctuation.definition.raw.end.typst"\r
            }\r
          },\r
          "patterns": [\r
            {\r
              "begin": "(^|\\\\G)(\\\\s*)",\r
              "while": "(^|\\\\G)(?!\\\\s*\`{4,}\\\\s*)",\r
              "contentName": "meta.embedded.block.vb",\r
              "patterns": [\r
                {\r
                  "include": "source.asp.vb.net"\r
                }\r
              ]\r
            }\r
          ]\r
        },\r
        {\r
          "name": "markup.raw.block.typst",\r
          "begin": "(\`{3})(vb)\\\\b",\r
          "beginCaptures": {\r
            "1": {\r
              "name": "punctuation.definition.raw.begin.typst"\r
            },\r
            "2": {\r
              "name": "fenced_code.block.language.typst"\r
            }\r
          },\r
          "end": "\\\\s*(\\\\1)",\r
          "endCaptures": {\r
            "1": {\r
              "name": "punctuation.definition.raw.end.typst"\r
            }\r
          },\r
          "patterns": [\r
            {\r
              "begin": "(^|\\\\G)(\\\\s*)",\r
              "while": "(^|\\\\G)(?!\\\\s*\`{3,}\\\\s*)",\r
              "contentName": "meta.embedded.block.vb",\r
              "patterns": [\r
                {\r
                  "include": "source.asp.vb.net"\r
                }\r
              ]\r
            }\r
          ]\r
        }\r
      ]\r
    },\r
    "blockRawGeneral": {\r
      "name": "markup.raw.block.typst",\r
      "begin": "(\`{3,})([\\\\p{XID_Start}_][\\\\p{XID_Continue}_\\\\-]*\\\\b)?",\r
      "beginCaptures": {\r
        "1": {\r
          "name": "punctuation.definition.raw.begin.typst"\r
        },\r
        "2": {\r
          "name": "fenced_code.block.language.typst"\r
        }\r
      },\r
      "end": "(\\\\1)",\r
      "endCaptures": {\r
        "1": {\r
          "name": "punctuation.definition.raw.end.typst"\r
        }\r
      }\r
    },\r
    "expression": {\r
      "patterns": [\r
        {\r
          "include": "#comments"\r
        },\r
        {\r
          "include": "#arrayOrDict"\r
        },\r
        {\r
          "include": "#contentBlock"\r
        },\r
        {\r
          "match": "\\\\b(else)\\\\b(?!-)",\r
          "name": "keyword.control.conditional.typst"\r
        },\r
        {\r
          "match": "\\\\b(break|continue)\\\\b(?!-)",\r
          "name": "keyword.control.loop.typst"\r
        },\r
        {\r
          "match": "\\\\b(in)\\\\b(?!-)",\r
          "name": "keyword.other.range.typst"\r
        },\r
        {\r
          "match": "\\\\b(and|or|not)\\\\b(?!-)",\r
          "name": "keyword.other.logical.typst"\r
        },\r
        {\r
          "match": "\\\\b(return)\\\\b(?!-)",\r
          "name": "keyword.control.flow.typst"\r
        },\r
        {\r
          "include": "#markupLabel"\r
        },\r
        {\r
          "include": "#blockRaw"\r
        },\r
        {\r
          "include": "#inlineRaw"\r
        },\r
        {\r
          "include": "#codeBlock"\r
        },\r
        {\r
          "include": "#letStatement"\r
        },\r
        {\r
          "include": "#showStatement"\r
        },\r
        {\r
          "include": "#contextStatement"\r
        },\r
        {\r
          "include": "#setStatement"\r
        },\r
        {\r
          "include": "#forStatement"\r
        },\r
        {\r
          "include": "#whileStatement"\r
        },\r
        {\r
          "include": "#ifStatement"\r
        },\r
        {\r
          "include": "#importStatement"\r
        },\r
        {\r
          "include": "#includeStatement"\r
        },\r
        {\r
          "include": "#strictFuncCallOrPropAccess"\r
        },\r
        {\r
          "include": "#primitiveColors"\r
        },\r
        {\r
          "include": "#primitiveFunctions"\r
        },\r
        {\r
          "include": "#primitiveTypes"\r
        },\r
        {\r
          "include": "#keywordConstants"\r
        },\r
        {\r
          "include": "#identifier"\r
        },\r
        {\r
          "include": "#constants"\r
        },\r
        {\r
          "include": "#codeMath"\r
        },\r
        {\r
          "match": "(as)\\\\b(?!-)",\r
          "name": "keyword.control.typst"\r
        },\r
        {\r
          "match": "(in)\\\\b(?!-)",\r
          "name": "keyword.operator.range.typst"\r
        },\r
        {\r
          "match": "\\\\.\\\\.",\r
          "name": "keyword.operator.spread.typst"\r
        },\r
        {\r
          "match": ":",\r
          "name": "punctuation.separator.colon.typst"\r
        },\r
        {\r
          "match": "\\\\.",\r
          "name": "keyword.operator.accessor.typst"\r
        },\r
        {\r
          "match": ",",\r
          "name": "punctuation.separator.comma.typst"\r
        },\r
        {\r
          "match": "=>",\r
          "name": "storage.type.function.arrow.typst"\r
        },\r
        {\r
          "match": "==|!=|<=|<|>=|>",\r
          "name": "keyword.operator.relational.typst"\r
        },\r
        {\r
          "begin": "(\\\\+=|-=|\\\\*=|\\\\/=|=)",\r
          "end": "(?=[\\\\n;\\\\}\\\\]\\\\)])",\r
          "beginCaptures": {\r
            "1": {\r
              "name": "keyword.operator.assignment.typst"\r
            }\r
          },\r
          "patterns": [\r
            {\r
              "include": "#expression"\r
            }\r
          ]\r
        },\r
        {\r
          "match": "\\\\+|\\\\\\\\|\\\\/|\\\\*|-",\r
          "name": "keyword.operator.arithmetic.typst"\r
        }\r
      ]\r
    },\r
    "arrayOrDict": {\r
      "patterns": [\r
        {\r
          "match": "(\\\\()\\\\s*(\\\\))",\r
          "captures": {\r
            "1": {\r
              "name": "meta.brace.round.typst"\r
            },\r
            "2": {\r
              "name": "meta.brace.round.typst"\r
            }\r
          }\r
        },\r
        {\r
          "match": "(\\\\()\\\\s*(:)\\\\s*(\\\\))",\r
          "captures": {\r
            "1": {\r
              "name": "meta.brace.round.typst"\r
            },\r
            "2": {\r
              "name": "punctuation.separator.colon.typst"\r
            },\r
            "3": {\r
              "name": "meta.brace.round.typst"\r
            }\r
          }\r
        },\r
        {\r
          "begin": "\\\\(",\r
          "end": "\\\\)|(?=[;\\\\}\\\\]])",\r
          "beginCaptures": {\r
            "0": {\r
              "name": "meta.brace.round.typst"\r
            }\r
          },\r
          "endCaptures": {\r
            "0": {\r
              "name": "meta.brace.round.typst"\r
            }\r
          },\r
          "patterns": [\r
            {\r
              "include": "#literalContent"\r
            }\r
          ]\r
        }\r
      ]\r
    },\r
    "literalContent": {\r
      "patterns": [\r
        {\r
          "include": "#paramOrArgName"\r
        },\r
        {\r
          "include": "#expression"\r
        }\r
      ]\r
    },\r
    "contextStatement": {\r
      "name": "meta.expr.context.typst",\r
      "begin": "\\\\bcontext\\\\b(?!-)",\r
      "end": "(?<=[\\\\}\\\\]])|(?<!\\\\bcontext\\\\s*)(?=[\\\\{\\\\[])|(?=[$;\\\\}\\\\]\\\\)#\\\\n]|$)",\r
      "beginCaptures": {\r
        "0": {\r
          "name": "keyword.control.other.typst"\r
        }\r
      },\r
      "patterns": [\r
        {\r
          "include": "#expression"\r
        }\r
      ]\r
    },\r
    "includeStatement": {\r
      "name": "meta.expr.include.typst",\r
      "begin": "(\\\\binclude\\\\b(?!-))\\\\s*",\r
      "end": "(?=[\\\\n;\\\\}\\\\]\\\\)])",\r
      "beginCaptures": {\r
        "1": {\r
          "name": "keyword.control.import.typst"\r
        }\r
      },\r
      "patterns": [\r
        {\r
          "include": "#comments"\r
        },\r
        {\r
          "include": "#expression"\r
        }\r
      ]\r
    },\r
    "importStatement": {\r
      "name": "meta.expr.import.typst",\r
      "begin": "(\\\\bimport\\\\b(?!-))\\\\s*",\r
      "end": "(?=[\\\\n;\\\\}\\\\]\\\\)])",\r
      "beginCaptures": {\r
        "1": {\r
          "name": "keyword.control.import.typst"\r
        }\r
      },\r
      "patterns": [\r
        {\r
          "include": "#comments"\r
        },\r
        {\r
          "include": "#importPathClause"\r
        },\r
        {\r
          "match": "\\\\:",\r
          "name": "punctuation.separator.colon.typst"\r
        },\r
        {\r
          "match": "\\\\*",\r
          "name": "keyword.operator.wildcard.typst"\r
        },\r
        {\r
          "match": "\\\\,",\r
          "name": "punctuation.separator.comma.typst"\r
        },\r
        {\r
          "include": "#importAsClause"\r
        },\r
        {\r
          "include": "#expression"\r
        }\r
      ]\r
    },\r
    "importPathClause": {\r
      "begin": "(\\\\bimport\\\\b(?!-))\\\\s*",\r
      "end": "(?=\\\\:|as)",\r
      "beginCaptures": {\r
        "1": {\r
          "name": "keyword.control.import.typst"\r
        }\r
      },\r
      "patterns": [\r
        {\r
          "include": "#comments"\r
        },\r
        {\r
          "include": "#expression"\r
        }\r
      ]\r
    },\r
    "importAsClause": {\r
      "begin": "(\\\\bas\\\\b)\\\\s*",\r
      "end": "(?=[\\\\s;\\\\}\\\\]\\\\)\\\\:])",\r
      "beginCaptures": {\r
        "1": {\r
          "name": "keyword.control.import.typst"\r
        }\r
      },\r
      "patterns": [\r
        {\r
          "include": "#comments"\r
        },\r
        {\r
          "include": "#identifier"\r
        }\r
      ]\r
    },\r
    "letStatement": {\r
      "name": "meta.expr.let.typst",\r
      "begin": "(?=(?:(let\\\\b(?!-))))",\r
      "end": "(?!\\\\=)(?=[\\\\s;\\\\}\\\\]\\\\)])",\r
      "patterns": [\r
        {\r
          "include": "#comments"\r
        },\r
        {\r
          "include": "#letBindingClause"\r
        },\r
        {\r
          "include": "#letInitClause"\r
        }\r
      ]\r
    },\r
    "letBindingClause": {\r
      "begin": "(let\\\\b(?!-))\\\\s*",\r
      "end": "(?=[=;\\\\]}\\\\n])",\r
      "beginCaptures": {\r
        "1": {\r
          "name": "storage.type.typst"\r
        }\r
      },\r
      "patterns": [\r
        {\r
          "include": "#comments"\r
        },\r
        {\r
          "begin": "(\\\\b[\\\\p{XID_Start}_][\\\\p{XID_Continue}_\\\\-]*)(\\\\()",\r
          "end": "\\\\)|(?=[;\\\\}\\\\]])",\r
          "beginCaptures": {\r
            "1": {\r
              "name": "entity.name.function.typst",\r
              "patterns": [\r
                {\r
                  "include": "#primitiveFunctions"\r
                }\r
              ]\r
            },\r
            "2": {\r
              "name": "meta.brace.round.typst"\r
            }\r
          },\r
          "endCaptures": {\r
            "0": {\r
              "name": "meta.brace.round.typst"\r
            }\r
          },\r
          "patterns": [\r
            {\r
              "include": "#patternOrArgsBody"\r
            }\r
          ]\r
        },\r
        {\r
          "begin": "\\\\(",\r
          "end": "\\\\)|(?=[;\\\\}\\\\]])",\r
          "beginCaptures": {\r
            "0": {\r
              "name": "meta.brace.round.typst"\r
            }\r
          },\r
          "endCaptures": {\r
            "0": {\r
              "name": "meta.brace.round.typst"\r
            }\r
          },\r
          "patterns": [\r
            {\r
              "include": "#patternOrArgsBody"\r
            }\r
          ]\r
        },\r
        {\r
          "include": "#identifier"\r
        }\r
      ]\r
    },\r
    "letInitClause": {\r
      "begin": "=\\\\s*",\r
      "end": "(?=[\\\\n;\\\\}\\\\]\\\\)])",\r
      "beginCaptures": {\r
        "0": {\r
          "name": "keyword.operator.assignment.typst"\r
        }\r
      },\r
      "patterns": [\r
        {\r
          "include": "#comments"\r
        },\r
        {\r
          "include": "#expression"\r
        }\r
      ]\r
    },\r
    "ifStatement": {\r
      "name": "meta.expr.if.typst",\r
      "begin": "(?=(?:(else\\\\s+)?(if\\\\b(?!-))))",\r
      "end": "(?<=\\\\}|\\\\])(?!\\\\s*(else)\\\\b(?!-)|[\\\\[\\\\{])|(?<=else)(?!\\\\s*(?:if\\\\b(?!-)|[\\\\[\\\\{]))|(?=[$;\\\\}\\\\]\\\\)\\\\n]|$)",\r
      "patterns": [\r
        {\r
          "include": "#comments"\r
        },\r
        {\r
          "include": "#ifClause"\r
        },\r
        {\r
          "include": "#elseClause"\r
        },\r
        {\r
          "include": "#codeBlock"\r
        },\r
        {\r
          "include": "#contentBlock"\r
        }\r
      ]\r
    },\r
    "ifClause": {\r
      "begin": "\\\\bif\\\\b(?!-)",\r
      "end": "(?<!(?:while|and|not|if|or|in|!=|==|<=|>=|<|>|\\\\+|-|\\\\*|\\\\/|=>|=|\\\\+=|-=|\\\\*=|\\\\/=)\\\\s*)(?=[\\\\[\\\\{\\\\n])|(?=[$;,\\\\}\\\\]\\\\)\\\\#\\\\n]|$)",\r
      "beginCaptures": {\r
        "0": {\r
          "name": "keyword.control.conditional.typst"\r
        }\r
      },\r
      "patterns": [\r
        {\r
          "include": "#expression"\r
        }\r
      ]\r
    },\r
    "elseClause": {\r
      "match": "\\\\belse\\\\b(?!-)",\r
      "name": "keyword.control.conditional.typst"\r
    },\r
    "forStatement": {\r
      "name": "meta.expr.for.typst",\r
      "begin": "(?=(?:(for\\\\b(?!-))\\\\s*))",\r
      "end": "(?<=[\\\\}\\\\]])(?![\\\\{\\\\[])|(?=[$;\\\\}\\\\]\\\\)\\\\n]|$)",\r
      "patterns": [\r
        {\r
          "include": "#comments"\r
        },\r
        {\r
          "include": "#forClause"\r
        },\r
        {\r
          "include": "#codeBlock"\r
        },\r
        {\r
          "include": "#contentBlock"\r
        }\r
      ]\r
    },\r
    "forClause": {\r
      "begin": "(for\\\\b)\\\\s*",\r
      "end": "(?<!(?:while|and|not|if|or|in|!=|==|<=|>=|<|>|\\\\+|-|\\\\*|\\\\/|=>|=|\\\\+=|-=|\\\\*=|\\\\/=)\\\\s*)(?=[\\\\[\\\\{\\\\n])|(?=[$;,\\\\}\\\\]\\\\)\\\\#\\\\n]|$)",\r
      "beginCaptures": {\r
        "1": {\r
          "name": "keyword.control.loop.typst"\r
        }\r
      },\r
      "patterns": [\r
        {\r
          "include": "#expression"\r
        }\r
      ]\r
    },\r
    "whileStatement": {\r
      "name": "meta.expr.while.typst",\r
      "begin": "(?=(?:(while\\\\b(?!-))))",\r
      "end": "(?<=[\\\\}\\\\]])(?![\\\\{\\\\[])|(?=[$;\\\\}\\\\]\\\\)\\\\n]|$)",\r
      "patterns": [\r
        {\r
          "include": "#comments"\r
        },\r
        {\r
          "include": "#whileClause"\r
        },\r
        {\r
          "include": "#codeBlock"\r
        },\r
        {\r
          "include": "#contentBlock"\r
        }\r
      ]\r
    },\r
    "whileClause": {\r
      "begin": "(while\\\\b)\\\\s*",\r
      "end": "(?<!(?:while|and|not|if|or|in|!=|==|<=|>=|<|>|\\\\+|-|\\\\*|\\\\/|=>|=|\\\\+=|-=|\\\\*=|\\\\/=)\\\\s*)(?=[\\\\[\\\\{\\\\n])|(?=[$;,\\\\}\\\\]\\\\)\\\\#\\\\n]|$)",\r
      "beginCaptures": {\r
        "1": {\r
          "name": "keyword.control.loop.typst"\r
        }\r
      },\r
      "patterns": [\r
        {\r
          "include": "#expression"\r
        }\r
      ]\r
    },\r
    "setStatement": {\r
      "name": "meta.expr.set.typst",\r
      "begin": "(?=(?:(set\\\\b(?!-))\\\\s*(?<!\\\\)|\\\\]|\\\\})\\\\b[\\\\p{XID_Start}_][\\\\p{XID_Continue}_\\\\-]*))",\r
      "end": "(?<=\\\\))(?!\\\\s*if\\\\b)|(?=[$\\\\s;\\\\{\\\\[\\\\}\\\\]\\\\)])",\r
      "patterns": [\r
        {\r
          "include": "#comments"\r
        },\r
        {\r
          "include": "#setClause"\r
        },\r
        {\r
          "include": "#setIfClause"\r
        }\r
      ]\r
    },\r
    "setClause": {\r
      "begin": "(set\\\\b)\\\\s+",\r
      "end": "(?=if)|(?=[$\\\\n;\\\\{\\\\[\\\\}\\\\]\\\\)])",\r
      "beginCaptures": {\r
        "1": {\r
          "name": "keyword.control.other.typst"\r
        }\r
      },\r
      "patterns": [\r
        {\r
          "include": "#comments"\r
        },\r
        {\r
          "include": "#strictFuncCallOrPropAccess"\r
        },\r
        {\r
          "include": "#identifier"\r
        }\r
      ]\r
    },\r
    "setIfClause": {\r
      "begin": "(if\\\\b(?!-))\\\\s*",\r
      "end": "(?<=\\\\S)(?<!and|or|not|in|!=|==|<=|>=|<|>|\\\\+|-|\\\\*|\\\\/|=|\\\\+=|-=|\\\\*=|\\\\/=)(?!\\\\s*(?:and|or|not|in|!=|==|<=|>=|<|>|\\\\+|-|\\\\*|\\\\/|=|\\\\+=|-=|\\\\*=|\\\\/=|\\\\.))|(?=[\\\\n;\\\\}\\\\]\\\\)])",\r
      "beginCaptures": {\r
        "1": {\r
          "name": "keyword.control.conditional.typst"\r
        }\r
      },\r
      "patterns": [\r
        {\r
          "include": "#comments"\r
        },\r
        {\r
          "include": "#expression"\r
        }\r
      ]\r
    },\r
    "showStatement": {\r
      "name": "meta.expr.show.typst",\r
      "begin": "(?=(?:(show\\\\b(?!-))))",\r
      "end": "(?=[\\\\$\\\\s;\\\\{\\\\[\\\\}\\\\]\\\\)])",\r
      "patterns": [\r
        {\r
          "include": "#comments"\r
        },\r
        {\r
          "include": "#showAnyClause"\r
        },\r
        {\r
          "include": "#showSelectClause"\r
        },\r
        {\r
          "include": "#showSubstClause"\r
        }\r
      ]\r
    },\r
    "showAnyClause": {\r
      "match": "(show\\\\b)\\\\s*(?=\\\\:)",\r
      "captures": {\r
        "1": {\r
          "name": "keyword.control.other.typst"\r
        }\r
      }\r
    },\r
    "showSelectClause": {\r
      "begin": "(show\\\\b)\\\\s*",\r
      "end": "(?=[$:;\\\\}\\\\]\\\\n])",\r
      "beginCaptures": {\r
        "1": {\r
          "name": "keyword.control.other.typst"\r
        }\r
      },\r
      "patterns": [\r
        {\r
          "include": "#comments"\r
        },\r
        {\r
          "include": "#markupLabel"\r
        },\r
        {\r
          "include": "#expression"\r
        }\r
      ]\r
    },\r
    "showSubstClause": {\r
      "begin": "(\\\\:)\\\\s*",\r
      "end": "(?=[\\\\n;\\\\}\\\\]\\\\)])",\r
      "beginCaptures": {\r
        "1": {\r
          "name": "punctuation.separator.colon.typst"\r
        }\r
      },\r
      "patterns": [\r
        {\r
          "include": "#comments"\r
        },\r
        {\r
          "include": "#expression"\r
        }\r
      ]\r
    },\r
    "callArgs": {\r
      "begin": "\\\\(",\r
      "end": "\\\\)|(?=[;\\\\}\\\\]])",\r
      "beginCaptures": {\r
        "0": {\r
          "name": "meta.brace.round.typst"\r
        }\r
      },\r
      "endCaptures": {\r
        "0": {\r
          "name": "meta.brace.round.typst"\r
        }\r
      },\r
      "patterns": [\r
        {\r
          "include": "#patternOrArgsBody"\r
        }\r
      ]\r
    },\r
    "patternOrArgsBody": {\r
      "patterns": [\r
        {\r
          "include": "#comments"\r
        },\r
        {\r
          "include": "#paramOrArgName"\r
        },\r
        {\r
          "include": "#expression"\r
        }\r
      ]\r
    },\r
    "strictFuncCallOrPropAccess": {\r
      "name": "meta.expr.call.typst",\r
      "begin": "(?=(?:(\\\\.)?(?<!\\\\)|\\\\]|\\\\})\\\\b[\\\\p{XID_Start}_][\\\\p{XID_Continue}_\\\\-]*(?=\\\\(|\\\\[)))",\r
      "end": "(?:(?<=\\\\)|\\\\])(?![\\\\[\\\\(\\\\.]))|(?=[\\\\$\\\\s;,\\\\}\\\\]\\\\)\\\\#]|$)",\r
      "patterns": [\r
        {\r
          "match": "\\\\.",\r
          "name": "keyword.operator.accessor.typst"\r
        },\r
        {\r
          "match": "(?<!\\\\)|\\\\]|\\\\})\\\\b[\\\\p{XID_Start}_][\\\\p{XID_Continue}_\\\\-]*(?=\\\\(|\\\\[)",\r
          "captures": {\r
            "0": {\r
              "patterns": [\r
                {\r
                  "include": "#primitiveFunctions"\r
                },\r
                {\r
                  "include": "#primitiveTypes"\r
                },\r
                {\r
                  "match": ".*",\r
                  "name": "entity.name.function.typst"\r
                }\r
              ]\r
            }\r
          }\r
        },\r
        {\r
          "include": "#identifier"\r
        },\r
        {\r
          "match": "(\\\\()\\\\s*(\\\\))",\r
          "captures": {\r
            "1": {\r
              "name": "meta.brace.round.typst"\r
            },\r
            "2": {\r
              "name": "meta.brace.round.typst"\r
            }\r
          }\r
        },\r
        {\r
          "include": "#callArgs"\r
        },\r
        {\r
          "include": "#contentBlock"\r
        }\r
      ]\r
    }\r
  }\r
}\r
`;
export {
  n as default
};
