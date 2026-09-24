/*
 * EDITABLE WEBSITE CONTENT
 *
 * Edit the values in this file to update the words shown on the site.
 * README.html contains the layout, styling, and behavior and should rarely
 * need to change.
 */
const siteContent = {
  meta: {
    description: 'Marco Vital — mechanical engineering portfolio',
    title: 'Marco Vital | Mechanical Engineering'
  },
  brand: {
    name: 'Marco Vital',
    discipline: 'Mechanical Engineering',
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
    ariaLabel: 'Engineering timeline from Fall 2026 to Fall 2022',
    entries: [
      ['2026', 'Fall', 'Work experience', 'Advanced Mechanical Engineering', 'Boston Dynamics'],
      ['2026', 'Summer', 'Work experience', 'Boston Dynamics', 'Mechanical engineering internship'],
      ['2026', 'Summer', 'Student design team', 'Formula SAE', 'Design and build season'],
      ['2026', 'Spring', 'Student design team', 'UMass Robotics Research', 'Prototype iteration and mechatronic problem solving'],
      ['2026', 'Spring', 'Education', 'UMass Amherst', 'Mechanical engineering coursework'],
      ['2025', 'Fall', 'Student design team', 'UMass Robotics Research', 'Research, testing, and hands-on fabrication'],
      ['2025', 'Fall', 'Education', 'UMass Amherst', 'Mechanical engineering'],
      ['2025', 'Summer', 'Research', 'Summer research', 'Developing and testing physical systems'],
      ['2025', 'Spring', 'Student design team', 'Formula SAE', 'Manufacturing constraints and design tradeoffs'],
      ['2025', 'Spring', 'Education', 'UMass Amherst', 'Mechanical engineering coursework'],
      ['2024', 'Fall', 'Student design team', 'Formula SAE', 'Joined the team and began vehicle development'],
      ['2024', 'Fall', 'Education', 'UMass Amherst', 'Started mechanical engineering'],
      ['2024', 'Summer', 'Making', 'Design and prototyping', 'Building a practical foundation in hands-on engineering'],
      ['2024', 'Spring', 'Education', 'Engineering foundation', 'Coursework, experimentation, and design practice'],
      ['2023', 'Fall', 'Education', 'Started at UMass Amherst', 'Began the mechanical engineering journey'],
      ['2023', 'Summer', 'Preparation', 'Preparing for college', 'Exploring engineering and preparing to begin at UMass Amherst'],
      ['2023', 'Spring', 'Exploration', 'Engineering interests', 'Developing an interest in mechanical design and making'],
      ['2022', 'Fall', 'Beginning', 'Started the journey', 'The starting point of my engineering timeline']
    ]
  },
  experience: {
    eyebrow: 'Work experience', heading: 'Work Experience', company: 'Boston Dynamics',
    role: 'Mechanical engineering', details: 'Experience details coming soon.'
  },
  robotics: {
    eyebrow: 'Student design team', heading: 'UMass Robotics Research',
    intro: 'Mechatronic problem solving, prototype iteration, and practical engineering decision-making in dynamic environments.',
    project: 'Robotics Club Quadruped', dates: 'September 2024 – May 2025',
    description: 'The quadruped project focused on developing a stable and mobile robot platform for club-driven mechatronic experimentation. I worked on leg geometry, structural refinement, and the iterative testing process needed to improve balance, weight distribution, and overall performance in real-world conditions.',
    imageAlts: ['Quadruped robot design concept', 'Quadruped robot assembly', 'Robot frame prototype', 'Robot electronics bench', 'Quadruped testing setup', 'Final robot assembly']
  },
  fsae: {
    eyebrow: 'Student design team', heading: 'Formula SAE',
    intro: 'Designing, manufacturing, and testing as part of a student-built race car team.'
  },
  projects: {
    eyebrow: 'Personal work', heading: 'Projects', intro: 'Work across design, making, and engineering.'
  },
  skills: {
    eyebrow: 'Capabilities', heading: 'Skills', intro: 'Mechanical design, prototyping, and hands-on problem solving.'
  }
};

/*
 * This adapter lets the existing HTML remain the structural/template layer.
 * It is intentionally kept separate from the content above.
 */
(function applySiteContent(content) {
  const set = (selector, value, attribute) => {
    const elements = document.querySelectorAll(selector);
    elements.forEach((element) => {
      if (attribute) element.setAttribute(attribute, value);
      else element.textContent = value;
    });
  };

  document.title = content.meta.title;
  set('meta[name="description"]', content.meta.description, 'content');
  set('header nav button[aria-label="Go to home"] span:first-child', content.brand.name);
  set('header nav button[aria-label="Go to home"] span:last-child', content.brand.discipline);
  set('footer p:first-child', content.brand.name);
  set('footer p:last-child', content.brand.school);

  Object.entries(content.navigation).forEach(([page, label]) => {
    set(`#nav-${page}, #mobile-menu button[onclick="switchPage('${page}')"]`, label);
  });

  set('#page-home .eyebrow', content.home.eyebrow);
  set('#page-home h1', content.home.heading);
  set('#page-home p.text-lg', content.home.intro);
  set('#page-home button[onclick="switchPage(\'experience\')"]', content.home.experienceButton);
  set('#page-home button[onclick="switchPage(\'timeline\')"]', content.home.timelineButton);
  set('#page-home .photo-placeholder', content.home.picturePlaceholder);

  set('#page-timeline .eyebrow', content.timeline.eyebrow);
  set('#page-timeline h1', content.timeline.heading);
  set('#page-timeline > div:first-child p.text-lg', content.timeline.intro);
  set('#page-timeline .timeline-grid', content.timeline.ariaLabel, 'aria-label');

  set('#page-experience .eyebrow', content.experience.eyebrow);
  set('#page-experience h1', content.experience.heading);
  set('#page-experience .card .eyebrow', content.experience.company);
  set('#page-experience .card h2', content.experience.role);
  set('#page-experience .card p.text-\\[\\#5d6873\\]', content.experience.details);

  set('#page-robotics > div:first-child .eyebrow', content.robotics.eyebrow);
  set('#page-robotics > div:first-child h1', content.robotics.heading);
  set('#page-robotics > div:first-child p.text-lg', content.robotics.intro);
  set('#page-robotics h2', content.robotics.project);
  set('#page-robotics .mt-2.text-sm', content.robotics.dates);
  set('#page-robotics .mb-8 p', content.robotics.description);
  set('#page-robotics img', content.robotics.imageAlts, 'alt');

  ['fsae', 'projects', 'skills'].forEach((page) => {
    set(`#page-${page} .eyebrow`, content[page].eyebrow);
    set(`#page-${page} h1`, content[page].heading);
    set(`#page-${page} p.text-lg`, content[page].intro);
  });
})(siteContent);
