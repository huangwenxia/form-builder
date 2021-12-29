module.exports = {
    root: true,
    env: {
        browser: true,
        es2021: true,
        node: true
    },
    /* 指定如何解析语法。可以为空，但若不为空，只能配该值，原因见下文。*/
    parser: "vue-eslint-parser",
    parserOptions: {
        ecmaVersion: 13,
        parser: "@typescript-eslint/parser",
        sourceType: "module"
    },
    extends: ["eslint:recommended", "prettier"], //Version 8.0.0 (2021-02-21)Changed: All configs have been merged into one!

    plugins: ["vue", "@typescript-eslint"],
    rules: {
        "no-console": process.env.NODE_ENV === "production" ? "warn" : "off",
        "no-debugger": process.env.NODE_ENV === "production" ? "warn" : "off"
    }
}
