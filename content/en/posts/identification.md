# I classified 119 536 ships in a week...

(and I even had spare time)

During my internship at MaxSea, I trained a neural network on thousand of images.  

The issue was... They all had a different label. 

"Boat", "ship", "vessel", or even "small-tug-distant-blurry" : I couldn't mix everything without the model precision collapsing. 

What did I do then? I classified every single image using one of the best ML tools: embeddings.

What is it? It's like a numbers list (a vector) which describes and image in a way a computer can understand.

What if two embeddings contains almost the same numbers? Then the images are probably almost identical.

Thanks to this (and some clustering and dimension reduction), we can create a map.

Then I just had to select points and give a category to the images! (Here are some fireboats)

![bateaux_pompiers](/img/bateaux_pompiers.png)
