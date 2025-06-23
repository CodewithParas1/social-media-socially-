#Social Media App — **Socially**

A modern full-stack social media application built using Next.js 15 App Router, Clerk authentication, Uploadthing, Prisma ORM, and TypeScript.

---

##  Project Setup Instructions

1. **Clone the repository**:
   ```bash
   git clone https://github.com/your-username/social-media-socially-.git
   cd social-media-socially-

Install dependencies:
    npm install
    
Set up the environment variables:

Create a .env file at the root and add your credentials. 
        DATABASE_URL=your_postgresql_db_url
        NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY=your_clerk_key
        CLERK_SECRET_KEY=your_clerk_secret
        UPLOADTHING_SECRET=your_uploadthing_secret
        UPLOADTHING_APP_ID=your_uploadthing_app_id

Push Prisma schema to the database:  npx prisma db push

Run the development server:  npm run dev


##Technologies Used---->>>>

Next.js 15 (App Router)
React 18
TypeScript
Tailwind CSS
Prisma ORM with PostgreSQL
Clerk for authentication
Uploadthing for file uploads
ShadCN/UI components
Netlify for deployment


Key Features Implemented---->>>>
 -Authentication using Clerk (Login, Signup, and session management)
 -Dynamic Profile Pages at /profile/[username]
 -Profile Picture Upload using Uploadthing
 -Post Image Upload
 -Notification Page for user activities
 -Real-time Feed Rendering (server components)
 -Prisma schema + DB Migrations

src/
├── actions/               # Server-side logic (e.g., DB calls)
├── api/uploadthing/       # Uploadthing route & config
├── app/                   # Next.js App Router pages
│   ├── profile/[username] # Dynamic profile pages
│   ├── notifications/     # Notifications page
│   ├── layout.tsx         # Root layout
├── components/            # UI components
├── lib/                   # Utility, upload, and middleware code
├── prisma/                # Prisma schema and migration setup


Delpoyed: https://social-app25.netlify.app/



