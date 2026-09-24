const siteContent = {
  meta: {
    title: 'Marco Vital | Mechanical Engineering',
    description: 'Marco Vital — mechanical engineering portfolio'
  },
  brand: {
    name: 'Marco Vital',
    subtitle: 'Mechanical Engineering',
    school: 'Mechanical Engineering @ UMass Amherst'
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

    // Add events as one line each: [start year, start season, end year, end season, title, text, theme].
    // Seasons are 1 = Fall, 2 = Winter, 3 = Spring, 4 = Summer.
    // The end year/season is optional; use the same values for a single-season event.
    // Available themes: robotics, school, bd, and fsae.
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
    description: 'The quadruped project focused on developing a stable and mobile robot platform for club-driven mechatronic experimentation. I worked on leg geometry, structural refinement, and the iterative testing process needed to improve balance, weight distribution, and overall performance in real-world conditions.'
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

// Keep the content data available to the page and make the timeline a data-driven component.
window.siteContent = siteContent;

(function applySiteContent() {
  const setText = (selector, value) => {
    const element = document.querySelector(selector);
    if (element) element.textContent = value;
  };

  const getButtonByOnclick = (onclickValue) => Array.from(document.querySelectorAll('button')).find(
    (button) => button.getAttribute('onclick') === onclickValue
  );

  const escapeHtml = (value) => String(value).replace(/[&<>'"]/g, (character) => ({
    '&': '&amp;', '<': '&lt;', '>': '&gt;', "'": '&#39;', '"': '&quot;'
  }[character]));

  const renderTimeline = () => {
    const timelineGrid = document.querySelector('#page-timeline .timeline-grid');
    if (!timelineGrid) return;

    const seasonNames = { 1: 'Fall', 2: 'Winter', 3: 'Spring', 4: 'Summer' };
    const events = siteContent.timeline.events
      .filter((event) => Array.isArray(event) && event.length >= 6)
      .map(([startYear, startSeason, endYear, endSeason, title, text, theme = 'robotics']) => ({
        startYear: Number(startYear), startSeason: Number(startSeason),
        endYear: Number(endYear), endSeason: Number(endSeason), title, text, theme
      }))
      .filter((event) => [event.startYear, event.startSeason, event.endYear, event.endSeason]
        .every(Number.isFinite) && event.startSeason >= 1 && event.startSeason <= 4
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

  setText('header nav button[aria-label="Go to home"] span:nth-of-type(1)', siteContent.brand.name);
  setText('header nav button[aria-label="Go to home"] span:nth-of-type(2)', siteContent.brand.subtitle);
  setText('footer .font-bold', siteContent.brand.name);
  setText('footer p.text-sm', siteContent.brand.school);

  Object.entries(siteContent.navigation).forEach(([key, value]) => setText(`#nav-${key}`, value));
  document.querySelectorAll('#mobile-menu button').forEach((button, index) => {
    const key = Object.keys(siteContent.navigation)[index];
    if (key) button.textContent = siteContent.navigation[key];
  });

  setText('#page-home .eyebrow', siteContent.home.eyebrow);
  setText('#page-home h1', siteContent.home.heading);
  setText('#page-home p.text-lg', siteContent.home.intro);
  const homeExperienceButton = getButtonByOnclick("switchPage('experience')");
  if (homeExperienceButton) homeExperienceButton.textContent = siteContent.home.experienceButton;
  const homeTimelineButton = getButtonByOnclick("switchPage('timeline')");
  if (homeTimelineButton) homeTimelineButton.textContent = siteContent.home.timelineButton;
  setText('#page-home .photo-placeholder', siteContent.home.picturePlaceholder);

  setText('#page-timeline .eyebrow', siteContent.timeline.eyebrow);
  setText('#page-timeline h1', siteContent.timeline.heading);
  setText('#page-timeline > div:first-child p.text-lg', siteContent.timeline.intro);
  renderTimeline();

  setText('#page-experience .eyebrow', siteContent.experience.eyebrow);
  setText('#page-experience h1', siteContent.experience.heading);
  setText('#page-experience .card .eyebrow', siteContent.experience.company);
  setText('#page-experience .card h2', siteContent.experience.role);
  setText('#page-experience .card p:last-of-type', siteContent.experience.details);
  setText('#page-robotics > div:first-child .eyebrow', siteContent.robotics.eyebrow);
  setText('#page-robotics > div:first-child h1', siteContent.robotics.heading);
  setText('#page-robotics > div:first-child p.text-lg', siteContent.robotics.intro);
  setText('#page-robotics h2', siteContent.robotics.projectTitle);
  setText('#page-robotics .mt-2.text-sm', siteContent.robotics.dates);
  setText('#page-robotics .mb-8 p', siteContent.robotics.description);
  setText('#page-fsae .eyebrow', siteContent.fsae.eyebrow);
  setText('#page-fsae h1', siteContent.fsae.heading);
  setText('#page-fsae p.text-lg', siteContent.fsae.intro);
  setText('#page-projects .eyebrow', siteContent.projects.eyebrow);
  setText('#page-projects h1', siteContent.projects.heading);
  setText('#page-projects p.text-lg', siteContent.projects.intro);
  setText('#page-skills .eyebrow', siteContent.skills.eyebrow);
  setText('#page-skills h1', siteContent.skills.heading);
  setText('#page-skills p.text-lg', siteContent.skills.intro);
})();
