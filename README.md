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
    .timeline-item .timeline-dot { position:absolute; left:.5rem; top:1.5rem; width:1rem; height:1rem; border:3px solid var(--paper); border-radius:999px; background:var(--topic-color); box-shadow:0 0 0 1px var(--line); }
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
    <section id="page-home" class="page-section active-page"><div class="grid md:grid-cols-[1.1fr_.9fr] gap-12 items-center"><div><p class="eyebrow mb-5">Mechanical engineering student · UMass Amherst</p><h1 class="text-4xl md:text-6xl font-bold tracking-tight leading-none mb-6">Designing for motion, performance, and real-world impact.</h1><p class="text-lg text-[#5d6873] leading-relaxed mb-8">I’m Marco Vital, a mechanical engineering student exploring systems, fabrication, and product design through research, competition, and hands-on work.</p><div class="flex flex-wrap gap-4"><button onclick="switchPage('timeline')" class="bg-[#164e63] text-white px-5 py-3 rounded-md font-semibold">View timeline</button><button onclick="switchPage('projects')" class="border border-[#dfe2df] bg-white px-5 py-3 rounded-md font-semibold">Explore projects</button></div></div><div class="card p-6 md:p-8"><div class="grid gap-5"><div class="placeholder rounded-md">[Photo / profile placeholder]</div><div><p class="eyebrow mb-2">Current focus</p><ul class="space-y-2 text-[#5d6873]"><li>• Mechatronics and actuator design</li><li>• FSAE vehicle development</li><li>• Research in robotics and design systems</li></ul></div></div></div></div></section>
    <section id="page-experience" class="page-section"><div class="max-w-3xl mb-12"><p class="eyebrow mb-3">Experience</p><h1 class="text-4xl md:text-5xl font-bold mb-4">Building things, then learning from them.</h1><p class="text-lg text-[#5d6873]">My experience spans research, student design teams, and early engineering work, with a focus on solving real technical problems and iterating quickly.</p></div><div class="grid gap-6 md:grid-cols-2"><article class="card p-6"><p class="eyebrow">July 2026 — Present</p><h2 class="text-2xl font-bold mt-1">Atlas Actuation Co-op</h2><p class="text-[#5d6873] mt-3">Working on actuation system design and mechanical integration in an applied engineering environment.</p></article><article class="card p-6"><p class="eyebrow">Summer 2025</p><h2 class="text-2xl font-bold mt-1">Summer Research Internship</h2><p class="text-[#5d6873] mt-3">Supported a robotics research project focused on practical prototyping and mechanical evaluation.</p></article></div></section>
    <section id="page-robotics" class="page-section"><div class="max-w-3xl mb-12"><p class="eyebrow mb-3">Student design team</p><h1 class="text-4xl md:text-5xl font-bold mb-4">UMass Robotics Research</h1><p class="text-lg text-[#5d6873]">I contribute to robotic systems work through mechanism design, prototype testing, and design iteration.</p></div><div class="card p-6 md:p-8"><h2 class="text-2xl font-bold mb-3">Role overview</h2><p class="text-[#5d6873] leading-relaxed">This work has developed my understanding of mechanical systems, linkage design, and the discipline of turning concept ideas into functioning hardware.</p></div></section>
    <section id="page-fsae" class="page-section"><div class="max-w-3xl mb-12"><p class="eyebrow mb-3">Student design team · Fall 2024 — Present</p><h1 class="text-4xl md:text-5xl font-bold mb-4">Formula SAE</h1><p class="text-lg text-[#5d6873]">I’m part of a multidisciplinary team developing a competitive race vehicle and improving our design process each cycle.</p></div><div class="card p-6 md:p-8"><h2 class="text-2xl font-bold mb-3">Focus areas</h2><p class="text-[#5d6873] leading-relaxed">Vehicle packaging, chassis development, and subsystem design all require balancing performance, manufacturability, and reliability.</p></div></section>
    <section id="page-projects" class="page-section"><div class="max-w-3xl mb-12"><p class="eyebrow mb-3">Personal work</p><h1 class="text-4xl md:text-5xl font-bold mb-4">Projects</h1><p class="text-lg text-[#5d6873]">A selection of design and build work that combines engineering reasoning, fabrication, and iteration.</p></div><div class="grid gap-6 md:grid-cols-2"><article class="card p-6"><h2 class="text-2xl font-bold mb-2">Prototype design</h2><p class="text-[#5d6873]">Focused on mechanical concept generation and rapid testing for functional systems.</p></article><article class="card p-6"><h2 class="text-2xl font-bold mb-2">Digital fabrication</h2><p class="text-[#5d6873]">Used CAD, iteration, and hands-on fabrication to refine ideas into usable parts.</p></article></div></section>
    <section id="page-skills" class="page-section"><div class="max-w-3xl mb-12"><p class="eyebrow mb-3">Capabilities</p><h1 class="text-4xl md:text-5xl font-bold mb-4">Skills</h1><p class="text-lg text-[#5d6873]">A practical toolkit built around mechanical engineering, prototyping, and system thinking.</p></div><div class="card p-6 md:p-8"><div class="flex flex-wrap gap-3 text-sm font-medium"><span class="bg-[#eef1ee] px-3 py-2 rounded-full">CAD</span><span class="bg-[#eef1ee] px-3 py-2 rounded-full">SolidWorks</span><span class="bg-[#eef1ee] px-3 py-2 rounded-full">Design for manufacturing</span><span class="bg-[#eef1ee] px-3 py-2 rounded-full">Prototyping</span><span class="bg-[#eef1ee] px-3 py-2 rounded-full">Mechanical analysis</span></div></div></section>
    <section id="page-timeline" class="page-section"><div class="max-w-3xl mb-12"><p class="eyebrow mb-3">Engineering journey</p><h1 class="text-4xl md:text-5xl font-bold mb-4">Progress, one build at a time.</h1><p class="text-lg text-[#5d6873]">A timeline of the work, study, and team experiences shaping my engineering path.</p></div>
      <div class="relative pl-10 md:pl-14">
        <div class="timeline-line"></div>
        <article class="timeline-item timeline-theme-bd relative card p-6 md:p-8 mb-6"><div class="timeline-dot"></div><p class="eyebrow">July 2026 - Present</p><h2 class="text-2xl font-bold mt-1">Atlas Actuation Co-op</h2><p class="text-[#5d6873] mt-3">Working with an engineering team on actuation and mechanical system development in a practical design environment.</p></article>
        <article class="timeline-item timeline-theme-school relative card p-6 md:p-8 mb-6"><div class="timeline-dot"></div><p class="eyebrow">September 2025 - May 2026</p><h2 class="text-2xl font-bold mt-1">Sophomore Year</h2><p class="text-[#5d6873] mt-3">Continued coursework in fundamentals and applied engineering, while deepening my design and analysis skills.</p></article>
        <article class="timeline-item timeline-theme-robotics relative card p-6 md:p-8 mb-6"><div class="timeline-dot"></div><p class="eyebrow">July 2025 - May 2026</p><h2 class="text-2xl font-bold mt-1">Leg Design Lead</h2><p class="text-[#5d6873] mt-3">Led mechanical design work for leg system development, balancing manufacturability, performance, and testing feedback.</p></article>
        <article class="timeline-item timeline-theme-fsae relative card p-6 md:p-8 mb-6"><div class="timeline-dot"></div><p class="eyebrow">June 2025 - August 2026</p><h2 class="text-2xl font-bold mt-1">Chassis Engineering Captain</h2><p class="text-[#5d6873] mt-3">Directed team design and development work around the chassis system, coordinating engineering trade-offs and build milestones.</p></article>
        <article class="timeline-item relative card p-6 md:p-8 mb-6"><div class="timeline-dot"></div><p class="eyebrow">May 2025 - August 2025</p><h2 class="text-2xl font-bold mt-1">Summer Research Intern</h2><p class="text-[#5d6873] mt-3">Supported a robotics-focused project exploring mechanical design, prototyping, and iterative testing.</p></article>
        <article class="timeline-item timeline-theme-fsae relative card p-6 md:p-8 mb-6"><div class="timeline-dot"></div><p class="eyebrow">October 2024 - May 2025</p><h2 class="text-2xl font-bold mt-1">Chassis Subteam Member</h2><p class="text-[#5d6873] mt-3">Contributed to design and fabrication work for vehicle chassis development within the FSAE team.</p></article>
        <article class="timeline-item timeline-theme-school relative card p-6 md:p-8 mb-6"><div class="timeline-dot"></div><p class="eyebrow">September 2024 - May 2025</p><h2 class="text-2xl font-bold mt-1">Freshman Year</h2><p class="text-[#5d6873] mt-3">Built a foundation in engineering fundamentals and team-based design while beginning hands-on project work.</p></article>
      </div>
    </section>
  </main>

  <footer class="border-t border-[#dfe2df] mt-8"><div class="max-w-6xl mx-auto px-5 lg:px-8 py-8 flex flex-col sm:flex-row justify-between gap-5"><div><p class="font-bold">Marco Vital</p><p class="text-[#5d6873]">Mechanical engineering student</p></div><div class="text-[#5d6873] text-sm sm:text-right"><p><a href="mailto:marco.vital@umass.edu" class="hover:text-[#164e63]">marco.vital@umass.edu</a></p><p>UMass Amherst</p></div></div></footer>
  <script>
    const pages=['home','timeline','experience','robotics','fsae','projects','skills'];
    function switchPage(page, updateHash=true){ if(!pages.includes(page)) page='home'; pages.forEach(item=>{document.getElementById('page-'+item).classList.toggle('active-page',item===page); const nav=document.getElementById('nav-'+item); if(nav) nav.classList.toggle('active',item===page);}); if(updateHash) location.hash = page; }
    document.getElementById('menu-button').addEventListener('click',()=>{document.body.classList.toggle('menu-open'); document.getElementById('menu-button').setAttribute('aria-expanded',document.body.classList.contains('menu-open'));});
    document.querySelectorAll('.mobile-menu button').forEach(button=>button.addEventListener('click',()=>document.body.classList.remove('menu-open')));
    const initial=location.hash.slice(1); switchPage(pages.includes(initial)?initial:'home',false);
  </script>
</body>
</html>
