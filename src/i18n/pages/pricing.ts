import type { LocalizedPage, PricingPageContent } from './types';

export const pricingContent: LocalizedPage<PricingPageContent> = {
  nl: {
    title: 'Pricing — HoneyBadger Trader',
    description:
      'Betaal €5 per actieve strategie per maand en 8% over je totale netto winst. Geen winst, geen performance fee. Transparant en eerlijk.',
    h1: 'Eerlijke pricing, zonder addertjes',
    intro:
      'Geen torenhoge vaste kosten of management fees over je inleg. Je betaalt per actieve strategie en verder verdienen we uitsluitend als jij winst maakt.',
    card: {
      badge: 'Hybride model',
      amount: '€5',
      period: '/ strategie / maand',
      feePct: '8%',
      feeLabel: 'performance fee over totale netto winst',
      tagline: 'Start met één strategie. Voeg de tweede toe wanneer je wilt.',
      features: [
        'Beide strategieën beschikbaar — €5 per actieve strategie per maand',
        'Geen management fee over je inleg',
        'Veilig Spot-traden (HODL-vriendelijk)',
        '24/7 geautomatiseerd handelen',
        'Op elk moment stoppen of pauzeren',
        'Je crypto blijft op je eigen account',
      ],
      cta: 'Schrijf je in voor early access',
      earlyAccessNote:
        'Tijdens early access: de eerste 3 maanden zijn gratis per strategie.\nDaarna €5 per actieve strategie per maand + 8% performance fee over totale netto winst.',
    },
    example: {
      heading: 'Hoe de kosten uitpakken over een jaar',
      intro:
        'De onderstaande voorbeelden illustreren hoe de kosten over een jaar worden berekend — niet wat je kunt verwachten. Rendementen uit het verleden bieden geen garantie voor de toekomst.',
      scenarios: [
        {
          title: 'Één strategie, winst gemaakt',
          rows: [
            { label: 'Inleg', value: '€5.000' },
            { label: 'Winst dit jaar', value: '€1.500' },
            { label: 'Abonnement', value: '€60', note: '(1 × €5 × 12)', isSep: true },
            { label: 'Performance fee', value: '€120', note: '(8% van €1.500)' },
            { label: 'Totale kosten', value: '€180', isTotal: true },
          ],
          netLabel: 'Netto voor jou:',
          netHtml: '<strong>€1.320</strong>',
        },
        {
          title: 'Twee strategieën, winst gemaakt',
          rows: [
            { label: 'Inleg', value: '€5.000' },
            { label: 'Winst dit jaar', value: '€1.000' },
            { label: 'Abonnement', value: '€120', note: '(2 × €5 × 12)', isSep: true },
            { label: 'Performance fee', value: '€80', note: '(8% van €1.000)' },
            { label: 'Totale kosten', value: '€200', isTotal: true },
          ],
          netLabel: 'Netto voor jou:',
          netHtml: '<strong>€800</strong>',
        },
        {
          title: 'Twee strategieën, geen winst',
          rows: [
            { label: 'Inleg', value: '€5.000' },
            { label: 'Winst dit jaar', value: '€0' },
            { label: 'Abonnement', value: '€120', note: '(2 × €5 × 12)', isSep: true },
            { label: 'Performance fee', value: '€0' },
            { label: 'Totale kosten', value: '€120', isTotal: true },
          ],
          netLabel: 'Alleen abonnement —',
          netHtml: '<strong>geen performance fee</strong>',
        },
      ],
      footnote:
        'De performance fee wordt berekend over de totale netto winst van alle actieve strategieën samen. Maakt één strategie verlies en de andere winst, dan wordt alleen over het netto positieve resultaat een performance fee in rekening gebracht.',
    },
  },
  es: {
    title: 'Precios — HoneyBadger Trader',
    description:
      'Paga €5 por estrategia activa al mes y el 8% sobre tu beneficio neto total. Sin beneficio, sin comisión por rendimiento. Transparente y justo.',
    h1: 'Precios claros, sin letra pequeña',
    intro:
      'Sin costes fijos desorbitados ni comisiones de gestión sobre tu capital. Pagas por estrategia activa y solo ganamos cuando tú ganas.',
    card: {
      badge: 'Modelo híbrido',
      amount: '€5',
      period: '/ estrategia / mes',
      feePct: '8%',
      feeLabel: 'comisión por rendimiento sobre el beneficio neto total',
      tagline: 'Empieza con una estrategia. Añade la segunda cuando quieras.',
      features: [
        'Ambas estrategias disponibles — €5 por estrategia activa al mes',
        'Sin comisión de gestión sobre tu capital',
        'Trading Spot seguro (compatible con HODL)',
        'Trading automatizado 24/7',
        'Para o pausa en cualquier momento',
        'Tu cripto permanece en tu propia cuenta',
      ],
      cta: 'Apúntate al acceso anticipado',
      earlyAccessNote:
        'Durante el acceso anticipado: los primeros 3 meses son gratis por estrategia.\nDespués €5 por estrategia activa al mes + 8% de comisión por rendimiento sobre el beneficio neto total.',
    },
    example: {
      heading: 'Cómo se reparten los costes en un año',
      intro:
        'Los ejemplos siguientes muestran cómo se calculan los costes anuales — no qué puedes esperar ganar. Los rendimientos pasados no garantizan resultados futuros.',
      scenarios: [
        {
          title: 'Una estrategia, con beneficio',
          rows: [
            { label: 'Capital', value: '€5.000' },
            { label: 'Beneficio este año', value: '€1.500' },
            { label: 'Suscripción', value: '€60', note: '(1 × €5 × 12)', isSep: true },
            { label: 'Comisión por rendimiento', value: '€120', note: '(8% de €1.500)' },
            { label: 'Coste total', value: '€180', isTotal: true },
          ],
          netLabel: 'Neto para ti:',
          netHtml: '<strong>€1.320</strong>',
        },
        {
          title: 'Dos estrategias, con beneficio',
          rows: [
            { label: 'Capital', value: '€5.000' },
            { label: 'Beneficio este año', value: '€1.000' },
            { label: 'Suscripción', value: '€120', note: '(2 × €5 × 12)', isSep: true },
            { label: 'Comisión por rendimiento', value: '€80', note: '(8% de €1.000)' },
            { label: 'Coste total', value: '€200', isTotal: true },
          ],
          netLabel: 'Neto para ti:',
          netHtml: '<strong>€800</strong>',
        },
        {
          title: 'Dos estrategias, sin beneficio',
          rows: [
            { label: 'Capital', value: '€5.000' },
            { label: 'Beneficio este año', value: '€0' },
            { label: 'Suscripción', value: '€120', note: '(2 × €5 × 12)', isSep: true },
            { label: 'Comisión por rendimiento', value: '€0' },
            { label: 'Coste total', value: '€120', isTotal: true },
          ],
          netLabel: 'Solo suscripción —',
          netHtml: '<strong>sin comisión por rendimiento</strong>',
        },
      ],
      footnote:
        'La comisión por rendimiento se calcula sobre el beneficio neto total de todas las estrategias activas juntas. Si una estrategia pierde y otra gana, solo se cobra comisión sobre el resultado neto positivo.',
    },
  },
  en: {
    title: 'Pricing — HoneyBadger Trader',
    description:
      'Pay €5 per active strategy per month and 8% on your total net profit. No profit, no performance fee. Transparent and fair.',
    h1: 'Fair pricing, no hidden catches',
    intro:
      'No steep fixed fees or management charges on your capital. You pay per active strategy — we only earn when you do.',
    card: {
      badge: 'Hybrid model',
      amount: '€5',
      period: '/ strategy / month',
      feePct: '8%',
      feeLabel: 'performance fee on total net profit',
      tagline: 'Start with one strategy. Add the second whenever you like.',
      features: [
        'Both strategies available — €5 per active strategy per month',
        'No management fee on your capital',
        'Safe spot trading (HODL-friendly)',
        '24/7 automated trading',
        'Stop or pause at any time',
        'Your crypto stays on your own account',
      ],
      cta: 'Join early access',
      earlyAccessNote:
        'During early access: the first 3 months are free per strategy.\nThen €5 per active strategy per month + 8% performance fee on total net profit.',
    },
    example: {
      heading: 'How costs add up over a year',
      intro:
        'The examples below show how annual costs are calculated — not what you can expect to earn. Past returns do not guarantee future results.',
      scenarios: [
        {
          title: 'One strategy, profit made',
          rows: [
            { label: 'Capital', value: '€5.000' },
            { label: 'Profit this year', value: '€1.500' },
            { label: 'Subscription', value: '€60', note: '(1 × €5 × 12)', isSep: true },
            { label: 'Performance fee', value: '€120', note: '(8% of €1.500)' },
            { label: 'Total cost', value: '€180', isTotal: true },
          ],
          netLabel: 'Net for you:',
          netHtml: '<strong>€1.320</strong>',
        },
        {
          title: 'Two strategies, profit made',
          rows: [
            { label: 'Capital', value: '€5.000' },
            { label: 'Profit this year', value: '€1.000' },
            { label: 'Subscription', value: '€120', note: '(2 × €5 × 12)', isSep: true },
            { label: 'Performance fee', value: '€80', note: '(8% of €1.000)' },
            { label: 'Total cost', value: '€200', isTotal: true },
          ],
          netLabel: 'Net for you:',
          netHtml: '<strong>€800</strong>',
        },
        {
          title: 'Two strategies, no profit',
          rows: [
            { label: 'Capital', value: '€5.000' },
            { label: 'Profit this year', value: '€0' },
            { label: 'Subscription', value: '€120', note: '(2 × €5 × 12)', isSep: true },
            { label: 'Performance fee', value: '€0' },
            { label: 'Total cost', value: '€120', isTotal: true },
          ],
          netLabel: 'Subscription only —',
          netHtml: '<strong>no performance fee</strong>',
        },
      ],
      footnote:
        'The performance fee is calculated on the total net profit of all active strategies combined. If one strategy loses and another wins, the fee applies only to the net positive result.',
    },
  },
};
