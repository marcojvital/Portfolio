const siteContent = {
  // ===== EASY EDIT ZONE =====
  // Update text here instead of in the HTML when possible.
  meta: {
    title: 'Marco Vital | Mechanical Engineering',
    description: 'Marco Vital — mechanical engineering portfolio'
  },
  brand: {
    name: 'Marco Vital',
    subtitle: 'Mechanical Engineering',
    school: 'Mechanical Engineering @ UMass Amherst'
  },
  contact: {
    email: '___ placeholder',
    phone: '___ placeholder',
    emailHref: 'mailto:___',
    phoneHref: 'tel:___'
  },
  assets: {
    profileImage: 'assets/images/profile-placeholder.svg',
    model: 'assets/models/test-model.glb'
  },
  navigation: {
    home: 'Home',
    experience: 'Work Experience',
    robotics: 'Robotics',
    fsae: 'FSAE',
    skills: 'Skills',
    timeline: 'Timeline'
  },
  home: {
    eyebrow: 'Mechanical Engineering @ UMass Amherst',
    heading: 'Marco Vital',
    intro: 'Currently working with UMass Robotics and Formula SAE.',
    experienceButton: 'View current co-op',
    timelineButton: 'See timeline',
    picturePlaceholder: 'Picture Placeholder'
  },
  timeline: {
    eyebrow: 'Engineering journey',
    heading: 'Progress, one build at a time.',
    intro: 'A season-by-season view of the work, teams, and experiences shaping my engineering path.',
    // Add events as [start year, start season, end year, end season, title, text, theme]
    // Seasons: 1 = Fall, 2 = Winter, 3 = Spring, 4 = Summer
    events: [
      [2026, 1, 2026, 1, 'Boston Dynamics', 'Mechanical engineering co-op', 'bd'],
      [2025, 3, 2025, 4, 'Formula SAE', 'Designing, manufacturing, and testing with the team.', 'fsae'],
      [2024, 1, 2025, 2, 'UMass Robotics', 'Robotics Club Quadruped', 'robotics']
    ]
  },
  experience: {
    eyebrow: 'Work experience',
    heading: 'Work Experience',
    company: 'Boston Dynamics',
    role: 'Mechanical engineering',
    details: 'Experience details coming soon.'
  },
  robotics: {
    eyebrow: 'Student design team',
    heading: 'UMass Robotics Research',
    intro: 'Mechatronic problem solving, prototype iteration, and practical engineering decision-making in dynamic environments.',
    projectTitle: 'Robotics Club Quadruped',
    dates: 'September 2024 – May 2025',
    description: 'The quadruped project focused on developing a stable and mobile robot platform for club-driven mechatronic experimentation. I worked on leg geometry, structural refinement, and real-world prototyping iterations.'
  },
  fsae: {
    eyebrow: 'Student design team',
    heading: 'Formula SAE',
    intro: 'Designing, manufacturing, and testing as part of a student-built race car team.'
  },
  projects: {
    eyebrow: 'Personal work',
    heading: 'Projects',
    intro: 'Work across design, making, and engineering.'
  },
  skills: {
    eyebrow: 'Capabilities',
    heading: 'Skills',
    intro: 'Mechanical design, prototyping, and hands-on problem solving.'
  }
};

window.siteContent = siteContent;

