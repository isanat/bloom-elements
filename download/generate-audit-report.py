#!/usr/bin/env python3
"""
Evyra — Auditoria Completa de Marca e Identidade
Gera relatório PDF com todas as conclusões da auditoria.
"""
import os
from reportlab.lib.pagesizes import A4
from reportlab.lib.units import mm, cm
from reportlab.lib import colors
from reportlab.lib.styles import getSampleStyleSheet, ParagraphStyle
from reportlab.lib.enums import TA_LEFT, TA_CENTER, TA_JUSTIFY
from reportlab.platypus import (
    SimpleDocTemplate, Paragraph, Spacer, Table, TableStyle,
    PageBreak, KeepTogether, HRFlowable, ListFlowable, ListItem
)
from reportlab.pdfbase import pdfmetrics
from reportlab.pdfbase.ttfonts import TTFont

# ── Register fonts ──────────────────────────────────────────
font_dir = "/usr/share/fonts/truetype"
try:
    pdfmetrics.registerFont(TTFont('NotoSansSC', os.path.join(font_dir, 'chinese/NotoSansSC[wght].ttf')))
    pdfmetrics.registerFont(TTFont('NotoSerifSC', os.path.join(font_dir, 'noto-serif-sc/NotoSerifSC[wght].ttf')))
except:
    pass

# ── Palette (from cascade) ──────────────────────────────────
PAGE_BG       = colors.HexColor('#f2f2f1')
CARD_BG       = colors.HexColor('#e9e7e3')
HEADER_FILL   = colors.HexColor('#695f41')
ACCENT        = colors.HexColor('#3587a2')
TEXT_PRIMARY   = colors.HexColor('#232220')
TEXT_MUTED     = colors.HexColor('#7a7770')
SEM_ERROR     = colors.HexColor('#a05a53')
SEM_WARNING   = colors.HexColor('#997c43')
SEM_SUCCESS   = colors.HexColor('#41975d')
SEM_INFO      = colors.HexColor('#5b7a99')
BORDER        = colors.HexColor('#cfc9b6')

# ── Styles ──────────────────────────────────────────────────
styles = getSampleStyleSheet()

style_title = ParagraphStyle(
    'CustomTitle', parent=styles['Title'],
    fontSize=28, leading=34, textColor=colors.HexColor('#1a1a18'),
    fontName='Helvetica-Bold', spaceAfter=6, alignment=TA_CENTER
)
style_subtitle = ParagraphStyle(
    'CustomSubtitle', parent=styles['Normal'],
    fontSize=14, leading=18, textColor=TEXT_MUTED,
    fontName='Helvetica', spaceAfter=20, alignment=TA_CENTER
)
style_h1 = ParagraphStyle(
    'H1', parent=styles['Heading1'],
    fontSize=20, leading=26, textColor=colors.HexColor('#1a1a18'),
    fontName='Helvetica-Bold', spaceBefore=24, spaceAfter=10,
    borderWidth=0, borderPadding=0
)
style_h2 = ParagraphStyle(
    'H2', parent=styles['Heading2'],
    fontSize=15, leading=20, textColor=ACCENT,
    fontName='Helvetica-Bold', spaceBefore=16, spaceAfter=8
)
style_h3 = ParagraphStyle(
    'H3', parent=styles['Heading3'],
    fontSize=12, leading=16, textColor=colors.HexColor('#4a4a44'),
    fontName='Helvetica-Bold', spaceBefore=12, spaceAfter=6
)
style_body = ParagraphStyle(
    'CustomBody', parent=styles['Normal'],
    fontSize=10, leading=15, textColor=TEXT_PRIMARY,
    fontName='Helvetica', spaceAfter=8, alignment=TA_JUSTIFY
)
style_body_small = ParagraphStyle(
    'CustomBodySmall', parent=style_body,
    fontSize=8.5, leading=12, textColor=TEXT_MUTED
)
style_bullet = ParagraphStyle(
    'CustomBullet', parent=style_body,
    leftIndent=18, bulletIndent=6, spaceAfter=4
)
style_critical = ParagraphStyle(
    'Critical', parent=style_body,
    fontSize=10, leading=15, textColor=SEM_ERROR,
    fontName='Helvetica-Bold', spaceAfter=4
)
style_warning = ParagraphStyle(
    'Warning', parent=style_body,
    fontSize=10, leading=15, textColor=SEM_WARNING,
    fontName='Helvetica-Bold', spaceAfter=4
)
style_ok = ParagraphStyle(
    'OK', parent=style_body,
    fontSize=10, leading=15, textColor=SEM_SUCCESS,
    fontName='Helvetica-Bold', spaceAfter=4
)
style_table_header = ParagraphStyle(
    'TableHeader', parent=style_body_small,
    fontSize=8, leading=11, textColor=colors.white,
    fontName='Helvetica-Bold'
)
style_table_cell = ParagraphStyle(
    'TableCell', parent=style_body_small,
    fontSize=8, leading=11, textColor=TEXT_PRIMARY,
    fontName='Helvetica'
)
style_table_cell_bold = ParagraphStyle(
    'TableCellBold', parent=style_table_cell,
    fontName='Helvetica-Bold'
)

# ── Helpers ──────────────────────────────────────────────────
def p(text, style=style_body):
    return Paragraph(text, style)

def h1(text):
    return Paragraph(text, style_h1)

