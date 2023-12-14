# Deploying Databricks asset bundles using Gitlab CI

&nbsp;

TBD

&nbsp;

Databricks asset bundles (DAB) is a thin wrapper around Terraform that allows you to bundle pipelines ([delta live tables](https://www.databricks.com/product/delta-live-tables)), workflows, machine learning (ML) endpoints, ML experiments and ML model. Essentially, it's Databricks infrastructure-as-code (IaC) solution. These bundles contain YAML configuration files that make deployments highly configurable. In my experience, there is no reason to define your own Terraform code outside of DAB.

&nbsp;

Instead of the `terraform` CLI, you can use the `databricks` CLI to validate and deploy bundles to a specific target:

```
databricks bundle validate
databricks bundle deploy -t dev
```

With the `deploy` command, the source files in the bundle will be stored in the Databricks filesystem (DBFS) under `files/` and the Terraform state files will be stored under `state/`. This means that you won't have to save state files in a self-provisioned storage solution like you'd do in conventional Terraform projects.
