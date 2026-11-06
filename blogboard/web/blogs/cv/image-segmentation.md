# Image Segmentation: From Masks to Reliable Decisions

Image segmentation assigns a class to each pixel or marks pixels belonging to an object. It is useful when a bounding box is too coarse, such as measuring a shape or separating foreground from background.

## Choose the task carefully

**Semantic segmentation** labels each pixel by class. **Instance segmentation** also separates individual objects of the same class. The annotation effort and evaluation setup differ, so choose the representation that matches the downstream decision.

## Measure overlap and failure

Intersection over Union compares the overlap of predicted and reference masks. Mean IoU averages this measure across classes, but rare classes can be hidden by aggregate performance. Also examine boundary quality, small objects, occlusions, and the cost of false-positive versus false-negative regions. Inspect overlays on real examples instead of relying on a single number.

## Build for the environment

Make sure image resizing, normalization, and color handling match between training and inference. Validate the system across lighting, sensors, and backgrounds expected in deployment. Measure memory and inference speed at the actual image resolution.

Segmentation masks may reveal people, locations, or sensitive activities. Limit access and retention, document how images were collected, and consider human review before using masks to automate high-impact decisions.

### References

- [PyTorch tutorials](https://pytorch.org/tutorials/)
- [COCO dataset](https://cocodataset.org/)