def h2(text):
    return Paragraph(text, style_h2)

def h3(text):
    return Paragraph(text, style_h3)

def bullet(text):
    return Paragraph(f"<bullet>&bull;</bullet> {text}", style_bullet)

def sp(h=6):
    return Spacer(1, h)

def hr():
    return HRFlowable(width="100%", thickness=0.5, color=BORDER, spaceAfter=8, spaceBefore=8)

def make_table(headers, rows, col_widths=None):
    """Create a styled table with proper Paragraph cells."""
    header_row = [Paragraph(h, style_table_header) for h in headers]
    data = [header_row]
    for row in rows:
        data.append([Paragraph(str(c), style_table_cell) for c in row])
    
    t = Table(data, colWidths=col_widths, repeatRows=1)
    t.setStyle(TableStyle([
        ('BACKGROUND', (0, 0), (-1, 0), HEADER_FILL),
        ('TEXTCOLOR', (0, 0), (-1, 0), colors.white),
        ('FONTNAME', (0, 0), (-1, 0), 'Helvetica-Bold'),
        ('FONTSIZE', (0, 0), (-1, 0), 8),
        ('BOTTOMPADDING', (0, 0), (-1, 0), 6),
        ('TOPPADDING', (0, 0), (-1, 0), 6),
        ('BACKGROUND', (0, 1), (-1, -1), colors.HexColor('#fafaf8')),
        ('ROWBACKGROUNDS', (0, 1), (-1, -1), [colors.HexColor('#fafaf8'), colors.HexColor('#f4f3f0')]),
        ('GRID', (0, 0), (-1, -1), 0.4, BORDER),
        ('VALIGN', (0, 0), (-1, -1), 'TOP'),
        ('TOPPADDING', (0, 1), (-1, -1), 4),
        ('BOTTOMPADDING', (0, 1), (-1, -1), 4),
        ('LEFTPADDING', (0, 0), (-1, -1), 5),
        ('RIGHTPADDING', (0, 0), (-1, -1), 5),
    ]))
    return t

# ── Document Setup ──────────────────────────────────────────
output_path = "/home/z/my-project/download/auditoria-marca-evyra.pdf"
doc = SimpleDocTemplate(
    output_path,
    pagesize=A4,
    leftMargin=20*mm, rightMargin=20*mm,
    topMargin=22*mm, bottomMargin=22*mm
)

story = []

# ══════════════════════════════════════════════════════════════
# COVER PAGE
# ══════════════════════════════════════════════════════════════
story.append(Spacer(1, 50*mm))
story.append(Paragraph("EVYRA", ParagraphStyle('CoverBrand', parent=style_title, fontSize=42, leading=48)))
story.append(Spacer(1, 6*mm))
story.append(Paragraph("Auditoria Completa de Marca e Identidade", style_subtitle))
story.append(Spacer(1, 4*mm))
story.append(HRFlowable(width="40%", thickness=1.5, color=ACCENT, spaceAfter=12, spaceBefore=12))
story.append(Paragraph("Incluindo: PT-BR vs PT-PT | Consistência Visual | Domínios | Preços | Formulários | Contratos | SEO", ParagraphStyle('CoverMeta', parent=style_body, fontSize=10, textColor=TEXT_MUTED, alignment=TA_CENTER)))
story.append(Spacer(1, 20*mm))
story.append(Paragraph("Junho 2026", ParagraphStyle('CoverDate', parent=style_body, fontSize=11, textColor=TEXT_MUTED, alignment=TA_CENTER)))
story.append(Spacer(1, 4*mm))
story.append(Paragraph("Documento Confidencial", ParagraphStyle('CoverConf', parent=style_body, fontSize=9, textColor=SEM_WARNING, alignment=TA_CENTER, fontName='Helvetica-BoldOblique')))

story.append(PageBreak())

# ══════════════════════════════════════════════════════════════
# TABLE OF CONTENTS
# ══════════════════════════════════════════════════════════════
story.append(h1("Índice"))
story.append(sp(8))

toc_items = [
    ("1.", "Resumo Executivo"),
    ("2.", "Auditoria PT-BR vs PT-PT — Termos Brasileiros Encontrados"),
    ("3.", "Inconsistências de Ortografia (AO90 vs Pré-AO90)"),
    ("4.", "Consistência de Domínio"),
    ("5.", "Consistência de Preços e Taxas"),
    ("6.", "Consistência de Estatísticas"),
    ("7.", "Informações de Contacto"),
    ("8.", "Consistência Visual (Cores, Fontes, Logótipo)"),
    ("9.", "Formulários e Contratos — Diacríticos e PT-BR"),
    ("10.", "Meta Tags e SEO"),
    ("11.", "Componentes Legados (Bloom-Elements)"),
    ("12.", "Plano de Acção Priorizado"),
]
for num, title in toc_items:
    story.append(Paragraph(f"<b>{num}</b>  {title}", ParagraphStyle('TOC', parent=style_body, fontSize=11, leading=18, spaceAfter=4)))

story.append(PageBreak())

# ══════════════════════════════════════════════════════════════
# 1. RESUMO EXECUTIVO
# ══════════════════════════════════════════════════════════════
story.append(h1("1. Resumo Executivo"))
story.append(sp(4))

