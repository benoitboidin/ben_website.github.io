# COCO dataset (Common Objects in Context)

[Back to README](../README.md)

COCO is a large-scale object detection, segmentation, and captioning dataset. COCO has several features:

- Object segmentation
- Recognition in context
- Superpixel stuff segmentation
- 330K images (>200K labeled)
- 1.5 million object instances
- 80 object categories
- 91 stuff categories
- 5 captions per image
- 250,000 people with keypoints

There are three subset: train and val, that are annotated, and test, which is provided without annotations. This last one is meant to participate in COCO evaluation by submiting prediction on their website. 

## Types dataset

COCO dataset has 6 types of annotations (<https://cocodataset.org/#format-data>):

- object detection
- keypoints detection
- stuff segmentation
- panoptic segmentation
- densepose
- image captioning

## Annotations structure

Every type of dataset has a common structure:

```json
{
  "info": info, 
  "images": [image], 
  "annotations": [annotation], 
  "licenses": [license],
}

info{
  "year": int, 
  "version": str, 
  "description": str, 
  "contributor": str, 
  "url": str, 
  "date_created": datetime,
}

image{
  "id": int, 
  "width": int, 
  "height": int, 
  "file_name": str, 
  "license": int, 
  "flickr_url": str, 
  "coco_url": str, 
  "date_captured": datetime,
}

license{
  "id": int, 
  "name": str, 
  "url": str,
}
```

Specific structure for object detection:

```json
annotation{
  "id": int, 
  "image_id": int, 
  "category_id": int, 
  "segmentation": RLE or [polygon], 
  "area": float, 
  "bbox": [x,y,width,height], 
"iscrowd": 0 or 1,
}

categories[{
  "id": int, 
  "name": str, 
  "supercategory": str,
}]
```

Other formats can be found in the official documentation (link above).

## Base classes

Interesting classes: boat, kite.

```javascript
 {1: 'person',
 2: 'bicycle',
 3: 'car',
 4: 'motorcycle',
 5: 'airplane',
 6: 'bs',
 7: 'train',
 8: 'trck',
 9: 'boat',
 10: 'traffic light',
 11: 'fire hydrant',
 12: 'stop sign',
 13: 'parking meter',
 14: 'bench',
 15: 'bird',
 16: 'cat',
 17: 'dog',
 18: 'horse',
 19: 'sheep',
 20: 'cow',
 21: 'elephant',
 22: 'bear',
 23: 'zebra',
 24: 'giraffe',
 25: 'backpack',
 26: 'mbrella',
 27: 'handbag',
 28: 'tie',
 29: 'sitcase',
 30: 'frisbee',
 31: 'skis',
 32: 'snowboard',
 33: 'sports ball',
 34: 'kite',
 35: 'baseball bat',
 36: 'baseball glove',
 37: 'skateboard',
 38: 'srfboard',
 39: 'tennis racket',
 40: 'bottle',
 41: 'wine glass',
 42: 'cp',
 43: 'fork',
 44: 'knife',
 45: 'spoon',
 46: 'bowl',
 47: 'banana',
 48: 'apple',
 49: 'sandwich',
 50: 'orange',
 51: 'broccoli',
 52: 'carrot',
 53: 'hot dog',
 54: 'pizza',
 55: 'dont',
 56: 'cake',
 57: 'chair',
 58: 'coch',
 59: 'potted plant',
 60: 'bed',
 61: 'dining table',
 62: 'toilet',
 63: 'tv',
 64: 'laptop',
 65: 'mose',
 66: 'remote',
 67: 'keyboard',
 68: 'cell phone',
 69: 'microwave',
 70: 'oven',
 71: 'toaster',
 72: 'sink',
 73: 'refrigerator',
 74: 'book',
 75: 'clock',
 76: 'vase',
 77: 'scissors',
 78: 'teddy bear',
 79: 'hair drier',
 80: 'toothbrsh'}
```

