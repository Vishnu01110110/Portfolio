export const projects = {
    hardware: [
      {
        id: 'text-to-music-generation',
        title: 'Enhancing Text-to-Music Generation with Retrieved Audio Prompt',
        description: 'A system that automatically identifies and leverages relevant audio samples from a curated database to guide the music generation process',
        image: `${process.env.PUBLIC_URL}/images/music-generation.jpg`,
        technologies: ['NLP', 'Deep Learning', 'MusicGen', 'Python', 'CLAP'],
        objective: 'This project addresses a fundamental challenge in text-to-music generation: the inherent limitations of textual descriptions in capturing the full complexity of musical attributes. While incorporating reference audio can enhance generation quality, requiring users to manually find and provide relevant audio samples would defeat the purpose of automated music generation. We propose an automated retrieval-augmented approach that strikes a balance between these extremes.',
        methodology: {
          intro: 'Our implementation enhances MusicGen\'s capabilities by integrating a retrieval-augmented generation system:',
          baseModel: {
            title: '1. Base Implementation with MusicGen',
            details: [
              'Used pre-trained MusicGen-melody model (1.5B parameters)',
              'Leveraged NVIDIA A100 GPU for training and generation',
              'Standardized audio samples to 32kHz mono WAV format'
            ]
          },
          retriever: {
            title: '2. Retrieval Mechanism',
            details: [
              'Implemented two approaches for audio retrieval',
              'Used SentenceTransformer (all-mpnet-base-v2) for audio caption text embedding',
              'Applied Contrastive Language-Audio Pretraining (CLAP) embeddings for direct comparison'
            ]
          },
          audioConditioning: {
            title: '3. Audio Conditioning',
            details: [
              'Retrieved reference audio directly conditions the MusicGen model through chroma features',
              "Maintained musical coherence while following text prompt's semantic guidance",
              'Implemented top-k selection (k=1) to avoid quality degradation from audio merging'
            ]
          }
        },
        results: {
          intro: 'Our evaluation revealed notable differences in performance compared to baseline models:',
          achievements: [
            'Improved CLAP score showing better adherence to text prompts',
            'Enhanced musical coherence and style consistency without additional user effort',
            'Successfully bridged the gap between text-only approaches and manual audio conditioning'
          ]
        },
        discussion: {
          mainPoints: [
            'RAG-based model demonstrated improved performance on text adherence metrics',
            'Model struggled with generating vocal elements despite text prompts mentioning singing',
            'Retrieved audio provided additional contextual information, compensating for knowledge gaps'
          ],
          futureWork: [
            'Development of a comprehensive web interface for systematic human evaluation',
            'Exploration of sophisticated multi-sample conditioning strategies',
            'Evaluation with larger variants of MusicGen and other state-of-the-art models',
            'Systematic investigation of how increasing the RAG dataset size affects generation quality'
          ]
        },
        personalContribution: 'As part of the team  at Carnegie Mellon University, I was involved in the implementation of the retrieval mechanism and the evaluation pipeline. I contributed to the CLAP embedding approach for audio retrieval and helped in analyzing the experimental results. The project successfully demonstrated that our approach could become a standard component in future music generation systems.',
        features: [
          'Automated retrieval-augmented generation system',
          'Dual-approach retrieval mechanism (text embedding and CLAP embedding)',
          'Enhanced text adherence in generated music',
          'Improved musical coherence and style consistency',
          'Web demo page showcasing generated samples',
          'Comprehensive evaluation using FAD, KL Divergence, and CLAP score metrics'
        ],
        challenges: 'The main challenges included developing an effective retrieval mechanism that could find truly relevant audio samples from a limited database and addressing the model\'s limitations in generating certain audio elements like vocals. We also faced the challenge of balancing between improving text adherence while maintaining audio quality, as revealed by the trade-offs in our evaluation metrics.'
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