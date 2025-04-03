// Mock data for testing components that use data props

export const mockProjects = [
  {
    title: "Test Project 1",
    description: "A test project description",
    role: "Lead Developer",
    tools: ["React", "TypeScript", "Jest"],
    repoUrl: "https://github.com/test/project1",
    demoUrl: "https://example.com/demo1",
  },
  {
    title: "Test Project 2",
    description: "Another test project description",
    role: "QA Engineer",
    tools: ["Cypress", "JavaScript", "Docker"],
    repoUrl: "https://github.com/test/project2",
  },
];

export const mockBlogPosts = [
  {
    id: "test-blog-post-1",
    title: "Test Blog Post 1",
    description: "A test blog post description",
    date: "January 1, 2025",
    readTime: "5 min",
    tags: [{ label: "Testing" }, { label: "React" }],
    imageUrl: "https://example.com/image1.jpg",
    imageAlt: "Test image 1",
  },
  {
    id: "test-blog-post-2",
    title: "Test Blog Post 2",
    description: "Another test blog post description",
    date: "February 1, 2025",
    readTime: "3 min",
    tags: [{ label: "Accessibility" }, { label: "TypeScript" }],
    imageUrl: "https://example.com/image2.jpg",
    imageAlt: "Test image 2",
  },
];
