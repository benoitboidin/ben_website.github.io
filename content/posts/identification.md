# J'ai identifié 119 536 navires en une semaine...

(et j'ai même eu du temps libre)

Lors de mon passage chez MaxSea, j'ai entraîné un réseau de neurones sur des milliers d'images. 

Le problème ? Elles avaient toutes un label différent. 

"Boat", "ship", "vessel", ou même "small-tug-distant-blurry" : impossible de tout mélanger sans que les performances du modèle s'effondrent. 

J'ai donc classifié moi-même chaque image, à l'aide d'un outil formidable, les embeddings. 

Qu'est-ce que c'est ? Une liste de chiffres qui permettent de décrire une image à un ordinateur.

Si deux embeddings ont presque les mêmes chiffres ? L'ordinateur en déduit que les images se ressemblent. 

Grâce à ça (et en ajoutant un peu d'ACP et de clustering), on peut créer une carte. 

Plus qu'à entourer les points et donner un nom aux images ! (ici, les bateaux-pompes)

![](bateaux_pompiers.png)
