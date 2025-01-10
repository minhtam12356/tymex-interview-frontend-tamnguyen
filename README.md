Candidate: Tam Nguyen

Link vercel demo: https://tymex-interview-frontend-tamnguyen.vercel.app/

- [Figma Design](https://www.figma.com/design/5vYZWIUgTNJ1Ud7RfV2zq4/Untitled?node-id=0-1&p=f&t=3KzZ6FGXEcKUGC9s-0)
- [Github Repository](https://github.com/minhtam12356/tymex-interview-frontend-tamnguyen)

UI/UX:

- [Nextjs](https://nextjs.org/)
- [Ant Design](https://ant.design/)
- Supported for Desktop / Tablet / Mobile

Capabilities:

- Mock data from localhost server Nextjs ([marketplaces API](https://github.com/minhtam12356/tymex-interview-frontend-tamnguyen/blob/develop/src/app/api/market-places/route.ts))
- Search, filter marketplaces
- Load more marketplaces
- Handle:
  - No data response
  - Load more end
  - Error when call API
- System can auto refresh data after 60 seconds

Development:

- Typescript
- Lazy Loading
- Skeleton Loading
- Custom hook ([useChangeParam](https://github.com/minhtam12356/tymex-interview-frontend-tamnguyen/blob/develop/src/hook/useChangeParam.tsx))
- Higher Order Function ([debounce](https://github.com/minhtam12356/tymex-interview-frontend-tamnguyen/blob/develop/src/utilities/index.ts))

Code Quality:

- Unit Test
- Integration Test

Code Styling:

- Eslint
- Prettier

This is a [Next.js](https://nextjs.org) project bootstrapped with [`create-next-app`](https://nextjs.org/docs/app/api-reference/cli/create-next-app).

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `app/page.tsx`. The page auto-updates as you edit the file.

This project uses [`next/font`](https://nextjs.org/docs/app/building-your-application/optimizing/fonts) to automatically optimize and load Inter & Drone font.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js) - your feedback and contributions are welcome!

## Getting Tests

Run this command:

```bash
npm run test
# or
yarn test
# or
pnpm test
# or
bun test
```