story.append(p("Esta auditoria analisou toda a plataforma Evyra (evyra.site) para verificar a consistência da identidade de marca, com foco especial na verificação de que não existe texto em Português do Brasil (PT-BR) — apenas Português Europeu (PT-PT) é aceite. A auditoria abrangeu o ficheiro de traduções (~90KB, 4 idiomas), 86 páginas/componentes, formulários, contratos, templates de email, e ficheiros de configuração."))
story.append(sp(4))

story.append(p("<b>Conclusão principal:</b> A plataforma contém <b>um número significativo de termos e construções PT-BR</b> que precisam de ser corrigidos, além de inconsistências graves de marca (3 domínios diferentes, preços contraditórios, estatísticas inflacionadas, e cores de email erradas). Abaixo, o resumo quantitativo:"))
story.append(sp(6))

summary_data = [
    ["Critério", "Gravidade", "Ocorrências", "Ficheiros"],
    ["Termos PT-BR (Fonoaudiologia, Usuário, Buscar, Contato, etc.)", "CRÍTICO", "100+", "25+"],
    ["Diacríticos em falta (contratos/new)", "CRÍTICO", "27", "1"],
    ["3 domínios diferentes (evyra.site/eu/pt)", "CRÍTICO", "40+", "15+"],
    ["Preços contraditórios (EUR 25 vs EUR 35, 10% vs 15%)", "CRÍTICO", "6", "4"],
    ["Estatísticas inflacionadas/inconsistentes", "ALTO", "3", "3"],
    ["Cores de email erradas (azul vs verde Evyra)", "ALTO", "16", "2"],
    ["Tagline diferente nos emails", "ALTO", "1", "1"],
    ["Telefone/emails inconsistentes", "ALTO", "8+", "6+"],
    ["Verbos informais (tu vs você)", "MÉDIO", "5", "4"],
    ["Aguardando vs A aguardar", "MÉDIO", "15+", "12+"],
    ["Ortografia mista (Ativo/Activo)", "MÉDIO", "20+", "15+"],
    ["Resíduos Bloom-Elements", "MÉDIO", "4", "3"],
]
story.append(make_table(summary_data[0], summary_data[1:], col_widths=[55*mm, 22*mm, 22*mm, 20*mm]))
story.append(sp(6))

story.append(p("<b>Estado:</b> Nenhuma alteração foi aplicada. Todas as sugestões ficam pendentes até confirmação do utilizador."))

# ══════════════════════════════════════════════════════════════
# 2. PT-BR vs PT-PT
# ══════════════════════════════════════════════════════════════
story.append(h1("2. Auditoria PT-BR vs PT-PT"))
story.append(p("A verificação PT-BR vs PT-PT é o critério mais importante desta auditoria. A plataforma NÃO deve conter palavras ou construções do Português do Brasil. Abaixo, todos os termos PT-BR encontrados, organizados por gravidade."))

story.append(h2("2.1 Termos CRÍTICOS — Amplamente utilizados"))
story.append(p("Estes termos aparecem em múltiplos ficheiros e são inconfundivelmente PT-BR. Devem ser substituídos imediatamente."))
story.append(sp(4))

ptbr_critical = [
    ["Termo PT-BR", "Correcção PT-PT", "Ocorrências", "Ficheiros-chave"],
    ['"Usuário"', '"Utilizador"', "10+", "admin/*, header, sidebar"],
    ['"Buscar" (pesquisar)', '"Procurar"/"Pesquisar"', "7+", "admin/*, constants.ts"],
    ['"Configurações"', '"Definições"', "13+", "admin/*, sidebar, profile"],
    ['"Contato"', '"Contacto"', "9+", "api/contact, contracts, profile"],
    ['"Demandas"', '"Pedidos"/"Solicitações"', "30+", "demands/*, proposals, sidebar"],
    ['"Status"', '"Estado"', "50+", "admin/*, contracts, dashboard"],
    ['"Aguardando"', '"A aguardar"', "15+", "constants, contracts, admin"],
    ['"Redefinir" (senha)', '"Repor"', "8+", "auth/reset, email-templates"],
    ['"Seu/Sua" sem artigo', '"O seu/A sua"', "10+", "api routes, contracts, demands"],
    ['"Você"', 'Evitar — usar 3.a pessoa', "2+", "api/contracts route"],
]
story.append(make_table(ptbr_critical[0], ptbr_critical[1:], col_widths=[38*mm, 38*mm, 20*mm, 42*mm]))

story.append(h2("2.2 Termos MÉDIOS — Páginas específicas"))
ptbr_medium = [
    ["Termo PT-BR", "Correcção PT-PT", "Localização"],
    ['"Fonoaudiologia"', '"Terapia da Fala"', "constants.ts:35"],
    ['"Preparo de Refeições"', '"Preparação de Refeições"', "constants.ts:25"],
    ['"Em Andamento"', '"Em Curso"/"A Decorrer"', "interview/[id]/page.tsx:330"],
    ['"Endereço"', '"Morada"', "admin/users, terms-acceptance"],
    ['"Registro/registrado"', '"Registo/registado"', "contracts, interview, demands"],
    ['"Conectamos/conexão"', '"Ligamos/ligação"', "sobre, terms-acceptance, translations"],
    ['"Diretamente"', '"Directamente"', "page.tsx, profissionais, email-templates"],
    ['"Atendimento domiciliar"', '"Atendimento domiciliário"', "translations.ts:437"],
    ['"Câncer"', '"Cancro"', "contracts/[id]/page.tsx:199"],
    ['"Sobre voce"', '"Sobre si"', "profile/AboutTab:100"],
    ['"salvas"', '"guardadas"', "admin/settings:177"],
]
story.append(make_table(ptbr_medium[0], ptbr_medium[1:], col_widths=[42*mm, 42*mm, 52*mm]))

