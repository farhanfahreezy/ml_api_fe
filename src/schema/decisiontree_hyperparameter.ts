import { z } from "zod";

export const dictSchema = z.record(z.any());

export const DecisionTreeParametersSchema = z.object({
  criterion: z.enum(["gini", "entropy", "log_loss"]).default("gini"),
  splitter: z.enum(["best", "random"]).default("best"),
  max_depth: z.number().int().nullable().default(null),
  min_samples_split: z.number().default(2),
  min_samples_leaf: z.number().default(1),
  min_weight_fraction_leaf: z.number().default(0),
  max_features: z
    .union([z.enum(["sqrt", "log2"]), z.number(), z.null()])
    .default("sqrt"),
  random_state: z.union([z.number().int(), z.null()]).default(null),
  max_leaf_nodes: z.number().int().nullable().default(null),
  min_impurity_decrease: z.number().default(0),
  class_weight: z
    .union([
      z.enum(["balanced"]),
      dictSchema, // Single dict (object)
      z.array(dictSchema), // List of dicts (array of objects)
      z.null(),
    ])
    .default(null),
  ccp_alpha: z.number().nonnegative().default(0),
  monotonic_cst: z
    .union([
      z.array(z.number().int()), // Array-like of integers
      z.null(),
    ])
    .default(null),
});

export const DecisionTreeParameterOptimizationSchema = z.object({
  criterion: z.array(z.enum(["gini", "entropy", "log_loss"])),
  splitter: z.array(z.enum(["best", "random"])),
  max_depth: z.array(z.number().int()),
  min_samples_split: z.array(z.number()),
  min_samples_leaf: z.array(z.number()),
  min_weight_fraction_leaf: z.array(z.number()),
  max_features: z.array(z.union([z.enum(["sqrt", "log2"]), z.number()])),
  random_state: z.array(z.number().int()),
  max_leaf_nodes: z.array(z.number().int()),
  min_impurity_decrease: z.array(z.number()),
  class_weight: z.array(
    z.union([z.enum(["balanced"]), dictSchema, z.array(dictSchema)])
  ),
  ccp_alpha: z.array(z.number().nonnegative()),
  monotonic_cst: z.array(z.array(z.number().int())),
});
