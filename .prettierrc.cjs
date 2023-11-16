module.exports = {
  // 箭头函数只有一个参数时 可以省略括号
  arrowParens:'avoid',
  // 括号内不不出现 空格
  bracketSpacing: false,
  // 行结束符使用 Unix 格式
  endOfLine: 'lf',
  // true: 将 > 放在最后一行，而不是新的一行
  // jsxBracketSameLine 已被弃用，在 Prettier 2.0 中，它被新的选项 bracketSameLine 替换。新的 bracketSameLine 选项的作用与 jsxBracketSameLine 相同，但它也适用于其他类型的标签，如 HTML
  bracketSameLine: false,
  // 行宽
  printWidth: 100,
  //  换行方式
  proseWrap: 'preserve',
  // 分号
  semi: false,
  // 使用单引号
  singleQuote: true,
  // 缩进
  tabWidth: 2,
  // 使用tab缩进
  useTabs: false,
  // 尾随逗号 多行对象 数组 在最后一行增加逗号
  trailingComma: 'es5',

  //`parser` 选项用于指定 Prettier 应该使用哪种解析器来解析你的代码。在这个例子中，`'typescript'` 表示 Prettier 将使用 TypeScript 解析器来解析你的代码。这意味着它将能够理解并正确格式化 TypeScript 代码。
  parser: 'typescript',
}
