# Generative AI: How Models Create and Where They Fail

Generative AI models learn patterns from data and use them to produce new text, images, audio, or other outputs. They do not retrieve a guaranteed true answer simply because the result sounds confident.

## A few common approaches

Language models predict tokens in sequence. Diffusion models iteratively transform noise into an image or other signal. Each approach learns a representation from examples, then uses a prompt or conditioning input to guide generation. The output is shaped by training data, model design, and the instructions supplied at inference time.

## Choose a task before a model

Start with a narrow use case and define what a good output must do. A summarizer may need coverage and source fidelity; an image tool may need style consistency and rights-aware inputs. Compare a generative approach with simpler options such as search, templates, or classification.

## Evaluate and supervise

Test representative prompts, edge cases, and prohibited requests. Measure accuracy, usefulness, latency, and cost against clear criteria. Human review is important when outputs affect health, finances, employment, safety, or public information. Give users a way to correct errors and make the model's limitations visible.

Generative AI is a tool for producing candidates, not a substitute for verification. A responsible workflow defines who checks the result and what happens when confidence is low.

### References

- [NIST Generative AI Profile](https://doi.org/10.6028/NIST.AI.600-1)
- [Stanford AI Index](https://hai.stanford.edu/ai-index/2025-ai-index-report)
