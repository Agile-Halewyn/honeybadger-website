import type { LocalizedTerms } from './types';

export const termsContent: LocalizedTerms = {
  nl: {
    title: 'Algemene Voorwaarden — HoneyBadger Trader',
    metaDescription: 'Algemene Voorwaarden van HoneyBadger Trader.',
    h1: 'Algemene Voorwaarden',
    lastUpdated: 'Versie 1.0 — laatst bijgewerkt: 21 juli 2026',
    noticeLabel: 'Let op:',
    notice:
      'Deze versie 1.0 is opgesteld door de platformeigenaar en nog niet formeel getoetst door een gespecialiseerd jurist. Een gerichte juridische toets op de aansprakelijkheidsbepaling (art. 7) en de disclaimer "geen beleggingsadvies" (art. 3) is gepland zodra daarvoor budget beschikbaar is; na die toets volgt versie 2.0.',
    sections: [
      {
        heading: '1. Definities',
        list: [
          '<strong>HoneyBadger Trader / Wij:</strong> eenmanszaak Agile Halewyn, gevestigd aan Middenburcht 27, 3452MS Vleuten, KvK-nummer 90024559, vestigingsnummer 000055776876. Handelsnamen: Agile Halewyn, HoneyBadger Trader en HoneyBadger Bots.',
          '<strong>Gebruiker / Jij:</strong> de natuurlijke persoon die gebruikmaakt van onze software',
          '<strong>Dienst:</strong> het aanbieden van software (Software-as-a-Service) waarmee de Gebruiker signalen geautomatiseerd op zijn eigen Bitvavo account kan laten uitvoeren via trading bots',
          '<strong>Dashboard:</strong> het online platform waarop de Gebruiker zijn algoritmes en handelsresultaten kan inzien en zelf kan activeren of pauzeren',
          '<strong>API-sleutel:</strong> de door de Gebruiker verstrekte toegangssleutel tot zijn Bitvavo account, beperkt tot handelsrechten',
        ],
      },
      {
        heading: '2. Toepasselijkheid',
        paragraphs: [
          {
            text: 'Deze Algemene Voorwaarden zijn van toepassing op elk gebruik van de Dienst. Door je te registreren en gebruik te maken van HoneyBadger Trader, ga je akkoord met deze voorwaarden.',
          },
        ],
      },
      {
        heading: '3. De dienst (Software-as-a-Service)',
        list: [
          'HoneyBadger Trader biedt software die handelssignalen direct op jouw Bitvavo account kan uitvoeren. <strong>Wij beheren geen vermogen.</strong> Jij behoudt de volledige controle om bots op elk moment te starten of te stoppen.',
          'Wij vereisen uitsluitend handelsrechten via je API-sleutel. Wij kunnen (en willen) nooit geld opnemen of verplaatsen vanaf je account.',
          '<strong>Wij geven geen beleggingsadvies en verrichten geen vermogensbeheer.</strong> HoneyBadger Trader is uitsluitend een software-tool (execution only). De keuze om een strategie te activeren, te wijzigen of te stoppen — en daarmee elke handelsbeslissing die daaruit volgt — is en blijft volledig een eigen, zelfstandige keuze van de Gebruiker. Wij beoordelen niet of een strategie geschikt is voor jouw persoonlijke situatie.',
          'Wij garanderen geen winst. Crypto-trading is risicovol en je kunt (een deel van) je inleg verliezen.',
          'De Dienst is beschikbaar op basis van best effort. Wij streven naar maximale beschikbaarheid maar garanderen geen 100% uptime.',
        ],
      },
      {
        heading: '4. Registratie en account',
        list: [
          'Je moet minimaal 18 jaar oud zijn om de Dienst te gebruiken.',
          'Je bent verantwoordelijk voor de juistheid van je gegevens.',
          'Je bent verantwoordelijk voor het geheimhouden van je inloggegevens.',
          'Je mag je account niet delen met of overdragen aan derden.',
        ],
      },
      {
        heading: '5. API-sleutel en beveiliging',
        list: [
          'Je bent verplicht een API-sleutel te verstrekken met uitsluitend handelsrechten. Opnamerechten moeten te allen tijde uitgeschakeld blijven.',
          'Wij slaan je API-sleutel versleuteld op conform onze beveiligingsstandaarden.',
          'Wij zijn niet verantwoordelijk voor schade als gevolg van een gecompromitteerde API-sleutel die niet via ons platform is gelekt.',
        ],
      },
      {
        heading: '6. Kosten en betaling',
        list: [
          'Het abonnement bedraagt €5 per actieve strategie per maand.',
          'Een strategie is actief zodra de bijbehorende bot is gestart op jouw account.',
          'Bij meerdere actieve strategieën wordt per strategie afzonderlijk €5 per maand in rekening gebracht.',
          'Daarnaast betaal je een performance fee van 8% over de totale netto winst van alle actieve strategieën samen per kalendermaand.',
          'Netto winst is de som van alle gerealiseerde winsten minus alle gerealiseerde verliezen over alle actieve strategieën in die maand.',
          'Bij een negatieve of nul netto winst wordt geen performance fee in rekening gebracht.',
          'Tijdens de early access periode zijn de eerste 3 maanden gratis per strategie.',
          'Facturatie vindt maandelijks achteraf plaats, momenteel handmatig per e-mail; automatische incasso volgt in een latere fase.',
          'Betaaltermijn: 14 dagen na factuurdatum. Bedragen zijn in euro, exclusief eventueel verschuldigde btw indien van toepassing.',
          'Bij niet-tijdige betaling kunnen wij, na een herinnering, de toegang tot de Dienst (waaronder het starten van bots) opschorten totdat de betaling is ontvangen. Reeds actieve bots blijven bij opschorting op jouw eigen Bitvavo-account onder jouw eigen beheer — wij grijpen niet in op je account.',
        ],
      },
      {
        heading: '7. Aansprakelijkheid',
        list: [
          'HoneyBadger Trader is niet aansprakelijk voor verliezen als gevolg van handelstransacties uitgevoerd door de bots, waaronder verliezen die voortvloeien uit de keuze van de Gebruiker om een strategie te (blijven) activeren.',
          'HoneyBadger Trader is niet aansprakelijk voor schade als gevolg van storingen bij Bitvavo, internetverbinding of andere externe factoren buiten onze redelijke controle (overmacht).',
          'Wij zijn niet aansprakelijk voor indirecte schade of gevolgschade, waaronder gederfde winst, gemiste besparingen of schade door bedrijfsstagnatie.',
          'Onze totale aansprakelijkheid is beperkt tot het bedrag dat je in de voorafgaande 3 maanden aan ons hebt betaald, met een absoluut maximum van €1.000 per Gebruiker per kalenderjaar.',
          'Deze beperkingen gelden niet voor schade die het gevolg is van opzet of bewuste roekeloosheid van HoneyBadger Trader, of voor zover dwingend Nederlands consumentenrecht een verdergaande beperking niet toestaat.',
        ],
      },
      {
        heading: '8. Beëindiging',
        list: [
          'Je kunt op elk moment je account opzeggen en je bots stoppen.',
          'Bij opzegging worden openstaande posities niet automatisch gesloten — je bent zelf verantwoordelijk voor het beheer van je Bitvavo account na opzegging.',
          'Wij kunnen je account beëindigen bij schending van deze voorwaarden, met inachtneming van een redelijke waarschuwingstermijn tenzij onmiddellijke beëindiging noodzakelijk is.',
        ],
      },
      {
        heading: '9. Herroepingsrecht',
        intro:
          '<strong>Let op — dit artikel is nog niet juridisch getoetst en heeft prioriteit bij de externe check (zie let-op-blok bovenaan).</strong>',
        list: [
          'Bij overeenkomsten op afstand geldt in beginsel een wettelijke bedenktijd van 14 dagen waarbinnen je de overeenkomst kosteloos kunt herroepen.',
          'Door bij registratie uitdrukkelijk om onmiddellijke start van de Dienst te vragen, doe je afstand van je herroepingsrecht zodra de Dienst volledig is uitgevoerd (art. 6:230p BW). Voor het reeds afgenomen deel van de Dienst blijf je betaling verschuldigd, ook als je nadien alsnog herroept binnen de bedenktijd.',
          'Deze afstandsverklaring wordt bij registratie uitdrukkelijk voorgelegd via het akkoord-vakje in de registratieflow van het HoneyBadger Trader-dashboard (click-wrap), naast het akkoord met deze Algemene Voorwaarden en kennisname van het Privacybeleid.',
        ],
      },
      {
        heading: '10. Wijzigingen',
        paragraphs: [
          {
            text: 'Wij kunnen deze voorwaarden wijzigen. Bij wezenlijke wijzigingen informeren wij je minimaal 30 dagen vooraf per e-mail. Gebruik na de wijzigingsdatum geldt als aanvaarding.',
          },
        ],
      },
      {
        heading: '11. Toepasselijk recht',
        paragraphs: [
          {
            text: 'Op deze voorwaarden is Nederlands recht van toepassing. Geschillen worden voorgelegd aan de bevoegde rechter van de vestigingsplaats van HoneyBadger Trader (arrondissement Midden-Nederland), tenzij dwingend recht een andere rechter voorschrijft.',
          },
        ],
      },
      {
        heading: '12. Contact',
        paragraphs: [
          {
            html: 'Vragen over deze voorwaarden? Neem contact op via <a href="{contactMailto}">{contactEmail}</a>.',
          },
        ],
      },
    ],
  },

  es: {
    title: 'Términos y Condiciones — HoneyBadger Trader',
    metaDescription: 'Términos y Condiciones de HoneyBadger Trader.',
    h1: 'Términos y Condiciones',
    lastUpdated: 'Versión 1.0 — última actualización: 21 de julio de 2026',
    noticeLabel: 'Atención:',
    notice:
      'Esta versión 1.0 ha sido redactada por el propietario de la plataforma y aún no ha sido revisada formalmente por un jurista especializado. Se prevé una revisión jurídica específica de la cláusula de responsabilidad (art. 7) y del descargo de responsabilidad «no asesoramiento de inversión» (art. 3) en cuanto haya presupuesto disponible; tras dicha revisión se publicará la versión 2.0.',
    bindingClause: 'La versión en neerlandés es la vinculante.',
    sections: [
      {
        heading: '1. Definiciones',
        list: [
          '<strong>HoneyBadger Trader / Nosotros:</strong> empresa unipersonal Agile Halewyn, con domicilio en Middenburcht 27, 3452MS Vleuten (Países Bajos), número de la Cámara de Comercio 90024559, número de establecimiento 000055776876. Nombres comerciales: Agile Halewyn, HoneyBadger Trader y HoneyBadger Bots.',
          '<strong>Usuario / Usted:</strong> la persona física que utiliza nuestro software',
          '<strong>Servicio:</strong> la prestación de software (Software como Servicio) mediante el cual el Usuario puede ejecutar señales de forma automatizada en su propia cuenta de Bitvavo a través de bots de trading',
          '<strong>Panel de control:</strong> la plataforma en línea en la que el Usuario puede consultar sus algoritmos y resultados de trading, y activarlos o pausarlos por sí mismo',
          '<strong>Clave API:</strong> la clave de acceso proporcionada por el Usuario a su cuenta de Bitvavo, limitada a permisos de trading',
        ],
      },
      {
        heading: '2. Ámbito de aplicación',
        paragraphs: [
          {
            text: 'Estos Términos y Condiciones se aplican a todo uso del Servicio. Al registrarse y utilizar HoneyBadger Trader, usted acepta estos términos.',
          },
        ],
      },
      {
        heading: '3. El servicio (Software como Servicio)',
        list: [
          'HoneyBadger Trader ofrece software que puede ejecutar señales de trading directamente en su cuenta de Bitvavo. <strong>No gestionamos patrimonio alguno.</strong> Usted conserva el control total para iniciar o detener los bots en cualquier momento.',
          'Solo requerimos permisos de trading a través de su clave API. Nunca podemos (ni queremos) retirar o transferir fondos de su cuenta.',
          '<strong>No prestamos asesoramiento de inversión ni realizamos gestión de patrimonio.</strong> HoneyBadger Trader es exclusivamente una herramienta de software (solo ejecución). La decisión de activar, modificar o detener una estrategia — y, en consecuencia, cada decisión de trading que de ello se derive — es y sigue siendo enteramente una elección propia e independiente del Usuario. No evaluamos si una estrategia es adecuada para su situación personal.',
          'No garantizamos beneficios. El trading de criptomonedas conlleva riesgos y puede perder (parte de) su capital invertido.',
          'El Servicio se presta sobre la base de mejor esfuerzo. Nos esforzamos por lograr la máxima disponibilidad, pero no garantizamos un tiempo de actividad del 100 %.',
        ],
      },
      {
        heading: '4. Registro y cuenta',
        list: [
          'Debe tener al menos 18 años para utilizar el Servicio.',
          'Es responsable de la exactitud de sus datos.',
          'Es responsable de mantener la confidencialidad de sus credenciales de acceso.',
          'No puede compartir ni transferir su cuenta a terceros.',
        ],
      },
      {
        heading: '5. Clave API y seguridad',
        list: [
          'Está obligado a proporcionar una clave API con permisos exclusivamente de trading. Los permisos de retirada deben permanecer desactivados en todo momento.',
          'Almacenamos su clave API cifrada conforme a nuestros estándares de seguridad.',
          'No somos responsables de daños derivados de una clave API comprometida que no haya sido filtrada a través de nuestra plataforma.',
        ],
      },
      {
        heading: '6. Costes y pago',
        list: [
          'La suscripción asciende a 5 € por estrategia activa al mes.',
          'Una estrategia se considera activa en cuanto el bot correspondiente se inicia en su cuenta.',
          'Con varias estrategias activas, se facturan 5 € al mes por cada estrategia por separado.',
          'Además, abona una comisión de rendimiento del 8 % sobre el beneficio neto total de todas las estrategias activas conjuntamente por mes natural.',
          'El beneficio neto es la suma de todos los beneficios realizados menos todas las pérdidas realizadas de todas las estrategias activas en ese mes.',
          'Con beneficio neto negativo o nulo, no se cobra comisión de rendimiento.',
          'Durante el periodo de acceso anticipado, los tres primeros meses son gratuitos por estrategia.',
          'La facturación se realiza mensualmente a mes vencido; actualmente de forma manual por correo electrónico; el adeudo directo se implementará en una fase posterior.',
          'Plazo de pago: 14 días desde la fecha de factura. Los importes son en euros, excluido el IVA aplicable, si procede.',
          'En caso de impago, tras un recordatorio, podemos suspender el acceso al Servicio (incluido el inicio de bots) hasta recibir el pago. Los bots ya activos permanecen, durante la suspensión, en su propia cuenta de Bitvavo bajo su propia gestión — no intervenimos en su cuenta.',
        ],
      },
      {
        heading: '7. Responsabilidad',
        list: [
          'HoneyBadger Trader no es responsable de pérdidas derivadas de transacciones de trading ejecutadas por los bots, incluidas las pérdidas que resulten de la decisión del Usuario de (seguir) activando una estrategia.',
          'HoneyBadger Trader no es responsable de daños derivados de interrupciones en Bitvavo, la conexión a internet u otros factores externos fuera de nuestro control razonable (fuerza mayor).',
          'No somos responsables de daños indirectos o consecuenciales, incluidos lucro cesante, ahorros no obtenidos o daños por interrupción de la actividad empresarial.',
          'Nuestra responsabilidad total se limita al importe que usted nos haya abonado en los 3 meses anteriores, con un máximo absoluto de 1.000 € por Usuario y año natural.',
          'Estas limitaciones no se aplican a daños resultantes de dolo o imprudencia consciente por parte de HoneyBadger Trader, ni en la medida en que el derecho neerlandés imperativo de consumo no permita una limitación más amplia.',
        ],
      },
      {
        heading: '8. Resolución',
        list: [
          'Puede cancelar su cuenta y detener sus bots en cualquier momento.',
          'Tras la cancelación, las posiciones abiertas no se cierran automáticamente — usted es responsable de gestionar su cuenta de Bitvavo tras la cancelación.',
          'Podemos dar por terminada su cuenta en caso de incumplimiento de estos términos, respetando un plazo de aviso razonable salvo que la terminación inmediata sea necesaria.',
        ],
      },
      {
        heading: '9. Derecho de desistimiento',
        intro:
          '<strong>Atención — este artículo aún no ha sido revisado jurídicamente y tiene prioridad en la revisión externa (véase el aviso al inicio).</strong>',
        list: [
          'En los contratos a distancia, en principio existe un plazo legal de reflexión de 14 días durante el cual puede desistir del contrato sin coste alguno.',
          'Al solicitar expresamente en el registro el inicio inmediato del Servicio, usted renuncia a su derecho de desistimiento en cuanto el Servicio se haya ejecutado por completo (art. 6:230p BW). Por la parte del Servicio ya prestada sigue siendo deudor del pago, incluso si posteriormente desiste dentro del plazo de reflexión.',
          'Esta renuncia se presenta expresamente en el registro mediante la casilla de aceptación en el flujo de registro del panel de HoneyBadger Trader (click-wrap), junto con la aceptación de estos Términos y Condiciones y la toma de conocimiento de la Política de Privacidad.',
        ],
      },
      {
        heading: '10. Modificaciones',
        paragraphs: [
          {
            text: 'Podemos modificar estos términos. En caso de cambios sustanciales, le informaremos con al menos 30 días de antelación por correo electrónico. El uso tras la fecha de modificación se considerará aceptación.',
          },
        ],
      },
      {
        heading: '11. Ley aplicable',
        paragraphs: [
          {
            text: 'Estos términos se rigen por la legislación neerlandesa. Las disputas se someterán al tribunal competente del domicilio social de HoneyBadger Trader (distrito de Midden-Nederland), salvo que la ley imperativa designe otro tribunal.',
          },
        ],
      },
      {
        heading: '12. Contacto',
        paragraphs: [
          {
            html: '¿Tiene preguntas sobre estos términos? Póngase en contacto con nosotros en <a href="{contactMailto}">{contactEmail}</a>.',
          },
        ],
      },
    ],
  },

  en: {
    title: 'Terms and Conditions — HoneyBadger Trader',
    metaDescription: 'Terms and Conditions of HoneyBadger Trader.',
    h1: 'Terms and Conditions',
    lastUpdated: 'Version 1.0 — last updated: 21 July 2026',
    noticeLabel: 'Please note:',
    notice:
      'This version 1.0 was drafted by the platform owner and has not yet been formally reviewed by a specialist legal adviser. A targeted legal review of the liability clause (Section 7) and the "no investment advice" disclaimer (Section 3) is planned once budget is available; version 2.0 will follow that review.',
    bindingClause: 'The Dutch version is binding.',
    sections: [
      {
        heading: '1. Definitions',
        list: [
          '<strong>HoneyBadger Trader / We:</strong> sole proprietorship Agile Halewyn, registered at Middenburcht 27, 3452MS Vleuten, the Netherlands, Chamber of Commerce number 90024559, establishment number 000055776876. Trading names: Agile Halewyn, HoneyBadger Trader and HoneyBadger Bots.',
          '<strong>User / You:</strong> the natural person who uses our software',
          '<strong>Service:</strong> the provision of software (Software-as-a-Service) enabling the User to execute signals automatically on their own Bitvavo account via trading bots',
          '<strong>Dashboard:</strong> the online platform on which the User can view their algorithms and trading results, and activate or pause them independently',
          '<strong>API key:</strong> the access key provided by the User to their Bitvavo account, limited to trading permissions',
        ],
      },
      {
        heading: '2. Applicability',
        paragraphs: [
          {
            text: 'These Terms and Conditions apply to all use of the Service. By registering and using HoneyBadger Trader, you agree to these terms.',
          },
        ],
      },
      {
        heading: '3. The service (Software-as-a-Service)',
        list: [
          'HoneyBadger Trader provides software that can execute trading signals directly on your Bitvavo account. <strong>We do not manage any assets.</strong> You retain full control to start or stop bots at any time.',
          'We require trading permissions only via your API key. We can (and will) never withdraw or transfer funds from your account.',
          '<strong>We do not provide investment advice and do not perform asset management.</strong> HoneyBadger Trader is solely a software tool (execution only). The decision to activate, modify or stop a strategy — and thereby every trading decision that follows — is and remains entirely your own, independent choice. We do not assess whether a strategy is suitable for your personal circumstances.',
          'We do not guarantee profits. Crypto trading is risky and you may lose (part of) your invested capital.',
          'The Service is provided on a best-effort basis. We strive for maximum availability but do not guarantee 100% uptime.',
        ],
      },
      {
        heading: '4. Registration and account',
        list: [
          'You must be at least 18 years old to use the Service.',
          'You are responsible for the accuracy of your data.',
          'You are responsible for keeping your login credentials confidential.',
          'You may not share or transfer your account to third parties.',
        ],
      },
      {
        heading: '5. API key and security',
        list: [
          'You are required to provide an API key with trading permissions only. Withdrawal permissions must remain disabled at all times.',
          'We store your API key encrypted in accordance with our security standards.',
          'We are not liable for damage resulting from a compromised API key that was not leaked via our platform.',
        ],
      },
      {
        heading: '6. Fees and payment',
        list: [
          'The subscription fee is €5 per active strategy per month.',
          'A strategy is active once the corresponding bot has been started on your account.',
          'With multiple active strategies, €5 per month is charged separately for each strategy.',
          'In addition, you pay a performance fee of 8% on the total net profit of all active strategies combined per calendar month.',
          'Net profit is the sum of all realised gains minus all realised losses across all active strategies in that month.',
          'No performance fee is charged where net profit is negative or zero.',
          'During the early access period, the first 3 months are free per strategy.',
          'Invoicing takes place monthly in arrears, currently manually by email; direct debit will follow in a later phase.',
          'Payment term: 14 days from invoice date. Amounts are in euros, excluding any applicable VAT.',
          'In the event of late payment, after a reminder we may suspend access to the Service (including starting bots) until payment is received. Bots already active remain, during suspension, on your own Bitvavo account under your own management — we do not intervene in your account.',
        ],
      },
      {
        heading: '7. Liability',
        list: [
          'HoneyBadger Trader is not liable for losses resulting from trades executed by the bots, including losses arising from your decision to (continue to) activate a strategy.',
          'HoneyBadger Trader is not liable for damage resulting from outages at Bitvavo, internet connectivity or other external factors beyond our reasonable control (force majeure).',
          'We are not liable for indirect or consequential damage, including lost profits, missed savings or damage from business interruption.',
          'Our total liability is limited to the amount you have paid us in the preceding 3 months, with an absolute maximum of €1,000 per User per calendar year.',
          'These limitations do not apply to damage resulting from intent or conscious recklessness on the part of HoneyBadger Trader, or to the extent mandatory Dutch consumer law does not permit a broader limitation.',
        ],
      },
      {
        heading: '8. Termination',
        list: [
          'You may cancel your account and stop your bots at any time.',
          'Upon cancellation, open positions are not automatically closed — you are responsible for managing your Bitvavo account after cancellation.',
          'We may terminate your account in the event of a breach of these terms, subject to a reasonable notice period unless immediate termination is necessary.',
        ],
      },
      {
        heading: '9. Right of withdrawal',
        intro:
          '<strong>Please note — this section has not yet been legally reviewed and takes priority in the external review (see notice at the top).</strong>',
        list: [
          'For distance contracts, a statutory cooling-off period of 14 days generally applies during which you may withdraw from the contract free of charge.',
          'By explicitly requesting immediate commencement of the Service upon registration, you waive your right of withdrawal once the Service has been fully performed (art. 6:230p BW). For the portion of the Service already provided, you remain liable for payment even if you subsequently withdraw within the cooling-off period.',
          'This waiver is explicitly presented upon registration via the consent checkbox in the HoneyBadger Trader dashboard registration flow (click-wrap), alongside acceptance of these Terms and Conditions and acknowledgement of the Privacy Policy.',
        ],
      },
      {
        heading: '10. Changes',
        paragraphs: [
          {
            text: 'We may amend these terms. For material changes, we will notify you at least 30 days in advance by email. Use after the change date constitutes acceptance.',
          },
        ],
      },
      {
        heading: '11. Governing law',
        paragraphs: [
          {
            text: 'These terms are governed by Dutch law. Disputes shall be submitted to the competent court at HoneyBadger Trader\'s registered office (District Court of Midden-Nederland), unless mandatory law prescribes a different court.',
          },
        ],
      },
      {
        heading: '12. Contact',
        paragraphs: [
          {
            html: 'Questions about these terms? Contact us at <a href="{contactMailto}">{contactEmail}</a>.',
          },
        ],
      },
    ],
  },
};
