'use client';

import BankConsentCard from '@/components/ui/BankConsentCard';

interface BankAccount {
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

interface BankConsent {
  bankName: string;
  accounts: BankAccount[];
  validUntil: string;
}

const mockData: BankConsent[] = [
  {
    bankName: 'Példa Bank Zrt.',
    validUntil: '2026-08-15',
    accounts: [
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
        accountNumber: 'HU89987654321098765432109876',
        currency: 'USD',
        aggreg8Id: '507f191e810c19729de860eb',
        owner: 'TESZT KERESKEDELMI KFT.',
        accountName: 'Teszt Kereskedelmi Kft. - USD számla',
        availableBalance: '8900.00 USD',
        lastSync: '2026-02-01',
        transactionCount: 34,
        assignedCompany: 'Teszt Kereskedelmi Kft.',
      },
    ],
  },
  {
    bankName: 'Minta Takarék Bank',
    validUntil: '2026-06-20',
    accounts: [
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
      {
        accountNumber: 'HU92555566667777888899990000',
        currency: 'EUR',
        aggreg8Id: '60d5ec49f1b2c8b1f8e4e1a2',
        owner: 'MINTAVÁLLALAT KFT.',
        accountName: 'Mintavállalat Kft. -Eurószámla',
        availableBalance: '45678.90 EUR',
        lastSync: '2026-02-02',
        transactionCount: 92,
        assignedCompany: 'Mintavállalat Kft.',
      },
    ],
  },
  {
    bankName: 'Demo Elektronikus Bank',
    validUntil: '2026-09-30',
    accounts: [
      {
        accountNumber: 'HU33444455556666777788889999',
        currency: 'HUF',
        aggreg8Id: '65f3a1b2c3d4e5f6a7b8c9d0',
        owner: 'PRÓBA SZOLGÁLTATÓ BT.',
        accountName: 'Próba Szolgáltató Bt. - Betéti számla',
        availableBalance: '567890 HUF',
        lastSync: '2026-02-03',
        transactionCount: 312,
        assignedCompany: 'Próba Szolgáltató Bt.',
      },
      {
        accountNumber: 'HU18999988887777666655554444',
        currency: 'EUR',
        aggreg8Id: '65f3a1b2c3d4e5f6a7b8c9d1',
        owner: 'PRÓBA SZOLGÁLTATÓ BT.',
        accountName: 'Próba Szolgáltató Bt. - Euro folyószámla',
        availableBalance: '23456.75 EUR',
        lastSync: '2026-02-03',
        transactionCount: 156,
        assignedCompany: 'Próba Szolgáltató Bt.',
      },
    ],
  },
];

export default function BankConsentsPage() {
  return (
    <div className="container mx-auto px-4 py-6">
      <h1 className="text-xl font-semibold mb-4">Banki hozzájárulások</h1>

      <div className="flex flex-col gap-4">
        {mockData.map((consent, idx) => (
          <BankConsentCard key={idx} consent={consent} />
        ))}
      </div>
    </div>
  );
}
