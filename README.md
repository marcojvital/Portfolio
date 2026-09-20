<!DOCTYPE html>
<html lang="en" class="scroll-smooth">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <!-- EDIT HERE: Update the browser description and page title. -->
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
  </style>
</head>
<body>
  <header class="border-b border-[#dfe2df] bg-[#f7f6f2]/95 sticky top-0 z-50 backdrop-blur">
    <nav class="max-w-6xl mx-auto px-5 lg:px-8 h-20 flex items-center justify-between" aria-label="Main navigation">
      <!-- EDIT HERE: Change your name and subtitle in the header. -->
      <button onclick="switchPage('home')" class="text-left" aria-label="Go to home">
        <span class="block font-bold text-xl tracking-tight">Marco Vital</span>
        <span class="block text-xs text-[#5d6873] mt-0.5">Mechanical Engineering</span>
      </button>
      <div class="hidden md:flex items-center gap-7 text-sm font-semibold">
        <button onclick="switchPage('home')" id="nav-home" class="nav-link active py-2">Home</button>
        <button onclick="switchPage('skills')" id="nav-skills" class="nav-link py-2">Skills</button>
        <button onclick="switchPage('experience')" id="nav-experience" class="nav-link py-2">Experience</button>
        <button onclick="switchPage('robotics')" id="nav-robotics" class="nav-link py-2">Robotics</button>
        <button onclick="switchPage('fsae')" id="nav-fsae" class="nav-link py-2">FSAE</button>
        <button onclick="switchPage('projects')" id="nav-projects" class="nav-link py-2">Projects</button>
      </div>
      <button id="menu-button" class="md:hidden text-xl p-2" aria-label="Open menu" aria-expanded="false"><i class="fa-solid fa-bars"></i></button>
    </nav>
    <div class="mobile-menu hidden md:hidden flex-col gap-1 px-5 pb-4 text-sm font-semibold border-t border-[#dfe2df]">
      <button onclick="switchPage('home')" class="text-left py-2">Home</button><button onclick="switchPage('skills')" class="text-left py-2">Skills</button><button onclick="switchPage('experience')" class="text-left py-2">Experience</button><button onclick="switchPage('robotics')" class="text-left py-2">Robotics</button><button onclick="switchPage('fsae')" class="text-left py-2">FSAE</button><button onclick="switchPage('projects')" class="text-left py-2">Projects</button>
    </div>
  </header>
  <main class="max-w-6xl mx-auto px-5 lg:px-8 py-12 md:py-20">
    <section id="page-home" class="page-section active-page">
      <div class="grid md:grid-cols-[1.1fr_.9fr] gap-12 items-center"><div>
        <!-- EDIT HERE: Update the homepage eyebrow, headline, intro text, location, and graduation date. -->
        <p class="eyebrow mb-5">Mechanical Engineering Student @ UMass Amherst</p>
        <h1 class="text-5xl md:text-7xl leading-[.98] font-bold tracking-tight mb-6">I like figuring out<br><span class="text-[#164e63]">how things work.</span></h1>
        <p class="text-lg text-[#5d6873] leading-relaxed max-w-xl mb-8">I am a mechanical engineering student interested in design, robotics, analysis, and manufacturing.</p>
        <p class="mt-8 text-sm text-[#5d6873]"><i class="fa-solid fa-location-dot mr-2 text-[#c65d32]"></i>Ludlow, Massachusetts · Expected May 2028</p>
      </div><div class="placeholder min-h-[360px] md:min-h-[430px]"><div><i class="fa-regular fa-image text-3xl mb-3"></i><p class="text-sm">Portrait / hero image<br><span class="text-xs">Add your photo here</span></p></div></div></div>
      <div class="border-t border-[#dfe2df] mt-20 pt-8 grid sm:grid-cols-2 gap-8"><div>
        <!-- EDIT HERE: Replace this with your current job title and company. -->
        <p class="eyebrow">Currently</p>
        <p class="mt-2 font-semibold">Atlas Actuator Team Co-op<br><span class="font-normal text-[#5d6873]">Boston Dynamics</span></p>
      </div><div>
        <!-- EDIT HERE: Replace this focus area text with your own technical focus. -->
        <p class="eyebrow">Focus</p>
        <p class="mt-2 font-semibold">Design, analysis & manufacturing</p>
      </div></div>
    </section>
    <section id="page-skills" class="page-section">
      <!-- EDIT HERE: Update the Skills page heading and paragraph. -->
      <div class="max-w-3xl mb-12"><p class="eyebrow mb-3">Capabilities</p><h1 class="text-4xl md:text-5xl font-bold mb-4">Skills</h1><p class="text-lg text-[#5d6873]"></div>
      <div class="grid md:grid-cols-2 gap-6">
        <!-- EDIT HERE: Replace each skill card title and description. -->
        <article class="card p-6 md:p-8"><h2 class="text-2xl font-bold">Design</h2><p class="text-[#5d6873] mt-4">Mechanical design, CAD, prototyping, and design iteration.</p></article>
        <article class="card p-6 md:p-8"><h2 class="text-2xl font-bold">Engineering tools</h2><p class="text-[#5d6873] mt-4">CAD, simulation, technical drawings, and engineering analysis.</p></article>
        <article class="card p-6 md:p-8"><h2 class="text-2xl font-bold">Manufacturing</h2><p class="text-[#5d6873] mt-4">Hands-on fabrication, machining, assembly, and process improvement.</p></article>
        <article class="card p-6 md:p-8"><h2 class="text-2xl font-bold">Programming</h2><p class="text-[#5d6873] mt-4">Programming for engineering applications.</p></article>
      </div>
    </section>
    <section id="page-experience" class="page-section">
      <!-- EDIT HERE: Update the Experience page heading and intro paragraph. -->
      <div class="max-w-3xl mb-12"><p class="eyebrow mb-3">Experience</p><h1 class="text-4xl md:text-5xl font-bold mb-4">Building things, then learning from them.</h1></div>
      <div class="space-y-6">
        <!-- EDIT HERE: Update this first card with your current role, dates, company, description, and bullets. -->
        <article class="card p-6 md:p-8"><p class="eyebrow">July 2026 – Present</p><h2 class="text-2xl font-bold mt-1">Atlas Actuator Team Co-op</h2><p class="text-[#164e63] font-semibold">Boston Dynamics</p><p class="text-[#5d6873] mt-4">Working on mechanical engineering projects involving design, analysis, and manufacturing.</p></article>
        <!-- EDIT HERE: Duplicate or replace this second card for another internship, role, or project. -->
        <article class="card p-6 md:p-8"><p class="eyebrow">Fall 2025 – Spring 2026</p><h2 class="text-2xl font-bold mt-1">Manufacturing Intern</h2><p class="text-[#164e63] font-semibold">UMass Amherst</p></article>
      </div>
    </section>
    <section id="page-robotics" class="page-section">
      <!-- EDIT HERE: Update the robotics section heading and summary text. -->
      <div class="max-w-3xl mb-12"><p class="eyebrow mb-3">Student Design Team</p><h1 class="text-4xl md:text-5xl font-bold mb-4">UMass Robotics Club - Research Team</h1></div>
      <div class="grid lg:grid-cols-2 gap-6">
        <!-- EDIT HERE: Replace the placeholder photo and robotics card text. -->
        <article class="card overflow-hidden"><div class="placeholder"><p class="text-sm">Add quadruped photo or CAD render here</p></div><div class="p-6"><h2 class="text-2xl font-bold">Quadruped robotics</h2></div></article>
        <!-- EDIT HERE: Replace the placeholder photo and text for the second robotics card. -->
        <article class="card overflow-hidden"><div class="placeholder"><p class="text-sm">Add humanoid robot photo or CAD render here</p></div><div class="p-6"><h2 class="text-2xl font-bold">Humanoid robotics</h2></div></article>
      </div>
    </section>
    <section id="page-fsae" class="page-section">
      <!-- EDIT HERE: Update the FSAE heading and summary text. -->
      <div class="max-w-3xl mb-12"><p class="eyebrow mb-3">Student Design Team · Fall 2024 – Present</p><h1 class="text-4xl md:text-5xl font-bold mb-4">Minutemen Racing</h1></div>
      <div class="grid lg:grid-cols-[.8fr_1.2fr] gap-8 items-start">
        <!-- EDIT HERE: Replace this placeholder with a racecar or chassis photo. -->
        <div class="placeholder min-h-[390px]"><p class="text-sm">Add racecar / chassis photo here</p></div>
        <!-- EDIT HERE: Replace this project description with your FSAE work summary. -->
        <div class="card p-6 md:p-8"><h2 class="text-2xl font-bold">Project description</h2><p class="text-[#5d6873] mt-4">Add the project goal, your responsibilities, design decisions, results, and lessons learned.</p></div>
      </div>
    </section>
    <section id="page-projects" class="page-section">
      <!-- EDIT HERE: Update project section intro text. -->
      <div class="max-w-3xl mb-12"><p class="eyebrow mb-3">Personal work</p><h1 class="text-4xl md:text-5xl font-bold mb-4">Projects</h1><p class="text-lg text-[#5d6873]">Personal engineering projects and experiments.</p></div>
      <div class="grid lg:grid-cols-2 gap-6">
        <!-- EDIT HERE: Replace this project card with your real project title, image, and description. -->
        <article class="card overflow-hidden"><div class="placeholder"><p class="text-sm">Add project image here</p></div><div class="p-6"><p class="eyebrow">Personal project</p><h2 class="text-2xl font-bold mt-2">Project title</h2><p class="text-[#5d6873] mt-3">Explain what you built, the problem it solves, the tools you used, and the result.</p></div></article>
        <!-- EDIT HERE: Duplicate this project card for more items or replace it with another project. -->
        <article class="card overflow-hidden"><div class="placeholder"><p class="text-sm">Add project image here</p></div><div class="p-6"><p class="eyebrow">Personal project</p><h2 class="text-2xl font-bold mt-2">Project title</h2><p class="text-[#5d6873] mt-3">Explain what you built, the problem it solves, the tools you used, and the result.</p></div></article>
      </div>
    </section>
  </main>
  <footer class="border-t border-[#dfe2df] mt-8"><div class="max-w-6xl mx-auto px-5 lg:px-8 py-8 flex flex-col sm:flex-row justify-between gap-5"><div><p class="font-bold">Marco Vital</p><p class="text-sm text-[#5d6873]">Mechanical engineering portfolio</p></div>
    <!-- EDIT HERE: Update both email and phone links and displayed values. -->
    <div class="flex flex-col sm:items-end gap-2 text-sm text-[#5d6873]"><a href="mailto:marcojvital@gmail.com" aria-label="Email Marco Vital" class="inline-flex items-center gap-2 hover:text-[#164e63]"><i class="fa-solid fa-envelope" aria-hidden="true"></i><span>marcojvital@gmail.com</span></a><a href="tel:+14135405887" aria-label="Call Marco Vital" class="inline-flex items-center gap-2 hover:text-[#164e63]"><i class="fa-solid fa-phone" aria-hidden="true"></i><span>(413)-335-7760</span></a></div>
  </div></footer>
  <script>
    const pages=['home','skills','experience','robotics','fsae','projects'];
    function switchPage(page, updateHash=true){ if(!pages.includes(page)) page='home'; pages.forEach(item=>{document.getElementById('page-'+item).classList.toggle('active-page',item===page);const nav=document.getElementById('nav-'+item);if(nav) nav.classList.toggle('active',item===page);});document.body.classList.remove('menu-open');if(updateHash) history.replaceState(null,'','#'+page);window.scrollTo({top:0,behavior:'smooth'}); }
    document.getElementById('menu-button').addEventListener('click',()=>{document.body.classList.toggle('menu-open');document.getElementById('menu-button').setAttribute('aria-expanded',document.body.classList.contains('menu-open'));});
    document.querySelectorAll('.mobile-menu button').forEach(button=>button.addEventListener('click',()=>document.body.classList.remove('menu-open'))); switchPage(pages.includes(location.hash.slice(1))?location.hash.slice(1):'home',false);
  </script>
</body>
</html>
