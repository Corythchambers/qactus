# SDET/QAAE Portfolio Website

A modern, responsive portfolio website for QA Automation Engineers and Software Development Engineers in Test (SDET) built with React and Chakra UI.

## Features

- Modern UI with light/dark mode toggle
- Fully responsive design
- Accessible to all users
- Fast performance
- Sections for: Intro, About, Projects, Blog, and Contact


## Getting Started

### Prerequisites

- Node.js (v14 or later)
- npm (v6 or later)

### Installation

1. Clone the repository:

   ```bash
   git clone https://github.com/your-username/qa-portfolio.git
   cd qa-portfolio
   ```

2. Install dependencies:

   ```bash
   npm install
   ```

3. Start the development server:

   ```bash
   npm start
   ```

4. Open your browser and navigate to `http://localhost:3000`

## Customization

### Styling

This project uses Chakra UI, which makes customization straightforward:

1. Modify the theme in `src/ChakraUIProvider.tsx`
2. Update colors, fonts, and other design elements to match your personal brand

## Deployment

### Building for Production

To create a production-ready build:

```bash
npm run build
```

This generates optimized files in the `build` folder.

### Hosting Options

- **GitHub Pages**: Great for free hosting of static sites
- **Netlify**: Offers continuous deployment and other advanced features
- **Vercel**: Excellent for React applications with seamless deployment

## Accessibility Features

This portfolio follows WCAG guidelines and includes:

- Proper heading hierarchy
- Contrast that meets AA standards
- Keyboard navigation support
- Screen reader friendly content
- Focus indicators for keyboard users

## How to Create a New Blog Post

This project uses a template system for blog posts to make it easy to add new content.

### Step 1: Add the blog post metadata

Open `src/data/blogPosts.ts` and add a new entry to the `blogPosts` array:

```typescript
{
  id: "your-blog-post-id", // Used in the URL, e.g., /blog/your-blog-post-id
  title: "Your Blog Post Title",
  description: "A short description of your blog post",
  date: "Month Day, Year",
  readTime: "X min",
  tags: [
    { label: "Tag1" },
    { label: "Tag2" }
  ],
  imageUrl: "URL to your featured image",
  imageAlt: "Alternative text for the featured image"
}
```

### Step 2: Create the blog post component

1. Copy the template file located at `src/pages/blog/BlogPostTemplate.tsx`
2. Rename it to match your blog post ID, e.g., `src/pages/blog/your-blog-post-id.tsx`
3. Update the component name and the blog post ID:

```typescript
const YourBlogPostComponent = () => {
  const blogData = blogPosts.find((post) => post.id === "your-blog-post-id");
  // ...rest of the code
};

export default YourBlogPostComponent;
```

4. Replace the placeholder content with your actual blog post content

### Step 3: Add the route

Open `src/App.tsx` and add a new route for your blog post:

```tsx
<Route path="/blog/your-blog-post-id" element={<YourBlogPostComponent />} />
```

### Step 4: Test your new blog post

Run the application and navigate to your new blog post to make sure it appears correctly.

## Acknowledgments

- [Chakra UI](https://chakra-ui.com/) for the component library
- [React Icons](https://react-icons.github.io/react-icons/) for the icon set
- [Fontsource](https://fontsource.org/) for the Inter font package
