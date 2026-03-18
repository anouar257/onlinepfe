import { Subject } from '../models/subject.model';
import { Level } from '../models/level.model';
import { Theme } from '../models/theme.model';
import { Lesson, LessonContent } from '../models/lesson.model';

export const MOCK_LEVELS: Level[] = [
    { id: 1, name: 'Préscolaire', description: 'Préparation à l\'école', order: 1 },
    { id: 2, name: '1 — 4e année', description: 'École primaire', order: 2 },
    { id: 3, name: '5 — 8e année', description: 'Collège', order: 3 },
    { id: 4, name: '9 — 11e année', description: 'Lycée', order: 4 },
    { id: 5, name: 'Adulte', description: 'Formation continue', order: 5 },
    { id: 6, name: 'Examens', description: 'Préparation aux examens', order: 6 },
];

export const MOCK_SUBJECTS: Subject[] = [
    {
        id: 1,
        name: 'Mathématiques',
        description: 'Algèbre, Géométrie, Analyse et Statistiques',
        icon: 'calculate',
        colorCode: '#4F46E5',
        image: 'https://images.unsplash.com/photo-1635070041078-e363dbe005cb?auto=format&fit=crop&q=80&w=400',
        levels: [2, 3, 4, 5],
    },
    {
        id: 2,
        name: 'Physique',
        description: 'Mécanique, Optique, Électricité et Thermodynamique',
        icon: 'science',
        colorCode: '#0891B2',
        image: 'https://images.unsplash.com/photo-1636466497217-26a8cbeaf0aa?auto=format&fit=crop&q=80&w=400',
        levels: [3, 4, 5],
    },
    {
        id: 3,
        name: 'Sciences de la Vie et de la Terre',
        description: 'Biologie, Géologie et Écologie',
        icon: 'biotech',
        colorCode: '#059669',
        image: 'https://images.unsplash.com/photo-1530213786676-4c72473840aa?auto=format&fit=crop&q=80&w=400',
        levels: [2, 3, 4],
    },
    {
        id: 4,
        name: 'Français',
        description: 'Grammaire, Conjugaison, Littérature et Expression écrite',
        icon: 'menu_book',
        colorCode: '#DC2626',
        image: 'https://images.unsplash.com/photo-1456513080510-7bf3a84b82f8?auto=format&fit=crop&q=80&w=400',
        levels: [1, 2, 3, 4],
    },
    {
        id: 5,
        name: 'Anglais',
        description: 'Reading, Writing, Listening et Speaking',
        icon: 'translate',
        colorCode: '#7C3AED',
        image: 'https://images.unsplash.com/photo-1546410531-d41aed892bb6?auto=format&fit=crop&q=80&w=400',
        levels: [2, 3, 4, 5],
    },
    {
        id: 6,
        name: 'Histoire-Géographie',
        description: 'Civilisations, Cartes et Géopolitique',
        icon: 'public',
        colorCode: '#D97706',
        image: 'https://images.unsplash.com/photo-1461360370896-922624d12aa1?auto=format&fit=crop&q=80&w=400',
        levels: [2, 3, 4],
    },
    {
        id: 7,
        name: 'Informatique',
        description: 'Programmation, Algorithmique et Réseaux',
        icon: 'computer',
        colorCode: '#2563EB',
        image: 'https://images.unsplash.com/photo-1517694712202-14dd9538aa97?auto=format&fit=crop&q=80&w=400',
        levels: [3, 4, 5],
    },
    {
        id: 8,
        name: 'Chimie',
        description: 'Chimie organique, Chimie minérale et Réactions',
        icon: 'experiment',
        colorCode: '#E11D48',
        image: 'https://images.unsplash.com/photo-1532094349884-543bc11b234d?auto=format&fit=crop&q=80&w=400',
        levels: [3, 4],
    },
    {
        id: 9,
        name: 'Philosophie',
        description: 'Éthique, Logique et Pensée critique',
        icon: 'psychology',
        colorCode: '#8B5CF6',
        image: 'https://images.unsplash.com/photo-1505664177941-c66c68e1a166?auto=format&fit=crop&q=80&w=400',
        levels: [4, 5],
    },
    {
        id: 10,
        name: 'Éducation Islamique',
        description: 'Études religieuses et civilisation islamique',
        icon: 'auto_stories',
        colorCode: '#0D9488',
        image: 'https://images.unsplash.com/photo-1584286595398-a59f21d313f5?auto=format&fit=crop&q=80&w=400',
        levels: [1, 2, 3, 4],
    },
];

