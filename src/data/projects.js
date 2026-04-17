export const developmentProjects = [
  {
    id: 'dev-1',
    title: 'Insight Analytics Dashboard',
    description:
      'A scalable analytics dashboard with role-based views, KPI widgets, and exportable business reports.',
    techStack: ['React', 'TypeScript', 'Chart.js', 'Firebase'],
    image: '/assets/services.png',
    codeUrl: '#',
    demoUrl: '#',
    category: 'Development',
    link: '/development-projects',
  },
  {
    id: 'dev-2',
    title: 'TeamFlow Task Platform',
    description:
      'A collaborative task management app with drag-and-drop boards, custom workflows, and live notifications.',
    techStack: ['React', 'JavaScript', 'Node.js', 'Socket.IO'],
    image: '/assets/services.png',
    codeUrl: '#',
    demoUrl: '#',
    category: 'Development',
    link: '/development-projects',
  },
  {
    id: 'dev-3',
    title: 'CommerceX Storefront',
    description:
      'A modern e-commerce experience with product filtering, secure checkout simulation, and dynamic recommendations.',
    techStack: ['React', 'Redux', 'Stripe API', 'Sass'],
    image: '/assets/services.png',
    codeUrl: '#',
    demoUrl: '#',
    category: 'Development',
    link: '/development-projects',
  },
  {
    id: 'dev-4',
    title: 'MentorHub Learning Portal',
    description:
      'An online learning interface featuring lesson tracking, progress analytics, and certificate generation.',
    techStack: ['React', 'Vite', 'MongoDB', 'Express'],
    image: '/assets/services.png',
    codeUrl: '#',
    demoUrl: '#',
    category: 'Development',
    link: '/development-projects',
  },
]

export const designProjects = [
  {
    id: 'design-1',
    title: 'TUTE COVER PAGE DESIGN',
    description:
      'I did this design for a tuter whose name is desplayed in the design.This is a cover page design for a biology tute.',
    image: '/assets/coverpage.png',
    category: 'Graphic Design',
    link: '/graphic-design-projects',
  },
  {
    id: 'design-2',
    title: 'TUTE COVER PAGE DESIGN',
    description:
      'I did this design for a tuter whose name is desplayed in the design.This is a cover page design for a Biology tute.',
    image: '/assets/coverpage2.png',
    category: 'Graphic Design',
    link: '/graphic-design-projects',
  },
  {
    id: 'design-3',
    title: 'FLYER DESIGN',
    description:
      'This is a thank you flyer design for a company.',
    image: '/assets/thank-you-random-copy.png',
    category: 'Graphic Design',
    link: '/graphic-design-projects',
  },
  {
    id: 'design-4',
    title: 'FLYER DESIGN',
    description:
      'This is a winner annoucement flyer for a hackathon event.',
    image: '/assets/winner-annoucement.png',
    category: 'Graphic Design',
    link: '/graphic-design-projects',
  },
  {
    id: 'design-5',
    title: 'FLYER DESIGN',
    description:
      'This is a flyer design for a hackathon event.',
    image: '/assets/top-performers-announcement-copy.png',
    category: 'Graphic Design',
    link: '/graphic-design-projects',
  },
  {
    id: 'design-6',
    title: 'POSTER DESIGN',
    description:
      'This is a winner annoucement poster design for a creative event.',
    image: '/assets/1st-runnerup-board.png',
    category: 'Graphic Design',
    link: '/graphic-design-projects',
  },
  {
    id: 'design-7',
    title: 'POSTER DESIGN',
    description:
      'This is a winner annoucement poster design for a creative event.',
    image: '/assets/2nd-runnerup-board.png',
    category: 'Graphic Design',
    link: '/graphic-design-projects',
  },
  {
    id: 'design-8',
    title: 'POSTER DESIGN',
    description:
      'This is a winner annoucement poster design for a creative event.',
    image: '/assets/winner-board-copy.png',
    category: 'Graphic Design',
    link: '/graphic-design-projects',
  },
  {
    id: 'design-9',
    title: 'FLYER DESIGN',
    description:
      'This is a member announcement flyer for MS Club.',
    image: '/assets/2026-exom-committee-welcome-flyer2-copy.png',
    category: 'Graphic Design',
    link: '/graphic-design-projects',
  },
  {
    id: 'design-10',
    title: 'FLYER DESIGN',
    description:
      'This is a member announcement flyer for MS Club.',
    image: '/assets/2026-exom-committee-welcome-flyer-copy.png',
    category: 'Graphic Design',
    link: '/graphic-design-projects',
  },
  {
    id: 'design-11',
    title: 'FLYER DESIGN',
    description:
      'This is a member announcement flyer for MS Club.',
    image: '/assets/2026-exom-welcome-flyer-copy3.png',
    category: 'Graphic Design',
    link: '/graphic-design-projects',
  },
  {
    id: 'design-12',
    title: 'TUTION SOCIAL MEDIA POST',
    description:
      'This is a sample social media post design for a tution.',
    image: '/assets/sample1.png',
    category: 'Graphic Design',
    link: '/graphic-design-projects',
  },
  {
    id: 'design-13',
    title: 'TUTION SOCIAL MEDIA POST',
    description:
      'This is a sample social media post design for a tution.',
    image: '/assets/sample2.1.png',
    category: 'Graphic Design',
    link: '/graphic-design-projects',
  },
  {
    id: 'design-14',
    title: 'LOGO DESIGN',
    description:
      'This is a simple logo design I did for a photographer.',
    image: '/assets/ashan-photography3.png',
    category: 'Graphic Design',
    link: '/graphic-design-projects',
  },
  {
    id: 'design-15',
    title: 'SOCIAL MEDIA POST DESIGN',
    description:
      'This is a social media post design for an event.',
    image: '/assets/awurudu4.png',
    category: 'Graphic Design',
    link: '/graphic-design-projects',
  },
  {
    id: 'design-16',
    title: 'TUTION SOCIAL MEDIA POST',
    description:
      'This is a sample social media post design for a tution.',
    image: '/assets/dancing.png',
    category: 'Graphic Design',
    link: '/graphic-design-projects',
  },
  {
    id: 'design-17',
    title: 'FLYER DESIGN',
    description:
      'This is a flyer design for a club.',
    image: '/assets/taekwondo-pply-post-copy.png',
    category: 'Graphic Design',
    link: '/graphic-design-projects',
  },
]

// Helper function to randomly select featured projects
export const getRandomFeaturedProjects = (count = 3) => {
  const allProjects = [...developmentProjects, ...designProjects]
  const shuffled = [...allProjects].sort(() => 0.5 - Math.random())
  return shuffled.slice(0, count)
}
