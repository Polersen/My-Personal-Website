import React from "react";
import { Card, CardContent } from '@mui/material';
import Button from "./components/Button";
import { Mail, Github, Linkedin } from "lucide-react";

const projects = [
  { title: "Project One", description: "Description of project one." },
  { title: "Project Two", description: "Description of project two." },
  { title: "Project Three", description: "Description of project three." },
];

const App = () => {
  return (
    <div className="min-h-screen bg-gray-50 p-4 md:p-8">
      <header className="text-center py-6">
        <h1 className="text-4xl font-bold mb-2">Your Name</h1>
        <p className="text-lg text-gray-600">Web Developer | Designer | Coder</p>
      </header>

      <section className="my-8">
        <h2 className="text-2xl font-semibold mb-4">Projects</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {projects.map((project, index) => (
            <Card key={index} className="shadow-md rounded-2xl p-4">
              <CardContent>
                <h3 className="text-xl font-semibold mb-2">{project.title}</h3>
                <p className="text-gray-700">{project.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>

      <section className="my-8">
        <h2 className="text-2xl font-semibold mb-4">Resume</h2>
        <Button className="bg-blue-500 text-white px-4 py-2 rounded-xl">
          Download Resume
        </Button>
      </section>

      <section className="my-8">
        <h2 className="text-2xl font-semibold mb-4">Contact</h2>
        <div className="flex space-x-4 justify-center">
          <a href="mailto:your.email@example.com">
            <Mail className="w-6 h-6 text-gray-700 hover:text-blue-500" />
          </a>
          <a href="https://github.com/yourusername" target="_blank" rel="noopener noreferrer">
            <Github className="w-6 h-6 text-gray-700 hover:text-blue-500" />
          </a>
          <a href="https://linkedin.com/in/yourusername" target="_blank" rel="noopener noreferrer">
            <Linkedin className="w-6 h-6 text-gray-700 hover:text-blue-500" />
          </a>
        </div>
      </section>

      <footer className="text-center py-4 text-gray-500">
        &copy; {new Date().getFullYear()} Your Name. All Rights Reserved.
      </footer>
    </div>
  );
};

export default App;