export const MOCK_THEMES: Theme[] = [
    // Mathématiques - 5ème année (level 3)
    { id: 1, name: 'Introduction aux nombres', order: 1, subjectId: 1, levelId: 3, lessonsCount: 5 },
    { id: 2, name: 'Algèbre et équations', order: 2, subjectId: 1, levelId: 3, lessonsCount: 4 },
    { id: 3, name: 'Géométrie plane', order: 3, subjectId: 1, levelId: 3, lessonsCount: 6 },
    { id: 4, name: 'Statistiques et probabilités', order: 4, subjectId: 1, levelId: 3, lessonsCount: 3 },

    // Physique - 5ème année (level 3)
    { id: 5, name: 'Introduction à la physique', order: 1, subjectId: 2, levelId: 3, lessonsCount: 4 },
    { id: 6, name: 'Mécanique', order: 2, subjectId: 2, levelId: 3, lessonsCount: 5 },
    { id: 7, name: 'Optique', order: 3, subjectId: 2, levelId: 3, lessonsCount: 3 },

    // SVT - 5ème année (level 3)
    { id: 8, name: 'Introduction à la biologie', order: 1, subjectId: 3, levelId: 3, lessonsCount: 4 },
    { id: 9, name: 'Le monde vivant', order: 2, subjectId: 3, levelId: 3, lessonsCount: 5 },
    { id: 10, name: 'L\'environnement', order: 3, subjectId: 3, levelId: 3, lessonsCount: 3 },

    // Informatique - level 3
    { id: 11, name: 'Introduction à l\'informatique', order: 1, subjectId: 7, levelId: 3, lessonsCount: 4 },
    { id: 12, name: 'Algorithmique', order: 2, subjectId: 7, levelId: 3, lessonsCount: 5 },
    { id: 13, name: 'Programmation', order: 3, subjectId: 7, levelId: 3, lessonsCount: 4 },
];