story.append(h2("2.3 Verbos informais (tu) — Devem usar forma formal"))
story.append(p("Numa plataforma profissional de saúde, toda a comunicação deve usar o tratamento formal (3.a pessoa), não o informal (tu)."))
informal_verbs = [
    ["Texto Actual", "Correcção", "Ficheiro"],
    ['"Não tens nenhum contrato"', '"Não tem nenhum contrato"', "qr-scanner/page.tsx:230"],
    ['"registar o teu check-in"', '"registar o seu check-in"', "contracts/[id], QRScanner, QRGenerator"],
    ['"quando chegares"', '"quando chegar"', "QRGenerator.tsx:117"],
    ['"Precisas de um profissional"', '"Precisa de um profissional"', "translations.ts:547"],
    ['"Cria uma conta gratuita"', '"Crie uma conta gratuita"', "translations.ts:548"],
]
story.append(make_table(informal_verbs[0], informal_verbs[1:], col_widths=[48*mm, 48*mm, 42*mm]))

story.append(h2("2.4 Gerúndio PT-BR «Aguardando» vs PT-PT «A aguardar»"))
story.append(p("Em PT-PT, a forma progressiva usa a preposição «a» + infinitivo. «Aguardando» é construção típica do PT-BR. Este é um dos erros mais visíveis porque aparece em labels de estado de contrato."))
story.append(sp(4))
aguardando = [
    ["Texto Actual (PT-BR)", "Correcção (PT-PT)", "Ficheiros"],
    ['"Aguardando Aceite"', '"A aguardar aceite"', "constants.ts, contracts/[id], status-badge"],
    ['"Aguardando Pagamento"', '"A aguardar pagamento"', "constants.ts, contracts/[id], status-badge"],
    ['"Aguardando Usuário"', '"A aguardar utilizador"', "admin/support"],
    ['"Aguardando aprovação"', '"A aguardar aprovação"', "admin/payments, demands/boost"],
    ['"Aguardando atendimento"', '"A aguardar atendimento"', "admin/support"],
    ['"Aguardando outro participante"', '"A aguardar outro participante"', "agora-room.tsx"],
]
story.append(make_table(aguardando[0], aguardando[1:], col_widths=[50*mm, 50*mm, 38*mm]))

# ══════════════════════════════════════════════════════════════
# 3. ORTOGRAFIA
# ══════════════════════════════════════════════════════════════
story.append(h1("3. Inconsistências de Ortografia (AO90 vs Pré-AO90)"))
story.append(p("A plataforma mistura formas do Acordo Ortográfico de 1990 (AO90) com formas pré-AO90. Isto cria uma impressão pouco profissional. É necessário escolher uma convenção e aplicá-la consistentemente. Recomenda-se a adoção uniforme do AO90, que é o padrão oficial em Portugal desde 2012, embora o pré-AO90 ainda seja comum em contextos formais."))
story.append(sp(4))

ortho = [
    ["Palavra AO90", "Palavra Pré-AO90", "Onde aparece AO90", "Onde aparece Pré-AO90"],
    ["Ativo", "Activo", "constants.ts, admin/*, settings", "translations.ts (dashboard, contracts)"],
    ["Ativação", "Activação", "admin/settings, stripe.ts, easypay", "translations.ts (payment, howItWorks)"],
    ["Noturno", "Nocturno", "family-setup, search, status-constants", "—"],
    ["Direto", "Directo", "page.tsx, profissionais, emails", "—"],
    ["Fatura", "Factura", "— (não encontrado)", "—"],
]
story.append(make_table(ortho[0], ortho[1:], col_widths=[30*mm, 30*mm, 44*mm, 42*mm]))
story.append(sp(6))
story.append(p("<b>Recomendação:</b> Adoptar consistentemente a forma AO90 (Ativo, Ativação, Noturno, Direto, Fatura) em toda a plataforma, ou adoptar consistentemente a forma pré-AO90 (Activo, Activação, Nocturno, Directo, Factura). Nunca misturar ambas."))

# ══════════════════════════════════════════════════════════════
# 4. DOMÍNIOS
# ══════════════════════════════════════════════════════════════
story.append(h1("4. Consistência de Domínio"))
story.append(p("<b>Este é um problema crítico.</b> A plataforma utiliza 3 domínios diferentes sem um domínio canónico definido. Isto afecta OG tags, emails, sitemap, e a credibilidade da marca."))
story.append(sp(4))

domains = [
    ["Domínio", "Ocorrências", "Utilização"],
    ["evyra.site", "1", "sitemap.ts — BASE_URL fallback"],
    ["evyra.eu", "25+", "layout.tsx (OG tag), translations.ts, ajuda, seguranca, gdpr, imprensa, carreiras, jitsi"],
    ["evyra.pt", "15+", "email-templates.ts (APP_URL), auth-turso.ts (admin email), api routes, terms-acceptance, sobre"],
]
story.append(make_table(domains[0], domains[1:], col_widths=[30*mm, 22*mm, 84*mm]))
story.append(sp(6))
story.append(p("<b>Problema adicional:</b> A página «Sobre» usa contacto@evyra.pt mas as traduções usam contacto@evyra.eu — o mesmo tipo de contacto mostra emails diferentes conforme a página."))
story.append(sp(4))
story.append(p("<b>Recomendação:</b> Escolher UM domínio canónico e substituir todas as referências. Sugerimos evyra.eu (domínio actual em produção) ou evyra.pt (mais apropriado para plataforma portuguesa)."))

