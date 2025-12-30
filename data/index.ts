export const navItems = [
  { name: "About", link: "#about" },
  { name: "Stats", link: "#stats" },
  { name: "Tech Stack", link: "#techstack" },
  { name: "Projects", link: "#projects" },
  { name: "Certifications", link: "#certifications" },
  { name: "Contact", link: "#contact" },
];

export const gridItems = [
  {
    id: 3,
    title:
      "I am always paying attention to new tech and make them my own weapon ",
    description: "",
    className:
      "lg:col-span-3 md:col-span-6 md:row-span-4 lg:min-h-[60vh] color:black",
    imgClassName: "w-full h-full",
    titleClassName: "justify-en color:black",
    img: "/b1.svg",
    spareImg: "",
  },
  {
    id: 2,
    title: "I'm very flexible with time zone communications",
    description: "",
    className: "lg:col-span-2 md:col-span-3 md:row-span-2",
    imgClassName: "",
    titleClassName: "justify-start",
    img: "",
    spareImg: "",
  },

  {
    id: 4,
    title: "Web3 oboriginal",
    description: "Some works on akaswap, and reward of Meta hackthon.",
    className: "lg:col-span-2 md:col-span-3 md:row-span-1",
    imgClassName: "",
    titleClassName: "justify-start",
    img: "/grid.svg",
    spareImg: "/b4.svg",
  },
  {
    id: 4,
    title: "Education degree:",
    description: "Bachelor degree:NCCU MIS,Master degree:NCCU DCT",
    className: "lg:col-span-2 md:col-span-3 md:row-span-1",
    imgClassName: "",
    titleClassName: "justify-start",
    img: "/grid.svg",
    spareImg: "/b4.svg",
  },

  {
    id: 5,
    title: "Building a falsk api server,recently ",
    description: "The Inside Scoop",
    className: "md:col-span-3 md:row-span-2",
    imgClassName: "absolute right-0 bottom-0 md:w-96 w-60",
    titleClassName: "justify-center md:justify-start lg:justify-center",
    img: "/gcp.svg",
    spareImg: "/grid.svg",
  },
  {
    id: 6,
    title: "Do you want to start a project together?",
    description: "",
    className: "lg:col-span-2 md:col-span-3 md:row-span-1",
    imgClassName: "",
    titleClassName: "justify-center md:max-w-full max-w-60 text-center",
    img: "",
    spareImg: "",
  },
];

