module.exports = {
    "globals": {
        "MyGlobal": true
    },
    "rules": {
        "arrow-spacing": "error",
        "arrow-parens": "error",
        "brace-style": "off",
        "comma-spacing": "off",
        "curly": [ "error", "multi-line" ],
        "eqeqeq": [ "warn", "smart" ],
        "id-match": "error",
        "indent": "off",
        "max-classes-per-file": [ "error", 1 ],
        "new-parens": "error",
        "no-bitwise": "error",
        "no-caller": "error",
        "no-confusing-arrow": [ "error", { "allowParens": true } ],
        "no-console": "warn",
        "no-dupe-class-members": "off",
        "no-duplicate-imports": "error",
        "no-eval": "error",
        "no-extra-semi": "off",
        "no-fallthrough": "off",
        "no-multi-spaces": [ "error", { "ignoreEOLComments": true } ],
        "no-new-wrappers": "error",
        "no-prototype-builtins": "off",
        "no-shadow": [ "error", { "hoist": "all" } ],
        "no-throw-literal": "error",
        "no-trailing-spaces": "error",
        "no-undef-init": "error",
        "no-underscore-dangle": "error",
        "no-unused-expressions": "off",
        "no-unused-vars": "off",
        "no-useless-concat": "error",
        "no-var": "error",
        "no-whitespace-before-property": "error",
        "one-var": [ "error", "never" ],
        "prefer-arrow-callback": [ "error", { "allowNamedFunctions": true } ],
        "prefer-const": "error",
        "quotes": ["error", "double", { "allowTemplateLiterals": true, "avoidEscape": true }],
        "semi": "off",
        "semi-spacing": [ "error", { "before": false, "after": true } ],
        "sort-imports": [ "error", { "allowSeparatedGroups": true } ],
        "space-before-function-paren": "off",
        "spaced-comment": [ "error", "always" ],
        "@typescript-eslint/array-type": [ "error", { "default": "array-simple" } ],
        "@typescript-eslint/brace-style": [ "error", "stroustrup", { "allowSingleLine": true } ],
        "@typescript-eslint/comma-spacing": [ "error", { "before": false, "after": true } ],
        "@typescript-eslint/explicit-function-return-type": "off",
        "@typescript-eslint/explicit-member-accessibility": [ "off", { "accessibility": "explicit" } ],
        "@typescript-eslint/indent": [ "error", 4, { "SwitchCase": 1 }],
        "@typescript-eslint/member-delimiter-style": "off",
        "@typescript-eslint/naming-convention": [
            "error",
            { "selector": "default", "format": ["camelCase"], "leadingUnderscore": "allow" },
            { "selector": "variable", "format": ["camelCase", "UPPER_CASE"], "leadingUnderscore": "allow" },
            { "selector": "typeLike", "format": ["PascalCase"] },
            { "selector": "interface", "format": ["PascalCase"], "prefix": ["I"] }
        ],
        "@typescript-eslint/no-dupe-class-members": "error",
        "@typescript-eslint/no-explicit-any": "off",
        "@typescript-eslint/no-extra-semi": "error",
        "@typescript-eslint/no-inferrable-types": "off",
        "@typescript-eslint/no-unused-expressions": "error",
        "@typescript-eslint/no-unused-vars": "off",
        "@typescript-eslint/no-use-before-define": "off",
        "@typescript-eslint/no-var-requires": "warn",
        "@typescript-eslint/prefer-for-of": "error",
        "@typescript-eslint/prefer-function-type": "error",
        "@typescript-eslint/semi": [ "error", "always" ],
        "@typescript-eslint/space-before-function-paren": [ "error", "never" ],
        "@typescript-eslint/unified-signatures": "error"
    }
};
