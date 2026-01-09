import { useMemo, useState } from "react";

const profile = {
  name: "Amar Sharma",
  title: "Full Stack Developer",
  location: "Fulda, Hesse, Germany",
  phone: "+49 1781131879",
  email: "sharmaamar.edu@gmail.com",
  linkedin: "linkedin.com/in/amars31",
  summary:
    "Dynamic full stack developer with hands-on experience designing, developing, and scaling SaaS products across healthcare, fintech, legal tech, and ERP domains. I build production-ready systems, modernize legacy platforms, and optimize performance in agile teams.",
};

const highlights = [
  { label: "Years building SaaS", value: "4+" },
  { label: "Industries shipped", value: "4" },
];

const experience = [
  {
    company: "Everest Systems GmbH",
    role: "Working Student & Intern",
    period: "May 2024 - Present",
    location: "Heidelberg, Germany (Hybrid)",
    points: [
      "Built a Purchase Order module on the presentation layer, streamlining procurement workflows.",
      "Migrated Employee Expenses from legacy UI to modern architecture, improving maintainability and performance.",
      "Resolved critical issues and shipped new features in P2P Payments, boosting stability and functionality.",
      "Used TypeScript and AI-assisted workflows to reduce development time by 35%.",
    ],
  },
  {
    company: "Trubary Technologies Pvt. Ltd.",
    role: "Full Stack Developer",
    period: "Jul 2022 - Sep 2023",
    location: "Remote, India",
    points: [
      "Architected a legal tech SaaS platform for Australian clients, digitizing compliance workflows.",
      "Expanded supported document types from 5 to 11, increasing scalability by 120%.",
      "Built a Knowledge Center with 30+ articles and interactive support chat module.",
      "Delivered a serverless stack with Vue, Firebase Cloud Functions, and Firestore.",
    ],
  },
  {
    company: "Cognizant Technology Services",
    role: "Programmer Analyst Trainee",
    period: "Nov 2021 - Jun 2022",
    location: "Mumbai, India",
    points: [
      "Completed Advanced Java Full Stack Engineer certification.",
      "Led a 5-person team to build a Hospital Reception Management System.",
    ],
  },
  {
    company: "Aron Consultancy Services",
    role: "Freelance Full Stack Developer",
    period: "Jul 2020 - Oct 2021",
    location: "Nagpur, India",
    points: [
      "Built a Remote Patient Monitoring SaaS platform with role-based workflows.",
      "Integrated ShipStation and medical device systems using webhooks and cron jobs.",
      "Shipped analytics dashboards that improved insurance claim accuracy by 15%.",
      "Architectural role-based hierarchical workflows for multi-tier healthcare teams (practices, physicians, nurses, medical assistants), optimizing care coordination and operational efficiency.",
      "Scaled the platform to 3,000+ active patients across 10+ practices.",
    ],
  },
  {
    company: "S2P Edutech",
    role: "Project Intern",
    period: "Dec 2019 - Jan 2020",
    location: "Nagpur, India",
    points: [
      "Built a travel management platform with Angular and Node.js.",
      "Integrated Razorpay payments and Travelport APIs for real-time flight data.",
    ],
  },
];

const projects = [
  {
    name: "Edicodetor",
    period: "Apr 2020",
    link: "https://edicodetor.web.app",
    tags: ["Web", "Developer Tools"],
    description:
      "Online code editor and compiler for multiple languages, designed for beginner-friendly learning during the COVID-19 lockdown.",
    stack: ["React", "Node.js"],
  },
  {
    name: "Bhavesh Jewellers App",
    period: "Mar 2020 - May 2020",
    link: "",
    tags: ["Mobile", "Commerce"],
    description:
      "B2B mobile app for jewelry inventory control, ordering, and customer engagement.",
    stack: ["Flutter", "Firebase", "OneSignal"],
  },
];

const education = [
  {
    program: "M.Sc. Global Software Development",
    school: "Hochschule Fulda, Germany",
    period: "Oct 2023 - Present",
    detail: "GPA 2.0",
  },
  {
    program: "B.E. Computer Science",
    school: "S.B. Jain Institute of Technology, Management & Research, India",
    period: "2018 - 2021",
    detail: "CGPA 9.29",
  },
  {
    program: "Diploma in Computer Technology",
    school: "Dharampeth Polytechnic, India",
    period: "2015 - 2018",
  },
];

const skills = [
  "JavaScript",
  "TypeScript",
  "React",
  "Node.js",
  "Express",
  "Vue",
  "Angular",
  "Firebase",
  "AWS",
  "MySQL",
  "Docker",
  "Kubernetes",
  "CI/CD",
  "REST APIs",
  "GraphQL",
  "Microservices",
  "Jest",
];

const filters = ["All", "Web", "Mobile", "Commerce", "Developer Tools"];

