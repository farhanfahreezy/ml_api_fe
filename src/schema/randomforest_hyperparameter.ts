import { z } from "zod";
import { dictSchema } from "./decisiontree_hyperparameter";

export const RandomForestParametersSchema = z.object({
  n_estimators: z.number().int().default(100),
  criterion: z.enum(["gini", "entropy", "log_loss"]).default("gini"),
  max_depth: z.number().int().nullable().default(null),
  min_samples_split: z.number().default(2),
  min_samples_leaf: z.number().default(1),
  min_weight_fraction_leaf: z.number().default(0),
  max_features: z
    .union([z.enum(["sqrt", "log2"]), z.number(), z.null()])
    .default("sqrt"),
  max_leaf_nodes: z.number().int().nullable().default(null),
  min_impurity_decrease: z.number().default(0),
  bootstrap: z.boolean().default(true),
  oob_score: z.boolean().default(false),
  n_jobs: z.number().int().nullable().default(null),
  random_state: z.union([z.number().int(), z.null()]).default(null),
  verbose: z.number().int().default(0),
  warm_start: z.boolean().default(false),
  class_weight: z
    .union([
      z.enum(["balanced", "balanced_subsample"]),
      dictSchema, // Single dict (object)
      z.array(dictSchema), // List of dicts (array of objects)
      z.null(),
    ])
    .default(null),
  ccp_alpha: z.number().nonnegative().default(0),
  max_samples: z.number().nullable().default(null),
  monotonic_cst: z
    .union([
      z.array(z.number().int()), // Array-like of integers
      z.null(),
    ])
    .default(null),
});

export const RandomForestParameterOptimizationSchema = z.object({
  n_estimators: z.array(z.number().int()),
  criterion: z.array(z.enum(["gini", "entropy", "log_loss"])),
  max_depth: z.array(z.number().int()),
  min_samples_split: z.array(z.number()),
  min_samples_leaf: z.array(z.number()),
  min_weight_fraction_leaf: z.array(z.number()),
  max_features: z.array(z.union([z.enum(["sqrt", "log2"]), z.number()])),
  max_leaf_nodes: z.array(z.number().int()),
  min_impurity_decrease: z.array(z.number()),
  bootstrap: z.array(z.boolean()),
  oob_score: z.array(z.boolean()),
  n_jobs: z.array(z.number().int()),
  random_state: z.array(z.number().int()),
  verbose: z.array(z.number().int()),
  warm_start: z.array(z.boolean()),
  class_weight: z.array(
    z.union([z.enum(["balanced"]), dictSchema, z.array(dictSchema)])
  ),
  ccp_alpha: z.array(z.number().nonnegative()),
  max_samples: z.array(z.number()),
  monotonic_cst: z.array(z.array(z.number().int())),
});
