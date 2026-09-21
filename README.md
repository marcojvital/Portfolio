<!DOCTYPE html>
<html lang="en" class="scroll-smooth">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <meta name="description" content="Marco Vital — mechanical engineering portfolio">
  <title>Marco Vital | Mechanical Engineering</title>
  <link rel="preconnect" href="https://fonts.googleapis.com">
  <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
  <link href="https://fonts.googleapis.com/css2?family=DM+Sans:wght@400;500;600;700&family=Space+Grotesk:wght@500;600;700&display=swap" rel="stylesheet">
  <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.5.2/css/all.min.css">
  <script src="https://cdn.tailwindcss.com"></script>
  <style>
    :root { --ink:#17202a; --muted:#5d6873; --paper:#f7f6f2; --blue:#164e63; --orange:#c65d32; --line:#dfe2df; --maroon:#7d1f36; --bd-blue:#164e63; --fsae-tan:#d3b08c; }
    * { box-sizing:border-box; }
    body { margin:0; color:var(--ink); background:var(--paper); font-family:'DM Sans',sans-serif; }
    h1,h2,h3,h4 { font-family:'Space Grotesk',sans-serif; }
    .page-section { display:none; animation:appear .3s ease both; }
    .page-section.active-page { display:block; }
    @keyframes appear { from { opacity:0; transform:translateY(7px); } to { opacity:1; transform:none; } }
    .nav-link { color:var(--muted); cursor:pointer; border-bottom:2px solid transparent; transition:.2s; }
    .nav-link:hover,.nav-link.active { color:var(--blue); border-color:var(--orange); }
    .card { background:#fff; border:1px solid var(--line); border-radius:4px; }
    .card:hover { border-color:#aebbb9; }
    .placeholder { min-height:220px; border:1px dashed #aebbb9; background:#eef1ee; color:#74817f; display:flex; align-items:center; justify-content:center; text-align:center; }
    .eyebrow { color:var(--orange); letter-spacing:.06em; font-size:.75rem; font-weight:700; }
    .menu-open .mobile-menu { display:flex; }
    .timeline-line { position:absolute; left:1rem; top:1rem; bottom:1rem; width:2px; background:var(--line); }
    .timeline-item { --topic-color:var(--orange); position:relative; }
    .timeline-item .eyebrow { color:var(--topic-color); }
    .timeline-item .timeline-dot { position:absolute; left:.5rem; top:1.5rem; width:1rem; height:1rem; border:3px solid var(--paper); border-radius:999px; background:var(--topic-color); box-shadow:0 0 0 2px rgba(23,32,42,0.05); }
    .timeline-theme-robotics { --topic-color:var(--orange); }
    .timeline-theme-school { --topic-color:var(--maroon); }
    .timeline-theme-bd { --topic-color:var(--bd-blue); }
    .timeline-theme-fsae { --topic-color:var(--fsae-tan); }
    .mobile-menu { display:flex; }
    #menu-button { display:none; }
  </style>
</head>
<body>
  <header class="border-b border-[#dfe2df] bg-[#f7f6f2]/95 sticky top-0 z-50 backdrop-blur">
    <nav class="max-w-6xl mx-auto px-5 lg:px-8 h-20 flex items-center justify-between" aria-label="Main navigation">
      <button onclick="switchPage('home')" class="text-left" aria-label="Go to home"><span class="block font-bold text-xl tracking-tight">Marco Vital</span><span class="block text-xs text-[#5d6873] mt-1">Mechanical engineering student</span></button>
      <div class="hidden md:flex items-center gap-7 text-sm font-semibold">
        <button onclick="switchPage('home')" id="nav-home" class="nav-link active py-2">Home</button>
        <button onclick="switchPage('timeline')" id="nav-timeline" class="nav-link py-2">Timeline</button>
        <button onclick="switchPage('experience')" id="nav-experience" class="nav-link py-2">Work Experience</button>
        <button onclick="switchPage('robotics')" id="nav-robotics" class="nav-link py-2">Robotics</button>
        <button onclick="switchPage('fsae')" id="nav-fsae" class="nav-link py-2">FSAE</button>
        <button onclick="switchPage('projects')" id="nav-projects" class="nav-link py-2">Projects</button>
        <button onclick="switchPage('skills')" id="nav-skills" class="nav-link py-2">Skills</button>
      </div>
      <button id="menu-button" class="md:hidden text-xl p-2" aria-label="Open menu" aria-expanded="false"><i class="fa-solid fa-bars"></i></button>
    </nav>
    <div class="mobile-menu md:hidden hidden flex-col gap-1 px-5 pb-4 text-sm font-semibold border-t border-[#dfe2df]">
      <button onclick="switchPage('home')" class="text-left py-2">Home</button>
      <button onclick="switchPage('timeline')" class="text-left py-2">Timeline</button>
      <button onclick="switchPage('experience')" class="text-left py-2">Experience</button>
      <button onclick="switchPage('robotics')" class="text-left py-2">Robotics</button>
      <button onclick="switchPage('fsae')" class="text-left py-2">FSAE</button>
      <button onclick="switchPage('projects')" class="text-left py-2">Projects</button>
      <button onclick="switchPage('skills')" class="text-left py-2">Skills</button>
    </div>
  </header>

  <main class="max-w-6xl mx-auto px-5 lg:px-8 py-12 md:py-20">
    <section id="page-home" class="page-section active-page">
      <div class="max-w-3xl">
        <p class="eyebrow mb-5">Mechanical Engineering @ UMass Amherst</p>
        <h1 class="text-4xl md:text-6xl font-bold leading-tight tracking-tight mb-6">I build useful systems, learn fast, and keep improving the design.</h1>
        <p class="text-lg text-[#5d6873] mb-8 max-w-xl">I’m Marco Vital, a mechanical engineering student focused on robotics, design, and manufacturing. I’m interested in developing products that are practical, efficient, and grounded in real-world testing.</p>
        <div class="flex flex-wrap gap-4">
          <button onclick="switchPage('projects')" class="bg-[#164e63] text-white px-5 py-3 rounded font-semibold">View projects</button>
          <button onclick="switchPage('timeline')" class="border border-[#dfe2df] bg-white px-5 py-3 rounded font-semibold">See timeline</button>
        </div>
      </div>
    </section>
    <section id="page-experience" class="page-section">
      <div class="max-w-3xl mb-12">
        <p class="eyebrow mb-3">Experience</p>
        <h1 class="text-4xl md:text-5xl font-bold mb-4">Building things, then learning from the results.</h1>
        <p class="text-lg text-[#5d6873]">My engineering work has centered on design teams, applied research, and hands-on problem solving across mechanical systems.</p>
      </div>
      <div class="grid md:grid-cols-2 gap-6">
        <article class="card p-6">
          <p class="eyebrow mb-2">UMass Robotics Research</p>
          <h2 class="text-2xl font-bold mb-3">Student researcher</h2>
          <p class="text-[#5d6873]">Contributed to robotics-focused design and testing work, improving systems through iterative development and technical analysis.</p>
        </article>
        <article class="card p-6">
          <p class="eyebrow mb-2">FSAE</p>
          <h2 class="text-2xl font-bold mb-3">Vehicle systems member</h2>
          <p class="text-[#5d6873]">Participating in a high-performance engineering environment focused on collaboration, manufacturing, and track-driven refinement.</p>
        </article>
      </div>
    </section>
    <section id="page-robotics" class="page-section">
      <div class="max-w-3xl mb-12">
        <p class="eyebrow mb-3">Student design team</p>
        <h1 class="text-4xl md:text-5xl font-bold mb-4">UMass Robotics Research</h1>
        <p class="text-lg text-[#5d6873]">Working on robotics systems and design challenges that require both precision and adaptability.</p>
      </div>
      <div class="card p-8">
        <p class="text-[#5d6873]">This work focuses on mechatronic problem solving, prototype iteration, and practical engineering decision-making in dynamic environments.</p>
      </div>
    </section>
    <section id="page-fsae" class="page-section">
      <div class="max-w-3xl mb-12">
        <p class="eyebrow mb-3">Student design team · Fall 2024 — Present</p>
        <h1 class="text-4xl md:text-5xl font-bold mb-4">Formula SAE</h1>
        <p class="text-lg text-[#5d6873]">Designing and refining a competitive student race vehicle with a strong emphasis on systems integration and performance.</p>
      </div>
      <div class="card p-8">
        <p class="text-[#5d6873]">This project has strengthened my understanding of manufacturing constraints, design tradeoffs, and the importance of test-driven iteration.</p>
      </div>
    </section>
    <section id="page-projects" class="page-section">
      <div class="max-w-3xl mb-12">
        <p class="eyebrow mb-3">Personal work</p>
        <h1 class="text-4xl md:text-5xl font-bold mb-4">Projects</h1>
        <p class="text-lg text-[#5d6873]">Work across design, making, and technical problem solving.</p>
      </div>
      <div class="grid md:grid-cols-2 gap-6">
        <article class="card p-6">
          <h2 class="text-2xl font-bold mb-3">Research and prototyping</h2>
          <p class="text-[#5d6873]">Developing and testing physical systems to evaluate concepts with measurable performance.</p>
        </article>
        <article class="card p-6">
          <h2 class="text-2xl font-bold mb-3">Design tools</h2>
          <p class="text-[#5d6873]">Using CAD and analysis to turn ideas into realistic, buildable solutions.</p>
        </article>
      </div>
    </section>
    <section id="page-skills" class="page-section">
      <div class="max-w-3xl mb-12">
        <p class="eyebrow mb-3">Capabilities</p>
        <h1 class="text-4xl md:text-5xl font-bold mb-4">Skills</h1>
        <p class="text-lg text-[#5d6873]">Mechanical design, prototyping, analysis, and communication are at the center of my work.</p>
      </div>
      <div class="grid md:grid-cols-3 gap-6">
        <article class="card p-6"><h2 class="text-xl font-bold mb-2">CAD</h2><p class="text-[#5d6873]">Solid modeling and design iteration</p></article>
        <article class="card p-6"><h2 class="text-xl font-bold mb-2">Manufacturing</h2><p class="text-[#5d6873]">Build-aware design and practical fabrication</p></article>
        <article class="card p-6"><h2 class="text-xl font-bold mb-2">Analysis</h2><p class="text-[#5d6873]">Performance-driven engineering decisions</p></article>
      </div>
    </section>
    <section id="page-timeline" class="page-section">
      <div class="max-w-3xl mb-12">
        <p class="eyebrow mb-3">Engineering journey</p>
        <h1 class="text-4xl md:text-5xl font-bold mb-4">Progress, one build at a time.</h1>
      </div>
      <div class="relative pl-10 md:pl-14">
        <div class="timeline-line"></div>
        <article class="timeline-item timeline-theme-bd relative card p-6 md:p-8 mb-6">
          <div class="timeline-dot"></div>
          <p class="eyebrow">July 2026 - Present</p>
          <h2 class="text-2xl font-bold mt-1">Advanced design work</h2>
          <p class="text-[#5d6873] mt-3">Continuing hands-on engineering work focused on systems design and product development.</p>
        </article>
        <article class="timeline-item timeline-theme-school relative card p-6 md:p-8 mb-6">
          <div class="timeline-dot"></div>
          <p class="eyebrow">September 2025 - May 2026</p>
          <h2 class="text-2xl font-bold mt-1">Academic progression</h2>
          <p class="text-[#5d6873] mt-3">Deepening technical foundations while continuing to apply them in team-based engineering work.</p>
        </article>
        <article class="timeline-item timeline-theme-robotics relative card p-6 md:p-8 mb-6">
          <div class="timeline-dot"></div>
          <p class="eyebrow">July 2025 - May 2026</p>
          <h2 class="text-2xl font-bold mt-1">Robotics research</h2>
          <p class="text-[#5d6873] mt-3">Working on prototype systems and design challenges with a focus on function and iteration.</p>
        </article>
        <article class="timeline-item timeline-theme-fsae relative card p-6 md:p-8 mb-6">
          <div class="timeline-dot"></div>
          <p class="eyebrow">June 2025 - August 2026</p>
          <h2 class="text-2xl font-bold mt-1">FSAE participation</h2>
          <p class="text-[#5d6873] mt-3">Contributing to a vehicle development cycle centered on evaluation, manufacturing, and performance.</p>
        </article>
        <article class="timeline-item relative card p-6 md:p-8 mb-6">
          <div class="timeline-dot"></div>
          <p class="eyebrow">May 2025 - August 2025</p>
          <h2 class="text-2xl font-bold mt-1">Summer research</h2>
          <p class="text-[#5d6873] mt-3">Continuing practical engineering work and exploring design opportunities in applied settings.</p>
        </article>
        <article class="timeline-item timeline-theme-fsae relative card p-6 md:p-8 mb-6">
          <div class="timeline-dot"></div>
          <p class="eyebrow">October 2024 - May 2025</p>
          <h2 class="text-2xl font-bold mt-1">Formula team involvement</h2>
          <p class="text-[#5d6873] mt-3">Participating in design and build processes while learning from team-based engineering execution.</p>
        </article>
        <article class="timeline-item timeline-theme-school relative card p-6 md:p-8 mb-6">
          <div class="timeline-dot"></div>
          <p class="eyebrow">September 2024 - May 2025</p>
          <h2 class="text-2xl font-bold mt-1">UMass engineering studies</h2>
          <p class="text-[#5d6873] mt-3">Building a foundation in mechanical engineering with a focus on practical application and design thinking.</p>
        </article>
      </div>
    </section>
  </main>

  <footer class="border-t border-[#dfe2df] mt-8">
    <div class="max-w-6xl mx-auto px-5 lg:px-8 py-8 flex flex-col sm:flex-row justify-between gap-5">
      <div>
        <p class="font-bold">Marco Vital</p>
        <p class="text-sm text-[#5d6873]">Mechanical engineering student</p>
      </div>
      <div class="flex flex-col items-start sm:items-end text-sm text-[#5d6873] gap-2">
        <a href="mailto:mjvital@umass.edu" class="inline-flex items-center gap-2 hover:text-[#164e63]"><i class="fa-solid fa-envelope"></i>mjvital@umass.edu</a>
        <a href="tel:+14133357760" class="inline-flex items-center gap-2 hover:text-[#164e63]"><i class="fa-solid fa-phone"></i>(413)-335-7760</a>
      </div>
    </div>
  </footer>

  <script>
    const pages=['home','timeline','experience','robotics','fsae','projects','skills'];
    function switchPage(page, updateHash=true){
      if(!pages.includes(page)) page='home';
      pages.forEach(item=>{
        document.getElementById('page-'+item).classList.toggle('active-page', item===page);
        const nav=document.getElementById('nav-'+item);
        if(nav) nav.classList.toggle('active', item===page);
      });
      if(updateHash) location.hash=page;
    }
    document.getElementById('menu-button').addEventListener('click',()=>{
      document.body.classList.toggle('menu-open');
      const expanded = document.body.classList.contains('menu-open');
      document.getElementById('menu-button').setAttribute('aria-expanded', expanded ? 'true' : 'false');
    });
    document.querySelectorAll('.mobile-menu button').forEach(button=>button.addEventListener('click',()=>document.body.classList.remove('menu-open')));
    const initial=location.hash.slice(1);
    switchPage(pages.includes(initial)?initial:'home', false);
  </script>
</body>
</html>