# ══════════════════════════════════════════════════════════════
# 5. PREÇOS
# ══════════════════════════════════════════════════════════════
story.append(h1("5. Consistência de Preços e Taxas"))
story.append(p("Existem contradições graves nos valores apresentados ao utilizador, o que pode ter implicações legais e de confiança."))
story.append(sp(4))

story.append(h2("5.1 Taxa de Activação: EUR 25 vs EUR 35"))
pricing_activation = [
    ["Valor", "Localização", "Nota"],
    ["EUR 35", "constants.ts (ACTIVATION_COST_EUR_CENTS=3500)", "Correcto"],
    ["EUR 35", "platform-fees.ts, faq, familias, precos, como-funciona, translations", "Correcto"],
    ["EUR 25", "terms-acceptance.tsx:60 — Taxa de ativação: EUR 25", "ERRADO"],
    ["EUR 25", "ui-kit/modal.tsx:136,143", "ERRADO"],
    ["EUR 29", "register/page.tsx — bloom-elements hardcodes EUR 29, hack DOM replace", "ERRADO + hack"],
]
story.append(make_table(pricing_activation[0], pricing_activation[1:], col_widths=[18*mm, 68*mm, 48*mm]))

story.append(h2("5.2 Comissão da Plataforma: 10% vs 15%"))
pricing_commission = [
    ["Valor", "Localização", "Nota"],
    ["10%", "constants.ts, platform-fees.ts, familias, admin/contracts", "Correcto"],
    ["15%", "terms-acceptance.tsx:62 — Taxa de plataforma: 15%", "ERRADO"],
    ["15%", "weekly-approvals/route.ts:161 — platformFeePct=15", "ERRADO"],
    ["15%", "wallet/route.ts:14 — comment 1500 bps = 15%", "ERRADO"],
]
story.append(make_table(pricing_commission[0], pricing_commission[1:], col_widths=[18*mm, 68*mm, 48*mm]))

story.append(h2("5.3 Processador de Pagamento nos Termos"))
story.append(p("O componente terms-acceptance.tsx refere «Processadores de pagamento (Stripe)» mas o processador principal em Portugal é a Easypay (MB Way, Multibanco). O Stripe é usado apenas para cartões de crédito. Esta referência é enganosa e deve ser corrigida para «Easypay e Stripe»."))

# ══════════════════════════════════════════════════════════════
# 6. ESTATÍSTICAS
# ══════════════════════════════════════════════════════════════
story.append(h1("6. Consistência de Estatísticas"))
story.append(p("Os números apresentados ao público são inconsistentes e, em alguns casos, inflacionados (a plataforma tem zero utilizadores reais)."))
story.append(sp(4))

stats_data = [
    ["Métrica", "Página Inicial", "Página Sobre", "Página Imprensa", "Realidade"],
    ["Profissionais", "500+", "50+", "500+ (registados)", "0 verificados"],
    ["Países", "3", "—", "—", "0 operacionais"],
    ["Satisfação", "98%", "—", "—", "Sem dados"],
]
story.append(make_table(stats_data[0], stats_data[1:], col_widths=[25*mm, 25*mm, 25*mm, 30*mm, 28*mm]))
story.append(sp(6))
story.append(p("<b>Recomendação:</b> Remover todas as estatísticas inflacionadas até existirem dados reais. Utilizar contadores dinâmicos da base de dados quando possível, ou ocultar as secções de estatísticas enquanto a plataforma não tem utilizadores reais."))

# ══════════════════════════════════════════════════════════════
# 7. CONTACTO
# ══════════════════════════════════════════════════════════════
story.append(h1("7. Informações de Contacto"))
story.append(p("As informações de contacto variam entre páginas e domínios, o que prejudica a credibilidade."))
story.append(sp(4))

story.append(h2("7.1 Telefones"))
phones = [
    ["Telefone", "Localização", "Tipo"],
    ["+351 21 234 5678", "imprensa/page.tsx", "Fixo (provisório)"],
    ["+351 210 000 000", "sobre/page.tsx, admin/settings", "Placeholder"],
    ["+351 912 345 678", "translations.ts (4 idiomas)", "Móvel (placeholder)"],
]
story.append(make_table(phones[0], phones[1:], col_widths=[38*mm, 52*mm, 42*mm]))

story.append(h2("7.2 Emails — Inconsistência de domínio"))
emails = [
    ["Email", "Domínio", "Utilização"],
    ["contacto@evyra.pt", ".pt", "sobre/page.tsx"],
    ["contacto@evyra.eu", ".eu", "translations.ts (PT, EN)"],
    ["contact@evyra.eu", ".eu", "translations.ts (EN)"],
    ["suporte@evyra.eu", ".eu", "ajuda/page.tsx, translations"],
    ["privacidade@evyra.pt", ".pt", "terms-acceptance.tsx"],
    ["privacidade@evyra.eu", ".eu", "translations.ts (PT)"],
    ["termos@evyra.pt", ".pt", "translations.ts (todos os idiomas)"],
    ["admin@evyra.pt", ".pt", "auth-turso.ts, admin API routes"],
]
story.append(make_table(emails[0], emails[1:], col_widths=[38*mm, 18*mm, 68*mm]))

