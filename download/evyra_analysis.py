#!/usr/bin/env python3
"""
Evyra Platform — Análise Completa do Sistema
ReportLab PDF Generation Script
"""

import os
from reportlab.lib import colors
from reportlab.lib.pagesizes import A4
from reportlab.lib.styles import getSampleStyleSheet, ParagraphStyle
from reportlab.lib.units import mm, cm
from reportlab.lib.enums import TA_LEFT, TA_CENTER, TA_JUSTIFY
from reportlab.platypus import (
    SimpleDocTemplate, Paragraph, Spacer, Table, TableStyle,
    PageBreak, KeepTogether, HRFlowable, ListFlowable, ListItem,
)
from reportlab.platypus.flowables import Flowable
from reportlab.lib.colors import HexColor

# ━━ Color Palette ━━
ACCENT       = HexColor('#2d95b7')
TEXT_PRIMARY  = HexColor('#23221f')
TEXT_MUTED    = HexColor('#7b776f')
BG_SURFACE   = HexColor('#e1ddd6')
BG_PAGE      = HexColor('#f2f1ef')
DANGER       = HexColor('#dc3545')
WARNING      = HexColor('#e67e22')
SUCCESS      = HexColor('#27ae60')

TABLE_HEADER_COLOR = ACCENT
TABLE_HEADER_TEXT  = colors.white
TABLE_ROW_EVEN     = colors.white
TABLE_ROW_ODD      = BG_SURFACE

# ━━ Page Setup ━━
PAGE_W, PAGE_H = A4
MARGIN = 2 * cm

# ━━ Styles ━━
styles = getSampleStyleSheet()

styles.add(ParagraphStyle(
    'CoverTitle', parent=styles['Title'],
    fontSize=28, leading=34, textColor=ACCENT,
    spaceAfter=6, fontName='Helvetica-Bold',
    alignment=TA_CENTER,
))
styles.add(ParagraphStyle(
    'CoverSubtitle', parent=styles['Normal'],
    fontSize=14, leading=18, textColor=TEXT_MUTED,
    spaceAfter=20, fontName='Helvetica',
    alignment=TA_CENTER,
))
styles.add(ParagraphStyle(
    'SectionTitle', parent=styles['Heading1'],
    fontSize=18, leading=24, textColor=ACCENT,
    spaceBefore=24, spaceAfter=10, fontName='Helvetica-Bold',
    borderPadding=(0, 0, 4, 0),
))
styles.add(ParagraphStyle(
    'SubSection', parent=styles['Heading2'],
    fontSize=14, leading=18, textColor=TEXT_PRIMARY,
    spaceBefore=16, spaceAfter=8, fontName='Helvetica-Bold',
))
styles.add(ParagraphStyle(
    'SubSubSection', parent=styles['Heading3'],
    fontSize=12, leading=16, textColor=ACCENT,
    spaceBefore=10, spaceAfter=6, fontName='Helvetica-Bold',
))
styles.add(ParagraphStyle(
    'BodyText2', parent=styles['Normal'],
    fontSize=10, leading=15, textColor=TEXT_PRIMARY,
    spaceAfter=8, fontName='Helvetica',
    alignment=TA_JUSTIFY,
))
styles.add(ParagraphStyle(
    'BulletText', parent=styles['Normal'],
    fontSize=10, leading=14, textColor=TEXT_PRIMARY,
    spaceAfter=4, fontName='Helvetica',
    leftIndent=16, bulletIndent=6,
    alignment=TA_LEFT,
))
styles.add(ParagraphStyle(
    'SmallText', parent=styles['Normal'],
    fontSize=8, leading=11, textColor=TEXT_MUTED,
    fontName='Helvetica',
))
styles.add(ParagraphStyle(
    'TableCell', parent=styles['Normal'],
    fontSize=9, leading=12, textColor=TEXT_PRIMARY,
    fontName='Helvetica',
))
styles.add(ParagraphStyle(
    'TableHeader', parent=styles['Normal'],
    fontSize=9, leading=12, textColor=TABLE_HEADER_TEXT,
    fontName='Helvetica-Bold',
))
styles.add(ParagraphStyle(
    'CriticalItem', parent=styles['Normal'],
    fontSize=10, leading=14, textColor=DANGER,
    fontName='Helvetica-Bold',
    spaceAfter=4, leftIndent=16, bulletIndent=6,
))
styles.add(ParagraphStyle(
    'WarningItem', parent=styles['Normal'],
    fontSize=10, leading=14, textColor=WARNING,
    fontName='Helvetica-Bold',
    spaceAfter=4, leftIndent=16, bulletIndent=6,
))
styles.add(ParagraphStyle(
    'SuccessItem', parent=styles['Normal'],
    fontSize=10, leading=14, textColor=SUCCESS,
    fontName='Helvetica-Bold',
    spaceAfter=4, leftIndent=16, bulletIndent=6,
))

# ━━ Helper Functions ━━
def section(title):
    return Paragraph(title, styles['SectionTitle'])

def subsection(title):
    return Paragraph(title, styles['SubSection'])

def subsubsection(title):
    return Paragraph(title, styles['SubSubSection'])

def body(text):
    return Paragraph(text, styles['BodyText2'])

def bullet(text, style='BulletText'):
    return Paragraph(f"\u2022 {text}", styles[style])

def critical(text):
    return Paragraph(f"\u2022 {text}", styles['CriticalItem'])

def warning(text):
    return Paragraph(f"\u2022 {text}", styles['WarningItem'])

def success(text):
    return Paragraph(f"\u2022 {text}", styles['SuccessItem'])

def spacer(h=6):
    return Spacer(1, h)

def hr():
    return HRFlowable(width="100%", thickness=0.5, color=ACCENT, spaceAfter=8, spaceBefore=4)

def make_table(headers, rows, col_widths=None):
    """Create a styled table with header and rows."""
    available = PAGE_W - 2 * MARGIN
    if col_widths is None:
        n = len(headers)
        col_widths = [available / n] * n

    header_row = [Paragraph(h, styles['TableHeader']) for h in headers]
    data_rows = []
    for row in rows:
        data_rows.append([Paragraph(str(c), styles['TableCell']) for c in row])

    all_data = [header_row] + data_rows
    t = Table(all_data, colWidths=col_widths, repeatRows=1)

    style_cmds = [
        ('BACKGROUND', (0, 0), (-1, 0), TABLE_HEADER_COLOR),
        ('TEXTCOLOR', (0, 0), (-1, 0), TABLE_HEADER_TEXT),
        ('FONTNAME', (0, 0), (-1, 0), 'Helvetica-Bold'),
        ('FONTSIZE', (0, 0), (-1, 0), 9),
        ('BOTTOMPADDING', (0, 0), (-1, 0), 8),
        ('TOPPADDING', (0, 0), (-1, 0), 8),
        ('GRID', (0, 0), (-1, -1), 0.5, colors.Color(0.8, 0.8, 0.8)),
        ('VALIGN', (0, 0), (-1, -1), 'TOP'),
        ('LEFTPADDING', (0, 0), (-1, -1), 6),
        ('RIGHTPADDING', (0, 0), (-1, -1), 6),
        ('TOPPADDING', (0, 1), (-1, -1), 5),
        ('BOTTOMPADDING', (0, 1), (-1, -1), 5),
    ]
    # Alternating row colors
    for i in range(1, len(all_data)):
        if i % 2 == 0:
            style_cmds.append(('BACKGROUND', (0, i), (-1, i), TABLE_ROW_ODD))
        else:
            style_cmds.append(('BACKGROUND', (0, i), (-1, i), TABLE_ROW_EVEN))

    t.setStyle(TableStyle(style_cmds))
    return t


