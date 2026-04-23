import { createRouter, createWebHashHistory } from "vue-router";
import HomeView from "../views/Home.vue";

const worksUsingTemplate = {
  nubila: {
    theme: "dark",
    title: "Designing the future of weather detection <br>based on blockchain",
    metaTitle: "Designing the future of weather detection based on blockchain",
    cover: "nubila/cover",
    logo: "nubila/logo.svg",
    landing: "projects/nubila/network/1.jpg",
    backgroundColor: "#1A1F21",
    info: [
      {
        title: "Tasks",
        content: ["Front-end Developing", "UI/UX Design", "Visual Design"],
      },
      {
        title: "My Role",
        content: ["Front-end Lead", "Design Lead"],
      },
      {
        title: "Skills",
        content: ["Next.js", "Tailwind CSS", "UI/UX Design"],
      },
      {
        title: "Client",
        content: ["Nubila Inc."],
      },
      {
        title: "Links",
        content: [
          "<a target='_blank' href='https://nubila.ai'>https://nubila.ai</a>",
          "<a target='_blank' href='https://nubila.network'>https://nubila.network</a>",
        ],
      },
    ],
    description: [
      `I played a key role in the Nubila.ai project, which focuses on crowd-sourced weather detection using blockchain technology. 
        As the design and front-end lead, I was responsible for designing and implementing both the official and product websites.`,
      `Using Next.js and Tailwind CSS, I delivered the first version of the official website within two weeks, 
        earning highly positive client feedback and securing trust to lead the front-end development. 
        Over the next six months, I drove multiple high-quality iterations, refining the user experience. 
        Additionally, I designed and implemented engaging animations and interactions to effectively 
        showcase the product’s features and mission.`,
    ],
    images: [
      {
        title: "Nubila.AI",
        content: [
          "projects/nubila/ai/1.jpg",
          "projects/nubila/ai/2.jpg",
          "projects/nubila/ai/3.jpg",
          "projects/nubila/ai/4.jpg",
        ],
      },
      {
        title: "Nubila.Network",
        content: [
          "projects/nubila/network/1.jpg",
          "projects/nubila/network/2.jpg",
          "projects/nubila/network/3.jpg",
          "projects/nubila/network/4.jpg",
          "projects/nubila/network/5.jpg",
          "projects/nubila/network/6.jpg",
          "projects/nubila/network/7.jpg",
        ],
      },
    ],
  },
  stickerhd: {
    theme: "light",
    title: "E-commerce Website<br>for Printing Company",
    metaTitle: "E-commerce Website for Printing Company",
    cover: "stickerhd/cover",
    logo: "stickerhd/logo.svg",
    landing: "projects/stickerhd/1.jpg",
    backgroundColor: "#F7F7FC",
    info: [
      {
        title: "Tasks",
        content: ["Front-end Developing", "UI/UX Design"],
      },
      {
        title: "My Role",
        content: ["Front-end Lead", "Design Lead"],
      },
      {
        title: "Skills",
        content: ["Next.js", "Styled Components", "Redux", "UI/UX Design"],
      },
      {
        title: "Client",
        content: ["StickerHD Inc."],
      },
      {
        title: "Links",
        content: [
          "<a target='_blank' href='https://stickerhd.com'>https://stickerhd.com</a>",
        ],
      },
    ],
    description: [
      `StickerHD is a printing company that specializes in creating custom stickers, 
        providing both a platform for users to shop and manage their print jobs online, as well as showcasing their work. 
        Their e-commerce website allows users to browse a wide selection of stickers, place orders, and view previous projects, 
        making it a crucial part of their customer experience.`,
      `As the sole front-end developer, I led the development of the official website using Next.js, 
        ensuring a seamless and intuitive user experience. 
        I translated design mockups into functional web components using styled-components and focused on creating 
        smooth micro-interactions and engaging SVG animations to bring the site to life. 
        Additionally, I was responsible for the overall UI/UX design, 
        ensuring consistency across the platform and contributing to ongoing iterations based on client feedback.`,
    ],
    images: [
      {
        title: "Homepage",
        content: ["projects/stickerhd/1.jpg"],
      },
      {
        title: "Gallery",
        content: ["projects/stickerhd/2.jpg"],
      },
      {
        title: "Cart",
        content: ["projects/stickerhd/3.jpg"],
      },
      {
        title: "Product Category",
        content: ["projects/stickerhd/4.jpg"],
      },
    ],
  },
  tiago: {
    theme: "dark",
    title: "Improve User experience<br>in TIAGo Teleoperation",
    metaTitle: "Improve User experience in TIAGo Teleoperation",
    cover: "tiago/cover",
    logo: null,
    landing: "projects/tiago/1.jpg",
    backgroundColor: "#161D17",
    info: [
      {
        title: "Tasks",
        content: ["UX Research", "UI/UX Design", "VR Design"],
      },
      {
        title: "My Role",
        content: ["UX Researcher", "Interviewer", "UI/UX Design Lead"],
      },
      {
        title: "Skills",
        content: [
          "Semi-structured Interview",
          "Usability Testing",
          "UI/UX Design",
          "VR Design",
        ],
      },
      {
        title: "Links",
        content: [
          "<a target='_blank' href='https://www.youtube.com/watch?v=PBtz8oy-grM'>Demo Video</a>",
        ],
      },
    ],
    description: [
      ` This project was my Master’s capstone at the University of Melbourne, 
      supervised by Dr. Arzoo Atiq and Antony Chacon Salas. 
      Our goal was to design an integrated solution that enables robotics researchers to intuitively control the TIAGo robot.`,
      `Over the course of 12 weeks, we conducted extensive desktop research, user interviews, 
      affinity mapping, usability testing, and iterative wireframing, culminating in a high-fidelity UI/UX prototype.`,
      `In this case study, I walk through our research methodology, 
      how we defined the core problem, and how we translated insights into a hybrid solution 
      that blends a software interface, physical controller, and VR experience for effective robot teleoperation.`,
    ],
    images: [
      {
        title: "",
        content: ["projects/tiago/2.jpg"],
      },
    ],
  },
};

