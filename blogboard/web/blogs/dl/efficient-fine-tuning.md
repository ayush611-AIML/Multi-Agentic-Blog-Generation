# Efficient Fine-Tuning: Adapt Models with Less Compute

Fine-tuning adjusts a pretrained model for a new task or domain. The right method depends on the size of the dataset, compute budget, and how much the target differs from the original training data.

## Choose an adaptation strategy

**Linear probing** freezes the backbone and trains a small task head. It is fast and provides a useful baseline. **Full fine-tuning** updates all parameters and offers flexibility, but requires more memory and can overfit small datasets. **Parameter-efficient methods** train a small set of added or selected parameters while keeping most of the base model fixed.

For image models, begin by freezing the feature extractor and training a new classifier. If validation performance plateaus, unfreeze later layers and continue with a lower learning rate. For language models, compare adapters or low-rank updates against a full update using the same data and evaluation set.

## Keep comparisons fair

Use identical train, validation, and test splits. Track trainable parameter count, peak memory, wall-clock time, and task metrics. Tune on validation data, not the test set. Check for class imbalance, label leakage, and examples that differ from deployment inputs.

## Avoid a false win

A cheaper method is not automatically better if it harms reliability or requires costly inference. Save the base model version, adapter configuration, tokenizer or preprocessing setup, and evaluation report together. Re-run the same tests after changing the data or runtime.

### References

- [Hugging Face Transformers task guides](https://huggingface.co/docs/transformers/tasks)
- [PyTorch transfer learning tutorial](https://docs.pytorch.org/tutorials/beginner/transfer_learning_tutorial.html)