# ━━ Build Document ━━
output_path = '/home/z/my-project/download/analise-evyra-site.pdf'

doc = SimpleDocTemplate(
    output_path,
    pagesize=A4,
    leftMargin=MARGIN, rightMargin=MARGIN,
    topMargin=MARGIN, bottomMargin=MARGIN,
    title='Analise Completa do Sistema Evyra',
    author='Z.ai',
    subject='Estudo arquitetural, funcional e de seguranca da plataforma Evyra',
)

story = []

# ════════════════════════════════════════════════════════════════
# COVER
# ════════════════════════════════════════════════════════════════
story.append(Spacer(1, 80))
story.append(Paragraph("ANALISE COMPLETA", styles['CoverTitle']))
story.append(Paragraph("DO SISTEMA EVYRA", styles['CoverTitle']))
story.append(Spacer(1, 20))
story.append(HRFlowable(width="60%", thickness=2, color=ACCENT, spaceAfter=16, spaceBefore=8))
story.append(Paragraph("evyra.site — Plataforma de Saude Domiciliaria", styles['CoverSubtitle']))
story.append(Spacer(1, 30))
story.append(Paragraph("Estudo arquitetural, funcional, de seguranca e de melhoria", styles['CoverSubtitle']))
story.append(Paragraph("Repositorio: github.com/isanat/careapp", styles['CoverSubtitle']))
story.append(Spacer(1, 40))
story.append(Paragraph("Data: 14 de Junho de 2026", styles['SmallText']))
story.append(Paragraph("Gerado por Z.ai", styles['SmallText']))
story.append(PageBreak())

# ════════════════════════════════════════════════════════════════
# SUMARIO
# ════════════════════════════════════════════════════════════════
story.append(section("Sumario"))
toc_items = [
    "1. Visao Geral da Plataforma",
    "2. Arquitetura e Stack Tecnologico",
    "3. Modelos de Dados (35 Modelos)",
    "4. Funcionalidades Implementadas",
    "5. Sistema de Autenticacao e Autorizacao",
    "6. Arquitetura de Pagamentos",
    "7. Sistema KYC (Verificacao de Identidade)",
    "8. Painel Administrativo",
    "9. Estado do Site em Producao",
    "10. Analise de Seguranca — Falhas Criticas",
    "11. Pontos de Dor e Gargalos",
    "12. Sugestoes de Melhoria",
    "13. Roadmap — O Que Falta Implementar",
    "14. Conclusao e Recomendacoes Prioritarias",
]
for item in toc_items:
    story.append(Paragraph(item, styles['BodyText2']))
story.append(Spacer(1, 12))
story.append(hr())

# ════════════════════════════════════════════════════════════════
# 1. VISAO GERAL
# ════════════════════════════════════════════════════════════════
story.append(section("1. Visao Geral da Plataforma"))

story.append(body(
    "O <b>Evyra</b> (evyra.site) e uma plataforma portuguesa de saude-tecnologia que conecta "
    "familias a profissionais de saude verificados que prestam cuidados ao domicilio. O slogam da "
    "plataforma e \"Saude que vem ate si\" e o publico-alvo principal sao membros da diaspora "
    "portuguesa espalhada pela Europa (Franca, Reino Unido, Alemanha, Suica) que tem pais idosos "
    "em Portugal e necessitam de coordenar e monitorizar os cuidados de saude a distancia."
))

story.append(body(
    "A plataforma atua como intermediaria entre familias (que contratam) e profissionais de saude "
    "(que prestam servicos), oferecendo verificacao de identidade, contratos digitais, pagamentos "
    "seguros em escrow via Stripe, e confirmacao de presenca via QR code. O modelo de receita "
    "baseia-se numa taxa de ativacao de 35 EUR para familias, uma taxa de contrato de 5 EUR por "
    "contrato, e uma comissao de 10-15% sobre cada pagamento de servico. O registo e gratuito "
    "para profissionais de saude."
))

story.append(subsection("1.1 Dados Cadastrais"))
story.append(make_table(
    ["Campo", "Valor"],
    [
        ["Dominio", "evyra.site (alternativo: evyra.eu)"],
        ["Idioma", "Portugues (pt_PT)"],
        ["Mercados", "Portugal, Espanha, Italia — expansao Europa"],
        ["Email", "contacto@evyra.eu / suporte@evyra.eu"],
        ["Morada", "Av. da Liberdade, 123, 1250-096 Lisboa"],
        ["Telefone", "+351 912 345 678 (possivel placeholder)"],
        ["Copyright", "2026 Evyra"],
    ],
    col_widths=[4*cm, 12.5*cm],
))
story.append(spacer(8))

story.append(subsection("1.2 Estado Atual"))
story.append(body(
    "A plataforma encontra-se em fase muito inicial de lancamento. A homepage exibe contadores "
    "com valores zero (0+ profissionais, 0 paises, 0% satisfacao), enquanto a pagina \"Sobre\" "
    "contraditoriamente afirma \"50+ Profissionais verificados\" e \"100+ Familias atendidas\". "
    "Nao existe qualquer presenca nos motores de busca — pesquisas por \"evyra.site\" ou "
    "\"evyra saude\" retornam zero resultados organicos. A plataforma ainda nao possui usuarios "
    "reais e necessita de esforco significativo de go-to-market."
))

# ════════════════════════════════════════════════════════════════
# 2. ARQUITETURA E STACK
# ════════════════════════════════════════════════════════════════
story.append(section("2. Arquitetura e Stack Tecnologico"))

story.append(subsection("2.1 Frontend"))
story.append(make_table(
    ["Tecnologia", "Versao", "Uso"],
    [
        ["Next.js", "16.1.1", "Framework principal (App Router, SSR/SSG)"],
        ["React", "19.0.0", "UI library"],
        ["Tailwind CSS", "4.x", "Styling utility-first"],
        ["Radix UI", "varios", "Componentes acessiveis (20+ pacotes)"],
        ["Framer Motion", "12.23", "Animacoes e transicoes"],
        ["shadcn/ui", "custom", "Design system (Bloom customizado)"],
        ["Recharts", "2.15", "Graficos no painel admin"],
        ["next-themes", "0.4.6", "Tema claro/escuro"],
        ["Zustand", "5.0.6", "State management"],
    ],
    col_widths=[3.5*cm, 2.5*cm, 10.5*cm],
))
story.append(spacer(8))

story.append(subsection("2.2 Backend"))
story.append(make_table(
    ["Tecnologia", "Versao", "Uso"],
    [
        ["Next.js API Routes", "16.1.1", "API REST (90+ endpoints)"],
        ["Prisma ORM", "6.11.1", "ORM + migracoes"],
        ["PostgreSQL", "16", "Banco de dados principal"],
        ["NextAuth.js", "4.24.11", "Autenticacao JWT"],
        ["Stripe", "20.3.1", "Pagamentos + escrow + Connect"],
        ["Easypay", "custom", "MB Way, Multibanco, CC (Portugal)"],
        ["Didit (KYC)", "custom", "Verificacao de identidade"],
        ["Socket.IO", "4.8.3", "Chat em tempo real (micro-servico)"],
        ["Agora RTC", "4.24", "Video-chamadas para entrevistas"],
        ["Jitsi Meet", "1.4.4", "Video-conferencia alternativa"],
        ["Nodemailer", "8.0.1", "Envio de emails"],
    ],
    col_widths=[3.5*cm, 2.5*cm, 10.5*cm],
))
story.append(spacer(8))

