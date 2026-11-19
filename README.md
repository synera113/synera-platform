# Setup and current implementation status

## UI preview

Requires Node.js 20+ and npm.

```bash
npm install
npm run dev
```

Open `http://localhost:3000`. Available UI routes:

- `/` — marketing landing page
- `/login` — login UI draft
- `/register` — registration UI draft
- `/organization/new` — organization setup UI draft

## Important: UI-only draft

Supabase is not configured. Login, registration, and organization creation are intentionally disabled and do not submit or store data. Do not treat this as authentication or a production-ready application. Tenant isolation and authorization are not implemented in this UI-only stage.

To enable real flows later, configure a Supabase project and secure environment variables following `SETUP.md`. Never commit `.env.local` or expose a service-role key to the browser.

## Verify

```bash
npm run build
```

The repository also defines lint/test scripts; run them after installing dependencies and configure any missing test tooling before relying on them.
