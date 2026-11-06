# RAG Evaluation: Measure Retrieval Before Generation

Retrieval-augmented generation (RAG) connects a language model to an external collection of documents. When an answer is wrong, the cause may be retrieval, source quality, context construction, or generation. Testing those stages separately makes debugging faster.

## Create a traceable test set

For each representative question, record the expected source passages and the facts a good answer must include. Run the retriever by itself and check whether relevant material appears near the top. Track recall of expected sources and inspect irrelevant or conflicting passages.

## Test the answer against evidence

Once retrieval is adequate, evaluate whether the response is supported by the supplied context, answers the question, and cites the right passages. Test questions with no answer in the corpus: a dependable system should say it cannot find support instead of filling the gap with a guess.

## Fix the right layer

If needed evidence is absent, improve document parsing, chunking, metadata, or query formulation. If relevant evidence is present but ignored, improve context ordering or response instructions. If documents conflict, add freshness and authority rules rather than asking the model to resolve an undefined dispute.

RAG can make information easier to update and inspect, but it does not guarantee factual answers. Keep source versions, retrieval results, and evaluation outcomes so changes can be reproduced.

### References

- [Retrieval-Augmented Generation for Knowledge-Intensive NLP Tasks](https://arxiv.org/abs/2005.11401)
- [NIST AI Risk Management Framework](https://www.nist.gov/itl/ai-risk-management-framework)
