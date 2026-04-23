## IUT du Limousin / Département MMI / BUT1  SAE 2.03 | Concevoir un site avec une source de données

### Compétences ciblées

Développer pour le web et les médias numériques

### Objectifs et problématique professionnelle

Objectifs :

* Combiner les ressources liées au développement web et à la gestion des bases de données et comprendre comment elles s'articulent pour automatiser la production de pages Web ;  
* Approfondir les ressources liées à l'intégration en lien avec les normes et les bonnes pratiques pour produire des pages fluides, valides et accessibles ;  
* Découvrir le développement front et approfondir la connaissance du CSS en mettant en place des animations et interactions simples ;  
* Découvrir l'administration d'un hébergement web en mettant en ligne un projet web et en veillant à la sécurité des données.

En tant que développeurs web juniors, les étudiants doivent concevoir un site web relié à une base de données comme par exemple un catalogue de produits organisé par catégories ou mots-clés. Ce site doit présenter de manière lisible et ergonomique les données stockées et permettre de naviguer au sein de celles-ci. Il doit permettre aux utilisateurs d'ajouter des contenus par exemple en postant des commentaires ou en réservant un produit. Les étudiants doivent répondre à la question : Comment consulter de manière fluide des contenus stockés dans une base de données et permettre aux utilisateurs d'interagir avec ces contenus ?

### Apprentissages critiques

AC14.01 | Exploiter de manière autonome un environnement de développement efficace et productif   
AC14.02 | Produire des pages web incluant un balisage sémantique efficace et des interactions simples  
AC14.03 | Générer des pages web à partir de données structurées  
AC14.04 | Mettre en ligne une application web en utilisant une solution d’hébergement standard  
AC14.05 | Modéliser les données d’une application web

### Ressources mobilisées et combinées

