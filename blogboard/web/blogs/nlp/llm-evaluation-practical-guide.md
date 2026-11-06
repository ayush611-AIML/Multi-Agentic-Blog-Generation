# Evaluating LLM Applications with Task-Focused Tests

An LLM application's quality is not captured by one benchmark score. A customer-support assistant, a summarizer, and a code helper make different promises, so each needs tests tied to its intended use.

## Build an evaluation set

Collect representative inputs, including common cases, ambiguous requests, edge cases, and known failure examples. Write the expected behavior as criteria rather than insisting on one exact string when many answers could be valid. Keep a held-out set for release checks and version the prompts, model, tools, and data used to produce each result.

## Measure distinct failure modes

For retrieval-based answers, test whether the right sources were retrieved and whether the final response is supported by them. Separately assess factual correctness, completeness, instruction following, latency, and cost. Add safety cases for requests the system should refuse or route to a human.

Automated graders can speed iteration, but they are themselves models and can be inconsistent. Calibrate them against human-reviewed examples, inspect disagreements, and do not treat a fluent response as evidence of correctness.

## Close the feedback loop

Run evaluations whenever a prompt, model, index, or tool changes. Review real user feedback under appropriate privacy controls, turn recurring failures into regression tests, and set release thresholds before deployment. Monitor production samples because offline tests cannot capture every shift in user behavior.

The goal is not to prove a model never fails. It is to find meaningful failures early and make improvements measurable.

### References

- [Stanford HELM](https://crfm.stanford.edu/helm/)
- [NIST AI Risk Management Framework](https://www.nist.gov/itl/ai-risk-management-framework)
