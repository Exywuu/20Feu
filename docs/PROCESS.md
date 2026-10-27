# PROCESS — Journal détaillé de « Daybreak / Le 20ᵉ Feu »

**Auteur du projet : IA GLM (version GLM-5.3-Flash), agent ZCode** — le prototype et cette documentation ont été intégralement produits par cette IA le 27 octobre 2026, à la suite du brief d'épreuve *LIVE EXPERIENCE 2027 — Challenge 01* reçu du commanditaire de l'exercice (voir la section « Qui a créé ce projet ? » du [README](../README.md)). L'événement décrit est une fiction inventée par l'IA ; les éléments réels sont étiquetés comme tels.

Document complémentaire du [README](../README.md). Il consigne, de façon vérifiable, ce qui a été fait, quand, avec quoi, et ce qui n'a **pas** été fait. Aucune étape, recherche, maquette ou vérification n'est inventée ; les informations manquantes sont signalées comme telles.

---

## 1. Chronologie (horodatages mesurés)

Cadre temporel : épreuve lancée à **16h42** (annonce de l'organisateur). Première mesure fiable disponible dans l'environnement de travail : **16h46:57** (commande `date`). Les horodatages de fichiers, vérifiables par `ls -l`, confirment la chronologie.

| Heure locale (mesurée) | Étape |
|---|---|
| 16h46:57 | Démarrage effectif constaté : vérification de l'environnement (répertoire vide), lancement en parallèle de l'extraction textuelle des 5 sites officiels |
| 16h47-16h51 | Résultats d'extraction : Shen Yun quasi vide, Cirque du Soleil partiel, Country Jam HTTP 400, Hellfest bloqué une première fois (limite de concurrence) puis relu avec succès, Lollapalooza Stockholm squelette vide |
| 16h50-16h55 | Recherches web complémentaires (Country Jam, historique Hellfest, noms des scènes) ; vérification Python 3.13 / Node 24 disponibles |
| ~16h56 | Décision arrêtée : Hellfest ; fiction « Le 20ᵉ Feu » fixée (concept, 3 modes, étiquettes Réel/Fictif/Simulation) |
| 16h57 | `index.html` écrit (structure complète des 3 modes, contenus, étiquettes) — il sert de référence fonctionnelle, **aucun wireframe graphique préalable n'a été produit** |
| 17h01 | `css/style.css` écrit (thème, responsive, reduced-motion, focus) |
| 17h06 | `js/main.js` écrit (particules, feux, millésimes, flamme, forge, modal, WebAudio) |
| 17h06+ | Serveur local `python -m http.server 8642` lancé en arrière-plan |
| 17h12-17h27 | Première passe de tests Playwright : navigation, interactions, console (0 erreur), captures d'écran desktop et mobile |
| 17h27-17h31 | Contrôle clavier et vue mobile ; rechargement de page nécessaire après une réinitialisation de session navigateur (viewport perdu) |
| 17h35-17h36 | `README.md` (v1) et `BILAN.md` rédigés |
| 17h36 | **Livraison du prototype** — ~59 min après la première mesure (plafond de 90 min respecté) |
| 17h45 | Passe QA supplémentaire demandée : vérification réelle de `prefers-reduced-motion` (canvas figé prouvé), clavier réel (skip-link, maintien Entrée), tablette 768 px, inspection visuelle de chaque section ; `BILAN.md` mis à jour |
| 18h12-18h20 (environ) | Consigne « Daybreak » reçue : rangement des captures dans `docs/images/`, réécriture du `README.md`, création de ce document. **Aucune modification du prototype.** |

## 2. Recherche des candidats — détail et sources

Méthode réelle : outil d'**extraction textuelle** de pages web (pas de rendu visuel), le **27/10/2026 entre ~16h45 et ~16h55** ; puis moteur de recherche. Les sources secondaires sont parvenues via un moteur de recherche qui résumait ces pages ; elles n'ont pas été ouvertes en intégralité — ce point est signalé.

### Shen Yun — shenyun.com (consulté ~16h45)
- **Vérifié** : titre de page « Shen Yun Official Site | tickets $90-$212 – Skip Scalpers ». Le reste de la page était vide pour l'outil d'extraction.
- **Interprété** (connaissance générale, non confirmée ce jour) : compagnie de danse classique chinoise, tournées mondiales continues, billets payants haut de gamme.
- **Inaccessible** : menu, sections, histoire, visuels, parcours de réservation.

### Cirque du Soleil — cirquedusoleil.com (consulté ~16h45)
- **Vérifié (texte partiel)** : « Welcome to a new era of Cirque du Soleil », « Entertainment that defies conformity » ; spectacles cités : LUZIA, KURIOS, KOOZA, OVO, KÀ, ALIZÉ (premier spectacle résident à Hawaï), JOYÀ (Riviera Maya), AUANA, LES INCOUCHABLES ; sections Vegas, musique, Cosm, blog, infolettre, partenaires (le tableau des partenaires était vide) ; collaboration Macallan.
- **Interprété** : marque multi-verticales au-delà du cirque ; identité visuelle sombre/magique (connaissance publique).
- **Inaccessible** : menu complet, dates/villes, mentions d'anniversaire (aucune visible).

### Country Jam — countryjam.com (consulté ~16h45)
- **Vérifié** : **échec d'accès HTTP 400** — le site officiel n'a pas pu être lu du tout.
- **Sources secondaires via moteur de recherche (~16h49)** : KKCO 11 News (12/03/2025) : line-up 2025 à Mack (CO) du 26-28 juin avec Cody Johnson, Luke Bryan, Bailey Zimmerman ; billets GA dès 109 $. Historique long (ex. 2015 : Tim McGraw, Keith Urban, ~80 000 spectateurs). **Rumeur d'annulation 2026 signalée par une vidéo Facebook** — non vérifiée officiellement.
- **Inaccessible** : tout le site officiel.

### Hellfest — hellfest.fr (consulté ~16h49, après un premier refus « user concurrency limit exceeded » à ~16h46)
- **Vérifié (page d'accueil)** : « Home of Hellbangers Since 2006 » ; « 17 - 20 juin 2027 » ; « Clisson Rock City » ; « 4 jours / +300 Artistes / 240.000 Hellbangers » ; Pass 4 jours 389 € (vente 7 juillet 13h) affiché « complet » ; pass 1 jour « à venir » ; vente sur tickets.hellfest.fr ; revente officielle contre le marché noir ; menu : Billetterie, Infos Générales, Hellfest Shop, Expérience, Partenaires, **RSO (Engagements, Accessibilité, Prévention)**, Recrutement, Newsletter ; Discord, Forum, app officielle ; boutique « Sanctuary 2026 » ; aftermovie 2026 évoquant une « 19ᵉ édition » ; contact à « La Feuillée 85610 Cugand ».
- **Sources secondaires via moteur de recherche (~16h49-16h55)** : ondeschocs.com — édition 2026 tenue du **18 au 21 juin 2026** à Clisson ; « en 2027 le Hellfest fêtera ses 20 ans et passera à 10 scènes pour environ 300 groupes » ; Reddit r/festivals (retours festivaliers 2026) ; HardForce (reportage 19/06/2026) ; Presse-Océan (ouverture 18/06/2026) ; page Facebook agrégée : six scènes officielles — **Main Stage 1, Main Stage 2, Altar (black/death), Temple (couverte, underground), Warzone (punk/hardcore), The Valley (doom/stoner)** + zone « Hell's Hollow », site ~20 hectares.
- **Inaccessible** : line-up 2027, pages intérieures, versions mobile.

### Lollapalooza Stockholm — lollastockholm.com (consulté ~16h45)
- **Vérifié** : page quasi vide (squelette JS : titre seul, « skip to main content »).
- **Interprété** (connaissance générale) : festival urbain moderne lancé en 2019 à Stockholm.
- **Inaccessible** : tout le contenu éditorial.

### Ce qui n'a PAS été fait en recherche
- Aucune inspection visuelle (capture, rendu) des sites officiels.
- Aucun examen de leurs versions mobiles.
- Aucune consultation des productions d'autres participants (interdit par le brief).

## 3. Décisions de conception — registre

1. **Choix de Hellfest** : seul candidat documentable honnêtement dans le temps imparti + mythologie native (feu, vallée, scènes-nommondes) + site officiel purement utilitaire (besoin d'expérience non servi) + palette programmable sans asset protégé.
2. **Fiction « une nuit » plutôt qu'une édition complète** : garantit la distinction avec l'édition réelle 2027 (annoncée sur le site officiel) tout en exploitant l'anniversaire (20ᵉ édition).
3. **Correction de cap sur l'anniversaire** : première intuition (« 21 ans ») abandonnée après vérification croisée (« Since 2006 » officiel + « 19ᵉ édition » en 2026 via l'aftermovie + sources secondaires) → **20ᵉ édition en 2027**, 19 éditions passées (2020-2021 sans édition). Avant toute écriture de contenu.
4. **Groupes entièrement inventés** avec des noms volontairement improbables, étiquetés fictifs, pour n'associer aucun artiste réel à une fiction.
5. **Étiquettes Réel / Fictif / Simulation** sur chaque contenu — principe fixé avant l'écriture du HTML, pour répondre à l'exigence de séparation des informations.
6. **Zéro asset tiers** : flamme du logo, paysage du Val, feux et sceau dessinés en SVG/CSS/canvas ; polices système ; ambiance sonore synthétisée en WebAudio (aucun fichier audio, aucun morceau protégé).
7. **Son désactivé par défaut**, activation explicite — exigence du brief.
8. **Pas de wireframe graphique préalable** : le brief interdisant de s'arrêter à un wireframe, la structure a été directement écrite en HTML (contenus + étiquettes d'abord), puis habillée, puis programmée.

## 4. Journal des vérifications (tests)

Environnement de test : Chromium intégré piloté par Playwright, machine de développement Windows. Les captures citées sont rangées dans [`docs/images/`](images/).

| # | Vérification | Résultat |
|---|---|---|
| 1 | Chargement initial + rechargements, console (niveau warning+) | 0 erreur, 0 warning |
| 2 | Clic scène « Main Stage 1 » | Détail de veillée affiché (badge Fictif, 2 sets) |
| 3 | Clic millésime 2020 | Récit étiqueté « réel » affiché |
| 4 | Maintien flamme (pointerdown 450 ms) | Compteur → 1 353, localStorage écrit |
| 5 | Soumission forge | Sceau `BRA-MAI-EXT-68F`, canvas dessiné, 5 étapes de route, résultat visible |
| 6 | Billetterie : clic « Réserver (simulation) » | Modal ouverte, texte de simulation correct, fermeture par bouton et par clic extérieur ; `Échap` vérifié |
| 7 | Ordre de tabulation (audit programmatique) | skip-link → brand → nav → son → CTA → sections |
| 8 | Tabulation réelle depuis chargement frais | 1ʳᵉ tab → skip-link visible (left: 0, fond doré) |
| 9 | Maintien clavier réel de `Entrée` 600 ms sur la flamme | Compteur 1 353 → 1 358, focus conservé, arrêt net |
| 10 | `prefers-reduced-motion: reduce` émulé | Révélations opacité 1, animations CSS `none`, **canvas figé** (2 captures `toDataURL` à 350 ms identiques) |
| 11 | Viewports | Desktop 1920×1080 et 1280×800 ; tablette 768×1024 (pas de débordement horizontal) ; mobile 390×844 (nav repliée) |
| 12 | Inspection visuelle section par section (8 captures) | Héro, Seuil, feux allumés + millésimes, Cœur de Braise, sceau, Guide/FAQ/footer, mobile, tablette |

**Problèmes rencontrés et traitement** :
- Refus ponctuel d'accès à hellfest.fr (limite de concurrence de l'outil) → réessai réussi ; rien à corriger côté prototype.
- Réinitialisation de session navigateur en cours de tests (viewport perdu, page `about:blank`) → re-navigation et reconfiguration ; les tests concernés ont été relancés proprement.
- Défilement automatisé vers le résultat de forge masqué après rechargement → remontait au sommet (élément `hidden`, offsetTop nul) : comportement attendu du DOM, lié au protocole de test ; aucun correctif produit nécessaire.
- Scan de sécurité automatique (Mimosa) signalant `Math.random()` en « aléatoire faible » : **faux positif** — usage purement décoratif (particules, compteur simulé), aucun usage cryptographique dans le prototype.

**Non testé** : lecteurs d'écran réels, navigateurs non-Chromium, appareils physiques, performance sur matériel modeste, rendu des images sur GitHub (publication non autorisée).

## 5. Environnement et mesures

- Modèle : **GLM (GLM-5.3-Flash)** via agent ZCode. Environnement : ZCode Desktop, Windows (build 26300 x64), Git Bash.
- Accès web : oui (extraction textuelle + moteur de recherche). Navigateur : Chromium/Playwright intégré. Terminal : Git Bash. Python 3.13.12 et Node 24.19.0 disponibles (Python utilisé pour le serveur local).
- Aucun outil de génération d'images utilisé ; aucune ressource tierce incluse (donc aucune licence externe à créditer ; toutes les images du dépôt sont des captures réalisées par l'auteur, libres de redistribution).
- Durée : prototype **16h46:57 → 17h36:27 (~50 min de build+tests, ~59 min jusqu'à la livraison documentée)** ; documentation Daybreak ajoutée ensuite. Consommation de tokens et coût : **inconnus** (aucun compteur accessible) — aucune valeur inventée.
- Auto-notation : **aucune** — la grille commune (exactitude /20, originalité /25, usage et accessibilité /25, technique /20, transparence /10) est appliquée extérieurement.
