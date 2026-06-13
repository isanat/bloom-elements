# Task 6: Brand Audit & Localization Fixes

## Agent: Brand Audit Fix Agent
## Task ID: 6
## Date: 2025-03-05

## Summary

Applied comprehensive brand and localization fixes across the Evyra codebase per the task specification. All PT-BR → PT-PT terminology, brand color (#3B82F6 → #2F6F6D), domain (evyra.pt/evyra.site → evyra.eu), pricing (€25→€35, 15%→10%), and terminology corrections have been applied.

## Files Modified

### 1. `src/lib/services/email-templates.ts` (CRITICAL)
- **Comment**: "Bloom design tokens" → "Evyra design tokens"
- **Colors**: `#3B82F6` → `#2F6F6D` (6 occurrences), `#16A34A` → `#5AE4A0` (6 occurrences), `#F7F9FB` → `#FAF9F6` (3 occurrences), `#EFF6FF` → `#F0FDF4` (1 occurrence)
- **Tagline**: "O cuidado, organizado." → "Saúde que vem até si."
- **Domain**: `evyra.pt` → `evyra.eu`
- **PT-BR fixes**: "Redefinir" → "Repor", "redefinição" → "reposição", "contato" → "contacto", "Aguardando" → "A aguardar"

### 2. `src/lib/services/email.ts`
- **Colors**: `#3B82F6` → `#2F6F6D`, `#16A34A` → `#5AE4A0`, `#F7F9FB` → `#F0FDF4`
- **Domain**: `evyra.pt` → `evyra.eu` (2 occurrences: SMTP_FROM default, comment)

### 3. `src/components/terms/terms-acceptance.tsx` (CRITICAL)
- **Pricing**: "€25" → "€35", "15%" → "10%"
- **PT-BR fixes**: "conecta" → "liga", "conexão" → "ligação", "Contato" → "Contacto", "Endereço" → "Morada", "Contatar diretamente" → "Contactar directamente", "Registradas" → "Registadas"
- **Payment processor**: "Stripe" → "Easypay e Stripe"
- **Domain**: `privacidade@evyra.pt` → `privacidade@evyra.eu`

### 4. `src/app/sitemap.ts`
- **Domain**: `evyra.site` → `evyra.eu`

### 5. `src/lib/auth-turso.ts`
- **Domain**: `admin@evyra.pt` → `admin@evyra.eu` (2 occurrences: constant + comment)

### 6. `src/app/api/contact/route.ts`
- **PT-BR**: "Contato" → "Contacto" (subject + heading)
- **Color**: `#2563eb` → `#2F6F6D`

### 7. `src/app/api/admin/auth/route.ts`
- **Domain**: `admin@evyra.pt` → `admin@evyra.eu`

### 8. `src/app/api/admin/users/[id]/route.ts`
- **Domain**: `@deleted.evyra.pt` → `@deleted.evyra.eu` (2 occurrences)

### 9. `src/app/api/admin/reset-admin-password/route.ts`
- **Domain**: `admin@evyra.pt` → `admin@evyra.eu`

### 10. `src/app/api/push/generate-vapid-keys.ts`
- **Domain**: `suporte@evyra.pt` → `suporte@evyra.eu`

### 11. `src/app/api/push/subscribe/route.ts`
- **Domain**: `suporte@evyra.pt` → `suporte@evyra.eu` (in comment)

### 12. `src/app/api/contracts/route.ts`
- **PT-BR**: "Você recebeu" → "Recebeu"

### 13. `src/app/api/contracts/[id]/weekly-approvals/[weekNumber]/approve/route.ts`
- **PT-BR**: "Você receberá" → "Receberá"
- **Fee**: `platformFeePercent` hardcoded `15` → `10`

### 14. `src/app/api/contracts/[id]/weekly-approvals/route.ts`
- **Fee**: `platformFeePct = 15` → `10`

### 15. `src/app/layout.tsx`
- **Verified** already correct: `evyra.eu` in OG tags ✅

### Bonus fixes (found while searching):
- `src/app/api/admin/fix-role/route.ts`: `admin@evyra.pt` → `admin@evyra.eu`
- `src/app/api/settings/route.ts`: Default fee 15% → 10%
- `src/app/api/admin/settings/route.ts`: Default fee 15% → 10%, fallback 15 → 10
- `src/app/app/contracts/[id]/page.tsx`: Fallback fee 15 → 10
- `src/app/app/contracts/new/page.tsx`: Fallback fee 15 → 10

## Verification

- Grep confirmed zero remaining `evyra.pt` or `evyra.site` references in `src/`
- Grep confirmed zero remaining `#3B82F6`, `#2563eb`, `#16A34A`, `#F7F9FB`, `#EFF6FF` in `src/`
- Grep confirmed zero remaining "Redefinir", "Você recebeu", "Você receberá" in `src/`
