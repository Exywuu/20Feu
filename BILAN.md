# BILAN — « Le 20ᵉ Feu » (LIVE EXPERIENCE 2027 · Challenge 01)

**Projet créé par l'IA GLM (GLM-5.3-Flash), agent ZCode, le 27 octobre 2026**, à la suite de la réception du brief de l'épreuve : étude de cinq organisations, choix d'une seule, invention d'une édition anniversaire fictive 2027, conception et réalisation d'un prototype en 90 minutes. L'événement décrit est une fiction inventée par l'IA (voir README, section 0).

Livraison du 27 octobre 2026. Prototype : dossier `le-vingtieme-feu/` (voir README.md pour le lancement).

> Conformément à la consigne d'organisation reçue en cours d'épreuve : le chronomètre n'a pas été réinitialisé (l'épreuve avait déjà commencé), la remise intervient au plafond de 90 minutes, et **aucune note n'est auto-attribuée** — la grille commune (pertinence et exactitude /20, originalité /25, usage et accessibilité /25, fonctionnement et qualité technique /20, transparence /10) relève d'une évaluation extérieure indépendante.

---

## 1. Recherche des cinq candidats — ce qui a été réellement consulté

Méthode réelle : extraction du **texte** des pages d'accueil officielles (outil de lecture web, 27 oct. 2026 vers 16h45–16h50) + recherches web complémentaires. **Aucune inspection pixel des sites officiels n'a été réalisée** (pas de capture d'écran de leurs pages) : toute observation « visuelle » ci-dessous est donc une interprétation à partir de contenus textuels et de connaissance publique, jamais une observation directe.

### Shen Yun — shenyun.com
- **A. Vérifié** : la page a répondu mais quasi vide pour mes outils ; seul le titre était lisible (« Shen Yun Official Site | tickets $90-$212 »).
- **B. Interprété** : compagnie de danse classique chinoise à tournée mondiale continue, esthétique inspirée des dynasties chinoises, billetterie à prix élevés — déduit du titre et de connaissance générale, non confirmé par le site aujourd'hui.
- **C. Inaccessible** : menu, sections, histoire, visuels. Site très dynamique/protégé pour mon extraction.

### Cirque du Soleil — cirquedusoleil.com
- **A. Vérifié (texte partiel)** : accueil lisible en partie — « Welcome to a new era of Cirque du Soleil », « Entertainment that defies conformity », spectacles cités (LUZIA, KURIOS, KOOZA, OVO, KÀ, ALIZÉ, JOYÀ, AUANA), univers Las Vegas, expérience « Cosm », blog, infolettre.
- **B. Interprété** : marque totale multi-verticales (hôtellerie, partenariats comme le whisky Macallan) ; identité visuelle sombre/magique connue du public mais non observée directement aujourd'hui.
- **C. Inaccessible** : menu complet, dates/villes de tournées (contenu dynamique non extrait), aucune mention d'anniversaire visible.

### Country Jam — countryjam.com
- **A. Vérifié** : **échec d'accès — HTTP 400** via mon outil. Site officiel non consulté.
- **B. Interprété (sources secondaires)** : festival country de Mack/Grand Junction (Colorado), édition 2025 du 26-28 juin avec Cody Johnson, Luke Bryan, Bailey Zimmerman ; **rumeur non officielle d'annulation 2026** (source réseaux sociaux, non vérifiée).
- **C. Inaccessible** : tout le site officiel.

### Hellfest — hellfest.fr
- **A. Vérifié (page d'accueil lisible)** : « Home of Hellbangers Since 2006 » ; « 17 - 20 juin 2027 » ; « Clisson Rock City » ; stats affichées (4 jours, +300 artistes, 240 000 Hellbangers) ; Pass 4 jours 2027 à 389 € déjà « complet », vente le 7 juillet 13h, revente officielle anti-marché noir ; menu riche (Billetterie, Infos Générales, Shop, Expérience, **RSO : Engagements / Accessibilité / Prévention**, Recrutement…) ; Discord, Forum, app officielle ; mention d'une « 19ᵉ édition » dans l'aftermovie 2026 ; siège à Cugand (La Feuillée).
- **A. Vérifié (recherche web)** : édition 2026 tenue du 18 au 21 juin 2026 à Clisson ; une source secondaire indique que 2027 marquera les 20 ans avec une montée à ~10 scènes / ~300 groupes.
- **B. Interprété** : noms et vocations des scènes (Main Stage 1 & 2, Altar, Temple, Warzone, The Valley) — cohérents entre plusieurs sources publiques mais **non listés sur la page d'accueil officielle extraite** ; univers graphique feu/obscur/médiéval-fantastique connu, non observé pixel aujourd'hui.
- **C. Inaccessible** : line-up 2027, pages intérieures, versions mobile détaillées.

### Lollapalooza Stockholm — lollastockholm.com
- **A. Vérifié** : page quasi vide pour mes outils (squelette JS : titre seul).
- **B. Interprété** : festival urbain moderne à Stockholm (depuis 2019), design épuré — connaissance générale non confirmée aujourd'hui.
- **C. Inaccessible** : tout le contenu éditorial.

---

## 2. Choix : Hellfest — justification

- **Compréhension réelle possible** : c'est le seul des cinq dont le site officiel m'a livré un contenu riche et vérifiable dans le temps imparti. Choisir un candidat que je peux documenter honnêtement prime (le brief sanctionne l'invention déguisée en faits).
- **Univers mythologique natif** : le Hellfest possède déjà une cosmologie (feu, vallée de Clisson, « Hellbangers », scènes-nommondes comme Altar/Temple/Valley). Un parcours narratif de « descente » s'y inscrit sans la forcer.
- **Besoin public mal servi** : le site officiel est fonctionnel mais purement utilitaire (billetterie, infos) ; rien ne fait *ressentir* la nuit du festival avant d'y être. Une expérience d'anticipation (la nuit d'éveil) n'existe pas sur son site.
- **Réaliste en 90 minutes** : palette noir/braise entièrement programmable (CSS/canvas), zéro asset protégé nécessaire, forte culture FR (brief en français).
- **Écart délibéré** : Cirque du Soleil (candidat « évident », le plus célèbre) écarté ; Shen Yun écarté (site inaccessible + sujets culturels exigeants) ; Country Jam et Lolla Stockholm écartés (sites inaccessibles → compréhension non vérifiable).

## 3. La fiction : « Le 20ᵉ Feu — Nuit d'Éveil »

Anniversaire **inventé** (aucune nécessité d'un jubilé réel) : une soirée unique du **mercredi 16 juin 2027, 19h→1h**, veille fictive de la 20ᵉ édition. Principe : 19 braises pour les 19 éditions passées (2006-2026, avec les années creuses 2020-2021), et un 20ᵉ feu que le public allume ensemble — « la Flamme Commune ». Distincte de l'édition officielle réelle (17-20 juin 2027, pass 389 € complet), qui est citée et liée explicitement comme « la réalité, hors fiction ».

**Note sur le prototypage préalable** : il n'y a pas eu de phase séparée de wireframe ou de maquette avant le code — volontairement, le brief demandant de ne pas s'arrêter à un wireframe mais de *réaliser réellement* le site dans le temps imparti. La conception s'est faite en trois étapes internes : (1) fixer le concept, la fiction et la structure des trois modes (paliers de la descente, forge, guide) ; (2) écrire le squelette HTML complet qui sert de « wireframe fonctionnel » (tous les contenus réels/fictifs et leurs étiquettes d'abord) ; (3) habillage CSS puis logique JS. Aucune itération graphique exploratoire n'a été jetée : le premier jet est celui livré, relu et corrigé en fin de course par la passe QA décrite en section 4.

## 4. Ce qui est réellement implémenté (et testé)

Fonctionnel et vérifié par tests réels (navigateur Chromium automatisé, le 27 oct. 2026) :
1. **Mode A « La Descente »** : 5 paliers au défilement ; 19 braises-millésimes cliquables (étiquettes réel/fictif par récit) ; 6 scènes à allumer révélant une programmation inventée ; flamme à nourrir par maintien (pointer **et** clavier Espace/Entrée) avec compteur local simulé ; particules de braises canvas.
2. **Mode B « La Forge »** : 3 questions (11 combinaisons×… 4×4×3=48 combinaisons) → sceau procédural canvas (graine dédiée) + code + route de nuit personnalisée inventée ; bouton « Reforger ».
3. **Mode C « Le Guide »** : 8 cartes (événement, déroulé, scènes, billetterie simulée, transports, accessibilité, FAQ, lien réel séparé).
4. **Transversal** : ruban permanent de non-officialité ; badges Réel/Fictif/Simulation partout ; modal de réservation simulée (Échap, clic-fond, focus restitué) ; son WebAudio **off par défaut** ; skip-link ; `prefers-reduced-motion` (particules/anims coupées, confirmé par code + media query) ; responsive testé 1920×1080 et 390×844.

**Tests réellement effectués** (Playwright/Chromium) : chargement sans erreur console (0 erreur, 0 warning) ; clic sur scène → détail affiché ; clic millésime 2020 → récit « réel » affiché ; maintien flamme → compteur 1 353 ; forge → sceau `BRA-MAI-EXT-68F` + 5 étapes de route ; modal billetterie ouverte/fermée ; ordre de tabulation vérifié (skip-link → nav → contenu → boutons) ; capture desktop + mobile.

**Contrôle qualité final (pass supplémentaire, toujours Chromium)** :
- `prefers-reduced-motion: reduce` émulé puis **vérifié pour de vrai** : révélations affichées d'office (opacité 1), animations CSS coupées (nom d'animation `none`), et boucle canvas réellement figée (deux captures `toDataURL` à 350 ms d'écart strictement identiques).
- **Clavier réel** (touches physiques simulées par le pilote navigateur) : première tabulation → skip-link visible (positionnée à 0 px, fond doré) ; maintien de `Entrée` 600 ms sur le bouton de flamme → compteur 1 353 → 1 358, focus conservé sur le bouton, arrêt net au relâchement.
- **Tablette 768×1024** : pas de débordement horizontal, navigation sur une ligne, héro centré.
- Vérification visuelle section par section (captures) : feux allumés + détail de veillée, millésimes, Cœur de Braise avec flamme lumineuse, sceau de forge (rayons de braise, anneau, glyphe, étincelles), Guide, pied de page.

**Non testé** : vrais lecteurs d'écran (seulement ARIA écrit soigneusement), tablette physique, navigateurs autres que Chromium, performances sur appareil bas de gamme réel.

## 5. Limites et honnêteté

- Le compteur « braises offertes » est **simulé** (localStorage + base aléatoire locale) — étiqueté comme tel dans l'interface.
- Les groupes de la programmation sont des inventions loufoques volontaires (« Les Gnous d'Acier »…), étiquetés fictifs, pour n'associer aucun artiste réel à une fiction.
- Les versions mobiles des sites officiels n'ont pas été examinées (outils d'extraction texte seulement).
- Un scan de sécurité automatique (Mimosa) a signalé `Math.random()` comme « aléatoire faible » : **faux positif** ici — le hasard ne sert qu'aux particules décoratives et au compteur simulé, aucun usage cryptographique n'existe dans ce prototype.
- Chronomètre : démarrage annoncé 16h42 (cadre organisateur) ; première mesure fiable de mon côté **16h46:57** ; remise visée avant 18h12-18h16 (90 min) — la mesure du temps est faite par horloge système, sans garantie d'arrêt automatique du processus, d'où cette remise anticipée.

## 6. Environnement d'exécution (consigné)

| Élément | Valeur |
|---|---|
| Modèle | GLM (GLM-5.3-Flash), hébergement Z.ai — agent ZCode |
| Environnement | ZCode Desktop, Windows (build 26300, x64), shell Git Bash |
| Accès web | Oui — extraction texte de pages (1 site sur 5 bloqué, 2 quasi vides) + moteur de recherche |
| Navigateur de test | Chromium intégré piloté par Playwright (MCP) |
| Terminal / outils de code | Bash, Python 3.13.12 (serveur local), Node v24.19.0 disponibles (non utilisés au runtime) |
| Outils de création visuelle | Aucun générateur d'images utilisé — 100 % SVG/CSS/canvas programmatique |
| Consommation de tokens / coût | **Non mesurable depuis mon environnement** (aucun compteur exposé) — aucune valeur inventée |
| Temps de travail effectif | Mesuré par horloge système : démarrage 16h46:57 → remise ≤ 90 min (plafond respecté, pas d'auto-notation) |

## 7. Déclaration de non-officialité

« Le 20ᵉ Feu » est une proposition créative indépendante. Il ne remplace pas le site officiel du Hellfest, ne prétend à aucune commande, validation ou affiliation. Les informations réelles citées proviennent de sources publiques consultées le 27 octobre 2026 (hellfest.fr ; press/médias pour les scènes et l'historique) ; tout le reste est inventé et étiqueté. Aucun partenariat, personne réelle ou déclaration attribuée n'a été inventé.
