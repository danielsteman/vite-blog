# Parallelizing workloads with Celery and RabbitMQ on Kubernetes 🍃🐇☸️

&nbsp;

TBD

&nbsp;

Recently I have been working on a project with a lot of IO, as I had to process a vast amount of documents in a relatively short time. After writing the application that contained the business logic, I had to find a way to parallelize it to make it scalable. Since my team already hosts most software on Kubernetes, running it in several "worker containers" made sense. At first I followed [some examples with native Kubernetes object](https://kubernetes.io/docs/tasks/job/parallel-processing-expansion/), which worked well but missed some important features. For example, I would have to build retry logic to in case a `Job` would fail for some reason. Also, I would have to deploy a key-value database that would contain the queue and build CRUD-like operations to let the `Jobs` interact with the queue. Even though this seemed like a fun projects, I started looking for alternative solutions, and that is when I a colleague pointed me towards [celery](https://docs.celeryq.dev/en/stable/getting-started/introduction.html).

Celery met my requirements and counters the issues I had with the solution that involved solely K8s native objects. Quoted from the docs:

- Highly available

> Workers and clients will automatically retry in the event of connection loss or failure, and some brokers support HA in way of Primary/Primary or Primary/Replica replication.

- Fast

> A single Celery process can process millions of tasks a minute, with sub-millisecond round-trip latency (using RabbitMQ, librabbitmq, and optimized settings).

- Flexible

> Almost every part of Celery can be extended or used on its own, Custom pool implementations, serializers, compression schemes, logging, schedulers, consumers, producers, broker transports, and much more.