story.append(h2("7.3 Morada — Erro de pontuação nas traduções ES"))
story.append(p("As traduções para Espanhol (ES) usam ponto final em vez de vírgula no endereço: «Av. da Liberdade. 123» e «1250-096 Lisboa. Portugal» em vez de «Av. da Liberdade, 123» e «1250-096 Lisboa, Portugal». Ficheiro: translations.ts linhas 4083-4084 e 4194."))

# ══════════════════════════════════════════════════════════════
# 8. VISUAL
# ══════════════════════════════════════════════════════════════
story.append(h1("8. Consistência Visual"))

story.append(h2("8.1 Cores de Email — Azul em vez de Verde Evyra"))
story.append(p("Os templates de email usam <b>#3B82F6 (azul)</b> como cor primária em 16+ instâncias, mas a cor de marca Evyra é <b>verde</b> (#5AE4A0 / #2F6F6D). O header do ficheiro email-templates.ts diz «Bloom design tokens» — um resíduo da marca anterior. Em contraste, a rota de registo (api/register/route.ts) correctamente usa #2F6F6D."))
story.append(sp(4))

email_colors = [
    ["Cor Actual", "Ocorrências", "Deveria Ser"],
    ["#3B82F6 (azul)", "13 em email-templates.ts + 3 em email.ts", "#2F6F6D (verde Evyra)"],
    ["#16A34A (verde genérico)", "6 em email-templates.ts", "#5AE4A0 ou #2F6F6D"],
    ["#F7F9FB (fundo frio)", "3 em email-templates.ts", "#FAF9F6 (fundo quente Evyra)"],
    ["#2563eb (azul link)", "1 em contact/route.ts", "#2F6F6D"],
]
story.append(make_table(email_colors[0], email_colors[1:], col_widths=[35*mm, 52*mm, 42*mm]))

story.append(h2("8.2 Tagline Inconsistente"))
story.append(p("A tagline oficial é <b>«Saúde que vem até si»</b> (constants.ts, layout.tsx, page.tsx). No entanto, os emails usam <b>«O cuidado, organizado.»</b> (email-templates.ts:71). Duas taglines diferentes na mesma plataforma."))
story.append(sp(4))

story.append(h2("8.3 Cores Hardcoded em Componentes"))
story.append(p("Alguns componentes usam cores hexadecimais directamente em vez de variáveis CSS do tema:"))
story.append(bullet("page.tsx:76 — bg-[#0D110E] em vez de bg-background"))
story.append(bullet("admin/settings:928 — bg-[#0D110E] em vez de bg-background"))
story.append(bullet("Estes devem usar classes Tailwind do tema para garantir consistência."))

story.append(h2("8.4 Logótipo e Nome de Marca"))
story.append(p("<b>POSITIVO:</b> O nome «Evyra» é consistente via APP_NAME. Os componentes de logótipo (EvyraLogoMark, EvyraLogoInline, EvyraLogoFull) estão centralizados. O SVG usa gradiente #2F6F6D para #1a4f4d — consistente com a marca."))

# ══════════════════════════════════════════════════════════════
# 9. FORMULÁRIOS
# ══════════════════════════════════════════════════════════════
story.append(h1("9. Formulários e Contratos — Diacríticos e PT-BR"))

story.append(h2("9.1 Ficheiro Mais Problemático: contracts/new/page.tsx"))
story.append(p("Este ficheiro contém <b>27 diacríticos em falta</b> e termos PT-BR. É o pior ficheiro de toda a plataforma em termos de qualidade linguística. Exemplos:"))
story.append(sp(4))

diacritics = [
    ["Texto Actual", "Correcto"],
    ['"Medicacao"', '"Medicação"'],
    ['"Refeicoes"', '"Refeições"'],
    ['"Tarefas Domesticas"', '"Tarefas Domésticas"'],
    ['"Estimulacao Cognitiva"', '"Estimulação Cognitiva"'],
    ['"Manha"', '"Manhã"'],
    ['"Nao foi possivel verificar os prerequisitos"', '"Não foi possível verificar os pré-requisitos"'],
    ['"Contato de emergencia"', '"Contacto de emergência"'],
    ['"Voce precisa completar a verificacao"', '"Precisa de completar a verificação"'],
    ['"Horarios e frequencia"', '"Horários e frequência"'],
    ['"Periodo do contrato"', '"Período do contrato"'],
    ['"Observacoes adicionais"', '"Observações adicionais"'],
]
story.append(make_table(diacritics[0], diacritics[1:], col_widths=[65*mm, 65*mm]))

story.append(h2("9.2 Outros Ficheiros com Diacríticos em Falta"))
story.append(bullet("contracts/[id]/page.tsx — «Concluido» (falta acento), «Câncer» (PT-BR, devia ser «Cancro»), «nao» → «não»"))
story.append(bullet("admin/payments/page.tsx — «aprovacao» → «aprovação»"))
story.append(bullet("interview/[id]/page.tsx — «referencia» → «referência», «seguranca» → «segurança»"))

