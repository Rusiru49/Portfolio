import { useState } from "react";
import {
  FaPython,
  FaGitAlt,
  FaDatabase,
  FaCode,
} from "react-icons/fa";
import {
  SiTensorflow,
  SiPytorch,
  SiPandas,
  SiNumpy,
  SiScikitlearn,
  SiJupyter,
  SiTableau,
} from "react-icons/si";

import { cn } from "../libs/utils";

const skills = [
  // Programming & Data
  { name: "Python", category: "programming", icon: FaPython, level: 90 },
  { name: "R", category: "programming", icon: FaCode, level: 70 },

  // ML & AI
  { name: "TensorFlow", category: "ml", icon: SiTensorflow, level: 75 },
  { name: "scikit-learn", category: "ml", icon: SiScikitlearn, level: 85 },

  // Data Analysis & Visualization
  { name: "Pandas", category: "data", icon: SiPandas, level: 90 },
  { name: "NumPy", category: "data", icon: SiNumpy, level: 90 },
  { name: "Jupyter Notebook", category: "data", icon: SiJupyter, level: 85 },
  { name: "Tableau", category: "data", icon: SiTableau, level: 70 },

  // Tools & Version Control
  { name: "Git/GitHub", category: "tools", icon: FaGitAlt, level: 80 },
  { name: "SQL", category: "tools", icon: FaDatabase, level: 75 },
];

const categories = ["all", "programming", "ml", "data", "tools"];

export const SkillsSection = () => {
  const [activeCategory, setActiveCategory] = useState("all");

  const filteredSkills = skills.filter(
    (skill) => activeCategory === "all" || skill.category === activeCategory
  );

  return (
    <section id="skills" className="py-24 px-4 bg-secondary/30">
      <div className="container mx-auto max-w-5xl">
        <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">
          My <span className="text-primary">Skills</span>
        </h2>

        {/* Category Filter */}
        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => setActiveCategory(category)}
              className={cn(
                "px-5 py-2 rounded-full transition-colors capitalize",
                activeCategory === category
                  ? "bg-primary text-primary-foreground"
                  : "bg-secondary/70 text-foreground hover:bg-secondary"
              )}
            >
              {category}
            </button>
          ))}
        </div>

        {/* Skills Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredSkills.map((skill, index) => {
            const Icon = skill.icon;

            return (
              <div
                key={index}
                className="bg-card p-6 rounded-lg shadow-xs card-hover"
              >
                {/* Skill Header */}
                <div className="flex items-center gap-3 mb-4">
                  {Icon && <Icon className="text-primary text-2xl" />}
                  <h3 className="font-semibold text-lg">{skill.name}</h3>
                </div>

                {/* Progress Bar */}
                <div className="w-full bg-secondary/50 h-2 rounded-full overflow-hidden">
                  <div
                    className="bg-primary h-2 rounded-full origin-left animate-[grow_1.5s_ease-out]"
                    style={{ width: `${skill.level}%` }}
                  />
                </div>

                {/* Percentage */}
                <div className="text-right mt-1">
                  <span className="text-sm text-muted-foreground">
                    {skill.level}%
                  </span>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
