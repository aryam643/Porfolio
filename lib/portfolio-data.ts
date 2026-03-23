export const portfolioData = {
  name: "Aryam Sharma",
  shortName: "Aryam.dev",
  headline: "Software Developer",
  badge: "{ Software Developer }",
  summary:
    "Software Developer with 1+ year of experience building scalable web applications using Django and React. Strong focus on backend systems, API performance, and full-cycle product delivery in production environments.",
  location: "Chandigarh, India",
  email: "aryamsharma.dev@gmail.com",
  phone: "+91-6230707124",
  website: "https://aryamsharma.vercel.app",
  resumeViewUrl: "https://drive.google.com/file/d/1QfIx4JbJXowwjCCeGB122qnCjNeehk3_/view?usp=sharing",
  resumeDownloadUrl: "https://drive.google.com/uc?export=download&id=1QfIx4JbJXowwjCCeGB122qnCjNeehk3_",
  socialLinks: [
    { label: "GitHub", href: "https://github.com/aryam643" },
    { label: "LinkedIn", href: "https://www.linkedin.com/in/aryamsharma/" },
    { label: "Email", href: "mailto:aryamsharma.dev@gmail.com" },
    { label: "Website", href: "https://aryamsharma.vercel.app" },
  ],
  roles: [
    "Software Developer",
    "Backend-Focused Full Stack Developer",
    "Software Product Developer",
    "Django & React Builder",
  ],
  stats: [
    { label: "Experience", value: "1+ year" },
    { label: "Production Modules", value: "10+" },
    { label: "Daily API Requests", value: "10K+" },
    { label: "Docs Parsed", value: "500+" },
  ],
  focusAreas: [
    {
      title: "Backend Systems",
      description: "Build Django services, REST APIs, auth flows, and production workflows for customer-facing products.",
      iconKey: "server",
    },
    {
      title: "API Performance",
      description: "Improve response times with PostgreSQL query optimization, indexing strategies, and Redis caching.",
      iconKey: "database",
    },
    {
      title: "Real-Time Apps",
      description: "Ship collaborative and live-update experiences with WebSockets, Node.js, and modern TypeScript stacks.",
      iconKey: "zap",
    },
    {
      title: "Product Delivery",
      description: "Work across frontend, backend, database, and deployment to ship maintainable product features end to end.",
      iconKey: "code",
    },
  ],
  education: {
    school: "Jaypee University of Information Technology",
    degree: "B.Tech in Computer Science Engineering",
    location: "Solan, India",
    period: "Sept. 2021 - May 2025",
    score: "CGPA: 8.66/10.0",
    courses: [
      "Data Structures & Algorithms",
      "Database Management Systems",
      "Computer Networks",
      "Machine Learning",
    ],
  },
  experiences: [
    {
      title: "Software Developer",
      company: "Fellafeeds",
      location: "Remote",
      period: "Sept. 2025 - Present",
      type: "Full-time",
      achievements: [
        "Owned backend development of a large-scale Django-based customer feedback platform, contributing to 10+ production modules including feedback, reviews, visitors, loyalty, referrals, and QR Codes.",
        "Designed and optimized REST APIs handling 10,000+ daily requests, improving response times by up to 40% using PostgreSQL query tuning, indexing, and Redis caching.",
        "Migrated and refactored legacy workflows into scalable Django services, resolving complex PostgreSQL migration issues with zero production data loss.",
        "Implemented Google and social review ingestion pipelines using APIs and OCR, enabling automated review verification and moderation.",
        "Built secure visitor verification and OTP-based authentication flows with nonce validation and rate limiting, reducing fraudulent submissions.",
      ],
      technologies: ["Django", "Python", "PostgreSQL", "Redis", "REST APIs", "OCR"],
    },
    {
      title: "Software Product Developer Intern",
      company: "TT Consultants",
      location: "Mohali, India",
      period: "Jan. 2025 - Aug. 2025",
      type: "Internship",
      achievements: [
        "Migrated 3 legacy TCL modules (5,000+ LOC) to Django, improving maintainability by 60% and reducing production bugs.",
        "Built full-stack features with Django REST APIs and PostgreSQL, supporting workflows for 200+ internal users.",
      ],
      technologies: ["Django", "Python", "PostgreSQL", "Django REST Framework", "TCL"],
    },
    {
      title: "React Developer Intern",
      company: "Pragmatic Silicon",
      location: "Noida, India",
      period: "Jun. 2024 - Jul. 2024",
      type: "Internship",
      achievements: [
        "Developed an NLP-based resume parsing system that processed 500+ documents with 92% accuracy.",
        "Built secure authentication and role-based access control for 1,000+ users and integrated Razorpay payment workflows that processed 5,000+ monthly transactions.",
      ],
      technologies: ["React", "JavaScript", "JWT", "Razorpay", "NLP"],
    },
  ],
  projects: [
    {
      name: "Real-Time Collaborative Whiteboard",
      description:
        "A multi-user whiteboard built with React, Node.js, and WebSockets for synchronized drawing sessions and low-latency collaboration.",
      stack: ["React", "Node.js", "WebSockets", "Canvas API", "MongoDB"],
      sourceCode: "https://github.com/aryam643/white_board",
      livePreview: "https://drive.google.com/file/d/1bE0B6OLID62vj6j7E5fObxuvIBXIQxWE/view?usp=sharing",
      category: "Real-time System",
      iconKey: "users",
      metrics: ["50+ concurrent users", "Sub-100ms latency", "Conflict resolution"],
    },
    {
      name: "MBP-10 Orderbook Reconstruction",
      description:
        "A high-performance C++ engine that converts Market-by-Order streams into Market-by-Price snapshots for HFT-style workflows.",
      stack: ["C++17", "STL", "Data Structures", "Unit Testing"],
      sourceCode: "https://github.com/aryam643/Orderbook",
      category: "System Programming",
      iconKey: "database",
      metrics: ["100K+ updates/sec", "Sub-microsecond latency", "Out-of-order handling"],
    },
    {
      name: "Live Polling System",
      description:
        "A real-time polling and chat platform with typed APIs, responsive UI, and live vote updates built on Next.js, Node.js, and TypeScript.",
      stack: ["Next.js", "Node.js", "TypeScript", "WebSockets", "PostgreSQL", "Tailwind CSS"],
      sourceCode: "https://github.com/aryam643/LivePolling",
      livePreview: "https://live-polliing-system.netlify.app/",
      category: "Full Stack Product",
      iconKey: "zap",
      metrics: ["100+ users per poll", "Type-safe APIs", "Sub-second latency"],
    },
    {
      name: "AI Live Chat Agent",
      description:
        "A customer-support style chat widget built with SvelteKit and a TypeScript Express backend, backed by Prisma, SQLite, and a real OpenAI integration.",
      stack: ["SvelteKit", "Node.js", "TypeScript", "Express", "Prisma", "SQLite", "OpenAI"],
      sourceCode: "https://github.com/aryam643/livechat",
      livePreview: "https://livechat-beige.vercel.app",
      category: "AI Product",
      iconKey: "users",
      metrics: ["OpenAI chat", "Prisma + SQLite", "Session history"],
    },
    {
      name: "SecureSight CCTV Dashboard",
      description:
        "A Next.js incident-monitoring dashboard for CCTV feeds with AI-oriented threat workflows, optimistic UI updates, and PostgreSQL-backed incident data.",
      stack: ["Next.js 15", "React", "TypeScript", "Tailwind CSS", "PostgreSQL", "shadcn/ui"],
      sourceCode: "https://github.com/aryam643/secure_sight",
      livePreview: "https://secure-sight-delta.vercel.app",
      category: "Monitoring Dashboard",
      iconKey: "server",
      metrics: ["Incident timeline", "Optimistic UI", "Neon PostgreSQL"],
    },
    {
      name: "My Workspace Productivity App",
      description:
        "A full-stack notes and task manager with protected routes, MongoDB persistence, and Groq-powered AI summarization for personal productivity workflows.",
      stack: ["Next.js 15", "MongoDB", "NextAuth.js", "Zustand", "Groq AI", "Tailwind CSS"],
      sourceCode: "https://github.com/aryam643/Take-Home-My-Workspace-A-Personal-Productivity-App",
      livePreview: "https://take-home-my-workspace-a-personal-p.vercel.app",
      category: "Productivity App",
      iconKey: "zap",
      metrics: ["AI summaries", "Notes + tasks", "Protected routes"],
    },
  ],
  skillGroups: [
    {
      title: "Languages",
      items: ["Python", "JavaScript", "TypeScript", "C++", "SQL", "Bash", "HTML/CSS"],
    },
    {
      title: "Frontend",
      items: ["React", "Next.js", "Redux", "Tailwind CSS", "Bootstrap"],
    },
    {
      title: "Backend",
      items: ["Django", "Node.js", "FastAPI", "Flask", "Express.js"],
    },
    {
      title: "Databases",
      items: ["PostgreSQL", "MySQL", "MongoDB", "Redis", "SQLite"],
    },
    {
      title: "DevOps & Tools",
      items: ["Docker", "AWS (EC2, S3, Lambda)", "Git", "Jenkins", "Postman", "WebSockets", "CI/CD", "Nginx"],
    },
    {
      title: "ML & Data",
      items: ["TensorFlow", "PyTorch", "NumPy", "Pandas", "Scikit-Learn", "Matplotlib", "OpenCV", "NLTK"],
    },
    {
      title: "Workflow",
      items: ["VS Code", "Vim", "tmux", "GitHub Actions", "Netlify", "Vercel"],
    },
  ],
} as const
