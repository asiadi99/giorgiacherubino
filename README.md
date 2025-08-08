# Giorgia Cherubino - Life Coach Website

Un sito web moderno e professionale per Giorgia Cherubino, life coach specializzata in percorsi di crescita personale e consapevolezza.

## 🌟 Caratteristiche

- **Design Moderno**: UI/UX curata con palette colori coerente (blu-verde sfumato)
- **Responsive**: Ottimizzato per tutti i dispositivi (desktop, tablet, mobile)
- **Performance**: Build ottimizzata con Next.js 15
- **Animazioni Fluide**: Transizioni e animazioni per un'esperienza coinvolgente
- **SEO Ottimizzato**: Metadata e struttura ottimizzati per i motori di ricerca

## 🚀 Sezioni del Sito

1. **Hero Slideshow**: Presentazione dinamica con messaggi motivazionali e CTA
2. **Servizi**: Descrizione chiara dei percorsi offerti
3. **Testimonianze**: Video e testimonianze scritte dei clienti
4. **La Mia Storia**: Racconto personale del percorso professionale
5. **Contatti**: Modulo di contatto funzionale e informazioni di contatto

## 🛠 Tecnologie Utilizzate

- **Next.js 15**: Framework React per applicazioni web
- **TypeScript**: Tipizzazione statica per maggiore robustezza
- **Tailwind CSS**: Framework CSS utility-first
- **Framer Motion**: Libreria per animazioni fluide
- **Lucide React**: Icone moderne e leggere
- **Vercel**: Piattaforma di hosting e deployment

## 📱 Responsiveness

Il sito è completamente responsive e ottimizzato per:
- Desktop (1200px+)
- Tablet (768px - 1199px)
- Mobile (320px - 767px)

## 🎨 Palette Colori

Basata sulla foto profilo di Giorgia, la palette include:
- **Primary**: Blu (#0ea5e9 - #0284c7)
- **Secondary**: Verde (#10b981 - #059669)
- **Accent**: Teal (#14b8a6 - #0d9488)
- **Neutral**: Grigi (#fafafa - #171717)

## 🚀 Deploy su Vercel

### Opzione 1: Deploy Automatico
1. Vai su [vercel.com](https://vercel.com)
2. Collega il tuo account GitHub
3. Importa questo repository
4. Vercel rileverà automaticamente Next.js e farà il deploy

### Opzione 2: Deploy da CLI
```bash
npm install -g vercel
vercel login
vercel --prod
```

### Opzione 3: Deploy Manuale
1. Esegui `npm run build`
2. Carica la cartella `.next` su Vercel

## 💻 Sviluppo Locale

### Prerequisiti
- Node.js 18+ 
- npm o yarn

### Installazione
```bash
# Clona il repository
git clone [url-repository]
cd giorgia-cherubino-site

# Installa le dipendenze
npm install

# Configura le variabili d'ambiente
# Crea un file .env nella root del progetto con:
EMAIL_USER=giorgiacherubinocoach@gmail.com
EMAIL_PASS=your_app_specific_password_here
GOOGLE_SITE_VERIFICATION=your_google_verification_code
FACEBOOK_DOMAIN_VERIFICATION=your_facebook_verification_code

# Avvia il server di sviluppo
npm run dev
```

### Configurazione Email
Per il form di contatto, è necessario:
1. Creare una password specifica per l'app su Gmail
   - Vai su Account Google > Sicurezza
   - Abilita "Verifica in due passaggi"
   - Crea una "Password per le app"
2. Usa questa password nel file .env come EMAIL_PASS

### Verifica del Sito
Per la verifica del sito:
1. Google Search Console: ottieni il codice di verifica
2. Facebook Business Manager: ottieni il codice di verifica
3. Inserisci i codici nel file .env

Il sito sarà disponibile su `http://localhost:3000`

### Comandi Disponibili

```bash
# Sviluppo
npm run dev

# Build di produzione
npm run build

# Avvia la versione di produzione
npm start

# Linting
npm run lint
```

## 📁 Struttura del Progetto

```
giorgia-cherubino-site/
├── public/
│   ├── giorgia-profile.jpg     # Foto profilo
│   └── ...                     # Altri asset statici
├── src/
│   ├── app/
│   │   ├── globals.css         # Stili globali
│   │   ├── layout.tsx          # Layout principale
│   │   └── page.tsx            # Homepage
│   └── components/
│       ├── Header.tsx          # Header con navigazione
│       ├── Footer.tsx          # Footer
│       ├── HeroSlideshow.tsx   # Slideshow hero
│       ├── ServicesSection.tsx # Sezione servizi
│       ├── TestimonialsSection.tsx # Testimonianze
│       ├── StorySection.tsx    # La mia storia
│       └── ContactSection.tsx  # Contatti
├── tailwind.config.js          # Configurazione Tailwind
├── vercel.json                 # Configurazione Vercel
└── package.json
```

## 🎯 Personalizzazioni

### Modificare i Contenuti
- **Servizi**: Modifica `src/components/ServicesSection.tsx`
- **Testimonianze**: Aggiorna gli array in `src/components/TestimonialsSection.tsx`
- **Storia**: Personalizza `src/components/StorySection.tsx`
- **Contatti**: Configura `src/components/ContactSection.tsx`

### Modificare i Colori
Aggiorna `tailwind.config.js` nella sezione `theme.extend.colors`

### Aggiungere Nuove Sezioni
1. Crea un nuovo componente in `src/components/`
2. Importalo e aggiungilo in `src/app/page.tsx`

## 📧 Contatti e Supporto

Per supporto tecnico o modifiche al sito:
- Email: [inserire email sviluppatore]
- GitHub: [inserire link repository]

## 📄 Licenza

Questo progetto è sviluppato specificamente per Giorgia Cherubino. Tutti i diritti riservati.

---

**Sviluppato con ❤️ per la crescita personale e il benessere**