// Category colors follow a 3D viewport's axis-gizmo convention (X/Y/Z = red/green/blue),
// plus lime for whatever's actively on fire — same meaning an engine debug HUD gives it.
export const categories = {
  engine: { label: "Engine", color: "var(--axis-x)" },
  tools: { label: "Tools", color: "var(--axis-y)" },
  apps: { label: "Apps", color: "var(--axis-z)" },
  games: { label: "Games", color: "var(--axis-w)" },
};

export const stack = {
  Languages: ["C", "C++", "Python", "JavaScript", "Node.js", "React", "C#", "XAML"],
  "Graphics APIs": ["OpenGL", "Vulkan", "DirectX"],
  "Tools & Systems": ["Version control", "CI/CD"],
};

export const now = "Building Project R (send help)";

export const tagline = "Systems programmer and game engine developer. Running on caffeine, nicotine, and spite.";

export const ticker = [
  "compiles on my machine",
  "running on 4 hours of sleep and a concerning amount of caffeine",
  "no tests, no fear",
  "it works, don't ask me why",
  "held together by duct tape and stack traces",
  "founder of Stupa Studio, victim of Stupa Studio",
  "currently building Project R, send help",
];

export const projects = [
  {
    name: "OpenGL Engine",
    category: "engine",
    status: "Open source",
    desc: "Where I actually learned graphics programming. Public, messy in places, and proud of it.",
    tags: ["OpenGL", "C++"],
    link: { href: "https://github.com/pogoPotato/StupaEngineGL", label: "GitHub" },
  },
  {
    name: "Stupa Engine",
    category: "engine",
    status: "Building",
    size: "lg",
    desc: "Stupa Studio's proprietary Vulkan engine. Project R is being built on it, and no, it's not open source.",
    tags: ["Vulkan", "Proprietary"],
    link: null,
  },
  {
    name: "VCT",
    category: "tools",
    status: "In use",
    desc: "Version control, built from scratch because apparently Git wasn't punishment enough. Public v1, running v4 internally.",
    tags: ["CLI"],
    link: { href: "https://github.com/pogoPotato/VCT_v1", label: "GitHub" },
  },
  {
    name: "Bind",
    category: "tools",
    status: "Shipped",
    desc: "A compile helper for C/C++ so I stop retyping the same flags at 3am.",
    tags: ["C++"],
    link: { href: "https://github.com/pogoPotato/BIND_COMPILE_HELPER", label: "GitHub" },
  },
  {
    name: "STUPA Launcher",
    category: "apps",
    status: "v1.2.0",
    desc: "Desktop launcher for installing and updating Stupa Studio games. Actually stable, which worries me.",
    tags: ["Windows"],
    link: { page: "downloads", label: "Download" },
  },
  {
    name: "Linkage",
    category: "apps",
    status: "v1.2.0",
    desc: "Android app, built and maintained under Stupa Studio. Ships more reliably than I sleep.",
    tags: ["Android"],
    link: { page: "downloads", label: "Download" },
  },
  {
    name: "SSMS",
    category: "apps",
    status: "Licensable",
    desc: "Runs the actual business side of Stupa Studio so I don't have to adult. Also licensable, if you trust software built by someone running on 4 hours of sleep.",
    tags: ["In-house", "Licensable"],
    link: null,
  },
  {
    name: "Project R",
    category: "games",
    status: "Building",
    size: "lg",
    desc: "Story-driven horror game. What I'm burning through energy drinks on right now.",
    tags: [],
    link: null,
  },
  {
    name: "Raccoon Cafe",
    category: "games",
    status: "Shipped",
    desc: "A cozy idle-clicker, built with SDL. Softer than everything else on this page.",
    tags: ["SDL"],
    link: { href: "https://github.com/pogoPotato/RaccoonCafe", label: "GitHub" },
  },
  {
    name: "Zombie Apocalypse Survival",
    category: "games",
    status: "Shipped",
    desc: "Survival game, available through the Launcher. Less buggy than my sleep schedule.",
    tags: [],
    link: null,
  },
];

export const downloads = [
  {
    name: "STUPA Launcher",
    meta: "v1.2.0 · Windows",
    img: "/img/STUPA.png",
    href: "/files/StupaLauncherSetup.exe",
  },
  {
    name: "Linkage",
    meta: "v1.2.0 · Android APK",
    img: "/img/LinkageLogo.png",
    href: "/files/Linkage.apk",
  },
  {
    name: "STUPA LOGI",
    meta: "Windows",
    img: "/img/stupalogilogo.png",
    href: "/files/STUPA_LOGI.exe",
  },
  {
    name: "VCT v1.0",
    meta: "Windows",
    img: "/img/vtc.png",
    href: "/files/VCT setup.exe",
  },
];

export const resume = {
  education: [
    { title: "Yamanashi Gakuin University — Data Science", meta: "2024 – Present, Yamanashi, Japan" },
    { title: "Everest Secondary School", meta: "2021 – 2023, Biratnagar, Nepal" },
  ],
  keyWork: [
    "Stupa Engine",
    "VCT",
    "STUPA Launcher",
    "Linkage",
    "SSMS",
    "Studio founder — Stupa Studio",
  ],
};