export const MOCK_LESSONS: Lesson[] = [
    // Theme 1: Introduction aux nombres
    { id: 1, title: 'Les nombres naturels et entiers', duration: '12 min', order: 1, themeId: 1, subjectId: 1, levelId: 3, videoUrl: '', summary: 'Découvrez les propriétés des nombres naturels et entiers.', hasVideo: true, hasNotes: true, hasDiscussion: true },
    { id: 2, title: 'Les nombres rationnels', duration: '15 min', order: 2, themeId: 1, subjectId: 1, levelId: 3, videoUrl: '', summary: 'Introduction aux fractions et nombres décimaux.', hasVideo: true, hasNotes: true, hasDiscussion: true },
    { id: 3, title: 'Opérations sur les nombres', duration: '18 min', order: 3, themeId: 1, subjectId: 1, levelId: 3, videoUrl: '', summary: 'Addition, soustraction, multiplication et division.', hasVideo: true, hasNotes: true, hasDiscussion: false },
    { id: 4, title: 'Puissances et racines', duration: '14 min', order: 4, themeId: 1, subjectId: 1, levelId: 3, videoUrl: '', summary: 'Les puissances, racines carrées et cubiques.', hasVideo: true, hasNotes: true, hasDiscussion: true },
    { id: 5, title: 'Exercices de révision - Nombres', duration: '20 min', order: 5, themeId: 1, subjectId: 1, levelId: 3, videoUrl: '', summary: 'Exercices pratiques sur les nombres.', hasVideo: false, hasNotes: true, hasDiscussion: true },

    // Theme 2: Algèbre et équations
    { id: 6, title: 'Introduction à l\'algèbre', duration: '10 min', order: 1, themeId: 2, subjectId: 1, levelId: 3, videoUrl: '', summary: 'Variables, expressions algébriques et simplification.', hasVideo: true, hasNotes: true, hasDiscussion: true },
    { id: 7, title: 'Équations du premier degré', duration: '16 min', order: 2, themeId: 2, subjectId: 1, levelId: 3, videoUrl: '', summary: 'Résolution d\'équations linéaires.', hasVideo: true, hasNotes: true, hasDiscussion: true },
    { id: 8, title: 'Inéquations', duration: '13 min', order: 3, themeId: 2, subjectId: 1, levelId: 3, videoUrl: '', summary: 'Résolution et représentation des inéquations.', hasVideo: true, hasNotes: true, hasDiscussion: false },
    { id: 9, title: 'Systèmes d\'équations', duration: '17 min', order: 4, themeId: 2, subjectId: 1, levelId: 3, videoUrl: '', summary: 'Méthodes de résolution de systèmes.', hasVideo: true, hasNotes: true, hasDiscussion: true },

    // Theme 3: Géométrie plane
    { id: 10, title: 'Points, droites et segments', duration: '11 min', order: 1, themeId: 3, subjectId: 1, levelId: 3, videoUrl: '', summary: 'Les éléments de base de la géométrie.', hasVideo: true, hasNotes: true, hasDiscussion: true },
    { id: 11, title: 'Angles et mesure', duration: '14 min', order: 2, themeId: 3, subjectId: 1, levelId: 3, videoUrl: '', summary: 'Types d\'angles et mesure en degrés.', hasVideo: true, hasNotes: true, hasDiscussion: true },
    { id: 12, title: 'Triangles', duration: '16 min', order: 3, themeId: 3, subjectId: 1, levelId: 3, videoUrl: '', summary: 'Classification et propriétés des triangles.', hasVideo: true, hasNotes: true, hasDiscussion: true },
    { id: 13, title: 'Quadrilatères', duration: '15 min', order: 4, themeId: 3, subjectId: 1, levelId: 3, videoUrl: '', summary: 'Carrés, rectangles, parallélogrammes et trapèzes.', hasVideo: true, hasNotes: true, hasDiscussion: false },
    { id: 14, title: 'Cercles et disques', duration: '12 min', order: 5, themeId: 3, subjectId: 1, levelId: 3, videoUrl: '', summary: 'Propriétés du cercle, périmètre et aire du disque.', hasVideo: true, hasNotes: true, hasDiscussion: true },
    { id: 15, title: 'Symétrie et transformations', duration: '18 min', order: 6, themeId: 3, subjectId: 1, levelId: 3, videoUrl: '', summary: 'Symétrie axiale, centrale et translations.', hasVideo: true, hasNotes: true, hasDiscussion: true },

    // Theme 5: Introduction à la physique (Subject 2, Level 3)
    { id: 24, title: 'La matière et ses états', duration: '14 min', order: 1, themeId: 5, subjectId: 2, levelId: 3, videoUrl: '', summary: 'Solide, liquide, gaz et changements d\'état.', hasVideo: true, hasNotes: true, hasDiscussion: true },
    { id: 25, title: 'Masse et volume', duration: '12 min', order: 2, themeId: 5, subjectId: 2, levelId: 3, videoUrl: '', summary: 'Comment mesurer la masse et le volume.', hasVideo: true, hasNotes: true, hasDiscussion: true },
    { id: 26, title: 'Mélanges et corps purs', duration: '16 min', order: 3, themeId: 5, subjectId: 2, levelId: 3, videoUrl: '', summary: 'Séparation des mélanges.', hasVideo: true, hasNotes: true, hasDiscussion: false },

    // Theme 8: Introduction à la biologie (Subject 3, Level 3)
    { id: 27, title: 'La cellule: végétale vs animale', duration: '18 min', order: 1, themeId: 8, subjectId: 3, levelId: 3, videoUrl: '', summary: 'Découverte de la cellule animale et végétale.', hasVideo: true, hasNotes: true, hasDiscussion: true },
    { id: 28, title: 'La nutrition végétale', duration: '15 min', order: 2, themeId: 8, subjectId: 3, levelId: 3, videoUrl: '', summary: 'Photosynthèse et besoins des plantes.', hasVideo: true, hasNotes: true, hasDiscussion: true },

    // Theme 8: Introduction à la biologie (SVT)
    { id: 16, title: 'La biologie — science du vivant', duration: '8 min', order: 1, themeId: 8, subjectId: 3, levelId: 3, videoUrl: '', summary: 'Introduction à l\'étude des organismes vivants.', hasVideo: true, hasNotes: true, hasDiscussion: true },
    { id: 17, title: 'Méthodes d\'étude en biologie', duration: '9 min', order: 2, themeId: 8, subjectId: 3, levelId: 3, videoUrl: '', summary: 'Observation, expérimentation et classification.', hasVideo: true, hasNotes: true, hasDiscussion: true },
    { id: 18, title: 'La cellule — unité du vivant', duration: '12 min', order: 3, themeId: 8, subjectId: 3, levelId: 3, videoUrl: '', summary: 'Structure et fonctions de la cellule.', hasVideo: true, hasNotes: true, hasDiscussion: true },
    { id: 19, title: 'Diversité du monde vivant', duration: '10 min', order: 4, themeId: 8, subjectId: 3, levelId: 3, videoUrl: '', summary: 'Classification des êtres vivants.', hasVideo: true, hasNotes: true, hasDiscussion: false },

    // Theme 11: Introduction à l'informatique
    { id: 20, title: 'Qu\'est-ce que l\'informatique ?', duration: '10 min', order: 1, themeId: 11, subjectId: 7, levelId: 3, videoUrl: '', summary: 'Définition, histoire et domaines de l\'informatique.', hasVideo: true, hasNotes: true, hasDiscussion: true },
    { id: 21, title: 'Le matériel informatique', duration: '12 min', order: 2, themeId: 11, subjectId: 7, levelId: 3, videoUrl: '', summary: 'Composants d\'un ordinateur et périphériques.', hasVideo: true, hasNotes: true, hasDiscussion: true },
    { id: 22, title: 'Les systèmes d\'exploitation', duration: '11 min', order: 3, themeId: 11, subjectId: 7, levelId: 3, videoUrl: '', summary: 'Windows, Linux, macOS — rôle et fonctionnement.', hasVideo: true, hasNotes: true, hasDiscussion: false },
    { id: 23, title: 'Internet et réseaux', duration: '14 min', order: 4, themeId: 11, subjectId: 7, levelId: 3, videoUrl: '', summary: 'Fonctionnement d\'Internet, protocoles et sécurité.', hasVideo: true, hasNotes: true, hasDiscussion: true },
];

