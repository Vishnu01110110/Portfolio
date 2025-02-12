import React from 'react';
import {
  FileText,
  Building2,
  Monitor,
  CircuitBoard,
  Star,
  History,
  Box,
  Library,
  Warehouse,
  Factory,
  ChevronRight,
  GraduationCap,
  Book
} from 'lucide-react';

const Card = ({ children, className = "" }) => (
  <div className={`bg-white rounded-xl shadow-md overflow-hidden hover:shadow-lg transition-all duration-300 ${className}`}>
    {children}
  </div>
);

const ResumePage = () => {
  const latestEducation = [
    {
      type: "education",
      company: "Carnegie Mellon University",
      role: "Master of Science in Engineering-Research",
      duration: "May 2025",
      location: "Pittsburgh, PA",
      gpa: "4.0/4.0",
      icon: <GraduationCap className="w-6 h-6 sm:w-8 sm:h-8 text-red-500" />,
      image: `${process.env.PUBLIC_URL}/images/cmu.png`,
      highlights: [
        "Teaching Assistant: ML/AI for engineers, CV for Engineers, Manufacturing Futures",
        "Relevant Coursework: Introduction to Deep Learning, Advanced NLP, ML/AI for engineers, Visual learning, Computer Vision"
      ],
      bgColor: "bg-red-50"
    }
  ];

  const latestExperiences = [
    {
      company: "Biorobotics Lab, Carnegie Mellon",
      role: "Graduate Researcher",
      duration: "September 2024 – Present",
      location: "Pittsburgh, PA",
      icon: <Monitor className="w-6 h-6 sm:w-8 sm:h-8 text-blue-500" />,
      image: `${process.env.PUBLIC_URL}/images/cmu-biorobotics.png`,
      highlights: [
        "Building upon a colleague's early insights into MRF inefficiencies, where conveyors operated at fixed speeds despite varying waste flows, I joined the research efforts and led the team of 7 engineers. We researched and developed the initial concept into an adaptive computer vision system that could dynamically adjust conveyor speeds based on real-time waste density. Our self-supervised learning pipeline achieved 0.9 AUC detection accuracy while eliminating 98% of manual monitoring time, demonstrating potential for significant sorting efficiency improvements in MRF operations."
      ],
      bgColor: "bg-blue-50"
    },
    {
      company: "Apple x Biorobotics Lab, Carnegie Mellon",
      role: "Graduate Researcher",
      duration: "August 2023 – September 2024",
      location: "Pittsburgh, PA",
      icon: <CircuitBoard className="w-6 h-6 sm:w-8 sm:h-8 text-gray-600" />,
      image: `${process.env.PUBLIC_URL}/images/cmu-apple.png`,
      highlights: [
        "I contributed to the development of an innovative whip-like robotic system designed to rapidly disassemble batteries from consumer electronics. Working with the team, we developed the AI perception and classification system that enabled the robot to precisely extract batteries from devices like iPhones and iPads within 2 seconds, achieving a 95% success rate. The supervised learning pipeline achieved a 0.92 F1 score in real-time classification, ensuring safe and efficient battery removal for recycling operations."
      ],
      bgColor: "bg-gray-50"
    },
    {
      company: "Warar Energy",
      role: "Founding Engineer",
      duration: "June 2023 – August 2023",
      location: "Pittsburgh, PA",
      icon: <Box className="w-6 h-6 sm:w-8 sm:h-8 text-green-500" />,
      image: `${process.env.PUBLIC_URL}/images/warar.png`,
      highlights: [
        "Contributed to a early stage EV conversion project at a last-mile delivery startup, where I developed machine learning systems to analyze vehicle performance data and optimize power management. Working with the mechanical team, I helped integrate sensor systems that collected real-time data from converted electric vehicles, enabling us to refine battery usage patterns and improve operational efficiency for the retrofitted delivery fleet."
      ],
      bgColor: "bg-green-50"
    }
  ];

  const pastExperiences = [
    {
      company: "Carnegie Mellon University",
      role: "Teaching Assistant",
      duration: "2023 - 2024",
      location: "Pittsburgh, PA",
      icon: <Book className="w-6 h-6 sm:w-8 sm:h-8 text-green-500" />,
      image: `${process.env.PUBLIC_URL}/images/coe.png`,
      highlights: [
        "TA for ML/AI for Engineers",
        "TA for Computer Vision for Engineers",
        "TA for Manufacturing Futures",
        "TA for Introduction to CAD/CAE"
      ],
      bgColor: "bg-green-50"
    },
    {
      company: "Kleiba",
      role: "Creative Analyst",
      duration: "November 2021 - February 2022",
      location: "Vellore, India",
      icon: <Box className="w-6 h-6 sm:w-8 sm:h-8 text-yellow-500" />,
      image: `${process.env.PUBLIC_URL}/images/kleiba.png`,
      highlights: [
        "Led engineering assessments and contributed mechanical designs at a startup developing custom biodegradable educational kits for children. Conducted product feasibility analysis to ensure safety standards and environmental compliance while maintaining engaging design elements."
      ],
      bgColor: "bg-indigo-50"
    },
    {
      company: "Team Eco Titans",
      role: "Head of Department - Design",
      duration: "May 2021 - June 2022",
      location: "Vellore, India",
      icon: <Box className="w-6 h-6 sm:w-8 sm:h-8 text-indigo-500" />,
      image: `${process.env.PUBLIC_URL}/images/ecot.png`,
      highlights: [
        "As Design Head for our university's Shell Eco-Marathon team, I led the development of a rule-compliant space frame chassis. I coordinated the design and fabrication efforts while ensuring our vehicle met all competition safety and technical requirements for the international Shell Eco-Marathon competition."
      ],
      bgColor: "bg-indigo-50"
    },
    {
      company: "Vizag Steel Plant",
      role: "Project Intern",
      duration: "July 2021 - August 2021",
      location: "Vizag, India",
      icon: <Factory className="w-6 h-6 sm:w-8 sm:h-8 text-orange-500" />,
      image: `${process.env.PUBLIC_URL}/images/steel.png`,
      highlights: [
        "Gained my first hands-on experience in a large steel plant, working on machining processes and manufacturing. Managed tool offsets, work offsets for turning, and redressed used rolls on CNC lathes during a 4-week full-time internship"
      ],
      bgColor: "bg-orange-50"
    },
    {
      company: "Vijaynagar Sugar",
      role: "Project Intern",
      duration: "November 2020 - December 2020",
      location: "Karnataka, India",
      icon: <Warehouse className="w-6 h-6 sm:w-8 sm:h-8 text-pink-500" />,
      image: `${process.env.PUBLIC_URL}/images/sugar.png`,
      highlights: [
        "Completed a 1-month full-time internship observing and analyzing sugar mill operations and auxiliary factories. Gained experience in report writing, evaluating current methods, and proposing efficiency improvements"
      ],
      bgColor: "bg-pink-50"
    }
  ];

  const pastEducation = [
    {
      type: "education",
      company: "Vellore Institute of Technology",
      role: "Bachelor's degree, Mechanical Engineering",
      duration: "2019 - 2023",
      location: "Vellore, India",
      icon: <Library className="w-6 h-6 sm:w-8 sm:h-8 text-purple-500" />,
      image: `${process.env.PUBLIC_URL}/images/vit.png`,
      bgColor: "bg-purple-50"
    },
    {
      type: "education",
      company: "Meluha International School",
      role: "MPC (Mathematics, Physics, Chemistry)",
      duration: "2017 - 2019",
      location: "India",
      icon: <GraduationCap className="w-6 h-6 sm:w-8 sm:h-8 text-indigo-500" />,
      image: `${process.env.PUBLIC_URL}/images/meluha.png`,
      bgColor: "bg-indigo-50"
    },
    {
      type: "education",
      company: "Jubilee Hills Public School",
      role: "Secondary Education",
      duration: "2015 - 2017",
      location: "India",
      icon: <GraduationCap className="w-6 h-6 sm:w-8 sm:h-8 text-pink-500" />,
      image: `${process.env.PUBLIC_URL}/images/jhps.png`,
      bgColor: "bg-pink-50"
    }
  ];

  return (
    <div className="max-w-4xl mx-auto p-3 sm:p-6 space-y-8 sm:space-y-12">
      {/* Header with Resume Download */}
      <div className="flex justify-end mb-4 sm:mb-8">
        <a 
          href={`${process.env.PUBLIC_URL}/resume.pdf`}
          download="Vishnu_Resume.pdf"
          className="flex items-center gap-2 bg-blue-600 hover:bg-blue-700 text-white px-3 py-2 sm:px-4 sm:py-2 rounded-lg transition-colors text-sm sm:text-base"
        >
          <FileText className="w-4 h-4 sm:w-5 sm:h-5" />
          <span>Download Resume</span>
        </a>
      </div>

      {/* Sections */}
      {[
        { title: "Latest Education", icon: <Star className="w-5 h-5 sm:w-6 sm:h-6 text-blue-600" />, data: latestEducation },
        { title: "Latest Experience", icon: <Star className="w-5 h-5 sm:w-6 sm:h-6 text-blue-600" />, data: latestExperiences },
        { title: "Past Experience", icon: <History className="w-5 h-5 sm:w-6 sm:h-6 text-blue-600" />, data: pastExperiences },
        { title: "Past Education", icon: <History className="w-5 h-5 sm:w-6 sm:h-6 text-blue-600" />, data: pastEducation }
      ].map((section, sectionIndex) => (
        <section key={sectionIndex}>
          <div className="flex items-center gap-2 mb-4 sm:mb-6">
            {section.icon}
            <h2 className="text-xl sm:text-2xl font-bold">{section.title}</h2>
          </div>
          <div className="space-y-4">
            {section.data.map((item, index) => (
              <Card key={index} className={`transform hover:scale-[1.02] transition-transform ${item.bgColor}`}>
                <div className="p-4 sm:p-6">
                  <div className="flex flex-col sm:flex-row sm:items-start gap-4">
                    <div className="flex items-center sm:block">
                      <div className="relative">
                        <img
                          src={item.image}
                          alt={`${item.company} logo`}
                          className="w-16 h-16 rounded-lg object-cover"
                        />
                        <div className="absolute -bottom-2 -right-2 p-1 rounded-lg bg-white shadow-sm">
                          {item.icon}
                        </div>
                      </div>
                      <div className="flex-1 ml-4 sm:hidden">
                        <h3 className="text-lg sm:text-xl font-bold text-gray-900">{item.role}</h3>
                        <div className="text-blue-600 font-medium">{item.company}</div>
                      </div>
                    </div>
                    <div className="flex-1">
                      <div className="hidden sm:block">
                        <h3 className="text-lg sm:text-xl font-bold text-gray-900">{item.role}</h3>
                        <div className="text-blue-600 font-medium">{item.company}</div>
                      </div>
                      <div className="text-gray-500 flex flex-wrap items-center gap-x-2 gap-y-1 mt-1 text-sm sm:text-base">
                        <Building2 className="w-4 h-4" />
                        <span>{item.location}</span>
                        <span className="hidden sm:inline">•</span>
                        <span>{item.duration}</span>
                        {item.gpa && (
                          <>
                            <span className="hidden sm:inline">•</span>
                            <span>GPA: {item.gpa}</span>
                          </>
                        )}
                      </div>
                      {item.highlights && (
                        <ul className="mt-3 sm:mt-4 space-y-2 text-sm sm:text-base">
                          {item.highlights.map((highlight, i) => (
                            <li key={i} className="flex items-start gap-2">
                              <ChevronRight className="w-4 h-4 sm:w-5 sm:h-5 text-blue-500 mt-1 flex-shrink-0" />
                              <span className="text-gray-600 text-justify">{highlight}</span>
                            </li>
                          ))}
                        </ul>
                      )}
                    </div>
                  </div>
                </div>
              </Card>
            ))}
          </div>
        </section>
      ))}
    </div>
  );
};

export default ResumePage;