# Multilingual NLP: Tokenization, Data, and Evaluation

A language model that performs well in English may behave very differently in another language. Differences in script, morphology, spelling conventions, dialect, and available training data all affect both model quality and user experience.

## Inspect the text pipeline

Tokenizers can split the same meaning into very different numbers of tokens across languages. This affects context limits, latency, and cost. Test representative text in each target language, including diacritics, mixed scripts, code-switching, and informal spelling. Verify normalization does not erase meaningful distinctions.

## Build representative data

Measure coverage by language and domain rather than relying on a single total dataset size. Review licensing, consent, and label quality. Translation can extend a dataset, but translated examples may not preserve idioms, cultural context, or the real distribution of user requests. Native-speaker review is valuable for both examples and evaluation criteria.

## Evaluate language by language

Report task performance and error types for each language. Include dialects and lower-resource varieties where relevant, and test whether safety behavior changes across languages. A strong average can conceal poor performance for a smaller group.

Finally, provide a recovery path: identify supported languages clearly, allow users to correct or report a response, and avoid presenting uncertain output as expert advice. Multilingual support is a product commitment, not just a model setting.

### References

- [Hugging Face Transformers documentation](https://huggingface.co/docs/transformers)
- [Stanford AI Index](https://hai.stanford.edu/ai-index/2025-ai-index-report)
