import type { LocalizedPage, StrategiesPageContent } from './types';

export const strategiesContent: LocalizedPage<StrategiesPageContent> = {
  nl: {
    title: 'Onze strategieën — HoneyBadger Trader',
    description:
      'Ontdek onze Bitcoin-strategieën: RegimeSwitch en Swing Balanced. Volledig automatisch op je Bitvavo-account. Kies jouw aanpak.',
    h1: 'Onze strategieën',
    intro:
      'Beide bots handelen volledig automatisch op Bitcoin. Ze vullen elkaar aan: de één is voorzichtig en wacht op de juiste marktomstandigheden, de ander is actiever en benut kortere bewegingen.',
    strategies: [
      {
        badge: 'Voorzichtige handelaar',
        name: 'RegimeSwitch',
        intro:
          'RegimeSwitch kijkt voortdurend naar de stemming van de markt en past zijn gedrag daarop aan. Hij herkent vier marktfasen en handelt alleen als de omstandigheden gunstig zijn.',
        table: {
          headers: ['Marktsituatie', 'Wat doet de bot?'],
          rows: [
            { situation: 'Markt stijgt', action: 'Zoekt actief naar instapkansen' },
            { situation: 'Markt beweegt zijwaarts', action: 'Handelt selectief op terugvallen' },
            { situation: 'Markt daalt', action: 'Opent geen nieuwe posities' },
            { situation: 'Plotselinge koersval', action: 'Opent geen nieuwe posities' },
          ],
        },
        closing:
          'In ongunstige markten staat de bot stil. Zo beschermt hij het kapitaal totdat de omstandigheden verbeteren.',
      },
      {
        badge: 'Actieve handelaar',
        name: 'Swing Balanced',
        intro:
          'Swing Balanced handelt op momenten dat het marktmomentum omslaat naar boven. Zodra een uitbraak wordt gedetecteerd, opent de bot een positie en bewaakt hij die met twee exitregels tegelijk.',
        exitRules: [
          {
            label: '1. Signaalexit',
            body: 'Zodra het momentum keert, sluit de bot de positie.',
          },
          {
            label: '2. Winstdrempel',
            body: 'Als de koers een bepaalde winstdrempel bereikt, wordt automatisch verkocht — ook als het signaal nog niet is omgeslagen. Zo wordt winst daadwerkelijk vastgezet.',
          },
        ],
        closing:
          'Op basis van deze regels stuurt de bot actief op winstgevende sluitingen. Een brede veiligheidsgrens vangt extreme marktsituaties op.',
      },
    ],
    disclaimer: {
      body: 'Beide strategieën zijn ontwikkeld en geoptimaliseerd op historische Bitcoin-data en draaien volledig geautomatiseerd. Resultaten uit het verleden bieden geen garantie voor de toekomst.',
      linkText: 'Lees onze volledige risicoverklaring →',
    },
  },
  es: {
    title: 'Nuestras estrategias — HoneyBadger Trader',
    description:
      'Descubre nuestras estrategias Bitcoin: RegimeSwitch y Swing Balanced. Totalmente automatizadas en tu cuenta Bitvavo. Elige tu enfoque.',
    h1: 'Nuestras estrategias',
    intro:
      'Ambos bots operan de forma totalmente automática en Bitcoin. Se complementan: uno es prudente y espera las condiciones adecuadas; el otro es más activo y aprovecha movimientos más cortos.',
    strategies: [
      {
        badge: 'Trader prudente',
        name: 'RegimeSwitch',
        intro:
          'RegimeSwitch observa continuamente el estado del mercado y adapta su comportamiento. Reconoce cuatro fases y solo opera cuando las condiciones son favorables.',
        table: {
          headers: ['Situación del mercado', '¿Qué hace el bot?'],
          rows: [
            { situation: 'Mercado al alza', action: 'Busca activamente oportunidades de entrada' },
            { situation: 'Mercado lateral', action: 'Opera selectivamente en retrocesos' },
            { situation: 'Mercado a la baja', action: 'No abre nuevas posiciones' },
            { situation: 'Caída brusca', action: 'No abre nuevas posiciones' },
          ],
        },
        closing:
          'En mercados desfavorables el bot permanece inactivo, protegiendo el capital hasta que mejoren las condiciones.',
      },
      {
        badge: 'Trader activo',
        name: 'Swing Balanced',
        intro:
          'Swing Balanced opera cuando el momentum del mercado gira al alza. Tras detectar una ruptura, abre una posición y la gestiona con dos reglas de salida simultáneas.',
        exitRules: [
          {
            label: '1. Salida por señal',
            body: 'Cuando el momentum se invierte, el bot cierra la posición.',
          },
          {
            label: '2. Umbral de beneficio',
            body: 'Si el precio alcanza un umbral de beneficio definido, vende automáticamente — incluso si la señal aún no ha cambiado. Así se aseguran las ganancias.',
          },
        ],
        closing:
          'Con estas reglas, el bot busca activamente cierres rentables. Un amplio margen de seguridad cubre situaciones extremas del mercado.',
      },
    ],
    disclaimer: {
      body: 'Ambas estrategias se desarrollaron y optimizaron con datos históricos de Bitcoin y funcionan de forma totalmente automatizada. Los resultados pasados no garantizan resultados futuros.',
      linkText: 'Lee nuestra declaración de riesgos completa →',
    },
  },
  en: {
    title: 'Our strategies — HoneyBadger Trader',
    description:
      'Discover our Bitcoin strategies: RegimeSwitch and Swing Balanced. Fully automated on your Bitvavo account. Choose your approach.',
    h1: 'Our strategies',
    intro:
      'Both bots trade Bitcoin fully automatically. They complement each other: one is cautious and waits for the right market conditions; the other is more active and captures shorter moves.',
    strategies: [
      {
        badge: 'Cautious trader',
        name: 'RegimeSwitch',
        intro:
          'RegimeSwitch continuously reads market sentiment and adapts its behaviour. It recognises four market phases and trades only when conditions are favourable.',
        table: {
          headers: ['Market situation', 'What does the bot do?'],
          rows: [
            { situation: 'Market rising', action: 'Actively looks for entry opportunities' },
            { situation: 'Sideways market', action: 'Trades selectively on pullbacks' },
            { situation: 'Market falling', action: 'Opens no new positions' },
            { situation: 'Sudden price drop', action: 'Opens no new positions' },
          ],
        },
        closing:
          'In unfavourable markets the bot stays idle, protecting capital until conditions improve.',
      },
      {
        badge: 'Active trader',
        name: 'Swing Balanced',
        intro:
          'Swing Balanced trades when market momentum turns upward. Once a breakout is detected, the bot opens a position and manages it with two exit rules at once.',
        exitRules: [
          {
            label: '1. Signal exit',
            body: 'When momentum reverses, the bot closes the position.',
          },
          {
            label: '2. Profit threshold',
            body: 'If price reaches a set profit threshold, it sells automatically — even if the signal has not flipped yet. That locks in gains.',
          },
        ],
        closing:
          'With these rules the bot actively targets profitable exits. A wide safety margin handles extreme market situations.',
      },
    ],
    disclaimer: {
      body: 'Both strategies were developed and optimised on historical Bitcoin data and run fully automated. Past results do not guarantee future performance.',
      linkText: 'Read our full risk disclosure →',
    },
  },
};