story.append(subsection("2.3 Infraestrutura"))
story.append(make_table(
    ["Componente", "Detalhes"],
    [
        ["Servidor", "VPS (164.68.126.14), 11GB RAM, 194GB disco, 61% usado"],
        ["Orquestracao", "Coolify (PaaS self-hosted) na porta 8000"],
        ["Container App", "evyra-app (Next.js standalone, porta 3000)"],
        ["Container Chat", "evyra-chat (Bun, porta 3003)"],
        ["Container DB", "evyra-postgres (porta 5437 externa)"],
        ["Reverse Proxy", "Coolify Proxy (portas 80, 443, 8080)"],
        ["Caddy", "Configurado para WebSocket e chat service"],
        ["Rede Docker", "evyra-network (bridge entre containers)"],
        ["Dockerfile", "Multi-stage (deps, build, runner), non-root user"],
        ["Volumes", "evyra-uploads + evyra-uploads-public (persistentes)"],
    ],
    col_widths=[3.5*cm, 13*cm],
))
story.append(spacer(8))

story.append(body(
    "O stack e moderno e bem escolhido. A combinacao Next.js 16 + React 19 + Prisma + PostgreSQL "
    "e solida e escalavel. A escolha de Coolify como PaaS self-hosted reduz custos operacionais "
    "em comparacao com Vercel/AWS, mas exige mais manutencao manual. O micro-servico de chat "
    "em Bun separa corretamente responsabilidades de tempo real da aplicacao principal."
))

# ════════════════════════════════════════════════════════════════
# 3. MODELOS DE DADOS
# ════════════════════════════════════════════════════════════════
story.append(section("3. Modelos de Dados (35 Modelos)"))

story.append(body(
    "O schema Prisma define 12 enums e 35 modelos ativos (mais 6 comentados para a Fase 2). "
    "A base de dados e PostgreSQL com migracoes gerenciadas pelo Prisma. Abaixo os modelos "
    "principais organizados por dominio funcional."
))

story.append(subsection("3.1 Enums (12)"))
story.append(make_table(
    ["Enum", "Valores", "Proposito"],
    [
        ["UserRole", "FAMILY, CAREGIVER, ADMIN", "Classificacao primaria do utilizador"],
        ["AdminRole", "SUPER_ADMIN, ADMIN, SUPPORT, MODERATOR, ANALYST", "Permissoes granulares de admin"],
        ["UserStatus", "PENDING, ACTIVE, SUSPENDED, INACTIVE", "Ciclo de vida da conta"],
        ["VerificationStatus", "UNVERIFIED, PENDING, VERIFIED, REJECTED", "Verificacao de identidade"],
        ["PaymentType", "ACTIVATION, CONTRACT_FEE, SERVICE_PAYMENT, VISIBILITY_BOOST", "Categorias de pagamento"],
        ["PaymentStatus", "PENDING, PROCESSING, COMPLETED, FAILED, REFUNDED", "Ciclo de vida do pagamento"],
        ["PaymentProvider", "STRIPE, EASYPAY, BANK_TRANSFER, INTERNAL", "Gateway de pagamento"],
        ["ContractStatus", "DRAFT ate COMPLETED/CANCELLED/DISPUTED (8 estados)", "Ciclo de vida do contrato"],
        ["ServiceType", "18 tipos (PERSONAL_CARE a WOUND_CARE)", "Taxonomia de servicos"],
        ["DemandStatus", "ACTIVE, CLOSED, PAUSED, EXPIRED", "Estados do marketplace"],
        ["VisibilityPackage", "NONE, BASIC, PREMIUM, URGENT", "Tiers de promocao de demandas"],
        ["ExperienceLevel", "BEGINNER, INTERMEDIATE, ADVANCED, EXPERT", "Qualificacao do cuidador"],
    ],
    col_widths=[3.5*cm, 5.5*cm, 7.5*cm],
))
story.append(spacer(8))

story.append(subsection("3.2 Modelos por Dominio"))

story.append(subsubsection("Usuarios e Perfis"))
story.append(make_table(
    ["Modelo", "Campos-Chave", "Proposito"],
    [
        ["User", "email, phone, passwordHash, role, status, kycFields", "Entidade central do utilizador"],
        ["ProfileFamily", "elderName, elderAge, medicalConditions, emergencyContacts", "Perfil do familiar/idoso"],
        ["ProfileCaregiver", "title, bio, hourlyRateEur, certifications, IBAN", "Perfil do profissional"],
        ["AdminUser", "adminRole, customPermissions, 2FA fields", "Perfis administrativos"],
    ],
    col_widths=[3.5*cm, 6.5*cm, 6.5*cm],
))
story.append(spacer(6))

story.append(subsubsection("Contratos e Pagamentos"))
story.append(make_table(
    ["Modelo", "Campos-Chave", "Proposito"],
    [
        ["Contract", "familyUserId, caregiverUserId, hourlyRateEur, scheduleJson, weeklyPaymentEnabled", "Acordos de servico"],
        ["ContractAcceptance", "IP, userAgent, timestamps (ambas as partes)", "Prova legal de aceite"],
        ["Payment", "type, status, provider, amountEurCents, platformFee", "Registos de pagamento"],
        ["EscrowPayment", "totalAmountCents, platformFeeCents, transferId", "Pagamentos em escrow Stripe"],
        ["WeeklyPaymentApproval", "weekNumber, weeklyAmountCents, familyDecision", "Aprovacao semanal de pagamentos"],
        ["CaregiverTransfer", "grossAmount, platformFeePercent, netAmount, stripeTransferId", "Historico de transferencias"],
        ["Receipt", "receiptNumber (RC-YYYY-NNNNNN), NIFs", "Recibos fiscais"],
        ["RecurringPayment", "stripeSubscriptionId, billingDay, period", "Pagamentos recorrentes"],
    ],
    col_widths=[3.8*cm, 6.2*cm, 6.5*cm],
))
story.append(spacer(6))

story.append(subsubsection("Marketplace e Demandas"))
story.append(make_table(
    ["Modelo", "Campos-Chave", "Proposito"],
    [
        ["Demand", "familyUserId, title, serviceTypes, budgetEurCents, visibilityPackage", "Demandas de cuidados"],
        ["DemandView", "demandId, caregiverId, viewedAt", "Analytics de visualizacoes"],
        ["VisibilityPurchase", "package, amountEurCents, expiresAt", "Compras de boost de visibilidade"],
        ["Proposal", "message, proposedHourlyRate, estimatedStartDate, status", "Propostas de cuidadores"],
        ["Interview", "scheduledAt, videoRoomUrl, questionnaireJson", "Entrevistas por video"],
    ],
    col_widths=[3.8*cm, 6.2*cm, 6.5*cm],
))
story.append(spacer(6))

