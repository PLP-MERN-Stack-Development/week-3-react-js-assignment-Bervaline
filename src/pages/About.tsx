
import { Card, CardContent, CardHeader } from '@/components/Card';
import { CheckSquare, Users, Palette, Smartphone, Zap, Code } from 'lucide-react';

const About = () => {
  const features = [
    {
      icon: <CheckSquare className="h-8 w-8 text-blue-600" />,
      title: "Task Management",
      description: "Create, edit, and organize your tasks with an intuitive interface. Mark tasks as complete and filter by status."
    },
    {
      icon: <Users className="h-8 w-8 text-green-600" />,
      title: "User Directory",
      description: "Browse and search through user profiles with real-time API data integration and pagination."
    },
    {
      icon: <Palette className="h-8 w-8 text-purple-600" />,
      title: "Dark Mode",
      description: "Seamlessly switch between light and dark themes with persistent user preferences."
    },
    {
      icon: <Smartphone className="h-8 w-8 text-orange-600" />,
      title: "Responsive Design",
      description: "Fully responsive layout that works perfectly on desktop, tablet, and mobile devices."
    },
    {
      icon: <Zap className="h-8 w-8 text-yellow-600" />,
      title: "Performance",
      description: "Optimized with React hooks, local storage persistence, and efficient state management."
    },
    {
      icon: <Code className="h-8 w-8 text-indigo-600" />,
      title: "Modern Stack",
      description: "Built with React, TypeScript, Tailwind CSS, and following modern development practices."
    }
  ];

  const technologies = [
    { name: "React 18", description: "Modern React with hooks and functional components" },
    { name: "TypeScript", description: "Type-safe development with excellent IDE support" },
    { name: "Tailwind CSS", description: "Utility-first CSS framework for rapid UI development" },
    { name: "React Router", description: "Declarative routing for React applications" },
    { name: "Custom Hooks", description: "Reusable logic with useLocalStorage and useApi" },
    { name: "Context API", description: "Global state management for theme switching" }
  ];

  return (
    <div className="max-w-7xl mx-auto px-4 py-12">
      {/* Hero Section */}
      <div className="text-center mb-16">
        <div className="inline-flex items-center justify-center w-16 h-16 bg-blue-600 rounded-2xl mb-6">
          <CheckSquare className="h-8 w-8 text-white" />
        </div>
        <h1 className="text-5xl font-bold text-gray-900 dark:text-white mb-6">About TaskFlow</h1>
        <p className="text-xl text-gray-600 dark:text-gray-400 max-w-3xl mx-auto leading-relaxed">
          TaskFlow is a comprehensive React application that demonstrates modern web development practices, 
          component architecture, state management, and API integration with a beautiful, responsive design.
        </p>
      </div>

      {/* Features Grid */}
      <div className="mb-16">
        <h2 className="text-3xl font-bold text-gray-900 dark:text-white text-center mb-12">Key Features</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <Card 
              key={index} 
              hover 
              className="transition-all duration-300 transform hover:scale-105"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <CardHeader>
                <div className="flex items-center space-x-4">
                  <div className="p-2 bg-gray-100 dark:bg-gray-800 rounded-lg">
                    {feature.icon}
                  </div>
                  <h3 className="text-xl font-semibold text-gray-900 dark:text-white">{feature.title}</h3>
                </div>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600 dark:text-gray-400">{feature.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>

      {/* Technology Stack */}
      <div className="mb-16">
        <h2 className="text-3xl font-bold text-gray-900 dark:text-white text-center mb-12">Technology Stack</h2>
        <Card>
          <CardContent className="p-8">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {technologies.map((tech, index) => (
                <div key={index} className="flex items-start space-x-4">
                  <div className="w-2 h-2 bg-blue-600 rounded-full mt-3 flex-shrink-0"></div>
                  <div>
                    <h4 className="font-semibold text-gray-900 dark:text-white mb-1">{tech.name}</h4>
                    <p className="text-gray-600 dark:text-gray-400 text-sm">{tech.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Architecture Overview */}
      <div>
        <h2 className="text-3xl font-bold text-gray-900 dark:text-white text-center mb-12">Architecture Overview</h2>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          <Card>
            <CardHeader>
              <h3 className="text-xl font-semibold text-gray-900 dark:text-white">Component Architecture</h3>
            </CardHeader>
            <CardContent>
              <ul className="space-y-3 text-gray-600 dark:text-gray-400">
                <li className="flex items-center space-x-2">
                  <div className="w-1.5 h-1.5 bg-blue-600 rounded-full"></div>
                  <span>Reusable UI components (Button, Card, Layout)</span>
                </li>
                <li className="flex items-center space-x-2">
                  <div className="w-1.5 h-1.5 bg-blue-600 rounded-full"></div>
                  <span>Custom hooks for logic separation</span>
                </li>
                <li className="flex items-center space-x-2">
                  <div className="w-1.5 h-1.5 bg-blue-600 rounded-full"></div>
                  <span>Context API for global state management</span>
                </li>
                <li className="flex items-center space-x-2">
                  <div className="w-1.5 h-1.5 bg-blue-600 rounded-full"></div>
                  <span>TypeScript for type safety</span>
                </li>
              </ul>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <h3 className="text-xl font-semibold text-gray-900 dark:text-white">State Management</h3>
            </CardHeader>
            <CardContent>
              <ul className="space-y-3 text-gray-600 dark:text-gray-400">
                <li className="flex items-center space-x-2">
                  <div className="w-1.5 h-1.5 bg-green-600 rounded-full"></div>
                  <span>useState for component-level state</span>
                </li>
                <li className="flex items-center space-x-2">
                  <div className="w-1.5 h-1.5 bg-green-600 rounded-full"></div>
                  <span>useEffect for side effects and lifecycle</span>
                </li>
                <li className="flex items-center space-x-2">
                  <div className="w-1.5 h-1.5 bg-green-600 rounded-full"></div>
                  <span>useContext for theme management</span>
                </li>
                <li className="flex items-center space-x-2">
                  <div className="w-1.5 h-1.5 bg-green-600 rounded-full"></div>
                  <span>Custom useLocalStorage hook for persistence</span>
                </li>
              </ul>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default About;
