# SYNERA — Architecture

## 1. Product

SYNERA is a secure, multi-tenant SaaS platform for operating customer-facing businesses. AI is an assistive layer; the core platform is automation, PostgreSQL, and business-management infrastructure.

## 2. Technology

- **Frontend:** Next.js App Router, React, TypeScript, Tailwind CSS
- **Backend:** Next.js Server Actions and protected route handlers
- **Database/Auth/Storage:** Supabase, PostgreSQL, Supabase Auth, Storage
- **Automation:** n8n in later phases
- **Hosting:** Vercel

Secrets must be server-only. The browser must not receive service-role credentials or private integration keys.

## 3. Tenant model

- Every tenant is represented by `organizations`.
- Every tenant-owned record carries `tenant_id`.
- Access is derived from authenticated membership in `organization_members`.
- Supabase RLS is the final authorization boundary.
- UI authorization and API authorization must both exist.

## 4. Roles and permissions

A small role table plus granular permission assignments is preferred:

- `super_admin`
- `owner`
- `staff`
- `customer`

Permissions should be checked by server helpers and evaluated by RLS policies where possible.

## 5. Core data flows

### Authentication

Supabase Auth authenticates a user. A profile is created safely after registration. A user may create or join an organization according to a validated server flow.

### Tenant context

Tenant context is established from an organization membership, never from a user-controlled tenant ID alone. Server code verifies membership and required permissions.

### Appointments

Appointment creation uses database-level locking and conflict checks. Working hours, breaks, holidays, staff availability, service duration, and overlapping appointments must be considered.

### Automation

Automation records use explicit triggers, conditions, actions, execution logs, error records, and idempotency keys. Retriable jobs must be isolated and observable.

## 6. Security baseline

- Enable RLS on every tenant-owned table.
- Never expose Supabase service-role keys to client code.
- Validate and normalize all inputs in Server Actions and route handlers.
- Log security-sensitive actions in `audit_logs`.
- Add CSRF protections and secure cookies where applicable.
- Avoid broad `service_role` use and use only from narrowly scoped server code.

## 7. Initial design boundaries

Phase 1 includes project setup, public landing page, authentication, organization creation, and no fictional dashboard data. Notification providers, n8n, payment providers, and AI providers are integration points to implement later, not simulated controls.
