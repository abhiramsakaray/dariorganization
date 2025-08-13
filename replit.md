# Overview

This is a modern full-stack web application built for DARI Wallet, a stablecoin payment platform that supports USDC and USDT transactions. The application features a marketing landing page showcasing the wallet's capabilities for secure, instant, and borderless cryptocurrency payments. The project uses a monorepo structure with a React frontend, Express backend, and PostgreSQL database with Drizzle ORM for data management.

**Recent Changes (Jan 2025):**
- Comprehensive SEO optimization with meta tags, structured data, and semantic HTML
- Updated social media links: X (Twitter) and LinkedIn integration
- Removed unnecessary footer navigation sections per user request
- Enhanced content for AI search visibility and better search rankings
- Added comprehensive Open Graph and Twitter Card meta tags

# User Preferences

Preferred communication style: Simple, everyday language.

# System Architecture

## Frontend Architecture
- **Framework**: React 18 with TypeScript for type safety
- **Routing**: Wouter for lightweight client-side routing
- **State Management**: TanStack Query for server state management and data fetching
- **UI Components**: Shadcn/ui component library built on Radix UI primitives
- **Styling**: Tailwind CSS with custom design tokens and variables
- **Build Tool**: Vite for fast development and optimized production builds

## Backend Architecture
- **Framework**: Express.js with TypeScript
- **Architecture Pattern**: RESTful API with modular route registration
- **Storage Layer**: Abstract storage interface with in-memory implementation (MemStorage) for development
- **Development Server**: Custom Vite integration for hot module replacement in development
- **Error Handling**: Centralized error handling middleware with proper HTTP status codes

## Database Design
- **ORM**: Drizzle ORM for type-safe database operations
- **Database**: PostgreSQL (configured via Neon Database serverless)
- **Schema**: Simple user management with username/password authentication
- **Migrations**: Drizzle Kit for schema migrations and database management

## Component Architecture
- **Design System**: Consistent component hierarchy using Radix UI primitives
- **Layout Structure**: Section-based landing page architecture with modular components
- **Responsive Design**: Mobile-first approach with Tailwind breakpoints
- **Accessibility**: Built-in accessibility features through Radix UI components

## Development Workflow
- **Monorepo Structure**: Shared types and schemas between client and server
- **Type Safety**: End-to-end TypeScript with strict configuration
- **Development Mode**: Integrated Vite dev server with Express for full-stack development
- **Build Process**: Separate client (Vite) and server (esbuild) build processes

# External Dependencies

## Core Framework Dependencies
- **@neondatabase/serverless**: Serverless PostgreSQL database connection
- **drizzle-orm**: Type-safe ORM for database operations
- **drizzle-kit**: Database schema management and migrations
- **@tanstack/react-query**: Server state management and caching

## UI and Styling
- **@radix-ui**: Comprehensive set of accessible UI primitives
- **tailwindcss**: Utility-first CSS framework
- **class-variance-authority**: Utility for managing component variants
- **lucide-react**: Icon library for consistent iconography

## Development Tools
- **vite**: Fast build tool and development server
- **tsx**: TypeScript execution engine for development
- **esbuild**: Fast JavaScript bundler for production builds
- **@replit/vite-plugin-runtime-error-modal**: Development error handling

## Authentication & Security
- **zod**: Runtime type validation and schema parsing
- **@hookform/resolvers**: Form validation integration
- **connect-pg-simple**: PostgreSQL session store (configured but not implemented)

## Additional Utilities
- **date-fns**: Date manipulation and formatting
- **wouter**: Lightweight client-side routing
- **clsx** & **tailwind-merge**: CSS class name utilities