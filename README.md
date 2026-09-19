<!DOCTYPE html>
<html lang="en" class="scroll-smooth">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Marco Vital | Engineering Portfolio</title>
    
    <link rel="preconnect" href="https://fonts.googleapis.com">
    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
    <link href="https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700;800&display=swap" rel="stylesheet">
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.0/css/all.min.css">
    
    <script src="https://cdn.tailwindcss.com"></script>
    
    <style>
        /* ==========================================================================
           THEME CONFIGURATION (CSS VARIABLES)
           ========================================================================== */
        :root {
            --color-primary: #003366;      /* UMass Maroon alternative or Deep Engineering Blue */
            --color-primary-light: #00509e; 
            --color-accent: #cc0000;       /* Accent color (UMass Red inspired) */
            
            --color-background: #f4f7f6;   
            --color-surface: #ffffff;      
            
            --color-text-main: #111827;    
            --color-text-muted: #4b5563;   
            --color-border: #e5e7eb;       
        }

        body {
            font-family: 'Inter', sans-serif;
            background-color: var(--color-background);
            color: var(--color-text-main);
            display: flex;
            flex-direction: column;
            min-height: 100vh;
        }

        /* Utility classes linking to CSS variables */
        .text-primary { color: var(--color-primary); }
        .text-accent { color: var(--color-accent); }
        .bg-primary { background-color: var(--color-primary); }
        .border-primary { border-color: var(--color-primary); }
        
        .surface-card {
            background-color: var(--color-surface);
            border: 1px solid var(--color-border);
            border-radius: 0.75rem;
            box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.05);
            transition: all 0.3s ease;
        }

        .surface-card:hover {
            transform: translateY(-3px);
            box-shadow: 0 10px 15px -3px rgba(0, 0, 0, 0.08);
            border-color: #cbd5e1;
        }

        .nav-link {
            cursor: pointer;
            position: relative;
            font-weight: 500;
            color: var(--color-text-muted);
            transition: color 0.2s ease;
        }
        
        .nav-link:hover {
            color: var(--color-primary);
        }

        /* Active Navigation Link Underline Effect */
        .nav-link.active {
            color: var(--color-primary);
        }
        .nav-link.active::after {
            content: '';
            position: absolute;
            width: 100%;
            height: 2px;
            bottom: -4px;
            left: 0;
            background-color: var(--color-primary);
            border-radius: 2px;
        }

        /* Page Display Logic */
        .page-section {
            display: none; /* All pages hidden by default */
            animation: fadeIn 0.4s ease-out forwards;
        }
        .page-section.active-page {
            display: block; /* Only active page shown */
        }

        @keyframes fadeIn {
            from { opacity: 0; transform: translateY(10px); }
            to { opacity: 1; transform: translateY(0); }
        }
    </style>
