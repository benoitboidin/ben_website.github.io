# MaxSea

> **Machine Learning Specialist** • avril 2024 - septembre 2024 (6 mois)  
> Stage • Bidart, Nouvelle-Aquitaine, France

Entraînement d'un réseau de neurones (YOLOX) pour la détection temps réel de navires.

## 1. Recherche de données

L'amélioration du modèle a commencé par l'augmentation du dataset d'entraînement. Grâce à mes recherches, la taille de ce dataset est passé de 18 000 à plus de 110 000 images, contenant environ 290 000 navires.  
Après exploration, j'ai remarqué que certaines sources étaient composées d'images très similaires entre elles. J'ai donc mis en place, grâce aux embeddings, un filtre de similarité, qui m'a permis d'éviter l'overfitting.

## 2. Visualisation et statistiques

Les embeddings m'ont aussi permis de plonger plus en profondeur au cœur des données : j'ai détecté des clusters représentant des objets qui n'étaient pas utiles à l'entraînement, comme des sous-marins.  
Du côté des statistiques, j'ai évalué la taille moyenne des détections, les dimensions des images, et le nombre de bateaux par classe (pour éviter tout déséquilibre).

## 3. Clustering et annotation

Pour permettre au modèle de classifier les navires, j'ai entrepris d'annoter les datasets. Les embeddings calculés précédemment on permit un gain de temps considérable.  
Les algorithmes de clustering ont aussi contribué à la vitesse d'annotation.  

## 4. Entraînement

Afin de rapidement itérer sur nos différentes hypothèses d'amélioration, j'ai mis en place un pipeline d'entraînement comprenant des filtres sur les datasets, les paramètres de YOLOX, le suivi et l'enregistrement automatique des résultats.  
Grâce à mon travail, il est possible de contrôler tous les paramètres à partir d'un seul fichier de configuration (json) et démarrer tout le pipeline avec un script.

## 5. Quantization

Afin de respecter les contraintes de la détection temps réél, j'ai quantizé tous les modèles, ce qui a mené à un gain de temps de 45% par détection.

## 6. Tests de performances

Pour construire une base de connaissance solide, j'ai été rigoureux dans les tests des différentes hypothèses, en communiquant clairement mes résultats quantitatifs et en gardant une trace écrite à cahque étape.  Ainsi, mon travail a facilement été reprise par le développeur qui m'a succédé.  

📄 Ce travail a donné lieu à un [mémoire](/documents/memoire.pdf).

Ci-dessous le résultat d'un des modèles les plus précis. D'autres modèles plus légers ont été entraînés afin d'être utilisés sur des machines moins puissantes.

![Detection](/img/detected.png)

Pour réaliser l'annotation des datasets de facons efficace, j'ai utilisé les embeddings et le logiciel FiftyOne. Cela m'a permis de travailler avec une carte de similarite (*voir image ci-dessous*) :

![Embeddings](/img/clustering_interface.png)

Ici, ce sont les bateaux pompes qui sont sélectionnés :

![Sélection](/img/bateaux_pompiers.png)

![Vidéo](/img/D0292DDC-7FB5-4171-A0E2-23B9527B48CD.MP4)