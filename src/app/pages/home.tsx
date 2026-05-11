import imgHero from "figma:asset/102812cfff2fc29772c4b71e30cad084a6c423d0.png";
import imgMaterials from "figma:asset/d0255efd42fae000d1ef251c266c38f8c41655f9.png";
import { motion } from "motion/react";
import {
  Calendar,
  MapPin,
  ArrowRight,
  FileText,
  Download,
  HardDrive,
  Upload,
  ExternalLink,
  Presentation,
  Coffee,
  Trophy,
  Users,
} from "lucide-react";
import { Button } from "../components/ui/button";
import { Badge } from "../components/ui/badge";
import { ImageWithFallback } from "../components/figma/ImageWithFallback";

// Image constants using imported assets
const HERO_IMAGE = imgHero;
const MATERIALS_IMAGE = imgMaterials;

const SCHEDULE_ITEMS = [
  {
    time: "9:00 - 9:30",
    event: "Arrival & Registration",
    icon: MapPin,
    color: "primary",
  },
  {
    time: "9:30 - 9:40",
    event: "Opening Remarks & MindHive Team Intro",
    icon: Users,
    color: "secondary",
    details:
      "Meet the organizers and learn about program for the day.",
  },
  {
    time: "9:40 - 10:00",
    event: "Student Panel",
    icon: Presentation,
    color: "primary",
    details: "",
  },
  {
    time: "10:00 - 10:35",
    event: "Poster Session A",
    icon: Presentation,
    color: "primary",
  },
  {
    time: "10:35 - 11:10",
    event: "Poster Session B",
    icon: Presentation,
    color: "primary",
  },
  {
    time: "11:10 - 11:45",
    event: "Poster Session C",
    icon: Presentation,
    color: "primary",
    details: "",
  },
  // {
  //   time: "11:45 - 12:00",
  //   event: "Break",
  //   icon: Coffee,
  //   color: "accent",
  // },
  {
    time: "11:45 - 12:00",
    event: "Closing Remarks",
    icon: Trophy,
    color: "secondary",
    details: "Closing Remarks & Group Picture!",
  },
];

const MATERIALS = [
  // {
  //   title: "Fair Program",
  //   description:
  //     "Complete guide to sessions, speakers, and abstracts.",
  //   type: "PDF",
  //   // size: "2.4 MB",
  //   link: "https://docs.google.com/document/d/13Mtm7R-RLAcA2vYZdOfQqDwZSWL6FT7xDPEZM2V8DZo/edit?usp=sharing",
  // },
  {
    title: "Poster Template",
    description: "MindHive Poster Template.",
    type: "PPTX",
    size: "48x36 in",
    link: "https://docs.google.com/presentation/d/1GncWkhprRe65qudLwNVXFuUjNWTUeidf/edit?usp=sharing&ouid=111548153225746064432&rtpof=true&sd=true",
  },
  {
    title: "Flyer",
    description: "",
    type: "PDF",
    // size: "850 KB",
    link: "https://drive.google.com/file/d/1oMmhDKVuCrJK5cGnPeyhbwOjFPrfvKir/view?usp=sharing",
  },
];

const SPEAKERS = [
  {
    name: "MindHive Team",
    role: "Project Organizers",
    bio: "The dedicated team behind the MindHive platform, working to bridge the gap between classroom learning and scientific research.",
    image: "",
  },
  {
    name: "Associate Scientist",
    role: "Judge",
    bio: "Associate scientists and MindHive collaboartors here to provide expert review and scientific advices to student-led research initiatives.",
    image: "",
  },
  // {
  //   name: "Patrick Bloniaz",
  //   role: "Research Mentor",
  //   bio: "Patrick work aims to improve our understanding of the brain and help make medical procedures safer and more effective.",
  //   image:
  //     "https://images.unsplash.com/photo-1758685848602-09e52ef9c7d3?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtYWxlJTIwc2NpZW50aXN0JTIwcHJvZmVzc2lvbmFsJTIwbGFib3JhdG9yeSUyMHBvcnRyYWl0fGVufDF8fHx8MTc3MjczODE2NXww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
  // },
  {
    name: "Students",
    role: "Presenters",
    bio: "A presentation from students who have utilized the MindHive platform to design, execute, and present original scientific research projects.",
    image: "",
  },
];