</head>
<body>

    <!-- =======================================================================
         COMMON COMPONENT: NAVIGATION BAR
         If splitting into multiple files, this goes at the top of EVERY file.
         ======================================================================= -->
    <nav class="sticky top-0 z-50 bg-white/90 backdrop-blur-md border-b border-gray-200 shadow-sm">
        <div class="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
            <div class="flex justify-between items-center h-16">
                
                <!-- Logo / Name -->
                <div class="flex-shrink-0 flex items-center">
                    <a href="#" onclick="switchPage('home')" class="text-2xl font-extrabold text-primary tracking-tighter">
                        MV<span class="text-accent">.</span>
                    </a>
                </div>
                
                <!-- Desktop Navigation Links -->
                <div class="hidden md:flex space-x-8">
                    <a onclick="switchPage('home')" id="nav-home" class="nav-link active">Home</a>
                    <a onclick="switchPage('robotics')" id="nav-robotics" class="nav-link">Robotics</a>
                    <a onclick="switchPage('fsae')" id="nav-fsae" class="nav-link">FSAE</a>
                    <a onclick="switchPage('marieb')" id="nav-marieb" class="nav-link">Marieb Center</a>
                    <a onclick="switchPage('projects')" id="nav-projects" class="nav-link">Projects</a>
                </div>

                <!-- Mobile Menu Icon (Placeholder for simplicity) -->
                <div class="md:hidden flex items-center">
                    <button class="text-gray-600 focus:outline-none">
                        <i class="fas fa-bars text-xl"></i>
                    </button>
                </div>

            </div>
        </div>
    </nav>

    <!-- Main Content Container -->
    <main class="flex-grow w-full max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-8 md:py-12">

        <!-- =======================================================================
             PAGE START: HOME (index.html content)
             ======================================================================= -->
        <section id="page-home" class="page-section active-page">
            <div class="flex flex-col md:flex-row items-center gap-12 mt-10 md:mt-20">
                <div class="flex-1 text-center md:text-left">
                    <h1 class="text-5xl md:text-7xl font-bold tracking-tight mb-4 text-gray-900">
                        Marco <span class="text-primary">Vital</span>
                    </h1>
                    <h2 class="text-2xl md:text-3xl font-medium text-gray-600 mb-6">
                        Mechanical Engineering
                    </h2>
                    
                    <div class="inline-flex items-center gap-2 bg-blue-50 text-primary px-4 py-2 rounded-full font-semibold text-sm mb-8 border border-blue-100">
                        <i class="fas fa-graduation-cap"></i>
                        UMass Amherst | Anticipated Spring 2028
                    </div>

                    <p class="text-lg text-gray-600 leading-relaxed max-w-2xl mx-auto md:mx-0 mb-8">
                        Welcome to my digital portfolio. I am a mechanical engineering student specializing in mechanical design, robotic systems, and automotive chassis development. Explore my work using the navigation above to see my technical experience, leadership roles, and personal projects.
                    </p>

                    <div class="flex gap-4 justify-center md:justify-start">
                        <button onclick="switchPage('fsae')" class="bg-primary hover:bg-blue-800 text-white px-6 py-3 rounded-lg font-medium transition-colors shadow-md">
                            View Minutemen Racing
                        </button>
                        <button onclick="switchPage('robotics')" class="bg-white border border-gray-300 hover:bg-gray-50 text-gray-800 px-6 py-3 rounded-lg font-medium transition-colors shadow-sm">
                            View Robotics
                        </button>
                    </div>
                </div>
                
                <!-- Optional: Image placeholder for Home Page -->
                <div class="flex-1 hidden md:flex justify-center">
                    <div class="w-80 h-80 rounded-full bg-gray-200 border-8 border-white shadow-xl flex items-center justify-center overflow-hidden">
                        <i class="fas fa-camera text-4xl text-gray-400"></i>
                        <!-- <img src="your-photo.jpg" alt="Marco" class="w-full h-full object-cover"> -->
                    </div>
                </div>
            </div>
        </section>
        <!-- =======================================================================
             PAGE END: HOME
             ======================================================================= -->


        <!-- =======================================================================
             PAGE START: ROBOTICS (robotics.html content)
             ======================================================================= -->
        <section id="page-robotics" class="page-section">
            <div class="mb-10">
                <h1 class="text-4xl font-bold mb-3">UMass Robotics Research Team</h1>
                <p class="text-xl text-gray-600">Engineering advanced kinematics and mechanical assemblies.</p>
                <div class="h-1 w-20 bg-primary mt-6 rounded"></div>
            </div>

            <div class="grid grid-cols-1 md:grid-cols-2 gap-8">
                
                <!-- Role 1 -->
                <div class="surface-card p-8">
                    <div class="flex justify-between items-start mb-4">
                        <div class="flex items-center gap-3">
                            <div class="bg-blue-100 text-primary p-3 rounded-lg">
                                <i class="fas fa-robot text-xl"></i>
                            </div>
                            <h3 class="text-2xl font-bold">Quadruped Leg Development</h3>
                        </div>
                    </div>
                    <h4 class="text-lg font-semibold text-primary mb-2">Team Lead</h4>
                    <p class="text-sm font-medium text-gray-500 mb-6"><i class="far fa-calendar-alt mr-2"></i>2025 - 2026</p>
                    <p class="text-gray-600 leading-relaxed mb-6">
                        Directed the mechanical design and physical integration of articulating quadruped legs. Focused on optimizing weight-to-strength ratios, motor housing configurations, and ensuring full range of motion for dynamic gait algorithms.
                    </p>
                </div>

                <!-- Role 2 -->
                <div class="surface-card p-8">
                    <div class="flex justify-between items-start mb-4">
                        <div class="flex items-center gap-3">
                            <div class="bg-gray-100 text-gray-700 p-3 rounded-lg">
                                <i class="fas fa-hand-paper text-xl"></i>
                            </div>
                            <h3 class="text-2xl font-bold">Humanoid Arm Development</h3>
                        </div>
                    </div>
                    <h4 class="text-lg font-semibold text-gray-700 mb-2">Project Member</h4>
                    <p class="text-sm font-medium text-gray-500 mb-6"><i class="far fa-calendar-alt mr-2"></i>2024 - 2025</p>
                    <p class="text-gray-600 leading-relaxed mb-6">
                        Contributed to the structural design and actuator placement for a multi-DOF humanoid robotic arm. Gained early experience in collaborative CAD modeling and tolerance analysis for moving joints.
                    </p>
                </div>
            </div>
        </section>
        <!-- =======================================================================
             PAGE END: ROBOTICS
             ======================================================================= -->


        <!-- =======================================================================
             PAGE START: FSAE (fsae.html content)
             ======================================================================= -->
        <section id="page-fsae" class="page-section">
            <div class="mb-10">
                <h1 class="text-4xl font-bold mb-3">Minutemen Racing (FSAE)</h1>
                <p class="text-xl text-gray-600">UMass Amherst Formula SAE Team.</p>
                <div class="h-1 w-20 bg-accent mt-6 rounded"></div>
            </div>

            <!-- Timeline style layout for FSAE -->
            <div class="relative border-l-4 border-gray-200 ml-3 md:ml-6 space-y-10 py-4">
                
                <!-- Position 1 (Most Recent) -->
                <div class="relative pl-8 md:pl-12">
                    <div class="absolute w-6 h-6 bg-accent rounded-full -left-[15px] top-1 border-4 border-white shadow"></div>
                    <div class="surface-card p-6 md:p-8 border-l-4 border-l-accent">
                        <div class="flex flex-col md:flex-row md:justify-between md:items-center mb-4">
                            <h3 class="text-2xl font-bold">Chassis Subteam Advisor</h3>
                            <span class="inline-block bg-gray-100 text-gray-600 px-3 py-1 rounded-full text-sm font-semibold mt-2 md:mt-0">Fall 2026</span>
                        </div>
                        <p class="text-gray-600 leading-relaxed">
                            Serving in an advisory capacity to guide the new engineering captain. Focus on design review, manufacturing feasibility, and sharing institutional knowledge on tubular spaceframe construction and FEA validation techniques.
                        </p>
                    </div>
                </div>

                <!-- Position 2 -->
                <div class="relative pl-8 md:pl-12">
                    <div class="absolute w-6 h-6 bg-primary rounded-full -left-[15px] top-1 border-4 border-white shadow"></div>
                    <div class="surface-card p-6 md:p-8 border-l-4 border-l-primary">
                        <div class="flex flex-col md:flex-row md:justify-between md:items-center mb-4">
                            <h3 class="text-2xl font-bold">Chassis Subteam Engineering Captain</h3>
                            <span class="inline-block bg-blue-50 text-primary px-3 py-1 rounded-full text-sm font-semibold mt-2 md:mt-0">Summer 2025 - Summer 2026</span>
                        </div>
                        <p class="text-gray-600 leading-relaxed">
                            Led the complete design cycle of the formula vehicle's chassis. Managed a subteam of engineering students, delegating CAD tasks, overseeing structural simulations for torsional rigidity, and coordinating the physical tube profiling, coping, and welding processes.
                        </p>
                    </div>
                </div>

                <!-- Position 3 -->
                <div class="relative pl-8 md:pl-12">
                    <div class="absolute w-6 h-6 bg-gray-400 rounded-full -left-[15px] top-1 border-4 border-white shadow"></div>
                    <div class="surface-card p-6 md:p-8">
                        <div class="flex flex-col md:flex-row md:justify-between md:items-center mb-4">
                            <h3 class="text-2xl font-bold text-gray-700">Chassis Subteam Member</h3>
                            <span class="inline-block bg-gray-100 text-gray-600 px-3 py-1 rounded-full text-sm font-semibold mt-2 md:mt-0">Fall 2024</span>
                        </div>
                        <p class="text-gray-600 leading-relaxed">
                            Introduced to formula car dynamics and chassis fabrication. Assisted senior members with CAD modeling updates, tube stock preparation, and jig assembly.
                        </p>
                    </div>
                </div>

            </div>
        </section>
        <!-- =======================================================================
             PAGE END: FSAE
             ======================================================================= -->


        <!-- =======================================================================
             PAGE START: ELAINE MARIEB (marieb.html content)
             ======================================================================= -->
        <section id="page-marieb" class="page-section">
            <div class="mb-10">
                <h1 class="text-4xl font-bold mb-3">Elaine Marieb Center</h1>
                <p class="text-xl text-gray-600">Center for Nursing and Engineering Innovation.</p>
                <div class="h-1 w-20 bg-teal-600 mt-6 rounded"></div>
            </div>

            <div class="surface-card p-8 md:p-12 overflow-hidden relative">
                <!-- Decorative background icon -->
                <i class="fas fa-hospital absolute -right-10 -bottom-10 text-9xl text-gray-50 opacity-50 pointer-events-none"></i>
                
                <div class="relative z-10">
                    <div class="flex flex-col md:flex-row justify-between items-start md:items-center mb-6">
                        <div>
                            <h3 class="text-3xl font-bold text-gray-900 mb-2">Research Assistant</h3>
                            <p class="text-teal-700 font-medium text-lg">Hospital Applications & Medical Devices</p>
                        </div>
                        <div class="bg-gray-100 px-4 py-2 rounded-lg font-semibold text-gray-600 mt-4 md:mt-0">
                            <i class="far fa-calendar-alt mr-2"></i> Summer 2023 - Summer 2025
                        </div>
                    </div>

                    <div class="prose max-w-none text-gray-600 space-y-6">
                        <p class="text-lg leading-relaxed">
                            Working at the intersection of engineering and healthcare, I participated in designing prototype solutions aimed at improving clinical workflows and patient care through mechanical intervention.
                        </p>
                        
                        <div class="grid grid-cols-1 md:grid-cols-2 gap-6 mt-8">
                            <div class="bg-gray-50 p-6 rounded-xl border border-gray-100">
                                <div class="text-teal-600 mb-3"><i class="fas fa-hand-holding-medical text-3xl"></i></div>
                                <h4 class="text-xl font-bold mb-2">Robotic Dexterity</h4>
                                <p class="text-sm">
                                    Researched and modeled mechanisms to enhance robotic dexterity for delicate hospital tasks, focusing on grippers and manipulation tools that require soft-touch precision.
                                </p>
                            </div>
                            
                            <div class="bg-gray-50 p-6 rounded-xl border border-gray-100">
                                <div class="text-teal-600 mb-3"><i class="fas fa-laptop-medical text-3xl"></i></div>
                                <h4 class="text-xl font-bold mb-2">Digital Scanning Tools</h4>
                                <p class="text-sm">
                                    Developed digital scanning protocols and physical mounts for scanning hardware used in mapping anatomical or clinical environments.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
        <!-- =======================================================================
             PAGE END: ELAINE MARIEB
             ======================================================================= -->


        <!-- =======================================================================
             PAGE START: PROJECTS (projects.html content)
             ======================================================================= -->
        <section id="page-projects" class="page-section">
            <div class="mb-10">
                <h1 class="text-4xl font-bold mb-3">Personal Projects</h1>
                <p class="text-xl text-gray-600">Automotive builds and CAD/FEA studies.</p>
                <div class="h-1 w-20 bg-gray-800 mt-6 rounded"></div>
            </div>

            <div class="grid grid-cols-1 lg:grid-cols-2 gap-8">
                
                <!-- Project 1 -->
                <div class="surface-card flex flex-col h-full overflow-hidden">
                    <div class="h-48 bg-gray-800 flex items-center justify-center">
                        <!-- Placeholder for a car image -->
                        <i class="fas fa-car-side text-6xl text-gray-600"></i>
                    </div>
                    <div class="p-8 flex flex-col flex-grow">
                        <h3 class="text-2xl font-bold mb-2">Subaru WRX VB Modifications</h3>
                        <p class="text-primary font-medium mb-4">Hands-on Automotive Engineering</p>
                        
                        <p class="text-gray-600 mb-6 flex-grow">
                            Personal vehicle project focusing on chassis, suspension, and exhaust optimization. Practical application of mechanical principles to improve vehicle dynamics and performance.
                        </p>
                        
                        <ul class="space-y-2 text-sm text-gray-600 border-t border-gray-100 pt-4">
                            <li class="flex items-center"><i class="fas fa-check text-green-500 mr-2"></i> Custom Exhaust Fabrication</li>
                            <li class="flex items-center"><i class="fas fa-check text-green-500 mr-2"></i> Wheel Fitment & Geometry</li>
                            <li class="flex items-center"><i class="fas fa-check text-green-500 mr-2"></i> Suspension Tuning</li>
                        </ul>
                    </div>
                </div>

                <!-- Project 2 -->
                <div class="surface-card flex flex-col h-full overflow-hidden">
                    <div class="h-48 bg-blue-50 flex items-center justify-center border-b border-gray-100">
                        <!-- Placeholder for CAD gears -->
                        <i class="fas fa-cogs text-6xl text-blue-200"></i>
                    </div>
                    <div class="p-8 flex flex-col flex-grow">
                        <h3 class="text-2xl font-bold mb-2">Advanced Gear Design Studies</h3>
                        <p class="text-primary font-medium mb-4">SOLIDWORKS & Ansys</p>
                        
                        <p class="text-gray-600 mb-6 flex-grow">
                            Independent technical deep-dive into complex gearing mechanisms. Focused on modeling intricate geometries and validating them through Finite Element Analysis to understand stress concentrations and load paths.
                        </p>
                        
                        <div class="flex flex-wrap gap-2 mt-auto">
                            <span class="bg-gray-100 text-gray-700 px-3 py-1 rounded text-xs font-bold">Planetary Gears</span>
                            <span class="bg-gray-100 text-gray-700 px-3 py-1 rounded text-xs font-bold">Harmonic Drives</span>
                            <span class="bg-gray-100 text-gray-700 px-3 py-1 rounded text-xs font-bold">Cycloidal Drives</span>
                        </div>
                    </div>
                </div>

            </div>
        </section>
        <!-- =======================================================================
             PAGE END: PROJECTS
             ======================================================================= -->

    </main>

    <!-- =======================================================================
         COMMON COMPONENT: FOOTER
         If splitting into multiple files, this goes at the bottom of EVERY file.
         ======================================================================= -->
    <footer class="bg-gray-900 text-white py-10 mt-auto border-t-4 border-primary">
        <div class="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col md:flex-row justify-between items-center gap-6">
            <div>
                <p class="text-xl font-bold tracking-tight">Marco Vital</p>
                <p class="text-gray-400 text-sm mt-1">Mechanical Engineering | UMass Amherst</p>
            </div>
            
            <div class="flex space-x-6">
                <a href="#" class="text-gray-400 hover:text-white transition-colors text-xl"><i class="fab fa-linkedin"></i></a>
                <a href="#" class="text-gray-400 hover:text-white transition-colors text-xl"><i class="fab fa-github"></i></a>
                <a href="mailto:contact@mvital.com" class="text-gray-400 hover:text-white transition-colors text-xl"><i class="fas fa-envelope"></i></a>
            </div>
        </div>
    </footer>

    <!-- =======================================================================
         JAVASCRIPT: PAGE ROUTING LOGIC
         This script creates the "multi-page" feel without leaving index.html
         ======================================================================= -->
    <script>
        // List of all valid page IDs
        const pages = ['home', 'robotics', 'fsae', 'marieb', 'projects'];

        function switchPage(targetPageId) {
            // 1. Hide all pages and remove active class from all nav links
            pages.forEach(page => {
                // Hide section
                document.getElementById('page-' + page).classList.remove('active-page');
                // Remove active styling from nav link
                document.getElementById('nav-' + page).classList.remove('active');
            });

            // 2. Show the target page
            document.getElementById('page-' + targetPageId).classList.add('active-page');
            
            // 3. Add active styling to the clicked nav link
            document.getElementById('nav-' + targetPageId).classList.add('active');

            // 4. Scroll to top automatically when changing pages
            window.scrollTo({ top: 0, behavior: 'smooth' });
        }

        // Optional: Check URL hash on load to see if someone linked directly to a specific page
        // e.g., mvital.com/#fsae
        window.onload = function() {
            const hash = window.location.hash.replace('#', '');
            if (pages.includes(hash)) {
                switchPage(hash);
            }
        };
    </script>
</body>
</html>
