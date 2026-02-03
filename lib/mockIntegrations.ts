export interface IntegrationLog {
  timestamp: string;
  status: 'success' | 'error' | 'warning';
  message: string;
  details?: string;
}

export interface BankAccount {
  accountNumber: string;
  currency: string;
  aggreg8Id: string;
  owner: string;
  accountName: string;
  availableBalance: string;
  lastSync: string;
  transactionCount: number;
  assignedCompany: string;
}

export interface InvoiceData {
  invoiceNumber: string;
  customerName: string;
  amount: string;
  currency: string;
  issueDate: string;
  dueDate: string;
  status: 'paid' | 'unpaid' | 'overdue' | 'cancelled';
  paymentMethod?: string;
}

export interface Integration {
  id: string;
  name: string;
  enabled: boolean;
  category: 'API' | 'PSD2';
  dataDirection: 'incoming' | 'outgoing';
  description: string;
  logoUrl?: string;
  documentationUrl?: string;
  lastSync?: string;
  logs?: IntegrationLog[];
  bankAccounts?: BankAccount[];
  validUntil?: string;
  invoices?: InvoiceData[];
  totalInvoices?: number;
  totalRevenue?: string;
}

export const mockIntegrations: Integration[] = [
  // API kategória
  {
    id: 'gls',
    name: 'GLS',
    enabled: true,
    category: 'API',
    dataDirection: 'incoming',
    description: 'Csomagküldési szolgáltatás integráció',
    logoUrl: 'https://gls-group.com/HU/media/images/GLS_logo_neg.jpg',
    documentationUrl: 'https://support.shoprenter.hu/hc/hu/articles/360014402618',
    lastSync: '2026-02-03 14:23:15',
    logs: [
      { timestamp: '2026-02-03 14:23:15', status: 'success', message: '12 csomag adat fogadva', details: 'GLSAPI' },
      { timestamp: '2026-02-03 12:15:08', status: 'success', message: '5 csomag adat fogadva', details: 'GLS API' },
      { timestamp: '2026-02-03 09:45:22', status: 'success', message: '3 csomag adat fogadva', details: 'GLS API' },
      { timestamp: '2026-02-02 16:30:11', status: 'success', message: '8 csomag adat fogadva', details: 'GLS API' },
    ],
  },
  {
    id: 'foxpost',
    name: 'Foxpost',
    enabled: true,
    category: 'API',
    dataDirection: 'incoming',
    description: 'Automatás csomagküldési szolgáltatás',
    logoUrl: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRVZN_uQ3P0lru2OlECMWscTHe_r8YXr2t3qQ&s',
    documentationUrl: 'https://www.foxpost.hu',
  },
  {
    id: 'mpl',
    name: 'MPL',
    enabled: true,
    category: 'API',
    dataDirection: 'incoming',
    description: 'Magyar Posta Logisztika integráció',
    logoUrl: 'https://www.uvegfoliak.hu/wp-content/uploads/2016/12/magyar-posta-mpl-logo.jpg',
    documentationUrl: 'https://www.posta.hu/vallalati-ugyfelek/termekek-es-arak/csomagkuldemeny',
    lastSync: '2026-02-03 13:10:45',
    logs: [
      { timestamp: '2026-02-03 13:10:45', status: 'success', message: '7 küldemény adat fogadva', details: 'MPL API' },
      { timestamp: '2026-02-03 10:22:33', status: 'success', message: '4 küldemény adat fogadva', details: 'MPL API' },
      { timestamp: '2026-02-02 15:18:50', status: 'success', message: '2 küldemény adat fogadva', details: 'MPL API' },
    ],
  },
  {
    id: 'viva-wallet',
    name: 'Viva Wallet',
    enabled: false,
    category: 'API',
    dataDirection: 'incoming',
    description: 'Online fizetési szolgáltatás',
    logoUrl: 'https://upload.wikimedia.org/wikipedia/commons/5/56/VIVA_WALLET_logo.jpg',
    documentationUrl: 'https://www.vivawallet.com',
  },
  // PSD2 kategória
  {
    id: 'szamlazz',
    name: 'Számlázz.hu Autokassza',
    enabled: true,
    category: 'PSD2',
    dataDirection: 'incoming',
    description: 'Beérkező fizetések automatikus fogadása',
    logoUrl: 'https://www.szamlazz.hu/wp-content/uploads/2023/09/szamlazzhu_logo-horizontal-2_orange.png',
    documentationUrl: 'https://www.szamlazz.hu',
    lastSync: '2026-02-03 15:05:30',
    totalInvoices: 342,
    totalRevenue: '15 847 230 HUF',
    logs: [
      { timestamp: '2026-02-03 15:05:30', status: 'success', message: '15 tranzakció fogadva', details: 'Számlázz.hu API' },
      { timestamp: '2026-02-03 11:40:12', status: 'success', message: '23 számla adat fogadva', details: 'Számlázz.hu API' },
      { timestamp: '2026-02-02 14:25:18', status: 'success', message: '8 tranzakció fogadva', details: 'Számlázz.hu API' },
    ],
    invoices: [
      {
        invoiceNumber: 'DEMO-2026-00245',
        customerName: 'Teszt Kereskedelmi Kft.',
        amount: '458 900',
        currency: 'HUF',
        issueDate: '2026-02-03',
        dueDate: '2026-02-17',
        status: 'paid',
        paymentMethod: 'Átutalás',
      },
      {
        invoiceNumber: 'DEMO-2026-00244',
        customerName: 'Mintavállalat Zrt.',
        amount: '1 250 000',
        currency: 'HUF',
        issueDate: '2026-02-02',
        dueDate: '2026-02-16',
        status: 'unpaid',
      },
      {
        invoiceNumber: 'DEMO-2026-00243',
        customerName: 'Próba Szolgáltató Bt.',
        amount: '89 500',
        currency: 'HUF',
        issueDate: '2026-02-01',
        dueDate: '2026-01-25',
        status: 'overdue',
      },
      {
        invoiceNumber: 'DEMO-2026-00242',
        customerName: 'Demo Kft.',
        amount: '342 100',
        currency: 'HUF',
        issueDate: '2026-01-31',
        dueDate: '2026-02-14',
        status: 'paid',
        paymentMethod: 'Bankkártya',
      },
      {
        invoiceNumber: 'DEMO-2026-00241',
        customerName: 'Minta Cég Kft.',
        amount: '678 400',
        currency: 'HUF',
        issueDate: '2026-01-30',
        dueDate: '2026-02-13',
        status: 'cancelled',
      },
    ],
  },
  {
    id: 'aggreg8',
    name: 'Aggreg8',
    enabled: true,
    category: 'PSD2',
    dataDirection: 'incoming',
    description: 'Banki adataggregációs szolgáltatás',
    logoUrl: 'https://szamvitelirendszer.hu/img/uploads/aggre8_logo@2x.png',
    documentationUrl: 'https://aggreg8.io',
    lastSync: '2026-02-03 14:50:22',
    validUntil: '2026-08-15',
    logs: [
      { timestamp: '2026-02-03 14:50:22', status: 'success', message: '3 bankszámla adat fogadva', details: 'Aggreg8 API' },
      { timestamp: '2026-02-03 08:30:15', status: 'success', message: '127 tranzakció fogadva', details: 'Aggreg8 API' },
      { timestamp: '2026-02-02 18:15:40', status: 'success', message: '3 egyenleg adat fogadva', details: 'Aggreg8 API' },
    ],
    bankAccounts: [
      {
        accountNumber: 'HU42123456789012345678901234',
        currency: 'HUF',
        aggreg8Id: '507f1f77bcf86cd799439011',
        owner: 'TESZT KERESKEDELMI KFT.',
        accountName: 'Teszt Kereskedelmi Kft. - Folyószámla',
        availableBalance: '1234567 HUF',
        lastSync: '2026-02-03',
        transactionCount: 245,
        assignedCompany: 'Teszt Kereskedelmi Kft.',
      },
      {
        accountNumber: 'HU51234567890123456789012345',
        currency: 'EUR',
        aggreg8Id: '507f191e810c19729de860ea',
        owner: 'TESZT KERESKEDELMI KFT.',
        accountName: 'Teszt Kereskedelmi Kft. - Devizaszámla',
        availableBalance: '12345.50 EUR',
        lastSync: '2026-02-02',
        transactionCount: 89,
        assignedCompany: 'Teszt Kereskedelmi Kft.',
      },
      {
        accountNumber: 'HU67111122223333444455556666',
        currency: 'HUF',
        aggreg8Id: '60d5ec49f1b2c8b1f8e4e1a1',
        owner: 'MINTAVÁLLALAT KFT.',
        accountName: 'Mintavállalat Kft. - Főszámla',
        availableBalance: '987654 HUF',
        lastSync: '2026-02-03',
        transactionCount: 178,
        assignedCompany: 'Mintavállalat Kft.',
      },
    ],
  },
  {
    id: 'bankkivonat',
    name: 'Bankszámlakivonat.hu',
    enabled: false,
    category: 'PSD2',
    dataDirection: 'incoming',
    description: 'Automatikus bankkivonat lekérés',
    logoUrl: 'https://bankszamlakivonat.hu/wp-content/uploads/2025/01/logo.png',
    documentationUrl: 'https://bankszamlakivonat.hu',
  },
  // Kimenő integrációk (Adat küldése)
  {
    id: 'adriana',
    name: 'Adriana',
    enabled: true,
    category: 'API',
    dataDirection: 'outgoing',
    description: 'Pénzügyi folyamatok automatizálása',
    logoUrl: 'https://adriana.hu/img/Logo.svg',
    documentationUrl: 'https://www.adriana.hu',
    lastSync: '2026-02-03 15:30:00',
    logs: [
      { timestamp: '2026-02-03 15:30:00', status: 'success', message: '45 tranzakció elküldve', details: 'Adriana API' },
      { timestamp: '2026-02-03 12:00:00', status: 'success', message: '28 tranzakció elküldve', details: 'Adriana API' },
    ],
  },
  {
    id: 'rlb-kettos',
    name: 'RLB Kettős',
    enabled: true,
    category: 'API',
    dataDirection: 'outgoing',
    description: 'Kettős könyvelési rendszer integráció',
    logoUrl: 'https://adriana.hu/img/partnerek/rlb.svg',
    documentationUrl: 'https://www.rlb.hu',
    lastSync: '2026-02-03 14:45:00',
    logs: [
      { timestamp: '2026-02-03 14:45:00', status: 'success', message: '32 bizonylat elküldve', details: 'RLB API' },
    ],
  },
  {
    id: 'actual',
    name: 'Actual ügyvitel',
    enabled: false,
    category: 'API',
    dataDirection: 'outgoing',
    description: 'Vállalatirányítási rendszer integráció',
    logoUrl: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ-YHVpOq2xDD_xvtQIOBqo5m5Q3BdSoKtDTg&s',
    documentationUrl: 'https://www.actual.hu',
  },
  {
    id: 'woodpacker',
    name: 'Woodpecker Software',
    enabled: true,
    category: 'API',
    dataDirection: 'outgoing',
    description: 'Raktárkezelési rendszer integráció',
    logoUrl: 'https://static.wixstatic.com/media/26c49c_d29273aade4247969a1b20554f756f8b~mv2.png',
    documentationUrl: 'https://www.woodpecker.hu',
    lastSync: '2026-02-03 13:20:00',
    logs: [
      { timestamp: '2026-02-03 13:20:00', status: 'success', message: '18 készletmozgás elküldve', details: 'Woodpacker API' },
    ],
  },
  {
    id: 'coimbraits',
    name: 'Coimbraits',
    enabled: false,
    category: 'API',
    dataDirection: 'outgoing',
    description: 'IT szolgáltatás integráció',
    logoUrl: 'https://www.coimbraits.hu/images/w_coimbra-its/coimbra-grp_logo.png',
    documentationUrl: 'https://www.coimbraits.hu',
  },
];

