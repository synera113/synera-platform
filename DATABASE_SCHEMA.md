# SYNERA — Database Schema Plan

> This is an implementation plan, not an applied migration. Migration SQL will be reviewed and tested before Phase 2 or later tenant modules are implemented.

## Planned tables

| Table | Purpose |
|---|---|
| `organizations` | Tenant account and organization settings |
| `profiles` | Supabase-authenticated user profile |
| `organization_members` | Organization membership and assigned role |
| `roles` | Platform and organization roles |
| `permissions` | Granular permission definitions |
| `role_permissions` | Role-to-permission mapping |
| `customers` | Tenant customer records |
| `employees` | Staff profile and employment details |
| `services` | Services offered by a tenant |
| `appointments` | Appointment records |
| `business_hours` | Regular working hours |
| `staff_availability` | Staff hours and breaks |
| `business_closures` | Holidays and closure periods |
| `notifications` | In-app, email, WhatsApp, and SMS delivery records |
| `automation_rules` | Automation configuration |
| `automation_logs` | Automation execution and failures |
| `subscriptions` | Tenant subscription state |
| `payments` | Future payment records |
| `audit_logs` | Security-sensitive and administrative events |

## Tenant isolation

Every tenant-owned table should contain `tenant_id uuid NOT NULL REFERENCES organizations(id)`. RLS should require both authentication and a valid organization membership.

A helper function must test membership and role/permission without trusting request-supplied tenant context. `WITH CHECK` policies must enforce tenant isolation on inserts and updates.

## Appointment integrity

The final implementation should use a transaction and database constraint strategy appropriate to PostgreSQL. The intended safeguards are:

- Validate business opening hours and closures.
- Validate staff availability and service duration.
- Lock or serially protect the relevant staff/time range.
- Reject overlapping active appointments.
- Return a typed conflict result to the application.

A plain application-only overlap query is not sufficient.

## Automation safety

Automation execution records should use unique idempotency keys per logical action. Failed jobs should retain a retry count and last error. Sensitive actions require explicit permission and, where applicable, owner approval.

## Migration and testing

- Store all schema changes in timestamped Supabase migration files.
- Use reversible migrations where practical.
- Test cross-tenant reads, writes, updates, and deletes.
- Test role/permission denial and appointment conflict behavior.
