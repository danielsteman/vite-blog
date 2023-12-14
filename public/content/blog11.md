# Deploying Databricks asset bundles using Gitlab CI

&nbsp;

TBD

&nbsp;

Databricks asset bundles (DAB) is a thin wrapper around Terraform that allows you to bundle pipelines ([delta live tables](https://www.databricks.com/product/delta-live-tables)), workflows, machine learning (ML) endpoints, ML experiments and ML model. Essentially, it's Databricks infrastructure-as-code (IaC) solution. These bundles contain YAML configuration files that make deployments highly configurable. In my experience, there is no reason to define your own Terraform code outside of DAB.