export interface FileBasedIntegration {
  id: string;
  name: string;
  category: 'bank' | 'courier' | 'pos';
  format: string;
  logoUrl?: string;
  note?: string;
  isNew?: boolean;
}

export const mockFileBasedIntegrations: FileBasedIntegration[] = [
  // Bankok
  {
    id: 'mbh-bank-xls',
    name: 'MBH Bank',
    category: 'bank',
    format: 'xls',
    logoUrl: 'https://upload.wikimedia.org/wikipedia/commons/thumb/e/ee/MBH_Bank_Logo_2023.svg/1280px-MBH_Bank_Logo_2023.svg.png',
    note: 'korábban: Budapest Bank, MKB Bank',
  },
  {
    id: 'mbh-bank-xml',
    name: 'MBH Bank',
    category: 'bank',
    format: 'xml',
    logoUrl: 'https://upload.wikimedia.org/wikipedia/commons/thumb/e/ee/MBH_Bank_Logo_2023.svg/1280px-MBH_Bank_Logo_2023.svg.png',
    note: 'korábban: Összes Takarék MT940',
  },
  {
    id: 'cib-internet-bank',
    name: 'CIB Internet Bank',
    category: 'bank',
    format: 'xls',
    logoUrl: 'https://upload.wikimedia.org/wikipedia/commons/thumb/2/2d/CIB_Bank_logo.svg/1280px-CIB_Bank_logo.svg.png',
  },
  {
    id: 'cib-online-business',
    name: 'CIB Online Business',
    category: 'bank',
    format: 'csv',
    logoUrl: 'https://upload.wikimedia.org/wikipedia/commons/thumb/2/2d/CIB_Bank_logo.svg/1280px-CIB_Bank_logo.svg.png',
  },
  {
    id: 'kh-bank',
    name: 'K&H Bank',
    category: 'bank',
    format: 'csv, xml',
    logoUrl: 'https://upload.wikimedia.org/wikipedia/commons/thumb/a/a9/K%26H_logo.svg/960px-K%26H_logo.svg.png',
  },
  {
    id: 'kh-electra',
    name: 'K&H Electra',
    category: 'bank',
    format: 'csv',
    logoUrl: 'https://upload.wikimedia.org/wikipedia/commons/thumb/a/a9/K%26H_logo.svg/960px-K%26H_logo.svg.png',
  },
  {
    id: 'otp-direkt',
    name: 'OTP Direkt',
    category: 'bank',
    format: 'xls',
    logoUrl: 'https://www.gtk.uni-pannon.hu/wp-content/uploads/2022/06/OTP-Bank-Logo.png',
  },
  {
    id: 'otp-electra',
    name: 'OTP Electra',
    category: 'bank',
    format: 'csv',
    logoUrl: 'https://www.gtk.uni-pannon.hu/wp-content/uploads/2022/06/OTP-Bank-Logo.png',
  },
  {
    id: 'erste-bank',
    name: 'Erste Bank',
    category: 'bank',
    format: 'csv',
    logoUrl: 'https://upload.wikimedia.org/wikipedia/commons/c/cb/Logo_Erste_Bank.png',
  },
  {
    id: 'revolut',
    name: 'Revolut',
    category: 'bank',
    format: 'csv',
    logoUrl: 'https://download.logo.wine/logo/Revolut/Revolut-Logo.wine.png',
  },
  {
    id: 'wise',
    name: 'Wise',
    category: 'bank',
    format: 'csv',
    logoUrl: 'https://d21buns5ku92am.cloudfront.net/69645/images/470455-Frame%2039263-cdfad6-medium-1677657684.png',
    note: 'korábban: Transferwise',
    isNew: true,
  },
  
  // Futárok
  {
    id: 'gls-courier',
    name: 'GLS',
    category: 'courier',
    format: 'xls',
    logoUrl: 'https://gls-group.com/HU/media/images/GLS_logo_neg.jpg',
  },
  {
    id: 'foxpost-courier',
    name: 'Foxpost',
    category: 'courier',
    format: 'xls',
    logoUrl: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRVZN_uQ3P0lru2OlECMWscTHe_r8YXr2t3qQ&s',
  },
  {
    id: 'mpl-courier',
    name: 'MPL',
    category: 'courier',
    format: 'csv',
    logoUrl: 'https://www.uvegfoliak.hu/wp-content/uploads/2016/12/magyar-posta-mpl-logo.jpg',
  },
  {
    id: 'dhl-courier',
    name: 'DHL',
    category: 'courier',
    format: 'xls',
    logoUrl: 'https://upload.wikimedia.org/wikipedia/commons/thumb/a/ac/DHL_Logo.svg/2560px-DHL_Logo.svg.png',
  },
  {
    id: 'dpd-courier',
    name: 'DPD',
    category: 'courier',
    format: 'xls',
    logoUrl: 'https://upload.wikimedia.org/wikipedia/commons/thumb/a/ab/DPD_logo_%282015%29.svg/960px-DPD_logo_%282015%29.svg.png',
  },
  {
    id: 'sprinter-courier',
    name: 'Sprinter',
    category: 'courier',
    format: 'xls',
    logoUrl: 'https://lapker.hu/wp-content/uploads/2020/01/markaink-sprinter-dekor.jpg',
  },
  
  // POS rendszerek
  {
    id: 'barion-pos',
    name: 'Barion',
    category: 'pos',
    format: 'csv',
    logoUrl: 'https://docs.barion.com/images/b/bd/Barion_official_logo.png',
  },
  {
    id: 'stripe-pos',
    name: 'Stripe',
    category: 'pos',
    format: 'csv',
    logoUrl: 'https://upload.wikimedia.org/wikipedia/commons/thumb/b/ba/Stripe_Logo%2C_revised_2016.svg/2560px-Stripe_Logo%2C_revised_2016.svg.png',
  },
  {
    id: 'paypal-pos',
    name: 'PayPal',
    category: 'pos',
    format: 'csv',
    logoUrl: 'https://upload.wikimedia.org/wikipedia/commons/thumb/b/b5/PayPal.svg/2560px-PayPal.svg.png',
  },
  {
    id: 'simplepay',
    name: 'OTP Simple',
    category: 'pos',
    format: 'csv',
    logoUrl: 'https://www.gtk.uni-pannon.hu/wp-content/uploads/2022/06/OTP-Bank-Logo.png',
  },
  {
    id: 'kh-pos',
    name: 'K&H POS24',
    category: 'pos',
    format: 'xls',
    logoUrl: 'https://upload.wikimedia.org/wikipedia/commons/thumb/a/a9/K%26H_logo.svg/960px-K%26H_logo.svg.png',
    isNew: true,
  },
  {
    id: 'viva-wallet-pos',
    name: 'Viva Wallet',
    category: 'pos',
    format: 'xls',
    logoUrl: 'https://upload.wikimedia.org/wikipedia/commons/5/56/VIVA_WALLET_logo.jpg',
    isNew: true,
  },
];
