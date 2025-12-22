import { ArrowRight, ExternalLink, Github } from "lucide-react";

const projects = [
  {
    id: 1,
    title: "SRI LANKA NATIONAL TOURISM INTELLIGENCE FORECASTING PLATFORM",
    description: "Built an interactive tourism analytics dashboard using Python and Streamlit to visualize trends and seasonal patterns. Applied machine learning models such as Prophet and LSTM for tourist arrival forecasting. Focused on data preprocessing, model evaluation, and actionable insights for business and policy use.",
    image: "/projects/project1.png",
    tags: ["Python", "Streamlit", "Machine Learning"],
    demoUrl: "#",
    githubUrl: "https://github.com/Rusiru49/SRI-LANKA-NATIONAL-TOURISM-INTELLIGENCE-FORECASTING-PLATFORM",
  },
  {
    id: 2,
    title: "Adaptive-Exam-Preparation-AI",
    description: "Developed a data-driven adaptive exam preparation system that adjusts learning content based on user performance. Analyzed assessment results to identify weak areas and improve learning efficiency. Demonstrated strong skills in analytics, logic design, and continuous performance tracking.",
    image: "/projects/project2.png",
    tags: ["Python", "Streamlit", "MongoDB"],
    demoUrl: "#",
    githubUrl: "https://github.com/LochanaLithira/Adaptive-Exam-Preparation-AI",
  },
  {
    id: 3,
    title: "E-commerce Platform BakedTato",
    description: "BAKEDTATO is a MERN-stack web application developed to manage a baked potato food business efficiently. It includes product, order, stock, and user management with secure admin controls. The system supports online ordering, payment handling, and real-time sales insights such as best-selling products and analytics dashboards.",
    image: "/projects/project3.png",
    tags: ["React", "Node.js", "Javascript"],
    demoUrl: "#",
    githubUrl: "#",
  },
  {
    id: 4,
    title: "Crop Disease Prediction System",
    description: "Developed a machine learning–based web application to detect tomato crop diseases using image classification. The system allows users to upload leaf images and predicts the disease using a trained CNN model. Built with FastAPI for the backend and React for the frontend, providing real-time predictions to support smart agriculture.",
    image: "/projects/project4.png",
    tags: ["Python", "TensorFlow", "CNN", "FastAPI", "React"],
    demoUrl: "#",
    githubUrl: "https://github.com/Rusiru49/Crop-Disease-Prediction",
  }
];

export const ProjectsSection = () => {
  return (
    <section id="projects" className="py-24 px-4 relative">
      <div className="container mx-auto max-w-5xl">
        <h2 className="text-3xl md:text-4xl font-bold mb-4 text-center">
          {" "}
          Featured <span className="text-primary"> Projects </span>
        </h2>

        <p className="text-center text-muted-foreground mb-12 max-w-2xl mx-auto">
          Here are some of my recent projects. Each project was carefully
          crafted with attention to detail, performance, and user experience.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, key) => (
            <div
              key={key}
              className="group bg-card rounded-lg overflow-hidden shadow-xs card-hover"
            >
              <div className="h-48 overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
              </div>

              <div className="p-6">
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tags.map((tag) => (
                    <span className="px-2 py-1 text-xs font-medium border rounded-full bg-secondary text-secondary-foreground">
                      {tag}
                    </span>
                  ))}
                </div>

                <h3 className="text-xl font-semibold mb-1"> {project.title}</h3>
                <p className="text-muted-foreground text-sm mb-4">
                  {project.description}
                </p>
                <div className="flex justify-between items-center">
                  <div className="flex space-x-3">
                    <a
                      href={project.demoUrl}
                      target="_blank"
                      className="text-foreground/80 hover:text-primary transition-colors duration-300"
                    >
                      <ExternalLink size={20} />
                    </a>
                    <a
                      href={project.githubUrl}
                      target="_blank"
                      className="text-foreground/80 hover:text-primary transition-colors duration-300"
                    >
                      <Github size={20} />
                    </a>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <a
            className="cosmic-button w-fit flex items-center mx-auto gap-2"
            target="_blank"
            href="https://github.com/Rusiru49"
          >
            Check My Github <ArrowRight size={16} />
          </a>
        </div>
      </div>
    </section>
  );
};