const routes = [
  {
    path: "/",
    name: "Home",
    component: HomeView,
  },
  {
    path: "/work",
    name: "Work",
    component: () => import("../views/Work.vue"),
  },
  {
    path: "/resume",
    name: "Resume",
    component: () => import("../views/Resume.vue"),
  },
  {
    path: "/enquiry",
    name: "Enquiry",
    component: () => import("../views/Enquiry.vue"),
  },
  {
    path: "/work/clip",
    name: "WorksClip",
    component: () => import("../views/work/clip/Clip.vue"),
    meta: { indvidual: true, hideNav: true, backgroundColor: "#232B3E" },
  },
  {
    path: "/work/avianlens",
    name: "WorksAL",
    component: () => import("../views/work/avianlens/Avianlens.vue"),
    meta: { indvidual: true, hideNav: true, backgroundColor: "#13140D" },
  },
  {
    path: "/work/coc",
    name: "WorksCoc",
    component: () => import("../views/work/coc/Coc.vue"),
    meta: { hideNav: true },
  },
  {
    path: "/work/cloudmatrix",
    name: "WorksCloudmatrix",
    component: () => import("../views/work/cloudmatrix/Cloudmatrix.vue"),
    meta: { hideNav: true },
  },
  {
    path: "/work/milelync",
    name: "WorksMilelync",
    component: () => import("../views/work/milelync/Milelync.vue"),
    meta: { hideNav: true },
  },
  {
    path: "/work/nubila",
    name: "WorksNubila",
    component: () => import("../views/work/template/Template.vue"),
    meta: {
      hideNav: true,
      backgroundColor: worksUsingTemplate.nubila.backgroundColor,
      title: worksUsingTemplate.nubila.metaTitle,
    },
    props: () => ({ data: worksUsingTemplate.nubila }),
  },
  {
    path: "/work/stickerhd",
    name: "WorksStickerHD",
    component: () => import("../views/work/stickerhd/Stickerhd.vue"),
    meta: {
      indvidual: true,
      hideNav: true,
      backgroundColor: "#254441",
      title: "StickerHD — Deliver Uplift for E-Commerce",
    },
  },
  {
    path: "/work/tiago",
    name: "WorksTiago",
    component: () => import("../views/work/template/Template.vue"),
    meta: {
      hideNav: true,
      backgroundColor: worksUsingTemplate.tiago.backgroundColor,
      title: worksUsingTemplate.tiago.metaTitle,
    },
    props: () => ({ data: worksUsingTemplate.tiago }),
  },
];

const router = createRouter({
  history: createWebHashHistory(),
  routes,
  scrollBehavior() {
    return new Promise((resolve) => {
      setTimeout(() => {
        resolve({ left: 0, top: 0 });
      }, 300);
    });
  },
});

router.beforeEach((to, from, next) => {
  if (to.name === undefined || from.name === undefined) next();
  let order = ["Home", "Work", "Resume", "Enquiry"];
  let toIndex = order.indexOf(to.name);
  let fromIndex = order.indexOf(from.name);
  if (to.name.startsWith("Works")) toIndex = 100000;
  else if (from.name.startsWith("Works")) fromIndex = -1;
  if (toIndex > fromIndex) {
    to.meta.transition = "next";
  } else {
    to.meta.transition = "pre";
  }
  next();
});

export default router;