(function applySiteContent() {
  const setText = (selector, value) => {
    const element = document.querySelector(selector);
    if (element) element.textContent = value;
  };

  const setAttribute = (selector, attribute, value) => {
    const element = document.querySelector(selector);
    if (element) element.setAttribute(attribute, value);
  };

  const getButtonByOnclick = (onclickValue) => Array.from(document.querySelectorAll('button')).find(
    (button) => button.getAttribute('onclick') === onclickValue
  );

  const escapeHtml = (value) => String(value).replace(/[&<>"']/g, (character) => ({
    '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;'
  }[character]));

  const renderTimeline = () => {
    const timelineGrid = document.querySelector('#page-timeline .timeline-grid');
    if (!timelineGrid) return;

    const seasonNames = { 1: 'Fall', 2: 'Winter', 3: 'Spring', 4: 'Summer' };
    const events = siteContent.timeline.events
      .filter((event) => Array.isArray(event) && event.length >= 6)
      .map(([startYear, startSeason, endYear, endSeason, title, text, theme = 'robotics']) => ({
        startYear: Number(startYear),
        startSeason: Number(startSeason),
        endYear: Number(endYear),
        endSeason: Number(endSeason),
        title,
        text,
        theme
      }))
      .filter((event) => [event.startYear, event.startSeason, event.endYear, event.endSeason]
        .every(Number.isFinite)
        && event.startSeason >= 1 && event.startSeason <= 4
        && event.endSeason >= 1 && event.endSeason <= 4);

    if (!events.length) {
      timelineGrid.innerHTML = '<p class="text-[#5d6873]">Timeline events coming soon.</p>';
      return;
    }

    const years = [...new Set(events.flatMap((event) => {
      const values = [];
      for (let year = event.startYear; year <= event.endYear; year += 1) values.push(year);
      return values;
    }))].sort((a, b) => b - a);

    const isInSeasonRange = (event, year, season) => {
      const current = year * 4 + season;
      return current >= event.startYear * 4 + event.startSeason
        && current <= event.endYear * 4 + event.endSeason;
    };

    timelineGrid.innerHTML = years.map((year) => `
      <div class="timeline-year-group">
        <div class="timeline-year-label">${year}</div>
        <div class="timeline-seasons">
          ${[1, 2, 3, 4].map((season) => {
            const seasonEvents = events.filter((event) => isInSeasonRange(event, year, season));
            return `<div class="timeline-season-row">
              <div class="timeline-season-label">${seasonNames[season]}</div>
              <div class="timeline-events">
                ${seasonEvents.map((event) => `<article class="card timeline-card timeline-theme-${escapeHtml(event.theme)}">
                  <p class="eyebrow">${escapeHtml(event.title)}</p>
                  <p class="mt-2 text-sm text-[#5d6873]">${escapeHtml(event.text)}</p>
                </article>`).join('')}
              </div>
            </div>`;
          }).join('')}
        </div>
      </div>`).join('');
  };

  document.title = siteContent.meta.title;
  const metaDescription = document.querySelector('meta[name="description"]');
  if (metaDescription) metaDescription.setAttribute('content', siteContent.meta.description);

  // Brand text
  setText('header nav button[aria-label="Go to home"] span:nth-of-type(1)', siteContent.brand.name);
  setText('header nav button[aria-label="Go to home"] span:nth-of-type(2)', siteContent.brand.subtitle);

  // Footer brand + contact details
  const footerName = document.querySelector('footer .font-bold');
  if (footerName) footerName.textContent = siteContent.brand.name;
  const footerSchool = document.querySelector('footer p.text-sm');
  if (footerSchool) footerSchool.textContent = siteContent.brand.school;

  const emailLink = document.querySelector('.contact-email');
  if (emailLink) {
    emailLink.textContent = siteContent.contact.email;
    emailLink.href = siteContent.contact.emailHref;
  }

  const phoneLink = document.querySelector('.contact-phone');
  if (phoneLink) {
    phoneLink.textContent = siteContent.contact.phone;
    phoneLink.href = siteContent.contact.phoneHref;
  }

  const emailButton = document.querySelector('.contact-action-email');
  if (emailButton) emailButton.href = siteContent.contact.emailHref;

  const phoneButton = document.querySelector('.contact-action-phone');
  if (phoneButton) phoneButton.href = siteContent.contact.phoneHref;

  // Navigation
  Object.entries(siteContent.navigation).forEach(([key, value]) => setText(`#nav-${key}`, value));
  document.querySelectorAll('#mobile-menu button').forEach((button, index) => {
    const key = Object.keys(siteContent.navigation)[index];
    if (key) button.textContent = siteContent.navigation[key];
  });

  // Home section
  const homeEyebrow = document.querySelector('#page-home .eyebrow');
  if (homeEyebrow) homeEyebrow.textContent = siteContent.home.eyebrow;

  const homeH1 = document.querySelector('#page-home h1');
  if (homeH1) homeH1.textContent = siteContent.home.heading;

  const homeIntro = document.querySelector('#page-home p.text-lg');
  if (homeIntro) homeIntro.textContent = siteContent.home.intro;

  const homeExperienceButton = getButtonByOnclick("switchPage('experience')");
  if (homeExperienceButton) homeExperienceButton.textContent = siteContent.home.experienceButton;

  const homeTimelineButton = getButtonByOnclick("switchPage('timeline')");
  if (homeTimelineButton) homeTimelineButton.textContent = siteContent.home.timelineButton;

  const profileImage = document.querySelector('#page-home .profile-image');
  if (profileImage) {
    profileImage.src = siteContent.assets.profileImage;
    profileImage.alt = `${siteContent.brand.name} profile placeholder`;
  }

  // Timeline
  const timelineTitle = document.querySelector('#page-timeline .eyebrow');
  if (timelineTitle) timelineTitle.textContent = siteContent.timeline.eyebrow;

  const timelineHeading = document.querySelector('#page-timeline h1');
  if (timelineHeading) timelineHeading.textContent = siteContent.timeline.heading;

  const timelineIntro = document.querySelector('#page-timeline p.text-lg');
  if (timelineIntro) timelineIntro.textContent = siteContent.timeline.intro;

  renderTimeline();

  // Experience
  const experienceEyebrow = document.querySelector('#page-experience .eyebrow');
  if (experienceEyebrow) experienceEyebrow.textContent = siteContent.experience.eyebrow;

  const experienceH1 = document.querySelector('#page-experience h1');
  if (experienceH1) experienceH1.textContent = siteContent.experience.heading;

  const experienceCardEyebrow = document.querySelector('#page-experience .card .eyebrow');
  if (experienceCardEyebrow) experienceCardEyebrow.textContent = siteContent.experience.company;

  const experienceRole = document.querySelector('#page-experience .card h2');
  if (experienceRole) experienceRole.textContent = siteContent.experience.role;

  const experienceDetail = document.querySelector('#page-experience .card p.text-[#5d6873]');
  if (experienceDetail) experienceDetail.textContent = siteContent.experience.details;

  // Robotics
  const roboticsEyebrow = document.querySelector('#page-robotics .eyebrow');
  if (roboticsEyebrow) roboticsEyebrow.textContent = siteContent.robotics.eyebrow;

  const roboticsH1 = document.querySelector('#page-robotics h1');
  if (roboticsH1) roboticsH1.textContent = siteContent.robotics.heading;

  const roboticsIntro = document.querySelector('#page-robotics .text-lg');
  if (roboticsIntro) roboticsIntro.textContent = siteContent.robotics.intro;

  const roboticsProject = document.querySelector('#page-robotics .eyebrow + p');
  if (roboticsProject) roboticsProject.textContent = siteContent.robotics.projectTitle;

  const roboticsDate = document.querySelector('#page-robotics .card .mt-2');
  if (roboticsDate) roboticsDate.textContent = siteContent.robotics.dates;

  const roboticsDescription = document.querySelector('#page-robotics .card p:last-of-type');
  if (roboticsDescription) roboticsDescription.textContent = siteContent.robotics.description;

  const roboticsViewer = document.querySelector('#page-robotics model-viewer');
  if (roboticsViewer) roboticsViewer.src = siteContent.assets.model;

  // FSAE
  const fsaeEyebrow = document.querySelector('#page-fsae .eyebrow');
  if (fsaeEyebrow) fsaeEyebrow.textContent = siteContent.fsae.eyebrow;

  const fsaeH1 = document.querySelector('#page-fsae h1');
  if (fsaeH1) fsaeH1.textContent = siteContent.fsae.heading;

  const fsaeIntro = document.querySelector('#page-fsae .text-lg');
  if (fsaeIntro) fsaeIntro.textContent = siteContent.fsae.intro;

  // Projects and skills
  const projectsEyebrow = document.querySelector('#page-projects .eyebrow');
  if (projectsEyebrow) projectsEyebrow.textContent = siteContent.projects.eyebrow;

  const projectsH1 = document.querySelector('#page-projects h1');
  if (projectsH1) projectsH1.textContent = siteContent.projects.heading;

  const projectsIntro = document.querySelector('#page-projects .text-lg');
  if (projectsIntro) projectsIntro.textContent = siteContent.projects.intro;

  const skillsEyebrow = document.querySelector('#page-skills .eyebrow');
  if (skillsEyebrow) skillsEyebrow.textContent = siteContent.skills.eyebrow;

  const skillsH1 = document.querySelector('#page-skills h1');
  if (skillsH1) skillsH1.textContent = siteContent.skills.heading;

  const skillsIntro = document.querySelector('#page-skills .text-lg');
  if (skillsIntro) skillsIntro.textContent = siteContent.skills.intro;
})();