story.append(subsubsection("Comunicacao e Notificacoes"))
story.append(make_table(
    ["Modelo", "Campos-Chave", "Proposito"],
    [
        ["ChatRoom/ChatMessage", "type, referenceType, message types (text/image/file/system)", "Sistema de mensagens"],
        ["Notification", "type, title, message, email/push delivery tracking", "Alertas ao utilizador"],
        ["PresenceConfirmation", "qrCode (24h validity), scannedByUserId, status", "Check-in via QR code"],
        ["Review", "rating (1-5), sub-ratings (4 dimensoes), moderation", "Avaliacoes mutuas"],
    ],
    col_widths=[3.8*cm, 6.2*cm, 6.5*cm],
))
story.append(spacer(6))

story.append(subsubsection("Administracao e Compliance"))
story.append(make_table(
    ["Modelo", "Campos-Chave", "Proposito"],
    [
        ["AdminAction", "action, entityType, entityId, oldValue/newValue JSON, IP", "Trilha de auditoria"],
        ["SupportTicket", "categories, priorities, assignment, resolution tracking", "Sistema de suporte"],
        ["ModerationQueue", "entityType, reason, status, reviewedBy", "Moderacao de conteudo"],
        ["TermsAcceptance", "termsType, version, IP, userAgent", "Prova de aceite legal"],
        ["ImpersonationLog", "adminUserId, targetUserId, reason, duration", "Log de impersonacao admin"],
        ["PlatformSettings", "activationCostEurCents(3500), platformFeePercent(15)", "Configuracao dinamica"],
        ["SiteSettings", "logoUrl, faviconUrl, heroImageUrl", "Branding do site"],
        ["PlatformMetric", "metricKey, metricValue, period", "Metricas analiticas"],
    ],
    col_widths=[3.8*cm, 6.2*cm, 6.5*cm],
))
story.append(spacer(8))

story.append(body(
    "O schema e abrangente e bem estruturado, cobrindo todo o ciclo de vida da plataforma — desde "
    "o registo e verificacao ate ao pagamento e conformidade legal. No entanto, os modelos da Fase 2 "
    "(CaregiverWallet, CaregiverWithdrawal, FamilyPayment, FamilyCredit, StripePaymentHold) estao "
    "comentados, o que significa que partes importantes do fluxo financeiro ainda nao estao totalmente "
    "implementadas no ORM. Atualmente, referencias como stripePaymentHoldId em WeeklyPaymentApproval "
    "usam strings em vez de chaves estrangeiras, o que pode causar inconsistencias de dados."
))

# ════════════════════════════════════════════════════════════════
# 4. FUNCIONALIDADES
# ════════════════════════════════════════════════════════════════
story.append(section("4. Funcionalidades Implementadas"))

story.append(subsection("4.1 Landing Page e Paginas Publicas"))
story.append(body(
    "A plataforma possui uma landing page cinematografica com scroll-linked animations, secoes de "
    "servicos ao domicilio (Enfermagem, Fisioterapia, Apoio a Dependentes, Educacao Fisica, "
    "Terapia Ocupacional, Auxiliar de Enfermagem), roadmap de teleconsulta (Psicologia, Nutricao, "
    "Medicina Geral marcados como \"em breve\"), pilares de confianca, estatisticas animadas, "
    "pricing cards e CTA final. Todas as paginas publicas carregam corretamente: /sobre, "
    "/como-funciona, /cuidadores, /familias, /profissionais, /precos, /faq, /ajuda, /contato, "
    "/seguranca, /blog, /termos, /privacidade, /cookies, /gdpr."
))

story.append(subsection("4.2 Sistema de Registo e Onboarding"))
story.append(bullet("Registo com escolha de perfil (Familia ou Profissional)"))
story.append(bullet("Validacao Zod com mensagens de erro em portugues"))
story.append(bullet("CAPTCHA Cloudflare Turnstile (opcional se nao configurado)"))
story.append(bullet("Aceite obrigatorio de termos (uso, privacidade, mediacao)"))
story.append(bullet("Verificacao de email com token de 24h"))
story.append(bullet("Criacao automatica de perfil (ProfileFamily ou ProfileCaregiver)"))
story.append(bullet("Checagem de duplicados: email unico + telefone unico"))
story.append(spacer(6))

story.append(subsection("4.3 Dashboard Role-Based"))
story.append(body(
    "O dashboard renderiza de forma diferente para familias e profissionais. Para familias, "
    "inclui checklist de onboarding (pagamento, KYC, perfil), hero com estatisticas, contratos "
    "recentes, acessos rapidos a cuidados (6 cards), beneficios da plataforma e atividade recente. "
    "Para profissionais, inclui hero com ganhos/propostas/ratings, acoes pendentes, propostas "
    "pendentes e atividade recente."
))

story.append(subsection("4.4 Marketplace de Demandas"))
story.append(body(
    "Sistema completo onde familias criam demandas de cuidados e opcionalmente pagam por boost "
    "de visibilidade. Tres pacotes disponiveis: BASIC (3 EUR/7 dias), PREMIUM (8 EUR/30 dias), "
    "URGENTE (15 EUR/3 dias). O algoritmo de ranking prioriza: URGENTE > PREMIUM > BASIC > NONE, "
    "seguido por proximidade de expiracao e recencia. Inclui analytics em tempo real (viewCount, "
    "proposalCount, conversionRate). Fase 2 completa; Fase 3 (Stripe checkout para boosts e "
    "notificacoes) ainda pendente."
))

story.append(subsection("4.5 Sistema de Contratos"))
story.append(bullet("Ciclo de vida completo: DRAFT > PENDING_ACCEPTANCE > PENDING_PAYMENT > ACTIVE > COMPLETED"))
story.append(bullet("Aceitacao por ambas as partes com registo de IP e user agent"))
story.append(bullet("Contraproposta suportada (COUNTER_PROPOSED)"))
story.append(bullet("Aprovacao semanal de pagamentos (WeeklyPaymentApproval)"))
story.append(bullet("Sistema de disputas integrado"))
story.append(bullet("Auto-renovacao (planejado, via cron)"))
story.append(spacer(6))

story.append(subsection("4.6 Chat em Tempo Real"))
story.append(body(
    "Micro-servico separado (Bun, porta 3003) com Socket.IO, acessado via Caddy com suporte "
    "WebSocket. Tipos de sala: direta, contrato e suporte. Mensagens suportam texto, imagem, "
    "arquivo e mensagens de sistema. Leitura tracking por participante."
))

story.append(subsection("4.7 Sistema QR Code"))
story.append(body(
    "Implementacao completa com 3 endpoints de API (gerar QR, escanear QR, historico), 3 "
    "componentes React (QRGenerator com timer de contagem regressiva, QRScanner com camera "
    "e fallback manual, QRHistory com tabela e exportacao CSV), rate limiting (5/hora geracao, "
    "10/min escaneamento), trilha de auditoria e formato validado (EVY-{16 chars})."
))

story.append(subsection("4.8 Entrevistas por Video"))
story.append(bullet("Integracao com Agora RTC SDK para video-chamadas"))
story.append(bullet("Integracao alternativa com Jitsi Meet para video-conferencia"))
story.append(bullet("Agendamento com questionnaireJson para ambas as partes"))
story.append(bullet("Rotas de API para CRUD de entrevistas"))
story.append(spacer(6))

story.append(subsection("4.9 Internacionalizacao"))
story.append(body(
    "Suporte a 4 idiomas: portugues (padrao), ingles, italiano e espanhol. Arquivo de traducoes "
    "completo (~90KB) com cobertura para navegacao, autenticacao, dashboard, contratos, pagamentos, "
    "busca de cuidadores, perfil, configuracoes, notificacoes e erros. Seletor de idioma presente "
    "na interface."
))