[R2.12 | Intégration](https://orebut.iut.fr/but/fiche-ressource/684)   
[R2.13 | Développement Web](https://orebut.iut.fr/but/fiche-ressource/685)  
[R2.14 | Système d'information](https://orebut.iut.fr/but/fiche-ressource/686)  
[R2.15 | Hébergement](https://orebut.iut.fr/but/fiche-ressource/687)

### 

1. ### Organisation de la SAé

   

**QUI ?**  
Cette SAé est individuelle. Les livrables demandés le sont pour chacun d’entre vous.

**QUAND ?**  
Les dates à bien conserver en tête pour cette SAé sont les suivantes :  
**Du mercredi 22 avril au jeudi 7 mai :**   
Temps imparti pour réaliser la SAÉ. Si vous n’êtes pas en cours, vous êtes en SAÉ. Le temps programmé et réservé pour se consacrer à la SAÉ est de **95h (la moitié en séances encadrées \+ l’autre moitié en autonomie).** C’est énorme. Et il faut que ça se voit dans votre travail à la fin.  
**Le vendredi 30 avril :**   
Première mise en ligne de votre projet (l’itération de plus haut rang que vous aurez terminée à cette date).  
**Du mardi 5 mai au jeudi 7 mai :**  
Réalisation d’une itération surprise \! Elle vous sera communiquée le mardi 5 mai midi.  
**Le jeudi 7 mai :**   
Mise en ligne de votre site sur son hébergement “de production”.

**QUOI ?**  
Il s’agit de développer une application de type Netflix, Prime vidéo, etc… (plateforme de VOD). Votre application sera subdivisée en 2 sous-applications complémentaires : 

- APP : une application destinée aux utilisateurs de la plateforme  
- ADMIN : un back office destiné aux administrateurs de la plateforme  
  Pour réaliser ce projet, on respectera **scrupuleusement** la même structure que celle travaillée en R2.13 avec les “menus de la semaine”.

**COMMENT ?**  
Vous procéderez par itération. Une itération est une version incomplète mais fonctionnelle du travail demandé. C’est-à-dire qu’on ne va pas développer toutes les fonctionnalités de l’application d’un seul coup. Chaque itération se concentre sur une ou deux fonctionnalités seulement. Mais on ne passe pas à l’itération suivante tant que la précédente n’est pas aboutie à 100%. D’itération en itération, vous enrichirez votre application de fonctionnalités supplémentaires. 

	

### **EVALUATION**

Vos itérations (hébergées) seront appréciées comme le ferait un véritable client : 

* **Convaincant et votre base d’évaluation sera 15\.**

  *C’est convaincant si le résultat est de qualité professionnelle en tout point. Si des défauts existent, ils sont mineurs et aisément rectifiables.*


* **Mitigé et votre base d’évaluation sera 10\.**

  *C’est mitigé si le résultat est intéressant mais avec des défauts majeurs qui ne sont pas acceptables dans une optique professionnelle. Un défaut majeur reste rectifiable mais demandera un travail significatif.*


* **Insuffisant et votre base d’évaluation sera 5\.**

  *C’est insuffisant si le résultat n’est tout simplement pas utilisable et/ou ne répond pas à la demande. Les défauts sont alors critiques, trop de mauvais choix ou d’erreurs ont été faites pour envisager rectifier le tir sans reprendre le projet de zéro.*


  

  Cette base d'évaluation sera ensuite modulée en appréciant séparément le niveau d’acquisition de tous les apprentissages critiques (voir au début du document) impliqués dans cette SAE.

2. ### Mise en place de l’environnement de développement

Vous allez utiliser le serveur [mmi.unilim.fr](http://mmi.unilim.fr) pour votre application. Afin d’éviter de devoir sans cesse transférer vos fichiers de votre machine vers le serveur mmi.unilim.fr (ce que vous faisiez en TP), il est possible d’installer et d’utiliser l’extension Remote SSH pour VSCode. Elle vous permettra de connecter VSCode au serveur mmi.unilim.fr de sorte à éditer vos fichiers directement sur le serveur.

Pour mettre en place l’environnement de développement, vous devez au préalable [créer un compte Github](https://github.com/signup).

1. Créez votre projet à l’aide du *template project* disponible ici :   
   [https://github.com/frederic-mora/SAE2.03-starter-project](https://github.com/frederic-mora/SAE2.03-starter-project)  
   ![][image1]  
   Au passage renommez le repository SAE2.03-*votreNom*  
   *Note : un template project est une base de code pour un projet. Cela vous permet de débuter sans pour autant partir de zéro. Le template project fourni est identique aux architectures travaillées en R2.13. Vous trouverez dans le dossier docs les explications sur ces architectures front et server, déjà présentes dans les derniers TP de R2.13..*  
     
2. Ouvrez Visual Studio Code et via l’extension Remote SSH, connectez-vous à mmi.unilim.fr :   
   1. Cliquez sur l'icône de l’extension Remonte SSH dans la barre latérale gauche  
   2. Au niveau du menu SSH, cliquez sur \+  
   3. Faites une première connnexion à mmi.unilim.fr en saisissant la commande :   
      *ssh votreLoginUnilim@mmi.unilim.fr*	  
   4. Sélectionnez le fichier ssh/config pour que Remote SSH mémorise le serveur mmi.unilim.fr  
   5. Après saisie de votre mot de passe Unilim vous devez voir en bas à gauche de la fenêtre que vous êtes connecté  
   6. Remote ssh a mémorisé le serveur mmi.unilim.fr, vous le retrouverez sous le menu SSH pour y accéder plus rapidement les prochaines fois

   

3. Ouvrez votre répertoire public\_html   
     
4. Ouvrez un terminal et clonez votre fork :   
   *git clone [https://github.com/votre-username-github/SAE2.03-votreNom](https://github.com/votre-username-github/SAE2.03-votreNom)*  
     
5. Suivez ensuite les indications contenues dans le fichier README.md pour finir la configuration du projet.

Il est **important de sauvegarder votre travail régulièrement** (minimum une fois par jour) en synchronisant vos modifications avec votre repository Github (SAE2.03-votreNom).   
Vous allez faire des modifications de votre code sur mmi.unilim.fr. Et vous allez vouloir que ces modifications soient sauvegardées dans votre repository SAE2.03-votreNom sur votre espace Github. Par conséquent, il faut que mmi.unilim.fr puisse se connecter à votre compte Github, ce qui nécessite une authentification.  
Il existe plusieurs méthodes pour s’authentifier, nous vous en proposons 2 en vous conseillant la première pour commencer.

**Solution 1 : Utilisez l’extension Github Pull Request :**   
Recherchez et installez cette extension. En soit, vous ne vous en servirez pas. Mais lors de son installation, vous allez vous connecter à votre compte Github et bénéficierez de cette connexion pour pouvoir synchroniser vos modifications et votre repository.

**Solution 2 : Créez des clés SSH**  
A priori vous connaissez déjà le principe (https). L'authentification par clé SSH est une méthode sécurisée pour se connecter à un serveur ou à un service, comme GitHub, sans utiliser de mot de passe. Elle repose sur un couple de clés : une clé privée, qui reste sur votre machine (mmi.unilim.fr) et doit être gardée secrète, et une clé publique, qui est partagée avec l’autre machine (Github). Lorsque vous tentez de vous connecter, Github utilisera la clé publique pour vérifier que vous possédez la clé privée correspondante. Si elles correspondent, l'accès est accordé. Cette méthode est plus sécurisée que les mots de passe, car elle utilise un chiffrement robuste et élimine le risque de vol de mot de passe.

### A. Générez une nouvelle clé SSH

Depuis un terminal ouvert sur mmi.unilim.fr, générez une nouvelle clé avec la commande suivante :   
**ssh-keygen \-t ed25519 \-C "votre\_email@example.com"**

* Remplacez votre\_email@example.com par l'adresse e-mail associée à votre compte GitHub.  
* Appuyez sur Entrée pour accepter l'emplacement par défaut (\~/.ssh/id\_ed25519).  
* Si vous le souhaitez, ajoutez une passphrase pour plus de sécurité (optionnel)  
* Note : ed25519 est l'algorithme utilisé pour crypter les clés.

### B. Ajoutez la clé SSH à l'agent SSH

Démarrez l'agent SSH et ajoutez votre clé privée :  
**eval "$(ssh-agent \-s)"**

**ssh-add \~/.ssh/id\_ed25519**

### C. Ajoutez la clé publique à votre compte GitHub

* Copiez le contenu de votre clé publique (\~/.ssh/id\_ed25519.pub) dans le presse-papiers :  
* Connectez-vous à votre compte GitHub.  
* Allez dans Settings \> SSH and GPG keys \> New SSH key.  
* Collez la clé publique dans le champ "Key" et donnez-lui un titre (par exemple, "mmi.unilim.fr").  
* Cliquez sur Add SSH key.

L’avantage de cette seconde solution est qu’elle est plus fiable et évite de devoir saisir son mot de passe à chaque nouvelle session de travail. Notez que l’opération est à renouveler sur chaque machine que vous souhaitez utiliser pour travailler.

**Comment faire un “commit” ?**  
Vous êtes à présent prêt pour pouvoir synchroniser votre travail et votre repository sur Github. Voici la démarche à suivre depuis un terminal : 

1. Assurez vous de vous trouver dans le répertoire de votre projet (SAE2.03-votreNom)  
     
2. Exécutez la commande : *git add .*  
   Dis à git qu’on ajoute le répertoire courant (.) à la liste des modifications à prendre en compte  
     
3. Exécutez la commande : *git commit \-m “message sur les modifications apportées”*  
   Dans le jargon git, un commit est une sauvegarde à l’instant t du code. Git conserve un historique de tous vos commits et il est possible de revenir à la version de code d’un commit si besoin était : Git est un outil de versionning. C’est pour cela qu’il est important de préciser avec un message les modifications car ce sera la seule information vous permettant de retrouver une version donnée de votre projet.  
     
4. Exécutez la commande : *git push*  
   Cette commande synchronise votre dossier local (sur mmi.unilim.fr) avec votre repository Github (sur votre compte Github.com). Cela permet de garder à jour une version de votre travail sur Github.com et vous protège d’erreurs de manipulation qui conduiraient à la perte totale, définitive et déprimante de votre projet. Git (outil local) et Github (plateforme en ligne) sont 2 choses distinctes mais sont prévues pour fonctionner en symbiose. 

Note : il existe aussi des extensions VSCode pour gérer vos commits autrement qu’en ligne de commande. Ca n’apporte pas grand chose compte tenu de l’usage de base que vous aurez de Git. Après c’est comme vous voulez tant que les commits sont faits.

Pour rappel, le serveur [mmi.unilim.fr](http://mmi.unilim.fr) est également accessible depuis l’extérieur de l’Université si vous passez par son [VPN](https://support.unilim.fr/reseau/acces-vpn/reseau-vpn-plus/).

3. ### Descriptif détaillé des itérations

     
   

Pour réaliser les itérations décrites ci-après, vous travaillerez avec Visual Studio Code et utiliserez le serveur web et de base de données dont vous disposez sur mmi.unilim.fr.

N’effacez pas ce que vous avez dans votre base de données, ce n’est pas grave si des tables liées à des applications différentes coexistent dans la même base tant que vous ne vous mélangez les pinceaux \! Une pratique courante consiste à préfixer toutes les tables pour une même application. Par exemple vous pouvez préfixer vos tables avec SAE203\_\*\*\*\*.

 

## **ITÉRATION 1** 

### \[APP\] Consulter la liste des films proposés par la plateforme 

| USER STORY |
| ----- |
| **En tant que** visiteur de l'application,**je veux** pouvoir consulter la liste des films disponibles sur la plateforme,**afin de** découvrir les films proposés et choisir ceux qui m'intéressent. Critères d'acceptation : La liste des films doit afficher au minimum : Le titre du film. Une affiche ou une image représentative. Les films doivent être présentés sous forme de cartes ou de liste visuellement attrayante. La liste doit être accessible depuis la page d'accueil de l'application. Si aucun film n'est disponible, un message clair doit être affiché (ex. : "Aucun film disponible pour le moment."). |

| FRONT (HTML / CSS / Javascript) \- Indications |
| :---: |

***app / data /***  
Prévoir un module *dataMovie.js* qui sera chargé de toutes les requêtes HTTP à destination de la partie serveur.  Ici vous aurez besoin d’une fonction DataMovie.requestMovies (par exemple) qui interrogera le serveur afin d’obtenir la liste de tous les films disponibles.

***app / component /***  
Prévoir un composant Movie pour afficher un film conformément aux critères d’acceptation.   
Vous aurez plusieurs films à afficher, il serait bon que la fonction Movie.format accepte un tableau de films en paramètre afin de formater un à plusieurs films.

| BACK (PHP / MySQL) \- Indications |
| :---: |

**BDD MySQL :**   
Via phpMyAdmin sur mmi.unilim.fr, importez le fichier SAE203.sql fourni avec le starter project. Il contient un noyau de base de données avec une dizaine de films pour vous aider à démarrer. 

***server/***  
Votre serveur doit permettre de retourner en JSON la liste des films disponibles en base. Comme d’habitude, on se basera sur la valeur d’un paramètre ‘todo’ pour interpréter la requête HTTP.  
Par exemple :  https://mmi.unilim.fr/.../script.php?todo=readmovies  
Respectez bien le schéma habituel : *script.php / controller.php / model.php*

**ATTENTION**  
**Renvoyer les informations détaillées de tous les films de la base de données pourraient représenter beaucoup beaucoup (trop) d’informations. Aussi on ne renverra que le strict nécessaire : le titre, son affiche et l’identifiant. Vous n’allez pas utiliser l’identifiant de suite mais ça vous sera utile plus tard.**  
---

## **ITÉRATION 2** 

### \[ADMIN\] Ajouter des films dans la base de données 

| USER STORY |
| ----- |
| **En tant qu'**administrateur,**je veux** avoir un formulaire pour ajouter des films dans la base de données,**afin d'**enrichir le catalogue de films disponibles sur la plateforme. Critères d'acceptation : Le formulaire doit permettre de saisir les informations suivantes : Titre du film. Réalisateur du film Année de sortie Durée en minutes Description ou synopsis. Catégorie (Drame, Aventure, Animation…). nom du fichier de l'affiche ou image du film. URL du trailer. Restrictions d'âge. Une fois le formulaire soumis : Les données doivent être validées (ex. : champs obligatoires remplis, âge valide). Le film doit être ajouté à la base de données. Un message de confirmation doit être renvoyé par le serveur (ex. : "Le film a été ajouté avec succès."). En cas d'erreur (ex. : champ manquant ou problème de connexion), un message d'erreur clair doit être affiché.  |

| FRONT (HTML / CSS / Javascript) \- Indications |
| :---: |

***admin / data /***  
Prévoir un module *dataMovie.js* qui sera chargé de toutes les requêtes HTTP à destination de la partie serveur. Même rôle que celui de app/data, Mais les requêtes à prendre en charge ne seront pas toujours les mêmes. Ici vous devez commencer par prévoir une fonction DataMovie.add (par exemple) à même d’envoyer les données du formulaire MovieForm (voir ci-après) au serveur. Pour rappel, s’agissant de l’envoie de données de formulaire, la requête HTTP est à faire en POST.

***admin / component /***  
Prévoir un composant MovieForm permettant la saisie d’un film via un formulaire conformément aux critères d’acceptation. Notez bien qu’on ne vous demande pas d’uploader les images via le formulaire, seulement le nom des fichiers. On acceptera de placer “manuellement” les images dans le dossier “server / images”.

***admin / component / Log***  
Le composant Log (le même qu’en TP) est déjà intégré à l'interface. Faites en bon usage pour afficher les messages en provenance du serveur ou le statut des opérations en cours.

***admin / index.html***  
De manière analogue aux exercices de TP, prévoyez ici une fonction C.handlerAddMovie (par exemple) qui devra s’exécuter lorsque l’administrateur cliquera sur le bouton de validation du formulaire.

| BACK (PHP / MySQL) \- Indications |
| :---: |

## ***server/*** Votre serveur savoir traiter des requêtes HTTP contenant les données d’un film à enregistrer dans votre base de données. Comme d’habitude, on se basera sur la valeur d’un paramètre ‘todo’ pour interpréter la requête HTTP. Par exemple :  https://mmi.unilim.fr/.../script.php?todo=addMovie Respectez bien le schéma habituel : *script.php / controller.php / model.php* *Le serveur renverra un message indiquant si le film a bien été enregistré ou non.*

## ---

## **ITÉRATION 3** 

### \[APP\] Consulter les informations détaillées d’un film ainsi que son trailer 

| USER STORY |
| ----- |
| **En tant qu**’utilisateur de l'application,**je veux** pouvoir consulter les informations détaillées d'un film ainsi que visionner son trailer,**afin de** décider si je souhaite le regarder. Critères d'acceptation : Lorsqu'un utilisateur clique sur un film dans la liste, une page ou une section dédiée doit apparaître avec les informations suivantes : Le titre du film. Une affiche ou une image représentative. Une description ou un synopsis. Le réalisateur L’année de sortie La catégorie du film. Les restrictions d'âge. Le trailer du film. Le trailer doit être visionnable directement via un lecteur intégré (ex. : iframe YouTube). On doit pouvoir revenir à la liste des films via la barre de navigation |

| FRONT (HTML / CSS / Javascript) \- Indications |
| :---: |

***app / data /***  
Prévoir dans le module *dataMovie.js* une fonction DataMovie.requestMovieDetails (par exemple)  qui sera chargée d’interroger le serveur pour obtenir tous les détails d’un film en transmettant son identifiant en paramètre. 

***app / component / MovieDetail***   
Prévoir un composant MovieDetail permettant de présenter les détails d’un film conformément aux critères d’acceptation.

***app / index.html***  
Prévoir une fonction C.handlerDetail (par exemple) qui prendra en paramètre l’identifiant d’un film, obtiendra du serveur ses informations détaillées puis les affichera dans l’application à la place de la liste des films

***app / component / Movie***   
Un composant Movie doit être cliquable à présent. Cliquer sur film doit provoquer l’affichage détaillé du film.  Pour ce vous devez faire en sorte de formater chaque composant Movie avec, sur un élément HTML donné, onclick=”C.handlerDetail(X)”  où X est l’identifiant du film formaté (donc ce sera différent pour chaque film).

***app / component / NavBar***  
“Modifier le composant NavBar à votre convenance pour que l’on puisse en cliquant sur un menu ré-afficher la liste des films. Vous aurez certainement aussi à éditer ou ajouter un handler correspondant dans index.html

| BACK (PHP / MySQL) \- Indications |
| :---: |

## ***server/*** Le serveur doit prendre en charge un nouveau type de requête HTTP pour renvoyer les informations détaillées d’un film. Par exemple :  https://mmi.unilim.fr/.../script.php?todo=readMovieDetail\&id=23 Ce pourrait être la requête HTTP demandant les détails du film d’identifiant 23\. Respectez bien le schéma habituel : *script.php / controller.php / model.php*

## ---

## **ITÉRATION 4** 

### \[APP\] Afficher les films en les regroupant par catégorie 

| USER STORY |
| ----- |
| **En tant qu**’utilisateur de l'application,**je veux** voir les films regroupés par catégorie,**afin de** naviguer facilement et trouver des films correspondant à mes préférences. Critères d'acceptation : Les catégories doivent être clairement affichées (ex. : Action, Comédie, Drame, etc.). Chaque catégorie doit afficher une liste de films correspondants sous forme de cartes ou de vignettes. Les films doivent inclure au minimum : Le titre. Une affiche ou une image représentative. L'utilisateur doit pouvoir naviguer facilement entre les différentes catégories.  |

| FRONT (HTML / CSS / Javascript) \- Indications |
| :---: |

***app / component / MovieCategory***   
Créez un composant MovieCategory pour afficher le nom d’une catégorie ainsi qu’une liste de films appartenant à cette catégorie. En toute logique, vous importerez dans MovieCategory le composant Movie pour afficher cette liste.

***app / index.html***  
Au lieu d’afficher une liste unique de films, on affiche désormais les films par catégorie. Donc on utilisera le composant MovieCategory autant de fois que de catégorie disponible. 

| BACK (PHP / MySQL) \- Indications |
| :---: |

## ***server/*** Il faut apporter les modifications nécessaires pour que la réponse à une requête telle que :  https://mmi.unilim.fr/.../script.php?todo=readMovies comprend la catégorie de chaque film. Éventuellement (voir ci-après) les films sont déjà groupés par catégorie.

ATTENTION  
A un moment ou à un autre, vous allez devoir regrouper les films par catégorie pour pouvoir les afficher comme demandé. Ca ne peut plus marcher juste avec un ensemble de films “en vrac”, il faut faire “des paquets de films” par catégorie. Techniquement, cela peut se faire côté Front juste après réception des films ; mais aussi côté serveur web, au niveau du contrôleur ou même du modèle ; et aussi sur le serveur MySQL si vous faites la ou les bonnes requêtes \! Les 3 solutions pourront fonctionner. Si on prend en compte le facteur performance, on essaiera d’éviter de le faire côté Front pour éviter d’impacter la réactivité de l’interface.

## ---

## **ITÉRATION 5** 

### \[ADMIN\] Avoir un formulaire pour ajouter des profils utilisateur 

| USER STORY |
| ----- |
| **En tant qu**'administrateur,**je veux** avoir un formulaire pour ajouter des profils utilisateur,**afin de** permettre aux utilisateurs de personnaliser leur expérience sur la plateforme. Critères d'acceptation : Le formulaire doit permettre de saisir les informations suivantes : Nom du profil. Avatar ou image associée (facultatif). Restrictions d'âge (ex. : 0 (Tous publics), 12, 16, etc.). Une fois le formulaire soumis : Les données doivent être validées (ex. : champs obligatoires remplis, format correct). Le profil doit être ajouté à la base de données. Un message de confirmation doit être affiché (ex. : "Le profil a été ajouté avec succès."). En cas d'erreur (ex. : champ manquant ou problème de connexion), un message d'erreur clair doit être affiché. **Remarque** : un profil utilisateur n’est pas un compte utilisateur. Choisir plus tard un profil utilisateur n'impliquera pas une étape d’authentification. |

| FRONT (HTML / CSS / Javascript) \- Indications |
| :---: |

***admin / data***  
Créez un nouveau module dataProfile.js qui regroupera toutes les requêtes HTTP adressées au serveur et concernant les profils utilisateur. Prévoyez une fonction (par exemple DataProfile.add) qui envoie au serveur les données utiles à l’enregistrement d’un nouveau profil utilisateur.   
Rappel : s’agissant de l’envoi de données de formulaire, c’est une requête HTTP à faire en utilisant la méthode POST.

***admin / component / ProfileForm***   
Créez un composant ProfileForm permettant la saisie des informations nécessaires à la création d’un nouveau profil utilisateur.

***admin / index.html***  
Intégrer le composant ProfileForm à l’interface et ajouter une fonction (par exemple C.handlerAddProfile) pour gérer l’envoie des données de formulaire en cas de validation. 

| BACK (PHP / MySQL) \- Indications |
| :---- |

## ***BDD*** Il vous faut ajouter une table dans votre base de données pour y stocker les profils utilisateur Attention à bien choisir les types de données et privilégiez un identifiant numérique en auto-incrément pour la clef primaire de votre table.

## ***server/*** Il faut prendre en charge un nouveau type de requête HTTP pour enregistrer un nouveau profil utilisateur dans la base. Par exemple https://mmi.unilim.fr/.../script.php?todo=addProfile Respectez comme d’habitude la structuration en script.php / controller.php / model.php

## ---

## **ITÉRATION 6** 

### \[APP\] Pouvoir choisir un profil utilisateur 

| USER STORY |
| ----- |
| **En tant qu**’utilisateur de l'application,**je veux** pouvoir sélectionner un profil utilisateur parmi ceux disponibles,**afin de** personnaliser mon expérience en fonction de mes préférences et restrictions. Critères d'acceptation : Une liste des profils disponibles doit être affichée à l'ouverture de l'application (ou lors de la déconnexion d'un profil actif). Chaque profil doit afficher au minimum : Le nom du profil. Une image ou un avatar associé (facultatif) Une fois un profil sélectionné, l'application doit charger les paramètres et préférences associés à ce profil (sera traité dans les prochaines itérations). |

| FRONT (HTML / CSS / Javascript) \- Indications |
| :---: |

***app / data***  
Créez un nouveau module dataProfile.js qui regroupera toutes les requêtes HTTP adressées au serveur et concernant les profils utilisateur. Vous prévoirez une fonction DataProfile.read (par exemple) qui interroge le serveur pour obtenir la liste des profils disponibles.

***app / component / NavBar***   
Modifiez le composant NavBar pour y ajouter la possibilité de sélectionner un profile.

***app / index.html***  
Vous aurez sans doute à modifier également le handler associé à la NavBar. Pour la suite, il pourra être pratique de conserver dans une variable globale l’identifiant du profil actif (actuellement sélectionné) 

| BACK (PHP / MySQL) \- Indications |
| ----- |
| ***server/***Il faut prendre en charge un nouveau type de requête HTTP pour renvoyer les profils disponibles en base de données. Par exemplehttps://mmi.unilim.fr/.../script.php?todo=readProfilesRespectez comme d’habitude la structuration en script.php / controller.php / model.php |

## ---

## **ITÉRATION 7** 

### \[APP\] Filtrer les contenus selon l’âge du profil sélectionné 

| USER STORY |
| ----- |
| **En tant qu**’utilisateur de l'application,**je veux** que les contenus affichés soient filtrés en fonction des restrictions d'âge associées à mon profil,**afin de** ne voir que les films adaptés à mon âge. Critères d'acceptation : Lorsqu'un profil utilisateur est sélectionné, les restrictions d'âge associées doivent être appliquées automatiquement. Les films non conformes aux restrictions d'âge du profil ne doivent pas être affichés dans la liste des films ou les catégories. Si aucun film n'est disponible après application du filtre, un message clair doit être affiché (ex. : "Aucun film disponible pour votre tranche d'âge."). |

| FRONT (HTML / CSS / Javascript) \- Indications |
| :---: |

***app / data***  
Dans le module dataMovie.js, modifiez votre fonction DataMovies.requestMovies afin de prendre en paramètre un âge limite. 

***app / index.html***  
Là où vous utilisez DataMovie.requestMovies il vous faut passer en paramètre l’âge du profil actuellement sélectionné. Si aucun profil n’est sélectionné on passera 0 en paramètre

| BACK (PHP / MySQL) \- Indications |
| ----- |
| ***server/***La requête HTTP pour demander les films comprend désormais un âge minimum. Par exemple :https://mmi.unilim.fr/.../script.php?todo=readMovies\&age=7le Modifiez la chaîne de traitement de la requête pour prendre en compte ce nouveau paramètre et in fine, sélectionner dans la base de données uniquement les films dont l’âge conseillé est supérieur ou égal à la valeur du paramètre ”age”. |

ATTENTION  
Techniquement, il est aussi possible de récupérer tous les films côté Front puis de les filtrer avant affichage. Mais cela veut dire faire transiter des données qui ne serviront pas (i.e. tous les films au dessus de la limite d’âge). Donc ce n’est pas la bonne option en terme de consommation de la bande passante, pensez au forfait data de l’utilisateur \!

## ---

## **ITÉRATION 8** 

### \[ADMIN\] Pouvoir modifier un profil utilisateur 

| USER STORY |
| ----- |
| **En tant qu**’administrateur,**je veux** pouvoir modifier les informations d'un profil utilisateur,**afin de** mettre à jour ses données ou corriger des erreurs. Critères d'acceptation : Une interface doit permettre de sélectionner un profil utilisateur existant à modifier. Les informations modifiables doivent inclure : Le nom du profil. L'avatar ou l'image associée (facultatif) Les restrictions d'âge. Une fois les modifications effectuées et validées : Les données doivent être mises à jour dans la base de données. Un message de confirmation doit être affiché (ex. : "Le profil a été modifié avec succès."). En cas d'erreur (ex. : champ manquant ou problème de connexion), un message d'erreur clair doit être affiché.  |

| FRONT (HTML / CSS / Javascript) \- Indications |
| :---: |

Basez-vous sur les TP et le formulaire permettant d’ajouter ou de modifier un menu. Techniquement il n’y a pas de différence. Juste que ce sont ici des films au lieu de menus.

| BACK (PHP / MySQL) \- Indications |
| ----- |
| Même chose que pour le Front. Il faut juste adapter votre requête SQL pour qu’elle ajoute un profil lorsqu’il n’existe pas ou bien qu’elle le remplace si il existe déjà.. |

## **ITÉRATION 9**

### 	\[APP\] Pouvoir ajouter des films à une liste de favoris par profil utilisateur

| USER STORY |
| ----- |
| **En tant qu’**utilisateur de l'application,**je veux** pouvoir ajouter des films à une liste de favoris pour mon profil,**afin de** retrouver facilement les films que je souhaite regarder plus tard. Critères d'acceptation : Chaque film doit avoir une option (ex. : un bouton ou une icône) pour l'ajouter à la liste de favoris. Une fois un film ajouté : Il doit apparaître dans la liste de favoris associée au profil utilisateur actif. Un message de confirmation doit être affiché (ex. : "Le film a été ajouté à vos favoris."). Si un film est déjà dans la liste de favoris, l'option d'ajout doit être désactivée ou remplacée par une option de suppression (la suppression sera réalisée dans une prochaine itération). La liste de favoris doit être accessible depuis le profil utilisateur. |

| FRONT (HTML / CSS / Javascript) \- Indications |
| ----- |
| ***app / data***Soon… |

| BACK (PHP / MySQL) \- Indications |
| ----- |
| ***server /***Soon… |

---

## **ITÉRATION 10**

### 	\[APP\] Pouvoir retirer un film de sa liste de favoris

| USER STORY |
| ----- |
| **En tant qu**’utilisateur de l'application,**je veux** pouvoir retirer des films de ma liste de favoris,**afin de** gérer ma liste et supprimer les films que je ne souhaite plus conserver. Critères d'acceptation : Chaque film dans la liste de favoris doit avoir une option (ex. : un bouton ou une icône) pour le retirer. Une fois un film retiré : Il doit disparaître de la liste de favoris associée au profil utilisateur actif. Un message de confirmation doit être affiché (ex. : "Le film a été retiré de vos favoris."). Si la liste de favoris devient vide après suppression, un message clair doit être affiché (ex. : "Votre liste de favoris est vide.").  |

| FRONT (HTML / CSS / Javascript) \- Indications |
| ----- |
| ***app / data***Soon… |

| BACK (PHP / MySQL) \- Indications |
| ----- |
| ***server /***Soon… |

---

## **ITÉRATION 11**

### \[APP\] Avoir des films mis en avant

| USER STORY |
| ----- |
| **En tant qu**’utilisateur de l'application,**je veux** voir une section dédiée aux films "mis en avant",**afin de** découvrir les films recommandés ou populaires. Critères d'acceptation : Une section "Films mis en avant" doit être visible sur la page d'accueil de l'application. Les films "mis en avant" doivent inclure au minimum : Le titre. Une affiche ou une image représentative. Une courte description ou synopsis. Les films affichés dans cette section doivent être marqués comme "mis en avant" dans la base de données. Si aucun film n'est marqué comme "mis en avant", un message clair doit être affiché (ex. : "Aucun film mis en avant pour le moment.").  |

| FRONT (HTML / CSS / Javascript) \- Indications |
| ----- |
| ***app / data***Soon… |

| BACK (PHP / MySQL) \- Indications |
| ----- |
| ***server /***Soon… |

### ---

## **ITÉRATION 12**

\[APP\] Pouvoir consulter des statistiques

| USER STORY |
| ----- |
| **En tant qu**'utilisateur de la plateforme, **je veux** pouvoir consulter les statistiques d’utilisation du site,**afin de** déterminer quels sont les films les mieux notés, combien de profils existent, etc. Critères d'acceptation : Une page dédiée et accessible depuis le menu doit permettre aux visiteurs de consulter différentes statistiques (vous pouvez en rajouter d’autres si vous avez des idées) : Statistiques utilisateur & engagement Nombre total de profils créés (Itération 5 & 6\) Nombre moyen de films par profil dans les favoris (Itération 9 & 10\) Statistiques films & catalogue Nombre total de films dans la base Film le plus ajouté aux favoris (Itération 9\) Catégorie la plus populaire (nombre de films favoris par catégorie — Itération 4\)  |

| FRONT (HTML / CSS / Javascript) \- Indications |
| ----- |
| Au niveau du front c’est à vous de choisir comment faire apparaître ces données statistiques, à titre d’exemple voici le type d’affichage qu’on pourrait voir sur le site d’une médiathèque :  ![][image2] Bien entendu cette page doit s’intégrer graphiquement avec le reste du site, et l'idée est que les données affichées changent en fonction des films ajoutés, des notes données par les utilisateurs, etc. |

| BACK (PHP / MySQL) \- Indications |
| ----- |
| Cette partie implique de lancer des requêtes vers la base de données adaptées à chaque donnée statistique souhaitée, par exemple pour calculer le nombre de films vous aurez sûrement côté serveur du code qui ressemble à : // Dans model.phpfunction **getTotalFilms**() {	$sql \= "SELECT COUNT(\*) AS total\_films FROM SAE203\_films";	$stmt \= $pdo-\>prepare($sql);	$stmt-\>execute();	return $stmt-\>fetch(PDO::FETCH\_ASSOC);} |

---

## **ITÉRATION 13**

### \[APP\] Avoir un champ de recherche

| USER STORY |
| ----- |
| **En tant qu**’utilisateur de l'application,**je veux** pouvoir rechercher un film par son titre (obligatoire) ou d'autres critères (optionnel),**afin de** trouver rapidement un film spécifique dans le catalogue. Critères d'acceptation : Une barre de recherche doit être disponible sur la page d'accueil. L'utilisateur doit pouvoir rechercher un film en saisissant : Le titre du film (partiel ou complet). Optionnellement, d'autres critères comme la catégorie ou l'année de sortie. Les résultats de la recherche doivent afficher les films correspondants sous forme de liste ou de cartes, incluant : Le titre. Une affiche ou une image représentative. Si aucun film ne correspond à la recherche, un message clair doit être affiché (ex. : "Aucun film ne correspond à votre recherche.").  |

| FRONT (HTML / CSS / Javascript) \- Indications |
| ----- |
| ***app / component***Intégrez un champ de recherche (input) à votre NavBar. Possiblement, cela peut faire l’objet d’un sous-composant. Il y a 3 façons de déclencher une requête pour rechercher sur le serveur les films dont le titre contient le (ou les) mot clé saisi par l’utilisateur :  avec un bouton (onclick) en plus du champ de recherche lorsque la valeur du champ est modifiée (onchange) à chaque fois qu’une touche est “frappée” au clavier (onkeyup) |

| BACK (PHP / MySQL) \- Indications |
| ----- |
| ***BDD*** Vous aurez à un moment besoin de sélectionner les films qui contiennent un mot clé dans leur titre. Documentez-vous sur l’instruction SQL “LIKE” pour vous aider. |

### ---

## **ITÉRATION 14**

### \[ADMIN\] Rechercher un ou des films pour gérer leur statut "mis en avant”

| USER STORY |
| ----- |
| **En tant qu**’administrateur,**je veux** pouvoir rechercher un film ou des films et leur attribuer ou retirer le statut "mis en avant",**afin de** gérer les films recommandés visibles par les utilisateurs. Critères d'acceptation : Une interface de recherche doit permettre de rechercher un ou plusieurs films en fonction de critères comme : Le titre du film (partiel ou complet). La catégorie ou le genre (optionnel) L'année de sortie (optionnel) Les résultats de la recherche doivent afficher les films correspondants avec les informations suivantes : Le titre. La catégorie Le statut actuel ("mis en avant" ou non). L'administrateur doit pouvoir : Attribuer le statut "mis en avant" à un film. Retirer le statut "mis en avant" d'un film. Une fois les modifications effectuées, un message de confirmation doit être affiché (ex. : "Le statut du film a été mis à jour avec succès."). Si aucun film ne correspond à la recherche, un message clair doit être affiché (ex. : "Aucun film ne correspond à votre recherche.").  |

| FRONT (HTML / CSS / Javascript) \- Indications |
| ----- |
| ***admin / data / dataMovie.js***On doit pouvoir réutiliser (copier/coller) la même fonction réalisée pour la partie app dans l’itération précédente.Et il faudra aussi pour faire une requête qui permet de demander au serveur de modifier le statut (mis en avant ou pas) d’un film. ***admin / component***On pourra créer un composant avec un champ pour rechercher des films et les présenter dans un formulaire en incluant le statut mis en avant (ou pas) du film. |

| BACK (PHP / MySQL) \- Indications |
| ----- |
| ***server /***On doit aussi pouvoir réutiliser le point d’entrée créé dans l’itération précédente pour rechercher des films sur la base d’un mot-clé (éventuellement en incluant dans la réponse du serveur l’information de statut (mis en avant ou non) du film. |

### ---

## **ITÉRATION 15**

### \[APP\] Avoir un système de notation

| USER STORY |
| ----- |
| **En tant qu**’utilisateur de l'application,**je veux** pouvoir attribuer une note aux films que j'ai regardés,**afin de** partager mon avis et aider les autres utilisateurs à choisir un film. Critères d'acceptation : Chaque film doit afficher une interface de notation (ex. : étoiles, score sur 10, etc.). L'utilisateur doit pouvoir attribuer une note uniquement s'il est connecté à un profil. Une fois une note attribuée : Elle doit être enregistrée dans la base de données et associée au profil utilisateur. Un message de confirmation doit être affiché (ex. : "Votre note a été enregistrée."). Si un utilisateur a déjà noté un film, il ne peut pas le noter à nouveau La note moyenne des utilisateurs doit être affichée pour chaque film. |

| FRONT (HTML / CSS / Javascript) \- Indications |
| ----- |
| ***app / data***Soon… |

| BACK (PHP / MySQL) \- Indications |
| ----- |
| ***server /***Soon… |

### ---

## **ITÉRATION 16**

\[APP\] Avoir un système de commentaires

| USER STORY |
| ----- |
| **En tant qu**’utilisateur de l'application,**je veux** pouvoir laisser des commentaires sur les films,**afin de** partager mon avis et interagir avec d'autres utilisateurs. Critères d'acceptation : Chaque film doit afficher une section dédiée aux commentaires sur sa page détaillée. L'utilisateur doit pouvoir : Ajouter un commentaire (texte uniquement). Voir les commentaires laissés par d'autres utilisateurs. Les commentaires doivent inclure : Le texte du commentaire. Le nom ou pseudonyme du profil utilisateur ayant laissé le commentaire. La date et l'heure du commentaire. Un utilisateur doit être connecté à un profil pour pouvoir laisser un commentaire. Si aucun commentaire n'a encore été laissé pour un film, un message clair doit être affiché (ex. : "Aucun commentaire pour ce film. Soyez le premier à en laisser un \!").  |

| FRONT (HTML / CSS / Javascript) \- Indications |
| ----- |
| ***app / data***Soon… |

| BACK (PHP / MySQL) \- Indications |
| ----- |
| ***server /***Soon… |

---

## **ITÉRATION 17**

\[ADMIN\] Avoir un système de modération des commentaires

| USER STORY |
| ----- |
| **En tant qu**’administrateur,**je veux** pouvoir modérer les commentaires laissés par les utilisateurs,**afin de** garantir que seuls les commentaires appropriés soient visibles sur la plateforme. Critères d'acceptation : Une interface doit permettre aux administrateurs de : Voir tous les nouveaux commentaires non modérés. Marquer un commentaire comme "approuvé" pour qu'il soit visible par les utilisateurs. Supprimer un commentaire inapproprié. Les nouveaux commentaires doivent être visibles uniquement par les administrateurs jusqu'à ce qu'ils soient approuvés. Chaque commentaire doit afficher les informations suivantes : Le texte du commentaire. Le nom ou pseudonyme du profil utilisateur ayant laissé le commentaire. La date et l'heure du commentaire. Le statut actuel du commentaire (ex. : "En attente", "Approuvé"). Une fois une action effectuée (approbation ou suppression), un message de confirmation doit être affiché (ex. : "Le commentaire a été approuvé avec succès."). Si aucun commentaire n'est en attente de modération, un message clair doit être affiché (ex. : "Aucun commentaire à modérer pour le moment.").   |

| FRONT (HTML / CSS / Javascript) \- Indications |
| ----- |
| ***app / data***Soon… |

| BACK (PHP / MySQL) \- Indications |
| ----- |
| ***server /***Soon… |

---

## **ITÉRATION 18**

\[APP\] Signaler les films récemment ajoutés à la plateforme

| USER STORY |
| ----- |
|  **En tant qu**'utilisateur de la plateforme, **Je veux** que les films récemment ajoutés soient signalés avec un tag "new", **Afin de** pouvoir identifier facilement les nouveautés disponibles. Critères d'acceptation : Les films ajoutés dans les 7 derniers jours doivent être marqués avec un tag "new". Le tag "new" doit être visible sur la page de liste des films et sur la page de détails d'un film. Le tag doit disparaître automatiquement une fois que le film n'est plus considéré comme "récent" (après 7 jours). Si aucun film récent n'est disponible, aucun tag "new" ne doit apparaître.  |

| FRONT (HTML / CSS / Javascript) \- Indications |
| ----- |
| ***app / data***Soon… |

| BACK (PHP / MySQL) \- Indications |
| ----- |
| ***server /***Soon… |

---

## **ITÉRATION 19**

\[APP\] Pouvoir consulter (plus) de statistiques

| USER STORY |
| ----- |
| **En tant qu**'utilisateur de la plateforme, **je veux** pouvoir consulter davantage de statistiques d’utilisation du site,**afin de** déterminer quels sont les films les mieux notés, combien de profils existent, etc. Critères d'acceptation : La page de statistiques doit être plus complètes et inclure : Statistiques utilisateur & engagement Profil le plus actif (le plus de films ajoutés aux favoris ou de notes attribuées) Nombre de commentaires publiés (Itération 16\) — avec statut : en attente / approuvés (Itération 17\) Statistiques films & catalogue Film le mieux noté (Itération 15\) — avec moyenne des notes Film le plus récent (Itération 18 — tag "new")  |

| FRONT (HTML / CSS / Javascript) \- Indications |
| ----- |
| Essayez de conserver une seule vue d’ensemble des différentes statistiques. Donc plutôt compléter les précédentes statistiques que de créer de nouvelles “pages” |

| BACK (PHP / MySQL) \- Indications |
| ----- |
| soon… |

---

4. ### Partie Intégration : Faire son Framework CSS

### Méthodologie de travail pour chaque itération de la SAé

Tout au long de la SAé, chaque itération suivra un processus en deux étapes :

1. **Conception du prototype Figma** :  Réalisez une maquette répondant à l’user story de l’itération en utilisant les composants déjà disponibles dans le projet [Figma](https://www.figma.com/files/team/1623984838151497286/project/584456268?fuid=494077477794541962) partagé. Si un composant nécessaire est manquant, créez-le et ajoutez-le à la bibliothèque du projet.  
2. **Intégration HTML/CSS :** Chaque composant doit être intégré de manière autonome et réutilisable.

**Remarque importante** : Durant ces premières phases de la SAé, aucune identité visuelle particulière n'est attendue. **Conservez un style volontairement minimal, de type wireframe ou basse fidélité** : **concentrez-vous sur la structure et le comportement de vos composants, pas sur leur apparence**. La définition d'une charte graphique vous sera imposée lors de l'itération surprise, il sera alors temps d'habiller vos composants avec l’identité visuelle complète donnée.

### Pourquoi construire son framework Css

Cette approche, basée sur le découpage, la décomposition de vos interfaces en petits composants vous permettra de construire votre propre framework CSS. Les **frameworks CSS** sont des ensembles d'outils et de conventions qui facilitent la conception et le développement d'un site web en fournissant un ensemble de règles CSS prédéfinies et réutilisables. Les développeurs peuvent alors combiner ces classes prédéfinies pour créer la mise en forme de leur site web, ce qui leur permet de gagner du temps et d'améliorer leur productivité. 

### Constituants du framework Css

Nous allons diviser notre CSS en plusieurs fichiers distincts selon leur fonction : nous allons créer un fichier pour les variables, un fichier pour les classes utilitaires, un fichier pour les classes de composants et un fichier pour les classes de layout. Nous verrons l'an prochain au S3 comment utiliser un préprocesseur CSS comme Sass pour compiler automatiquement tous ces fichiers en un seul, ce qui est la méthode préférable en production.

Voici quelques pistes  pour créer votre framework CSS :  
\- **reset** : neutralise les styles par défaut des navigateurs  
\- **variables** : approche par tokens \- couleurs, typographie, espacements, breakpoints …  
\- **classes utilitaires (Atomic CSS)** : les classes utilitaires (ou atomiques) sont des classes destinées à contenir une seule déclaration CSS. À chaque classe correspond une seule fonction, ce qui offre une complète séparation entre la structure HTML des données de présentation CSS.   
ex : .mt-4, .text-sm, .bg-primary, .font-bold, .rounded …  
\- **classes de layout flexbox, grid (Atomic CSS)**: les classes de layout sont elles aussi des classes utilitaires, mais  utilisées pour définir la structure de    base d'une page web, comme la mise en page de la grille, la position des éléments et la taille de la page.  
ex: structure de page.flex, .grid, .grid-cols-3, .justify-center, .gap-4 …  
\- **classes des composants (BEM)** : boutons, formulaires, menus, etc.  
Les classes de composants sont utilisées pour définir le style des éléments de base d'une page   
web, comme les boutons, les formulaires, les menus, etc. (c’est cette méthode que nous avons   
principalement utilisée jusqu’à présent).

Utilisez la **règle css  “@layer**”, cette règle css est utilisée pour déclarer une couche de cascade et peut également être utilisée afin de définir l'ordre de précédence lorsqu'il y a plusieurs couches de cascade.

Concentrez-vous sur la simplicité et la réutilisabilité de vos classes.

Documentez chaque classe et fonctionnalité de votre framework pour faciliter la compréhension et la maintenance du code.

**Votre framework évoluera tout au long de la SAé, en fonction de vos besoins ou des contraintes qui vous seront données.** 

### Testez les performances de votre site avec Lighthouse :

**Google Lighthouse** est un outil d'audit de performances de sites Web développé par Google accessible depuis l’inspecteur de Chrome. Il analyse différentes métriques telles que le temps de chargement de la page, la performance de la mise en page, l'accessibilité, les bonnes pratiques de codage et le référencement naturel (SEO).  
Une fois que l'audit est terminé, Lighthouse fournit un rapport détaillé sur les performances du site Web et des suggestions d'amélioration pour chaque métrique. Ces suggestions sont basées sur les meilleures pratiques de Google et peuvent aider les utilisateurs à optimiser la performance de leur site Web.  
En utilisant les recommandations de Lighthouse, les développeurs de sites Web peuvent améliorer l'expérience utilisateur, augmenter le temps de visite et améliorer le référencement naturel de leur site.

Autre outils :   
[https://www.projectwallace.com/](https://www.projectwallace.com/)  
[https://csspeeper.com/](https://csspeeper.com/)

5. ### Partie Base de Données

Pour cette partie vous devez créer un sous-dossier **DocumentationBD/** contenant :

* un export de votre base de données au format .sql depuis PhpMyAdmin (**uniquement les tables qui concernent la SAé)**   
* votre modèle complet créé avec Looping (fichier .loo)  
* un fichier README.md qui explique, :  
  * **pour chaque itération** : les requêtes SQL que vous avez utilisées dans votre code PHP, et si vous avez dû faire des modifications sur la base, en donnant une justification de vos choix concernant l’organisation des tables, les associations, les types de données, longueurs, clefs primaires, etc  
  * une capture d’écran de la vue Looping  
  * une explication rapide concernant les cardinalités (1, 1), (1, n), etc associées aux relations liant les tables

### 6\. Livrables

### Un dépôt Moodle vous permettra de déposer votre travail.

### Le dépôt sera ouvert le jeudi 7 mai  de 14:00 à 23:59.  

### Le lien du dépôt est [https://community-iut.unilim.fr/course/view.php?id=3522](https://community-iut.unilim.fr/course/view.php?id=3522)

### Vous devrez compléter un formulaire en ligne où il faudra (entre autre) renseigner : 

* ### Le lien vers une landing page permettant d’accéder à vos différents sites hébergés (Itération de plus haut rang, itérations surprise, app et admin dans les 2 cas).

* ### Les accès administrateur (login/pwd) pour la partie admin.

* ### Le lien vers votre repository Github. 

### 

### Vous devrez également déposer une archive. La taille de l’archive est limitée à 500 Mo et vous n’avez qu’une tentative. Dans cette archive, nous devons trouver : 

- un document pdf qui montre l’analyse produite par Lighthouse sur vos sites et éventuellement une brève synthèse des modifications que vous avez pu apporter pour améliorer vos “métriques”.   
- l’intégralité de vos codes sources (admin, app, serveur). Si vous avez des difficultés à passer sous la barre des 500 Mo, n’incluez pas les images.

[image1]: <data:image/png;base64,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>

[image2]: <data:image/png;base64,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>