export const MOCK_LESSON_CONTENTS: LessonContent[] = [
    {
        id: 1,
        lessonId: 1,
        htmlContent: `
      <h2>Les nombres naturels et entiers</h2>
      <p>Les <strong>nombres naturels</strong> sont les nombres que l'on utilise pour compter : 0, 1, 2, 3, 4, 5, ...</p>
      <p>L'ensemble des nombres naturels est noté <strong>ℕ</strong>.</p>

      <h3>Propriétés des nombres naturels</h3>
      <ul>
        <li>Le plus petit nombre naturel est <strong>0</strong>.</li>
        <li>Chaque nombre naturel a un successeur unique.</li>
        <li>L'ensemble ℕ est infini.</li>
      </ul>

      <h3>Les nombres entiers relatifs</h3>
      <p>Les <strong>nombres entiers relatifs</strong> comprennent les nombres positifs et négatifs : ..., -3, -2, -1, 0, 1, 2, 3, ...</p>
      <p>L'ensemble des nombres entiers relatifs est noté <strong>ℤ</strong>.</p>

      <h3>Représentation sur la droite numérique</h3>
      <p>On peut représenter les nombres entiers sur une droite graduée :</p>
      <ul>
        <li>Les nombres positifs sont à droite du zéro.</li>
        <li>Les nombres négatifs sont à gauche du zéro.</li>
      </ul>

      <h3>Valeur absolue</h3>
      <p>La <strong>valeur absolue</strong> d'un nombre entier est sa distance au zéro sur la droite numérique. Elle est toujours positive ou nulle.</p>
      <p>Exemple : |−5| = 5 et |3| = 3</p>
    `,
        createdAt: '2024-01-15',
        updatedAt: '2024-03-10',
    },
    {
        id: 2,
        lessonId: 16,
        htmlContent: `
      <h2>La biologie — science du vivant</h2>
      <p>La <strong>biologie</strong> (du grec <em>bios</em> = vie et <em>logos</em> = étude) est la science qui étudie les êtres vivants.</p>

      <h3>Qu'est-ce qu'un être vivant ?</h3>
      <p>Un être vivant est un organisme capable de :</p>
      <ul>
        <li><strong>Se nourrir</strong> — il prélève de la matière dans son environnement.</li>
        <li><strong>Grandir</strong> — il se développe au cours du temps.</li>
        <li><strong>Se reproduire</strong> — il donne naissance à d'autres êtres vivants.</li>
        <li><strong>Interagir</strong> — il réagit aux stimuli de son environnement.</li>
      </ul>

      <h3>Les grandes branches de la biologie</h3>
      <ul>
        <li><strong>Zoologie</strong> — étude des animaux</li>
        <li><strong>Botanique</strong> — étude des plantes</li>
        <li><strong>Microbiologie</strong> — étude des micro-organismes</li>
        <li><strong>Écologie</strong> — étude des relations entre les êtres vivants et leur milieu</li>
        <li><strong>Génétique</strong> — étude de l'hérédité</li>
      </ul>

      <h3>Importance de la biologie</h3>
      <p>La biologie nous aide à comprendre le monde vivant, à protéger l'environnement, et à développer des traitements médicaux. C'est une science fondamentale pour l'avenir de l'humanité.</p>
    `,
        createdAt: '2024-01-20',
        updatedAt: '2024-03-15',
    },
    {
        id: 3,
        lessonId: 20,
        htmlContent: `
      <h2>Qu'est-ce que l'informatique ?</h2>
      <p>L'<strong>informatique</strong> est la science du traitement automatique de l'information. Le mot vient de la contraction de « information » et « automatique ».</p>

      <h3>Histoire de l'informatique</h3>
      <ul>
        <li><strong>1642</strong> — Blaise Pascal invente la Pascaline (calculatrice mécanique).</li>
        <li><strong>1936</strong> — Alan Turing formalise le concept de machine universelle.</li>
        <li><strong>1945</strong> — ENIAC, le premier ordinateur électronique.</li>
        <li><strong>1971</strong> — Intel lance le premier microprocesseur.</li>
        <li><strong>1991</strong> — Tim Berners-Lee invente le World Wide Web.</li>
      </ul>

      <h3>Les domaines de l'informatique</h3>
      <ul>
        <li><strong>Développement logiciel</strong> — Création d'applications et de sites web.</li>
        <li><strong>Intelligence artificielle</strong> — Machines capables d'apprendre et de raisonner.</li>
        <li><strong>Cybersécurité</strong> — Protection des systèmes et des données.</li>
        <li><strong>Science des données</strong> — Analyse de grandes quantités de données.</li>
        <li><strong>Robotique</strong> — Conception et programmation de robots.</li>
      </ul>
    `,
        createdAt: '2024-02-01',
        updatedAt: '2024-03-20',
    },
    {
        id: 4,
        lessonId: 24,
        htmlContent: `
            <h2>La matière et ses états</h2>
            <p>La matière se présente principalement sous trois états physiques dans notre environnement.</p>
            
            <h3>1. L'état solide</h3>
            <p>Un solide a une forme propre et un volume propre. Les particules sont très rapprochées et liées entre elles.</p>
            <ul>
                <li><strong>Exemples :</strong> un glaçon, un caillou, du sel.</li>
            </ul>

            <h3>2. L'état liquide</h3>
            <p>Un liquide n'a pas de forme propre mais a un volume propre. La surface libre d'un liquide au repos est toujours plane.</p>
            <ul>
                <li><strong>Exemples :</strong> l'eau de pluie, l'huile, le lait.</li>
            </ul>

            <h3>3. L'état gazeux</h3>
            <p>Un gaz n'a ni forme propre ni volume propre. Il est compressible et expansible.</p>
            <ul>
                <li><strong>Exemples :</strong> la vapeur d'eau, l'air, le dioxygène.</li>
            </ul>
        `,
        createdAt: '2024-01-20',
        updatedAt: '2024-03-15',
    },
    {
        id: 5,
        lessonId: 27,
        htmlContent: `
            <h2>La cellule: unité du vivant</h2>
            <p>Tous les êtres vivants sont constitués d'une ou plusieurs cellules. La cellule est l'unité de base de la vie.</p>
            
            <h3>L'organisation d'une cellule</h3>
            <p>Qu'elle soit animale ou végétale, une cellule possède trois éléments fondamentaux :</p>
            <ul>
                <li><strong>La membrane plasmique :</strong> elle délimite la cellule.</li>
                <li><strong>Le cytoplasme :</strong> substance gélatineuse où se déroulent les réactions chimiques.</li>
                <li><strong>Le noyau :</strong> il contient l'information génétique (ADN).</li>
            </ul>
        `,
        createdAt: '2024-01-20',
        updatedAt: '2024-03-15',
    }
];
