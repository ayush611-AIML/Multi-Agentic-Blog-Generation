# Ethical Machine Learning: A Practical Risk Review

Responsible machine learning is not a final approval step. It is a set of design and operational checks that begins when a team chooses a problem and continues after a model is deployed.

## Start with the decision

Write down who will use the prediction, who may be affected by it, and what happens when it is wrong. A model that ranks support tickets has different consequences from one that influences access to credit or health services. Decide whether automation is appropriate at all, and define a human review path for high-impact decisions.

## Examine data and outcomes

Document data sources, collection context, consent, missingness, and known limitations. Compare performance across relevant groups, not only in aggregate. Group metrics can reveal disparities, but they do not prove a system is fair: teams should also examine error severity, access to appeal, and whether the chosen labels encode historical inequities.

## Make the system contestable

People affected by consequential outputs need understandable explanations, a way to challenge mistakes, and a route to a human decision-maker. Log model versions, inputs, outputs, and review outcomes in ways that respect privacy and retention requirements.

## Monitor and govern

Track data drift, quality, subgroup performance, incidents, and override rates. Assign an owner to respond when thresholds are crossed. NIST's AI Risk Management Framework organizes this ongoing work around governing, mapping, measuring, and managing risk; its 2026 critical-infrastructure profile concept note is a reminder that context changes the controls a system needs.

No checklist removes every risk. The practical goal is to make risks visible, assign responsibility, and provide a safe way to pause or correct the system.

### References

- [NIST AI Risk Management Framework](https://www.nist.gov/itl/ai-risk-management-framework)
- [NIST AI RMF Playbook](https://airc.nist.gov/AI_RMF_Knowledge_Base/Playbook)
