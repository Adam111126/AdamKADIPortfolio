// Centralized content for projects, competencies and technical labs.
window.PORTFOLIO_DATA = {
    stats: {
        projects: "12",
        competencies: "6"
    },
    competencies: [
        {
            id: "realiser",
            title: "Réaliser",
            summary: "J'ai conçu et développé plusieurs applications et sites, du projet web simple à l'application plus complète, en mobilisant différents langages, interfaces et logiques métier.",
            focusPoints: [
                "développement web et logiciel",
                "interfaces et logique métier",
                "projets solo et groupe"
            ],
            projectIds: [
                "tableau-lego",
                "tetris-python",
                "yams-java",
                "station-ski",
                "muraille-chine",
                "pizza-personnalisee"
            ]
        },
        {
            id: "optimiser",
            title: "Optimiser",
            summary: "Je mets en avant ma capacité à réfléchir à l'efficacité des solutions, notamment à travers les algorithmes utilisés pour générer les mosaïques LEGO et les choix techniques influençant coût, qualité et performance.",
            focusPoints: [
                "choix algorithmiques",
                "compromis qualité / coût",
                "structuration logique"
            ],
            projectIds: [
                "tableau-lego-module-c",
                "tetris-python"
            ]
        },
        {
            id: "administrer",
            title: "Administrer",
            summary: "J'ai travaillé sur l'administration technique d'applications et d'infrastructures, avec une attention particulière aux bases de données, aux services, aux serveurs et aux fondamentaux réseau.",
            focusPoints: [
                "bases de données relationnelles",
                "services et serveurs",
                "réseau et système"
            ],
            projectIds: [
                "station-ski",
                "tableau-lego-admin"
            ],
            technicalPreview: true
        },
        {
            id: "gerer",
            title: "Gérer",
            summary: "Cette compétence met en avant l'organisation du travail, le suivi de projet, la répartition des tâches et l'usage d'outils et de méthodes inspirés de l'agilité.",
            focusPoints: [
                "Jira et suivi des tâches",
                "GitHub et versionnement",
                "coordination d'équipe"
            ],
            projectIds: [
                "tableau-lego-gestion"
            ]
        },
        {
            id: "conduire",
            title: "Conduire",
            summary: "Je valorise ici ma capacité à piloter un projet, cadrer un besoin, organiser une équipe et produire les livrables utiles au suivi et à la réalisation.",
            focusPoints: [
                "pilotage de projet",
                "cadrage et planification",
                "livrables de gestion"
            ],
            projectIds: [
                "pizza-personnalisee",
                "muraille-chine-conduite",
                "tableau-lego-conduite"
            ]
        },
        {
            id: "collaborer",
            title: "Collaborer",
            summary: "Le travail en équipe a été central dans plusieurs projets, avec de la communication continue, des outils collaboratifs et une répartition claire des rôles selon les besoins du groupe.",
            focusPoints: [
                "GitHub",
                "Jira",
                "Discord",
                "répartition des rôles",
                "coordination"
            ],
            projectIds: [
                "tableau-lego-collaboration",
                "pizza-personnalisee",
                "muraille-chine",
                "yams-java",
                "station-ski-collaboration"
            ]
        }
    ],
    projects: [
        {
            id: "tableau-lego",
            title: "Tableau LEGO",
            type: "Groupe",
            technologies: ["PHP", "HTML", "CSS", "Bootstrap", "C", "Java", "MySQL"],
            tools: ["GitHub", "Jira", "Discord"],
            description: "Site e-commerce permettant de générer des mosaïques LEGO à partir d'images fournies par les utilisateurs, puis de préparer la livraison des pièces nécessaires.",
            skills: ["Réaliser", "Optimiser", "Administrer", "Gérer", "Collaborer"],
            learned: "Développement multi-technologies, articulation front/back/outils métier et conception d'un produit concret.",
            details: "Ce projet m'a demandé de faire dialoguer plusieurs briques techniques autour d'un objectif produit clair: transformer une image utilisateur en commande exploitable côté stock et préparation.",
            highlights: [
                "vision produit proche d'un cas réel",
                "enchaînement entre génération, stock et livraison",
                "travail d'équipe sur un projet long"
            ],
            placeholder: "Projet multi-technologies",
            placeholderCaption: "Capture à intégrer plus tard"
        },
        {
            id: "tetris-python",
            title: "Tetris Python",
            type: "Solo",
            technologies: ["Python", "FLTK"],
            description: "Développement d'un Tetris en interface graphique avec une logique de jeu en temps réel.",
            skills: ["Réaliser", "Optimiser"],
            learned: "Logique de jeu, interface graphique et structuration du code.",
            details: "Ce projet m'a permis de travailler la boucle de jeu, la gestion des collisions et l'enchaînement des états dans une interface interactive.",
            image: {
                src: "imageTetris.png",
                alt: "Capture du jeu Tetris développé en Python"
            }
        },
        {
            id: "yams-java",
            title: "Yam's Java",
            type: "Groupe",
            technologies: ["Java"],
            tools: ["Google Docs", "Eclipse", "IntelliJ"],
            description: "Développement d'un jeu de Yam's en Java avec une logique applicative structurée à plusieurs.",
            skills: ["Réaliser", "Collaborer"],
            learned: "Conception orientée objet, logique applicative et travail à deux.",
            details: "Le projet a été utile pour poser des bases propres côté objet, répartir les responsabilités dans le code et apprendre à avancer à deux sur une même application.",
            placeholder: "Jeu Java",
            placeholderCaption: "Prototype console / logique applicative"
        },
        {
            id: "station-ski",
            title: "Station de ski",
            type: "Groupe",
            technologies: ["MySQL", "HTML", "CSS"],
            description: "Site permettant la gestion des clients d'une zone de ski en montagne.",
            skills: ["Réaliser", "Administrer"],
            learned: "Modélisation des données, intégration BDD et interface web.",
            details: "Le projet m'a permis de lier une base relationnelle à une interface simple en gardant une logique métier claire autour de la gestion des clients.",
            placeholder: "Gestion de clients",
            placeholderCaption: "BDD relationnelle et interface web"
        },
        {
            id: "muraille-chine",
            title: "Grande Muraille de Chine",
            type: "Groupe",
            technologies: ["HTML", "CSS"],
            tools: ["Figma", "Gantt Project", "Google Docs"],
            description: "Site web guide touristique sur la Grande Muraille de Chine avec soutenance en anglais.",
            skills: ["Réaliser", "Collaborer", "Conduire"],
            learned: "Création d'un site vitrine, organisation d'équipe et communication orale en anglais.",
            details: "Au-delà du site, ce projet m'a entraîné à coordonner les étapes, préparer une soutenance et défendre le travail produit dans un contexte académique structuré.",
            image: {
                src: "imageMuraille.png",
                alt: "Capture du site guide touristique sur la Grande Muraille de Chine"
            }
        },
        {
            id: "pizza-personnalisee",
            title: "Pizza personnalisée",
            type: "Groupe",
            technologies: ["Java", "JavaFX"],
            description: "Application permettant au client de personnaliser une pizza selon sa forme, ses ingrédients et son prix.",
            skills: ["Réaliser", "Conduire", "Collaborer"],
            learned: "Réalisation d'une application métier, conception d'interface et intégration de logique de personnalisation.",
            details: "Le projet a combiné une logique de personnalisation, une interface orientée usage et un vrai travail de cadrage pour rendre l'application cohérente du point de vue métier.",
            deliverables: ["Backlog", "Sprint backlog", "Diagramme de Gantt", "Cahier des charges", "Charte graphique"],
            placeholder: "Application métier",
            placeholderCaption: "Personnalisation et interface JavaFX"
        },
        {
            id: "tableau-lego-module-c",
            title: "Tableau LEGO - module C",
            type: "Groupe",
            technologies: ["C"],
            description: "Génération de mosaïques LEGO via plusieurs algorithmes permettant d'optimiser le coût ou la qualité du rendu.",
            skills: ["Optimiser", "Réaliser"],
            learned: "Choix algorithmique, compromis qualité/coût et optimisation d'un traitement.",
            details: "Cette partie du projet est le meilleur exemple de réflexion algorithmique: plusieurs approches ont été comparées selon le rendu visuel attendu et le coût en pièces LEGO.",
            highlights: [
                "analyse de compromis",
                "traitement d'image converti en contraintes métier",
                "mise en œuvre concrète en C"
            ],
            placeholder: "Algorithmique en C",
            placeholderCaption: "Optimiser le coût ou le rendu"
        },
        {
            id: "tableau-lego-admin",
            title: "Tableau LEGO - base de données",
            type: "Groupe",
            technologies: ["MySQL", "PHP", "Java"],
            description: "Gestion des utilisateurs, des images et du stock de pièces LEGO via une base de données intégrée au projet.",
            skills: ["Administrer", "Réaliser"],
            learned: "Rôle d'une BDD dans une application complète et cohérence entre données, stock et interface.",
            details: "Cette partie met en évidence l'importance d'une base bien structurée pour gérer les comptes, les médias déposés et le stock de pièces dans un même produit.",
            placeholder: "BDD et stock",
            placeholderCaption: "Données, utilisateurs et images"
        },
        {
            id: "tableau-lego-gestion",
            title: "Tableau LEGO - organisation de projet",
            type: "Groupe",
            technologies: ["Jira", "GitHub", "Discord"],
            description: "Projet d'équipe structuré avec une méthodologie Agile/SCRUM pour suivre les tâches et les livrables.",
            skills: ["Gérer", "Collaborer", "Conduire"],
            learned: "Suivi des tâches, répartition du travail et coordination d'équipe dans la durée.",
            details: "Le projet a nécessité un vrai suivi collectif: découpage, priorisation, synchronisation et visibilité sur l'avancement pour éviter les blocages.",
            highlights: [
                "tableau de suivi partagé",
                "versionnement collectif du code",
                "communication continue de l'équipe"
            ],
            placeholder: "Méthode Agile",
            placeholderCaption: "Suivi, coordination et rituels"
        },
        {
            id: "muraille-chine-conduite",
            title: "Grande Muraille de Chine - coordination",
            type: "Groupe",
            technologies: ["HTML", "CSS"],
            tools: ["Figma", "Gantt Project"],
            description: "Projet avec un rôle d'organisateur, de coordinateur et de développeur pour garder une progression claire jusqu'à la soutenance.",
            skills: ["Conduire", "Collaborer", "Réaliser"],
            learned: "Coordination, organisation et préparation d'une présentation structurée.",
            details: "J'y ai renforcé une posture de pilotage légère mais utile: répartir, suivre, relancer et préparer un rendu cohérent pour l'équipe.",
            placeholder: "Coordination de projet",
            placeholderCaption: "Site vitrine et soutenance"
        },
        {
            id: "tableau-lego-conduite",
            title: "Tableau LEGO - pilotage collectif",
            type: "Groupe",
            technologies: ["Jira", "GitHub", "Discord"],
            description: "Projet d'équipe long avec suivi, coordination et organisation du travail sur plusieurs volets techniques.",
            skills: ["Conduire", "Gérer", "Collaborer"],
            learned: "Pilotage collectif, suivi d'avancement et maintien d'un cap commun sur un projet dense.",
            details: "Le projet exigeait de garder une vision d'ensemble malgré la diversité des briques techniques et des rythmes d'avancement dans l'équipe.",
            placeholder: "Pilotage multi-volets",
            placeholderCaption: "Longueur du projet et coordination"
        },
        {
            id: "tableau-lego-collaboration",
            title: "Tableau LEGO - travail d'équipe",
            type: "Groupe",
            technologies: ["PHP", "C", "Java", "MySQL"],
            tools: ["GitHub", "Jira", "Discord"],
            description: "Projet collectif dans lequel la coordination entre membres, outils et spécialités techniques était indispensable.",
            skills: ["Collaborer", "Gérer", "Conduire"],
            learned: "Communication continue, répartition des rôles et articulation entre plusieurs blocs de travail.",
            details: "La réussite du projet reposait autant sur l'entente technique que sur la capacité à se répartir les tâches, se synchroniser et partager l'information utile au bon moment.",
            placeholder: "Collaboration outillée",
            placeholderCaption: "GitHub, Jira et Discord"
        },
        {
            id: "station-ski-collaboration",
            title: "Station de ski - répartition des rôles",
            type: "Groupe",
            technologies: ["MySQL", "HTML", "CSS"],
            description: "Projet où la coordination entre modélisation de données, intégration et production web a demandé une organisation claire du groupe.",
            skills: ["Collaborer", "Administrer", "Réaliser"],
            learned: "Répartition des rôles, cohérence de groupe et articulation entre base de données et interface.",
            details: "Même sur un projet plus compact, la qualité du rendu dépendait d'une bonne séparation des responsabilités et d'un suivi partagé des choix techniques.",
            placeholder: "Projet en équipe",
            placeholderCaption: "Organisation et intégration"
        }
    ],
    technicalLabs: [
        {
            title: "TP réseaux",
            label: "Fondamentaux",
            description: "Manipulation des bases réseau, compréhension des échanges, configuration simple et lecture d'une architecture technique.",
            tools: ["Réseau", "Analyse", "Configuration"]
        },
        {
            title: "Pare-feu",
            label: "Sécurisation",
            description: "Mise en place de règles de filtrage et compréhension du rôle du pare-feu dans la sécurisation d'un service ou d'une machine.",
            tools: ["Filtrage", "Sécurité", "Contrôle d'accès"]
        },
        {
            title: "Configuration de services",
            label: "Services",
            description: "Configuration de services techniques avec une logique d'installation, de paramétrage et de vérification du bon fonctionnement.",
            tools: ["Services", "Paramétrage", "Validation"]
        },
        {
            title: "Installation de serveurs",
            label: "Infrastructure",
            description: "Découverte des étapes d'installation et d'initialisation d'environnements serveurs selon le besoin du TP ou de la SAÉ.",
            tools: ["Serveur", "Déploiement", "Initialisation"]
        },
        {
            title: "Administration système",
            label: "Système",
            description: "Prise en main d'opérations d'administration système pour comprendre les bases de la maintenance et de l'exploitation.",
            tools: ["Système", "Maintenance", "Exploitation"]
        }
    ],
    featuredProject: {
        title: "Tableau LEGO",
        status: "Projet principal du portfolio",
        summary: "Une plateforme e-commerce capable de transformer une image en mosaïque LEGO exploitable, puis de préparer le stock nécessaire à la commande.",
        stack: ["PHP", "HTML", "CSS", "Bootstrap", "C", "Java", "MySQL"],
        objectives: [
            "proposer une expérience web claire pour déposer une image et lancer une génération",
            "produire une mosaïque cohérente à partir de traitements algorithmiques",
            "gérer le stock et les données nécessaires à la livraison"
        ],
        role: [
            "développement de la partie C pour la génération algorithmique des mosaïques",
            "participation à la partie web pour l'intégration et l'expérience utilisateur"
        ],
        teamTools: ["GitHub", "Jira", "Discord"],
        strengths: [
            "projet multi-technologies",
            "logique e-commerce",
            "génération algorithmique",
            "gestion de stock",
            "base de données",
            "travail d'équipe"
        ],
        details: "C'est le projet le plus complet du portfolio parce qu'il relie technique, produit et organisation. Il montre à la fois de la conception, du développement, de la réflexion algorithmique et un vrai fonctionnement d'équipe.",
        placeholder: "Tableau LEGO",
        placeholderCaption: "Projet phare - visuel à remplacer quand la capture définitive sera prête"
    },
    finalizingProjects: [
        {
            title: "Tableau LEGO Beautiful",
            type: "Groupe",
            status: "En cours de finalisation",
            technologies: ["HTML", "CSS", "JavaScript"],
            description: "Version enrichie du concept Tableau LEGO avec un travail plus poussé sur l'expérience visuelle et la mise en valeur du produit.",
            learned: "Consolider un projet existant, améliorer la présentation et préparer une version plus aboutie pour la démonstration.",
            placeholder: "Iteration UI",
            placeholderCaption: "Version visuelle en progression"
        },
        {
            title: "Deux jeux de puzzle d'images",
            type: "Projet en cours",
            status: "Projet en cours",
            technologies: ["React.js", "Node.js"],
            description: "Deux mini-jeux autour du puzzle d'images, avec une logique front moderne et une base Node.js pour structurer le projet.",
            learned: "Prise en main d'une stack JavaScript plus actuelle et consolidation de la logique d'interaction côté interface.",
            placeholder: "React + Node",
            placeholderCaption: "Jeux web presque finalisés"
        }
    ]
};

