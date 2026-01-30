/**
 * Longdesc Test Suite - Main Application
 * Navigation, filtering, and test viewer functionality
 */

(function() {
  'use strict';

  // ==========================================================================
  // Configuration
  // ==========================================================================
  const CONFIG = {
    testsBasePath: 'tests/',
    allTestsPath: 'all-tests.html',
    defaultLang: 'fr'
  };

  // ==========================================================================
  // State Management
  // ==========================================================================
  const state = {
    tests: [],
    criteria: [],
    filters: {
      type: [],
      status: ['pass', 'fail'],
      tags: []
    },
    currentTest: null,
    lang: CONFIG.defaultLang
  };

  // ==========================================================================
  // Test Data Registry - Complete RGAA 3.2016 Tests
  // ==========================================================================
  const testsRegistry = {
    'rgaa-1': {
      id: 'rgaa-1',
      title: { fr: 'Images', en: 'Images' },
      criteria: [
        {
          id: '1.1',
          title: { fr: 'Chaque image a-t-elle une alternative textuelle ?', en: 'Does each image have a text alternative?' },
          tests: [
            { id: '1.1.1', title: { fr: 'Chaque image (balise img) a-t-elle un attribut alt ?', en: 'Does each image (img tag) have an alt attribute?' }, tags: ['img', 'alt'] },
            { id: '1.1.2', title: { fr: 'Chaque zone (balise area) d\'une image réactive a-t-elle un attribut alt ?', en: 'Does each area (area tag) of an image map have an alt attribute?' }, tags: ['area', 'map', 'alt'] },
            { id: '1.1.3', title: { fr: 'Chaque bouton de formulaire a-t-il un attribut alt ?', en: 'Does each form button have an alt attribute?' }, tags: ['input', 'image', 'form'] },
            { id: '1.1.4', title: { fr: 'Chaque zone cliquable d\'une image réactive côté serveur a-t-elle un lien équivalent ?', en: 'Does each clickable area of a server-side image map have an equivalent link?' }, tags: ['area', 'map', 'ismap'] }
          ]
        },
        {
          id: '1.2',
          title: { fr: 'Pour chaque image de décoration, cette alternative est-elle vide ?', en: 'For each decorative image, is this alternative empty?' },
          tests: [
            { id: '1.2.1', title: { fr: 'Image de décoration (balise img) sans légende', en: 'Decorative image (img tag) without caption' }, tags: ['img', 'decorative', 'alt'] },
            { id: '1.2.2', title: { fr: 'Zone non cliquable (balise area) de décoration', en: 'Non-clickable decorative area (area tag)' }, tags: ['area', 'decorative'] },
            { id: '1.2.3', title: { fr: 'Image objet de décoration (balise object)', en: 'Decorative object image (object tag)' }, tags: ['object', 'decorative'] },
            { id: '1.2.4', title: { fr: 'Image vectorielle de décoration (balise svg)', en: 'Decorative vector image (svg tag)' }, tags: ['svg', 'decorative'] },
            { id: '1.2.5', title: { fr: 'Image bitmap de décoration (balise canvas)', en: 'Decorative bitmap image (canvas tag)' }, tags: ['canvas', 'decorative'] },
            { id: '1.2.6', title: { fr: 'Image embarquée de décoration (balise embed)', en: 'Decorative embedded image (embed tag)' }, tags: ['embed', 'decorative'] }
          ]
        },
        {
          id: '1.3',
          title: { fr: 'Pour chaque image porteuse d\'information, l\'alternative est-elle pertinente ?', en: 'For each informative image, is the alternative relevant?' },
          tests: [
            { id: '1.3.1', title: { fr: 'Image (balise img) porteuse d\'information', en: 'Informative image (img tag)' }, tags: ['img', 'informative', 'alt'] },
            { id: '1.3.2', title: { fr: 'Zone cliquable (balise area) porteuse d\'information', en: 'Informative clickable area (area tag)' }, tags: ['area', 'informative'] },
            { id: '1.3.3', title: { fr: 'Bouton de formulaire (input type=image) porteur d\'information', en: 'Informative form button (input type=image)' }, tags: ['input', 'image', 'form'] },
            { id: '1.3.4', title: { fr: 'Image objet (balise object) porteuse d\'information', en: 'Informative object image (object tag)' }, tags: ['object', 'informative'] },
            { id: '1.3.5', title: { fr: 'Image vectorielle (balise svg) porteuse d\'information', en: 'Informative vector image (svg tag)' }, tags: ['svg', 'informative'] },
            { id: '1.3.6', title: { fr: 'Image bitmap (balise canvas) porteuse d\'information', en: 'Informative bitmap image (canvas tag)' }, tags: ['canvas', 'informative'] },
            { id: '1.3.7', title: { fr: 'Image embarquée (balise embed) porteuse d\'information', en: 'Informative embedded image (embed tag)' }, tags: ['embed', 'informative'] },
            { id: '1.3.8', title: { fr: 'Image texte (balise img) porteuse d\'information', en: 'Text image (img tag) with information' }, tags: ['img', 'text-image'] },
            { id: '1.3.9', title: { fr: 'Image texte objet (balise object)', en: 'Text object image (object tag)' }, tags: ['object', 'text-image'] },
            { id: '1.3.10', title: { fr: 'Image texte embarquée (balise embed)', en: 'Embedded text image (embed tag)' }, tags: ['embed', 'text-image'] },
            { id: '1.3.11', title: { fr: 'Image texte vectorielle (balise svg)', en: 'Vector text image (svg tag)' }, tags: ['svg', 'text-image'] },
            { id: '1.3.12', title: { fr: 'Image texte bitmap (balise canvas)', en: 'Bitmap text image (canvas tag)' }, tags: ['canvas', 'text-image'] },
            { id: '1.3.13', title: { fr: 'Image légendée porteuse d\'information', en: 'Captioned informative image' }, tags: ['img', 'figure', 'figcaption'] }
          ]
        }
      ]
    },
    'rgaa-2': {
      id: 'rgaa-2',
      title: { fr: 'Cadres', en: 'Frames' },
      criteria: [
        {
          id: '2.1',
          title: { fr: 'Chaque cadre a-t-il un titre de cadre ?', en: 'Does each frame have a frame title?' },
          tests: [
            { id: '2.1.1', title: { fr: 'Chaque cadre (balise iframe) a-t-il un attribut title ?', en: 'Does each frame (iframe tag) have a title attribute?' }, tags: ['iframe', 'title'] }
          ]
        },
        {
          id: '2.2',
          title: { fr: 'Pour chaque cadre ayant un titre, ce titre est-il pertinent ?', en: 'For each frame with a title, is this title relevant?' },
          tests: [
            { id: '2.2.1', title: { fr: 'Le titre de chaque cadre (balise iframe) est-il pertinent ?', en: 'Is the title of each frame (iframe tag) relevant?' }, tags: ['iframe', 'title'] }
          ]
        }
      ]
    },
    'rgaa-4': {
      id: 'rgaa-4',
      title: { fr: 'Multimédia', en: 'Multimedia' },
      criteria: [
        {
          id: '4.1',
          title: { fr: 'Chaque média temporel pré-enregistré a-t-il une transcription textuelle ?', en: 'Does each pre-recorded time-based media have a text transcript?' },
          tests: [
            { id: '4.1.1', title: { fr: 'Média temporel audio pré-enregistré', en: 'Pre-recorded audio time-based media' }, tags: ['audio', 'transcript'] },
            { id: '4.1.2', title: { fr: 'Média temporel vidéo pré-enregistré', en: 'Pre-recorded video time-based media' }, tags: ['video', 'transcript'] },
            { id: '4.1.3', title: { fr: 'Média temporel synchronisé pré-enregistré', en: 'Pre-recorded synchronized time-based media' }, tags: ['video', 'audio', 'transcript'] }
          ]
        },
        {
          id: '4.2',
          title: { fr: 'Pour chaque média temporel pré-enregistré, la transcription est-elle pertinente ?', en: 'For each pre-recorded time-based media, is the transcript relevant?' },
          tests: [
            { id: '4.2.1', title: { fr: 'Transcription textuelle audio pertinente', en: 'Relevant audio text transcript' }, tags: ['audio', 'transcript'] },
            { id: '4.2.2', title: { fr: 'Transcription textuelle vidéo pertinente', en: 'Relevant video text transcript' }, tags: ['video', 'transcript'] },
            { id: '4.2.3', title: { fr: 'Transcription textuelle synchronisée pertinente', en: 'Relevant synchronized text transcript' }, tags: ['video', 'audio', 'transcript'] }
          ]
        },
        {
          id: '4.3',
          title: { fr: 'Chaque média temporel synchronisé a-t-il des sous-titres synchronisés ?', en: 'Does each synchronized time-based media have synchronized captions?' },
          tests: [
            { id: '4.3.1', title: { fr: 'Sous-titres synchronisés pour média vidéo', en: 'Synchronized captions for video media' }, tags: ['video', 'captions', 'track'] },
            { id: '4.3.2', title: { fr: 'Sous-titres synchronisés pertinents', en: 'Relevant synchronized captions' }, tags: ['video', 'captions'] }
          ]
        },
        {
          id: '4.4',
          title: { fr: 'Pour chaque média temporel synchronisé, les sous-titres sont-ils pertinents ?', en: 'For each synchronized time-based media, are the captions relevant?' },
          tests: [
            { id: '4.4.1', title: { fr: 'Sous-titres synchronisés pertinents', en: 'Relevant synchronized captions' }, tags: ['video', 'captions'] }
          ]
        }
      ]
    },
    'rgaa-5': {
      id: 'rgaa-5',
      title: { fr: 'Tableaux', en: 'Tables' },
      criteria: [
        {
          id: '5.1',
          title: { fr: 'Chaque tableau de données complexe a-t-il un résumé ?', en: 'Does each complex data table have a summary?' },
          tests: [
            { id: '5.1.1', title: { fr: 'Tableau de données complexe avec résumé', en: 'Complex data table with summary' }, tags: ['table', 'summary', 'caption'] }
          ]
        }
      ]
    },
    'rgaa-7': {
      id: 'rgaa-7',
      title: { fr: 'Scripts', en: 'Scripts' },
      criteria: [
        {
          id: '7.3',
          title: { fr: 'Chaque script est-il contrôlable par le clavier et la souris ?', en: 'Is each script controllable by keyboard and mouse?' },
          tests: [
            { id: '7.3.1', title: { fr: 'Script contrôlable par clavier et souris', en: 'Script controllable by keyboard and mouse' }, tags: ['script', 'keyboard', 'mouse'] }
          ]
        }
      ]
    },
    'rgaa-8': {
      id: 'rgaa-8',
      title: { fr: 'Éléments obligatoires', en: 'Mandatory elements' },
      criteria: [
        {
          id: '8.2',
          title: { fr: 'Pour chaque page web, le code source est-il valide ?', en: 'For each web page, is the source code valid?' },
          tests: [
            { id: '8.2.1', title: { fr: 'Code source valide selon le type de document', en: 'Source code valid according to document type' }, tags: ['html', 'doctype', 'validation'] },
            { id: '8.2.2', title: { fr: 'Balises utilisées conformément aux spécifications', en: 'Tags used according to specifications' }, tags: ['html', 'semantic'] }
          ]
        },
        {
          id: '8.8',
          title: { fr: 'Dans chaque page web, le code de langue est-il valide ?', en: 'In each web page, is the language code valid?' },
          tests: [
            { id: '8.8.1', title: { fr: 'Code de langue valide', en: 'Valid language code' }, tags: ['html', 'lang'] }
          ]
        },
        {
          id: '8.10',
          title: { fr: 'Dans chaque page web, les changements de langue sont-ils signalés ?', en: 'In each web page, are language changes indicated?' },
          tests: [
            { id: '8.10.1', title: { fr: 'Changement de langue dans le texte', en: 'Language change in text' }, tags: ['lang', 'text'] },
            { id: '8.10.2', title: { fr: 'Changement de langue dans les attributs', en: 'Language change in attributes' }, tags: ['lang', 'attribute'] }
          ]
        }
      ]
    },
    'rgaa-9': {
      id: 'rgaa-9',
      title: { fr: 'Structuration de l\'information', en: 'Information structure' },
      criteria: [
        {
          id: '9.1',
          title: { fr: 'Dans chaque page web, l\'information est-elle structurée par des titres ?', en: 'In each web page, is information structured by headings?' },
          tests: [
            { id: '9.1.3', title: { fr: 'Hiérarchie des titres pertinente', en: 'Relevant heading hierarchy' }, tags: ['heading', 'h1', 'h2', 'h3'] }
          ]
        },
        {
          id: '9.3',
          title: { fr: 'Dans chaque page web, chaque liste est-elle correctement structurée ?', en: 'In each web page, is each list correctly structured?' },
          tests: [
            { id: '9.3.1', title: { fr: 'Liste non ordonnée (ul, li)', en: 'Unordered list (ul, li)' }, tags: ['list', 'ul', 'li'] },
            { id: '9.3.2', title: { fr: 'Liste ordonnée (ol, li)', en: 'Ordered list (ol, li)' }, tags: ['list', 'ol', 'li'] },
            { id: '9.3.3', title: { fr: 'Liste de définition (dl, dt, dd)', en: 'Definition list (dl, dt, dd)' }, tags: ['list', 'dl', 'dt', 'dd'] }
          ]
        }
      ]
    },
    'rgaa-10': {
      id: 'rgaa-10',
      title: { fr: 'Présentation de l\'information', en: 'Information presentation' },
      criteria: [
        {
          id: '10.1',
          title: { fr: 'Dans le site web, des feuilles de styles sont-elles utilisées ?', en: 'On the website, are style sheets used?' },
          tests: [
            { id: '10.1.1', title: { fr: 'Feuilles de styles pour la présentation', en: 'Style sheets for presentation' }, tags: ['css', 'style'] }
          ]
        },
        {
          id: '10.3',
          title: { fr: 'Dans chaque page web, l\'information reste-t-elle compréhensible sans CSS ?', en: 'In each web page, is information understandable without CSS?' },
          tests: [
            { id: '10.3.1', title: { fr: 'Information compréhensible sans CSS', en: 'Information understandable without CSS' }, tags: ['css', 'content'] }
          ]
        },
        {
          id: '10.4',
          title: { fr: 'Dans chaque page web, le texte reste-t-il lisible avec un agrandissement de 200% ?', en: 'In each web page, does text remain readable with 200% zoom?' },
          tests: [
            { id: '10.4.1', title: { fr: 'Texte lisible avec zoom 200%', en: 'Text readable with 200% zoom' }, tags: ['zoom', 'text', 'responsive'] },
            { id: '10.4.2', title: { fr: 'Pas de perte d\'information avec zoom 200%', en: 'No information loss with 200% zoom' }, tags: ['zoom', 'responsive'] }
          ]
        },
        {
          id: '10.5',
          title: { fr: 'Dans chaque page web, les déclarations CSS de couleurs sont-elles correctement utilisées ?', en: 'In each web page, are CSS color declarations correctly used?' },
          tests: [
            { id: '10.5.1', title: { fr: 'Couleur de texte avec couleur de fond', en: 'Text color with background color' }, tags: ['css', 'color', 'background'] },
            { id: '10.5.2', title: { fr: 'Couleur de fond avec couleur de texte', en: 'Background color with text color' }, tags: ['css', 'color', 'background'] },
            { id: '10.5.3', title: { fr: 'Couleurs de lien avec couleurs de fond', en: 'Link colors with background colors' }, tags: ['css', 'color', 'link'] }
          ]
        },
        {
          id: '10.7',
          title: { fr: 'Dans chaque page web, la prise de focus est-elle visible ?', en: 'In each web page, is focus visible?' },
          tests: [
            { id: '10.7.1', title: { fr: 'Prise de focus visible', en: 'Visible focus' }, tags: ['focus', 'css', 'outline'] }
          ]
        },
        {
          id: '10.9',
          title: { fr: 'Dans chaque page web, l\'information ne doit pas être donnée uniquement par la forme ou la position', en: 'In each web page, information must not be given only by shape or position' },
          tests: [
            { id: '10.9.1', title: { fr: 'Information pas uniquement par forme ou position', en: 'Information not only by shape or position' }, tags: ['visual', 'semantic'] }
          ]
        },
        {
          id: '10.10',
          title: { fr: 'Dans chaque page web, l\'information ne doit pas être donnée uniquement par la couleur', en: 'In each web page, information must not be given only by color' },
          tests: [
            { id: '10.10.1', title: { fr: 'Information pas uniquement par couleur', en: 'Information not only by color' }, tags: ['color', 'semantic'] }
          ]
        },
        {
          id: '10.12',
          title: { fr: 'Dans chaque page web, les espaces entre les lignes et les paragraphes sont-ils suffisants ?', en: 'In each web page, is spacing between lines and paragraphs sufficient?' },
          tests: [
            { id: '10.12.1', title: { fr: 'Espacement des lignes suffisant', en: 'Sufficient line spacing' }, tags: ['css', 'line-height'] },
            { id: '10.12.2', title: { fr: 'Espacement des paragraphes suffisant', en: 'Sufficient paragraph spacing' }, tags: ['css', 'margin'] }
          ]
        },
        {
          id: '10.13',
          title: { fr: 'Dans chaque page web, les textes cachés sont-ils correctement restitués ?', en: 'In each web page, are hidden texts correctly rendered?' },
          tests: [
            { id: '10.13.1', title: { fr: 'Textes cachés correctement restitués', en: 'Hidden texts correctly rendered' }, tags: ['css', 'hidden', 'sr-only'] }
          ]
        },
        {
          id: '10.14',
          title: { fr: 'Dans chaque page web, l\'information ne doit pas être donnée par la forme ou la taille uniquement', en: 'In each web page, information must not be given by shape or size only' },
          tests: [
            { id: '10.14.1', title: { fr: 'Information pas uniquement par forme', en: 'Information not only by shape' }, tags: ['visual', 'semantic'] },
            { id: '10.14.2', title: { fr: 'Information pas uniquement par taille', en: 'Information not only by size' }, tags: ['visual', 'semantic'] }
          ]
        }
      ]
    },
    'rgaa-11': {
      id: 'rgaa-11',
      title: { fr: 'Formulaires', en: 'Forms' },
      criteria: [
        {
          id: '11.1',
          title: { fr: 'Chaque champ de formulaire a-t-il une étiquette ?', en: 'Does each form field have a label?' },
          tests: [
            { id: '11.1.1', title: { fr: 'Champ avec étiquette (label for)', en: 'Field with label (label for)' }, tags: ['form', 'label', 'input'] },
            { id: '11.1.2', title: { fr: 'Champ avec attribut title', en: 'Field with title attribute' }, tags: ['form', 'title', 'input'] },
            { id: '11.1.3', title: { fr: 'Champ avec aria-label', en: 'Field with aria-label' }, tags: ['form', 'aria-label', 'input'] },
            { id: '11.1.4', title: { fr: 'Champ avec aria-labelledby', en: 'Field with aria-labelledby' }, tags: ['form', 'aria-labelledby', 'input'] },
            { id: '11.1.5', title: { fr: 'Bouton de formulaire avec contenu visible', en: 'Form button with visible content' }, tags: ['form', 'button'] }
          ]
        },
        {
          id: '11.2',
          title: { fr: 'Chaque étiquette associée à un champ de formulaire est-elle pertinente ?', en: 'Is each label associated with a form field relevant?' },
          tests: [
            { id: '11.2.1', title: { fr: 'Étiquette pertinente (label)', en: 'Relevant label (label)' }, tags: ['form', 'label'] },
            { id: '11.2.2', title: { fr: 'Étiquette pertinente (title)', en: 'Relevant label (title)' }, tags: ['form', 'title'] },
            { id: '11.2.3', title: { fr: 'Étiquette pertinente (aria-label)', en: 'Relevant label (aria-label)' }, tags: ['form', 'aria-label'] },
            { id: '11.2.4', title: { fr: 'Étiquette pertinente (aria-labelledby)', en: 'Relevant label (aria-labelledby)' }, tags: ['form', 'aria-labelledby'] }
          ]
        },
        {
          id: '11.3',
          title: { fr: 'Dans chaque formulaire, chaque étiquette est-elle visuellement accolée au champ ?', en: 'In each form, is each label visually adjacent to the field?' },
          tests: [
            { id: '11.3.1', title: { fr: 'Étiquette visuellement accolée', en: 'Label visually adjacent' }, tags: ['form', 'label', 'visual'] },
            { id: '11.3.2', title: { fr: 'Étiquette positionnée correctement', en: 'Label correctly positioned' }, tags: ['form', 'label', 'position'] }
          ]
        },
        {
          id: '11.4',
          title: { fr: 'Dans chaque formulaire, chaque étiquette et son champ sont-ils accolés ?', en: 'In each form, are each label and its field adjacent?' },
          tests: [
            { id: '11.4.1', title: { fr: 'Étiquette et champ accolés dans le code', en: 'Label and field adjacent in code' }, tags: ['form', 'label', 'dom'] }
          ]
        },
        {
          id: '11.5',
          title: { fr: 'Dans chaque formulaire, les informations de même nature sont-elles regroupées ?', en: 'In each form, is related information grouped together?' },
          tests: [
            { id: '11.5.1', title: { fr: 'Regroupement avec fieldset et legend', en: 'Grouping with fieldset and legend' }, tags: ['form', 'fieldset', 'legend'] }
          ]
        },
        {
          id: '11.6',
          title: { fr: 'Dans chaque formulaire, chaque regroupement de champs a-t-il une légende ?', en: 'In each form, does each field group have a legend?' },
          tests: [
            { id: '11.6.1', title: { fr: 'Fieldset avec legend pertinente', en: 'Fieldset with relevant legend' }, tags: ['form', 'fieldset', 'legend'] }
          ]
        },
        {
          id: '11.7',
          title: { fr: 'Dans chaque formulaire, chaque légende est-elle pertinente ?', en: 'In each form, is each legend relevant?' },
          tests: [
            { id: '11.7.1', title: { fr: 'Legend pertinente', en: 'Relevant legend' }, tags: ['form', 'legend'] }
          ]
        },
        {
          id: '11.8',
          title: { fr: 'Dans chaque formulaire, les items de même nature d\'une liste de choix sont-ils regroupés ?', en: 'In each form, are items of the same nature in a choice list grouped?' },
          tests: [
            { id: '11.8.1', title: { fr: 'Optgroup pour regrouper les options', en: 'Optgroup to group options' }, tags: ['form', 'select', 'optgroup'] },
            { id: '11.8.2', title: { fr: 'Optgroup avec label pertinent', en: 'Optgroup with relevant label' }, tags: ['form', 'optgroup', 'label'] },
            { id: '11.8.3', title: { fr: 'Options regroupées de manière pertinente', en: 'Options relevantly grouped' }, tags: ['form', 'optgroup'] }
          ]
        },
        {
          id: '11.9',
          title: { fr: 'Dans chaque formulaire, l\'intitulé de chaque bouton est-il pertinent ?', en: 'In each form, is each button label relevant?' },
          tests: [
            { id: '11.9.1', title: { fr: 'Intitulé de bouton pertinent', en: 'Relevant button label' }, tags: ['form', 'button', 'submit'] },
            { id: '11.9.2', title: { fr: 'Intitulé de bouton image pertinent', en: 'Relevant image button label' }, tags: ['form', 'button', 'image'] }
          ]
        },
        {
          id: '11.10',
          title: { fr: 'Dans chaque formulaire, le contrôle de saisie est-il utilisé de manière pertinente ?', en: 'In each form, is input control used relevantly?' },
          tests: [
            { id: '11.10.1', title: { fr: 'Indication des champs obligatoires', en: 'Required field indication' }, tags: ['form', 'required', 'aria-required'] },
            { id: '11.10.2', title: { fr: 'Indication du type de données attendu', en: 'Expected data type indication' }, tags: ['form', 'pattern', 'type'] },
            { id: '11.10.3', title: { fr: 'Indication du format de saisie', en: 'Input format indication' }, tags: ['form', 'pattern', 'placeholder'] },
            { id: '11.10.4', title: { fr: 'Exemple de saisie fourni', en: 'Input example provided' }, tags: ['form', 'example', 'placeholder'] },
            { id: '11.10.5', title: { fr: 'Contrôle de saisie en temps réel', en: 'Real-time input validation' }, tags: ['form', 'validation'] },
            { id: '11.10.6', title: { fr: 'Message d\'erreur pertinent', en: 'Relevant error message' }, tags: ['form', 'error', 'validation'] },
            { id: '11.10.7', title: { fr: 'Message d\'erreur lié au champ', en: 'Error message linked to field' }, tags: ['form', 'error', 'aria-describedby'] },
            { id: '11.10.8', title: { fr: 'Suggestion de correction fournie', en: 'Correction suggestion provided' }, tags: ['form', 'error', 'suggestion'] },
            { id: '11.10.9', title: { fr: 'Contrôle financier avec confirmation', en: 'Financial control with confirmation' }, tags: ['form', 'financial', 'confirm'] },
            { id: '11.10.10', title: { fr: 'Données juridiques modifiables', en: 'Legal data modifiable' }, tags: ['form', 'legal', 'edit'] }
          ]
        },
        {
          id: '11.11',
          title: { fr: 'Dans chaque formulaire, le contrôle de saisie est-il accompagné de suggestions ?', en: 'In each form, is input control accompanied by suggestions?' },
          tests: [
            { id: '11.11.1', title: { fr: 'Suggestions de saisie fournies', en: 'Input suggestions provided' }, tags: ['form', 'suggestion', 'autocomplete'] },
            { id: '11.11.2', title: { fr: 'Suggestions de correction pertinentes', en: 'Relevant correction suggestions' }, tags: ['form', 'suggestion', 'error'] }
          ]
        },
        {
          id: '11.14',
          title: { fr: 'Dans chaque formulaire, les informations transmises sont-elles accessibles ?', en: 'In each form, is the transmitted information accessible?' },
          tests: [
            { id: '11.14.1', title: { fr: 'Informations transmises accessibles', en: 'Transmitted information accessible' }, tags: ['form', 'accessible'] },
            { id: '11.14.2', title: { fr: 'Données collectées modifiables', en: 'Collected data modifiable' }, tags: ['form', 'edit', 'review'] }
          ]
        }
      ]
    },
    'rgaa-12': {
      id: 'rgaa-12',
      title: { fr: 'Navigation', en: 'Navigation' },
      criteria: [
        {
          id: '12.1',
          title: { fr: 'Chaque ensemble de pages dispose-t-il de deux systèmes de navigation ?', en: 'Does each set of pages have two navigation systems?' },
          tests: [
            { id: '12.1.1', title: { fr: 'Deux systèmes de navigation différents', en: 'Two different navigation systems' }, tags: ['nav', 'sitemap', 'search'] }
          ]
        },
        {
          id: '12.2',
          title: { fr: 'Dans chaque ensemble de pages, le menu est-il à la même place ?', en: 'In each set of pages, is the menu in the same place?' },
          tests: [
            { id: '12.2.1', title: { fr: 'Menu de navigation à la même place', en: 'Navigation menu in the same place' }, tags: ['nav', 'consistency'] },
            { id: '12.2.2', title: { fr: 'Menu de navigation dans le même ordre', en: 'Navigation menu in the same order' }, tags: ['nav', 'consistency', 'order'] }
          ]
        },
        {
          id: '12.3',
          title: { fr: 'La page plan du site est-elle pertinente ?', en: 'Is the site map page relevant?' },
          tests: [
            { id: '12.3.1', title: { fr: 'Plan du site représentatif', en: 'Representative site map' }, tags: ['sitemap', 'link'] },
            { id: '12.3.2', title: { fr: 'Plan du site à jour', en: 'Up-to-date site map' }, tags: ['sitemap'] }
          ]
        },
        {
          id: '12.4',
          title: { fr: 'Dans chaque ensemble de pages, la page plan du site est-elle accessible ?', en: 'In each set of pages, is the site map accessible?' },
          tests: [
            { id: '12.4.1', title: { fr: 'Lien vers plan du site accessible', en: 'Link to site map accessible' }, tags: ['sitemap', 'link'] },
            { id: '12.4.2', title: { fr: 'Plan du site accessible depuis accueil', en: 'Site map accessible from home' }, tags: ['sitemap', 'home'] },
            { id: '12.4.3', title: { fr: 'Plan du site toujours à la même place', en: 'Site map always in the same place' }, tags: ['sitemap', 'consistency'] }
          ]
        },
        {
          id: '12.5',
          title: { fr: 'Dans chaque ensemble de pages, le moteur de recherche est-il accessible ?', en: 'In each set of pages, is the search engine accessible?' },
          tests: [
            { id: '12.5.1', title: { fr: 'Moteur de recherche accessible', en: 'Search engine accessible' }, tags: ['search', 'form'] },
            { id: '12.5.2', title: { fr: 'Moteur de recherche depuis accueil', en: 'Search engine from home' }, tags: ['search', 'home'] },
            { id: '12.5.3', title: { fr: 'Moteur de recherche à la même place', en: 'Search engine in the same place' }, tags: ['search', 'consistency'] }
          ]
        },
        {
          id: '12.6',
          title: { fr: 'Les zones de regroupement de contenus sont-elles identifiées ?', en: 'Are content grouping areas identified?' },
          tests: [
            { id: '12.6.1', title: { fr: 'Zone header identifiée', en: 'Header zone identified' }, tags: ['landmark', 'header', 'banner'] },
            { id: '12.6.2', title: { fr: 'Zone nav identifiée', en: 'Nav zone identified' }, tags: ['landmark', 'nav', 'navigation'] },
            { id: '12.6.3', title: { fr: 'Zone main identifiée', en: 'Main zone identified' }, tags: ['landmark', 'main'] }
          ]
        },
        {
          id: '12.7',
          title: { fr: 'Dans chaque page web, un lien d\'évitement est-il présent ?', en: 'In each web page, is a skip link present?' },
          tests: [
            { id: '12.7.1', title: { fr: 'Lien d\'évitement ou accès rapide', en: 'Skip link or quick access' }, tags: ['skip-link', 'navigation'] }
          ]
        },
        {
          id: '12.8',
          title: { fr: 'Dans chaque page web, l\'ordre de tabulation est-il cohérent ?', en: 'In each web page, is the tab order consistent?' },
          tests: [
            { id: '12.8.1', title: { fr: 'Ordre de tabulation cohérent', en: 'Consistent tab order' }, tags: ['tabindex', 'focus', 'order'] }
          ]
        },
        {
          id: '12.9',
          title: { fr: 'Dans chaque page web, la navigation ne doit pas contenir de piège au clavier', en: 'In each web page, navigation must not contain keyboard traps' },
          tests: [
            { id: '12.9.1', title: { fr: 'Pas de piège au clavier', en: 'No keyboard trap' }, tags: ['keyboard', 'trap', 'focus'] }
          ]
        },
        {
          id: '12.10',
          title: { fr: 'Dans chaque page web, les raccourcis clavier sont-ils contrôlables ?', en: 'In each web page, are keyboard shortcuts controllable?' },
          tests: [
            { id: '12.10.1', title: { fr: 'Raccourcis clavier désactivables', en: 'Keyboard shortcuts can be disabled' }, tags: ['keyboard', 'shortcut', 'accesskey'] },
            { id: '12.10.2', title: { fr: 'Raccourcis clavier modifiables', en: 'Keyboard shortcuts can be modified' }, tags: ['keyboard', 'shortcut'] },
            { id: '12.10.3', title: { fr: 'Raccourcis clavier avec modificateur', en: 'Keyboard shortcuts with modifier' }, tags: ['keyboard', 'shortcut', 'modifier'] },
            { id: '12.10.4', title: { fr: 'Raccourcis clavier actifs uniquement au focus', en: 'Keyboard shortcuts active only on focus' }, tags: ['keyboard', 'shortcut', 'focus'] }
          ]
        },
        {
          id: '12.11',
          title: { fr: 'Dans chaque page web, les contenus additionnels sont-ils contrôlables ?', en: 'In each web page, is additional content controllable?' },
          tests: [
            { id: '12.11.1', title: { fr: 'Contenu additionnel au survol contrôlable', en: 'Additional content on hover controllable' }, tags: ['hover', 'tooltip', 'control'] },
            { id: '12.11.2', title: { fr: 'Contenu additionnel au focus contrôlable', en: 'Additional content on focus controllable' }, tags: ['focus', 'tooltip', 'control'] },
            { id: '12.11.3', title: { fr: 'Contenu additionnel masquable', en: 'Additional content dismissable' }, tags: ['tooltip', 'dismiss', 'escape'] },
            { id: '12.11.4', title: { fr: 'Contenu additionnel stable', en: 'Additional content stable' }, tags: ['tooltip', 'hover', 'stable'] }
          ]
        },
        {
          id: '12.12',
          title: { fr: 'Dans chaque page web, la consultation d\'un document téléchargeable est-elle possible ?', en: 'In each web page, is downloading document consultation possible?' },
          tests: [
            { id: '12.12.1', title: { fr: 'Document téléchargeable accessible', en: 'Downloadable document accessible' }, tags: ['download', 'pdf', 'document'] }
          ]
        },
        {
          id: '12.13',
          title: { fr: 'Dans chaque page web, l\'ordre relatif dans le code source est-il pertinent ?', en: 'In each web page, is the relative order in source code relevant?' },
          tests: [
            { id: '12.13.1', title: { fr: 'Ordre relatif dans le code pertinent', en: 'Relative order in code relevant' }, tags: ['dom', 'order', 'semantic'] }
          ]
        }
      ]
    },
    'rgaa-13': {
      id: 'rgaa-13',
      title: { fr: 'Consultation', en: 'Consultation' },
      criteria: [
        {
          id: '13.1',
          title: { fr: 'Pour chaque page web, l\'utilisateur a-t-il le contrôle de chaque limite de temps ?', en: 'For each web page, does the user have control over each time limit?' },
          tests: [
            { id: '13.1.1', title: { fr: 'Limite de temps contrôlable', en: 'Time limit controllable' }, tags: ['time', 'refresh', 'meta'] },
            { id: '13.1.2', title: { fr: 'Pas de redirection automatique', en: 'No automatic redirect' }, tags: ['redirect', 'meta'] }
          ]
        },
        {
          id: '13.9',
          title: { fr: 'Dans chaque page web, le contenu proposé est-il consultable ?', en: 'In each web page, is the proposed content accessible?' },
          tests: [
            { id: '13.9.1', title: { fr: 'Contenu consultable sans plugin', en: 'Content accessible without plugin' }, tags: ['plugin', 'content'] }
          ]
        },
        {
          id: '13.14',
          title: { fr: 'Dans chaque page web, les changements brusques de luminosité sont-ils contrôlables ?', en: 'In each web page, are sudden brightness changes controllable?' },
          tests: [
            { id: '13.14.1', title: { fr: 'Pas de flash dépassant 3 par seconde', en: 'No flash exceeding 3 per second' }, tags: ['flash', 'animation', 'seizure'] }
          ]
        }
      ]
    }
  };

  // ==========================================================================
  // DOM Elements
  // ==========================================================================
  const DOM = {};

  function cacheDOMElements() {
    DOM.sidebar = document.querySelector('.sidebar');
    DOM.navTree = document.querySelector('.nav-tree');
    DOM.mainContent = document.querySelector('.main');
    DOM.filterCheckboxes = document.querySelectorAll('.filter-checkbox input');
    DOM.testViewer = document.querySelector('.test-viewer');
    DOM.statsTotal = document.querySelector('[data-stat="total"]');
    DOM.statsPass = document.querySelector('[data-stat="pass"]');
    DOM.statsFail = document.querySelector('[data-stat="fail"]');
    DOM.statsCriteria = document.querySelector('[data-stat="criteria"]');
    DOM.mobileMenuBtn = document.querySelector('.header__menu-btn');
    DOM.langToggle = document.querySelector('[data-action="toggle-lang"]');
    DOM.rawModeBtn = document.querySelector('[data-action="raw-mode"]');
  }

  // ==========================================================================
  // Navigation
  // ==========================================================================
  function buildNavigation() {
    if (!DOM.navTree) return;

    let html = '';

    Object.values(testsRegistry).forEach(theme => {
      const testCount = theme.criteria.reduce((acc, c) => acc + c.tests.length, 0);

      html += `
        <li class="nav-tree__item">
          <button class="nav-tree__btn" aria-expanded="false" data-theme="${theme.id}">
            <svg class="nav-tree__icon" viewBox="0 0 20 20" fill="currentColor">
              <path fill-rule="evenodd" d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z" clip-rule="evenodd" />
            </svg>
            ${theme.title[state.lang]} <span class="nav-tree__count">(${testCount})</span>
          </button>
          <ul class="nav-tree__children" hidden>
      `;

      theme.criteria.forEach(criterion => {
        criterion.tests.forEach(test => {
          html += `
            <li>
              <a href="#test-${test.id}" class="nav-tree__link" data-test-id="${test.id}">
                ${test.id}
              </a>
            </li>
          `;
        });
      });

      html += `
          </ul>
        </li>
      `;
    });

    DOM.navTree.innerHTML = html;
    attachNavigationEvents();
  }

  function attachNavigationEvents() {
    DOM.navTree.querySelectorAll('.nav-tree__btn').forEach(btn => {
      btn.addEventListener('click', () => {
        const isExpanded = btn.getAttribute('aria-expanded') === 'true';
        btn.setAttribute('aria-expanded', !isExpanded);
        const children = btn.nextElementSibling;
        if (children) {
          children.hidden = isExpanded;
        }
      });
    });

    DOM.navTree.querySelectorAll('.nav-tree__link').forEach(link => {
      link.addEventListener('click', (e) => {
        e.preventDefault();
        const testId = link.dataset.testId;
        loadTest(testId);

        DOM.navTree.querySelectorAll('.nav-tree__link').forEach(l => l.classList.remove('is-active'));
        link.classList.add('is-active');
      });
    });
  }

  // ==========================================================================
  // Test Loading & Display
  // ==========================================================================
  function loadTest(testId) {
    const testInfo = findTestById(testId);
    if (!testInfo) return;

    state.currentTest = testInfo;
    const testAnchor = testId.replace(/\./g, '-');

    const viewerHtml = `
      <div class="test-viewer__header">
        <h2 class="test-viewer__title">Test ${testInfo.id}</h2>
        <div class="test-viewer__meta">
          ${testInfo.tags.map(tag => `<span class="tag tag--primary">${tag}</span>`).join('')}
          <a href="${CONFIG.allTestsPath}#test-${testAnchor}" class="tag tag--success" target="_blank">
            ${state.lang === 'fr' ? 'Voir dans page complète' : 'View in full page'}
          </a>
        </div>
      </div>
      <div class="test-viewer__content">
        <p><strong>${testInfo.title[state.lang]}</strong></p>

        <div class="samples-grid">
          <div class="sample-card sample-card--pass">
            <div class="sample-card__header">
              <svg class="sample-card__icon" viewBox="0 0 20 20" fill="currentColor">
                <path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd" />
              </svg>
              ${state.lang === 'fr' ? 'Exemples conformes' : 'Good samples'}
            </div>
            <div class="sample-card__body">
              <iframe
                class="sample-card__iframe"
                src="${CONFIG.allTestsPath}#test-${testAnchor}"
                title="${state.lang === 'fr' ? 'Exemples du test' : 'Test samples'}"
              ></iframe>
            </div>
          </div>

          <div class="sample-card sample-card--fail">
            <div class="sample-card__header">
              <svg class="sample-card__icon" viewBox="0 0 20 20" fill="currentColor">
                <path fill-rule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clip-rule="evenodd" />
              </svg>
              ${state.lang === 'fr' ? 'Exemples non conformes' : 'Bad samples'}
            </div>
            <div class="sample-card__body">
              <iframe
                class="sample-card__iframe"
                src="${CONFIG.allTestsPath}#test-${testAnchor}"
                title="${state.lang === 'fr' ? 'Exemples du test' : 'Test samples'}"
              ></iframe>
            </div>
          </div>
        </div>

        <h3>${state.lang === 'fr' ? 'Couverture des outils' : 'Tools coverage'}</h3>
        <table class="tools-table">
          <thead>
            <tr>
              <th>${state.lang === 'fr' ? 'Outil' : 'Tool'}</th>
              <th>${state.lang === 'fr' ? 'Détecte Pass' : 'Detects Pass'}</th>
              <th>${state.lang === 'fr' ? 'Détecte Fail' : 'Detects Fail'}</th>
            </tr>
          </thead>
          <tbody>
            <tr><td>Axe</td><td>-</td><td>-</td></tr>
            <tr><td>Wave</td><td>-</td><td>-</td></tr>
            <tr><td>Lighthouse</td><td>-</td><td>-</td></tr>
            <tr><td>Pa11y</td><td>-</td><td>-</td></tr>
          </tbody>
        </table>
      </div>
    `;

    const testViewerContainer = document.getElementById('test-viewer-container');
    if (testViewerContainer) {
      testViewerContainer.innerHTML = viewerHtml;
    }

    window.location.hash = `test-${testId}`;
  }

  function findTestById(testId) {
    for (const theme of Object.values(testsRegistry)) {
      for (const criterion of theme.criteria) {
        for (const test of criterion.tests) {
          if (test.id === testId) {
            return test;
          }
        }
      }
    }
    return null;
  }

  // ==========================================================================
  // Statistics
  // ==========================================================================
  function updateStats() {
    let totalTests = 0;
    let totalCriteria = 0;

    Object.values(testsRegistry).forEach(theme => {
      totalCriteria += theme.criteria.length;
      theme.criteria.forEach(criterion => {
        totalTests += criterion.tests.length;
      });
    });

    if (DOM.statsTotal) DOM.statsTotal.textContent = totalTests;
    if (DOM.statsCriteria) DOM.statsCriteria.textContent = totalCriteria;
    if (DOM.statsPass) DOM.statsPass.textContent = totalTests;
    if (DOM.statsFail) DOM.statsFail.textContent = totalTests;
  }

  // ==========================================================================
  // Filters
  // ==========================================================================
  function initFilters() {
    document.querySelectorAll('.filter-checkbox input').forEach(checkbox => {
      checkbox.addEventListener('change', applyFilters);
    });
  }

  function applyFilters() {
    const activeFilters = {
      status: [],
      type: []
    };

    document.querySelectorAll('[data-filter-group="status"] input:checked').forEach(cb => {
      activeFilters.status.push(cb.value);
    });

    document.querySelectorAll('[data-filter-group="type"] input:checked').forEach(cb => {
      activeFilters.type.push(cb.value);
    });

    state.filters = activeFilters;

    DOM.navTree.querySelectorAll('.nav-tree__link').forEach(link => {
      const testId = link.dataset.testId;
      const test = findTestById(testId);

      if (test) {
        const matchesType = activeFilters.type.length === 0 ||
          activeFilters.type.some(t => test.tags.includes(t));

        link.style.display = matchesType ? '' : 'none';
      }
    });
  }

  // ==========================================================================
  // Language Toggle
  // ==========================================================================
  function toggleLanguage() {
    state.lang = state.lang === 'fr' ? 'en' : 'fr';
    document.documentElement.lang = state.lang;
    buildNavigation();
    buildTestList();

    if (state.currentTest) {
      loadTest(state.currentTest.id);
    }

    if (DOM.langToggle) {
      DOM.langToggle.textContent = state.lang.toUpperCase();
    }
  }

  // ==========================================================================
  // Raw Mode
  // ==========================================================================
  function openRawMode() {
    window.open(CONFIG.allTestsPath, '_blank');
  }

  // ==========================================================================
  // Mobile Menu
  // ==========================================================================
  function toggleMobileMenu() {
    if (DOM.sidebar) {
      DOM.sidebar.classList.toggle('is-open');
    }
  }

  // ==========================================================================
  // Hash Navigation
  // ==========================================================================
  function handleHashChange() {
    const hash = window.location.hash;
    if (hash.startsWith('#test-')) {
      const testId = hash.replace('#test-', '');
      loadTest(testId);

      const navLink = DOM.navTree.querySelector(`[data-test-id="${testId}"]`);
      if (navLink) {
        const parentList = navLink.closest('.nav-tree__children');
        if (parentList) {
          parentList.hidden = false;
          const parentBtn = parentList.previousElementSibling;
          if (parentBtn) {
            parentBtn.setAttribute('aria-expanded', 'true');
          }
        }
        navLink.classList.add('is-active');
      }
    }
  }

  // ==========================================================================
  // Event Handlers
  // ==========================================================================
  function attachGlobalEvents() {
    document.addEventListener('click', (e) => {
      if (e.target.closest('[data-action="toggle-lang"]')) {
        toggleLanguage();
      }

      if (e.target.closest('[data-action="raw-mode"]')) {
        openRawMode();
      }

      if (e.target.closest('.header__menu-btn')) {
        toggleMobileMenu();
      }

      if (e.target.closest('[data-action="copy-code"]')) {
        const code = document.getElementById('code-preview-content');
        if (code) {
          navigator.clipboard.writeText(code.textContent);
        }
      }
    });

    window.addEventListener('hashchange', handleHashChange);
  }

  // ==========================================================================
  // Build Test List for Dashboard
  // ==========================================================================
  function buildTestList() {
    const container = document.getElementById('test-list-container');
    if (!container) return;

    let html = '';

    Object.values(testsRegistry).forEach(theme => {
      const testCount = theme.criteria.reduce((acc, c) => acc + c.tests.length, 0);

      html += `
        <div class="criterion-section">
          <div class="criterion-section__header">
            <div class="criterion-section__number">${theme.id.replace('rgaa-', '')}</div>
            <div>
              <h2 class="criterion-section__title">${theme.title[state.lang]}</h2>
              <p class="criterion-section__description">${testCount} tests, ${theme.criteria.length} ${state.lang === 'fr' ? 'critères' : 'criteria'}</p>
            </div>
          </div>

          <div class="test-list">
            <ul class="test-list__items">
      `;

      theme.criteria.forEach(criterion => {
        criterion.tests.forEach(test => {
          html += `
            <li class="test-list__item">
              <div class="test-list__item-info">
                <span class="test-list__item-id">${test.id}</span>
                <a href="#test-${test.id}" class="test-list__item-name">${test.title[state.lang]}</a>
              </div>
              <div class="test-list__item-tags">
                ${test.tags.slice(0, 3).map(tag => `<span class="tag">${tag}</span>`).join('')}
              </div>
            </li>
          `;
        });
      });

      html += `
            </ul>
          </div>
        </div>
      `;
    });

    container.innerHTML = html;
  }

  // ==========================================================================
  // Initialization
  // ==========================================================================
  function init() {
    cacheDOMElements();
    buildNavigation();
    buildTestList();
    updateStats();
    initFilters();
    attachGlobalEvents();

    if (window.location.hash) {
      handleHashChange();
    }

    console.log('Longdesc Test Suite initialized - ' + Object.values(testsRegistry).reduce((acc, t) => acc + t.criteria.reduce((a, c) => a + c.tests.length, 0), 0) + ' tests loaded');
  }

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', init);
  } else {
    init();
  }

})();
