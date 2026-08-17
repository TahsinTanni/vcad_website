# VCAD - Web Developer Code Test

Next.js (App Router) + TypeScript + Tailwind CSS build of three VCAD page
types: Homepage, Explore Our Courses, and Course Details.

## How to run it locally

```bash
npm install
npm run dev
```

Open http://localhost:3000.

- `/` - Homepage
- `/courses` - Explore Our Courses
- `/courses/interactive-media-design-generative-arts` - Course Details page
  with full detail content

## How far I got, and why I prioritised what I did

All three requested page types are built, along with shared Header and Footer
components and a course data model that feeds both course pages. I worked in
that order because the pages increase in complexity: the homepage is mostly
static content, Explore Courses adds real course data plus an asymmetric grid
that adapts as the data changes, and Course Details adds the most interactive
surface area with tabs, a curriculum accordion, and a student work image
lightbox.

The course detail route is generated for all sample courses. The Interactive
Media Design & Generative Arts course has the full detail content; the other
sample courses fall back gracefully to the available summary content.

## One decision the designs did not specify

The designs did not specify loading or empty states for the courses page. For
loading, I used a skeleton in the same asymmetric grid shape as the real
content to avoid layout shift. For an empty result, I added a clear "View all
programs" reset button so the user has an immediate way back from a dead end,
especially on mobile.

## What I would do next given more time

I would fill in full curriculum, requirements, fees, and campus content for the
remaining sample courses; build the About, Admissions, and Contact pages; replace
the simulated loading delay with a real data source; and add proper Open Graph
metadata and share imagery.