# ════════════════════════════════════════════════════════════════
# 5. AUTENTICACAO E AUTORIZACAO
# ════════════════════════════════════════════════════════════════
story.append(section("5. Sistema de Autenticacao e Autorizacao"))

story.append(subsection("5.1 Stack de Autenticacao"))
story.append(make_table(
    ["Componente", "Detalhes"],
    [
        ["Framework", "NextAuth.js 4.24 com estrategia JWT (nao sessoes em DB)"],
        ["Providers", "Google OAuth (condicional) + Credentials (email/senha)"],
        ["Sessao", "JWT custom claims: id, role, status"],
        ["Hashing", "bcrypt com 12 rounds"],
        ["CSRF", "Double-submit cookie com HMAC (Web Crypto API, Edge-compatible)"],
        ["Middleware", "Validacao JWT para rotas /app e /admin, verificacao de role"],
    ],
    col_widths=[3.5*cm, 13*cm],
))
story.append(spacer(8))

story.append(subsection("5.2 Fluxo de Login"))
story.append(body(
    "O login do administrador (admin@evyra.pt) e tratado de forma especial: auto-cria o admin "
    "se nao existir, reseta a senha se a senha padrao for submetida, e corrige o role se estiver "
    "errado. Sao tentados 3 caminhos de fallback: Prisma ORM, SQL via db-postgres, e forcar reset. "
    "Para utilizadores normais, o fluxo utiliza SQL via db-postgres com comparacao bcrypt e "
    "emissao de JWT. O callback JWT forca o role ADMIN para o email admin independentemente do "
    "estado do banco de dados."
))

story.append(subsection("5.3 RBAC — 5 Niveis de Admin"))
story.append(make_table(
    ["Role", "Capacidades"],
    [
        ["SUPER_ADMIN", "Acesso total, modificar taxas, gerir admins"],
        ["ADMIN", "A maioria das operacoes"],
        ["SUPPORT", "Leitura + suporte ao utilizador"],
        ["MODERATOR", "Moderacao de conteudo apenas"],
        ["ANALYST", "Apenas leitura + analytics"],
    ],
    col_widths=[3.5*cm, 13*cm],
))
story.append(spacer(6))

story.append(body(
    "O middleware garante que rotas /app requerem JWT valido e rotas /admin requerem role ADMIN. "
    "Utilizadores nao autenticados sao redirecionados para /auth/login com callbackUrl. Nao-admins "
    "em /admin sao redirecionados para /app/dashboard. A protegcao CSRF utiliza cookie assinado "
    "com HMAC (SameSite=Strict, 24h TTL, Secure em producao) comparado com header via comparacao "
    "timing-safe. Rotas de webhook e auth sao isentas de CSRF."
))

# ════════════════════════════════════════════════════════════════
# 6. ARQUITETURA DE PAGAMENTOS
# ════════════════════════════════════════════════════════════════
story.append(section("6. Arquitetura de Pagamentos"))

story.append(subsection("6.1 Principio Fundamental"))
story.append(body(
    "Evyra e INTERMEDIARIA, nao custodiante. O dinheiro nunca toca nos servidores da Evyra. "
    "Isto e fundamental para conformidade PSD2: Evyra = Software Provider (sem licenca necessaria), "
    "Stripe = Instituicao de Pagamento (regulada, asegurada ate 100K EUR). Responsabilidade zero "
    "da Evyra sobre fundos."
))

story.append(subsection("6.2 Tipos de Pagamento"))
story.append(make_table(
    ["Tipo", "Valor", "Fluxo", "Receita Evyra"],
    [
        ["Ativacao", "35 EUR", "Stripe Checkout > Webhook > PENDING>ACTIVE", "100%"],
        ["Taxa de Contrato", "5 EUR", "Stripe Checkout > Webhook > PENDING_PAYMENT>ACTIVE", "100%"],
        ["Boost Visibilidade", "3-15 EUR", "Stripe Checkout ou sandbox/mock", "100%"],
        ["Pagamento Servico", "Variavel", "Stripe Hold > Family Approve > Capture > Connect Transfer", "15% comissao"],
    ],
    col_widths=[3*cm, 2.5*cm, 6.5*cm, 4.5*cm],
))
story.append(spacer(8))

story.append(subsection("6.3 Fluxo de Escrow"))
story.append(body(
    "O pagamento de servico utiliza o modelo de escrow do Stripe com capture_method: manual. "
    "O fluxo e: (1) Familia autoriza pagamento via Stripe PaymentIntent com captura manual; "
    "(2) Stripe coloca fundos em hold; (3) Apos prestacao do servico, familia aprova semanalmente; "
    "(4) Evyra captura os fundos; (5) Evyra transfere 85% para o cuidador via Stripe Connect "
    "e retm 15% como comissao da plataforma. O sistema de aprovacao semanal permite que a familia "
    "approve ou dispute cada semana de servico individualmente."
))

story.append(subsection("6.4 Provider Easypay (Portugal)"))
story.append(body(
    "Para o mercado portugues, a integracao Easypay suporta MB Way, Multibanco (referencia), "
    "cartoes de credito/debito e debito direto. A verificacao de webhooks utiliza HMAC-SHA256 "
    "com comparacao timing-safe. Validacao de NIF portugues com checksum implementada no cliente."
))

story.append(subsection("6.5 Modo Sandbox"))
story.append(body(
    "Existe um toggle de sandbox no banco (PlatformSettings) que ativa pagamentos mock quando "
    "chaves Stripe estao ausentes ou placeholder. Em modo sandbox, pagamentos sao auto-completados "
    "e criados com provider INTERNAL. Guardas de producao rejeitam fallback mock em producao "
    "salvo sandbox explicitamente ativado. Isto e util para testes mas perigoso se acidentalmente "
    "deixado ligado em producao."
))

# ════════════════════════════════════════════════════════════════
# 7. SISTEMA KYC
# ════════════════════════════════════════════════════════════════
story.append(section("7. Sistema KYC (Verificacao de Identidade)"))

story.append(body(
    "A verificacao de identidade utiliza o Didit (didit.me), um provedor focado na UE. O fluxo e: "
    "(1) createKycSession() cria sessao via API Didit; (2) Utilizador completa verificacao na "
    "pagina hospedada do Didit; (3) Webhook Didit com assinatura HMAC-SHA256 verificada; "
    "(4) parseVerificationResult() calcula score de confianca (0-100): documento verificado (+50), "
    "liveness confirmada (+30), similaridade facial >80% (+20). Auto-aprovacao com similaridade "
    ">0.85 e liveness; auto-rejeicao com <0.5."
))

story.append(body(
    "Os dados KYC sao armazenados no modelo User: kycSessionId, kycSessionToken, kycCompletedAt, "
    "kycConfidence, kycBirthDate, kycNationality, kycDocumentIssueDate/ExpiryDate, kycDocumentIssuer, "
    "kycData (JSON completo). Existe modo de teste com kycTestMode booleano por utilizador e toggle "
    "global. Documentos aceites: passaporte, cartao de cidadao, carta de conducao, com idioma "
    "portugues como padrao."
))

# ════════════════════════════════════════════════════════════════
# 8. PAINEL ADMINISTRATIVO
# ════════════════════════════════════════════════════════════════
story.append(section("8. Painel Administrativo"))

