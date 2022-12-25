# Recommender systems 📈

&nbsp;

TBD

&nbsp;

There are three important types of recommendation models:

- Content based
- Popularity based
- Collaborative based

A popularity-based model is often used as a baseline because it is fairly simple, however it doesn't provide personalisation. A content-based model recommends items that fits user's content profile given its earlier interactions. This can be done in several ways, such as by measuring the cosine similarity.

### Cosine similarity

[Cosine similarity](https://scikit-learn.org/stable/modules/generated/sklearn.metrics.pairwise.cosine_similarity.html) is a measure of similarity between two vectors, where one vector could be a user and one vector could be an item, where the goal would be to find out how well the item fits the user. For such a problem the user's earlier interactions need to be known. 

### Collaborative filtering

User-based: find a user that shows a similar behaviour and recommend that this user likes. This has the disadvantage of an item cold-start, which means that when a similar user hasn't liked or disliked a new item yet, that new item will never be considered. It also suffers from an user cold-start, because there need to be enough users to be considered as similar users. There are two popular approaches:

- Memory-based: find relevant items and/or users with, for example, cosine similarity. This can be done by looking at item similarity (a user who liked this item probably also likes this item) or user similarity ()
- Model-based: find unknown ratings with features computed through matrix factorization methods.

### Model based collaborative filtering

You start with an interaction matrix (of users and items e.g.) which can be exactly decomposed in three matrices. If the interaction matrix is used as is, the model will be overfitted. To introduce some nuance, rows and columns are dropped and replaced by a number of K latent features, such that you end up with two matrices that can be multiplied to arrive at an approximation of the interaction matrix. 
