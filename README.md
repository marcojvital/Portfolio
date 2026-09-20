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
    .eyebrow { color:var(--orange); letter-spacing:.12em; text-transform:uppercase; font-size:.75rem; font-weight:700; }
    .menu-open .mobile-menu { display:flex; }
  </style>
</head>
<body>
  <header class="border-b border-[#dfe2df] bg-[#f7f6f2]/95 sticky top-0 z-50 backdrop-blur">
    <nav class="max-w-6xl mx-auto px-5 lg:px-8 h-20 flex items-center justify-between" aria-label="Main navigation">
      <!-- EDIT HERE: Change your name and subtitle. -->
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
      <button onclick="switchPage('home')" class="text-left py-2">Home</button>
      <button onclick="switchPage('skills')" class="text-left py-2">Skills</button>
      <button onclick="switchPage('experience')" class="text-left py-2">Experience</button>
      <button onclick="switchPage('robotics')" class="text-left py-2">Robotics</button>
      <button onclick="switchPage('fsae')" class="text-left py-2">FSAE</button>
      <button onclick="switchPage('projects')" class="text-left py-2">Projects</button>
    </div>
  </header>

  <main class="max-w-6xl mx-auto px-5 lg:px-8 py-12 md:py-20">
    <section id="page-home" class="page-section active-page">
      <div class="grid md:grid-cols-[1.1fr_.9fr] gap-12 items-center">
        <div>
          <!-- EDIT HERE: Replace the eyebrow, headline, introduction, location, and graduation date. -->
          <p class="eyebrow mb-5">Mechanical engineering student · UMass Amherst</p>
          <h1 class="text-5xl md:text-7xl leading-[.98] font-bold tracking-tight mb-6">I like figuring out<br><span class="text-[#164e63]">how things work.</span></h1>
          <p class="text-lg text-[#5d6873] leading-relaxed max-w-xl mb-8">PROJECT DESCRIPTION — Replace this text with a short introduction about yourself, your interests, and the type of engineering work you want to do.</p>
          <div class="flex flex-wrap gap-3">
            <button onclick="switchPage('experience')" class="bg-[#164e63] text-white px-5 py-3 rounded-sm font-semibold hover:bg-[#0f3c4c]">See my experience <i class="fa-solid fa-arrow-right ml-2"></i></button>
            <!-- EDIT HERE: Replace the email address in the mailto link. -->
            <a href="mailto:marcojvital@gmail.com" class="border border-[#aebbb9] px-5 py-3 rounded-sm font-semibold hover:bg-white">Get in touch</a>
          </div>
          <p class="mt-8 text-sm text-[#5d6873]"><i class="fa-solid fa-location-dot mr-2 text-[#c65d32]"></i>Ludlow, Massachusetts · Expected May 2028</p>
        </div>
        <div class="placeholder min-h-[360px] md:min-h-[430px]">
          <!-- EDIT HERE: Replace this entire placeholder with your photo. Put it in an images folder, then use:
               <img src="images/marco.jpg" alt="Marco Vital" class="w-full h-full object-cover"> -->
          <div><i class="fa-regular fa-image text-3xl mb-3"></i><p class="text-sm">Portrait / hero image<br><span class="text-xs">Add your photo here</span></p></div>
        </div>
      </div>
      <div class="border-t border-[#dfe2df] mt-20 pt-8 grid sm:grid-cols-2 gap-8">
        <!-- EDIT HERE: Write a short description of your current job above the button. -->
        <div><p class="eyebrow">Currently</p><p class="mt-2 font-semibold">Atlas Actuator Team Co-op<br><span class="font-normal text-[#5d6873]">Boston Dynamics</span></p><p class="text-[#5d6873] mt-3">JOB DESCRIPTION — Briefly describe what you do in this role, what you work on, or what you are learning.</p><button onclick="switchPage('experience')" class="inline-flex items-center mt-4 bg-[#164e63] text-white px-4 py-2 rounded-sm font-semibold hover:bg-[#0f3c4c]">View current role <i class="fa-solid fa-arrow-right ml-2"></i></button></div>
        <!-- EDIT HERE: Keep this focus section, but replace the text with your own focus areas. -->
        <div><p class="eyebrow">Focus</p><p class="mt-2 font-semibold">Design, analysis & manufacturing</p><p class="text-[#5d6873] mt-3">FOCUS DESCRIPTION — Explain the engineering topics, industries, or types of problems you want to focus on.</p></div>
      </div>
    </section>

    <section id="page-skills" class="page-section">
      <div class="max-w-3xl mb-12"><p class="eyebrow mb-3">Capabilities</p><h1 class="text-4xl md:text-5xl font-bold mb-4">Skills</h1><p class="text-lg text-[#5d6873]">Use this page to organize the tools and techniques you can bring to an engineering project.</p></div>
      <div class="grid md:grid-cols-2 gap-6">
        <!-- EDIT HERE: Add, remove, or rename skill items. Each item includes a title and its own description. -->
        <article class="card p-6 md:p-8"><h2 class="text-2xl font-bold">Design</h2><ul class="mt-5 space-y-5"><li><h3 class="font-semibold">SKILL OR TOOL</h3><p class="text-[#5d6873] text-sm mt-1">SKILL DESCRIPTION — Explain what you can design or how you use this skill.</p></li><li><h3 class="font-semibold">SKILL OR TOOL</h3><p class="text-[#5d6873] text-sm mt-1">SKILL DESCRIPTION — Add a brief example, application, or level of experience.</p></li></ul></article>
        <article class="card p-6 md:p-8"><h2 class="text-2xl font-bold">Engineering Tools</h2><ul class="mt-5 space-y-5"><li><h3 class="font-semibold">SOFTWARE OR TOOL</h3><p class="text-[#5d6873] text-sm mt-1">SKILL DESCRIPTION — Explain what you use this software or tool for.</p></li><li><h3 class="font-semibold">SOFTWARE OR TOOL</h3><p class="text-[#5d6873] text-sm mt-1">SKILL DESCRIPTION — Add a brief example, application, or level of experience.</p></li></ul></article>
        <article class="card p-6 md:p-8"><h2 class="text-2xl font-bold">Manufacturing</h2><ul class="mt-5 space-y-5"><li><h3 class="font-semibold">PROCESS OR METHOD</h3><p class="text-[#5d6873] text-sm mt-1">SKILL DESCRIPTION — Describe your hands-on experience with this process.</p></li><li><h3 class="font-semibold">PROCESS OR METHOD</h3><p class="text-[#5d6873] text-sm mt-1">SKILL DESCRIPTION — Add a brief example, application, or level of experience.</p></li></ul></article>
        <article class="card p-6 md:p-8"><h2 class="text-2xl font-bold">Programming & Automation</h2><ul class="mt-5 space-y-5"><li><h3 class="font-semibold">LANGUAGE OR TOOL</h3><p class="text-[#5d6873] text-sm mt-1">SKILL DESCRIPTION — Explain what you build, analyze, or automate with it.</p></li><li><h3 class="font-semibold">LANGUAGE OR TOOL</h3><p class="text-[#5d6873] text-sm mt-1">SKILL DESCRIPTION — Add a brief example, application, or level of experience.</p></li></ul></article>
      </div>
    </section>

    <section id="page-experience" class="page-section">
      <!-- EDIT HERE: Update the section heading and introduction. -->
      <div class="max-w-3xl mb-12"><p class="eyebrow mb-3">Experience</p><h1 class="text-4xl md:text-5xl font-bold mb-4">Building things, then learning from them.</h1><p class="text-lg text-[#5d6873]">PROJECT DESCRIPTION — Add a short overview of your professional and academic experience.</p></div>
      <div class="space-y-6">
        <!-- The current-role button on Home opens this first experience card. Keep this card first. -->
        <!-- EDIT HERE: Duplicate an article for another experience. Update the date, title, organization, text, and bullets. -->
        <article class="card p-6 md:p-8"><div class="flex flex-col md:flex-row md:justify-between gap-2 mb-5"><div><p class="eyebrow">July 2026 – Present</p><h2 class="text-2xl font-bold mt-1">Atlas Actuator Team Co-op</h2><p class="text-[#164e63] font-semibold">Boston Dynamics</p></div></div><p class="text-[#5d6873] mb-4">JOB DESCRIPTION — Replace this with the full description of your current role, responsibilities, and impact.</p><ul class="list-disc pl-5 space-y-2 text-[#5d6873]"><li>PROJECT DESCRIPTION — Add an accomplishment or responsibility.</li><li>PROJECT DESCRIPTION — Add a tool, process, or measurable result.</li></ul></article>
        <article class="card p-6 md:p-8"><p class="eyebrow">Fall 2025 – Spring 2026</p><h2 class="text-2xl font-bold mt-1">Manufacturing Intern</h2><p class="text-[#164e63] font-semibold mb-5">UMass Amherst</p><p class="text-[#5d6873]">PROJECT DESCRIPTION — Replace this with your internship description, accomplishments, and relevant skills.</p></article>
      </div>
    </section>

    <section id="page-robotics" class="page-section">
      <div class="max-w-3xl mb-12"><p class="eyebrow mb-3">Student design team</p><h1 class="text-4xl md:text-5xl font-bold mb-4">UMass Robotics Research Team</h1><p class="text-lg text-[#5d6873]">PROJECT DESCRIPTION — Add your overall robotics team description here.</p></div>
      <div class="grid lg:grid-cols-2 gap-6">
        <!-- EDIT HERE: Replace the placeholder with a quadruped image and edit the card text. -->
        <article class="card overflow-hidden"><div class="placeholder"><div><i class="fa-regular fa-image text-3xl mb-2"></i><p class="text-sm">Add quadruped photo or CAD render here</p></div></div><div class="p-6"><h2 class="text-2xl font-bold">Quadruped Robotics</h2><p class="text-[#5d6873] mt-3">PROJECT DESCRIPTION — Add your project description here.</p></div></article>
        <!-- EDIT HERE: Replace the placeholder with a humanoid image and edit the card text. -->
        <article class="card overflow-hidden"><div class="placeholder"><div><i class="fa-regular fa-image text-3xl mb-2"></i><p class="text-sm">Add humanoid robot photo or CAD render here</p></div></div><div class="p-6"><h2 class="text-2xl font-bold">Humanoid Robotics</h2><p class="text-[#5d6873] mt-3">PROJECT DESCRIPTION — Add your project description here.</p></div></article>
      </div>
    </section>

    <section id="page-fsae" class="page-section">
      <div class="max-w-3xl mb-12"><p class="eyebrow mb-3">Student design team · Fall 2024 – Present</p><h1 class="text-4xl md:text-5xl font-bold mb-4">Minutemen Racing</h1><p class="text-lg text-[#5d6873]">PROJECT DESCRIPTION — Add your FSAE team role, subsystem, and contributions here.</p></div>
      <div class="grid lg:grid-cols-[.8fr_1.2fr] gap-8 items-start">
        <!-- EDIT HERE: Replace this placeholder with a racecar or chassis image. -->
        <div class="placeholder min-h-[390px]"><div><i class="fa-regular fa-image text-3xl mb-2"></i><p class="text-sm">Add racecar / chassis photo here</p></div></div>
        <div class="card p-6 md:p-8"><h2 class="text-2xl font-bold">PROJECT DESCRIPTION</h2><p class="text-[#5d6873] mt-4">Replace this text with the project goal, your responsibilities, design decisions, results, and lessons learned.</p><ul class="list-disc pl-5 space-y-2 text-[#5d6873] mt-5"><li>PROJECT DESCRIPTION — Add a key contribution.</li><li>PROJECT DESCRIPTION — Add a result or technical detail.</li></ul></div>
      </div>
    </section>

    <section id="page-projects" class="page-section">
      <div class="max-w-3xl mb-12"><p class="eyebrow mb-3">Personal work</p><h1 class="text-4xl md:text-5xl font-bold mb-4">Projects</h1><p class="text-lg text-[#5d6873]">Add your personal projects here. The previous car and gear-design projects have been removed.</p></div>
      <div class="grid lg:grid-cols-2 gap-6">
        <!-- PERSONAL PROJECT TEMPLATE: Replace the title, image, and PROJECT DESCRIPTION below. Duplicate this card for more projects. -->
        <article class="card overflow-hidden"><div class="placeholder"><div><i class="fa-regular fa-image text-3xl mb-2"></i><p class="text-sm">Add project image here</p></div></div><div class="p-6"><p class="eyebrow">Personal project</p><h2 class="text-2xl font-bold mt-2">PROJECT TITLE</h2><p class="text-[#5d6873] mt-3">PROJECT DESCRIPTION — Explain what you built, the problem it solves, the tools you used, and the result.</p><p class="text-sm text-[#164e63] font-semibold mt-4">TOOLS — Add your tools here</p></div></article>
        <!-- PERSONAL PROJECT TEMPLATE: Replace this card with your second project, or delete it if unused. -->
        <article class="card overflow-hidden"><div class="placeholder"><div><i class="fa-regular fa-image text-3xl mb-2"></i><p class="text-sm">Add project image here</p></div></div><div class="p-6"><p class="eyebrow">Personal project</p><h2 class="text-2xl font-bold mt-2">PROJECT TITLE</h2><p class="text-[#5d6873] mt-3">PROJECT DESCRIPTION — Explain what you built, the problem it solves, the tools you used, and the result.</p><p class="text-sm text-[#164e63] font-semibold mt-4">TOOLS — Add your tools here</p></div></article>
      </div>
    </section>
  </main>

  <footer class="border-t border-[#dfe2df] mt-8"><div class="max-w-6xl mx-auto px-5 lg:px-8 py-8 flex flex-col sm:flex-row justify-between gap-5"><div><p class="font-bold">Marco Vital</p><p class="text-sm text-[#5d6873]">Mechanical Engineering Portfolio</p></div><p class="text-sm text-[#5d6873]">© 2026 Marco Vital</p></div></footer>

  <script>
    const pages=['home','skills','experience','robotics','fsae','projects'];
    function switchPage(page, updateHash=true) {
      if (!pages.includes(page)) page='home';
      pages.forEach(item=>{
        document.getElementById('page-'+item).classList.toggle('active-page',item===page);
        const nav=document.getElementById('nav-'+item);
        if(nav) nav.classList.toggle('active',item===page);
      });
      document.body.classList.remove('menu-open');
      if(updateHash) history.replaceState(null,'','#'+page);
      window.scrollTo({top:0,behavior:'smooth'});
    }
    document.getElementById('menu-button').addEventListener('click',()=>{
      document.body.classList.toggle('menu-open');
      const button=document.getElementById('menu-button');
      button.setAttribute('aria-expanded',document.body.classList.contains('menu-open'));
    });
    document.querySelectorAll('.mobile-menu button').forEach(button=>button.addEventListener('click',()=>document.body.classList.remove('menu-open')));
    const initial=location.hash.slice(1);
    switchPage(pages.includes(initial)?initial:'home',false);
  </script>
</body>
</html>