story.append(body(
    "O painel administrativo possui arquitetura bem documentada com 5 roles de admin, mais de 10 "
    "paginas e dezenas de endpoints de API. Cada acao administrativa e registrada com utilizador, "
    "timestamp, IP e detalhes. O sistema suporta impersonacao de utilizadores (com log e motivo "
    "obrigatorio), moderacao de conteudo, gestao de disputas, reembolsos e metricas analiticas."
))

story.append(subsection("8.1 Paginas do Admin"))
story.append(make_table(
    ["Pagina", "Funcionalidades"],
    [
        ["Dashboard", "Estatisticas gerais, crescimento de utilizadores, receita"],
        ["Utilizadores", "Listagem, filtro, suspender, ativar, ver detalhes"],
        ["Cuidadores", "Verificar, rejeitar, destacar, gerir perfis"],
        ["Contratos", "Ver, cancelar, resolver disputas, forcar conclusao"],
        ["Pagamentos", "Aprovar, rejeitar, reembolsar, ver escrow"],
        ["Demandas", "Metricas do marketplace, moderacao"],
        ["Configuracoes", "Taxas, integracoes, modo teste, branding (logo/favicon)"],
        ["Logs", "Trilha de auditoria completa"],
        ["Suporte", "Tickets, atribuicao, resolucao"],
        ["Notificacoes", "Alertas administrativos por severidade"],
        ["Moderacao", "Fila de moderacao de conteudo"],
        ["Analytics", "Receita, utilizadores, visao geral"],
    ],
    col_widths=[3.5*cm, 13*cm],
))
story.append(spacer(8))

# ════════════════════════════════════════════════════════════════
# 9. ESTADO DO SITE EM PRODUCAO
# ════════════════════════════════════════════════════════════════
story.append(section("9. Estado do Site em Producao"))

story.append(subsection("9.1 Saude do Servidor"))
story.append(make_table(
    ["Metrica", "Valor", "Status"],
    [
        ["API Health Check", "{\"status\":\"ok\",\"database\":\"connected\"}", "OK"],
        ["Container evyra-app", "Up 4 dias", "OK"],
        ["Container evyra-chat", "Up 10 dias", "OK"],
        ["Container evyra-postgres", "Up 10 dias", "OK"],
        ["CPU/RAM", "11GB RAM, 3.9GB usados", "OK"],
        ["Disco", "194GB, 61% usado", "ATENCAO"],
        ["Swap", "4GB, 1.6GB em uso", "ATENCAO"],
    ],
    col_widths=[4*cm, 8*cm, 4.5*cm],
))
story.append(spacer(8))

story.append(subsection("9.2 Erros em Producao"))
story.append(body(
    "Os logs do container evyra-app mostram erros recorrentes de Prisma com SQL invalido para "
    "PostgreSQL. O erro e: <i>\"function date(unknown, unknown) does not exist\"</i> — indicando "
    "que o codigo utiliza a funcao DATE() do SQLite (que aceita 2 argumentos para adicionar dias "
    "a uma data) que nao existe em PostgreSQL (onde se usa DATE + INTERVAL). Este erro ocorre na "
    "rota de analytics admin (user growth), provavelmente migrada do Turso/SQLite sem adaptacao "
    "correta para PostgreSQL."
))

story.append(subsection("9.3 Problemas de Paginas"))
story.append(make_table(
    ["Problema", "Detalhes", "Severidade"],
    [
        ["Estatisticas zeradas", "Homepage mostra 0+ profissionais, 0 paises, 0% satisfacao", "ALTA"],
        ["Contradicao de metricas", "Pagina Sobre afirma 50+ profissionais e 100+ familias", "ALTA"],
        ["Zero presenca SEO", "Nenhum resultado em motores de busca", "ALTA"],
        ["Telefone placeholder", "+351 912 345 678 parece numero template", "MEDIA"],
        ["Paginas duplicadas", "/cuidadores e /profissionais com conteudo identico", "BAIXA"],
        ["Dominio inconsistente", "Site em evyra.site, OG tags referem evyra.eu", "MEDIA"],
    ],
    col_widths=[3.5*cm, 9*cm, 4*cm],
))
story.append(spacer(8))

# ════════════════════════════════════════════════════════════════
# 10. ANALISE DE SEGURANCA
# ════════════════════════════════════════════════════════════════
story.append(section("10. Analise de Seguranca — Falhas Criticas"))

story.append(subsection("10.1 Falhas Criticas (Vermelho)"))

story.append(critical("CREDENCIAIS ADMIN HARDCODED — A senha admin (EvyraAdmin@2024!) esta em codigo-fonte "
    "e no docker-entrypoint.sh. Qualquer pessoa com acesso ao repositorio pode logar como admin. "
    "O entrypoint cria o admin com esta senha em cada startup."))
story.append(spacer(4))

story.append(critical("CSRF COOKIE NAO HTTPONLY — Por design (JS precisa ler), o cookie CSRF fica "
    "exposto a XSS. Se qualquer vulnerabilidade XSS existir, a protecao CSRF e completamente "
    "bypassada."))
story.append(spacer(4))

story.append(critical("SQL INJECTION RISK — A maior parte da aplicacao usa SQL bruto via db-postgres.ts "
    "em vez de Prisma ORM. Se alguma query concatenar input do utilizador em vez de usar parametros, "
    "ha risco de SQL injection. Nenhuma auditoria sistematica foi feita nas 90+ rotas de API."))
story.append(spacer(4))

story.append(critical("ADMIN API KEY COMPARACAO NAO TIMING-SAFE — validateAdminKey() usa === em vez de "
    "crypto.timingSafeEqual(), permitindo ataques de timing para descobrir a chave API."))
story.append(spacer(8))

story.append(subsection("10.2 Falhas Altas (Laranja)"))

story.append(warning("DOIS ARQUIVOS MIDDLEWARE — middleware.ts (raiz) e src/middleware.ts com responsabilidades "
    "sobrepostas. O da raiz so trata sync-turso bypass; o de src trata tudo. Isto e confuso e pode "
    "levar a protecoes omitidas."))
story.append(spacer(4))

story.append(warning("DEV SECRET FALLBACK — 'dev-secret-for-build' usado como NextAuth secret fallback "
    "no middleware e auth config. Se NEXTAUTH_SECRET nao estiver definido, JWTs podem ser forjados."))
story.append(spacer(4))

story.append(warning("DB PUSH COM --ACCEPT-DATA-LOSS — O docker-entrypoint.sh executa prisma db push "
    "--accept-data-loss como safety net, o que pode silenciosamente descartar colunas em casos limite."))
story.append(spacer(4))

story.append(warning("SEM RATE LIMITING — Nenhuma limitacao de taxa visivel nos endpoints de login ou "
    "registo, permitindo ataques de forca bruta."))
story.append(spacer(4))

story.append(warning("CODIGO MORTO NO ENTRYPOINT — Linhas 177-190 (reset de senha admin) estao apos "
    "'exec node server.js' que substitui o processo, portanto nunca executam."))
story.append(spacer(8))

story.append(subsection("10.3 Falhas Medias (Amarelo)"))

