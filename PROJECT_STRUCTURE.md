# SYNERA — Project Structure

```text
synera-platform/
├── app/
│   ├── (auth)/
│   │   ├── login/
│   │   └── register/
│   ├── (marketing)/
│   │   └── page.tsx
│   ├── (protected)/
│   │   ├── dashboard/
│   │   ├── organization/
│   │   └── layout.tsx
│   ├── layout.tsx
│   ├── globals.css
│   └── error.tsx
├── components/
│   ├── layout/
│   ├── auth/
│   ├── organization/
│   └── ui/
├── lib/
│   ├── auth/
│   ├── organizations/
│   ├── supabase/
│   ├── permissions/
│   └── validation/
├── supabase/
│   ├── migrations/
│   ├── seed/
│   └── config.toml
├── tests/
│   ├── unit/
│   ├── integration/
│   └── e2e/
├── public/
├── ARCHITECTURE.md
├── DATABASE_SCHEMA.md
├── DEVELOPMENT_PLAN.md
├── .env.example
└── README.md
```

## Route organization

- Public marketing and authentication routes remain outside protected layouts.
- Organization routes are separated from platform administration routes.
- All protected layouts verify authentication and organization membership on the server.

## Component rules

- UI components should be reusable and focused.
- Server Components perform data access unless a clear interaction boundary requires a Client Component.
- Mutating operations use validated Server Actions or protected route handlers.
- No fake data or nonfunctional controls may be shipped as completed functionality.
