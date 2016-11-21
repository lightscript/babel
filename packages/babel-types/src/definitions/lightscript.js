import defineType, { assertNodeType } from "./index";


defineType("ForFromStatement", {
  visitor: ["iteratorVar", "valueVar", "initVal", "test", "step", "body"],
  aliases: ["Scopable", "Statement", "For", "BlockParent", "Loop", "ForXStatement"],
  fields: {
    iteratorVar: {
      validate: assertNodeType("Identifier"),
    },
    valueVar: {
      validate: assertNodeType("Identifier"),
      optional: true,
    },
    initVal: {
      validate: assertNodeType("Expression"),
    },
    test: {
      validate: assertNodeType("Expression"),
      optional: true,
    },
    step: {
      validate: assertNodeType("Expression"),
      optional: true,
    },
    body: {
      validate: assertNodeType("Statement"),
    },
  },
});