story.append(h2("9.3 Termos PT-BR em Formulários"))
story.append(bullet("profile/AboutTab — «Sobre voce» → «Sobre si»"))
story.append(bullet("CaregiverProfile/FamilyProfile — «Contato» → «Contacto»"))
story.append(bullet("api/contact/route.ts — «Contato» no assunto e título do email → «Contacto»"))
story.append(bullet("contracts/new/page.tsx — «Telefone» inconsistente; devia ser «Telemóvel» (consistente com family-setup)"))
story.append(bullet("ui-kit/page.tsx — «Digite seu nome», «Use seu nome legal», «seu@email.com» — tudo PT-BR"))

story.append(h2("9.4 Termos de Aceitação Legal"))
story.append(p("O componente terms-acceptance.tsx tem problemas múltiplos:"))
story.append(bullet("EUR 25 em vez de EUR 35 para taxa de activação"))
story.append(bullet("15% em vez de 10% para comissão da plataforma"))
story.append(bullet("«Contato» em vez de «Contacto»"))
story.append(bullet("Refere «Stripe» como processador principal; deveria ser «Easypay e Stripe»"))
story.append(bullet("Conteúdo hardcoded apenas em PT — não internacionalizado"))

# ══════════════════════════════════════════════════════════════
# 10. SEO
# ══════════════════════════════════════════════════════════════
story.append(h1("10. Meta Tags e SEO"))

story.append(h2("10.1 OG Tags — Domínio Errado"))
story.append(p("O layout raiz (layout.tsx:67) define o OG URL como https://evyra.eu, mas o domínio de produção é evyra.site. Apenas 2 páginas definem OG metadata personalizada (layout.tsx e profissionais/layout.tsx). Todas as outras páginas herdam o OG genérico com o domínio errado."))

story.append(h2("10.2 Metadata por Página — Em Falta"))
story.append(p("As seguintes páginas NÃO definem metadata personalizada e herdam o OG genérico: familias, sobre, como-funciona, precos, faq, ajuda, blog, carreiras, imprensa, privacidade, termos, gdpr, cookies, seguranca, contato. Cada uma deveria ter title, description e OG tags próprios."))

story.append(h2("10.3 Sitemap"))
story.append(p("O sitemap (src/app/sitemap.ts) usa evyra.site como BASE_URL mas a OG tag aponta para evyra.eu. Inconsistência que afecta indexação nos motores de busca."))

story.append(h2("10.4 Footer — 4 Entidades vs 3 Países"))
story.append(p('O footer mostra 4 bandeiras (Portugal, Itália, Espanha, Europa) mas a homepage diz "3 Países". A APP_DESCRIPTION diz "Portugal, Espanha e Itália" — 3 países. "Europa" não é um país e não devia estar como bandeira separada no footer.'))

# ══════════════════════════════════════════════════════════════
# 11. BLOOM-ELEMENTS
# ══════════════════════════════════════════════════════════════
story.append(h1("11. Componentes Legados (Bloom-Elements)"))
story.append(p("O pacote @isanat/bloom-elements é da marca anterior (Bloom, azul). Existem resíduos que causam problemas:"))
story.append(sp(4))

bloom = [
    ["Problema", "Ficheiro", "Impacto"],
    ["RegisterView hardcodes EUR 29; hack DOM replace para EUR 35", "register/page.tsx:92-114", "Frágil, pode quebrar"],
    ["LoginView importado de bloom-elements", "login/page.tsx:7", "Dependência externa"],
    ["Badge importado de bloom-elements em vez de @/components/ui/badge", "EvyraHeader.tsx:8", "Inconsistência"],
    ['Email templates header diz "Bloom design tokens"', "email-templates.ts:4", "Identidade errada"],
    ["Emails usam cores Bloom (#3B82F6 azul)", "email-templates.ts, email.ts", "Marca errada"],
]
story.append(make_table(bloom[0], bloom[1:], col_widths=[55*mm, 42*mm, 40*mm]))
story.append(sp(4))
story.append(p("<b>Recomendação:</b> Substituir progressivamente os imports de bloom-elements por componentes nativos Evyra. A longo prazo, remover a dependência completamente."))

# ══════════════════════════════════════════════════════════════
# 12. PLANO DE ACÇÃO
# ══════════════════════════════════════════════════════════════
story.append(h1("12. Plano de Acção Priorizado"))
story.append(p("Todas as alterações ficam pendentes até confirmação do utilizador. As prioridades são:"))
story.append(sp(4))

story.append(h2("PRIORIDADE 1 — Crítico (Corrigir Imediatamente)"))
story.append(p("<b>P1.1 — Eliminar todos os termos PT-BR</b>"))
story.append(bullet("Substituir «Usuário» → «Utilizador» em todos os ficheiros admin"))
story.append(bullet("Substituir «Buscar» → «Procurar»/«Pesquisar» em admin e constants"))
story.append(bullet("Substituir «Configurações» → «Definições» em sidebar, header, profile"))
story.append(bullet("Substituir «Contato» → «Contacto» em api/contact, contracts, profile"))
story.append(bullet("Substituir «Demandas» → «Pedidos» em demands/*, proposals, sidebar"))
story.append(bullet("Substituir «Status» → «Estado» em todos os componentes admin"))
story.append(bullet("Substituir «Aguardando» → «A aguardar» em constants, contracts, admin"))
story.append(bullet("Substituir «Redefinir» → «Repor» em auth/reset, email-templates"))
story.append(bullet("Corrigir «Seu/Sua» sem artigo → «O seu/A sua» em api routes"))
story.append(bullet("Substituir «Fonoaudiologia» → «Terapia da Fala» em constants"))
story.append(bullet("Substituir «Preparo de Refeições» → «Preparação de Refeições» em constants"))
story.append(bullet("Corrigir verbos informais (tu → você/formal) em qr-scanner, QRGenerator"))
story.append(sp(4))