const cardClass =
  "rounded-2xl border border-white/10 bg-white/5 p-6 shadow-[0_20px_40px_rgba(0,0,0,0.25)] backdrop-blur-xl";

export default function App() {
  const [activeFilter, setActiveFilter] = useState("All");

  const filteredProjects = useMemo(() => {
    if (activeFilter === "All") return projects;
    return projects.filter((project) => project.tags.includes(activeFilter));
  }, [activeFilter]);

  return (
    <div className="relative min-h-screen overflow-hidden bg-[radial-gradient(circle_at_15%_20%,#1d2732_0%,#0c0f14_55%)] text-slate-100">
      <div className="pointer-events-none absolute -left-32 -top-40 h-[460px] w-[460px] rounded-full bg-[radial-gradient(circle,#f9c74f_0%,rgba(249,199,79,0)_70%)] opacity-40" />
      <div className="pointer-events-none absolute -bottom-52 -right-40 h-[460px] w-[460px] rounded-full bg-[radial-gradient(circle,#4ea8de_0%,rgba(78,168,222,0)_70%)] opacity-50" />

      <div className="relative z-10 flex flex-col gap-16 px-6 pb-20 pt-14 md:px-12 lg:px-20">
        <header className="grid items-center gap-10 lg:grid-cols-[1.1fr_0.9fr]">
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.35em] text-amber-300">
              Full Stack Developer
            </p>
            <h1 className="mt-3 font-serif text-4xl sm:text-5xl lg:text-6xl">
              {profile.name}
            </h1>
            <p className="mt-4 max-w-xl text-base leading-7 text-slate-300">
              {profile.summary}
            </p>
            <div className="mt-6 flex flex-wrap gap-x-6 gap-y-2 text-sm text-slate-400">
              <span>{profile.location}</span>
              <span>{profile.phone}</span>
              <span>{profile.email}</span>
            </div>
            <div className="mt-6 flex flex-wrap gap-3">
              <a
                className="rounded-full bg-amber-300 px-6 py-2 text-sm font-semibold text-slate-900 transition hover:-translate-y-0.5"
                href={`mailto:${profile.email}`}
              >
                Start a project
              </a>
              <a
                className="rounded-full border border-white/15 px-6 py-2 text-sm font-semibold text-slate-100 transition hover:-translate-y-0.5"
                href="/resume.docx"
              >
                Download resume
              </a>
              <a
                target="_blank" rel="noopener noreferrer"
                className="rounded-full border border-white/15 px-6 py-2 text-sm font-semibold text-slate-100 transition hover:-translate-y-0.5"
                href={`https://${profile.linkedin}`}
              >
                LinkedIn
              </a>
            </div>
          </div>

          <div className="grid gap-6">
            <div className={cardClass}>
              <h3 className="text-lg font-semibold text-slate-100">
                What I build
              </h3>
              <p className="mt-3 text-sm leading-6 text-slate-300">
                Product-focused systems with clean APIs, scalable cloud
                architecture, and thoughtful user experiences.
              </p>
              <div className="mt-4 flex flex-wrap gap-2">
                {["SaaS", "Fintech", "Healthcare", "Legal Tech", "ERP"].map(
                  (item) => (
                    <span
                      className="rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs"
                      key={item}
                    >
                      {item}
                    </span>
                  )
                )}
              </div>
            </div>
            <div
              className={`${cardClass} bg-gradient-to-br from-sky-400/15 to-amber-300/15`}
            >
              <h3 className="text-lg font-semibold text-slate-100">
                Currently
              </h3>
              <p className="mt-3 text-sm leading-6 text-slate-300">
                As a Werkstudent - Building scalable procurement and payments modules at Everest
                Systems with TypeScript and modern presentation architecture. 
                Working on Master's thesis topic of Podcasts Transcription and Topic analysis using BERT model
                which will be concluded in Feb-26 
              </p>
              <div className="mt-4 inline-flex items-center gap-2 text-sm font-semibold text-slate-100">
                <span className="h-2 w-2 rounded-full bg-emerald-400 shadow-[0_0_12px_rgba(52,211,153,0.9)]" />
                Open to Fulltime roles in Germany
              </div>
            </div>
          </div>
        </header>

        <section>
          <div className="mb-7">
            <h2 className="text-2xl font-semibold">Impact snapshot</h2>
            <p className="mt-2 text-sm text-slate-400">
              Numbers and outcomes that show momentum.
            </p>
          </div>
          <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {highlights.map((item) => (
              <div className={`${cardClass} text-center`} key={item.label}>
                <span className="block text-3xl font-semibold">
                  {item.value}
                </span>
                <span className="text-sm text-slate-400">{item.label}</span>
              </div>
            ))}
          </div>
        </section>

        <section>
          <div className="mb-7">
            <h2 className="text-2xl font-semibold">Experience</h2>
            <p className="mt-2 text-sm text-slate-400">
              End-to-end delivery across SaaS, healthcare, and fintech.
            </p>
          </div>
          <div className="grid gap-5">
            {experience.map((role) => (
              <article className={cardClass} key={role.company}>
                <div className="flex flex-wrap items-start justify-between gap-4">
                  <div>
                    <h3 className="text-lg font-semibold">{role.company}</h3>
                    <p className="text-sm text-slate-400">{role.role}</p>
                  </div>
                  <div className="text-right text-sm text-slate-400">
                    <p>{role.period}</p>
                    <p>{role.location}</p>
                  </div>
                </div>
                <ul className="mt-4 list-disc space-y-2 pl-5 text-sm text-slate-300">
                  {role.points.map((point) => (
                    <li key={point}>{point}</li>
                  ))}
                </ul>
              </article>
            ))}
          </div>
        </section>

        <section>
          <div className="mb-7">
            <h2 className="text-2xl font-semibold">Projects</h2>
            <p className="mt-2 text-sm text-slate-400">
              Selected builds with a focus on product polish.
            </p>
          </div>
          <div className="mb-6 flex flex-wrap gap-2">
            {filters.map((filter) => (
              <button
                key={filter}
                className={`rounded-full border px-4 py-1 text-sm transition ${
                  activeFilter === filter
                    ? "border-transparent bg-amber-300 text-slate-900"
                    : "border-white/15 text-slate-400 hover:border-amber-300 hover:text-amber-200"
                }`}
                onClick={() => setActiveFilter(filter)}
                type="button"
              >
                {filter}
              </button>
            ))}
          </div>
          <div className="grid gap-5 md:grid-cols-2">
            {filteredProjects.map((project) => (
              <article className={`${cardClass} flex flex-col gap-3`} key={project.name}>
                <div className="flex items-start justify-between gap-4">
                  <div>
                    <h3 className="text-lg font-semibold">{project.name}</h3>
                    <p className="text-sm text-slate-400">{project.period}</p>
                  </div>
                  {project.link ? (
                    <a
                      className="text-sm font-semibold text-amber-300"
                      href={project.link}
                    >
                      Visit
                    </a>
                  ) : (
                    <span className="text-sm text-slate-500">Private</span>
                  )}
                </div>
                <p className="text-sm text-slate-300">{project.description}</p>
                <div className="flex flex-wrap gap-2">
                  {project.tags.map((tag) => (
                    <span
                      className="rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs"
                      key={tag}
                    >
                      {tag}
                    </span>
                  ))}
                </div>
                <p className="text-xs text-slate-400">
                  {project.stack.join(" • ")}
                </p>
              </article>
            ))}
          </div>
        </section>

        <section>
          <div className="mb-7">
            <h2 className="text-2xl font-semibold">Skills</h2>
            <p className="mt-2 text-sm text-slate-400">
              Focused on scalable front-to-back delivery.
            </p>
          </div>
          <div className={`${cardClass} flex flex-wrap gap-2`}>
            {skills.map((skill) => (
              <span
                className="rounded-full bg-amber-300/15 px-3 py-1 text-xs text-amber-100"
                key={skill}
              >
                {skill}
              </span>
            ))}
          </div>
        </section>

        <section>
          <div className="mb-7">
            <h2 className="text-2xl font-semibold">Education</h2>
            <p className="mt-2 text-sm text-slate-400">
              Academic path that anchors the engineering craft.
            </p>
          </div>
          <div className="grid gap-5 md:grid-cols-3">
            {education.map((item) => (
              <article className={cardClass} key={item.program}>
                <h3 className="text-lg font-semibold">{item.program}</h3>
                <p className="text-sm text-slate-400">{item.school}</p>
                <p className="text-sm text-slate-400">{item.period}</p>
                {item.detail ? (
                  <p className="mt-2 text-sm font-semibold text-amber-300">
                    {item.detail}
                  </p>
                ) : null}
              </article>
            ))}
          </div>
        </section>

        <section>
          <div className="mb-7">
            <h2 className="text-2xl font-semibold">Lets build something</h2>
            <p className="mt-2 text-sm text-slate-400">
              Reach out for freelance, internships, or collaborations.
            </p>
          </div>
          <div className={`${cardClass} flex flex-wrap items-center justify-between gap-6`}>
            <div>
              <p className="text-xl font-semibold">{profile.name}</p>
              <p className="text-sm text-slate-400">{profile.title}</p>
              <p className="text-sm text-slate-300">{profile.location}</p>
            </div>
            <div className="grid gap-2 text-sm text-slate-300">
              <a href={`mailto:${profile.email}`}>{profile.email}</a>
              <a href={`tel:${profile.phone}`}>{profile.phone}</a>
              <a href={`https://${profile.linkedin}`}>{profile.linkedin}</a>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}
