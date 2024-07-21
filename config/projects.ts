export const projects = [
  {
    id: "1",
    link: "https://hawwa.app",
    name: "Hawwa",
    card: "/hawwa-card.webp",
    cover: "/hawwa-cover.webp",
    about:
      "<p>C'est mon premier gros projet : un site de rencontre dédié aux relations sérieuses qui sont censées aboutir à un mariage. De nos jours, la plupart des applications de rencontre mettent l'accent sur des relations éphémères et sans lendemain. C’est assez vendeur.<br />Il existe bien évidemment des sites de rencontre pour relations sérieuses, mais j’ai toujours senti qu’il manquait quelque chose à ces applications déjà existantes.<br />Ce projet est l’aboutissement de plusieurs mois de travail.<br />Il faut savoir que lorsque j’ai commencé à travailler sur ce projet, je ne connaissais quasiment rien au développement d’applications web aussi poussées.<br />Ainsi, lorsque je devais implémenter une fonctionnalité, j’ai dû apprendre de zéro en autodidacte.<br />À l’heure où j’écris ces lignes, le site est encore très loin d’être terminé, mais je suis déjà content de pouvoir montrer une première version de ce projet qui me tient à cœur.</p>",
    technical:
      '<Image src="/hawwa-diagram.svg" alt="Diagram" />\n<div className="flex flex-col">\n    <p>\n    Pour le stack technique, j’ai utilisé NextJS 14 pour créer\n    l’application.\n    <br />\n    Côté frontend, principalement NextUI avec une touche de\n    Shadcn/ui et Tailwind CSS pour le style. <br />\n    React Query a été utilisé pour créer l’infinite scrolling\n    dans la messagerie (pagination transparente).\n    <br />\n    <br />\n    Côté backend, principalement des server actions et\n    quelques routes API, notamment pour toutes les données\n    nécessitant une requête GET et qu’il n’est pas toujours\n    possible d’appeler dans un composant serveur (par exemple,\n    le fetch des messages pour l’infinite scrolling ou le\n    compteur des messages non lus).\n    <br />\n    Pour la connexion utilisateur, mon choix s’est porté sur\n    Next-Auth. <br />\n    <br />\n    Toutes les données sont stockées dans une base de données\n    PostgreSQL, et Prisma a été utilisé pour faciliter la\n    communication avec la base de données. <br />\n    <br />\n    Pour la messagerie, Socket.io a été mon premier choix. <br />\n    En effet, je voulais implémenter tout moi-même en évitant\n    d’utiliser un service tiers. Socket.io permet une\n    communication bidirectionnelle et en temps réel entre le\n    client et le serveur, ce qui est parfait pour ce cas de\n    figure. <br />\n    <br />\n    Tous les fichiers (photos de profil et pièces jointes dans\n    les discussions) sont stockés dans un bucket Amazon S3.\n    <br />\n    <br />\n    Le tout est hébergé sur un VPS.\n  </p>\n</div>',
    obstacles:
      "<p>\n  Le plus gros challenge sur ce projet était sans aucun doute\n  la fonctionnalité de messagerie. <br />\n  Mon premier choix s’était porté sur un système de messagerie\n  classique, de type « boîte de réception ». Mais je n'étais\n  pas satisfait. <br />\n  Un système de messagerie en temps réel est le choix le plus\n  adéquat pour une meilleure expérience utilisateur.\n  <br />\n  <br />\n  Le design du site était aussi un autre challenge. J’avais\n  une vague vision de ce qu’un utilisateur pouvait attendre du\n  site, mais je n’avais pas fait de maquette ou décidé d’une\n  gamme de couleurs, d’un logo, etc.\n  <br />À l’heure où j’écris ces lignes, le design est encore\n  très (trop ?) basique. C’est un point sur lequel je vais\n  devoir travailler pour la suite.\n</p>",
  },
  {
    id: "2",
    link: "https://republike.saminassim.dev",
    github: "https://github.com/SamiNassim/technical-test-republike",
    name: "Republike",
    card: "/republike-card.webp",
    cover: "/republike-cover.webp",
    about:
      "<p>Ce n'est pas vraiment un projet perso mais un test technique réalisé pour Republike, une startup visant à créer un réseau social d'un nouveau genre.<br/>Je devais reproduire le design d'une maquette et ajouter les fonctionnalités correspondantes. (Register, login, poster un message, liker un message.)</p>",
    technical:
      "<p>J'ai utilisé NextJS 14, Typescript, Tailwind CSS, Next-Auth, Prisma ORM, PostgreSQL, Docker, NextUI et ShadCN UI.</p>",
    obstacles:
      "<p>Le projet était assez simple et rapide à réaliser, je n'ai pas rencontré d'obstacle majeur. <br/> Sauf peut-être quelques éléments de CSS sur lesquels je n'étais pas sûr de moi comme le menu de navigation à gauche.</p>",
  },
  {
    id: "3",
    link: "https://kasa.saminassim.dev",
    github: "https://github.com/SamiNassim/OCProject6",
    name: "Kasa",
    card: "/kasa-card.webp",
    cover: "/kasa-cover.webp",
    about:
      "<p>C'était l'un des projets de ma formation OpenClassrooms.<br/>Je devais créer un site de locations immobilières.</p>",
    technical: "<p>React et Sass ont été utilisés pour ce projet.</p>",
    obstacles:
      "<p>Découverte de React donc je devais m'adapter à ce nouveau système de composants réutilisables.<br/>La création des composants Carousel et Collapse était un challenge lorsque je débutais.</p>",
  },
  {
    id: "4",
    link: "https://booki.saminassim.dev",
    github: "https://github.com/SamiNassim/OCProject2",
    name: "Booki",
    card: "/booki-card.webp",
    cover: "/booki-cover.webp",
    about:
      "<p>Le premier projet de ma formation avec OpenClassrooms : l'introduction au HTML et CSS.<br/>Je devais créer la page d'accueil d'un site de tourisme.</p>",
    technical:
      "<p>HTML, CSS et la librairie FontAwesome ont été utilisés pour ce projet.</p>",
    obstacles:
      "<p>L'introduction au développement web commence par la découverte du HTML et CSS, et donc de l'intégration de maquette.<br/>Le challenge était donc de respecter les différentes versions du site selon la taille de l'écran de l'utilisateur. (Responsive Design)</p>",
  },
];
