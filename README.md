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
    .eyebrow { color:var(--orange); letter-spacing:.12em; text-transform:uppercase; font-size:.75rem; font-weight:700; }
    .menu-open .mobile-menu { display:flex; }
  </style>
</head>
<body>
  <header class="border-b border-[#dfe2df] bg-[#f7f6f2]/95 sticky top-0 z-50 backdrop-blur">
    <nav class="max-w-6xl mx-auto px-5 lg:px-8 h-20 flex items-center justify-between" aria-label="Main navigation">
      <button onclick="switchPage('home')" class="text-left" aria-label="Go to home">
        <span class="block font-bold text-xl tracking-tight">Marco Vital</span>
        <span class="block text-xs text-[#5d6873] mt-0.5">Mechanical Engineering</span>
      </button>
      <div class="hidden md:flex items-center gap-7 text-sm font-semibold">
        <button onclick="switchPage('home')" id="nav-home" class="nav-link active py-2">Home</button>
        <button onclick="switchPage('work experience')" id="nav-experience" class="nav-link py-2">Experience</button>
        <button onclick="switchPage('robotics')" id="nav-robotics" class="nav-link py-2">Robotics</button>
        <button onclick="switchPage('fsae')" id="nav-fsae" class="nav-link py-2">FSAE</button>
        <button onclick="switchPage('projects')" id="nav-projects" class="nav-link py-2">Projects</button>
      </div>
      <button id="menu-button" class="md:hidden text-xl p-2" aria-label="Open menu" aria-expanded="false"><i class="fa-solid fa-bars"></i></button>
    </nav>
    <div class="mobile-menu hidden md:hidden flex-col gap-1 px-5 pb-4 text-sm font-semibold border-t border-[#dfe2df]">
      <button onclick="switchPage('home')" class="text-left py-2">Home</button>
      <button onclick="switchPage('work experience')" class="text-left py-2">Experience</button>
      <button onclick="switchPage('robotics')" class="text-left py-2">Robotics</button>
      <button onclick="switchPage('fsae')" class="text-left py-2">FSAE</button>
      <button onclick="switchPage('projects')" class="text-left py-2">Projects</button>
    </div>
  </header>

  <main class="max-w-6xl mx-auto px-5 lg:px-8 py-12 md:py-20">
    <section id="page-home" class="page-section active-page">
      <div class="grid md:grid-cols-[1.1fr_.9fr] gap-12 items-center">
        <div>
          <p class="eyebrow mb-5">Mechanical engineering student · UMass Amherst</p>
          <h1 class="text-5xl md:text-7xl leading-[.98] font-bold tracking-tight mb-6">I like figuring out<br><span class="text-[#164e63]">how things work.</span></h1>
          <p class="text-lg text-[#5d6873] leading-relaxed max-w-xl mb-8">I'm Marco, a mechanical engineering student in Commonwealth Honors College. My work sits at the intersection of mechanical design, robotics, manufacturing, and automotive engineering.</p>
          <div class="flex flex-wrap gap-3">
            <button onclick="switchPage('experience')" class="bg-[#164e63] text-white px-5 py-3 rounded-sm font-semibold hover:bg-[#0f3c4c]">See my experience <i class="fa-solid fa-arrow-right ml-2"></i></button>
            <a href="mailto:marcojvital@gmail.com" class="border border-[#aebbb9] px-5 py-3 rounded-sm font-semibold hover:bg-white">Get in touch</a>
          </div>
          <p class="mt-8 text-sm text-[#5d6873]"><i class="fa-solid fa-location-dot mr-2 text-[#c65d32]"></i>Ludlow, Massachusetts · Expected May 2028</p>
        </div>
        <div class="placeholder min-h-[360px] md:min-h-[430px]">
          <!-- Add a portrait here later: <img src="images/marco.jpg" alt="Marco Vital"> -->
          <div><i class="fa-regular fa-image text-3xl mb-3"></i><p class="text-sm">Portrait / hero image<br><span class="text-xs">Add your photo here</span></p></div>
        </div>
      </div>
      <div class="border-t border-[#dfe2df] mt-20 pt-8 grid sm:grid-cols-3 gap-8">
        <div><p class="eyebrow">Currently</p><p class="mt-2 font-semibold">Atlas Actuator Team Co-op<br><span class="font-normal text-[#5d6873]">Boston Dynamics</span></p></div>
        <div><p class="eyebrow">Focus</p><p class="mt-2 font-semibold">Design, analysis & manufacturing</p></div>
        <div><p class="eyebrow">Tools</p><p class="mt-2 font-semibold">CATIA · MATLAB · KISSsoft · Ansys</p></div>
      </div>
    </section>

    <section id="page-experience" class="page-section">
      <div class="max-w-3xl mb-12"><p class="eyebrow mb-3">Experience</p><h1 class="text-4xl md:text-5xl font-bold mb-4">Building things, then learning from them.</h1><p class="text-lg text-[#5d6873]">A snapshot of the engineering work that has shaped how I design, test, and communicate.</p></div>
      <div class="space-y-6">
        <article class="card p-6 md:p-8"><div class="flex flex-col md:flex-row md:justify-between gap-2 mb-5"><div><p class="eyebrow">July 2026 – Present</p><h2 class="text-2xl font-bold mt-1">Atlas Actuator Team Co-op</h2><p class="text-[#164e63] font-semibold">Boston Dynamics · Waltham, MA</p></div><span class="text-sm text-[#5d6873]">Current</span></div><ul class="list-disc pl-5 space-y-2 text-[#5d6873] leading-relaxed"><li>Wrote a MATLAB optimization program through the KISSsoft COM interface to balance gear safety, contact ratio, backlash, and envelope constraints.</li><li>Contributed to gear material selection and performed axial and radial tolerance stackups, reducing a critical stackup by more than 50% through GD&amp;T changes.</li><li>Used Minitab for Cpk and correlation analysis to improve gear DFM; interpreted inspection reports with the metrology lab.</li></ul></article>
        <article class="card p-6 md:p-8"><p class="eyebrow">Fall 2025 – Spring 2026</p><h2 class="text-2xl font-bold mt-1">Manufacturing Intern</h2><p class="text-[#164e63] font-semibold mb-5">UMass Advanced Digital Design and Fabrication</p><p class="text-[#5d6873] leading-relaxed">Worked in an additive manufacturing lab producing parts for companies, campus labs, and student design teams. Handled machine maintenance, part cleanup, and lab safety.</p></article>
      </div>
    </section>

    <section id="page-robotics" class="page-section">
      <div class="max-w-3xl mb-12"><p class="eyebrow mb-3">Student design team</p><h1 class="text-4xl md:text-5xl font-bold mb-4">UMass Robotics Research Team</h1><p class="text-lg text-[#5d6873]">Mechanical subteam member working on robots built for research, not just demos.</p></div>
      <div class="grid lg:grid-cols-2 gap-6">
        <article class="card overflow-hidden"><div class="placeholder"><!-- Add quadruped photos or CAD renders here --><div><i class="fa-regular fa-image text-3xl mb-2"></i><p class="text-sm">Quadruped leg photos / renders</p></div></div><div class="p-7"><p class="eyebrow">2025 – 2026 · Team lead</p><h2 class="text-2xl font-bold mt-2 mb-4">Low-cost quadruped legs</h2><p class="text-[#5d6873] leading-relaxed">Led a team developing the legs of a research quadruped. Used Onshape, Ansys, and SLS printing to iterate toward a strong, lightweight design.</p><div class="flex flex-wrap gap-2 mt-5"><span class="tag">Onshape</span><span class="tag">Ansys</span><span class="tag">SLS printing</span></div></div></article>
        <article class="card overflow-hidden"><div class="placeholder"><!-- Add humanoid robot photos or CAD renders here --><div><i class="fa-regular fa-image text-3xl mb-2"></i><p class="text-sm">Humanoid robot photos / CAD</p></div></div><div class="p-7"><p class="eyebrow">2024 – 2025 · Project member</p><h2 class="text-2xl font-bold mt-2 mb-4">Humanoid robot</h2><p class="text-[#5d6873] leading-relaxed">Worked with a cross-disciplinary team on a humanoid robot with two 7-DOF arms, a 3-DOF Orbita neck, and an aluminum extrusion torso. Prototyped with FDM printing and machined parts on a Tormach CNC mill.</p><div class="flex flex-wrap gap-2 mt-5"><span class="tag">Onshape</span><span class="tag">FDM</span><span class="tag">CNC machining</span></div></div></article>
      </div>
    </section>

    <section id="page-fsae" class="page-section">
      <div class="max-w-3xl mb-12"><p class="eyebrow mb-3">Student design team · Fall 2024 – Present</p><h1 class="text-4xl md:text-5xl font-bold mb-4">Minutemen Racing</h1><p class="text-lg text-[#5d6873]">UMass Amherst Formula SAE. Chassis design, documentation, ergonomics, and the practical realities of building a race car.</p></div>
      <div class="grid lg:grid-cols-[.8fr_1.2fr] gap-8 items-start"><div class="placeholder min-h-[390px]"><!-- Add racecar / chassis photos here --><div><i class="fa-regular fa-image text-3xl mb-2"></i><p class="text-sm">Racecar or chassis photo</p></div></div><div class="space-y-5"><article class="card p-6"><p class="eyebrow">Fall 2026 – Present</p><h2 class="text-xl font-bold mt-1">Chassis Subteam Advisor</h2><p class="text-[#5d6873] mt-3 leading-relaxed">Developed documentation, timelines, and deliverables to support the chassis team while on co-op. Modeled a modular chassis for early space claims and iterative development, and managed an ergonomics study for a broad range of drivers.</p></article><article class="card p-6"><p class="eyebrow">Summer 2025 – Summer 2026</p><h2 class="text-xl font-bold mt-1">Chassis Subteam Engineering Captain</h2><p class="text-[#5d6873] mt-3 leading-relaxed">Led six students toward building an open-wheel racecar chassis for international collegiate events. Maintained technical documentation, checked compliance, and designed a low-cost racing seat around driver comfort and a tight schedule.</p></article><article class="card p-6"><p class="eyebrow">Fall 2024</p><h2 class="text-xl font-bold mt-1">Chassis Subteam Member</h2><p class="text-[#5d6873] mt-3 leading-relaxed">Started with CAD updates, tube stock preparation, and jig assembly while learning the fundamentals of formula car dynamics and chassis fabrication.</p></article></div></div>
    </section>

    <section id="page-projects" class="page-section">
      <div class="max-w-3xl mb-12"><p class="eyebrow mb-3">Outside the classroom</p><h1 class="text-4xl md:text-5xl font-bold mb-4">Projects</h1><p class="text-lg text-[#5d6873]">A place for the builds, experiments, and design studies I want to document in more detail.</p></div>
      <div class="grid lg:grid-cols-2 gap-6"><article class="card overflow-hidden"><div class="placeholder"><!-- Add Subaru project photos here --><div><i class="fa-regular fa-image text-3xl mb-2"></i><p class="text-sm">Subaru project photos</p></div></div><div class="p-7"><p class="eyebrow">Automotive</p><h2 class="text-2xl font-bold mt-2">Subaru WRX VB</h2><p class="text-[#5d6873] leading-relaxed mt-4">Personal work on chassis, suspension, exhaust fabrication, wheel fitment, and geometry. This is where classroom mechanics meets working on a real car.</p></div></article><article class="card overflow-hidden"><div class="placeholder"><!-- Add gear study renders or FEA plots here --><div><i class="fa-regular fa-image text-3xl mb-2"></i><p class="text-sm">CAD renders / FEA plots</p></div></div><div class="p-7"><p class="eyebrow">Design study</p><h2 class="text-2xl font-bold mt-2">Advanced gear design</h2><p class="text-[#5d6873] leading-relaxed mt-4">An ongoing technical study of planetary, harmonic, and cycloidal drives using SOLIDWORKS and Ansys. More details and results will be added as the work develops.</p></div></article></div>
    </section>
  </main>

  <footer class="border-t border-[#dfe2df] mt-8"><div class="max-w-6xl mx-auto px-5 lg:px-8 py-8 flex flex-col sm:flex-row justify-between gap-5"><div><p class="font-bold">Marco Vital</p><p class="text-sm text-[#5d6873] mt-1">Mechanical Engineering · UMass Amherst</p></div><div class="flex gap-5 text-[#5d6873]"><a href="mailto:marcojvital@gmail.com" aria-label="Email Marco" class="hover:text-[#c65d32]"><i class="fa-solid fa-envelope"></i></a><a href="tel:4133357760" aria-label="Call Marco" class="hover:text-[#c65d32]"><i class="fa-solid fa-phone"></i></a><!-- Add LinkedIn and GitHub URLs when ready --></div></div></footer>
  <script>
    const pages=['home','experience','robotics','fsae','marieb','projects'];
    function switchPage(page, updateHash=true) {
      if (!pages.includes(page)) page='home';
      pages.forEach(item=>{ document.getElementById('page-'+item).classList.toggle('active-page',item===page); const nav=document.getElementById('nav-'+item); if(nav) nav.classList.toggle('active',item===page); });
      document.body.classList.remove('menu-open');
      if(updateHash) history.replaceState(null,'','#'+page);
      window.scrollTo({top:0,behavior:'smooth'});
    }
    document.getElementById('menu-button').addEventListener('click',()=>{ document.body.classList.toggle('menu-open'); const button=document.getElementById('menu-button'); button.setAttribute('aria-expanded',document.body.classList.contains('menu-open')); });
    document.querySelectorAll('.mobile-menu button').forEach(button=>button.addEventListener('click',()=>document.body.classList.remove('menu-open')));
    const initial=location.hash.slice(1); switchPage(pages.includes(initial)?initial:'home',false);
  </script>
</body>
</html>
