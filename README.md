# IndieHires - MERN Stack Platform

A comprehensive hiring platform built with the MERN stack, connecting employers with service providers and freelancers.

## Project Structure

```
indiehires/
├── client/          # Next.js Frontend Application
│   ├── src/
│   ├── public/
│   ├── package.json
│   └── ...
├── server/          # Express.js Backend API (Coming Soon)
│   ├── routes/
│   ├── models/
│   ├── package.json
│   └── ...
├── shared/          # Shared utilities/types (Optional)
├── .gitignore
├── package.json     # Root package.json for scripts
└── README.md
```

## Getting Started

### Prerequisites
- Node.js (v16 or higher)
- npm or yarn
- MongoDB (for future server setup)

### Installation

1. Clone the repository:
```bash
git clone https://github.com/rahuljhax/indiehires.git
cd indiehires
```

2. Install dependencies for all packages:
```bash
npm run install:all
```

### Development

#### Running the Client (Next.js)
```bash
npm run client:dev
```

#### Running Both Client and Server (when server is added)
```bash
npm run dev
```

### Building for Production

#### Build Client
```bash
npm run client:build
```

## Features

### Client (Next.js)
- **Dashboard**: Separate dashboards for employers, service providers, and users
- **Job Management**: Post jobs, manage applications, view job details
- **Service Listings**: Service providers can list and manage their services
- **User Profiles**: Comprehensive profile management for all user types
- **Subscription System**: Built-in subscription and billing management
- **Responsive Design**: Mobile-friendly interface
<!-- 
### Planned Server Features
- RESTful API with Express.js
- MongoDB database integration
- JWT authentication
- File upload handling
- Email notifications
- Payment processing integration -->

## Git Workflow

### Repository Structure
This is a monorepo containing both client and server code. All Git commands should be run from the root directory.

### Making Changes
```bash
# From project root
git status
git add .
git commit -m "feat: description of changes"
git push
```

### Branch Strategy
```bash
# Create feature branch
git checkout -b feature/feature-name

# Switch back to main
git checkout main

# Merge feature
git merge feature/feature-name
```

## Contributing

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Test thoroughly
5. Submit a pull request

## License

This project is licensed under the MIT License.