story.append(bullet("Google OAuth desabilitado silenciosamente se env vars ausentes — nao documentado"))
story.append(bullet("Inconsistencia na taxa de comissao: schema diz 15%, constantes mencionam 10%"))
story.append(bullet("kycTestMode em registros de utilizadores de producao — precisa controle de acesso rigoroso"))
story.append(bullet("Sem reconciliacao automatica Stripe vs DB — risco de transacoes perdidas"))
story.append(bullet("MODO SANDBOX pode ser acidentalmente deixado ligado em producao"))
story.append(spacer(8))

story.append(subsection("10.4 Analise de Headers de Seguranca"))
story.append(body(
    "O next.config.ts implementa headers de seguranca solidos: X-Frame-Options (SAMEORIGIN), "
    "X-Content-Type-Options (nosniff), X-XSS-Protection, Referrer-Policy (strict-origin-when-cross-origin), "
    "HSTS com preload, CSP abrangente (com excecoes para Stripe, Jitsi e CDN), e Permissions-Policy "
    "restritiva. Isto e positivo e demonstra preocupacao com seguranca."
))

# ════════════════════════════════════════════════════════════════
# 11. PONTOS DE DOR E GARGALOS
# ════════════════════════════════════════════════════════════════
story.append(section("11. Pontos de Dor e Gargalos"))

story.append(subsection("11.1 Arquitetura de Banco de Dados"))
story.append(body(
    "O sistema utiliza um padrao de adaptador dual (db-postgres.ts) que oferece uma interface "
    "uniforme para PostgreSQL, Turso e SQLite local. Embora engenhoso, este adaptador introduz "
    "complexidade significativa: conversao de placeholders (? para $1, $2...), citacao de "
    "identificadores para PostgreSQL, e a possibilidade de bugs sutis na conversao entre dialetos "
    "SQL. O erro recorrente da funcao DATE() em producao e um exemplo direto deste problema. "
    "Alem disso, a maioria da aplicacao usa SQL bruto em vez de Prisma ORM, aumentando o risco "
    "de inconsistencias e SQL injection."
))

story.append(subsection("11.2 Perfil Monolitico"))
story.append(body(
    "A pagina de perfil e um componente monolitico de 1544 linhas. A analise documenta que faltam "
    "12 campos criticos para cuidadores (titulo profissional, experiencia, bio, certificacoes, "
    "disponibilidade) e 10+ campos para familias (condicoes de saude, medicamentos, restricoes "
    "alimentares, mobilidade). O nome da tab \"Idoso\" e confuso — deveria ser \"Familiar\". "
    "Nao ha suporte para multiplos dependentes. A estimativa de refactoring e de 200-280 horas."
))

story.append(subsection("11.3 Migracoes e Deployment"))
story.append(body(
    "O processo de migracao no Docker entrypoint e excessivamente defensivo: (1) Executa fix-enums.sql "
    "para converter colunas text para enum; (2) Tenta prisma migrate deploy; (3) Se falhar, faz "
    "baseline de TODAS as migracoes e tenta novamente; (4) Executa prisma db push --accept-data-loss "
    "como safety net. Este padrao sugere historico de problemas com migracoes e e um indicador de "
    "divida tecnica. O erro de funcao DATE() em producao indica que o codigo ainda contem SQL "
    "especifico do SQLite que nao foi adaptado para PostgreSQL."
))

story.append(subsection("11.4 Testes"))
story.append(body(
    "Existem 14 arquivos de teste, mas a qualidade e desigual. O arquivo boost-complete.test.ts "
    "contem 12 testes que sao todos stubs (expect(true).toBe(true)). Nao existem testes de "
    "componentes frontend. Os testes QR code sao apenas checklists manuais, nao automatizados. "
    "Alguns testes importam de @/lib/db-turso mas mockam @/lib/db-postgres — potencial mismatch "
    "de mocks. A cobertura de validacao (schemas.test.ts) nao existe."
))

story.append(subsection("11.5 Questoes Legais Bloqueantes"))
story.append(body(
    "Tres questoes legais exigem opiniao formal antes que as funcionalidades de QR code e "
    "historico de visitas possam prosseguir com seguranca: (1) Se a Evyra definir campos do "
    "historico de visitas (medicacao, alimentacao, etc.), isto constitui \"instrucao de trabalho\" "
    "sob o codigo laboral portugues, acionando a presuncao de relacao de emprego? (2) Se o "
    "historico regista medicacao incorreta e resulta em dano, quem e responsavel? (3) Um QR "
    "code gerado pela Evyra constitui \"supervisao de trabalho\"? Custo estimado: 500-1500 EUR. "
    "Prazo: 2-3 semanas."
))

# ════════════════════════════════════════════════════════════════
# 12. SUGESTOES DE MELHORIA
# ════════════════════════════════════════════════════════════════
story.append(section("12. Sugestoes de Melhoria"))

story.append(subsection("12.1 Seguranca (Prioridade Critica)"))
story.append(bullet("Mover credenciais admin para variaveis de ambiente com secret management"))
story.append(bullet("Implementar rate limiting em login e registo (express-rate-limit ou similar)"))
story.append(bullet("Usar crypto.timingSafeEqual() para comparacao de API keys"))
story.append(bullet("Auditar todas as queries SQL brutas para garantir uso de parametros"))
story.append(bullet("Consolidar middleware em um unico arquivo com logica clara"))
story.append(bullet("Adicionar httpOnly ao cookie CSRF ou usar header-based CSRF token"))
story.append(bullet("Remover dev-secret-for-build fallback em producao"))
story.append(spacer(6))

story.append(subsection("12.2 Banco de Dados"))
story.append(bullet("Migrar de SQL bruto para Prisma ORM onde possivel — reduz SQL injection risk"))
story.append(bullet("Corrigir funcoes SQL especificas do SQLite para PostgreSQL (DATE > DATE + INTERVAL)"))
story.append(bullet("Implementar foreign keys para referencias atualmente armazenadas como strings"))
story.append(bullet("Adicionar job de reconciliacao Stripe vs DB para detectar transacoes perdidas"))
story.append(bullet("Remover db push --accept-data-loss do entrypoint — usar apenas migrate deploy"))
story.append(spacer(6))

story.append(subsection("12.3 Frontend e UX"))
story.append(bullet("Refatorar pagina de perfil monolitica em componentes role-specific (200-280h estimadas)"))
story.append(bullet("Adicionar campos faltantes: 12 para cuidadores, 10+ para familias"))
story.append(bullet("Suportar multiplos dependentes no perfil de familia"))
story.append(bullet("Sincronizar estatisticas entre homepage e pagina Sobre"))
story.append(bullet("Consolidar paginas duplicadas (/cuidadores e /profissionais)"))
story.append(bullet("Resolver inconsistencia de dominio (evyra.site vs evyra.eu)"))
story.append(bullet("Adicionar loading states e error boundaries mais robustos"))
story.append(spacer(6))

story.append(subsection("12.4 SEO e Go-to-Market"))
story.append(bullet("Submeter sitemap.xml e robots.txt aos motores de busca"))
story.append(bullet("Implementar Server-Side Rendering para conteudo publico (SEO)"))
story.append(bullet("Adicionar Google Analytics ou alternativa privacy-first"))
story.append(bullet("Implementar Open Graph e Twitter Cards mais completos"))
story.append(bullet("Criar estrategia de link building e press outreach"))
story.append(bullet("Adicionar Schema.org markup para servicos de saude"))
story.append(spacer(6))

