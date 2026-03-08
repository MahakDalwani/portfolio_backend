const mongoose = require('mongoose');
require('dotenv').config();

const Skill = require('./models/Skill');
const Project = require('./models/Project');
const Experience = require('./models/Experience');
const Portfolio = require('./models/Portfolio');

const seedData = async () => {
  try {
    // Connect to MongoDB
    await mongoose.connect(process.env.MONGODB_URI);

    console.log('Connected to MongoDB');

    // Clear existing data
    await Skill.deleteMany({});
    await Project.deleteMany({});
    await Experience.deleteMany({});
    await Portfolio.deleteMany({});

    // Seed Skills
    const skills = await Skill.insertMany([
      {
        name: 'React',
        category: 'Frontend',
        level: 'Expert',
        proficiency: 95,
      },
      {
        name: 'Node.js',
        category: 'Backend',
        level: 'Advanced',
        proficiency: 90,
      },
      {
        name: 'MongoDB',
        category: 'Database',
        level: 'Advanced',
        proficiency: 85,
      },
      {
        name: 'JavaScript',
        category: 'Frontend',
        level: 'Expert',
        proficiency: 95,
      },
      {
        name: 'CSS3',
        category: 'Frontend',
        level: 'Advanced',
        proficiency: 90,
      },
      {
        name: 'Express.js',
        category: 'Backend',
        level: 'Advanced',
        proficiency: 88,
      },
    ]);

    console.log('Skills seeded successfully');

    // Seed Projects
    const projects = await Project.insertMany([
      {
        title: 'E-Commerce Platform',
        description: 'A full-stack e-commerce platform built with React and Node.js',
        image: '',
        technologies: ['React', 'Node.js', 'MongoDB', 'Stripe'],
        githubrepo: 'https://github.com',
        liveLink: 'https://example.com',
        featured: true,
      },
      {
        title: 'Task Management App',
        description: 'A collaborative task management application with real-time updates',
        image: '',
        technologies: ['React', 'Firebase', 'Tailwind CSS'],
        githubrepo: 'https://github.com',
        liveLink: 'https://example.com',
        featured: true,
      },
      {
        title: 'Blog Platform',
        description: 'A modern blogging platform with markdown support and comments',
        image: '',
        technologies: ['Next.js', 'Prisma', 'PostgreSQL'],
        githubrepo: 'https://github.com',
        liveLink: 'https://example.com',
        featured: true,
      },
    ]);

    console.log('Projects seeded successfully');

    // Seed Experience
    const experiences = await Experience.insertMany([
      {
        jobTitle: 'Senior Full Stack Developer',
        company: 'Tech Startup Inc.',
        location: 'San Francisco, CA',
        employmentType: 'Full-time',
        startDate: new Date('2021-01-15'),
        endDate: new Date('2023-06-30'),
        currentlyWorking: false,
        description:
          'Led development of multiple features and mentored junior developers. Improved application performance by 40%.',
        skills: ['React', 'Node.js', 'MongoDB', 'AWS'],
      },
      {
        jobTitle: 'Full Stack Developer',
        company: 'Digital Solutions LLC',
        location: 'New York, NY',
        employmentType: 'Full-time',
        startDate: new Date('2019-06-01'),
        endDate: new Date('2020-12-31'),
        currentlyWorking: false,
        description: 'Developed and maintained web applications for various clients. Collaborated with UX/UI team.',
        skills: ['React', 'Express.js', 'MySQL', 'Docker'],
      },
      {
        jobTitle: 'Junior Developer',
        company: 'Web Agency Co.',
        location: 'Boston, MA',
        employmentType: 'Full-time',
        startDate: new Date('2018-01-10'),
        endDate: new Date('2019-05-31'),
        currentlyWorking: false,
        description: 'Built responsive websites and web applications. Improved code quality through peer reviews.',
        skills: ['JavaScript', 'React', 'CSS3', 'Git'],
      },
    ]);

    console.log('Experience seeded successfully');

    // Seed Portfolio (match model fields: name, title, email required)
    const portfolio = await Portfolio.create({
      name: 'Mahak Dakwani',
      title: 'Full Stack Developer',
      bio: 'Full Stack Developer passionate about creating innovative solutions',
      email: 'mahak@example.com',
      phone: '+1 (555) 123-4567',
      location: 'San Francisco, CA',
      profileImage: '',
      socialLinks: {
        github: 'https://github.com',
        linkedin: '',
        twitter: '',
        portfolio: '',
      },
      resumeUrl: '',
    });

    console.log('Portfolio seeded successfully');
    console.log('All data seeded successfully!');

    // Close connection
    await mongoose.connection.close();
    process.exit(0);
  } catch (error) {
    console.error('Error seeding data:', error);
    process.exit(1);
  }
};

seedData();
