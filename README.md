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
    :root { --ink:#17202a; --muted:#5d6873; --paper:#f7f6f2; --blue:#164e63; --orange:#c65d32; --line:#dfe2df; }
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
    .timeline-dot { position:absolute; left:.5rem; top:1.5rem; width:1rem; height:1rem; border:3px solid var(--paper); border-radius:999px; background:var(--orange); box-shadow:0 0 0 1px var(--orange); }
  </style>
</head>
<body>
  <header class="border-b border-[#dfe2df] bg-[#f7f6f2]/95 sticky top-0 z-50 backdrop-blur">
    <nav class="max-w-6xl mx-auto px-5 lg:px-8 h-20 flex items-center justify-between" aria-label="Main navigation">
      <button onclick="switchPage('home')" class="text-left" aria-label="Go to home"><span class="block font-bold text-xl tracking-tight">Marco Vital</span><span class="block text-xs text-[#5d6873] mt-0.5">Mechanical Engineering</span></button>
      <div class="hidden md:flex items-center gap-7 text-sm font-semibold">
        <button onclick="switchPage('home')" id="nav-home" class="nav-link active py-2">Home</button><button onclick="switchPage('timeline')" id="nav-timeline" class="nav-link py-2">Timeline</button><button onclick="switchPage('experience')" id="nav-experience" class="nav-link py-2">Work Experience</button><button onclick="switchPage('robotics')" id="nav-robotics" class="nav-link py-2">Robotics</button><button onclick="switchPage('fsae')" id="nav-fsae" class="nav-link py-2">FSAE</button><button onclick="switchPage('projects')" id="nav-projects" class="nav-link py-2">Personal Projects</button><button onclick="switchPage('skills')" id="nav-skills" class="nav-link py-2">Skills</button>
      </div>
      <button id="menu-button" class="md:hidden text-xl p-2" aria-label="Open menu" aria-expanded="false"><i class="fa-solid fa-bars"></i></button>
    </nav>
    <div class="mobile-menu hidden md:hidden flex-col gap-1 px-5 pb-4 text-sm font-semibold border-t border-[#dfe2df]"><button onclick="switchPage('home')" class="text-left py-2">Home</button><button onclick="switchPage('timeline')" class="text-left py-2">Timeline</button><button onclick="switchPage('experience')" class="text-left py-2">Work Experience</button><button onclick="switchPage('robotics')" class="text-left py-2">Robotics</button><button onclick="switchPage('fsae')" class="text-left py-2">FSAE</button><button onclick="switchPage('projects')" class="text-left py-2">Personal Projects</button><button onclick="switchPage('skills')" class="text-left py-2">Skills</button></div>
  </header>

  <main class="max-w-6xl mx-auto px-5 lg:px-8 py-12 md:py-20">
    <section id="page-home" class="page-section active-page"><div class="grid md:grid-cols-[1.1fr_.9fr] gap-12 items-center"><div><p class="eyebrow mb-5">Mechanical engineering student · UMass Amherst</p><h1 class="text-5xl md:text-7xl leading-[.98] font-bold tracking-tight mb-6">Designing reliable systems<br><span class="text-[#164e63]">for the real world.</span></h1><p class="text-lg text-[#5d6873] leading-relaxed max-w-xl mb-8">I am a mechanical engineering student interested in design, robotics, analysis, and manufacturing.</p><p class="mt-8 text-sm text-[#5d6873]"><i class="fa-solid fa-location-dot mr-2 text-[#c65d32]"></i>Ludlow, Massachusetts · Expected May 2028</p></div><div class="placeholder min-h-[360px] md:min-h-[430px]"><div><i class="fa-regular fa-image text-3xl mb-3"></i><p class="text-sm">Portrait / hero image<br><span class="text-xs">Add your photo here</span></p></div></div></div><div class="border-t border-[#dfe2df] mt-20 pt-8 grid sm:grid-cols-2 gap-8"><div><p class="eyebrow">Currently</p><p class="mt-2 font-semibold">Atlas Actuator Team Co-op<br><span class="font-normal text-[#5d6873]">Boston Dynamics</span></p></div><div><p class="eyebrow">Focus</p><p class="mt-2 font-semibold">Design, analysis & manufacturing</p></div></div></section>

    <section id="page-experience" class="page-section"><div class="max-w-3xl mb-12"><p class="eyebrow mb-3">Experience</p><h1 class="text-4xl md:text-5xl font-bold mb-4">Building things, then learning from them.</h1></div><div class="space-y-6"><article class="card p-6 md:p-8"><p class="eyebrow">July 2026 – Present</p><h2 class="text-2xl font-bold mt-1">Atlas Actuator Team Co-op</h2><p class="text-[#164e63] font-semibold">Boston Dynamics</p></article><article class="card p-6 md:p-8"><p class="eyebrow">Fall 2025 – Spring 2026</p><h2 class="text-2xl font-bold mt-1">Manufacturing Intern</h2><p class="text-[#164e63] font-semibold">UMass Amherst</p></article></div></section>

    <section id="page-robotics" class="page-section"><div class="max-w-3xl mb-12"><p class="eyebrow mb-3">Student design team</p><h1 class="text-4xl md:text-5xl font-bold mb-4">UMass Robotics Research Team</h1></div><div class="grid lg:grid-cols-2 gap-6"><article class="card overflow-hidden"><div class="placeholder"><p class="text-sm">Add quadruped photo or CAD render here</p></div><div class="p-6"><h2 class="text-2xl font-bold">Robotics</h2><p class="text-[#5d6873] mt-3">Add project details, responsibilities, and outcomes here.</p></div></article></div></section>

    <section id="page-fsae" class="page-section"><div class="max-w-3xl mb-12"><p class="eyebrow mb-3">Student design team · Fall 2024 – Present</p><h1 class="text-4xl md:text-5xl font-bold mb-4">Minutemen Racing</h1></div><div class="grid lg:grid-cols-[.8fr_1.2fr] gap-8 items-start"><div class="placeholder min-h-[390px]"><p class="text-sm">Add racecar / chassis photo here</p></div><div class="card p-6 md:p-8"><h2 class="text-2xl font-bold">Formula SAE</h2><p class="text-[#5d6873] mt-4">Add your contribution and project details here.</p><div class="mt-8 grid sm:grid-cols-2 gap-6"><div><p class="eyebrow">Focus areas</p><p class="mt-2 font-semibold">Chassis, packaging, and manufacturing</p></div><div><p class="eyebrow">Learning</p><p class="mt-2 font-semibold">Trade-offs, iteration, and validation</p></div></div></div></div></section>

    <section id="page-projects" class="page-section"><div class="max-w-3xl mb-12"><p class="eyebrow mb-3">Personal work</p><h1 class="text-4xl md:text-5xl font-bold mb-4">Projects</h1><p class="text-lg text-[#5d6873]">Personal engineering projects and experiments.</p></div><div class="grid lg:grid-cols-2 gap-6"><article class="card overflow-hidden"><div class="placeholder"><p class="text-sm">Add project image here</p></div><div class="p-6"><p class="eyebrow">Personal project</p><h2 class="text-2xl font-bold mt-1">Project title</h2><p class="text-[#5d6873] mt-3">Add a short project description here.</p></div></article></div></section>

    <section id="page-skills" class="page-section"><div class="max-w-3xl mb-12"><p class="eyebrow mb-3">Capabilities</p><h1 class="text-4xl md:text-5xl font-bold mb-4">Skills</h1><p class="text-lg text-[#5d6873]">Tools and techniques I use to build reliable systems.</p></div><div class="grid md:grid-cols-2 gap-6"><article class="card p-6 md:p-8"><h2 class="text-2xl font-bold">Design</h2><p class="text-[#5d6873] mt-4">Mechanical design, CAD, prototyping, and design iteration.</p></article><article class="card p-6 md:p-8"><h2 class="text-2xl font-bold">Analysis & manufacturing</h2><p class="text-[#5d6873] mt-4">Add software, analysis methods, and manufacturing processes here.</p></article></div></section>

    <section id="page-timeline" class="page-section"><div class="max-w-3xl mb-12"><p class="eyebrow mb-3">Engineering journey</p><h1 class="text-4xl md:text-5xl font-bold mb-4">Progress, one build at a time.</h1><p class="text-lg text-[#5d6873]">A place to document the experiences and milestones that have shaped my engineering path.</p></div>
      <div class="relative pl-10 md:pl-14">
        <div class="timeline-line"></div>
        <!-- Duplicate or remove these blank entries as your timeline grows. -->
        <article class="relative card p-6 md:p-8 mb-6"><div class="timeline-dot"></div><p class="eyebrow">DATE / PERIOD</p><h2 class="text-2xl font-bold mt-1">Timeline entry title</h2><p class="text-[#164e63] font-semibold mt-1">Organization, course, or project</p><p class="text-[#5d6873] mt-4">Add a short description of what you worked on, learned, or accomplished.</p></article>
        <article class="relative card p-6 md:p-8 mb-6"><div class="timeline-dot"></div><p class="eyebrow">DATE / PERIOD</p><h2 class="text-2xl font-bold mt-1">Timeline entry title</h2><p class="text-[#164e63] font-semibold mt-1">Organization, course, or project</p><p class="text-[#5d6873] mt-4">Add a short description of what you worked on, learned, or accomplished.</p></article>
        <article class="relative card p-6 md:p-8 mb-6"><div class="timeline-dot"></div><p class="eyebrow">DATE / PERIOD</p><h2 class="text-2xl font-bold mt-1">Timeline entry title</h2><p class="text-[#164e63] font-semibold mt-1">Organization, course, or project</p><p class="text-[#5d6873] mt-4">Add a short description of what you worked on, learned, or accomplished.</p></article>
        <article class="relative card p-6 md:p-8"><div class="timeline-dot"></div><p class="eyebrow">DATE / PERIOD</p><h2 class="text-2xl font-bold mt-1">Timeline entry title</h2><p class="text-[#164e63] font-semibold mt-1">Organization, course, or project</p><p class="text-[#5d6873] mt-4">Add a short description of what you worked on, learned, or accomplished.</p></article>
      </div>
    </section>
  </main>

  <footer class="border-t border-[#dfe2df] mt-8"><div class="max-w-6xl mx-auto px-5 lg:px-8 py-8 flex flex-col sm:flex-row justify-between gap-5"><div><p class="font-bold">Marco Vital</p><p class="text-sm text-[#5d6873]">Mechanical Engineering · UMass Amherst</p></div><p class="text-sm text-[#5d6873]">© 2026 Marco Vital</p></div></footer>
  <script>
    const pages=['home','timeline','experience','robotics','fsae','projects','skills'];
    function switchPage(page, updateHash=true){ if(!pages.includes(page)) page='home'; pages.forEach(item=>{document.getElementById('page-'+item).classList.toggle('active-page',item===page); const nav=document.getElementById('nav-'+item); if(nav) nav.classList.toggle('active',item===page);}); if(updateHash) location.hash=page; window.scrollTo({top:0,behavior:'smooth'}); }
    document.getElementById('menu-button').addEventListener('click',()=>{document.body.classList.toggle('menu-open'); document.getElementById('menu-button').setAttribute('aria-expanded',document.body.classList.contains('menu-open'));});
    document.querySelectorAll('.mobile-menu button').forEach(button=>button.addEventListener('click',()=>document.body.classList.remove('menu-open')));
    const initial=location.hash.slice(1); switchPage(pages.includes(initial)?initial:'home',false);
  </script>
</body>
</html>
