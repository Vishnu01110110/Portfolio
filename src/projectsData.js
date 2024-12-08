export const projects = {
    hardware: [
      {
        id: 'robot-whip-mechanism',
        title: 'Novel Whip-like Linkage Mechanism (Do not review this project for 24696 )',
        description: 'Automated battery removal system for Apple Daisy',
        image: 'https://placehold.co/600x400/2563eb/ffffff?text=Robot+Mechanism',
        caption: 'Automated battery removal system for Apple Daisy',
        technologies: ['ROS', 'UR5', 'CAD', 'Motion Planning'],
        overview: 'Project details coming up',
        features: [
          'Custom linkage mechanism design',
          'Integrated robot control',
          'Computer vision integration',
          'Automated system'
        ]
      },
      {
        id: 'digital-twin-vehicle',
        title: 'Mitigating Risks in Vehicles - A Digital Twin Framework Study',
        description: 'IoT-based vehicle safety system using multi-layered communication approach',
        image: `${process.env.PUBLIC_URL}/images/digital-twin.jpg`,
        technologies: ['IoT', 'Arduino', 'Li-Fi', 'C++'],
        objective: 'Traditional vehicle safety systems face unique challenges in countries like India, where road rules are often loosely interpreted and excessive honking is deeply ingrained in driving culture. The cacophony of constant honking creates noise pollution and reduces the effectiveness of audio-based warning systems. While similar projects have attempted to tackle road safety through conventional means, our approach develops an alternative communication framework that reduces reliance on audio signals, making it particularly suitable for high-noise traffic environments.',
        methodology: {
          intro: 'The research implemented a three-layered approach:',
          accidentAlert: {
            title: '1. Accident Alert Module',
            details: [
              'Deployed IoT-based accident detection using ESP8266 NodeMCU and vibration sensors',
              'Integrated with ThingSpeak cloud platform for real-time notifications',
              'Calibrated for diverse road conditions and typical accident scenarios'
            ]
          },
          v2vLiFi: {
            title: '2. V2V Communication using Li-Fi',
            details: [
              'Developed LED-based data transmission system',
              'Implemented secure high-speed communication protocols',
              'Utilized Arduino Nano controllers and custom circuit designs'
            ]
          },
          gpsSystem: {
            title: '3. GPS-based V2V Communication',
            details: [
              'Created location-aware vehicle communication system',
              'Integrated GPS modules with communication framework',
              'Implemented real-time position tracking and data exchange'
            ]
          }
        },
        results: {
          intro: 'The system demonstrated significant achievements in three key areas:',
          achievements: [
            'The Accident Alert Module achieved 92% accuracy in detecting and reporting incidents',
            'The Li-Fi V2V Communication Module established reliable data transmission up to 20 meters',
            'The GPS-based module successfully tracked and communicated vehicle positions in real-time'
          ]
        },
        discussion: {
          mainPoints: [
            'Providing silent but effective vehicle-to-vehicle communication',
            'Maintaining functionality in noise-polluted environments',
            'Offering a scalable solution for various vehicle types'
          ],
          futureWork: [
            'Integration with Think Speak cloud platform for digital twin framework',
            'Enhanced mechanical integration of all modules',
            'Extended testing in varied environmental conditions'
          ]
        },
        personalContribution: 'As the lead researcher on this project, I was responsible for circuit design and Arduino code implementation across all three modules. I conducted comprehensive efficiency surveys and managed the integration testing phase under various traffic conditions. The project successfully demonstrated the viability of using alternative communication methods for vehicle safety systems while maintaining cost-effectiveness and reliability.',
        features: [
          'Accident Alert Module with 92% detection accuracy',
          'Li-Fi based V2V Communication up to 20 meters',
          'Real-time GPS tracking and data exchange',
          'ThingSpeak cloud platform integration',
          'Silent but effective vehicle-to-vehicle communication',
          'Noise-pollution resistant framework'
        ],
        challenges: 'The main challenge was developing a reliable alternative to traditional audio-based warning systems that could function effectively in noise-polluted environments while maintaining cost-effectiveness. This was addressed through a multi-layered approach combining IoT, Li-Fi, and GPS technologies.'
      }
    ],
    software: [
      {
        id: '3d-vision-assistant',
        title: 'Multi-functional 3D Printing Computer Vision Assistant',
        description: 'End-to-end computer vision system for automated 3D printing preparation',
        image: `${process.env.PUBLIC_URL}/images/3d-vision.jpg`,
        technologies: ['Python', 'OpenCV', 'AI', 'Computer Vision', '2D to 3D image processing'],
        objective: '3D printing technology faces significant challenges in accurately replicating objects from real-world references. Traditional methods often struggle with precise scale detection, feature size identification, and overhang detection. This project develops an end-to-end computer vision assistant that addresses these challenges by creating an integrated framework for automated 3D printing preparation, making the technology more accessible and reliable for users without extensive technical expertise.',
        methodology: {
          intro: 'The research implemented a three-level approach:',
          scaleDetection: {
            title: '1. Scale and Feature Size Detection (Level 01)',
            details: [
              'Developed reference object-based scale detection system',
              'Implemented skeletonization for feature size analysis',
              'Created background removal and image preprocessing pipeline'
            ],
            outputNote: {
              text: 'Detects the size of an object based on a reference object',
              style: 'centered-large-note'
            }
          },
          overhangDetection: {
            title: '2. Overhang Identification (Level 02)',
            details: [
              'Designed an automated overhang detection system',
              'Implemented support structure generation',
              'Created image processing pipeline for edge detection'
            ],
            outputNote: {
              text: 'Detects overhangs and generates sample supports to enhance user understanding',
              style: 'centered-large-note'
            }
          },
          stlConversion: {
            title: '3. STL Conversion (Level 03)',
            details: [
              'Developed AI-based preprocessing using OpenAI\'s PointE',
              'Implemented point cloud generation from 2D images',
              'Created mesh generation through triangulation'
            ],
            outputNote: {
              text: 'Sample STL file generation',
              style: 'centered-large-note'
            }
          }
        },
        results: {
          intro: 'The system demonstrated significant achievements across all three levels:',
          achievements: [
            'Scale Detection achieved accurate dimensional analysis using reference object calibration',
            'Feature Size Detection successfully identified features smaller than the minimum printable size',
            'Overhang Detection accurately identified areas exceeding 45-degree angles',
            'STL Conversion successfully transformed 2D images into printable 3D models'
          ]
        },
        discussion: {
          mainPoints: [
            'Automated preparation of 3D printable files from 2D images',
            'Intelligent support structure generation',
            'Feature size validation for print success',
            'Scalable implementation for various object types'
          ],
          summary: 'This project successfully demonstrates a simple yet effective platform that enables users to generate 3D printable files by simply taking a photo of an object with their mobile phone, making the technology more accessible to users without technical expertise.'
        },
        personalContribution: 'As the lead researcher on this project, I was responsible for developing the computer vision algorithms for feature detection and scale analysis. I implemented the overhang detection system and coordinated the integration of different modules. The project successfully demonstrated the viability of using computer vision for automated 3D printing preparation while maintaining accuracy and reliability.',
        features: [
          'Reference object-based scale detection',
          'Automated feature size analysis',
          'Intelligent overhang detection',
          'Support structure generation',
          'AI-powered STL conversion',
          'Mobile-friendly implementation'
        ],
        challenges: 'The main challenges included developing accurate scale detection algorithms, implementing reliable feature size analysis, and creating a robust overhang detection system. These were addressed through innovative use of computer vision techniques and AI-powered processing.'
      },
      {
        id: 'adaptive-conveyor-control',
        title: 'Adaptive Conveyor Control for Material Sorting',
        description: 'Intelligent control system for optimizing material sorting efficiency in recycling facilities',
        image: `${process.env.PUBLIC_URL}/images/conveyor-control.jpg`,
        technologies: ['Controls', 'Robotics', 'Perception', 'Python', 'ROS', 'YOLOv8', 'MPC'],
        objective: 'Efficient material sorting in Material Recovery Facilities (MRFs) is critical to recycling operations but faces challenges like varying material flow rates and limited adaptability of existing systems. This project aims to develop an adaptive control system for conveyor belts that optimizes sorting efficiency using real-time computer vision and model predictive control. The system provides a scalable, intelligent solution for improving sorting accuracy and operational efficiency in MRFs.',
        methodology: {
          intro: 'The project adopted a three-phase approach:',
          materialDetection: {
            title: '1. Real-Time Material Detection and Classification (Phase 1)',
            details: [
              'Developed a computer vision model using YOLOv8 for real-time material detection',
              'Implemented a training pipeline using annotated datasets of recyclable materials',
              'Integrated the detection system with conveyor speed control algorithms'
            ],

          },
          speedControl: {
            title: '2. Adaptive Conveyor Speed Control (Phase 2)',
            details: [
              'Designed a Model Predictive Control (MPC) system for real-time speed adjustment',
              'Established feedback loops between material flow data and belt speed parameters',
              'Simulated system performance under various material flow scenarios'
            ],
          },
          systemIntegration: {
            title: '3. System Integration and Testing (Phase 3)',
            details: [
              'Integrated computer vision and MPC modules with hardware components',
              'Conducted trials on a prototype conveyor system to evaluate overall performance',
              'Implemented a user interface for monitoring and manual overrides'
            ],
          }
        },
        results: {
          intro: 'The project demonstrated significant advancements across all phases:',
          achievements: [
            'Material Detection and Classification: Achieved 95% detection accuracy across diverse lighting and material conditions',
            'Adaptive Speed Control: Reduced sorting errors by 30% compared to fixed-speed systems',
            'System Integration: Delivered a fully operational prototype, demonstrating real-time adaptability in simulated MRF environments'
          ]
        },
        discussion: {
          mainPoints: [
            'Enhanced Sorting Efficiency: Improved material throughput while maintaining accuracy',
            'Intelligent Adaptability: Demonstrated real-time adjustments based on dynamic input conditions',
            'Scalability: The system can be scaled for larger facilities with minor modifications'
          ],
          summary: 'By combining advanced computer vision with adaptive control techniques, this framework lays the groundwork for smarter, more efficient recycling operations.'
        },
        personalContribution: 'As the lead developer, I was responsible for designing and implementing the computer vision model for material detection and classification. I spearheaded the development of the adaptive control algorithm and oversaw the integration of all system components. The project showcased the potential of combining real-time data analysis with intelligent control for solving complex industrial challenges.',
        features: [
          'Real-time material detection using YOLOv8',
          'Adaptive speed control using MPC',
          '95% detection accuracy',
          '30% reduction in sorting errors',
          'Interactive monitoring interface',
          'Scalable system architecture'
        ],
        challenges: 'The main challenges included achieving reliable material detection under varying conditions and implementing responsive speed control while maintaining system stability. These were addressed through robust computer vision algorithms and carefully tuned control systems.'
      },
      {
        id: 'diffusion-qr-imagery',
        title: 'Advancing Visual Engagement through Text-Based Diffusion-Generated Imagery',
        description: 'AI-powered system combining text-to-image generation with functional QR code integration',
        image: `${process.env.PUBLIC_URL}/images/diffusion-qr.jpg`,
        technologies: ['Python', 'PyTorch', 'Stable Diffusion', 'OpenCV', 'CLIP', 'Deep Learning'],
        objective: 'The integration of textual descriptions with visual creativity has unlocked remarkable potential in generative AI. This project explores the use of advanced diffusion models to create visually striking images based on textual input while seamlessly embedding functional QR codes. By adapting and enhancing latent diffusion models with cross-attention mechanisms, the project achieves a sophisticated translation of text to images, ensuring high fidelity and alignment with semantic input. The integration of QR codes via targeted inpainting and OpenCV methods introduces a novel dimension, merging aesthetics with digital functionality for new-age branding and audience engagement.',
        methodology: {
          intro: 'The project implemented a multi-step approach:',
          imageGeneration: {
            title: '1. Text-to-Image Generation Using Latent Diffusion Models',
            details: [
              'Adapted and fine-tuned the Stable Diffusion v1.5 model',
              'Utilized latent space diffusion processes for efficient computation',
              'Implemented CLIP-based text encoders for accurate textual embedding'
            ],
          },
          qrIntegration: {
            title: '2. QR Code Integration with Inpainting and OpenCV',
            details: [
              'Designed targeted inpainting pipelines to seamlessly blend QR codes into images',
              'Enhanced integration using OpenCV for faster, more efficient QR embedding',
              'Ensured minimal aesthetic compromise while preserving QR code scannability'
            ],

          },
          evaluation: {
            title: '3. Model Evaluation and Comparative Analysis',
            details: [
              'Evaluated performance using Fréchet Inception Distance (FID) and CLIP scores',
              'Conducted a comparative study with state-of-the-art ControlNet models'
            ],
          }
        },
        results: {
          intro: 'The project achieved significant outcomes:',
          achievements: [
            'Image Quality: High fidelity and semantic alignment in generated images, comparable to state-of-the-art models',
            'QR Code Scannability: Achieved an 80% scannability rate, outperforming ControlNet\'s 50%',
            'Efficiency: Integration of OpenCV reduced embedding time by half compared to inpainting methods'
          ]
        },
        discussion: {
          mainPoints: [
            'Functional Aesthetics: Seamless integration of scannable QR codes in high-quality images',
            'Efficient Design: Improved generation time and reduced complexity with OpenCV-based QR embedding',
            'Practical Application: Demonstrated potential for branding, marketing, and interactive digital content creation'
          ],
          summary: 'The study underscores the ability of diffusion models to balance aesthetic quality and functional usability, paving the way for new applications in visual media.'
        },
        personalContribution: 'As a core team member, I led the integration of the baseline diffusion model components with the main framework. My work focused on building the diffusion class, ensuring smooth collaboration between the CLIP text encoder, UNet architecture, and decoder modules. Additionally, I contributed to optimizing the pipeline for efficiency and performance, resulting in a robust system that demonstrated superior scannability and visual quality.',
        features: [
          'Text-to-image generation using Stable Diffusion',
          'QR code integration with inpainting',
          'OpenCV-based optimization',
          '80% QR code scannability rate',
          'Reduced embedding time',
          'High-fidelity image generation'
        ],
        challenges: 'The main challenges included balancing image quality with QR code functionality and optimizing the generation pipeline for efficiency. These were addressed through innovative use of targeted inpainting and OpenCV-based optimization techniques.'
      }
    ]
  };
  
  export const getProjectData = (id) => {
    return Object.values(projects)
      .flat()
      .find(project => project.id === id);
  };