# ML model serving with Seldon Core

&nbsp;

*TBD*

&nbsp;

Usually a machine learning project starts off with the configuration and training of a model, which can be accomplished relatively quickly thanks to libraries such as [scikit-learn](https://scikit-learn.org/stable/). Once trained, one can feed new data points to the model to calculate an output such as a number, which can provide new insights. At this moment, the trained model is only available on the system of the creator of the model. In case of, let's say, a model that calculates dynamic prices which are widely used across an organisation, this is not optimal nor desirable.

&nbsp;

To solve this issue, the trained model needs to be made available to others, which can be done by deploying it as an application on a server, with an interface so it can communicate (API). Instead of reinventing the wheel and building a custom API, one could use [Seldon Core](https://github.com/SeldonIO/seldon-core) to do this. This open-source, *blazingly fast*, framework, can convert machine learning models into production-ready REST or GRPC microservices. Aside from horizontal scalability, it offers a bunch of features such as "Advanced Metrics, Request Logging, Explainers, Outlier Detectors, A/B Tests, Canaries and more". I won't get into these features, but it's good to know that they exist.

&nbsp;



&nbsp;

You might ask, why Seldon Core and not [BentoML](https://github.com/bentoml/BentoML) or [Kubeflow](https://github.com/kubeflow/kubeflow) or another tool that has recently risen among the wave of [MLOps](https://ml-ops.org/) tools? The honest answer is: I don't know. You have to start somewhere, and Seldon Core seemed to match our (future) requirements. There are also managed solutions such as Azure ML, AWS Sagemaker and Google Cloud ML, but those provide less flexibility (and are less fun if you want to tinker like me).

