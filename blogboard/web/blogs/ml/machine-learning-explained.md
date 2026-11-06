# Beyond Accuracy: Choosing the Right ML Metrics

Accuracy is the share of predictions that are correct. It is intuitive, but it can be misleading when classes are imbalanced or errors have different costs. If only one transaction in a thousand is fraudulent, a model that always predicts “legitimate” can appear 99.9% accurate while detecting no fraud.

## Match metrics to the decision

For binary classification, **precision** asks how many flagged cases were truly positive; **recall** asks how many positives were found. A medical screening workflow may prioritize recall and use follow-up testing to manage false alarms. A costly intervention may instead need higher precision.

The F1 score combines precision and recall, but hides the chosen trade-off. ROC-AUC measures ranking across thresholds; for rare positives, precision-recall curves are often more informative. For regression, choose measures such as mean absolute error or root mean squared error based on whether large misses deserve extra penalty.

## Check calibration and slices

A probability score is useful only if it corresponds to observed frequencies. Calibration checks whether predictions near 0.8 are correct about 80% of the time. Also report metrics by meaningful subgroups, time periods, and operating conditions; an aggregate can conceal a weak segment.

## Connect measurement to action

Choose a threshold using validation data and the real cost of each error. Report uncertainty and compare against a baseline. Finally, monitor the same measures after launch, because a test score is not a permanent guarantee.

### References

- [Scikit-learn: Model evaluation](https://scikit-learn.org/stable/modules/model_evaluation.html)
- [Google: Classification metrics](https://developers.google.com/machine-learning/crash-course/classification/accuracy-precision-recall)
