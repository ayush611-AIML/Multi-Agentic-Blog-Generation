# Faster Neural Network Inference: Batching and Quantization

Inference optimization is a measurement problem before it is a model rewrite. Define the service objective first: requests per second, p95 latency, memory ceiling, or cost per prediction. Different workloads need different trade-offs.

## Batch when the workload allows it

Batching combines several inputs into one model call and can improve hardware utilization. It also adds queueing delay, so an interactive application may need small batches or a short batching window. Measure latency from the caller's perspective, including preprocessing, queue time, model execution, and response formatting.

## Reduce numerical precision carefully

Quantization represents weights or activations with fewer bits. This can lower memory use and sometimes improve throughput, especially when hardware supports the chosen format. Accuracy may change, and the effect varies by model and task. Compare a quantized model against a full-precision baseline on a representative evaluation set.

## Use a disciplined benchmark

Warm up the runtime, run enough repetitions, and report p50 and p95 latency as well as throughput and memory. Benchmark on the actual device and software stack. Include varied input sizes and realistic concurrency; a microbenchmark on one short input is not a production estimate.

Keep the original checkpoint and make optimization reversible. If quality or reliability falls below the agreed threshold, revert the change rather than silently accepting degraded output.

### References

- [PyTorch tutorials](https://pytorch.org/tutorials/)
- [ONNX Runtime performance tuning](https://onnxruntime.ai/docs/performance/tune-performance/)
