module.exports = {
  rules: {
    /////////////////////////
    // TypeScript-specific //
    "adjacent-overload-signatures": true,
    "ban-types": [true,
      ["Object", "Use: {}"],
      ["String", "Use: string"],
      ["Function", "Use more specific type: () => void"]
    ],
    "member-access": [true, "no-public"],
    "member-ordering": [true, {"order": "statics-first"}],
    "no-unsafe-any": {
      "severity": "warning",
    },
    "unified-signatures": {
      "severity": "warning",
    },
    ///////////////////
    // Functionality //
    "ban": {
      "options": [
        ["*", "bind", "bind isn't type-safe"],
        ["*", "call", "call isn't type-safe"],
        ["*", "apply", "apply isn't type-safe"],
      ],
      "severity": "warning",
    },
    "function-constructor": true,
    "label-position": {
      "severity": "warning",
    },
    "no-arg": true,
    "no-duplicate-super": true,
    "no-duplicate-switch-case": {
      "severity": "warning",
    },
    "no-eval": true,
    "no-for-in-array": true,
    "no-restricted-globals": {
      "options": [true, "name", "length", "event"],
      "severity": "warning",
    },
    "no-return-await": true,
    "no-shadowed-variable": {
      "severity": "warning",
    },
    "no-sparse-arrays": true,
    "no-tautology-expression": true,
    "no-this-assignment": {
      "options": {"allow-destructuring": true},
      "severity": "warning",
    },
    "no-unbound-method": [true, {
      "ignore-static": true,
      "allow-delete": true,
      "allow-typeof": true,
    }],
    "no-unnecessary-class": {
      "options": ["allow-empty-class", "allow-constructor-only"],
      "severity": "warning",
    },
    "no-unsafe-finally": true,
    "no-unused-expression": {
      "options": [true, "allow-fast-null-checks", "allow-new"],
      "severity": "warning",
    },
    "no-var-keyword": true,
    "prefer-object-spread": {
      "severity": "warning",
    },
    "radix": {
      "severity": "warning",
    },
    "static-this": true,
    "strict-type-predicates": true,
    "triple-equals": true,
    "use-default-type-parameter": {
      "severity": "warning",
    },
    "use-isnan": true,
    // Maintainability
    "cyclomatic-complexity": {
      "options": 25,
      "severity": "warning",
    },
    "deprecation": {
      "severity": "warning",
    },
    "no-duplicate-imports": [true, {"allow-namespace-imports": true}],
    "prefer-const": [true, {"destructuring": "all"}],
    // "prefer-readonly": true,
    ///////////
    // Style //
    "arrow-return-shorthand": {
      "severity": "warning",
    },
    "class-name": true,
    "comment-format": {
      "options": ["check-space"],
      "severity": "warning",
    },
    "encoding": true,
    "file-name-casing": [true, "kebab-case"],
    "interface-over-type-literal": {
      "severity": "warning",
    },
    "newline-per-chained-call": {
      "severity": "warning",
    },
    "no-angle-bracket-type-assertion": true,
    "object-literal-key-quotes": [true, "as-needed"],
    "object-literal-shorthand": true,
    "one-line": [true,
      "check-catch",
      "check-finally",
      "check-else",
      "check-open-brace",
      "check-whitespace"
    ],
    "one-variable-per-declaration": [true, "ignore-for-loop"],
    "prefer-method-signature": true,
    "prefer-switch": {
      "options": {"min-cases": 2},
      "severity": "warning",
    },
    "prefer-template": {
      "options": [true, "allow-single-concat"],
      "severity": "warning",
    },
    "prefer-while": true,
    "return-undefined": {
      "severity": "warning",
    },
    "space-before-function-paren": [true, {
      "anonymous": "always",
      "named": "never",
      "asyncArrow": "always",
    }],
    "space-within-parens": [true, 0],
    "unnecessary-else": {
      "severity": "warning",
    },
    "variable-name": [true,
      "check-format",
      "require-const-for-all-caps",
      "allow-leading-underscore",
      "allow-trailing-underscore",
      "ban-keywords",
    ],
    ////////////
    // Format //
    "align": [true,
      "arguments",
      "elements",
      "members",
      "parameters",
      "statements"
    ],
    "eofline": true,
    "import-spacing": true,
    "indent": [true, "spaces", 2],
    "linebreak-style": [true, "LF"],
    "max-line-length": [true, {
      "limit": 90,
      "ignore-pattern": "^import |^export {(.*?)}",
    }],
    "no-consecutive-blank-lines": [true, 2],
    "no-irregular-whitespace": true,
    "no-trailing-whitespace": true,
    "quotemark": [true, "single", "avoid-escape", "avoid-template"],
    "semicolon": [true, "always", "ignore-bound-class-methods"],
    "trailing-comma": [true, {"multiline": "always", "singleline": "never"}],
    "typedef-whitespace": [
      true,
      {
        "call-signature": "nospace",
        "index-signature": "nospace",
        "parameter": "nospace",
        "property-declaration": "nospace",
        "variable-declaration": "nospace",
      },
      {
        "call-signature": "onespace",
        "index-signature": "onespace",
        "parameter": "onespace",
        "property-declaration": "onespace",
        "variable-declaration": "onespace",
      },
    ],
    "whitespace": [true,
      "check-branch",
      "check-decl",
      "check-operator",
      "check-module",
      "check-separator",
      "check-rest-spread",
      "check-type",
      "check-typecast",
      "check-type-operator",
      "check-preblock",
      "check-postbrace",
    ],
  },
};
