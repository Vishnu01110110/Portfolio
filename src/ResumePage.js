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
        icon: <GraduationCap className="w-8 h-8 text-red-500" />,
        highlights: ["Teaching Assistant: ML/AI for engineers, CV for Engineers, Manufacturing Futures" ,"Relevant Coursework: Introduction to Deep Learning, Advanced NLP, ML/AI for engineers, Visual learning, Computer Vision"],
        bgColor: "bg-red-50"
      }
    ];

    const latestExperiences = [
      {
        company: "Biorobotics Lab, Carnegie Mellon",
        role: "Graduate Researcher",
        duration: "September 2024 – Present",
        location: "Pittsburgh, PA",
        icon: <Monitor className="w-8 h-8 text-blue-500" />,
        highlights: [
          "Building upon a colleague's early insights into MRF inefficiencies, where conveyors operated at fixed speeds despite varying waste flows, I joined the research efforts and led the team of 7 engineers. We researched and developed the initial concept into an adaptive computer vision system that could dynamically adjust conveyor speeds based on real-time waste density. Our self-supervised learning pipeline achieved 0.9 AUC detection accuracy while eliminating 98% of manual monitoring time, demonstrating potential for significant sorting efficiency improvements in MRF operations."      ],
        bgColor: "bg-blue-50"
      },
      {
        company: "Apple x Biorobotics Lab, Carnegie Mellon",
        role: "Graduate Researcher",
        duration: "August 2023 – September 2024",
        location: "Pittsburgh, PA",
        icon: <CircuitBoard className="w-8 h-8 text-gray-600" />,
        highlights: [
          "I contributed to the development of an innovative whip-like robotic system designed to rapidly disassemble batteries from consumer electronics. Working with the team, we developed the AI perception and classification system that enabled the robot to precisely extract batteries from devices like iPhones and iPads within 2 seconds, achieving a 95% success rate. The supervised learning pipeline achieved a 0.92 F1 score in real-time classification, ensuring safe and efficient battery removal for recycling operations."
        ],
        bgColor: "bg-gray-50"
      },
      {
        company: "Warar Energy",
        role: "Graduate Researcher",
        duration: "June 2023 – August 2023",
        location: "Pittsburgh, PA",
        icon: <Box className="w-8 h-8 text-green-500" />,
        highlights: [
          "Contributed to  a early stage EV conversion project at a last-mile delivery startup, where I developed machine learning systems to analyze vehicle performance data and optimize power management. Working with the mechanical team, I helped integrate sensor systems that collected real-time data from converted electric vehicles, enabling us to refine battery usage patterns and improve operational efficiency for the retrofitted delivery fleet."
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
        icon: <Book className="w-8 h-8 text-green-500" />,
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
        icon: <Box className="w-8 h-8 text-yellow-500" />,
        highlights: [
          "Led engineering assessments and contributed mechanical designs at a startup developing custom biodegradable educational kits for children. Conducted product feasibility analysis to ensure safety standards and environmental compliance while maintaining engaging design elements."
        ],
        bgColor: "bg-yellow-50"
      },
      {
        company: "Team Eco Titans",
        role: "Head of Department - Design",
        duration: "May 2021 - June 2022",
        location: "Vellore, India",
        icon: <Box className="w-8 h-8 text-indigo-500" />,
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
        icon: <Factory className="w-8 h-8 text-orange-500" />,
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
        icon: <Warehouse className="w-8 h-8 text-pink-500" />,
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
        icon: <Library className="w-8 h-8 text-purple-500" />,
        bgColor: "bg-purple-50"
      },
      {
        type: "education",
        company: "Meluha International School",
        role: "MPC (Mathematics, Physics, Chemistry)",
        duration: "2017 - 2019",
        location: "India",
        icon: <GraduationCap className="w-8 h-8 text-indigo-500" />,
        bgColor: "bg-indigo-50"
      },
      {
        type: "education",
        company: "Jubilee Hills Public School",
        role: "Secondary Education",
        duration: "2015 - 2017",
        location: "India",
        icon: <GraduationCap className="w-8 h-8 text-pink-500" />,
        bgColor: "bg-pink-50"
      }
    ];

    return (
      <div className="max-w-4xl mx-auto p-6 space-y-12">
        {/* Header with Resume Download */}
        <div className="flex justify-end mb-8">
          <a 
            href="/resume.pdf"
            download="Vishnu_Vardhan_Badam_Resume.pdf"
            className="flex items-center gap-2 bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-lg transition-colors"
            onClick={(e) => {
              e.preventDefault();
              fetch('/resume.pdf')
                .then(response => {
                  if (response.ok) {
                    window.location.href = '/resume.pdf';
                  } else {
                    alert('Resume PDF is not available yet. Please check back later.');
                  }
                })
                .catch(error => {
                  console.error('Download error:', error);
                  alert('Unable to download resume. Please try again later.');
                });
            }}
          >
            <FileText className="w-5 h-5" />
            <span>Download Resume</span>
          </a>
        </div>

        {/* Latest Education */}
        <section>
          <div className="flex items-center gap-2 mb-6">
            <Star className="w-6 h-6 text-blue-600" />
            <h2 className="text-2xl font-bold">Latest Education</h2>
          </div>
          <div className="space-y-4">
            {latestEducation.map((edu, index) => (
              <Card key={index} className={`transform hover:scale-[1.02] transition-transform ${edu.bgColor}`}>
                <div className="p-6">
                  <div className="flex items-start gap-4">
                    <div className="p-2 rounded-lg bg-white shadow-sm">
                      {edu.icon}
                    </div>
                    <div className="flex-1">
                      <h3 className="text-xl font-bold text-gray-900">{edu.role}</h3>
                      <div className="text-blue-600 font-medium">{edu.company}</div>
                      <div className="text-gray-500 flex items-center gap-2 mt-1">
                        <Building2 className="w-4 h-4" />
                        <span>{edu.location}</span>
                        <span>•</span>
                        <span>{edu.duration}</span>
                        {edu.gpa && (
                          <>
                            <span>•</span>
                            <span>GPA: {edu.gpa}</span>
                          </>
                        )}
                      </div>
                      {edu.highlights && (
                        <ul className="mt-4 space-y-2">
                          {edu.highlights.map((highlight, i) => (
                            <li key={i} className="flex items-start gap-2">
                              <ChevronRight className="w-5 h-5 text-blue-500 mt-1 flex-shrink-0" />
                              <span className="text-gray-600">{highlight}</span>
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

        {/* Latest Experience */}
        <section>
          <div className="flex items-center gap-2 mb-6">
            <Star className="w-6 h-6 text-blue-600" />
            <h2 className="text-2xl font-bold">Latest Experience</h2>
          </div>
          <div className="space-y-4">
            {latestExperiences.map((exp, index) => (
              <Card key={index} className={`transform hover:scale-[1.02] transition-transform ${exp.bgColor}`}>
                <div className="p-6">
                  <div className="flex items-start gap-4">
                    <div className="p-2 rounded-lg bg-white shadow-sm">
                      {exp.icon}
                    </div>
                    <div className="flex-1">
                      <h3 className="text-xl font-bold text-gray-900">{exp.role}</h3>
                      <div className="text-blue-600 font-medium">{exp.company}</div>
                      <div className="text-gray-500 flex items-center gap-2 mt-1">
                        <Building2 className="w-4 h-4" />
                        <span>{exp.location}</span>
                        <span>•</span>
                        <span>{exp.duration}</span>
                      </div>
                      {exp.highlights && (
                        <ul className="mt-4 space-y-2">
                          {exp.highlights.map((highlight, i) => (
                            <li key={i} className="flex items-start gap-2">
                              <ChevronRight className="w-5 h-5 text-blue-500 mt-1 flex-shrink-0" />
                              <span className="text-gray-600">{highlight}</span>
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

        {/* Past Experience */}
        <section>
          <div className="flex items-center gap-2 mb-6">
            <History className="w-6 h-6 text-blue-600" />
            <h2 className="text-2xl font-bold">Past Experience</h2>
          </div>
          <div className="space-y-4">
            {pastExperiences.map((exp, index) => (
              <Card key={index} className={`transform hover:scale-[1.02] transition-transform ${exp.bgColor}`}>
                <div className="p-6">
                  <div className="flex items-start gap-4">
                    <div className="p-2 rounded-lg bg-white shadow-sm">
                      {exp.icon}
                    </div>
                    <div className="flex-1">
                      <h3 className="text-xl font-bold text-gray-900">{exp.role}</h3>
                      <div className="text-blue-600 font-medium">{exp.company}</div>
                      <div className="text-gray-500 flex items-center gap-2 mt-1">
                        <Building2 className="w-4 h-4" />
                        <span>{exp.location}</span>
                        <span>•</span>
                        <span>{exp.duration}</span>
                      </div>
                      {exp.highlights && (
                        <ul className="mt-4 space-y-2">
                          {exp.highlights.map((highlight, i) => (
                            <li key={i} className="flex items-start gap-2">
                              <ChevronRight className="w-5 h-5 text-blue-500 mt-1 flex-shrink-0" />
                              <span className="text-gray-600">{highlight}</span>
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

        {/* Past Education */}
        <section>
          <div className="flex items-center gap-2 mb-6">
            <History className="w-6 h-6 text-blue-600" />
            <h2 className="text-2xl font-bold">Past Education</h2>
          </div>
          <div className="space-y-4">
            {pastEducation.map((edu, index) => (
              <Card key={index} className={`transform hover:scale-[1.02] transition-transform ${edu.bgColor}`}>
                <div className="p-6">
                  <div className="flex items-start gap-4">
                    <div className="p-2 rounded-lg bg-white shadow-sm">
                      {edu.icon}
                    </div>
                    <div className="flex-1">
                      <h3 className="text-xl font-bold text-gray-900">{edu.role}</h3>
                      <div className="text-blue-600 font-medium">{edu.company}</div>
                      <div className="text-gray-500 flex items-center gap-2 mt-1">
                        <Building2 className="w-4 h-4" />
                        <span>{edu.location}</span>
                        <span>•</span>
                        <span>{edu.duration}</span>
                      </div>
                    </div>
                  </div>
                </div>
              </Card>
            ))}
          </div>
        </section>
      </div>
    );
  };

  export default ResumePage;