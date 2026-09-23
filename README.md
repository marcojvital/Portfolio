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
    .photo-placeholder { min-height:420px; border:1px solid var(--line); border-radius:8px; background:linear-gradient(135deg,#eef1ee,#f7f6f2); display:flex; align-items:center; justify-content:center; color:#74817f; }
    .eyebrow { color:var(--orange); letter-spacing:.06em; font-size:.75rem; font-weight:700; }
    .menu-open .mobile-menu { display:flex; }
    #menu-button { display:none; }
    .timeline-grid { position:relative; }
    .timeline-grid::before { content:""; position:absolute; left:8.75rem; top:1.5rem; bottom:1.5rem; width:2px; background:var(--line); }
    .timeline-row { position:relative; display:grid; grid-template-columns:8.75rem minmax(0,1fr); column-gap:2.25rem; align-items:start; min-height:8.5rem; padding:1.25rem 0; }
    .timeline-date { position:relative; z-index:1; padding-right:1rem; text-align:right; }
    .timeline-date::after { content:""; position:absolute; top:.45rem; right:-.58rem; width:1rem; height:1rem; border:3px solid var(--paper); border-radius:50%; background:var(--orange); box-shadow:0 0 0 1px var(--orange); }
    .timeline-year { display:block; font:700 1.25rem 'Space Grotesk',sans-serif; }
    .timeline-season { display:block; color:var(--muted); font-size:.8rem; font-weight:700; text-transform:uppercase; letter-spacing:.08em; }
    .timeline-events { display:grid; grid-template-columns:repeat(auto-fit,minmax(15rem,1fr)); gap:1rem; min-width:0; }
    .timeline-card { min-height:6rem; padding:1.25rem; border-left:4px solid var(--topic-color,var(--orange)); }
    .timeline-card .eyebrow { color:var(--topic-color,var(--orange)); }
    .timeline-theme-robotics { --topic-color:var(--orange); }
    .timeline-theme-school { --topic-color:var(--maroon); }
    .timeline-theme-bd { --topic-color:var(--bd-blue); }
    .timeline-theme-fsae { --topic-color:var(--fsae-tan); }
    @media (max-width:700px) {
      .timeline-grid::before { left:1rem; top:1rem; bottom:1rem; }
      .timeline-row { grid-template-columns:2rem minmax(0,1fr); column-gap:1rem; min-height:0; padding:1.25rem 0; }
      .timeline-date { padding:0; text-align:left; writing-mode:vertical-rl; transform:rotate(180deg); }
      .timeline-date::after { top:.2rem; right:auto; left:.52rem; }
      .timeline-year { font-size:1rem; }
      .timeline-season { font-size:.68rem; }
      .timeline-events { grid-template-columns:1fr; }
    }
  </style>
</head>
<body>
  <header class="border-b border-[#dfe2df] bg-[#f7f6f2]/95 sticky top-0 z-50 backdrop-blur">
    <nav class="max-w-6xl mx-auto px-5 lg:px-8 h-20 flex items-center justify-between" aria-label="Main navigation">
      <button onclick="switchPage('home')" class="text-left" aria-label="Go to home"><span class="block font-bold text-xl tracking-tight">Marco Vital</span><span class="block text-xs text-[#5d6873] mt-1">Mechanical Engineering</span></button>
      <div class="hidden md:flex items-center gap-7 text-sm font-semibold"><button onclick="switchPage('home')" id="nav-home" class="nav-link active py-2">Home</button><button onclick="switchPage('timeline')" id="nav-timeline" class="nav-link py-2">Timeline</button><button onclick="switchPage('experience')" id="nav-experience" class="nav-link py-2">Work Experience</button><button onclick="switchPage('robotics')" id="nav-robotics" class="nav-link py-2">Robotics</button><button onclick="switchPage('fsae')" id="nav-fsae" class="nav-link py-2">FSAE</button><button onclick="switchPage('projects')" id="nav-projects" class="nav-link py-2">Projects</button><button onclick="switchPage('skills')" id="nav-skills" class="nav-link py-2">Skills</button></div>
      <button id="menu-button" class="md:hidden text-xl p-2" aria-label="Open menu" aria-expanded="false"><i class="fa-solid fa-bars"></i></button>
    </nav>
    <div class="mobile-menu md:hidden hidden flex-col gap-1 px-5 pb-4 text-sm font-semibold border-t border-[#dfe2df]"><button onclick="switchPage('home')" class="text-left py-2">Home</button><button onclick="switchPage('timeline')" class="text-left py-2">Timeline</button><button onclick="switchPage('experience')" class="text-left py-2">Experience</button><button onclick="switchPage('robotics')" class="text-left py-2">Robotics</button><button onclick="switchPage('fsae')" class="text-left py-2">FSAE</button><button onclick="switchPage('projects')" class="text-left py-2">Projects</button><button onclick="switchPage('skills')" class="text-left py-2">Skills</button></div>
  </header>
  <main class="max-w-6xl mx-auto px-5 lg:px-8 py-12 md:py-20">
    <section id="page-home" class="page-section active-page"><div class="grid md:grid-cols-[1.1fr_.9fr] gap-12 items-center"><div><p class="eyebrow mb-5">Mechanical Engineering @ UMass Amherst</p><h1 class="text-4xl md:text-6xl font-bold leading-tight tracking-tight mb-4">Marco Vital</h1><p class="text-lg text-[#5d6873] mb-6">Currently working with UMass Robotics and Formula SAE.</p><div class="flex flex-wrap gap-4"><button onclick="switchPage('projects')" class="bg-[#164e63] text-white px-5 py-3 rounded font-semibold">View projects</button><button onclick="switchPage('timeline')" class="border border-[#dfe2df] bg-white px-5 py-3 rounded font-semibold">See timeline</button></div></div><div class="photo-placeholder">Picture Placeholder</div></div></section>
    <section id="page-timeline" class="page-section">
      <div class="max-w-3xl mb-12"><p class="eyebrow mb-3">Engineering journey</p><h1 class="text-4xl md:text-5xl font-bold mb-4">Progress, one build at a time.</h1><p class="text-lg text-[#5d6873]">A season-by-season view of the work, teams, and experiences shaping my engineering path.</p></div>
      <div class="timeline-grid" aria-label="Engineering timeline from Fall 2026 to Fall 2022">
        <div class="timeline-row"><div class="timeline-date"><span class="timeline-year">2026</span><span class="timeline-season">Fall</span></div><div class="timeline-events"><article class="card timeline-card timeline-theme-bd"><p class="eyebrow mb-2">Work experience</p><h2 class="text-xl font-bold">Advanced Mechanical Engineering</h2><p class="text-sm text-[#5d6873] mt-2">Boston Dynamics</p></article></div></div>
        <div class="timeline-row"><div class="timeline-date"><span class="timeline-year">2026</span><span class="timeline-season">Summer</span></div><div class="timeline-events"><article class="card timeline-card timeline-theme-bd"><p class="eyebrow mb-2">Work experience</p><h2 class="text-xl font-bold">Boston Dynamics</h2><p class="text-sm text-[#5d6873] mt-2">Mechanical engineering internship</p></article><article class="card timeline-card timeline-theme-fsae"><p class="eyebrow mb-2">Student design team</p><h2 class="text-xl font-bold">Formula SAE</h2><p class="text-sm text-[#5d6873] mt-2">Design and build season</p></article></div></div>
        <div class="timeline-row"><div class="timeline-date"><span class="timeline-year">2026</span><span class="timeline-season">Spring</span></div><div class="timeline-events"><article class="card timeline-card timeline-theme-robotics"><p class="eyebrow mb-2">Student design team</p><h2 class="text-xl font-bold">UMass Robotics Research</h2><p class="text-sm text-[#5d6873] mt-2">Prototype iteration and mechatronic problem solving</p></article><article class="card timeline-card timeline-theme-school"><p class="eyebrow mb-2">Education</p><h2 class="text-xl font-bold">UMass Amherst</h2><p class="text-sm text-[#5d6873] mt-2">Mechanical engineering coursework</p></article></div></div>
        <div class="timeline-row"><div class="timeline-date"><span class="timeline-year">2025</span><span class="timeline-season">Fall</span></div><div class="timeline-events"><article class="card timeline-card timeline-theme-robotics"><p class="eyebrow mb-2">Student design team</p><h2 class="text-xl font-bold">UMass Robotics Research</h2><p class="text-sm text-[#5d6873] mt-2">Research, testing, and hands-on fabrication</p></article><article class="card timeline-card timeline-theme-school"><p class="eyebrow mb-2">Education</p><h2 class="text-xl font-bold">UMass Amherst</h2><p class="text-sm text-[#5d6873] mt-2">Mechanical engineering</p></article></div></div>
        <div class="timeline-row"><div class="timeline-date"><span class="timeline-year">2025</span><span class="timeline-season">Summer</span></div><div class="timeline-events"><article class="card timeline-card"><p class="eyebrow mb-2">Research</p><h2 class="text-xl font-bold">Summer research</h2><p class="text-sm text-[#5d6873] mt-2">Developing and testing physical systems</p></article></div></div>
        <div class="timeline-row"><div class="timeline-date"><span class="timeline-year">2025</span><span class="timeline-season">Spring</span></div><div class="timeline-events"><article class="card timeline-card timeline-theme-fsae"><p class="eyebrow mb-2">Student design team</p><h2 class="text-xl font-bold">Formula SAE</h2><p class="text-sm text-[#5d6873] mt-2">Manufacturing constraints and design tradeoffs</p></article><article class="card timeline-card timeline-theme-school"><p class="eyebrow mb-2">Education</p><h2 class="text-xl font-bold">UMass Amherst</h2><p class="text-sm text-[#5d6873] mt-2">Mechanical engineering coursework</p></article></div></div>
        <div class="timeline-row"><div class="timeline-date"><span class="timeline-year">2024</span><span class="timeline-season">Fall</span></div><div class="timeline-events"><article class="card timeline-card timeline-theme-fsae"><p class="eyebrow mb-2">Student design team</p><h2 class="text-xl font-bold">Formula SAE</h2><p class="text-sm text-[#5d6873] mt-2">Joined the team and began vehicle development</p></article><article class="card timeline-card timeline-theme-school"><p class="eyebrow mb-2">Education</p><h2 class="text-xl font-bold">UMass Amherst</h2><p class="text-sm text-[#5d6873] mt-2">Started mechanical engineering</p></article></div></div>
        <div class="timeline-row"><div class="timeline-date"><span class="timeline-year">2024</span><span class="timeline-season">Summer</span></div><div class="timeline-events"><article class="card timeline-card"><p class="eyebrow mb-2">Making</p><h2 class="text-xl font-bold">Design and prototyping</h2><p class="text-sm text-[#5d6873] mt-2">Building a practical foundation in hands-on engineering</p></article></div></div>
        <div class="timeline-row"><div class="timeline-date"><span class="timeline-year">2024</span><span class="timeline-season">Spring</span></div><div class="timeline-events"><article class="card timeline-card timeline-theme-school"><p class="eyebrow mb-2">Education</p><h2 class="text-xl font-bold">Engineering foundation</h2><p class="text-sm text-[#5d6873] mt-2">Coursework, experimentation, and design practice</p></article></div></div>
        <div class="timeline-row"><div class="timeline-date"><span class="timeline-year">2023</span><span class="timeline-season">Fall</span></div><div class="timeline-events"><article class="card timeline-card timeline-theme-school"><p class="eyebrow mb-2">Education</p><h2 class="text-xl font-bold">Started at UMass Amherst</h2><p class="text-sm text-[#5d6873] mt-2">Began the mechanical engineering journey</p></article></div></div>
        <div class="timeline-row"><div class="timeline-date"><span class="timeline-year">2023</span><span class="timeline-season">Summer</span></div><div class="timeline-events"><article class="card timeline-card"><p class="eyebrow mb-2">Preparation</p><h2 class="text-xl font-bold">Preparing for college</h2><p class="text-sm text-[#5d6873] mt-2">Exploring engineering and preparing to begin at UMass Amherst</p></article></div></div>
        <div class="timeline-row"><div class="timeline-date"><span class="timeline-year">2023</span><span class="timeline-season">Spring</span></div><div class="timeline-events"><article class="card timeline-card"><p class="eyebrow mb-2">Exploration</p><h2 class="text-xl font-bold">Engineering interests</h2><p class="text-sm text-[#5d6873] mt-2">Developing an interest in mechanical design and making</p></article></div></div>
        <div class="timeline-row"><div class="timeline-date"><span class="timeline-year">2022</span><span class="timeline-season">Fall</span></div><div class="timeline-events"><article class="card timeline-card timeline-theme-school"><p class="eyebrow mb-2">Beginning</p><h2 class="text-xl font-bold">Started the journey</h2><p class="text-sm text-[#5d6873] mt-2">The starting point of my engineering timeline</p></article></div></div>
      </div>
    </section>
    <section id="page-experience" class="page-section"><div class="max-w-3xl mb-12"><p class="eyebrow mb-3">Work experience</p><h1 class="text-4xl md:text-5xl font-bold mb-4">Work Experience</h1></div><div class="card p-6 md:p-8"><p class="eyebrow mb-2">Boston Dynamics</p><h2 class="text-2xl font-bold mb-3">Mechanical engineering</h2><p class="text-[#5d6873]">Experience details coming soon.</p></div></section>
    <section id="page-robotics" class="page-section"><div class="max-w-3xl mb-12"><p class="eyebrow mb-3">Student design team</p><h1 class="text-4xl md:text-5xl font-bold mb-4">UMass Robotics Research</h1><p class="text-lg text-[#5d6873]">Mechatronic problem solving, prototype iteration, and practical engineering decision-making in dynamic environments.</p></div></section>
    <section id="page-fsae" class="page-section"><div class="max-w-3xl mb-12"><p class="eyebrow mb-3">Student design team</p><h1 class="text-4xl md:text-5xl font-bold mb-4">Formula SAE</h1><p class="text-lg text-[#5d6873]">Designing, manufacturing, and testing as part of a student-built race car team.</p></div></section>
    <section id="page-projects" class="page-section"><div class="max-w-3xl mb-12"><p class="eyebrow mb-3">Personal work</p><h1 class="text-4xl md:text-5xl font-bold mb-4">Projects</h1><p class="text-lg text-[#5d6873]">Work across design, making, and engineering.</p></div></section>
    <section id="page-skills" class="page-section"><div class="max-w-3xl mb-12"><p class="eyebrow mb-3">Capabilities</p><h1 class="text-4xl md:text-5xl font-bold mb-4">Skills</h1><p class="text-lg text-[#5d6873]">Mechanical design, prototyping, and hands-on problem solving.</p></div></section>
  </main>
  <footer class="border-t border-[#dfe2df] mt-8"><div class="max-w-6xl mx-auto px-5 lg:px-8 py-8"><p class="font-bold">Marco Vital</p><p class="text-sm text-[#5d6873] mt-1">Mechanical Engineering @ UMass Amherst</p></div></footer>
  <script>
    const pages=['home','timeline','experience','robotics','fsae','projects','skills'];
    function switchPage(page, updateHash=true){ if(!pages.includes(page)) page='home'; pages.forEach(item=>{ document.getElementById('page-'+item).classList.toggle('active-page',item===page); const nav=document.getElementById('nav-'+item); if(nav) nav.classList.toggle('active',item===page); }); if(updateHash) history.replaceState(null,'','#'+page); window.scrollTo({top:0,behavior:'smooth'}); }
    document.getElementById('menu-button').addEventListener('click',()=>{ document.body.classList.toggle('menu-open'); const expanded=document.body.classList.contains('menu-open'); document.getElementById('menu-button').setAttribute('aria-expanded',expanded); });
    document.querySelectorAll('.mobile-menu button').forEach(button=>button.addEventListener('click',()=>document.body.classList.remove('menu-open')));
    const initial=location.hash.slice(1); switchPage(pages.includes(initial)?initial:'home',false);
  </script>
</body>
</html>
