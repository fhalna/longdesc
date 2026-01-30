/**
 * RGAA 4.1 - Registre complet des 106 critères et 257 tests
 * Référentiel Général d'Amélioration de l'Accessibilité
 * Basé sur WCAG 2.1 niveau AA
 */

const RGAA41_REGISTRY = {
  version: '4.1',
  base: 'WCAG 2.1',
  totalCriteria: 106,
  totalTests: 257,

  themes: {
    // ========================================================================
    // THÉMATIQUE 1 : IMAGES (9 critères, 24 tests)
    // ========================================================================
    '1': {
      id: '1',
      title: { fr: 'Images', en: 'Images' },
      criteria: [
        {
          id: '1.1',
          level: 'A',
          title: { fr: 'Chaque image porteuse d\'information a-t-elle une alternative textuelle ?', en: 'Does each image conveying information have a text alternative?' },
          tests: [
            { id: '1.1.1', title: { fr: 'Image (balise <img>) porteuse d\'information', en: 'Image (img tag) conveying information' }, tags: ['img', 'alt', 'informative'] },
            { id: '1.1.2', title: { fr: 'Image (balise <area>) porteuse d\'information', en: 'Image (area tag) conveying information' }, tags: ['area', 'alt', 'map'] },
            { id: '1.1.3', title: { fr: 'Bouton de type image (input type="image")', en: 'Image button (input type="image")' }, tags: ['input', 'image', 'form'] },
            { id: '1.1.4', title: { fr: 'Image objet (balise <object>)', en: 'Object image (object tag)' }, tags: ['object', 'alternative'] },
            { id: '1.1.5', title: { fr: 'Image vectorielle (balise <svg>)', en: 'Vector image (svg tag)' }, tags: ['svg', 'aria-label', 'title'] },
            { id: '1.1.6', title: { fr: 'Image bitmap (balise <canvas>)', en: 'Bitmap image (canvas tag)' }, tags: ['canvas', 'alternative'] },
            { id: '1.1.7', title: { fr: 'Image embarquée (balise <embed>)', en: 'Embedded image (embed tag)' }, tags: ['embed', 'alternative'] },
            { id: '1.1.8', title: { fr: 'Image porteuse d\'information avec légende', en: 'Image conveying information with caption' }, tags: ['figure', 'figcaption', 'img'] }
          ]
        },
        {
          id: '1.2',
          level: 'A',
          title: { fr: 'Chaque image de décoration est-elle correctement ignorée par les technologies d\'assistance ?', en: 'Is each decorative image correctly ignored by assistive technologies?' },
          tests: [
            { id: '1.2.1', title: { fr: 'Image de décoration (balise <img>)', en: 'Decorative image (img tag)' }, tags: ['img', 'decorative', 'alt'] },
            { id: '1.2.2', title: { fr: 'Image de décoration (balise <area>)', en: 'Decorative image (area tag)' }, tags: ['area', 'decorative'] },
            { id: '1.2.3', title: { fr: 'Image de décoration (balise <object>)', en: 'Decorative image (object tag)' }, tags: ['object', 'decorative'] },
            { id: '1.2.4', title: { fr: 'Image de décoration (balise <svg>)', en: 'Decorative image (svg tag)' }, tags: ['svg', 'decorative', 'aria-hidden'] },
            { id: '1.2.5', title: { fr: 'Image de décoration (balise <canvas>)', en: 'Decorative image (canvas tag)' }, tags: ['canvas', 'decorative'] },
            { id: '1.2.6', title: { fr: 'Image de décoration (balise <embed>)', en: 'Decorative image (embed tag)' }, tags: ['embed', 'decorative'] }
          ]
        },
        {
          id: '1.3',
          level: 'A',
          title: { fr: 'Pour chaque image porteuse d\'information ayant une alternative textuelle, cette alternative est-elle pertinente ?', en: 'For each image conveying information with a text alternative, is this alternative relevant?' },
          tests: [
            { id: '1.3.1', title: { fr: 'Alternative pertinente (balise <img>)', en: 'Relevant alternative (img tag)' }, tags: ['img', 'alt', 'relevant'] },
            { id: '1.3.2', title: { fr: 'Alternative pertinente (balise <area>)', en: 'Relevant alternative (area tag)' }, tags: ['area', 'alt', 'relevant'] },
            { id: '1.3.3', title: { fr: 'Alternative pertinente (input type="image")', en: 'Relevant alternative (input type="image")' }, tags: ['input', 'image', 'alt'] },
            { id: '1.3.4', title: { fr: 'Alternative pertinente (balise <object>)', en: 'Relevant alternative (object tag)' }, tags: ['object', 'alternative'] },
            { id: '1.3.5', title: { fr: 'Alternative pertinente (balise <svg>)', en: 'Relevant alternative (svg tag)' }, tags: ['svg', 'aria-label'] },
            { id: '1.3.6', title: { fr: 'Alternative pertinente (balise <canvas>)', en: 'Relevant alternative (canvas tag)' }, tags: ['canvas', 'alternative'] },
            { id: '1.3.7', title: { fr: 'Alternative pertinente (balise <embed>)', en: 'Relevant alternative (embed tag)' }, tags: ['embed', 'alternative'] },
            { id: '1.3.8', title: { fr: 'Alternative et légende pertinentes', en: 'Relevant alternative and caption' }, tags: ['figure', 'figcaption'] },
            { id: '1.3.9', title: { fr: 'Alternative du bouton adjacent pertinente', en: 'Relevant adjacent button alternative' }, tags: ['button', 'image'] }
          ]
        },
        {
          id: '1.4',
          level: 'A',
          title: { fr: 'Pour chaque image utilisée comme CAPTCHA ou comme image-test, ayant une alternative textuelle, cette alternative permet-elle d\'identifier la nature et la fonction de l\'image ?', en: 'For each image used as a CAPTCHA or test image, does the text alternative identify the nature and function of the image?' },
          tests: [
            { id: '1.4.1', title: { fr: 'CAPTCHA image avec alternative', en: 'CAPTCHA image with alternative' }, tags: ['captcha', 'img', 'alt'] },
            { id: '1.4.2', title: { fr: 'CAPTCHA object avec alternative', en: 'CAPTCHA object with alternative' }, tags: ['captcha', 'object'] },
            { id: '1.4.3', title: { fr: 'CAPTCHA embed avec alternative', en: 'CAPTCHA embed with alternative' }, tags: ['captcha', 'embed'] },
            { id: '1.4.4', title: { fr: 'CAPTCHA canvas avec alternative', en: 'CAPTCHA canvas with alternative' }, tags: ['captcha', 'canvas'] }
          ]
        },
        {
          id: '1.5',
          level: 'A',
          title: { fr: 'Pour chaque image utilisée comme CAPTCHA, une solution d\'accès alternatif au contenu ou à la fonction est-elle présente ?', en: 'For each image used as a CAPTCHA, is there an alternative access solution?' },
          tests: [
            { id: '1.5.1', title: { fr: 'Alternative d\'accès au CAPTCHA', en: 'Alternative access to CAPTCHA' }, tags: ['captcha', 'alternative', 'audio'] },
            { id: '1.5.2', title: { fr: 'Solution alternative au CAPTCHA', en: 'Alternative solution to CAPTCHA' }, tags: ['captcha', 'alternative'] }
          ]
        },
        {
          id: '1.6',
          level: 'A',
          title: { fr: 'Chaque image porteuse d\'information a-t-elle, si nécessaire, une description détaillée ?', en: 'Does each information-conveying image have a detailed description if necessary?' },
          tests: [
            { id: '1.6.1', title: { fr: 'Description détaillée (balise <img>)', en: 'Detailed description (img tag)' }, tags: ['img', 'longdesc', 'description'] },
            { id: '1.6.2', title: { fr: 'Description détaillée (input type="image")', en: 'Detailed description (input type="image")' }, tags: ['input', 'image', 'description'] },
            { id: '1.6.3', title: { fr: 'Description détaillée (balise <object>)', en: 'Detailed description (object tag)' }, tags: ['object', 'description'] },
            { id: '1.6.4', title: { fr: 'Description détaillée (balise <svg>)', en: 'Detailed description (svg tag)' }, tags: ['svg', 'desc', 'description'] },
            { id: '1.6.5', title: { fr: 'Description détaillée (balise <canvas>)', en: 'Detailed description (canvas tag)' }, tags: ['canvas', 'description'] },
            { id: '1.6.6', title: { fr: 'Description détaillée (balise <embed>)', en: 'Detailed description (embed tag)' }, tags: ['embed', 'description'] },
            { id: '1.6.7', title: { fr: 'Description détaillée avec légende', en: 'Detailed description with caption' }, tags: ['figure', 'figcaption', 'description'] }
          ]
        },
        {
          id: '1.7',
          level: 'A',
          title: { fr: 'Pour chaque image porteuse d\'information ayant une description détaillée, cette description est-elle pertinente ?', en: 'For each information-conveying image with a detailed description, is this description relevant?' },
          tests: [
            { id: '1.7.1', title: { fr: 'Description détaillée pertinente', en: 'Relevant detailed description' }, tags: ['img', 'description', 'relevant'] }
          ]
        },
        {
          id: '1.8',
          level: 'AA',
          title: { fr: 'Chaque image texte porteuse d\'information, en l\'absence d\'un mécanisme de remplacement, doit si possible être remplacée par du texte stylé. Cette règle est-elle respectée ?', en: 'Should each text image conveying information be replaced by styled text when possible?' },
          tests: [
            { id: '1.8.1', title: { fr: 'Image texte (balise <img>)', en: 'Text image (img tag)' }, tags: ['img', 'text-image'] },
            { id: '1.8.2', title: { fr: 'Image texte (input type="image")', en: 'Text image (input type="image")' }, tags: ['input', 'text-image'] },
            { id: '1.8.3', title: { fr: 'Image texte (balise <object>)', en: 'Text image (object tag)' }, tags: ['object', 'text-image'] },
            { id: '1.8.4', title: { fr: 'Image texte (balise <svg>)', en: 'Text image (svg tag)' }, tags: ['svg', 'text-image'] },
            { id: '1.8.5', title: { fr: 'Image texte (balise <canvas>)', en: 'Text image (canvas tag)' }, tags: ['canvas', 'text-image'] }
          ]
        },
        {
          id: '1.9',
          level: 'AA',
          title: { fr: 'Chaque légende d\'image est-elle, si nécessaire, correctement reliée à l\'image correspondante ?', en: 'Is each image caption correctly linked to the corresponding image if necessary?' },
          tests: [
            { id: '1.9.1', title: { fr: 'Légende correctement reliée', en: 'Caption correctly linked' }, tags: ['figure', 'figcaption', 'relationship'] }
          ]
        }
      ]
    },

    // ========================================================================
    // THÉMATIQUE 2 : CADRES (2 critères, 2 tests)
    // ========================================================================
    '2': {
      id: '2',
      title: { fr: 'Cadres', en: 'Frames' },
      criteria: [
        {
          id: '2.1',
          level: 'A',
          title: { fr: 'Chaque cadre a-t-il un titre de cadre ?', en: 'Does each frame have a frame title?' },
          tests: [
            { id: '2.1.1', title: { fr: 'Cadre (balise <iframe>) avec attribut title', en: 'Frame (iframe tag) with title attribute' }, tags: ['iframe', 'title'] }
          ]
        },
        {
          id: '2.2',
          level: 'A',
          title: { fr: 'Pour chaque cadre ayant un titre de cadre, ce titre de cadre est-il pertinent ?', en: 'For each frame with a title, is this title relevant?' },
          tests: [
            { id: '2.2.1', title: { fr: 'Titre de cadre pertinent', en: 'Relevant frame title' }, tags: ['iframe', 'title', 'relevant'] }
          ]
        }
      ]
    },

    // ========================================================================
    // THÉMATIQUE 3 : COULEURS (3 critères, 7 tests)
    // ========================================================================
    '3': {
      id: '3',
      title: { fr: 'Couleurs', en: 'Colors' },
      criteria: [
        {
          id: '3.1',
          level: 'A',
          title: { fr: 'Dans chaque page web, l\'information ne doit pas être donnée uniquement par la couleur. Cette règle est-elle respectée ?', en: 'In each web page, information must not be given only by color. Is this rule respected?' },
          tests: [
            { id: '3.1.1', title: { fr: 'Information par la couleur (texte)', en: 'Information by color (text)' }, tags: ['color', 'text', 'semantic'] },
            { id: '3.1.2', title: { fr: 'Information par la couleur (image)', en: 'Information by color (image)' }, tags: ['color', 'image', 'semantic'] },
            { id: '3.1.3', title: { fr: 'Information par la couleur (média temporel)', en: 'Information by color (time-based media)' }, tags: ['color', 'media', 'semantic'] },
            { id: '3.1.4', title: { fr: 'Information par la couleur (média non temporel)', en: 'Information by color (non-time-based media)' }, tags: ['color', 'media', 'semantic'] }
          ]
        },
        {
          id: '3.2',
          level: 'AA',
          title: { fr: 'Dans chaque page web, le contraste entre la couleur du texte et la couleur de son arrière-plan est-il suffisamment élevé ?', en: 'In each web page, is the contrast between text color and background color high enough?' },
          tests: [
            { id: '3.2.1', title: { fr: 'Contraste du texte (taille normale)', en: 'Text contrast (normal size)' }, tags: ['contrast', 'text', '4.5:1'] },
            { id: '3.2.2', title: { fr: 'Contraste du texte (grande taille)', en: 'Text contrast (large size)' }, tags: ['contrast', 'text', '3:1'] }
          ]
        },
        {
          id: '3.3',
          level: 'AA',
          title: { fr: 'Dans chaque page web, les couleurs utilisées dans les composants d\'interface ou les éléments graphiques porteurs d\'informations sont-elles suffisamment contrastées ?', en: 'In each web page, are colors used in interface components or graphic elements conveying information sufficiently contrasted?' },
          tests: [
            { id: '3.3.1', title: { fr: 'Contraste des composants d\'interface', en: 'Interface component contrast' }, tags: ['contrast', 'component', '3:1'] }
          ]
        }
      ]
    },

    // ========================================================================
    // THÉMATIQUE 4 : MULTIMÉDIA (13 critères, 32 tests)
    // ========================================================================
    '4': {
      id: '4',
      title: { fr: 'Multimédia', en: 'Multimedia' },
      criteria: [
        {
          id: '4.1',
          level: 'A',
          title: { fr: 'Chaque média temporel pré-enregistré a-t-il, si nécessaire, une transcription textuelle ou une audiodescription ?', en: 'Does each pre-recorded time-based media have a text transcript or audio description if necessary?' },
          tests: [
            { id: '4.1.1', title: { fr: 'Média audio pré-enregistré avec transcription', en: 'Pre-recorded audio media with transcript' }, tags: ['audio', 'transcript'] },
            { id: '4.1.2', title: { fr: 'Média vidéo pré-enregistré avec transcription', en: 'Pre-recorded video media with transcript' }, tags: ['video', 'transcript'] },
            { id: '4.1.3', title: { fr: 'Média synchronisé pré-enregistré avec transcription', en: 'Pre-recorded synchronized media with transcript' }, tags: ['video', 'audio', 'transcript'] }
          ]
        },
        {
          id: '4.2',
          level: 'A',
          title: { fr: 'Pour chaque média temporel pré-enregistré ayant une transcription textuelle ou une audiodescription synchronisée, celles-ci sont-elles pertinentes ?', en: 'For each pre-recorded time-based media with a text transcript or synchronized audio description, are these relevant?' },
          tests: [
            { id: '4.2.1', title: { fr: 'Transcription textuelle pertinente (audio)', en: 'Relevant text transcript (audio)' }, tags: ['audio', 'transcript', 'relevant'] },
            { id: '4.2.2', title: { fr: 'Transcription textuelle pertinente (vidéo)', en: 'Relevant text transcript (video)' }, tags: ['video', 'transcript', 'relevant'] },
            { id: '4.2.3', title: { fr: 'Audiodescription synchronisée pertinente', en: 'Relevant synchronized audio description' }, tags: ['video', 'audiodescription', 'relevant'] }
          ]
        },
        {
          id: '4.3',
          level: 'A',
          title: { fr: 'Chaque média temporel synchronisé pré-enregistré a-t-il, si nécessaire, des sous-titres synchronisés ?', en: 'Does each pre-recorded synchronized time-based media have synchronized captions if necessary?' },
          tests: [
            { id: '4.3.1', title: { fr: 'Sous-titres synchronisés présents', en: 'Synchronized captions present' }, tags: ['video', 'captions', 'track'] },
            { id: '4.3.2', title: { fr: 'Sous-titres synchronisés pertinents', en: 'Synchronized captions relevant' }, tags: ['video', 'captions', 'relevant'] }
          ]
        },
        {
          id: '4.4',
          level: 'AA',
          title: { fr: 'Pour chaque média temporel synchronisé pré-enregistré ayant des sous-titres synchronisés, ces sous-titres sont-ils pertinents ?', en: 'For each pre-recorded synchronized time-based media with synchronized captions, are these captions relevant?' },
          tests: [
            { id: '4.4.1', title: { fr: 'Sous-titres synchronisés pertinents', en: 'Relevant synchronized captions' }, tags: ['video', 'captions', 'relevant'] }
          ]
        },
        {
          id: '4.5',
          level: 'AA',
          title: { fr: 'Chaque média temporel pré-enregistré a-t-il, si nécessaire, une audiodescription synchronisée ?', en: 'Does each pre-recorded time-based media have a synchronized audio description if necessary?' },
          tests: [
            { id: '4.5.1', title: { fr: 'Audiodescription synchronisée présente', en: 'Synchronized audio description present' }, tags: ['video', 'audiodescription'] },
            { id: '4.5.2', title: { fr: 'Audiodescription synchronisée pertinente', en: 'Synchronized audio description relevant' }, tags: ['video', 'audiodescription', 'relevant'] }
          ]
        },
        {
          id: '4.6',
          level: 'A',
          title: { fr: 'Pour chaque média temporel pré-enregistré ayant une audiodescription synchronisée, celle-ci est-elle pertinente ?', en: 'For each pre-recorded time-based media with a synchronized audio description, is it relevant?' },
          tests: [
            { id: '4.6.1', title: { fr: 'Audiodescription pertinente', en: 'Relevant audio description' }, tags: ['video', 'audiodescription', 'relevant'] }
          ]
        },
        {
          id: '4.7',
          level: 'A',
          title: { fr: 'Chaque média temporel est-il clairement identifiable ?', en: 'Is each time-based media clearly identifiable?' },
          tests: [
            { id: '4.7.1', title: { fr: 'Identification du média temporel', en: 'Time-based media identification' }, tags: ['video', 'audio', 'identification'] }
          ]
        },
        {
          id: '4.8',
          level: 'A',
          title: { fr: 'Chaque média non temporel a-t-il, si nécessaire, une alternative ?', en: 'Does each non-time-based media have an alternative if necessary?' },
          tests: [
            { id: '4.8.1', title: { fr: 'Alternative au média non temporel', en: 'Non-time-based media alternative' }, tags: ['media', 'alternative'] },
            { id: '4.8.2', title: { fr: 'Alternative pertinente au média non temporel', en: 'Relevant non-time-based media alternative' }, tags: ['media', 'alternative', 'relevant'] }
          ]
        },
        {
          id: '4.9',
          level: 'A',
          title: { fr: 'Pour chaque média non temporel ayant une alternative, cette alternative est-elle pertinente ?', en: 'For each non-time-based media with an alternative, is this alternative relevant?' },
          tests: [
            { id: '4.9.1', title: { fr: 'Alternative pertinente', en: 'Relevant alternative' }, tags: ['media', 'alternative', 'relevant'] }
          ]
        },
        {
          id: '4.10',
          level: 'A',
          title: { fr: 'Chaque son déclenché automatiquement est-il contrôlable par l\'utilisateur ?', en: 'Is each automatically triggered sound controllable by the user?' },
          tests: [
            { id: '4.10.1', title: { fr: 'Son automatique contrôlable', en: 'Automatic sound controllable' }, tags: ['audio', 'autoplay', 'control'] },
            { id: '4.10.2', title: { fr: 'Son automatique avec durée <= 3 secondes', en: 'Automatic sound with duration <= 3 seconds' }, tags: ['audio', 'autoplay', 'duration'] }
          ]
        },
        {
          id: '4.11',
          level: 'A',
          title: { fr: 'La consultation de chaque média temporel est-elle, si nécessaire, contrôlable par le clavier et tout dispositif de pointage ?', en: 'Is each time-based media controllable by keyboard and pointing device if necessary?' },
          tests: [
            { id: '4.11.1', title: { fr: 'Média temporel contrôlable au clavier', en: 'Time-based media keyboard controllable' }, tags: ['video', 'audio', 'keyboard'] },
            { id: '4.11.2', title: { fr: 'Média temporel contrôlable à la souris', en: 'Time-based media mouse controllable' }, tags: ['video', 'audio', 'mouse'] },
            { id: '4.11.3', title: { fr: 'Média temporel contrôlable au toucher', en: 'Time-based media touch controllable' }, tags: ['video', 'audio', 'touch'] }
          ]
        },
        {
          id: '4.12',
          level: 'A',
          title: { fr: 'La consultation de chaque média non temporel est-elle contrôlable par le clavier et tout dispositif de pointage ?', en: 'Is each non-time-based media controllable by keyboard and pointing device?' },
          tests: [
            { id: '4.12.1', title: { fr: 'Média non temporel contrôlable au clavier', en: 'Non-time-based media keyboard controllable' }, tags: ['media', 'keyboard'] },
            { id: '4.12.2', title: { fr: 'Média non temporel contrôlable à la souris', en: 'Non-time-based media mouse controllable' }, tags: ['media', 'mouse'] }
          ]
        },
        {
          id: '4.13',
          level: 'AA',
          title: { fr: 'Chaque média temporel et non temporel est-il compatible avec les technologies d\'assistance ?', en: 'Is each time-based and non-time-based media compatible with assistive technologies?' },
          tests: [
            { id: '4.13.1', title: { fr: 'Média temporel compatible', en: 'Time-based media compatible' }, tags: ['video', 'audio', 'accessible'] },
            { id: '4.13.2', title: { fr: 'Média non temporel compatible', en: 'Non-time-based media compatible' }, tags: ['media', 'accessible'] }
          ]
        }
      ]
    },

    // ========================================================================
    // THÉMATIQUE 5 : TABLEAUX (8 critères, 16 tests)
    // ========================================================================
    '5': {
      id: '5',
      title: { fr: 'Tableaux', en: 'Tables' },
      criteria: [
        {
          id: '5.1',
          level: 'A',
          title: { fr: 'Chaque tableau de données complexe a-t-il un résumé ?', en: 'Does each complex data table have a summary?' },
          tests: [
            { id: '5.1.1', title: { fr: 'Résumé du tableau de données complexe', en: 'Complex data table summary' }, tags: ['table', 'summary', 'aria-describedby'] }
          ]
        },
        {
          id: '5.2',
          level: 'A',
          title: { fr: 'Pour chaque tableau de données complexe ayant un résumé, celui-ci est-il pertinent ?', en: 'For each complex data table with a summary, is it relevant?' },
          tests: [
            { id: '5.2.1', title: { fr: 'Résumé pertinent', en: 'Relevant summary' }, tags: ['table', 'summary', 'relevant'] }
          ]
        },
        {
          id: '5.3',
          level: 'A',
          title: { fr: 'Pour chaque tableau de mise en forme, le contenu linéarisé reste-t-il compréhensible ?', en: 'For each layout table, does the linearized content remain understandable?' },
          tests: [
            { id: '5.3.1', title: { fr: 'Contenu linéarisé compréhensible', en: 'Linearized content understandable' }, tags: ['table', 'layout', 'linearized'] }
          ]
        },
        {
          id: '5.4',
          level: 'A',
          title: { fr: 'Pour chaque tableau de données ayant un titre, le titre est-il correctement associé au tableau de données ?', en: 'For each data table with a title, is the title correctly associated with the data table?' },
          tests: [
            { id: '5.4.1', title: { fr: 'Titre associé au tableau (caption)', en: 'Title associated with table (caption)' }, tags: ['table', 'caption', 'title'] }
          ]
        },
        {
          id: '5.5',
          level: 'A',
          title: { fr: 'Pour chaque tableau de données ayant un titre, celui-ci est-il pertinent ?', en: 'For each data table with a title, is it relevant?' },
          tests: [
            { id: '5.5.1', title: { fr: 'Titre de tableau pertinent', en: 'Relevant table title' }, tags: ['table', 'caption', 'relevant'] }
          ]
        },
        {
          id: '5.6',
          level: 'A',
          title: { fr: 'Pour chaque tableau de données, chaque en-tête de colonnes et chaque en-tête de lignes sont-ils correctement déclarés ?', en: 'For each data table, are column and row headers correctly declared?' },
          tests: [
            { id: '5.6.1', title: { fr: 'En-têtes de colonnes déclarés (th)', en: 'Column headers declared (th)' }, tags: ['table', 'th', 'scope'] },
            { id: '5.6.2', title: { fr: 'En-têtes de lignes déclarés (th)', en: 'Row headers declared (th)' }, tags: ['table', 'th', 'scope'] },
            { id: '5.6.3', title: { fr: 'En-têtes avec attribut scope', en: 'Headers with scope attribute' }, tags: ['table', 'th', 'scope'] }
          ]
        },
        {
          id: '5.7',
          level: 'A',
          title: { fr: 'Pour chaque tableau de données, la technique appropriée permettant d\'associer chaque cellule avec ses en-têtes est-elle utilisée ?', en: 'For each data table, is the appropriate technique used to associate each cell with its headers?' },
          tests: [
            { id: '5.7.1', title: { fr: 'Cellules associées aux en-têtes (scope)', en: 'Cells associated with headers (scope)' }, tags: ['table', 'scope', 'headers'] },
            { id: '5.7.2', title: { fr: 'Cellules associées aux en-têtes (headers/id)', en: 'Cells associated with headers (headers/id)' }, tags: ['table', 'headers', 'id'] },
            { id: '5.7.3', title: { fr: 'Cellules associées aux en-têtes (ARIA)', en: 'Cells associated with headers (ARIA)' }, tags: ['table', 'aria', 'headers'] },
            { id: '5.7.4', title: { fr: 'Association cohérente des cellules et en-têtes', en: 'Consistent association of cells and headers' }, tags: ['table', 'headers', 'consistent'] },
            { id: '5.7.5', title: { fr: 'Technique appropriée pour tableau complexe', en: 'Appropriate technique for complex table' }, tags: ['table', 'complex', 'headers'] }
          ]
        },
        {
          id: '5.8',
          level: 'A',
          title: { fr: 'Chaque tableau de mise en forme ne doit pas utiliser d\'éléments propres aux tableaux de données. Cette règle est-elle respectée ?', en: 'Each layout table must not use elements specific to data tables. Is this rule respected?' },
          tests: [
            { id: '5.8.1', title: { fr: 'Tableau de mise en forme sans éléments de données', en: 'Layout table without data elements' }, tags: ['table', 'layout', 'th', 'caption'] }
          ]
        }
      ]
    },

    // ========================================================================
    // THÉMATIQUE 6 : LIENS (2 critères, 5 tests)
    // ========================================================================
    '6': {
      id: '6',
      title: { fr: 'Liens', en: 'Links' },
      criteria: [
        {
          id: '6.1',
          level: 'A',
          title: { fr: 'Chaque lien est-il explicite ?', en: 'Is each link explicit?' },
          tests: [
            { id: '6.1.1', title: { fr: 'Intitulé de lien explicite', en: 'Explicit link text' }, tags: ['link', 'a', 'text'] },
            { id: '6.1.2', title: { fr: 'Lien image avec alternative explicite', en: 'Image link with explicit alternative' }, tags: ['link', 'img', 'alt'] },
            { id: '6.1.3', title: { fr: 'Lien composite explicite', en: 'Explicit composite link' }, tags: ['link', 'composite', 'text'] },
            { id: '6.1.4', title: { fr: 'Lien SVG avec alternative explicite', en: 'SVG link with explicit alternative' }, tags: ['link', 'svg', 'aria-label'] }
          ]
        },
        {
          id: '6.2',
          level: 'A',
          title: { fr: 'Dans chaque page web, chaque lien a-t-il un intitulé ?', en: 'In each web page, does each link have a text?' },
          tests: [
            { id: '6.2.1', title: { fr: 'Lien avec intitulé', en: 'Link with text' }, tags: ['link', 'a', 'empty'] }
          ]
        }
      ]
    },

    // ========================================================================
    // THÉMATIQUE 7 : SCRIPTS (5 critères, 11 tests)
    // ========================================================================
    '7': {
      id: '7',
      title: { fr: 'Scripts', en: 'Scripts' },
      criteria: [
        {
          id: '7.1',
          level: 'A',
          title: { fr: 'Chaque script est-il, si nécessaire, compatible avec les technologies d\'assistance ?', en: 'Is each script compatible with assistive technologies if necessary?' },
          tests: [
            { id: '7.1.1', title: { fr: 'Script avec alternative compatible', en: 'Script with compatible alternative' }, tags: ['script', 'accessible', 'alternative'] },
            { id: '7.1.2', title: { fr: 'Script correctement restitué', en: 'Script correctly rendered' }, tags: ['script', 'accessible', 'aria'] },
            { id: '7.1.3', title: { fr: 'Script utilisable au clavier et souris', en: 'Script usable with keyboard and mouse' }, tags: ['script', 'keyboard', 'mouse'] }
          ]
        },
        {
          id: '7.2',
          level: 'A',
          title: { fr: 'Pour chaque script ayant une alternative, cette alternative est-elle pertinente ?', en: 'For each script with an alternative, is this alternative relevant?' },
          tests: [
            { id: '7.2.1', title: { fr: 'Alternative de script pertinente', en: 'Relevant script alternative' }, tags: ['script', 'alternative', 'relevant'] },
            { id: '7.2.2', title: { fr: 'Alternative accessible après action', en: 'Alternative accessible after action' }, tags: ['script', 'alternative', 'accessible'] }
          ]
        },
        {
          id: '7.3',
          level: 'A',
          title: { fr: 'Chaque script est-il contrôlable par le clavier et par tout dispositif de pointage ?', en: 'Is each script controllable by keyboard and any pointing device?' },
          tests: [
            { id: '7.3.1', title: { fr: 'Script contrôlable au clavier', en: 'Script keyboard controllable' }, tags: ['script', 'keyboard', 'focus'] },
            { id: '7.3.2', title: { fr: 'Script contrôlable à la souris', en: 'Script mouse controllable' }, tags: ['script', 'mouse', 'click'] }
          ]
        },
        {
          id: '7.4',
          level: 'A',
          title: { fr: 'Pour chaque script qui initie un changement de contexte, l\'utilisateur est-il averti ou en a-t-il le contrôle ?', en: 'For each script that initiates a context change, is the user warned or in control?' },
          tests: [
            { id: '7.4.1', title: { fr: 'Changement de contexte contrôlé', en: 'Context change controlled' }, tags: ['script', 'context', 'control'] }
          ]
        },
        {
          id: '7.5',
          level: 'A',
          title: { fr: 'Dans chaque page web, les messages de statut sont-ils correctement restitués par les technologies d\'assistance ?', en: 'In each web page, are status messages correctly rendered by assistive technologies?' },
          tests: [
            { id: '7.5.1', title: { fr: 'Message de statut avec role="status"', en: 'Status message with role="status"' }, tags: ['aria', 'status', 'live'] },
            { id: '7.5.2', title: { fr: 'Message de statut avec role="alert"', en: 'Status message with role="alert"' }, tags: ['aria', 'alert', 'live'] },
            { id: '7.5.3', title: { fr: 'Message de statut avec aria-live', en: 'Status message with aria-live' }, tags: ['aria', 'live', 'polite'] }
          ]
        }
      ]
    },

    // ========================================================================
    // THÉMATIQUE 8 : ÉLÉMENTS OBLIGATOIRES (10 critères, 22 tests)
    // ========================================================================
    '8': {
      id: '8',
      title: { fr: 'Éléments obligatoires', en: 'Mandatory elements' },
      criteria: [
        {
          id: '8.1',
          level: 'A',
          title: { fr: 'Chaque page web est-elle définie par un type de document ?', en: 'Is each web page defined by a document type?' },
          tests: [
            { id: '8.1.1', title: { fr: 'Présence du doctype', en: 'Doctype presence' }, tags: ['doctype', 'html5'] },
            { id: '8.1.2', title: { fr: 'Doctype valide', en: 'Valid doctype' }, tags: ['doctype', 'valid'] },
            { id: '8.1.3', title: { fr: 'Doctype en première position', en: 'Doctype in first position' }, tags: ['doctype', 'position'] }
          ]
        },
        {
          id: '8.2',
          level: 'A',
          title: { fr: 'Pour chaque page web, le code source généré est-il valide selon le type de document spécifié ?', en: 'For each web page, is the generated source code valid according to the specified document type?' },
          tests: [
            { id: '8.2.1', title: { fr: 'Code source valide', en: 'Valid source code' }, tags: ['html', 'validation', 'w3c'] },
            { id: '8.2.2', title: { fr: 'Balises ouvertes et fermées correctement', en: 'Tags opened and closed correctly' }, tags: ['html', 'tags', 'syntax'] }
          ]
        },
        {
          id: '8.3',
          level: 'A',
          title: { fr: 'Dans chaque page web, la langue par défaut est-elle présente ?', en: 'In each web page, is the default language present?' },
          tests: [
            { id: '8.3.1', title: { fr: 'Attribut lang sur l\'élément html', en: 'Lang attribute on html element' }, tags: ['lang', 'html', 'language'] }
          ]
        },
        {
          id: '8.4',
          level: 'A',
          title: { fr: 'Pour chaque page web ayant une langue par défaut, le code de langue est-il pertinent ?', en: 'For each web page with a default language, is the language code relevant?' },
          tests: [
            { id: '8.4.1', title: { fr: 'Code de langue pertinent', en: 'Relevant language code' }, tags: ['lang', 'iso', 'valid'] }
          ]
        },
        {
          id: '8.5',
          level: 'A',
          title: { fr: 'Chaque page web a-t-elle un titre de page ?', en: 'Does each web page have a page title?' },
          tests: [
            { id: '8.5.1', title: { fr: 'Présence de la balise title', en: 'Title tag presence' }, tags: ['title', 'head'] }
          ]
        },
        {
          id: '8.6',
          level: 'A',
          title: { fr: 'Pour chaque page web ayant un titre de page, ce titre est-il pertinent ?', en: 'For each web page with a page title, is this title relevant?' },
          tests: [
            { id: '8.6.1', title: { fr: 'Titre de page pertinent', en: 'Relevant page title' }, tags: ['title', 'relevant', 'unique'] }
          ]
        },
        {
          id: '8.7',
          level: 'AA',
          title: { fr: 'Dans chaque page web, chaque changement de langue est-il indiqué dans le code source ?', en: 'In each web page, is each language change indicated in the source code?' },
          tests: [
            { id: '8.7.1', title: { fr: 'Changement de langue indiqué', en: 'Language change indicated' }, tags: ['lang', 'change', 'attribute'] }
          ]
        },
        {
          id: '8.8',
          level: 'AA',
          title: { fr: 'Dans chaque page web, le code de langue de chaque changement de langue est-il valide et pertinent ?', en: 'In each web page, is the language code of each language change valid and relevant?' },
          tests: [
            { id: '8.8.1', title: { fr: 'Code de changement de langue valide', en: 'Valid language change code' }, tags: ['lang', 'change', 'valid'] }
          ]
        },
        {
          id: '8.9',
          level: 'A',
          title: { fr: 'Dans chaque page web, les balises ne doivent pas être utilisées uniquement à des fins de présentation. Cette règle est-elle respectée ?', en: 'In each web page, tags must not be used only for presentation purposes. Is this rule respected?' },
          tests: [
            { id: '8.9.1', title: { fr: 'Balises utilisées à bon escient', en: 'Tags used appropriately' }, tags: ['semantic', 'html', 'presentation'] }
          ]
        },
        {
          id: '8.10',
          level: 'A',
          title: { fr: 'Dans chaque page web, les changements du sens de lecture sont-ils signalés ?', en: 'In each web page, are reading direction changes indicated?' },
          tests: [
            { id: '8.10.1', title: { fr: 'Changement de sens de lecture signalé (dir)', en: 'Reading direction change indicated (dir)' }, tags: ['dir', 'rtl', 'ltr'] },
            { id: '8.10.2', title: { fr: 'Attribut dir pertinent', en: 'Relevant dir attribute' }, tags: ['dir', 'relevant'] }
          ]
        }
      ]
    },

    // ========================================================================
    // THÉMATIQUE 9 : STRUCTURATION DE L'INFORMATION (4 critères, 10 tests)
    // ========================================================================
    '9': {
      id: '9',
      title: { fr: 'Structuration de l\'information', en: 'Information structure' },
      criteria: [
        {
          id: '9.1',
          level: 'A',
          title: { fr: 'Dans chaque page web, l\'information est-elle structurée par l\'utilisation appropriée de titres ?', en: 'In each web page, is information structured by the appropriate use of headings?' },
          tests: [
            { id: '9.1.1', title: { fr: 'Présence d\'un titre h1', en: 'Presence of an h1 heading' }, tags: ['heading', 'h1', 'structure'] },
            { id: '9.1.2', title: { fr: 'Hiérarchie des titres cohérente', en: 'Consistent heading hierarchy' }, tags: ['heading', 'hierarchy', 'h1-h6'] },
            { id: '9.1.3', title: { fr: 'Titres pertinents', en: 'Relevant headings' }, tags: ['heading', 'relevant', 'content'] }
          ]
        },
        {
          id: '9.2',
          level: 'A',
          title: { fr: 'Dans chaque page web, la structure du document est-elle cohérente ?', en: 'In each web page, is the document structure consistent?' },
          tests: [
            { id: '9.2.1', title: { fr: 'Structure du document cohérente', en: 'Consistent document structure' }, tags: ['structure', 'html5', 'semantic'] }
          ]
        },
        {
          id: '9.3',
          level: 'A',
          title: { fr: 'Dans chaque page web, chaque liste est-elle correctement structurée ?', en: 'In each web page, is each list correctly structured?' },
          tests: [
            { id: '9.3.1', title: { fr: 'Liste non ordonnée (ul)', en: 'Unordered list (ul)' }, tags: ['list', 'ul', 'li'] },
            { id: '9.3.2', title: { fr: 'Liste ordonnée (ol)', en: 'Ordered list (ol)' }, tags: ['list', 'ol', 'li'] },
            { id: '9.3.3', title: { fr: 'Liste de description (dl)', en: 'Description list (dl)' }, tags: ['list', 'dl', 'dt', 'dd'] }
          ]
        },
        {
          id: '9.4',
          level: 'A',
          title: { fr: 'Dans chaque page web, chaque citation est-elle correctement indiquée ?', en: 'In each web page, is each quotation correctly indicated?' },
          tests: [
            { id: '9.4.1', title: { fr: 'Citation courte (q)', en: 'Short quotation (q)' }, tags: ['quote', 'q', 'inline'] },
            { id: '9.4.2', title: { fr: 'Bloc de citation (blockquote)', en: 'Block quotation (blockquote)' }, tags: ['quote', 'blockquote', 'block'] }
          ]
        }
      ]
    },

    // ========================================================================
    // THÉMATIQUE 10 : PRÉSENTATION DE L'INFORMATION (14 critères, 28 tests)
    // ========================================================================
    '10': {
      id: '10',
      title: { fr: 'Présentation de l\'information', en: 'Information presentation' },
      criteria: [
        {
          id: '10.1',
          level: 'A',
          title: { fr: 'Dans le site web, des feuilles de styles sont-elles utilisées pour contrôler la présentation de l\'information ?', en: 'On the website, are style sheets used to control the presentation of information?' },
          tests: [
            { id: '10.1.1', title: { fr: 'Utilisation des feuilles de styles', en: 'Use of style sheets' }, tags: ['css', 'style', 'presentation'] },
            { id: '10.1.2', title: { fr: 'Pas d\'attributs de présentation HTML', en: 'No HTML presentation attributes' }, tags: ['html', 'presentation', 'deprecated'] },
            { id: '10.1.3', title: { fr: 'Pas de balises de présentation HTML', en: 'No HTML presentation tags' }, tags: ['html', 'tags', 'deprecated'] }
          ]
        },
        {
          id: '10.2',
          level: 'A',
          title: { fr: 'Dans chaque page web, le contenu visible porteur d\'information reste-t-il présent lorsque les feuilles de styles sont désactivées ?', en: 'In each web page, does visible content conveying information remain present when style sheets are disabled?' },
          tests: [
            { id: '10.2.1', title: { fr: 'Contenu visible sans CSS', en: 'Content visible without CSS' }, tags: ['css', 'content', 'visible'] }
          ]
        },
        {
          id: '10.3',
          level: 'A',
          title: { fr: 'Dans chaque page web, l\'information reste-t-elle compréhensible lorsque les feuilles de styles sont désactivées ?', en: 'In each web page, does information remain understandable when style sheets are disabled?' },
          tests: [
            { id: '10.3.1', title: { fr: 'Information compréhensible sans CSS', en: 'Information understandable without CSS' }, tags: ['css', 'content', 'understandable'] }
          ]
        },
        {
          id: '10.4',
          level: 'AA',
          title: { fr: 'Dans chaque page web, le texte reste-t-il lisible lorsque la taille des caractères est augmentée jusqu\'à 200%, au moins ?', en: 'In each web page, does text remain readable when character size is increased to 200% at least?' },
          tests: [
            { id: '10.4.1', title: { fr: 'Texte lisible avec zoom 200%', en: 'Text readable with 200% zoom' }, tags: ['zoom', 'text', 'readable'] },
            { id: '10.4.2', title: { fr: 'Pas de perte d\'information avec zoom 200%', en: 'No information loss with 200% zoom' }, tags: ['zoom', 'content', 'overflow'] },
            { id: '10.4.3', title: { fr: 'Pas de chevauchement avec zoom 200%', en: 'No overlap with 200% zoom' }, tags: ['zoom', 'layout', 'overlap'] }
          ]
        },
        {
          id: '10.5',
          level: 'A',
          title: { fr: 'Dans chaque page web, les déclarations CSS de couleurs de fond d\'élément et de police sont-elles correctement utilisées ?', en: 'In each web page, are CSS declarations of background colors and fonts correctly used?' },
          tests: [
            { id: '10.5.1', title: { fr: 'Couleur de fond avec couleur de texte', en: 'Background color with text color' }, tags: ['css', 'color', 'background'] },
            { id: '10.5.2', title: { fr: 'Couleur de texte avec couleur de fond', en: 'Text color with background color' }, tags: ['css', 'color', 'text'] },
            { id: '10.5.3', title: { fr: 'Couleurs des liens cohérentes', en: 'Consistent link colors' }, tags: ['css', 'link', 'color'] }
          ]
        },
        {
          id: '10.6',
          level: 'A',
          title: { fr: 'Dans chaque page web, chaque lien dont la nature n\'est pas évidente est-il visible par rapport au texte environnant ?', en: 'In each web page, is each link whose nature is not obvious visible compared to surrounding text?' },
          tests: [
            { id: '10.6.1', title: { fr: 'Lien visible par rapport au texte', en: 'Link visible compared to text' }, tags: ['link', 'visible', 'underline'] }
          ]
        },
        {
          id: '10.7',
          level: 'A',
          title: { fr: 'Dans chaque page web, pour chaque élément recevant le focus, la prise de focus est-elle visible ?', en: 'In each web page, for each element receiving focus, is the focus visible?' },
          tests: [
            { id: '10.7.1', title: { fr: 'Prise de focus visible', en: 'Visible focus' }, tags: ['focus', 'outline', 'visible'] }
          ]
        },
        {
          id: '10.8',
          level: 'A',
          title: { fr: 'Pour chaque page web, les contenus cachés ont-ils vocation à être ignorés par les technologies d\'assistance ?', en: 'For each web page, is hidden content intended to be ignored by assistive technologies?' },
          tests: [
            { id: '10.8.1', title: { fr: 'Contenus cachés ignorés', en: 'Hidden content ignored' }, tags: ['hidden', 'aria-hidden', 'display'] }
          ]
        },
        {
          id: '10.9',
          level: 'AA',
          title: { fr: 'Dans chaque page web, l\'information ne doit pas être donnée uniquement par la forme, taille ou position. Cette règle est-elle respectée ?', en: 'In each web page, information must not be given only by shape, size or position. Is this rule respected?' },
          tests: [
            { id: '10.9.1', title: { fr: 'Information pas uniquement visuelle', en: 'Information not only visual' }, tags: ['visual', 'semantic', 'text'] }
          ]
        },
        {
          id: '10.10',
          level: 'AA',
          title: { fr: 'Dans chaque page web, l\'information ne doit pas être donnée par la forme, taille ou position uniquement. Cette règle est-elle implémentée de façon pertinente ?', en: 'In each web page, is the rule about information not given by shape, size or position implemented relevantly?' },
          tests: [
            { id: '10.10.1', title: { fr: 'Alternative à l\'information visuelle', en: 'Alternative to visual information' }, tags: ['visual', 'alternative', 'text'] }
          ]
        },
        {
          id: '10.11',
          level: 'AA',
          title: { fr: 'Pour chaque page web, les contenus peuvent-ils être présentés sans avoir recours à un défilement vertical pour une fenêtre ayant une hauteur de 256 px ou à un défilement horizontal pour une fenêtre ayant une largeur de 320 px ?', en: 'For each web page, can content be presented without vertical scrolling for a 256px height window or horizontal scrolling for a 320px width window?' },
          tests: [
            { id: '10.11.1', title: { fr: 'Reflow sans défilement horizontal (320px)', en: 'Reflow without horizontal scrolling (320px)' }, tags: ['reflow', 'responsive', '320px'] },
            { id: '10.11.2', title: { fr: 'Reflow sans défilement vertical (256px)', en: 'Reflow without vertical scrolling (256px)' }, tags: ['reflow', 'responsive', '256px'] }
          ]
        },
        {
          id: '10.12',
          level: 'AA',
          title: { fr: 'Dans chaque page web, les propriétés d\'espacement du texte peuvent-elles être redéfinies par l\'utilisateur sans perte de contenu ou de fonctionnalité ?', en: 'In each web page, can text spacing properties be redefined by the user without loss of content or functionality?' },
          tests: [
            { id: '10.12.1', title: { fr: 'Espacement du texte modifiable', en: 'Text spacing modifiable' }, tags: ['text', 'spacing', 'line-height'] }
          ]
        },
        {
          id: '10.13',
          level: 'AA',
          title: { fr: 'Dans chaque page web, les contenus additionnels apparaissant à la prise de focus ou au survol d\'un composant d\'interface sont-ils contrôlables par l\'utilisateur ?', en: 'In each web page, is additional content appearing on focus or hover of an interface component controllable by the user?' },
          tests: [
            { id: '10.13.1', title: { fr: 'Contenu additionnel masquable', en: 'Additional content dismissable' }, tags: ['hover', 'focus', 'dismiss'] },
            { id: '10.13.2', title: { fr: 'Contenu additionnel survolable', en: 'Additional content hoverable' }, tags: ['hover', 'tooltip', 'persistent'] },
            { id: '10.13.3', title: { fr: 'Contenu additionnel persistant', en: 'Additional content persistent' }, tags: ['hover', 'focus', 'persistent'] }
          ]
        },
        {
          id: '10.14',
          level: 'AA',
          title: { fr: 'Dans chaque page web, les contenus additionnels apparaissant via les styles CSS uniquement peuvent-ils être rendus visibles au clavier et par tout dispositif de pointage ?', en: 'In each web page, can additional content appearing via CSS only be made visible by keyboard and any pointing device?' },
          tests: [
            { id: '10.14.1', title: { fr: 'Contenu CSS accessible au clavier', en: 'CSS content keyboard accessible' }, tags: ['css', 'content', 'keyboard'] }
          ]
        }
      ]
    },

    // ========================================================================
    // THÉMATIQUE 11 : FORMULAIRES (13 critères, 42 tests)
    // ========================================================================
    '11': {
      id: '11',
      title: { fr: 'Formulaires', en: 'Forms' },
      criteria: [
        {
          id: '11.1',
          level: 'A',
          title: { fr: 'Chaque champ de formulaire a-t-il une étiquette ?', en: 'Does each form field have a label?' },
          tests: [
            { id: '11.1.1', title: { fr: 'Champ avec label associé', en: 'Field with associated label' }, tags: ['form', 'label', 'for'] },
            { id: '11.1.2', title: { fr: 'Champ avec attribut title', en: 'Field with title attribute' }, tags: ['form', 'title', 'input'] },
            { id: '11.1.3', title: { fr: 'Champ avec aria-label', en: 'Field with aria-label' }, tags: ['form', 'aria-label'] },
            { id: '11.1.4', title: { fr: 'Champ avec aria-labelledby', en: 'Field with aria-labelledby' }, tags: ['form', 'aria-labelledby'] },
            { id: '11.1.5', title: { fr: 'Bouton avec intitulé visible', en: 'Button with visible label' }, tags: ['form', 'button', 'text'] }
          ]
        },
        {
          id: '11.2',
          level: 'A',
          title: { fr: 'Chaque étiquette associée à un champ de formulaire est-elle pertinente ?', en: 'Is each label associated with a form field relevant?' },
          tests: [
            { id: '11.2.1', title: { fr: 'Étiquette pertinente (label)', en: 'Relevant label (label)' }, tags: ['form', 'label', 'relevant'] },
            { id: '11.2.2', title: { fr: 'Étiquette pertinente (title)', en: 'Relevant label (title)' }, tags: ['form', 'title', 'relevant'] },
            { id: '11.2.3', title: { fr: 'Étiquette pertinente (aria-label)', en: 'Relevant label (aria-label)' }, tags: ['form', 'aria-label', 'relevant'] },
            { id: '11.2.4', title: { fr: 'Étiquette pertinente (aria-labelledby)', en: 'Relevant label (aria-labelledby)' }, tags: ['form', 'aria-labelledby', 'relevant'] },
            { id: '11.2.5', title: { fr: 'Intitulé de bouton pertinent', en: 'Relevant button label' }, tags: ['form', 'button', 'relevant'] },
            { id: '11.2.6', title: { fr: 'Étiquette visuellement accolée', en: 'Label visually adjacent' }, tags: ['form', 'label', 'visual'] }
          ]
        },
        {
          id: '11.3',
          level: 'AA',
          title: { fr: 'Dans chaque formulaire, chaque étiquette associée à un champ de formulaire ayant la même fonction et répété plusieurs fois dans une même page ou dans un ensemble de pages est-elle cohérente ?', en: 'In each form, is each label associated with a form field having the same function and repeated multiple times consistent?' },
          tests: [
            { id: '11.3.1', title: { fr: 'Étiquettes cohérentes dans la page', en: 'Consistent labels in the page' }, tags: ['form', 'label', 'consistent'] },
            { id: '11.3.2', title: { fr: 'Étiquettes cohérentes dans le site', en: 'Consistent labels in the site' }, tags: ['form', 'label', 'site'] }
          ]
        },
        {
          id: '11.4',
          level: 'A',
          title: { fr: 'Dans chaque formulaire, chaque étiquette de champ et son champ associé sont-ils accolés ?', en: 'In each form, are each field label and its associated field adjacent?' },
          tests: [
            { id: '11.4.1', title: { fr: 'Étiquette et champ accolés (label)', en: 'Label and field adjacent (label)' }, tags: ['form', 'label', 'adjacent'] },
            { id: '11.4.2', title: { fr: 'Étiquette et champ accolés (aria-labelledby)', en: 'Label and field adjacent (aria-labelledby)' }, tags: ['form', 'aria-labelledby', 'adjacent'] },
            { id: '11.4.3', title: { fr: 'Étiquette et champ accolés visuellement', en: 'Label and field visually adjacent' }, tags: ['form', 'label', 'visual'] }
          ]
        },
        {
          id: '11.5',
          level: 'A',
          title: { fr: 'Dans chaque formulaire, les champs de même nature sont-ils regroupés, si nécessaire ?', en: 'In each form, are fields of the same nature grouped if necessary?' },
          tests: [
            { id: '11.5.1', title: { fr: 'Champs de même nature regroupés', en: 'Same nature fields grouped' }, tags: ['form', 'fieldset', 'group'] }
          ]
        },
        {
          id: '11.6',
          level: 'A',
          title: { fr: 'Dans chaque formulaire, chaque regroupement de champs de même nature a-t-il une légende ?', en: 'In each form, does each grouping of fields of the same nature have a legend?' },
          tests: [
            { id: '11.6.1', title: { fr: 'Regroupement avec legend', en: 'Grouping with legend' }, tags: ['form', 'fieldset', 'legend'] }
          ]
        },
        {
          id: '11.7',
          level: 'A',
          title: { fr: 'Dans chaque formulaire, chaque légende associée à un regroupement de champs de même nature est-elle pertinente ?', en: 'In each form, is each legend associated with a grouping of same nature fields relevant?' },
          tests: [
            { id: '11.7.1', title: { fr: 'Légende pertinente', en: 'Relevant legend' }, tags: ['form', 'legend', 'relevant'] }
          ]
        },
        {
          id: '11.8',
          level: 'A',
          title: { fr: 'Dans chaque formulaire, les items de même nature d\'une liste de choix sont-ils regroupés de manière pertinente ?', en: 'In each form, are items of the same nature in a choice list grouped relevantly?' },
          tests: [
            { id: '11.8.1', title: { fr: 'Items regroupés avec optgroup', en: 'Items grouped with optgroup' }, tags: ['form', 'select', 'optgroup'] },
            { id: '11.8.2', title: { fr: 'Optgroup avec label', en: 'Optgroup with label' }, tags: ['form', 'optgroup', 'label'] },
            { id: '11.8.3', title: { fr: 'Label d\'optgroup pertinent', en: 'Relevant optgroup label' }, tags: ['form', 'optgroup', 'relevant'] }
          ]
        },
        {
          id: '11.9',
          level: 'A',
          title: { fr: 'Dans chaque formulaire, l\'intitulé de chaque bouton est-il pertinent ?', en: 'In each form, is each button label relevant?' },
          tests: [
            { id: '11.9.1', title: { fr: 'Intitulé de bouton pertinent', en: 'Relevant button label' }, tags: ['form', 'button', 'submit'] },
            { id: '11.9.2', title: { fr: 'Intitulé de bouton image pertinent', en: 'Relevant image button label' }, tags: ['form', 'input', 'image'] }
          ]
        },
        {
          id: '11.10',
          level: 'A',
          title: { fr: 'Dans chaque formulaire, le contrôle de saisie est-il utilisé de manière pertinente ?', en: 'In each form, is input control used relevantly?' },
          tests: [
            { id: '11.10.1', title: { fr: 'Champ obligatoire indiqué', en: 'Required field indicated' }, tags: ['form', 'required', 'aria-required'] },
            { id: '11.10.2', title: { fr: 'Type de données attendu indiqué', en: 'Expected data type indicated' }, tags: ['form', 'type', 'pattern'] },
            { id: '11.10.3', title: { fr: 'Format de saisie indiqué', en: 'Input format indicated' }, tags: ['form', 'format', 'placeholder'] },
            { id: '11.10.4', title: { fr: 'Exemple de saisie fourni', en: 'Input example provided' }, tags: ['form', 'example', 'help'] },
            { id: '11.10.5', title: { fr: 'Message d\'erreur pertinent', en: 'Relevant error message' }, tags: ['form', 'error', 'message'] },
            { id: '11.10.6', title: { fr: 'Message d\'erreur accessible', en: 'Accessible error message' }, tags: ['form', 'error', 'aria'] },
            { id: '11.10.7', title: { fr: 'Suggestion de correction fournie', en: 'Correction suggestion provided' }, tags: ['form', 'error', 'suggestion'] }
          ]
        },
        {
          id: '11.11',
          level: 'AA',
          title: { fr: 'Dans chaque formulaire, le contrôle de saisie est-il accompagné, si nécessaire, de suggestions facilitant la correction des erreurs de saisie ?', en: 'In each form, is input control accompanied by suggestions facilitating the correction of input errors if necessary?' },
          tests: [
            { id: '11.11.1', title: { fr: 'Suggestion de correction des erreurs', en: 'Error correction suggestion' }, tags: ['form', 'error', 'suggestion'] },
            { id: '11.11.2', title: { fr: 'Suggestion de correction pertinente', en: 'Relevant correction suggestion' }, tags: ['form', 'suggestion', 'relevant'] }
          ]
        },
        {
          id: '11.12',
          level: 'AA',
          title: { fr: 'Pour chaque formulaire qui modifie ou supprime des données, ou qui transmet des réponses à un test ou à un examen, ou dont la validation a des conséquences financières ou juridiques, les données saisies peuvent-elles être modifiées, mises à jour ou récupérées par l\'utilisateur ?', en: 'For each form that modifies or deletes data, or submits responses to a test or exam, or whose validation has financial or legal consequences, can the entered data be modified, updated or recovered by the user?' },
          tests: [
            { id: '11.12.1', title: { fr: 'Données modifiables avant validation', en: 'Data modifiable before validation' }, tags: ['form', 'data', 'modify'] },
            { id: '11.12.2', title: { fr: 'Confirmation avant validation définitive', en: 'Confirmation before final validation' }, tags: ['form', 'confirm', 'validation'] }
          ]
        },
        {
          id: '11.13',
          level: 'AA',
          title: { fr: 'La finalité d\'un champ de saisie peut-elle être déduite pour faciliter le remplissage automatique des champs avec les données de l\'utilisateur ?', en: 'Can the purpose of an input field be deduced to facilitate the automatic filling of fields with user data?' },
          tests: [
            { id: '11.13.1', title: { fr: 'Autocomplete avec valeur pertinente', en: 'Autocomplete with relevant value' }, tags: ['form', 'autocomplete', 'autofill'] }
          ]
        }
      ]
    },

    // ========================================================================
    // THÉMATIQUE 12 : NAVIGATION (11 critères, 27 tests)
    // ========================================================================
    '12': {
      id: '12',
      title: { fr: 'Navigation', en: 'Navigation' },
      criteria: [
        {
          id: '12.1',
          level: 'AA',
          title: { fr: 'Chaque ensemble de pages dispose-t-il de deux systèmes de navigation différents, au moins ?', en: 'Does each set of pages have at least two different navigation systems?' },
          tests: [
            { id: '12.1.1', title: { fr: 'Deux systèmes de navigation présents', en: 'Two navigation systems present' }, tags: ['nav', 'menu', 'sitemap', 'search'] }
          ]
        },
        {
          id: '12.2',
          level: 'AA',
          title: { fr: 'Dans chaque ensemble de pages, le menu et les barres de navigation sont-ils toujours à la même place ?', en: 'In each set of pages, are the menu and navigation bars always in the same place?' },
          tests: [
            { id: '12.2.1', title: { fr: 'Menu à la même place', en: 'Menu in the same place' }, tags: ['nav', 'menu', 'consistency'] }
          ]
        },
        {
          id: '12.3',
          level: 'AA',
          title: { fr: 'La page « plan du site » est-elle pertinente ?', en: 'Is the site map page relevant?' },
          tests: [
            { id: '12.3.1', title: { fr: 'Plan du site représentatif', en: 'Representative site map' }, tags: ['sitemap', 'complete'] },
            { id: '12.3.2', title: { fr: 'Liens du plan du site fonctionnels', en: 'Site map links functional' }, tags: ['sitemap', 'links'] },
            { id: '12.3.3', title: { fr: 'Plan du site à jour', en: 'Up-to-date site map' }, tags: ['sitemap', 'updated'] }
          ]
        },
        {
          id: '12.4',
          level: 'AA',
          title: { fr: 'Dans chaque ensemble de pages, la page « plan du site » est-elle atteignable de manière identique ?', en: 'In each set of pages, is the site map page reachable in an identical way?' },
          tests: [
            { id: '12.4.1', title: { fr: 'Lien vers plan du site à la même place', en: 'Link to site map in the same place' }, tags: ['sitemap', 'link', 'consistency'] },
            { id: '12.4.2', title: { fr: 'Lien vers plan du site même ordre', en: 'Link to site map same order' }, tags: ['sitemap', 'link', 'order'] },
            { id: '12.4.3', title: { fr: 'Lien vers plan du site même présentation', en: 'Link to site map same presentation' }, tags: ['sitemap', 'link', 'visual'] }
          ]
        },
        {
          id: '12.5',
          level: 'AA',
          title: { fr: 'Dans chaque ensemble de pages, le moteur de recherche est-il atteignable de manière identique ?', en: 'In each set of pages, is the search engine reachable in an identical way?' },
          tests: [
            { id: '12.5.1', title: { fr: 'Moteur de recherche à la même place', en: 'Search engine in the same place' }, tags: ['search', 'consistency'] },
            { id: '12.5.2', title: { fr: 'Moteur de recherche même ordre', en: 'Search engine same order' }, tags: ['search', 'order'] },
            { id: '12.5.3', title: { fr: 'Moteur de recherche même présentation', en: 'Search engine same presentation' }, tags: ['search', 'visual'] }
          ]
        },
        {
          id: '12.6',
          level: 'A',
          title: { fr: 'Les zones de regroupement de contenus présentes dans plusieurs pages web (zones d\'en-tête, de navigation principale, de contenu principal, de pied de page et de moteur de recherche) peuvent-elles être atteintes ou évitées ?', en: 'Can content grouping areas present in multiple web pages be reached or skipped?' },
          tests: [
            { id: '12.6.1', title: { fr: 'Zone identifiable par landmark ARIA', en: 'Area identifiable by ARIA landmark' }, tags: ['landmark', 'aria', 'role'] },
            { id: '12.6.2', title: { fr: 'Zone identifiable par balise HTML5', en: 'Area identifiable by HTML5 tag' }, tags: ['html5', 'header', 'nav', 'main', 'footer'] },
            { id: '12.6.3', title: { fr: 'Zone évitable par lien d\'évitement', en: 'Area skippable by skip link' }, tags: ['skip-link', 'anchor'] }
          ]
        },
        {
          id: '12.7',
          level: 'A',
          title: { fr: 'Dans chaque page web, un lien d\'évitement ou d\'accès rapide à la zone de contenu principal est-il présent ?', en: 'In each web page, is a skip link or quick access link to the main content area present?' },
          tests: [
            { id: '12.7.1', title: { fr: 'Lien d\'évitement présent', en: 'Skip link present' }, tags: ['skip-link', 'main', 'first'] },
            { id: '12.7.2', title: { fr: 'Lien d\'évitement fonctionnel', en: 'Skip link functional' }, tags: ['skip-link', 'anchor', 'focus'] }
          ]
        },
        {
          id: '12.8',
          level: 'A',
          title: { fr: 'Dans chaque page web, l\'ordre de tabulation est-il cohérent ?', en: 'In each web page, is the tab order consistent?' },
          tests: [
            { id: '12.8.1', title: { fr: 'Ordre de tabulation cohérent', en: 'Consistent tab order' }, tags: ['tabindex', 'focus', 'order'] },
            { id: '12.8.2', title: { fr: 'Ordre de tabulation pertinent', en: 'Relevant tab order' }, tags: ['tabindex', 'logical'] }
          ]
        },
        {
          id: '12.9',
          level: 'A',
          title: { fr: 'Dans chaque page web, la navigation ne doit pas contenir de piège au clavier. Cette règle est-elle respectée ?', en: 'In each web page, navigation must not contain keyboard traps. Is this rule respected?' },
          tests: [
            { id: '12.9.1', title: { fr: 'Pas de piège au clavier', en: 'No keyboard trap' }, tags: ['keyboard', 'trap', 'focus'] }
          ]
        },
        {
          id: '12.10',
          level: 'A',
          title: { fr: 'Dans chaque page web, les raccourcis clavier n\'utilisant qu\'une seule touche (lettre minuscule ou majuscule, ponctuation, chiffre ou symbole) sont-ils contrôlables par l\'utilisateur ?', en: 'In each web page, are keyboard shortcuts using only one key controllable by the user?' },
          tests: [
            { id: '12.10.1', title: { fr: 'Raccourci clavier désactivable', en: 'Keyboard shortcut can be disabled' }, tags: ['keyboard', 'shortcut', 'accesskey'] },
            { id: '12.10.2', title: { fr: 'Raccourci clavier reconfigurable', en: 'Keyboard shortcut reconfigurable' }, tags: ['keyboard', 'shortcut', 'config'] },
            { id: '12.10.3', title: { fr: 'Raccourci actif uniquement au focus', en: 'Shortcut active only on focus' }, tags: ['keyboard', 'shortcut', 'focus'] }
          ]
        },
        {
          id: '12.11',
          level: 'AA',
          title: { fr: 'Dans chaque page web, les contenus additionnels apparaissant au survol, à la prise de focus ou à l\'activation d\'un composant d\'interface sont-ils si nécessaire atteignables au clavier ?', en: 'In each web page, is additional content appearing on hover, focus, or activation of an interface component reachable by keyboard if necessary?' },
          tests: [
            { id: '12.11.1', title: { fr: 'Contenu additionnel atteignable au clavier', en: 'Additional content reachable by keyboard' }, tags: ['keyboard', 'hover', 'focus'] }
          ]
        }
      ]
    },

    // ========================================================================
    // THÉMATIQUE 13 : CONSULTATION (12 critères, 24 tests)
    // ========================================================================
    '13': {
      id: '13',
      title: { fr: 'Consultation', en: 'Consultation' },
      criteria: [
        {
          id: '13.1',
          level: 'A',
          title: { fr: 'Pour chaque page web, l\'utilisateur a-t-il le contrôle de chaque limite de temps modifiant le contenu ?', en: 'For each web page, does the user have control over each time limit that modifies content?' },
          tests: [
            { id: '13.1.1', title: { fr: 'Limite de temps contrôlable', en: 'Time limit controllable' }, tags: ['time', 'limit', 'control'] },
            { id: '13.1.2', title: { fr: 'Limite de temps supprimable', en: 'Time limit removable' }, tags: ['time', 'limit', 'remove'] },
            { id: '13.1.3', title: { fr: 'Limite de temps augmentable', en: 'Time limit extendable' }, tags: ['time', 'limit', 'extend'] },
            { id: '13.1.4', title: { fr: 'Avertissement avant expiration', en: 'Warning before expiration' }, tags: ['time', 'warning', 'expiration'] }
          ]
        },
        {
          id: '13.2',
          level: 'A',
          title: { fr: 'Dans chaque page web, l\'ouverture d\'une nouvelle fenêtre ne doit pas être déclenchée sans action de l\'utilisateur. Cette règle est-elle respectée ?', en: 'In each web page, opening a new window must not be triggered without user action. Is this rule respected?' },
          tests: [
            { id: '13.2.1', title: { fr: 'Pas d\'ouverture automatique de fenêtre', en: 'No automatic window opening' }, tags: ['window', 'popup', 'automatic'] }
          ]
        },
        {
          id: '13.3',
          level: 'A',
          title: { fr: 'Dans chaque page web, l\'ouverture d\'un nouveau contexte de navigation doit-elle être signalée à l\'utilisateur ?', en: 'In each web page, must the opening of a new navigation context be indicated to the user?' },
          tests: [
            { id: '13.3.1', title: { fr: 'Nouvelle fenêtre signalée', en: 'New window indicated' }, tags: ['window', 'target', 'blank'] }
          ]
        },
        {
          id: '13.4',
          level: 'A',
          title: { fr: 'Dans chaque page web, une tâche ne doit pas requérir de limite de temps pour être réalisée, sauf si elle se déroule en temps réel ou si cette limite de temps est essentielle. Cette règle est-elle respectée ?', en: 'In each web page, a task must not require a time limit to be completed unless it is real-time or the time limit is essential. Is this rule respected?' },
          tests: [
            { id: '13.4.1', title: { fr: 'Tâche sans limite de temps', en: 'Task without time limit' }, tags: ['time', 'task', 'essential'] }
          ]
        },
        {
          id: '13.5',
          level: 'A',
          title: { fr: 'Dans chaque page web, lors d\'une interruption de session authentifiée, les données saisies par l\'utilisateur sont-elles récupérées après ré-authentification ?', en: 'In each web page, when an authenticated session is interrupted, is the data entered by the user recovered after re-authentication?' },
          tests: [
            { id: '13.5.1', title: { fr: 'Données récupérées après ré-authentification', en: 'Data recovered after re-authentication' }, tags: ['session', 'data', 'recovery'] }
          ]
        },
        {
          id: '13.6',
          level: 'A',
          title: { fr: 'Dans chaque page web, pour chaque fichier en téléchargement, des informations relatives à sa consultation sont-elles présentes ?', en: 'In each web page, for each downloadable file, is information about its viewing present?' },
          tests: [
            { id: '13.6.1', title: { fr: 'Format du fichier indiqué', en: 'File format indicated' }, tags: ['download', 'format', 'type'] },
            { id: '13.6.2', title: { fr: 'Poids du fichier indiqué', en: 'File size indicated' }, tags: ['download', 'size', 'weight'] },
            { id: '13.6.3', title: { fr: 'Langue du fichier indiquée', en: 'File language indicated' }, tags: ['download', 'language', 'lang'] }
          ]
        },
        {
          id: '13.7',
          level: 'A',
          title: { fr: 'Dans chaque page web, chaque document bureautique en téléchargement possède-t-il, si nécessaire, une version accessible ?', en: 'In each web page, does each downloadable office document have an accessible version if necessary?' },
          tests: [
            { id: '13.7.1', title: { fr: 'Document bureautique accessible', en: 'Accessible office document' }, tags: ['download', 'document', 'accessible'] },
            { id: '13.7.2', title: { fr: 'Version accessible alternative', en: 'Alternative accessible version' }, tags: ['download', 'alternative', 'html'] },
            { id: '13.7.3', title: { fr: 'Document conforme au RGAA', en: 'Document compliant with RGAA' }, tags: ['download', 'document', 'rgaa'] }
          ]
        },
        {
          id: '13.8',
          level: 'A',
          title: { fr: 'Dans chaque page web, chaque contenu cryptique (art ASCII, émoticône, syntaxe cryptique) a-t-il une alternative ?', en: 'In each web page, does each cryptic content have an alternative?' },
          tests: [
            { id: '13.8.1', title: { fr: 'Alternative au contenu cryptique', en: 'Alternative to cryptic content' }, tags: ['cryptic', 'emoji', 'ascii'] },
            { id: '13.8.2', title: { fr: 'Alternative pertinente au contenu cryptique', en: 'Relevant alternative to cryptic content' }, tags: ['cryptic', 'alternative', 'relevant'] }
          ]
        },
        {
          id: '13.9',
          level: 'A',
          title: { fr: 'Dans chaque page web, les expressions inhabituelles, les expressions idiomatiques ou le jargon sont-ils explicités ?', en: 'In each web page, are unusual expressions, idioms or jargon explained?' },
          tests: [
            { id: '13.9.1', title: { fr: 'Définition des expressions inhabituelles', en: 'Definition of unusual expressions' }, tags: ['definition', 'jargon', 'abbr'] }
          ]
        },
        {
          id: '13.10',
          level: 'A',
          title: { fr: 'Dans chaque page web, les changements brusques de luminosité ou les effets de flash sont-ils correctement utilisés ?', en: 'In each web page, are sudden brightness changes or flash effects correctly used?' },
          tests: [
            { id: '13.10.1', title: { fr: 'Pas de flash > 3 par seconde', en: 'No flash > 3 per second' }, tags: ['flash', 'seizure', 'animation'] }
          ]
        },
        {
          id: '13.11',
          level: 'A',
          title: { fr: 'Dans chaque page web, les contenus en mouvement ou clignotants sont-ils contrôlables par l\'utilisateur ?', en: 'In each web page, is moving or blinking content controllable by the user?' },
          tests: [
            { id: '13.11.1', title: { fr: 'Contenu en mouvement contrôlable', en: 'Moving content controllable' }, tags: ['animation', 'motion', 'pause'] },
            { id: '13.11.2', title: { fr: 'Contenu clignotant contrôlable', en: 'Blinking content controllable' }, tags: ['blink', 'animation', 'pause'] },
            { id: '13.11.3', title: { fr: 'Contenu en mouvement stoppable', en: 'Moving content stoppable' }, tags: ['animation', 'stop', 'control'] }
          ]
        },
        {
          id: '13.12',
          level: 'A',
          title: { fr: 'Dans chaque page web, les contenus en mouvement ou clignotants peuvent-ils être arrêtés ou mis en pause ?', en: 'In each web page, can moving or blinking content be stopped or paused?' },
          tests: [
            { id: '13.12.1', title: { fr: 'Animation avec mécanisme de pause', en: 'Animation with pause mechanism' }, tags: ['animation', 'pause', 'button'] }
          ]
        }
      ]
    }
  }
};

// Export for use in app.js
if (typeof module !== 'undefined' && module.exports) {
  module.exports = RGAA41_REGISTRY;
}
