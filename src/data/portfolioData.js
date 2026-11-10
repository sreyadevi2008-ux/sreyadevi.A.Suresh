export const personalData = {
  name: "Sreya Devi",
  logoText: "SREYA.DEV",
  badgeText: "PORTFOLIO",
  eyebrow: "HELLO, WORLD! I'M",
  roles: [
    "Aspiring AI Engineer",
    "Machine Learning Enthusiast",
    "Python Developer",
    "First-Year B.Tech AI Student"
  ],
  degree: "B.Tech CSE (Artificial Intelligence)",
  institution: "Thejus Engineering College, Thrissur",
  state: "Kerala, India",
  shortBio: "B.Tech CSE (Artificial Intelligence) Student | Exploring AI, Machine Learning & Software Development.",
  fullBio: "I am a first-year Computer Science and Engineering (Artificial Intelligence) undergraduate at Thejus Engineering College, Thrissur, Kerala. Driven by a deep curiosity for how intelligent algorithms can solve complex real-world challenges, I focus on building a rock-solid foundation in Python, C, data manipulation, and modern machine learning techniques.",
  heroChips: ["Python", "C Programming", "AI & ML"],
  heroCard: {
    title: "Building my future with technology.",
    tagline: "Learning • Creating • Innovating",
    statusBadge: "Available for Internships & Collaborations"
  },
  stats: [
    {
      value: 1,
      suffix: "st",
      label: "Academic Year",
      sublabel: "B.Tech CSE (AI)"
    },
    {
      value: 3,
      suffix: "+",
      label: "Key Projects",
      sublabel: "Python, C & ML"
    },
    {
      value: 6,
      suffix: "+",
      label: "Core Technologies",
      sublabel: "Languages & Tooling"
    },
    {
      value: 100,
      suffix: "%",
      label: "Dedication",
      sublabel: "Daily Coding & Practice"
    }
  ],
  skills: {
    languages: [
      { name: "Python", level: 90, experience: "Primary language for Data & AI", icon: "Code2" },
      { name: "C Programming", level: 85, experience: "Data structures & low-level memory", icon: "Terminal" },
      { name: "SQL", level: 75, experience: "Relational database queries", icon: "Database" },
      { name: "HTML5 & Modern CSS", level: 80, experience: "Web presentation & UI design", icon: "Layout" }
    ],
    aiml: [
      { name: "ML Foundations", level: 80, experience: "Supervised & Unsupervised concepts", icon: "Brain" },
      { name: "NumPy & Pandas", level: 85, experience: "Data transformation & tensor manipulation", icon: "Table" },
      { name: "Data Visualization", level: 82, experience: "Matplotlib & Seaborn insights", icon: "BarChart3" },
      { name: "Neural Networks Basics", level: 70, experience: "Perceptrons & feedforward architectures", icon: "Cpu" }
    ],
    tools: [
      { name: "Git & GitHub", level: 85, experience: "Version control & collaboration", icon: "GitBranch" },
      { name: "VS Code", level: 92, experience: "Primary modern dev environment", icon: "Layers" },
      { name: "Jupyter Notebooks", level: 88, experience: "Exploratory data analysis & experiments", icon: "BookOpen" },
      { name: "Linux / Bash", level: 75, experience: "CLI navigation & script automation", icon: "TerminalSquare" }
    ]
  },
  projects: [
    {
      id: "marks-analyzer",
      title: "Student Academic Performance Analyzer",
      category: "Python & Data Analytics",
      description: "An automated data intelligence tool built with Python and Pandas that processes student marks, computes GPA statistics, identifies at-risk subjects, and generates visual performance reports with Matplotlib.",
      longDescription: "Engineered a comprehensive analytics tool to help educators and students track exam performance trends over semesters. Implements statistical variance analysis, grade distributions, automated warning flags for struggling subjects, and exports formatted visual charts.",
      problem: "Manual examination mark compilation is slow, error-prone, and lacks real-time insight into at-risk students before final evaluations.",
      solution: "Engineered an automated data pipeline using Python & Pandas that parses semester grade sheets, computes GPA deviations, and renders automated Matplotlib visual charts.",
      result: "Processes 500+ student records in under 2 seconds, reducing administrative workload by 80% and flagging critical subjects early.",
      tech: ["Python", "Pandas", "Matplotlib", "NumPy", "Data Analytics"],
      githubUrl: "https://github.com/sreyadevi/student-marks-analyzer",
      demoUrl: "https://sreya-marks-analyzer.demo.app",
      highlight: "Processes 500+ student records in under 2 seconds with clean graphical insights."
    },
    {
      id: "ml-predictor",
      title: "Smart Healthcare Risk Prediction Model",
      category: "Machine Learning & AI",
      description: "A machine learning classification pipeline predicting diabetes and cardiovascular risks from patient biomarkers. Features feature scaling, cross-validation, and an interactive prediction interface.",
      longDescription: "Developed using Scikit-Learn with data preprocessing, categorical encoding, and model comparison across Logistic Regression, Random Forests, and SVMs. Achieved 88% test accuracy with hyperparameter tuning and deployed with a clean interactive web form.",
      problem: "Early detection of chronic metabolic conditions often suffers from fragmented clinical biomarkers and delayed diagnostic interpretation.",
      solution: "Trained an end-to-end classification pipeline comparing Random Forest, Logistic Regression, and SVM algorithms with robust cross-validation & feature normalization.",
      result: "Achieved 88% test accuracy and high recall on high-risk patient segments, paired with an interactive real-time inference interface.",
      tech: ["Machine Learning", "Scikit-Learn", "Python", "Pandas", "Streamlit"],
      githubUrl: "https://github.com/sreyadevi/ml-disease-predictor",
      demoUrl: "https://sreya-health-ml.demo.app",
      highlight: "88% test accuracy with balanced F1-score across critical clinical metrics."
    },
    {
      id: "c-banking-system",
      title: "High-Performance Student Record Manager",
      category: "C Programming & Algorithms",
      description: "A robust C console application implementing dynamic memory allocation, custom binary search trees, and binary file I/O for rapid student record indexing and grade management.",
      longDescription: "Built from scratch in pure C to explore systems programming and low-level memory management. Features custom data structs, sorting routines, binary file persistence, and an interactive ANSI-escaped terminal menu interface.",
      problem: "Traditional flat file student records suffer from O(N) linear lookups and vulnerability to memory fragmentation in low-resource environments.",
      solution: "Constructed indexed binary search tree indexes with custom heap allocation in pure C, coupled with structured binary file serialization.",
      result: "Sub-millisecond record search (O(log N)), zero memory leaks verified with Valgrind, and ultra-lightweight binary footprint.",
      tech: ["C Language", "Data Structures", "Pointers & Memory", "File I/O", "Algorithms"],
      githubUrl: "https://github.com/sreyadevi/c-record-management",
      demoUrl: "https://github.com/sreyadevi/c-record-management#demo",
      highlight: "Sub-millisecond record search using indexed binary structures and zero memory leaks."
    }
  ],
  journey: [
    {
      id: "portrait",
      title: "Professional Portrait",
      subtitle: "Aspiring AI Engineer",
      category: "Identity",
      tag: "Focus & Vision",
      image: "/profile.jpg",
      isPortrait: true,
      description: "Committed to mastering core computer science foundations and advancing artificial intelligence applications."
    },
    {
      id: "coding",
      title: "Late Night Coding & Algorithms",
      subtitle: "Deep Work Sessions",
      category: "Development",
      tag: "Python & C",
      isCode: true,
      description: "Translating mathematical concepts into optimized Python scripts, training machine learning models, and mastering data structures."
    },
    {
      id: "projects",
      title: "AI Model Evaluation & Analytics",
      subtitle: "Machine Learning Benchmarks",
      category: "Innovation",
      tag: "88% Accuracy",
      isProject: true,
      description: "Visualizing confusion matrices, learning rate decays, and feature importance distributions across healthcare risk datasets."
    },
    {
      id: "campus",
      title: "College & Hackathon Moments",
      subtitle: "Thejus Engineering College",
      category: "Milestone",
      tag: "Thrissur, Kerala",
      isCampus: true,
      description: "Collaborating with fellow engineers, participating in coding challenges, and building next-generation technology solutions."
    }
  ],
  education: [
    {
      degree: "B.Tech Computer Science & Engineering (Artificial Intelligence)",
      institution: "Thejus Engineering College",
      location: "Vellarakkad, Thrissur, Kerala",
      period: "2026 – 2030",
      status: "First Year Underway",
      description: "Specialized undergraduate program focused on Artificial Intelligence, Machine Learning algorithms, Data Structures, Mathematics for AI, Discrete Calculus, and System Engineering.",
      highlights: [
        "Active member of Campus Tech & Coding Club",
        "Focused on Python, C programming, and algorithmic problem-solving",
        "Participating in student AI hackathons & innovation workshops"
      ]
    },
    {
      degree: "Higher Secondary Education (Class XII - Science & CS)",
      institution: "Kerala State Higher Secondary Board",
      location: "Thrissur, Kerala",
      period: "2024 – 2026",
      status: "Completed with Distinction (95%+)",
      description: "Comprehensive foundational study in Physics, Chemistry, Mathematics, and Computer Science with hands-on lab work in procedural and object-oriented programming.",
      highlights: [
        "Top tier percentile in Mathematics & Computer Science",
        "School Science Exhibition project on automated systems",
        "Foundation in computational logic and analytical thinking"
      ]
    },
    {
      degree: "Secondary School Leaving Certificate (Class X)",
      institution: "General Education Department, Kerala",
      location: "Kerala",
      period: "2024",
      status: "Completed with Full A+ Grade",
      description: "Strong academic record with excellence in STEM subjects and regional science fairs.",
      highlights: [
        "All A+ academic honors",
        "Active participant in mathematics Olympiads and quiz competitions"
      ]
    }
  ],
  contact: {
    email: "sreyadevi.ai@example.com",
    location: "Thrissur, Kerala, India",
    institutionAddress: "Thejus Engineering College, Thrissur, Kerala - 680584",
    timezone: "IST (UTC +5:30)",
    socials: [
      { name: "GitHub", url: "https://github.com", icon: "Github" },
      { name: "LinkedIn", url: "https://linkedin.com", icon: "Linkedin" },
      { name: "Instagram", url: "https://instagram.com", icon: "Instagram" },
      { name: "Email", url: "mailto:sreyadevi.ai@example.com", icon: "Mail" }
    ]
  },
  aiBot: {
    welcomeMessage: "Hi there! 👋 I'm Sreya's AI Assistant. Ask me anything about Sreya's education, projects, skills, or internship availability!",
    quickPrompts: [
      "Who is Sreya?",
      "What are her key skills?",
      "Tell me about her projects",
      "Where does she study?",
      "Is she available for internships?",
      "How can I contact her?"
    ],
    responses: {
      who: "Sreya Devi is an aspiring Artificial Intelligence Engineer and 1st-year B.Tech CSE (Artificial Intelligence) student at Thejus Engineering College, Thrissur, Kerala. She has a solid foundation in Python, C programming, data manipulation, and machine learning pipelines, and is passionate about solving real-world challenges with intelligent algorithms.",
      skills: "Sreya's core technical stack includes:\n• Languages: Python (90%), C Programming (85%), SQL (75%), HTML/CSS (80%)\n• AI & Data: Machine Learning Foundations, NumPy, Pandas, Matplotlib, Data Visualization\n• Tools & Systems: Git & GitHub, VS Code, Jupyter Notebooks, Linux / Bash CLI.",
      projects: "Sreya has engineered 3 standout projects:\n1. 📊 Student Academic Performance Analyzer (Python, Pandas, Matplotlib) — automated mark intelligence.\n2. 🩺 Smart Healthcare Risk Prediction Model (Scikit-Learn, 88% accuracy) — clinical risk classification.\n3. ⚡ High-Performance Student Record Manager (Pure C, Binary Search Trees) — sub-millisecond lookups.",
      education: "Sreya is currently pursuing B.Tech CSE in Artificial Intelligence (2026-2030) at Thejus Engineering College, Thrissur, Kerala. She completed Higher Secondary (Science & CS) with 95%+ distinction under the Kerala State Board.",
      availability: "Yes! Sreya is actively open and available for summer internships, AI/ML research collaborations, and open-source opportunities. You can reach out directly via the contact form or email!",
      contact: "You can reach Sreya directly at:\n• Email: sreyadevi.ai@example.com\n• Location: Thrissur, Kerala, India\n• Connect on GitHub & LinkedIn via the footer links!"
    }
  }
};