export const projects = [
  {
    id: 1,
    title: "碳權交易平台 Carboon",
    des: "Golang + Supabase 架構 API，含 Swagger 文件與 JWT RBAC | Golang backend with Supabase, Swagger docs and JWT RBAC",
    img: "/carboon.png",
    iconLists: ["/re.svg", "/tail.svg", "/three.svg"],
    link: "https://github.com/dennislee928/carboon-trade-backend",
    demoVideo: "https://youtu.be/_iW3o3_Lvzs",
  },
  {
    id: 2,
    title: "Web3 互動平台",
    des: "與智能合約互動介面，包含 RWD UI 與資安導向設計 | Web3 smart contract interaction platform with RWD UI",
    img: "/web3.png",
    iconLists: ["/re.svg", "/tail.svg"],
    link: "https://web3.dennisleehappy.org/",
    demoVideo: "https://web3.dennisleehappy.org/"
  },
  {
    id: 3,
    title: "Cloudflare DNS 備援與資安治理",
    des: "自動化切換 DNS + WAF 規則更新 | Automated DNS failover and WAF rule management",
    img: "/p3.svg",
    iconLists: ["/vue.svg", "/nuxt3.svg", "/ts.svg"],
    link: "https://github.com/dennislee928/Cloudflare_Developer_Labs",
    demoVideo: "https://youtu.be/vWDmq0GiCo4",
  },
  {
    id: 4,
    title: "Firmware Analysis Lab",
    des: "韌體靜態分析、YARA 掃描與 CAN Bus 模擬工具組 | Firmware static analysis with YARA scanning and CAN Bus simulation",
    img: "/yara.png",
    iconLists: ["/ts.svg"],
    link: "https://github.com/dennislee928/firmware-research-demo",
    demoVideo: "https://youtu.be/rHVcB-mxKB8",
  },
  {
    id: 5,
    title: "Side Project Backend",
    des: "Python RESTful API deployed on Cloud Run | Flask API on GCP Cloud Run",
    img: "/p5.svg",
    iconLists: ["/re.svg", "/tail.svg", "/three.svg"],
    link: "https://github.com/dennislee928/side-project-1-backend",
  },
  {
    id: 6,
    title: "Cloudflare AI 圖像生成",
    des: "利用 Cloudflare Workers 與 JS 建立前後端原型 | AI image generation using Cloudflare Workers",
    img: "/p6.svg",
    iconLists: ["/re.svg"],
    link: "https://github.com/dennislee928/firmware-research-demo/tree/tsse",
    demoVideo: "https://youtu.be/43sSu1Ve55s",
  },
  {
    id: 7,
    title: "Bitfinex Funding Bot (WIP)",
    des: "Go 實作自動放貸策略，含 YAML 策略模組 | Golang automated lending strategy with YAML config",
    img: "/bot.png",
    iconLists: ["/re.svg", "/tail.svg"],
    link: "https://github.com/dennislee928/fundbot-go",
    demoVideo:"https://github.com/dennislee928/fundbot-go"
  },
  {
    id: 8,
    title: "CityInsight 360",
    des: "建築專案管理平台 | Construction project management platform",
    img: "/p2.svg",
    iconLists: ["/vue.svg", "/nuxt3.svg"],
    link: "https://shipeng-dev.dennisleehappy.org/login",
    demoVideo: "https://shipeng-dev.dennisleehappy.org/login"
  },
  {
    id: 9,
    title: "量子音頻分析系統",
    des: "cyberpunk 風格的量子音頻分析系統 | Cyberpunk quantum audio analysis system",
    img: "/essentia.png",
    iconLists: ["/re.svg", "/three.svg"],
    link: "https://essentia.dennisleehappy.org/",
    demoVideo: "https://essentia.dennisleehappy.org/"
  },
  {
    id: 10,
    title: "IELTS 學習遊戲",
    des: "互動式 IELTS 練習平台 | Interactive IELTS practice platform",
    img: "/https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fwww.newcambridgecollege.com%2Fblog%2Fwp-content%2Fuploads%2F2023%2F01%2Fshutterstock_2193068817-scaled.jpg&f=1&nofb=1&ipt=de38c910a808cc619038c402a903d2f7c0a54a9e5afdf387fed99b99fd3bcebe",
    iconLists: ["/re.svg", "/tail.svg"],
    link: "https://ielts-game.vercel.app/",
    demoVideo: "https://ielts-game.vercel.app/"
  },
];

export const workExperience = [
  {
    id: 1,
    title: "Lead Frontend Engineer-Bityacht.io",
    desc: "Using Nuxt3 to build a crypto excahnge company in user-end an d operation -end.And doing Figma for app design.GCP management.",
    className: "md:col-span-2",
    thumbnail: "/exp1.svg",
  },
  {
    id: 2,
    title: "Manager of MIS department - THAM.com",
    desc: "Importing ERP system, auto-generated financial report, and  Database management.",
    className: "md:col-span-2", // change to md:col-span-2
    thumbnail: "/exp2.svg",
  },
  {
    id: 3,
    title: "Unity game builder-National Cheng Chi University(EDU Dep.)",
    desc: "Conduct a Unity game project as an Research Assistant.Writing C#,making scenes,etc.",
    className: "md:col-span-2", // change to md:col-span-2
    thumbnail: "/exp3.svg",
  },
  {
    id: 4,
    title: "Freelance",
    desc: "Onepage web site development case by case.Including restaurant,labs,etc.",
    className: "md:col-span-2",
    thumbnail: "/exp4.svg",
  },
];

export const socialMedia = [
  {
    id: 1,
    img: "/git.svg",
    url: "https://github.com/dennislee928",
  },
  {
    id: 2,
    img: "/twit.svg",
    url: "https://x.com/lee66876613",
  },
  {
    id: 3,
    img: "/link.svg",
    url: "https://www.linkedin.com/in/pf-frog-4a3a352a2/",
  },
];