story.append(subsection("12.5 Conformidade Legal"))
story.append(bullet("Obter opiniao legal formal sobre as 3 questoes bloqueantes (500-1500 EUR)"))
story.append(bullet("Finalizar Termos de Servico com clausula de intermediario"))
story.append(bullet("Implementar termos de uso do Stripe"))
story.append(bullet("Criar politica de reembolso formal"))
story.append(bullet("Garantir cobertura de seguro para falhas de QR/visitas"))
story.append(spacer(6))

story.append(subsection("12.6 Testes"))
story.append(bullet("Substituir stubs em boost-complete.test.ts por testes reais"))
story.append(bullet("Adicionar testes de componentes frontend (React Testing Library)"))
story.append(bullet("Automatizar testes de QR code (atualmente manual)"))
story.append(bullet("Criar schemas.test.ts para validacoes"))
story.append(bullet("Adicionar testes E2E com Playwright"))
story.append(bullet("Implementar teste de reconciliacao Stripe vs DB"))
story.append(spacer(6))

story.append(subsection("12.7 Performance e Escalabilidade"))
story.append(bullet("Implementar cache Redis para queries frequentes (cuidadores disponiveis, etc.)"))
story.append(bullet("Adicionar CDN para assets estaticos (imagens, fonts)"))
story.append(bullet("Implementar paginacao cursor-based para grandes listas"))
story.append(bullet("Otimizar queries N+1 no dashboard e listagens"))
story.append(bullet("Adicionar health checks para o micro-servico de chat"))
story.append(bullet("Monitorar uso de disco (61% atual) — configurar alertas"))

# ════════════════════════════════════════════════════════════════
# 13. ROADMAP
# ════════════════════════════════════════════════════════════════
story.append(section("13. Roadmap — O Que Falta Implementar"))

story.append(make_table(
    ["Funcionalidade", "Status", "Esforco Estimado", "Prioridade"],
    [
        ["Aprovacao Semanal de Pagamentos", "Aprovado, nao implementado", "3-4 semanas", "ALTA"],
        ["Stripe Checkout para Boosts", "Parcialmente documentado", "1-2 semanas", "ALTA"],
        ["Sistema de Notificacoes (email/push)", "Nao iniciado", "2-3 semanas", "ALTA"],
        ["Aceitar/Rejeitar Propostas > Contrato", "Parcial", "1-2 semanas", "ALTA"],
        ["Refatoracao da Pagina de Perfil", "Nao iniciado", "200-280 horas", "ALTA"],
        ["Validacao Role-Specific na API", "Nao implementado", "4-6 horas", "CRITICA"],
        ["Chat Familia-Cuidador sobre Propostas", "Nao iniciado", "1-2 semanas", "MEDIA"],
        ["Rate Limiting por Familia", "Nao implementado", "1-2 semanas", "MEDIA"],
        ["Auto-renovacao de Contratos (cron)", "Nao iniciado", "1 semana", "MEDIA"],
        ["Validacoes Geograficas", "Nao implementado", "1 semana", "MEDIA"],
        ["Testes E2E e Integracao", "Parcial", "2-3 semanas", "MEDIA"],
        ["Job de Reconciliacao Stripe/DB", "Nao iniciado", "1 semana", "ALTA"],
        ["Teleconsulta (Psicologia, Nutricao, etc.)", "Roadmap", "4-8 semanas", "BAIXA"],
        ["Geolocation Tagging", "Futuro", "2 semanas", "BAIXA"],
        ["Reconhecimento Facial", "Futuro", "4+ semanas", "BAIXA"],
        ["Modo Offline QR", "Futuro", "1 semana", "BAIXA"],
    ],
    col_widths=[5.5*cm, 3.5*cm, 3.5*cm, 4*cm],
))
story.append(spacer(8))

story.append(body(
    "O sistema ja possui uma base funcional consideravel com registo, autenticacao, marketplace de "
    "demandas, contratos, pagamentos Stripe com escrow, KYC via Didit, chat em tempo real e QR "
    "code. No entanto, fluxos criticos como a aprovacao semanal de pagamentos e a conversao de "
    "propostas em contratos ainda nao estao completos, o que impede a operacao real da plataforma. "
    "A falta de validacao role-specific na API e uma vulnerabilidade que pode causar corrupcao de "
    "dados e deve ser tratada imediatamente."
))

# ════════════════════════════════════════════════════════════════
# 14. CONCLUSAO
# ════════════════════════════════════════════════════════════════
story.append(section("14. Conclusao e Recomendacoes Prioritarias"))

story.append(body(
    "O Evyra e uma plataforma ambiciosa e tecnicamente sofisticada que aborda um problema real "
    "e significativo: a coordenacao de cuidados de saude para idosos em Portugal pela diaspora "
    "europela. O stack tecnologico e moderno e bem escolhido, a arquitetura de pagamentos com "
    "escrow via Stripe e legalmente robusta, e a cobertura de funcionalidades e abrangente para "
    "uma plataforma em fase inicial."
))

story.append(body(
    "No entanto, a plataforma enfrenta desafios criticos que precisam ser resolvidos antes de "
    "qualquer lancamento publico. As credenciais admin hardcoded representam um risco de seguranca "
    "inaceitavel. O SQL bruto generalizado sem auditoria sistematica e uma bomba relogio. A "
    "ausencia de rate limiting deixa a plataforma vulneravel a ataques de forca bruta. E a "
    "inconsistencia de metricas e ausencia total de SEO indicam que a plataforma nao esta pronta "
    "para atrair utilizadores reais."
))

story.append(subsection("14.1 Acoes Imediatas (1-2 semanas)"))
story.append(critical("Mover credenciais admin para env vars e trocar senha padrao"))
story.append(critical("Implementar rate limiting em login e registo"))
story.append(critical("Auditar queries SQL brutas para SQL injection"))
story.append(critical("Corrigir funcao DATE() para PostgreSQL em producao"))
story.append(critical("Adicionar validacao role-specific na API (4-6 horas)"))
story.append(spacer(6))

story.append(subsection("14.2 Acoes de Curto Prazo (1-2 meses)"))
story.append(warning("Implementar aprovacao semanal de pagamentos"))
story.append(warning("Completar fluxo Proposta > Contrato"))
story.append(warning("Implementar sistema de notificacoes"))
story.append(warning("Obter opiniao legal formal sobre questoes bloqueantes"))
story.append(warning("Corrigir inconsistencia de metricas e iniciar SEO"))
story.append(warning("Adicionar job de reconciliacao Stripe vs DB"))
story.append(spacer(6))

story.append(subsection("14.3 Acoes de Medio Prazo (3-6 meses)"))
story.append(bullet("Refatorar pagina de perfil (200-280 horas)"))
story.append(bullet("Migrar SQL bruto para Prisma ORM"))
story.append(bullet("Implementar testes E2E automatizados"))
story.append(bullet("Estrategia de go-to-market e aquisicao de utilizadores"))
story.append(bullet("Considerar CDN e cache Redis para escalabilidade"))
story.append(bullet("Iniciar desenvolvimento de teleconsulta (roadmap)"))
story.append(spacer(12))

story.append(hr())
story.append(Paragraph(
    "Documento gerado em 14 de Junho de 2026 por Z.ai — Analise baseada no repositorio "
    "github.com/isanat/careapp (branch main), site ao vivo em evyra.site, e inspecao do "
    "servidor de producao via SSH.",
    styles['SmallText']
))

# ━━ Build PDF ━━
doc.build(story)
print(f"PDF generated: {output_path}")
