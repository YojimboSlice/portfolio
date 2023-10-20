import {
  mobile,
  backend,
  creator,
  web,
  javascript,
  typescript,
  html,
  css,
  reactjs,
  redux,
  tailwind,
  nodejs,
  mongodb,
  git,
  figma,
  docker,
  meta,
  starbucks,
  tesla,
  shopify,
  carrent,
  crwnclothing,
  wildoasis,
  pacificworkwear,
  fastreactpizzaco,
  expensestracker,
  jobit,
  tripguide,
  threejs,
  web2,
  coding,
  react,
  reactquery,
  pacificworkwearlogo,
  musicalnotes,
  coding2,
} from "../assets";

export const navLinks = [
  {
    id: "about",
    title: "About",
  },
  {
    id: "work",
    title: "Work",
  },
  {
    id: "contact",
    title: "Contact",
  },
];

const services = [
  {
    title: "Web Developer",
    icon: coding2,
  },
  {
    title: "Backend Developer",
    icon: backend,
  },
  {
    title: "Music Artist and Producer",
    icon: musicalnotes,
  },
  {
    title: "Content Creator",
    icon: creator,
  },
];

const technologies = [
  {
    name: "HTML 5",
    icon: html,
  },
  {
    name: "CSS 3",
    icon: css,
  },
  {
    name: "JavaScript",
    icon: javascript,
  },
  {
    name: "React JS",
    icon: reactjs,
  },
  {
    name: "Redux Toolkit",
    icon: redux,
  },
  {
    name: "Tailwind CSS",
    icon: tailwind,
  },
  {
    name: "Three JS",
    icon: threejs,
  },
  {
    name: "git",
    icon: git,
  },
];

const experiences = [
  {
    title: "Web Developer",
    company_name: "",
    icon: coding,
    iconBg: "#E6DEDD",
    date: "April 2022 - Present",
    points: [
      "Learning the fundamentals of JavaScript and how to use it in a web environment",
      "Learning the fundamentals of HTML and CSS in order to build web applications",
      "Building projects in JavaScript, such as a mock up banking app, to apply JavaScript, HTML, and CSS knowledge",
    ],
  },
  {
    title: "React Developer",
    company_name: "",
    icon: react,
    iconBg: "#383E56",
    date: "Oct 2022 - Present",
    points: [
      "Developing and maintaining web applications using React.js and other related technologies.",
      "Implementing responsive design and ensuring cross-browser compatibility.",
      "Participating in code reviews and providing constructive feedback to other developers.",
    ],
  },

  {
    title: "Pacific Work Wear",
    company_name: "",
    icon: pacificworkwearlogo,
    iconBg: "#E6DEDD",
    date: "October 2023 - Present",
    points: [
      "Manage frontend and backend for a small business selling high quality gear for construction workers and fire men.",
      "Improve SEO performance and maintain frontend/backend performance",
    ],
  },

  {
    title: "Backend Developer",
    company_name: "",
    icon: coding,
    iconBg: "#383E56",
    date: "October 2023 - Present",
    points: [
      "Create backend endpoints for e-commerce website that integrates various APIS including Stripe, TaxJar, EasyPost and SendGrid",
      "Experience with MongoDB as well as Supabase and FireStore FireBase for basic CRUD operations",
    ],
  },
];

const testimonials = [
  {
    testimonial:
      "I thought it was impossible to make a website as beautiful as our product, but Rick proved me wrong.",
    name: "Sara Lee",
    designation: "CFO",
    company: "Acme Co",
    image: "https://randomuser.me/api/portraits/women/4.jpg",
  },
  {
    testimonial:
      "I've never met a web developer who truly cares about their clients' success like Rick does.",
    name: "Chris Brown",
    designation: "COO",
    company: "DEF Corp",
    image: "https://randomuser.me/api/portraits/men/5.jpg",
  },
  {
    testimonial:
      "After Rick optimized our website, our traffic increased by 50%. We can't thank them enough!",
    name: "Lisa Wang",
    designation: "CTO",
    company: "456 Enterprises",
    image: "https://randomuser.me/api/portraits/women/6.jpg",
  },
];

const projects = [
  {
    name: "Pacific Work Wear",
    description: `Using React Query for remote state to fetch image, price, sku, and a myriad of other pieces of data, from Supabase. Also created a proxy server for managing endpoints from Stripe, Taxjar, EasyPost, and SendGrid APIs I also used redux to create a ui state for the user cart. Most challenging app so far.`,
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "html",
        color: "orange-text-gradient",
      },
      {
        name: "tailwind",
        color: "pink-text-gradient",
      },
      {
        name: "reactquery",
        color: "pink-text-gradient",
      },

      {
        name: "redux toolkit",
        color: "pink-text-gradient",
      },
      {
        name: "react hook form",
        color: "pink-text-gradient",
      },
    ],
    image: pacificworkwear,
    source_code_link:
      "https://github.com/YojimboSlice/e-commerce-frontend/tree/main/",
    website_link: "https://genuine-meerkat-440485.netlify.app/shop",
  },
  {
    name: "The Wild Oasis",
    description: `Internal hotel management app. The project that I learned React Query with. Supabase for data storage, and some frontend filtering and sorting functionality.Will update after adding user authentication feature, and an overview dashboard to see hotel data like bookings, cabins and guests.`,
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "html",
        color: "orange-text-gradient",
      },
      {
        name: "tailwind",
        color: "pink-text-gradient",
      },
      {
        name: "reactquery",
        color: "pink-text-gradient",
      },
    ],
    image: wildoasis,
    source_code_link: "https://github.com/YojimboSlice/the-wild-oasis",
    website_link: "https://sunny-sprinkles-dca914.netlify.app/dashboard",
  },
  {
    name: "Fast React Pizza Co.",
    description: `Order pizza, and check on your order status. I learned alot about making a cart and managing the cart state. This was my first exposure to redux for managing state, along with more practice using react router`,
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "html",
        color: "orange-text-gradient",
      },
      {
        name: "tailwind",
        color: "pink-text-gradient",
      },
      {
        name: "react redux",
        color: "pink-text-gradient",
      },
    ],
    image: fastreactpizzaco,
    source_code_link: "https://github.com/YojimboSlice/fast-react-pizza-co",
    website_link: "https://gilded-piroshki-3be105.netlify.app/",
  },
  {
    name: "Expenses Tracker",
    description:
      "Web application that enables users to track expenses, filter through expenses by year, and receive visual feedback in the form of a bar graph using the months for each bar.",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "html",
        color: "orange-text-gradient",
      },
      {
        name: "scss",
        color: "pink-text-gradient",
      },
    ],
    image: expensestracker,
    source_code_link: "https://github.com/YojimboSlice/expenses-tracker",
    website_link: "https://deft-crostata-8362c7.netlify.app/",
  },
];

export { services, technologies, experiences, testimonials, projects };
