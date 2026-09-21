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
    .timeline-item { --topic-color:var(--orange); position:relative; overflow:hidden; }
    .timeline-item::after {
      content: "";
      position: absolute;
      top: 0;
      right: 0;
      bottom: 0;
      width: 12px;
      background: var(--topic-color);
      border-radius: 0 4px 4px 0;
    }
    .timeline-item .eyebrow { color:var(--topic-color); }
    .timeline-item .timeline-dot { position:absolute; left:.5rem; top:1.5rem; width:1rem; height:1rem; border:3px solid var(--paper); border-radius:999px; background:var(--topic-color); box-shadow:0 0 0 2px rgba(23,32,42,.02); }
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
        <button onclick="switchPage('home')" id="nav-home" class="nav-link active py-2">Home</button><button onclick="switchPage('timeline')" id="nav-timeline" class="nav-link py-2">Timeline</button><button onclick="switchPage('experience')" id="nav-experience" class="nav-link py-2">Experience</button><button onclick="switchPage('robotics')" id="nav-robotics" class="nav-link py-2">Robotics</button><button onclick="switchPage('fsae')" id="nav-fsae" class="nav-link py-2">FSAE</button><button onclick="switchPage('projects')" id="nav-projects" class="nav-link py-2">Projects</button><button onclick="switchPage('skills')" id="nav-skills" class="nav-link py-2">Skills</button>
      </div>
      <button id="menu-button" class="md:hidden text-xl p-2" aria-label="Open menu" aria-expanded="false"><i class="fa-solid fa-bars"></i></button>
    </nav>
    <div class="mobile-menu md:hidden flex-col gap-1 px-5 pb-4 text-sm font-semibold border-t border-[#dfe2df]"><button onclick="switchPage('home')" class="text-left py-2">Home</button><button onclick="switchPage('timeline')" class="text-left py-2">Timeline</button><button onclick="switchPage('experience')" class="text-left py-2">Experience</button><button onclick="switchPage('robotics')" class="text-left py-2">Robotics</button><button onclick="switchPage('fsae')" class="text-left py-2">FSAE</button><button onclick="switchPage('projects')" class="text-left py-2">Projects</button><button onclick="switchPage('skills')" class="text-left py-2">Skills</button></div>
  </header>

  <main class="max-w-6xl mx-auto px-5 lg:px-8 py-12 md:py-20">
    <section id="page-home" class="page-section active-page"><div class="grid md:grid-cols-[1.1fr_.9fr] gap-12 items-center"><div><p class="eyebrow mb-5">Mechanical engineering student · UMass Amherst</p><h1 class="text-5xl md:text-6xl font-bold tracking-tight leading-none mb-6">Building reliable systems and learning from every test.</h1><p class="text-lg text-[#5d6873] mb-8">I’m Marco Vital, a mechanical engineering student exploring robotics, product design, and the engineering decisions behind real hardware.</p><div class="flex flex-wrap gap-4"><button onclick="switchPage('experience')" class="bg-[#164e63] text-white px-5 py-3 rounded-md font-semibold">View experience</button><button onclick="switchPage('projects')" class="border border-[#dfe2df] bg-white px-5 py-3 rounded-md font-semibold">Browse projects</button></div></div><div class="card p-6 md:p-8"><div class="placeholder rounded-md">Profile image / headshot placeholder</div></div></div></section>
    <section id="page-experience" class="page-section"><div class="max-w-3xl mb-12"><p class="eyebrow mb-3">Experience</p><h1 class="text-4xl md:text-5xl font-bold mb-4">Building things, then learning.</h1><p class="text-lg text-[#5d6873]">My work has centered around hands-on engineering: designing systems, solving constraints, and iterating based on testing.</p></div><div class="grid md:grid-cols-2 gap-6"><article class="card p-6"><p class="eyebrow mb-2">UMass Robotics</p><h2 class="text-2xl font-bold mb-2">Research and prototyping</h2><p class="text-[#5d6873]">Worked across design and fabrication workflows to develop functional prototypes and improve system performance.</p></article><article class="card p-6"><p class="eyebrow mb-2">FSAE</p><h2 class="text-2xl font-bold mb-2">Vehicle design</h2><p class="text-[#5d6873]">Contributed to the design process through detailed engineering work, teamwork, and iterative testing.</p></article></div></section>
    <section id="page-robotics" class="page-section"><div class="max-w-3xl mb-12"><p class="eyebrow mb-3">Student design team</p><h1 class="text-4xl md:text-5xl font-bold mb-4">UMass Robotics Research</h1><p class="text-lg text-[#5d6873]">Focused on building, testing, and improving robotic systems with a practical engineering mindset.</p></div><div class="card p-6 md:p-8"><p class="text-[#5d6873]">This work blends design, manufacturing, and iterative validation. The emphasis is on learning from real-world performance and improving systems through measurable feedback.</p></div></section>
    <section id="page-fsae" class="page-section"><div class="max-w-3xl mb-12"><p class="eyebrow mb-3">Student design team · Fall 2024 — Present</p><h1 class="text-4xl md:text-5xl font-bold mb-4">Mini Baja / FSAE team</h1><p class="text-lg text-[#5d6873]">Engineering a competitive vehicle through design, validation, and system-level integration.</p></div><div class="card p-6 md:p-8"><p class="text-[#5d6873]">The team environment emphasizes collaboration, design trade-offs, and learning under real constraints. Each subsystem contributes to a larger goal: reliable performance under competition conditions.</p></div></section>
    <section id="page-projects" class="page-section"><div class="max-w-3xl mb-12"><p class="eyebrow mb-3">Personal work</p><h1 class="text-4xl md:text-5xl font-bold mb-4">Projects</h1><p class="text-lg text-[#5d6873]">Hands-on design work spanning mechanism development, testing, and fabrication.</p></div><div class="grid md:grid-cols-2 gap-6"><article class="card p-6"><h2 class="text-2xl font-bold mb-2">Team-built prototypes</h2><p class="text-[#5d6873]">Developed functional prototypes to test concepts and drive iterative improvements.</p></article><article class="card p-6"><h2 class="text-2xl font-bold mb-2">Design iteration</h2><p class="text-[#5d6873]">Evaluated performance, refined geometry, and improved manufacturability through repeated cycles.</p></article></div></section>
    <section id="page-skills" class="page-section"><div class="max-w-3xl mb-12"><p class="eyebrow mb-3">Capabilities</p><h1 class="text-4xl md:text-5xl font-bold mb-4">Skills</h1><p class="text-lg text-[#5d6873]">A practical engineering toolkit shaped by design teams, prototyping, and testing.</p></div><div class="grid md:grid-cols-3 gap-6"><div class="card p-6"><h3 class="text-xl font-bold mb-2">CAD</h3><p class="text-[#5d6873]">Modeling and design iteration for functional hardware.</p></div><div class="card p-6"><h3 class="text-xl font-bold mb-2">Fabrication</h3><p class="text-[#5d6873]">Hands-on part production and refinement.</p></div><div class="card p-6"><h3 class="text-xl font-bold mb-2">Testing</h3><p class="text-[#5d6873]">Using measurements and validation to inform design decisions.</p></div></div></section>
    <section id="page-timeline" class="page-section"><div class="max-w-3xl mb-12"><p class="eyebrow mb-3">Engineering journey</p><h1 class="text-4xl md:text-5xl font-bold mb-4">Progress, one build at a time.</h1><p class="text-lg text-[#5d6873]">Key milestones from coursework, research, and team work.</p></div>
      <div class="relative pl-10 md:pl-14">
        <div class="timeline-line"></div>
        <article class="timeline-item timeline-theme-bd relative card p-6 md:p-8 mb-6"><div class="timeline-dot"></div><p class="eyebrow">July 2026 - Present</p><h2 class="text-2xl font-bold mt-1">Atlas</h2><p class="text-[#5d6873] mt-3">Current work and engineering focus.</p></article>
        <article class="timeline-item timeline-theme-school relative card p-6 md:p-8 mb-6"><div class="timeline-dot"></div><p class="eyebrow">September 2025 - May 2026</p><h2 class="text-2xl font-bold mt-1">Academic year milestone</h2><p class="text-[#5d6873] mt-3">Continued coursework and applied engineering development.</p></article>
        <article class="timeline-item timeline-theme-robotics relative card p-6 md:p-8 mb-6"><div class="timeline-dot"></div><p class="eyebrow">July 2025 - May 2026</p><h2 class="text-2xl font-bold mt-1">Robotics team work</h2><p class="text-[#5d6873] mt-3">Producing and refining robotic systems through testing and iteration.</p></article>
        <article class="timeline-item timeline-theme-fsae relative card p-6 md:p-8 mb-6"><div class="timeline-dot"></div><p class="eyebrow">June 2025 - August 2026</p><h2 class="text-2xl font-bold mt-1">FSAE design involvement</h2><p class="text-[#5d6873] mt-3">Designing, validating, and improving vehicle systems with the team.</p></article>
        <article class="timeline-item relative card p-6 md:p-8 mb-6"><div class="timeline-dot"></div><p class="eyebrow">May 2025 - August 2025</p><h2 class="text-2xl font-bold mt-1">Summer Research Internship</h2><p class="text-[#5d6873] mt-3">Applied engineering methods to hands-on research and prototype work.</p></article>
        <article class="timeline-item timeline-theme-fsae relative card p-6 md:p-8 mb-6"><div class="timeline-dot"></div><p class="eyebrow">October 2024 - May 2025</p><h2 class="text-2xl font-bold mt-1">FSAE team participation</h2><p class="text-[#5d6873] mt-3">Continued support across vehicle development and system design.</p></article>
        <article class="timeline-item timeline-theme-school relative card p-6 md:p-8 mb-6"><div class="timeline-dot"></div><p class="eyebrow">September 2024 - May 2025</p><h2 class="text-2xl font-bold mt-1">Sophomore year</h2><p class="text-[#5d6873] mt-3">Deepened engineering fundamentals and continued design-based coursework.</p></article>
      </div>
    </section>
  </main>

  <footer class="border-t border-[#dfe2df] mt-8"><div class="max-w-6xl mx-auto px-5 lg:px-8 py-8 flex flex-col sm:flex-row justify-between gap-5"><div><p class="font-bold">Marco Vital</p><p class="text-[#5d6873]">Mechanical engineering student</p></div><div class="text-[#5d6873] text-sm text-left sm:text-right"><p>Email: [your email]</p><p>Phone: [your phone number]</p></div></div></footer>
  <script>
    const pages=['home','timeline','experience','robotics','fsae','projects','skills'];
    function switchPage(page, updateHash=true){ if(!pages.includes(page)) page='home'; pages.forEach(item=>{document.getElementById('page-'+item).classList.toggle('active-page',item===page); const nav=document.getElementById('nav-'+item); if(nav) nav.classList.toggle('active',item===page);}); if(updateHash) history.replaceState(null,'', '#'+page); }
    document.getElementById('menu-button').addEventListener('click',()=>{document.body.classList.toggle('menu-open'); document.getElementById('menu-button').setAttribute('aria-expanded',document.body.classList.contains('menu-open'));});
    document.querySelectorAll('.mobile-menu button').forEach(button=>button.addEventListener('click',()=>document.body.classList.remove('menu-open')));
    const initial=location.hash.slice(1); switchPage(pages.includes(initial)?initial:'home',false);
  </script>
</body>
</html>
