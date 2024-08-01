# FiftyOne: The open-source tool for building high-quality datasets and computer vision models

[Back to README](../README.md)

FiftyOne is a Python package that provides a flexible, intuitive interface for:

- exploring dataset
- filtering and sorting samples
- detecting similar images
- detecting detection errors
- suggesting improvements (FiftyOne Brain)

We use it to have an overview of the different datasets we use, to preprocess them, and to visualize the results of our models.

## Importing a dataset: known formats

### COCO dataset

_See [coco_format](/coco_format)_

### VOCDetectionDataset

```txt
<dataset_dir>/
    data/
        <uuid1>.<ext>
        <uuid2>.<ext>
        ...
    labels/
        <uuid1>.xml
        <uuid2>.xml
        ...
```

For further details, see <https://docs.voxel51.com/user_guide/dataset_creation/datasets.html#vocdetectiondataset>

### KITTIDetectionDataset

```txt
<dataset_dir>/
    data/
        <uuid1>.<ext>
        <uuid2>.<ext>
        ...
    labels/
        <uuid1>.txt
        <uuid2>.txt
        ...
```

For further details, see <https://docs.voxel51.com/user_guide/dataset_creation/datasets.html#kittidetectiondataset>

### TFObjectDetectionDataset

```txt
<dataset_dir>/
    tf.records-?????-of-?????
```

For further details, see <https://docs.voxel51.com/user_guide/dataset_creation/datasets.html#tfobjectdetectiondataset>

### CVATImageDataset

```txt
<dataset_dir>/
    data/
        <uuid1>.<ext>
        <uuid2>.<ext>
        ...
    labels.xml
```

For further details, see <https://docs.voxel51.com/user_guide/dataset_creation/datasets.html#cvatimagedataset>

## Plugins

One need to install the fiftyone desktop app before installing plugins.