story.append(p("<b>P1.2 — Corrigir diacríticos em falta</b>"))
story.append(bullet("contracts/new/page.tsx — 27 correcções de diacríticos"))
story.append(bullet("contracts/[id]/page.tsx — «Concluido» → «Concluído», «Câncer» → «Cancro»"))
story.append(bullet("admin/payments, interview — «aprovacao», «referencia», «seguranca»"))
story.append(sp(4))

story.append(p("<b>P1.3 — Unificar domínio canónico</b>"))
story.append(bullet("Escolher UM domínio (evyra.eu ou evyra.pt)"))
story.append(bullet("Substituir todas as referências nos 3 domínios"))
story.append(bullet("Corrigir OG tag em layout.tsx"))
story.append(bullet("Corrigir APP_URL em email-templates.ts"))
story.append(sp(4))

story.append(p("<b>P1.4 — Corrigir preços nos termos</b>"))
story.append(bullet("terms-acceptance.tsx: EUR 25 → EUR 35"))
story.append(bullet("terms-acceptance.tsx: 15% → 10%"))
story.append(bullet("terms-acceptance.tsx: «Stripe» → «Easypay e Stripe»"))
story.append(bullet("ui-kit/modal.tsx: EUR 25 → EUR 35"))
story.append(bullet("weekly-approvals/route.ts: platformFeePct=15 → dinâmico do DB"))

story.append(h2("PRIORIDADE 2 — Alto"))
story.append(p("<b>P2.1 — Corrigir cores de email</b>"))
story.append(bullet("Substituir #3B82F6 (azul) → #2F6F6D (verde Evyra) em email-templates.ts e email.ts"))
story.append(bullet("Substituir #16A34A → cor de marca Evyra"))
story.append(bullet("Remover referência «Bloom design tokens»"))
story.append(sp(4))

story.append(p("<b>P2.2 — Unificar tagline</b>"))
story.append(bullet("email-templates.ts: substituir «O cuidado, organizado.» → APP_TAGLINE"))
story.append(sp(4))

story.append(p("<b>P2.3 — Corrigir estatísticas inflacionadas</b>"))
story.append(bullet("Remover ou tornar dinâmicos os contadores 500+/98%/3 países"))
story.append(bullet("Unificar: sobre/page.tsx diz 50+ mas page.tsx diz 500+"))
story.append(sp(4))

story.append(p("<b>P2.4 — Padronizar informações de contacto</b>"))
story.append(bullet("Usar um telefone real consistente em todas as páginas"))
story.append(bullet("Usar email com domínio canónico consistente"))
story.append(bullet("Corrigir pontuação nas traduções ES"))

story.append(h2("PRIORIDADE 3 — Médio"))
story.append(p("<b>P3.1 — Unificar ortografia AO90</b>"))
story.append(bullet("Decidir entre AO90 (Ativo) ou pré-AO90 (Activo) e aplicar uniformemente"))
story.append(sp(4))

story.append(p("<b>P3.2 — Adicionar OG metadata por página</b>"))
story.append(bullet("Criar metadata personalizada para as 15+ páginas públicas sem OG"))
story.append(sp(4))

story.append(p("<b>P3.3 — Remover resíduos bloom-elements</b>"))
story.append(bullet("Substituir imports de bloom-elements por componentes nativos"))
story.append(bullet("Remover hack DOM de EUR 29→EUR 35 em register/page.tsx"))
story.append(sp(4))

story.append(p("<b>P3.4 — Internacionalizar termos de aceitação</b>"))
story.append(bullet("terms-acceptance.tsx está hardcoded em PT — mover para translations.ts"))
story.append(sp(4))

story.append(p("<b>P3.5 — Corrigir footer</b>"))
story.append(bullet("Remover «Europa» como 4.a bandeira ou clarificar que é expansão futura"))
story.append(bullet("Consistentizar contagem de países (3 vs 4)"))

story.append(h2("PRIORIDADE 4 — Baixo"))
story.append(bullet("Traduzir mensagens de erro em inglês (payment/page.tsx, contact/route.ts)"))
story.append(bullet("Corrigir cores hardcoded em componentes (usar variáveis Tailwind)"))
story.append(bullet("«Full-time» → «Tempo inteiro» em profile-setup"))
story.append(bullet("«Telefone» vs «Telemóvel» — unificar para «Telemóvel»"))

story.append(sp(12))
story.append(hr())
story.append(p("<b>Nota final:</b> Nenhuma alteração foi aplicada ao código. Todas as sugestões acima estão pendentes de confirmação do utilizador. Diga «sim» às que quer aplicar e «não» às que quer deixar pendentes.", style_warning))

# ── Build ────────────────────────────────────────────────────
doc.build(story)
print(f"PDF gerado: {output_path}")
