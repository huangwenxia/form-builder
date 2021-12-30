module.exports = {
    extends: ["@commitlint/config-conventional"],
    rules: {
        "type-enum": [2, "always", ["build", "ci", "docs", "feat", "fix", "perf", "refactor", "style", "test", "revert", "chore"]],
        "type-case": [0],
        "type-empty": [0],
        "scope-empty": [0],
        "scope-case": [0],
        "subject-full-stop": [0, "never"],
        "subject-case": [0, "never"],
        "header-max-length": [0, "always", 72]
    }
    // prompt: {
    //     questions: {
    //         types: {
    //             description: "选择你要提交的类型:",
    //             enum: {
    //                 feat: {
    //                     description: "新增功能点、新增需求",
    //                     title: "Features"
    //                 },
    //                 fix: {
    //                     description: "修复Bug,线上，测试，验收阶段的bug",
    //                     title: "Bug Fixes"
    //                 },
    //                 docs: {
    //                     description: "文档增删改",
    //                     title: "Documentation"
    //                 },
    //                 style: {
    //                     description: "样式修改(空白、格式、缺少分号等)",
    //                     title: "Styles"
    //                 },
    //                 refactor: {
    //                     description: "既不修复bug也不添加新功能的更改",
    //                     title: "Code Refactoring"
    //                 },
    //                 perf: {
    //                     description: "性能优化",
    //                     title: "Performance Improvements"
    //                 },
    //                 test: {
    //                     description: "增加测试",
    //                     title: "Tests"
    //                 },
    //                 build: {
    //                     description: "影响构建系统或外部依赖项的更改(示例范围:gulp、broccoli、npm)",
    //                     title: "Builds"
    //                 },
    //                 ci: {
    //                     description: "对CI配置文件和脚本的更改(示例范围:Travis, Circle, BrowserStack, SauceLabs)",
    //                     title: "Continuous Integrations"
    //                 },
    //                 chore: {
    //                     description: "除src目录或测试文件以外的修改",
    //                     title: "Chores"
    //                 },
    //                 revert: {
    //                     description: "回退历史版本",
    //                     title: "Reverts"
    //                 },
    //                 conflict: {
    //                     description: "修改冲突",
    //                     title: "Conflict"
    //                 },
    //                 font: {
    //                     description: "字体文件更新",
    //                     title: "Fonts"
    //                 },
    //                 delete: {
    //                     description: "删除文件",
    //                     title: "Delete Files"
    //                 },
    //                 stash: {
    //                     description: "暂存文件",
    //                     title: "Stash Files"
    //                 }
    //             }
    //         }
    //     }
    // }
}