export function HomePage() {
  return (
    <div className="flex flex-col w-full overflow-hidden">
      {/* Hero Section */}
      <section className="relative min-h-[90vh] flex items-center pt-24 overflow-hidden bg-white">
        {/* Background Patterns (inspired by the flyer) */}
        <div className="absolute top-0 right-0 w-1/2 h-full opacity-10 pointer-events-none">
          <svg
            viewBox="0 0 400 400"
            className="w-full h-full text-primary fill-current translate-x-1/4 -translate-y-1/4"
          >
            <path d="M0,400 C150,300 150,100 300,0 L400,0 L400,400 Z" />
          </svg>
        </div>
        <div className="absolute bottom-0 left-0 w-1/3 h-1/2 opacity-5 pointer-events-none">
          <svg
            viewBox="0 0 200 200"
            className="w-full h-full text-primary-dark fill-current -translate-x-1/4 translate-y-1/4 scale-150"
          >
            <circle cx="100" cy="100" r="100" />
          </svg>
        </div>

        {/* Wavy lines decorative */}
        <div className="absolute inset-0 opacity-10 pointer-events-none overflow-hidden">
          {Array.from({ length: 5 }).map((_, i) => (
            <motion.svg
              key={`wavy-line-${i}`}
              viewBox="0 0 1000 100"
              className="absolute w-[200%] text-primary"
              style={{ top: `${20 + i * 15}%`, left: "-50%" }}
              animate={{ x: [0, 50, 0] }}
              transition={{
                duration: 20 + i * 5,
                repeat: Infinity,
                ease: "easeInOut",
              }}
            >
              <path
                d="M0,50 Q250,0 500,50 T1000,50"
                fill="none"
                stroke="currentColor"
                strokeWidth="1"
              />
            </motion.svg>
          ))}
        </div>

        <div className="container mx-auto px-4 md:px-6 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mx-8">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              className="space-y-8"
            >
              <div className="space-y-4">
                {/* <Badge
                  variant="outline"
                  className="px-4 py-1.5 border-primary-medium text-primary-dark bg-primary-light/50 rounded-full font-bold uppercase tracking-wider text-xs"
                >
                  Event Registration Open
                </Badge> */}
                <h1 className="text-5xl md:text-7xl font-extrabold tracking-tight text-slate-900 leading-[1.1]">
                  MindHive <br />
                  <span
                    className="text-primary"
                    style={{ fontFamily: "Knewave, cursive" }}
                  >
                    Fair
                  </span>
                </h1>
                <p className="text-xl md:text-2xl text-slate-600 max-w-xl leading-relaxed font-medium">
                  A gathering for students, teachers, and
                  scientists to exchange ideas, share research,
                  and celebrate the process of discovery.
                </p>
              </div>

              <div className="flex flex-col sm:flex-row gap-4">
                {/*
                <Button
                  size="lg"
                  className="bg-primary hover:bg-primary-dark text-white font-bold py-7 px-8 rounded-2xl text-lg shadow-xl shadow-primary-light group border-none"
                  asChild
                >
                  <a href="#schedule">
                    View Schedule
                    <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
                  </a>
                </Button>*/}
                <Button
                  size="lg"
                  variant="outline"
                  className="border-2 border-slate-200 hover:bg-slate-50 font-bold py-7 px-8 rounded-2xl text-lg"
                  asChild
                >
                  <a href="#materials">Event Materials</a>
                </Button>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 pt-4 border-t border-slate-100">
                <a
                  href="https://calendar.google.com/calendar/event?action=TEMPLATE&tmeid=MWU5ZzI0YnRtbzk1dnQxNjE2ampzNHJjbWcgbnl1LmVkdV9zZTc4OXQ0MnFlbzU3Nmpocjc3MXZhampmNEBn&tmsrc=nyu.edu_se789t42qeo576jhr771vajjf4%40group.calendar.google.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-3 hover:opacity-80 transition-opacity group/link"
                >
                  <div className="p-2.5 bg-primary-light text-primary-dark rounded-xl shadow-sm group-hover/link:bg-tertiary group-hover/link:text-white transition-colors">
                    <Calendar className="w-6 h-6" />
                  </div>
                  <div>
                    <p className="text-xs font-bold text-slate-400 uppercase tracking-widest">
                      Date
                    </p>
                    <p className="font-bold text-slate-800">
                      May 26th, 2026
                    </p>
                  </div>
                </a>
                <a
                  href="https://maps.app.goo.gl/7M8VfuhPv6QvoAuL7"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-3 hover:opacity-80 transition-opacity group/link"
                >
                  <div className="p-2.5 bg-secondary-light text-secondary rounded-xl shadow-sm group-hover/link:bg-secondary group-hover/link:text-white transition-colors">
                    <MapPin className="w-6 h-6" />
                  </div>
                  <div>
                    <p className="text-xs font-bold text-slate-400 uppercase tracking-widest">
                      Location
                    </p>
                    <p className="font-bold text-slate-800">
                      Rosenthal Pavilion
                    </p>
                    <p className="font-bold text-slate-800">
                      60 Washington Square S
                    </p>
                  </div>
                </a>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="relative"
            >
              <div className="relative aspect-[4/5] md:aspect-[5/4] rounded-[2rem] overflow-hidden shadow-2xl z-20">
                <ImageWithFallback
                  src={HERO_IMAGE}
                  alt="Students presenting research"
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-tertiary-dark/40 to-transparent" />
                {/* <div className="absolute bottom-8 left-8 right-8">
                  <div className="bg-white/95 backdrop-blur-sm p-6 rounded-2xl shadow-lg border border-white/20">
                    <div className="flex items-center gap-4">
                      <div>
                        <p className="text-sm font-bold text-slate-900 leading-tight">
                          60+ Participants
                        </p>
                        <p className="text-xs font-semibold text-primary">
                          Teachers, Students & Scientists
                        </p>
                      </div>
                    </div>
                  </div>
                </div> */}
              </div>

              {/* Circular frame background - similar to flyer */}
              <div className="absolute -bottom-10 -left-10 w-64 h-64 border-8 border-accent-light/50 rounded-full pointer-events-none" />
              <div className="absolute -top-10 -right-10 w-48 h-48 border-4 border-primary-light rounded-full pointer-events-none" />
            </motion.div>
          </div>
        </div>
      </section>

      {/* Schedule Section */}
      <section id="schedule" className="py-12 bg-slate-50">
        <div className="container mx-auto px-4 md:px-6">
          <div className="text-center space-y-4 mb-20 max-w-2xl mx-auto">
            {/* <Badge
              variant="outline"
              className="px-4 py-1 border-primary-medium text-primary-dark bg-white font-bold rounded-full uppercase tracking-widest text-xs"
            >
              Event Timeline
            </Badge> */}
            <h2 className="text-4xl md:text-5xl font-extrabold tracking-tight text-slate-900">
              <span className="font-black">Fair</span>{" "}
              <span
                className="text-primary"
                style={{ fontFamily: "Knewave, cursive" }}
              >
                Schedule
              </span>
            </h2>
            {/* <p className="text-lg text-slate-600 font-medium">
              Join us for a day of discovery and collaboration.
              Our format focuses on concise presentations and
              interactive Q&A sessions.
            </p> */}
            <div className="flex flex-wrap items-center justify-center gap-2">
              <p className="text-2xl text-slate-600 font-medium">
                The event will take place between
              </p>
              <p
                className="text-3xl text-slate-600 font-large"
                style={{ fontFamily: "Knewave, cursive" }}
              >
                9:30 - 1 PM
              </p>
              <p className="text-2xl text-slate-600 font-medium">
                details TBD!
              </p>
            </div>
          </div>

          {/* <div className="max-w-3xl mx-auto">
            <div className="relative space-y-3">
              <div className="absolute left-[96px] top-0 bottom-0 w-0.5 bg-slate-200 pointer-events-none hidden sm:block" />

              {SCHEDULE_ITEMS.map((item, index) => (
                <div
                  key={`schedule-item-${index}-${item.time}`}
                  className="relative flex flex-row items-center gap-4 group"
                >
                  <div className="w-14 shrink-0 flex justify-end">
                    {null}
                  </div>

                  <div
                    className={`relative z-10 flex items-center justify-center w-12 h-12 rounded-2xl shadow-sm border-2 border-white shrink-0 transition-transform group-hover:scale-110 ${
                      item.color === "accent"
                        ? "bg-accent-light text-accent-dark"
                        : item.color === "secondary"
                          ? "bg-secondary-light text-secondary-dark"
                          : item.color === "tertiary"
                            ? "bg-tertiary text-white"
                            : item.color === "muted"
                              ? "bg-muted text-muted-foreground"
                              : "bg-primary-light text-primary-dark"
                    }`}
                  >
                    <item.icon className="w-5 h-5" />
                  </div>

                  <div className="flex-grow bg-white p-4 sm:py-3 sm:px-6 rounded-2xl border border-slate-100 shadow-sm hover:shadow-md transition-all flex flex-col sm:flex-row sm:items-center justify-between gap-2 sm:gap-6">
                    <div className="flex items-center min-w-[140px]">
                      <time className="font-black text-primary font-mono tracking-tight text-lg">
                        {item.time}
                      </time>
                    </div>

                    <div className="flex-grow">
                      <div className="text-slate-900 font-extrabold text-base leading-tight">
                        {item.event}
                      </div>
                      {item.details && (
                        <div className="text-slate-500 text-xs font-medium mt-0.5 line-clamp-1">
                          {item.details}
                        </div>
                      )}
                    </div>

                    <div className="hidden md:block opacity-0 group-hover:opacity-100 transition-opacity">
                      <div
                        className={`w-2 h-2 rounded-full ${
                          item.color === "accent"
                            ? "bg-accent"
                            : item.color === "secondary"
                              ? "bg-secondary"
                              : "bg-primary"
                        }`}
                      />
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div> */}
        </div>
      </section>

      {/* Materials Section */}
      <section
        id="materials"
        className="py-20 bg-white relative overflow-hidden"
      >
        <div className="container mx-auto px-4 md:px-6 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-center">
            <div className="lg:col-span-5 space-y-8">
              <div className="space-y-4">
                {/* <Badge
                  variant="outline"
                  className="px-4 py-1 border-primary-medium text-primary-dark bg-primary-light/30 font-bold rounded-full uppercase tracking-widest text-xs"
                >
                  Resources
                </Badge> */}
                <h2 className="text-4xl md:text-5xl font-extrabold tracking-tight text-slate-900">
                  Event{" "}
                  <span
                    className="text-primary"
                    style={{ fontFamily: "Knewave, cursive" }}
                  >
                    Materials
                  </span>
                </h2>
                <p
                  className="text-lg text-slate-600 font-large"
                  style={{ fontFamily: "Knewave, cursive" }}
                >
                  {/* RELEASING MATERIAL SOON ;) */}
                </p>
                <p className="text-lg text-slate-600 font-medium leading-relaxed">
                  Access everything you need for the fair below.
                </p>
              </div>

              <div className="space-y-4">
                {MATERIALS.map((material, index) => (
                  <motion.a
                    key={`material-${material.title}-${index}`}
                    href={material.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    whileHover={{ x: 10 }}
                    className="flex items-center p-4 rounded-2xl bg-slate-50 border border-slate-100 group cursor-pointer hover:bg-white hover:shadow-lg hover:shadow-slate-100 transition-all no-underline"
                  >
                    <div className="w-12 h-12 rounded-xl bg-white flex items-center justify-center text-primary shadow-sm mr-4 group-hover:bg-primary group-hover:text-white transition-colors">
                      {material.type === "URL" ? (
                        <ExternalLink className="w-5 h-5" />
                      ) : (
                        <FileText className="w-6 h-6" />
                      )}
                    </div>
                    <div className="flex-grow">
                      <h4 className="font-extrabold text-slate-900 leading-none mb-1">
                        {material.title}
                      </h4>
                    </div>
                    <div className="text-right">
                      <Badge
                        variant="secondary"
                        className="bg-slate-200/50 text-slate-600 font-bold text-[10px] uppercase tracking-wider mb-1"
                      >
                        {material.type}
                      </Badge>
                      <p className="text-[10px] font-bold text-slate-400 uppercase">
                        {material.size}
                      </p>
                    </div>
                  </motion.a>
                ))}
              </div>
              {/* <div className="flex flex-col sm:flex-row gap-4">
                <Button
                  asChild
                  size="lg"
                  className="w-full sm:w-auto bg-slate-900 hover:bg-slate-800 text-white font-bold py-7 px-10 rounded-2xl text-lg shadow-xl shadow-slate-200 group"
                >
                  <a
                    href="https://drive.google.com/drive/folders/1hacmFN49tGGFh0z3_1alXA1GeQNGSnoN?usp=drive_link"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Add the folder to your drive
                    <HardDrive className="ml-2 w-5 h-5 group-hover:translate-y-1 transition-transform" />
                  </a>
                </Button>
              </div>
              <div className="flex flex-col sm:flex-row gap-4">
                <Button
                  asChild
                  size="lg"
                  className="w-full sm:w-auto bg-secondary hover:bg-blue-500 text-white font-bold py-7 px-10 rounded-2xl text-lg shadow-xl shadow-blue-200 group"
                >
                  <a
                    href="https://drive.google.com/drive/folders/1Fx8u0m5X4cRn4qwiA2SQyv8DV5ZqxYER?usp=sharing"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Submit your slides!
                    <Upload className="ml-2 w-5 h-5 group-hover:translate-y-1 transition-transform" />
                  </a>
                </Button>
              </div> */}
            </div>

            <div className="lg:col-span-7 relative">
              <div className="relative aspect-[4/5] md:aspect-[5/4] rounded-[2.5rem] overflow-hidden shadow-2xl">
                <ImageWithFallback
                  src={MATERIALS_IMAGE}
                  alt="MindHive fair room"
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-tertiary-dark/10" />
              </div>

              {/* Stats Overlay */}
              {/* <div className="absolute -bottom-10 -right-6 md:right-10 bg-primary p-8 rounded-[2rem] shadow-2xl text-white max-w-xs border-4 border-white">
                <p className="text-xs font-bold uppercase tracking-[0.2em] mb-4 opacity-80">
                  Research Stats
                </p>
                <div className="grid grid-cols-2 gap-6">
                  <div>
                    <p className="text-3xl font-black mb-0">
                      30
                    </p>
                    <p className="text-xs font-bold opacity-70">
                      Projects
                    </p>
                  </div>
                  <div>
                    <p className="text-3xl font-black mb-0">
                      3
                    </p>
                    <p className="text-xs font-bold opacity-70">
                      Classrooms
                    </p>
                  </div>
                </div>
              </div> */}
            </div>
          </div>
        </div>
      </section>

      <section id="schedule" className="py-24 bg-slate-50">
        <div className="container mx-auto px-4 md:px-6">
          <div className="text-center space-y-4 mb-20 max-w-2xl mx-auto">
            <h2 className="text-1xl md:text-3xl font-bold tracking-tight text-slate-900">
              About{" "}
              <span
                className="text-primary font-black"
                style={{ fontFamily: "Knewave, cursive" }}
              >
                MindHive
              </span>
            </h2>
            <p className="text-lg text-slate-500 font-small">
              MindHive is supported by a Science Education
              Partnership Award (SEPA) from the National
              Institute of Mental Health, an Innovative
              Technology Experiences for Students and Teachers
              (ITEST) award from the National Science
              Foundation, and a Tools Competition award from
              Renaissance Philanthropy
            </p>
          </div>
        </div>
      </section>
      {/* Speakers Section */}
      {/* <section
        id="speakers"
        className="py-24 bg-white border-y border-slate-100"
      >
        <div className="container mx-auto px-4 md:px-6">
          <div className="flex flex-col md:flex-row items-end justify-between gap-6 mb-16">
            <div className="max-w-xl space-y-4">
              <Badge
                variant="outline"
                className="px-4 py-1 border-primary-medium text-primary-dark bg-white font-bold rounded-full uppercase tracking-widest text-xs"
              >
                Presenters
              </Badge>
              <h2 className="text-4xl md:text-5xl font-extrabold tracking-tight text-slate-900 leading-tight">
                Meet our{" "}
                <span className="text-primary">
                  Keynote Speakers
                </span>
              </h2>
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {SPEAKERS.map((speaker, index) => (
              <motion.div
                key={`speaker-${speaker.name}-${index}`}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{
                  duration: 0.5,
                  delay: index * 0.1,
                }}
                className="group flex flex-col items-center text-center"
              >
                <div className="relative mb-6 rounded-full overflow-hidden w-40 h-40 shadow-md group-hover:shadow-xl transition-all duration-500 border-4 border-primary-light">
                  <ImageWithFallback
                    src={speaker.image}
                    alt={speaker.name}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-primary/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                </div>
                <div className="space-y-2">
                  <h3 className="text-xl font-black text-slate-900 leading-tight">
                    {speaker.name}
                  </h3>
                  <Badge
                    variant="secondary"
                    className="bg-primary-light text-primary-dark border-primary-medium font-bold text-[10px] uppercase"
                  >
                    {speaker.role}
                  </Badge>
                  <p className="text-slate-500 text-sm font-medium leading-relaxed line-clamp-3 px-4">
                    {speaker.bio}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section> */}
    </div>
  );
}