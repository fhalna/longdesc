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
    legacyIndexPath: 'tests/legacy/index-original.html',
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
  // Test Data Registry
  // ==========================================================================
  const testsRegistry = {
    'rgaa-1': {
      id: 'rgaa-1',
      title: {
        fr: 'Images',
        en: 'Images'
      },
      criteria: [
        {
          id: '1.1',
          title: {
            fr: 'Chaque image a-t-elle une alternative textuelle ?',
            en: 'Does each image have a text alternative?'
          },
          tests: [
            {
              id: '1.1.1',
              title: {
                fr: 'Chaque image (balise img) a-t-elle un attribut alt ?',
                en: 'Does each image (img tag) have an alt attribute?'
              },
              tags: ['img', 'alt', 'basic'],
              element: 'img'
            },
            {
              id: '1.1.2',
              title: {
                fr: 'Chaque zone (balise area) d\'une image réactive a-t-elle un attribut alt ?',
                en: 'Does each area (area tag) of an image map have an alt attribute?'
              },
              tags: ['area', 'map', 'alt'],
              element: 'area'
            },
            {
              id: '1.1.3',
              title: {
                fr: 'Chaque bouton de formulaire a-t-il un attribut alt ?',
                en: 'Does each form button have an alt attribute?'
              },
              tags: ['input', 'image', 'form'],
              element: 'input[type="image"]'
            },
            {
              id: '1.1.4',
              title: {
                fr: 'Chaque zone cliquable d\'une image réactive côté serveur a-t-elle un lien équivalent ?',
                en: 'Does each clickable area of a server-side image map have an equivalent link?'
              },
              tags: ['area', 'map', 'server-side'],
              element: 'area'
            }
          ]
        },
        {
          id: '1.2',
          title: {
            fr: 'Pour chaque image de décoration ayant une alternative textuelle, cette alternative est-elle vide ?',
            en: 'For each decorative image with a text alternative, is this alternative empty?'
          },
          tests: [
            {
              id: '1.2.1',
              title: {
                fr: 'Chaque image de décoration (balise img) sans légende satisfait-elle aux conditions ?',
                en: 'Does each decorative image (img tag) without caption meet the conditions?'
              },
              tags: ['img', 'decorative', 'alt'],
              element: 'img'
            }
          ]
        }
      ]
    },
    'rgaa-8': {
      id: 'rgaa-8',
      title: {
        fr: 'Éléments obligatoires',
        en: 'Mandatory elements'
      },
      criteria: [
        {
          id: '8.2',
          title: {
            fr: 'Pour chaque page web, le code source est-il valide ?',
            en: 'For each web page, is the source code valid?'
          },
          tests: [
            {
              id: '8.2.1',
              title: {
                fr: 'Le code source de chaque page web est-il valide selon le type de document ?',
                en: 'Is the source code of each web page valid according to the document type?'
              },
              tags: ['html', 'validation', 'doctype'],
              element: 'html'
            }
          ]
        }
      ]
    },
    'rgaa-12': {
      id: 'rgaa-12',
      title: {
        fr: 'Navigation',
        en: 'Navigation'
      },
      criteria: [
        {
          id: '12.1',
          title: {
            fr: 'Chaque ensemble de pages dispose-t-il de deux systèmes de navigation différents ?',
            en: 'Does each set of pages have two different navigation systems?'
          },
          tests: [
            {
              id: '12.1.1',
              title: {
                fr: 'Chaque ensemble de pages web dispose-t-il d\'au moins deux systèmes de navigation ?',
                en: 'Does each set of web pages have at least two navigation systems?'
              },
              tags: ['nav', 'sitemap', 'navigation'],
              element: 'nav'
            }
          ]
        },
        {
          id: '12.2',
          title: {
            fr: 'Dans chaque ensemble de pages, le menu et les barres de navigation sont-ils toujours à la même place ?',
            en: 'In each set of pages, are the menu and navigation bars always in the same place?'
          },
          tests: [
            {
              id: '12.2.1',
              title: {
                fr: 'Dans chaque ensemble de pages web, le menu de navigation principal est-il à la même place ?',
                en: 'In each set of web pages, is the main navigation menu in the same place?'
              },
              tags: ['nav', 'consistency', 'menu'],
              element: 'nav'
            }
          ]
        },
        {
          id: '12.10',
          title: {
            fr: 'Les raccourcis clavier sont-ils contrôlables par l\'utilisateur ?',
            en: 'Are keyboard shortcuts controllable by the user?'
          },
          tests: [
            {
              id: '12.10.3',
              title: {
                fr: 'Les raccourcis clavier utilisent-ils des touches modificatrices ?',
                en: 'Do keyboard shortcuts use modifier keys?'
              },
              tags: ['keyboard', 'shortcuts', 'accessibility'],
              element: 'body'
            }
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
      html += `
        <li class="nav-tree__item">
          <button class="nav-tree__btn" aria-expanded="false" data-theme="${theme.id}">
            <svg class="nav-tree__icon" viewBox="0 0 20 20" fill="currentColor">
              <path fill-rule="evenodd" d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z" clip-rule="evenodd" />
            </svg>
            ${theme.title[state.lang]}
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
    // Toggle theme expansion
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

    // Test link clicks
    DOM.navTree.querySelectorAll('.nav-tree__link').forEach(link => {
      link.addEventListener('click', (e) => {
        e.preventDefault();
        const testId = link.dataset.testId;
        loadTest(testId);

        // Update active state
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

    // Build test viewer HTML
    const viewerHtml = `
      <div class="test-viewer__header">
        <h2 class="test-viewer__title">Test ${testInfo.id}</h2>
        <div class="test-viewer__meta">
          ${testInfo.tags.map(tag => `<span class="tag tag--primary">${tag}</span>`).join('')}
        </div>
      </div>
      <div class="test-viewer__content">
        <p>${testInfo.title[state.lang]}</p>

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
                src="${CONFIG.legacyIndexPath}#test-${testInfo.id.replace(/\./g, '-')}"
                title="${state.lang === 'fr' ? 'Exemples conformes' : 'Good samples'}"
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
                src="${CONFIG.legacyIndexPath}#test-${testInfo.id.replace(/\./g, '-')}"
                title="${state.lang === 'fr' ? 'Exemples non conformes' : 'Bad samples'}"
              ></iframe>
            </div>
          </div>
        </div>

        <div class="code-preview">
          <div class="code-preview__header">
            <span>${state.lang === 'fr' ? 'Code source' : 'Source code'}</span>
            <button class="header__btn" data-action="copy-code">
              ${state.lang === 'fr' ? 'Copier' : 'Copy'}
            </button>
          </div>
          <div class="code-preview__content">
            <pre class="code-preview__code" id="code-preview-content">&lt;!-- Code will be loaded dynamically --&gt;</pre>
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
            <tr>
              <td>Axe</td>
              <td><span class="tools-table__status tools-table__status--na">-</span></td>
              <td><span class="tools-table__status tools-table__status--na">-</span></td>
            </tr>
            <tr>
              <td>Wave</td>
              <td><span class="tools-table__status tools-table__status--na">-</span></td>
              <td><span class="tools-table__status tools-table__status--na">-</span></td>
            </tr>
            <tr>
              <td>Lighthouse</td>
              <td><span class="tools-table__status tools-table__status--na">-</span></td>
              <td><span class="tools-table__status tools-table__status--na">-</span></td>
            </tr>
            <tr>
              <td>Pa11y</td>
              <td><span class="tools-table__status tools-table__status--na">-</span></td>
              <td><span class="tools-table__status tools-table__status--na">-</span></td>
            </tr>
          </tbody>
        </table>
      </div>
    `;

    // Update main content
    const testViewerContainer = document.getElementById('test-viewer-container');
    if (testViewerContainer) {
      testViewerContainer.innerHTML = viewerHtml;
    }

    // Update URL hash
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
    // Pass/fail counts would come from actual test results
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

    // Apply visual filtering to nav items
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

    // Rebuild navigation with new language
    buildNavigation();

    // Reload current test if any
    if (state.currentTest) {
      loadTest(state.currentTest.id);
    }

    // Update language toggle button
    if (DOM.langToggle) {
      DOM.langToggle.textContent = state.lang.toUpperCase();
    }
  }

  // ==========================================================================
  // Raw Mode
  // ==========================================================================
  function openRawMode() {
    window.open(CONFIG.legacyIndexPath, '_blank');
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

      // Expand parent and highlight nav item
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
    // Language toggle
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

    // Hash changes
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
      html += `
        <div class="criterion-section">
          <div class="criterion-section__header">
            <div class="criterion-section__number">${theme.id.replace('rgaa-', '')}</div>
            <div>
              <h2 class="criterion-section__title">${theme.title[state.lang]}</h2>
              <p class="criterion-section__description">${theme.criteria.length} ${state.lang === 'fr' ? 'critères' : 'criteria'}</p>
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

    // Handle initial hash
    if (window.location.hash) {
      handleHashChange();
    }

    console.log('Longdesc Test Suite initialized');
  }

  // Run when DOM is ready
  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', init);
  } else {
    init();
  }

})();
