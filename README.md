This is a [Next.js](https://nextjs.org/) project bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app).

## Getting Started

First, run the development server:

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

## Deploying to Production

The current implementation of the web app is hosted through Microsoft Azure.  The repositories are connected to [Azure DevOps](https://dev.azure.com/AnchorSystems/) and set up with a CI/CD pipeline.  In order to deploy a new version to the Azure server, these steps must be taken:

- 1. Navigate to pipelines section of Azure DevOps, run the build pipeline to build the Next.js project. Select the main branch to build from that branch.

- 2. Once built, navigate to the releases section under pipelines and create a new release.

- 3. Select the most recent build artifact and start the push to production.

- 4. Once done, the server should be updated with the updated content.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/deployment) for more details.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.
