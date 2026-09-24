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
    intro: 'A season-by-season view of the work, teams, and experiences shaping my engineering path.'
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

(function applySiteContent() {
  const setText = (selector, value) => {
    const element = document.querySelector(selector);
    if (element) {
      element.textContent = value;
    }
  };

  const getButtonByOnclick = (onclickValue) => {
    return Array.from(document.querySelectorAll('button')).find(
      (button) => button.getAttribute('onclick') === onclickValue
    );
  };

  document.title = siteContent.meta.title;

  const metaDescription = document.querySelector('meta[name="description"]');
  if (metaDescription) {
    metaDescription.setAttribute('content', siteContent.meta.description);
  }

  setText('header nav button[aria-label="Go to home"] span:nth-of-type(1)', siteContent.brand.name);
  setText('header nav button[aria-label="Go to home"] span:nth-of-type(2)', siteContent.brand.subtitle);
  setText('footer .font-bold', siteContent.brand.name);
  setText('footer p.text-sm', siteContent.brand.school);

  setText('#nav-home', siteContent.navigation.home);
  setText('#nav-experience', siteContent.navigation.experience);
  setText('#nav-robotics', siteContent.navigation.robotics);
  setText('#nav-fsae', siteContent.navigation.fsae);
  setText('#nav-skills', siteContent.navigation.skills);
  setText('#nav-timeline', siteContent.navigation.timeline);

  const mobileButtons = document.querySelectorAll('#mobile-menu button');
  const mobileTexts = [
    siteContent.navigation.home,
    siteContent.navigation.experience,
    siteContent.navigation.robotics,
    siteContent.navigation.fsae,
    siteContent.navigation.skills,
    siteContent.navigation.timeline
  ];

  mobileButtons.forEach((button, index) => {
    if (mobileTexts[index]) {
      button.textContent = mobileTexts[index];
    }
  });

  setText('#page-home .eyebrow', siteContent.home.eyebrow);
  setText('#page-home h1', siteContent.home.heading);
  setText('#page-home p.text-lg', siteContent.home.intro);

  const homeExperienceButton = getButtonByOnclick("switchPage('experience')");
  if (homeExperienceButton) {
    homeExperienceButton.textContent = siteContent.home.experienceButton;
  }

  const homeTimelineButton = getButtonByOnclick("switchPage('timeline')");
  if (homeTimelineButton) {
    homeTimelineButton.textContent = siteContent.home.timelineButton;
  }

  setText('#page-home .photo-placeholder', siteContent.home.picturePlaceholder);

  setText('#page-timeline .eyebrow', siteContent.timeline.eyebrow);
  setText('#page-timeline h1', siteContent.timeline.heading);
  setText('#page-timeline > div:first-child p.text-lg', siteContent.timeline.intro);

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
