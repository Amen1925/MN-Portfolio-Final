// Translation system
  let currentLanguage = 'en';

  const translations = {
    en: {
      nav_home: 'Home',
      nav_about: 'About',
      nav_portfolio: 'Portfolio',
      nav_showreel: 'Showreel',
      nav_awards: 'Awards',
      nav_contact: 'Contact',
      site_subtitle: 'Audio Engineer • Sound Designer',
      home_title: 'Shaping Emotion Through Sound',
      home_text: 'I design immersive soundscapes that amplify narrative tension and emotional depth. From atmospheric layers to precise Foley work, my approach blends technical craft with storytelling instinct, building worlds that resonate across drama, sci-fi, horror, and war cinema.',
      home_button: 'Watch Showreel',
      about_title: 'About Me',
      about_text_p1: 'Amen Allah Lamrani is a Tunisian Audio Engineer and Sound Designer focused on cinematic sound creation. His work combines technical precision with emotional storytelling, building depth, tension, and atmosphere in every project.',
      about_text_p2: 'Specializing in sound editing, Foley, production sound, and mixing, he crafts immersive soundscapes that elevate narrative impact across drama, sci-fi, horror, and war films.',
      portfolio_title: 'Portfolio',
      portfolio_subtitle: 'A selection of my audio work for cinematic projects.',
      portfolio_feature_films: 'Feature Films',
      portfolio_short_films: 'Short Films',
      featured_label: 'FEATURED',
      featured_title: 'A Quiet Place – Birth Scene',
      featured_role: 'Sound Designer • Foley Artist • Re-Recording Mixer',
      featured_desc: 'A full sonic reconstruction of the childbirth sequence from A Quiet Place, exploring silence, tension, and emotional intensity in horror cinema.',
      project_needle_title: 'The Needle',
      project_needle_role: 'Foley Artist • Sound Editor',
      project_needle_desc: 'A feature film about a young Tunisian couple facing a critical decision after the birth of their intersex child. I worked as Sound Editor and Foley Artist, shaping the film\'s soundscape and emotional depth.',
      project_rolling_title: 'Rolling Dice',
      project_rolling_role: 'Boom Operator • Sound Editor',
      project_rolling_desc: 'A dramatic western film about two lovers escaping their past.',
      project_piece_title: 'La Pièce',
      project_piece_role: 'Writer • Sound Designer • Mixer',
      project_piece_desc: 'Immersive radio drama set during the Tunisian revolution.',
      project_letter_title: 'The Last Letter',
      project_letter_role: 'Boom Operator • Sound Editor',
      project_letter_desc: 'War drama exploring duty and personal tragedy.',
      project_salt_title: 'Rotten Salt',
      project_salt_role: 'Sound Engineer • Mixer',
      project_salt_desc: 'Emotional drama about grief and denial.',
      project_salvation_title: 'Salvation',
      project_salvation_role: 'Boom Operator • Sound Editor',
      project_salvation_desc: 'Sci-fi drama about a humanoid robot.',
      project_other_title: 'The Other Side',
      project_other_role: 'Sound Engineer • Mixer',
      project_other_desc: 'Family drama centered on artistic identity.',
      showreel_title: 'Showreel',
      showreel_text: 'A selection of my work in audio production for cinematic projects. This showreel highlights my focus on immersive atmospheres, narrative tension, and emotional precision across drama, sci-fi, horror, and war genres.',
      awards_title: 'Accolades & Awards',
      award_first_prize: 'First Prize',
      award_esad_title: 'ESAD Valedictorian',
      award_esad_desc: 'Sound & Mixing Excellence',
      award_cmca_title: 'CMCA Mediterranean',
      award_cmca_desc: 'Short Film Competition',
      festival_fifak_name: 'Kélibia International Amateur Film Festival',
      festival_jcc_name: 'Carthage Film Festival',
      festival_liftoff_name: 'Lift-Off Global Network',
      festival_hgff_name: 'Hollywood Guerrilla Film Festival',
      festival_yiff_name: 'Yeast International Film Festival',
      festival_miff_name: 'Montecito International Film Festival',
      festival_selection: 'Official Selection',
      contact_title: "Let's Collaborate",
      contact_text: 'For collaborations, sound design, or film projects',
      contact_email: 'Email',
      contact_phone: 'Phone',
      contact_linkedin: 'LinkedIn',
      contact_location: 'Location',
      contact_location_value: 'Porto, Portugal',
      contact_available: 'Available for new projects',
      footer_rights: 'All rights reserved.',
      footer_tagline: 'Crafting Cinematic Sound',
      tag_horror: 'HORROR',
      tag_western: 'WESTERN',
      tag_radio: 'RADIO',
      tag_war: 'WAR',
      tag_drama: 'DRAMA',
      tag_scifi: 'SCI-FI',
      skill_sound_design: 'SOUND DESIGN',
      skill_foley: 'FOLEY',
      skill_mixing: 'MIXING',
      skill_editing: 'SOUND EDITING'
    },
    fr: {
      nav_home: 'Accueil',
      nav_about: 'À Propos',
      nav_portfolio: 'Portfolio',
      nav_showreel: 'Showreel',
      nav_awards: 'Récompenses',
      nav_contact: 'Contact',
      site_subtitle: 'Ingénieur du Son • Sound Designer',
      home_title: 'Sculpter l\'Émotion par le Son',
      home_text: 'Je conçois des paysages sonores immersifs qui amplifient la tension narrative et la profondeur émotionnelle. Des couches atmosphériques au travail Foley précis, mon approche allie savoir-faire technique et instinct narratif, créant des univers qui résonnent dans le cinéma dramatique, de science-fiction, d\'horreur et de guerre.',
      home_button: 'Voir la Bande Démo',
      about_title: 'À Propos de Moi',
      about_text_p1: 'Amen Allah Lamrani est un ingénieur du son et sound designer tunisien spécialisé dans la création sonore cinématographique. Son travail combine précision technique et narration émotionnelle, créant profondeur, tension et atmosphère dans chaque projet.',
      about_text_p2: 'Spécialisé dans le montage sonore, le Foley, la prise de son et le mixage, il crée des paysages sonores immersifs qui amplifient l\'impact narratif dans les films dramatiques, de science-fiction, d\'horreur et de guerre.',
      portfolio_title: 'Portfolio',
      portfolio_subtitle: 'Une sélection de mon travail audio pour des projets cinématographiques.',
      portfolio_feature_films: 'Longs Métrages',
      portfolio_short_films: 'Courts Métrages',
      featured_label: 'EN VEDETTE',
      featured_title: 'A Quiet Place, Scène de Naissance',
      featured_role: 'Sound Designer • Artiste Foley • Mixeur',
      featured_desc: 'Une reconstruction sonore complète de la séquence d\'accouchement de A Quiet Place, explorant le silence, la tension et l\'intensité émotionnelle dans le cinéma d\'horreur.',
      project_needle_title: 'L\'Aiguille',
      project_needle_role: 'Artiste Foley • Monteur Son',
      project_needle_desc: 'Un long métrage sur un jeune couple tunisien confronté à une décision critique après la naissance de leur enfant intersexe. J\'ai travaillé en tant que Monteur Son et Artiste Foley, façonnant le paysage sonore et la profondeur émotionnelle du film.',
      project_rolling_title: 'Rolling Dice',
      project_rolling_role: 'Perchman • Monteur Son',
      project_rolling_desc: 'Un film western dramatique sur deux amants fuyant leur passé.',
      project_piece_title: 'La Pièce',
      project_piece_role: 'Auteur • Sound Designer • Mixeur',
      project_piece_desc: 'Drame radiophonique immersif situé pendant la révolution tunisienne.',
      project_letter_title: 'The Last Letter',
      project_letter_role: 'Perchman • Monteur Son',
      project_letter_desc: 'Drame de guerre explorant le devoir et la tragédie personnelle.',
      project_salt_title: 'Rotten Salt',
      project_salt_role: 'Ingénieur Son • Mixeur',
      project_salt_desc: 'Drame émotionnel sur le deuil et le déni.',
      project_salvation_title: 'Salvation',
      project_salvation_role: 'Perchman • Monteur Son',
      project_salvation_desc: 'Drame de science-fiction sur un robot humanoïde.',
      project_other_title: 'The Other Side',
      project_other_role: 'Ingénieur Son • Mixeur',
      project_other_desc: 'Drame familial centré sur l\'identité artistique.',
      showreel_title: 'Showreel',
      showreel_text: 'Une sélection de mon travail en production audio pour des projets cinématographiques. Ce showreel met en avant mon attention aux atmosphères immersives, à la tension narrative et à la précision émotionnelle dans les genres dramatiques, science-fiction, horreur et guerre.',
      awards_title: 'Distinctions & Récompenses',
      award_first_prize: 'Premier Prix',
      award_esad_title: 'Major de Promotion ESAD',
      award_esad_desc: 'Excellence en Son & Mixage',
      award_cmca_title: 'CMCA Méditerranée',
      award_cmca_desc: 'Compétition Court Métrage',
      festival_fifak_name: 'Festival International du Film Amateur de Kélibia',
      festival_jcc_name: 'Journées Cinématographiques de Carthage',
      festival_liftoff_name: 'Lift-Off Global Network',
      festival_hgff_name: 'Festival du Film Guerrilla d\'Hollywood',
      festival_yiff_name: 'Festival International du Film Yeast',
      festival_miff_name: 'Festival International du Film de Montecito',
      festival_selection: 'Sélection Officielle',
      contact_title: 'Collaborons Ensemble',
      contact_text: 'Pour des collaborations, du sound design ou des projets cinématographiques',
      contact_email: 'Email',
      contact_phone: 'Téléphone',
      contact_linkedin: 'LinkedIn',
      contact_location: 'Localisation',
      contact_location_value: 'Porto, Portugal',
      contact_available: 'Disponible pour de nouveaux projets',
      footer_rights: 'Tous droits réservés.',
      footer_tagline: 'Créer le Son Cinématographique',
      tag_horror: 'HORREUR',
      tag_western: 'WESTERN',
      tag_radio: 'RADIO',
      tag_war: 'GUERRE',
      tag_drama: 'DRAME',
      tag_scifi: 'SCI-FI',
      skill_sound_design: 'SOUND DESIGN',
      skill_foley: 'FOLEY',
      skill_mixing: 'MIXAGE',
      skill_editing: 'MONTAGE SON'
    }
  };

  function switchLanguage(lang) {
    currentLanguage = lang;
    
    // Update all elements with data-lang-key
    const elements = document.querySelectorAll('[data-lang-key]');
    elements.forEach(function(el) {
      const key = el.getAttribute('data-lang-key');
      if (translations[lang] && translations[lang][key]) {
        el.textContent = translations[lang][key];
      }
    });

    // Update language button states
    const langButtons = document.querySelectorAll('.lang-btn');
    langButtons.forEach(function(btn) {
      if (btn.getAttribute('data-lang') === lang) {
        btn.classList.add('bg-[#C9A961]', 'text-black');
        btn.classList.remove('text-slate-400');
      } else {
        btn.classList.remove('bg-[#C9A961]', 'text-black');
        btn.classList.add('text-slate-400');
      }
    });

    // Update complex content
    updateComplexContent(lang);
  }

  function updateComplexContent(lang) {
    const t = translations[lang];
    
    // About text (has two paragraphs)
    const aboutTextEl = document.getElementById('about-text');
    if (aboutTextEl) {
      aboutTextEl.innerHTML = t.about_text_p1 + '<br /><br />' + t.about_text_p2;
    }

    // Footer
    const footerText = document.querySelector('footer p:first-child');
    if (footerText) {
      const year = new Date().getFullYear();
      footerText.innerHTML = '© ' + year + ' Amen Allah Lamrani. ' + t.footer_rights;
    }
  }

  // Navigation system
  let currentPage = 'home';

  function navigateTo(pageName) {
    // Hide all pages
    const pages = document.querySelectorAll('.page');
    pages.forEach(function(page) {
      page.classList.remove('active');
    });

    // Show target page
    const targetPage = document.getElementById('page-' + pageName);
    if (targetPage) {
      targetPage.classList.add('active');
      currentPage = pageName;
      
      // Scroll to top
      const wrapper = document.querySelector('.app-wrapper');
      if (wrapper) {
        wrapper.scrollTop = 0;
      }
    }

    // Update active nav link
    const navLinks = document.querySelectorAll('.nav-link');
    navLinks.forEach(function(link) {
      link.classList.remove('active');
      if (link.getAttribute('data-page') === pageName) {
        link.classList.add('active');
      }
    });
  }

  // Setup navigation links
  document.addEventListener('DOMContentLoaded', function() {
    const navLinks = document.querySelectorAll('.nav-link');
    navLinks.forEach(function(link) {
      link.addEventListener('click', function(e) {
        e.preventDefault();
        const pageName = this.getAttribute('data-page');
        navigateTo(pageName);
      });
    });

    // Set initial active state
    navigateTo('home');
    
    // Initialize language
    switchLanguage('en');
  });

  // Footer year
  const footerYear = document.getElementById('footer-year');
  if (footerYear) {
    footerYear.textContent = new Date().getFullYear().toString();
  }

  // Element SDK integration
  (function() {
    if (!window.elementSdk) return;

    const defaultConfig = {
      background_color: "#0d0a08",
      surface_color: "#1a1410",
      text_color: "#D4AF37",
      primary_action_color: "#D4AF37",
      secondary_action_color: "#B8860B",
      font_family: "Montserrat",
      font_size: 16,
      home_title: "Shaping Emotion Through Sound",
      home_text: "I design immersive soundscapes that amplify narrative tension and emotional depth. From atmospheric layers to precise Foley work, my approach blends technical craft with storytelling instinct, building worlds that resonate across drama, sci-fi, horror, and war cinema.",
      home_button: "Watch Showreel",
      about_title: "About Me",
      about_text: "Amen Allah Lamrani is a Tunisian Audio Engineer and Sound Designer focused on cinematic sound creation. His work combines technical precision with emotional storytelling, building depth, tension, and atmosphere in every project.\n\nSpecializing in sound editing, Foley, production sound, and mixing, he crafts immersive soundscapes that elevate narrative impact across drama, sci-fi, horror, and war films.",
      portfolio_title: "Portfolio",
      portfolio_subtitle: "A selection of my audio work for cinematic projects.",
      showreel_title: "Showreel",
      showreel_text: "A selection of my work in audio production for cinematic projects. This showreel highlights my focus on immersive atmospheres, narrative tension, and emotional precision across drama, sci-fi, horror, and war genres.",
      awards_title: "Accolades & Awards",
      contact_title: "Let's Collaborate",
      contact_text: "For collaborations, sound design, or film projects"
    };

    function applyConfig(config) {
      const current = Object.assign({}, defaultConfig, config || {});

      // Apply colors
      const root = document.querySelector('.app-wrapper');
      if (root) {
        root.style.backgroundColor = current.background_color;
      }

      // Apply text color to gold elements
      const goldElements = document.querySelectorAll('.text-\\[\\#C9A961\\]');
      goldElements.forEach(function(el) {
        el.style.color = current.text_color;
      });

      // Apply primary action color
      const primaryElements = document.querySelectorAll('.bg-gradient-to-r');
      primaryElements.forEach(function(el) {
        el.style.background = `linear-gradient(to right, ${current.primary_action_color}, ${current.secondary_action_color})`;
      });

      // Font family and size
      const baseFont = current.font_family || defaultConfig.font_family;
      const baseSize = Number(current.font_size || defaultConfig.font_size) || 16;
      const fontStack = baseFont + ", sans-serif";
      const bodyFontStack = "Open Sans, sans-serif";

      if (root) {
        root.style.fontFamily = bodyFontStack;
        root.style.fontSize = baseSize + 'px';
      }

      // Apply heading font
      const headings = document.querySelectorAll('h1, h2, h3, h4, h5, h6, .nav-link, button');
      headings.forEach(function(el) {
        el.style.fontFamily = fontStack;
      });

      // Update text content
      const homeTitleEl = document.getElementById('home-title');
      if (homeTitleEl) homeTitleEl.textContent = current.home_title;

      const homeTextEl = document.getElementById('home-text');
      if (homeTextEl) homeTextEl.textContent = current.home_text;

      const homeBtnText = document.getElementById('home-button-text');
      if (homeBtnText) homeBtnText.textContent = current.home_button;

      const aboutTitleEl = document.getElementById('about-title');
      if (aboutTitleEl) aboutTitleEl.textContent = current.about_title;

      const aboutTextEl = document.getElementById('about-text');
      if (aboutTextEl) aboutTextEl.textContent = current.about_text;

      const portfolioTitleEl = document.getElementById('portfolio-title');
      if (portfolioTitleEl) portfolioTitleEl.textContent = current.portfolio_title;

      const portfolioSubtitleEl = document.getElementById('portfolio-subtitle');
      if (portfolioSubtitleEl) portfolioSubtitleEl.textContent = current.portfolio_subtitle;

      const showreelTitleEl = document.getElementById('showreel-title');
      if (showreelTitleEl) showreelTitleEl.textContent = current.showreel_title;

      const showreelTextEl = document.getElementById('showreel-text');
      if (showreelTextEl) showreelTextEl.textContent = current.showreel_text;

      const awardsTitleEl = document.getElementById('awards-title');
      if (awardsTitleEl) awardsTitleEl.textContent = current.awards_title;

      const contactTitleEl = document.getElementById('contact-title');
      if (contactTitleEl) contactTitleEl.textContent = current.contact_title;

      const contactTextEl = document.getElementById('contact-text');
      if (contactTextEl) contactTextEl.textContent = current.contact_text;
    }

    window.elementSdk.init({
      defaultConfig: defaultConfig,
      onConfigChange: async function(config) {
        applyConfig(config);
      },
      mapToCapabilities: function(config) {
        const current = Object.assign({}, defaultConfig, config || {});

        return {
          recolorables: [
            {
              get: function() { return current.background_color; },
              set: function(value) { window.elementSdk.setConfig({ background_color: value }); }
            },
            {
              get: function() { return current.surface_color; },
              set: function(value) { window.elementSdk.setConfig({ surface_color: value }); }
            },
            {
              get: function() { return current.text_color; },
              set: function(value) { window.elementSdk.setConfig({ text_color: value }); }
            },
            {
              get: function() { return current.primary_action_color; },
              set: function(value) { window.elementSdk.setConfig({ primary_action_color: value }); }
            },
            {
              get: function() { return current.secondary_action_color; },
              set: function(value) { window.elementSdk.setConfig({ secondary_action_color: value }); }
            }
          ],
          borderables: [],
          fontEditable: {
            get: function() { return current.font_family; },
            set: function(value) { window.elementSdk.setConfig({ font_family: value }); }
          },
          fontSizeable: {
            get: function() { return current.font_size; },
            set: function(value) { window.elementSdk.setConfig({ font_size: value }); }
          }
        };
      },
      mapToEditPanelValues: function(config) {
        const current = Object.assign({}, defaultConfig, config || {});
        return new Map([
          ["home_title", current.home_title],
          ["home_text", current.home_text],
          ["home_button", current.home_button],
          ["about_title", current.about_title],
          ["about_text", current.about_text],
          ["portfolio_title", current.portfolio_title],
          ["portfolio_subtitle", current.portfolio_subtitle],
          ["showreel_title", current.showreel_title],
          ["showreel_text", current.showreel_text],
          ["awards_title", current.awards_title],
          ["contact_title", current.contact_title],
          ["contact_text", current.contact_text]
        ]);
      }
    });

    applyConfig(window.elementSdk.config || defaultConfig);
  })();
