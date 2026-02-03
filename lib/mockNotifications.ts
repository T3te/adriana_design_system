export interface Notification {
  id: string;
  title: string;
  message: string;
  type: 'info' | 'warning' | 'success' | 'error';
  source: string;
  timestamp: Date;
  isRead: boolean;
}

export const mockNotifications: Notification[] = [
  {
    id: '1',
    title: 'GLS API frissítés',
    message: 'A GLS API 2026. február 15-én frissül. Kérjük, ellenőrizd a MyGLS hitelesítési adataidat. Az új verzióban kötelező lesz a kétfaktoros hitelesítés használata. További információ a dokumentációban.',
    type: 'warning',
    source: 'GLS Integration',
    timestamp: new Date('2026-02-03T10:30:00'),
    isRead: false,
  },
  {
    id: '2',
    title: 'Aggreg8 - Új bankok támogatása',
    message: 'Az Aggreg8 integráció mostantól támogatja az OTP Bank és a Raiffeisen Bank új API verzióit. A frissítés automatikusan életbe lép, nincs szükség kézi beavatkozásra.',
    type: 'success',
    source: 'Aggreg8',
    timestamp: new Date('2026-02-02T14:15:00'),
    isRead: false,
  },
  {
    id: '3',
    title: 'Számlázz.hu karbantartás',
    message: 'A Számlázz.hu karbantartást végez 2026. február 10-én 22:00-02:00 között. Ebben az időszakban a számlakiállítás szolgáltatás nem elérhető.',
    type: 'info',
    source: 'Számlázz.hu',
    timestamp: new Date('2026-02-01T09:00:00'),
    isRead: true,
  },
  {
    id: '4',
    title: 'Viva Wallet biztonsági frissítés',
    message: 'Kritikus biztonsági frissítés érhető el a Viva Wallet integrációhoz. Kérjük, frissítsd az API kulcsaidat a lehető leghamarabb a Settings menüben.',
    type: 'error',
    source: 'Viva Wallet',
    timestamp: new Date('2026-01-31T16:45:00'),
    isRead: false,
  },
  {
    id: '5',
    title: 'Foxpost új csomagautomata helyszínek',
    message: '15 új Foxpost automata került telepítésre Budapesten. Az új helyszínek automatikusan elérhetők a szállítási opciók között.',
    type: 'info',
    source: 'Foxpost',
    timestamp: new Date('2026-01-30T11:20:00'),
    isRead: true,
  },
  {
    id: '6',
    title: 'MPL Pick Pack Pont frissítés',
    message: 'Az MPL Pick Pack Pont hálózat bővült 25 új átvételi ponttal országszerte. Az új helyszínek mostantól elérhetők a rendszerben.',
    type: 'info',
    source: 'MPL',
    timestamp: new Date('2026-01-29T13:10:00'),
    isRead: true,
  },
  {
    id: '7',
    title: 'Bankkivonat.hu új funkció',
    message: 'A Bankkivonat.hu mostantól támogatja az automatikus kategorizálást és a tranzakciók exportálását Excel formátumban.',
    type: 'success',
    source: 'Bankkivonat.hu',
    timestamp: new Date('2026-01-28T08:45:00'),
    isRead: true,
  },
];
