# SYNERA — Development Plan

## Phase 1: Foundation (current scope)

1. Initialize Next.js, React, TypeScript, and Tailwind CSS.
2. Configure environment variables and Supabase clients.
3. Build the responsive marketing landing page using the SYNERA brand palette.
4. Implement Supabase registration and login.
5. Implement organization creation and membership assignment.
6. Build a minimal protected shell and organization dashboard.
7. Provide setup documentation and test the mobile, desktop, auth, and organization flows.

### Explicitly excluded from Phase 1

- Real payment processing
- WhatsApp/SMS delivery
- n8n automations
- AI provider integrations
- Inventory or product accounting
- Demo or fabricated dashboard metrics

## Later phases

- **Phase 2:** tenant model, roles, RLS, and subscriptions foundation
- **Phase 3:** customers, staff, services
- **Phase 4:** appointments and database-level conflict protection
- **Phase 5:** automation engine and notification infrastructure
- **Phase 6:** real reporting and assistive AI
- **Phase 7:** payments, full testing, and production launch

## Quality gates

No phase proceeds unless:

- relevant tests pass;
- cross-tenant access tests pass;
- unauthorized operations are rejected;
- no secrets exist in client code;
- setup instructions are complete;
- each deliverable is reviewed and explicitly approved.

## Required environment variables

Only public Supabase values belong in browser-exposed variables. Private credentials must remain server-only.

```text
NEXT_PUBLIC_SUPABASE_URL=
NEXT_PUBLIC_SUPABASE_ANON_KEY=
SUPABASE_SERVICE_ROLE_KEY=
```
