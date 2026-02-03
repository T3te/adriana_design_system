'use client';

import { useState } from 'react';
import {
  Card,
  CardFooter,
  Body1Strong,
  Caption1,
  Button,
  Switch,
  Badge,
  tokens,
  Input,
  Dropdown,
  Option,
} from '@fluentui/react-components';
import {
  Settings24Regular,
  Link20Regular,
  Info20Regular,
  ChevronRight20Regular,
  Mail20Regular,

  Search20Regular,
} from '@fluentui/react-icons';
import { type Integration, mockIntegrations, mockFileBasedIntegrations } from '@/lib/mockIntegrations';
import Link from 'next/link';
import GlsSettingsDialog from '@/components/GlsSettingsDialog';
import FoxpostSettingsDialog from '@/components/FoxpostSettingsDialog';
import FoxpostInfoDialog from '@/components/FoxpostInfoDialog';
import MplSettingsDialog from '@/components/MplSettingsDialog';
import MplInfoDialog from '@/components/MplInfoDialog';
import SzamlazzSettingsDialog from '@/components/SzamlazzSettingsDialog';
import SzamlazzInfoDialog from '@/components/SzamlazzInfoDialog';
import VivaWalletSettingsDialog from '@/components/VivaWalletSettingsDialog';
import VivaWalletInfoDialog from '@/components/VivaWalletInfoDialog';
import AdrianaSettingsDialog from '@/components/AdrianaSettingsDialog';
import RlbSettingsDialog from '@/components/RlbSettingsDialog';
import ActualSettingsDialog from '@/components/ActualSettingsDialog';
import WoodpeckerSettingsDialog from '@/components/WoodpeckerSettingsDialog';
import CoimbraitsSettingsDialog from '@/components/CoimbraitsSettingsDialog';

export default function IntegrationsPage() {
  const [integrations, setIntegrations] = useState<Integration[]>(mockIntegrations);
  const [searchQuery, setSearchQuery] = useState('');
  const [categoryFilter, setCategoryFilter] = useState<string>('all');
  const [statusFilter, setStatusFilter] = useState<string>('all');
  
  const [glsSettingsOpen, setGlsSettingsOpen] = useState(false);
  const [foxpostSettingsOpen, setFoxpostSettingsOpen] = useState(false);
  const [foxpostInfoOpen, setFoxpostInfoOpen] = useState(false);
  const [mplSettingsOpen, setMplSettingsOpen] = useState(false);
  const [mplInfoOpen, setMplInfoOpen] = useState(false);
  const [szamlazzSettingsOpen, setSzamlazzSettingsOpen] = useState(false);
  const [szamlazzInfoOpen, setSzamlazzInfoOpen] = useState(false);
  const [vivaWalletSettingsOpen, setVivaWalletSettingsOpen] = useState(false);
  const [vivaWalletInfoOpen, setVivaWalletInfoOpen] = useState(false);
  const [adrianaSettingsOpen, setAdrianaSettingsOpen] = useState(false);
  const [rlbSettingsOpen, setRlbSettingsOpen] = useState(false);
  const [actualSettingsOpen, setActualSettingsOpen] = useState(false);
  const [woodpeckerSettingsOpen, setWoodpeckerSettingsOpen] = useState(false);
  const [coimbraitsSettingsOpen, setCoimbraitsSettingsOpen] = useState(false);

  const handleToggle = (id: string) => {
    setIntegrations((prev) =>
      prev.map((integration) =>
        integration.id === id
          ? { ...integration, enabled: !integration.enabled }
          : integration
      )
    );
  };

  const handleOpenSettings = (id: string) => {
    if (id === 'gls') {
      setGlsSettingsOpen(true);
    } else if (id === 'foxpost') {
      setFoxpostSettingsOpen(true);
    } else if (id === 'mpl') {
      setMplSettingsOpen(true);
    } else if (id === 'szamlazz') {
      setSzamlazzSettingsOpen(true);
    } else if (id === 'viva-wallet') {
      setVivaWalletSettingsOpen(true);
    } else if (id === 'adriana') {
      setAdrianaSettingsOpen(true);
    } else if (id === 'rlb') {
      setRlbSettingsOpen(true);
    } else if (id === 'actual') {
      setActualSettingsOpen(true);
    } else if (id === 'woodpecker') {
      setWoodpeckerSettingsOpen(true);
    } else if (id === 'coimbraits') {
      setCoimbraitsSettingsOpen(true);
    }
  };

  const handleOpenDocumentation = (url: string, integrationId?: string) => {
    console.log('handleOpenDocumentation called:', { url, integrationId });
    if (integrationId === 'foxpost') {
      console.log('Opening Foxpost modal');
      setFoxpostInfoOpen(true);
    } else if (integrationId === 'mpl') {
      console.log('Opening MPL modal');
      setMplInfoOpen(true);
    } else if (integrationId === 'szamlazz') {
      console.log('Opening Számlázz modal');
      setSzamlazzInfoOpen(true);
    } else if (integrationId === 'viva-wallet') {
      console.log('Opening Viva Wallet modal');
      setVivaWalletInfoOpen(true);
    } else {
      window.open(url, '_blank');
    }
  };

  const apiIntegrations = integrations.filter((i) => i.category === 'API');
  const psd2Integrations = integrations.filter((i) => i.category === 'PSD2');
  
  const outgoingIntegrations = apiIntegrations.filter((i) => i.dataDirection === 'outgoing');
  const incomingApiIntegrations = apiIntegrations.filter((i) => i.dataDirection === 'incoming');

  // Szűrés
  const filterIntegrations = (items: Integration[]) => {
    return items.filter((item) => {
      const matchesSearch = item.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
                           item.description.toLowerCase().includes(searchQuery.toLowerCase());
      const matchesStatus = statusFilter === 'all' || 
                           (statusFilter === 'active' && item.enabled) ||
                           (statusFilter === 'inactive' && !item.enabled);
      return matchesSearch && matchesStatus;
    });
  };

  const filterFileIntegrations = (items: typeof mockFileBasedIntegrations) => {
    return items.filter((item) => {
      const matchesSearch = item.name.toLowerCase().includes(searchQuery.toLowerCase());
      return matchesSearch;
    });
  };

  const filteredOutgoing = filterIntegrations(outgoingIntegrations);
  const filteredIncoming = filterIntegrations(incomingApiIntegrations);
  const filteredPsd2 = filterIntegrations(psd2Integrations);
  const filteredFileBased = filterFileIntegrations(mockFileBasedIntegrations);

  const showOutgoing = categoryFilter === 'all' || categoryFilter === 'api-outgoing';
  const showIncoming = categoryFilter === 'all' || categoryFilter === 'api-incoming';
  const showPsd2 = categoryFilter === 'all' || categoryFilter === 'psd2';
  const showFileBank = categoryFilter === 'all' || categoryFilter === 'file-bank';
  const showFileCourier = categoryFilter === 'all' || categoryFilter === 'file-courier';
  const showFilePos = categoryFilter === 'all' || categoryFilter === 'file-pos';

  return (
    <div className="container mx-auto p-6 space-y-8">
      <div className="p-4 rounded shadow" style={{ backgroundColor: tokens.colorNeutralBackground1 }}>
        <h1 className="text-3xl font-semibold mb-2">Integrációk</h1>
        <p style={{ color: tokens.colorNeutralForeground2 }}>
          Az integrációs központban kezelheted a rendszer összes külső kapcsolatát. Automatizáld az adatforgalmat partnereiddel: küldj adatokat könyvelő rendszerekbe, raktárkezelőkbe, vállalatirányítási rendszerekbe, vagy fogadj információkat szállítási szolgáltatóktól, fizetési rendszerektől és banki kapcsolatoktól. Minden integráció egy helyen, átláthatóan kezelve.
        </p>
      </div>

      {/* Szűrők */}
      <div className="p-4 rounded shadow" style={{ backgroundColor: tokens.colorNeutralBackground1 }}>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <div>
            <label className="block mb-2 text-sm font-medium">Keresés</label>
            <Input
              placeholder="Keresés név vagy leírás alapján..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              contentBefore={<Search20Regular />}
              className="w-full"
            />
          </div>
          <div>
            <label className="block mb-2 text-sm font-medium">Kategória</label>
            <Dropdown
              placeholder="Összes kategória"
              value={categoryFilter === 'all' ? 'Összes kategória' : 
                     categoryFilter === 'api-outgoing' ? 'Adat küldése (API)' :
                     categoryFilter === 'api-incoming' ? 'Adat fogadása (API)' :
                     categoryFilter === 'psd2' ? 'Banki adatok (PSD2)' :
                     categoryFilter === 'file-bank' ? 'Fájl - Bankok' :
                     categoryFilter === 'file-courier' ? 'Fájl - Futárok' :
                     categoryFilter === 'file-pos' ? 'Fájl - POS rendszerek' : 'Összes kategória'}
              onOptionSelect={(_, data) => setCategoryFilter(data.optionValue || 'all')}
              className="w-full"
            >
              <Option value="all">Összes kategória</Option>
              <Option value="api-outgoing">Adat küldése (API)</Option>
              <Option value="api-incoming">Adat fogadása (API)</Option>
              <Option value="psd2">Banki adatok (PSD2)</Option>
              <Option value="file-bank">Fájl - Bankok</Option>
              <Option value="file-courier">Fájl - Futárok</Option>
              <Option value="file-pos">Fájl - POS rendszerek</Option>
            </Dropdown>
          </div>
          <div>
            <label className="block mb-2 text-sm font-medium">Státusz</label>
            <Dropdown
              placeholder="Összes státusz"
              value={statusFilter === 'all' ? 'Összes státusz' :
                     statusFilter === 'active' ? 'Aktív' : 'Inaktív'}
              onOptionSelect={(_, data) => setStatusFilter(data.optionValue || 'all')}
              className="w-full"
            >
              <Option value="all">Összes státusz</Option>
              <Option value="active">Aktív</Option>
              <Option value="inactive">Inaktív</Option>
            </Dropdown>
          </div>
        </div>
      </div>

      {/* API Integrációk - Adat küldése */}
      {showOutgoing && filteredOutgoing.length > 0 && (
      <section>
        <div className="flex items-center gap-2 mb-4">
          <Link20Regular />
          <h2 className="text-xl font-semibold">Adat küldése (API)</h2>
        </div>
        <div className="p-3 mb-4 rounded shadow" style={{ backgroundColor: tokens.colorNeutralBackground1 }}>
          <Caption1 style={{ color: tokens.colorNeutralForeground2 }}>
            Küldd tovább az adataidat automatikusan könyvelő rendszerekbe, raktárkezelőkbe és egyéb üzleti alkalmazásokba.
          </Caption1>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 xl:grid-cols-5 gap-4">
          {filteredOutgoing.map((integration) => (
            <Card key={integration.id} className="max-w-xs flex flex-col h-full">
              {/* Fejléc - Név balra, Funkciók és Toggle jobbra */}
              <div className="p-4 pb-3">
                <div className="flex items-center justify-between gap-3">
                  <Body1Strong className="truncate flex-shrink">{integration.name}</Body1Strong>
                  <div className="flex items-center gap-1 flex-shrink-0">
                    {integration.documentationUrl && (
                      <Button
                        appearance="subtle"
                        size="small"
                        icon={<Info20Regular />}
                        onClick={() => handleOpenDocumentation(integration.documentationUrl!, integration.id)}
                        title="Információ"
                      />
                    )}
                    <Button
                      appearance="subtle"
                      size="small"
                      icon={<Mail20Regular />}
                      onClick={() => window.location.href = `mailto:support@${integration.id}.hu?subject=Kapcsolatfelvétel - ${integration.name}`}
                      title="Kapcsolatfelvétel"
                    />
                    <Switch
                      checked={integration.enabled}
                      onChange={() => handleToggle(integration.id)}
                    />
                  </div>
                </div>
              </div>

              {/* Image - Logó */}
              <div className="w-full flex justify-center items-center py-8 px-4" style={{ height: '140px', backgroundColor: tokens.colorNeutralBackground2 }}>
                {integration.logoUrl ? (
                  <img 
                    src={integration.logoUrl} 
                    alt={integration.name}
                    className="max-w-full max-h-24 object-contain"
                  />
                ) : (
                  <Body1Strong style={{ color: tokens.colorNeutralForeground3 }}>{integration.name}</Body1Strong>
                )}
              </div>

              {/* Információk - Leírás és szinkronizáció */}
              <div className="p-4 space-y-2 flex-1">
                <Caption1 style={{ color: tokens.colorNeutralForeground2, display: 'block' }}>
                  {integration.description}
                </Caption1>
                {integration.enabled && integration.lastSync && (
                  <Caption1 style={{ color: tokens.colorNeutralForeground3, display: 'block' }}>
                    Utolsó szinkronizáció: {integration.lastSync}
                  </Caption1>
                )}
              </div>

              {/* Footer */}
              <CardFooter>
                <div className="grid grid-cols-2 gap-2 w-full">
                  {integration.enabled && integration.logs && integration.logs.length > 0 ? (
                    <Link href={`/integrations/${integration.id}`} className="flex">
                      <Button appearance="subtle" icon={<ChevronRight20Regular />} className="w-full">
                        Részletek
                      </Button>
                    </Link>
                  ) : (
                    <div></div>
                  )}
                  <Button
                    appearance="subtle"
                    icon={<Settings24Regular />}
                    disabled={!integration.enabled}
                    onClick={() => handleOpenSettings(integration.id)}
                    className="w-full"
                  >
                    Beállítások
                  </Button>
                </div>
              </CardFooter>
            </Card>
          ))}
        </div>
      </section>
      )}

      {/* API Integrációk - Adat fogadása */}
      {showIncoming && filteredIncoming.length > 0 && (
      <section>
        <div className="flex items-center gap-2 mb-4">
          <Link20Regular />
          <h2 className="text-xl font-semibold">Adat fogadása (API)</h2>
        </div>
        <div className="p-3 mb-4 rounded shadow" style={{ backgroundColor: tokens.colorNeutralBackground1 }}>
          <Caption1 style={{ color: tokens.colorNeutralForeground2 }}>
            Fogadj automatikusan adatokat szállítási szolgáltatóktól és fizetési rendszerektől.
          </Caption1>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 xl:grid-cols-5 gap-4">
          {filteredIncoming.map((integration) => (
            <Card key={integration.id} className="max-w-xs flex flex-col h-full">
              {/* Fejléc - Név balra, Funkciók és Toggle jobbra */}
              <div className="p-4 pb-3">
                <div className="flex items-center justify-between gap-3">
                  <Body1Strong className="truncate flex-shrink">{integration.name}</Body1Strong>
                  <div className="flex items-center gap-1 flex-shrink-0">
                    {integration.documentationUrl && (
                      <Button
                        appearance="subtle"
                        size="small"
                        icon={<Info20Regular />}
                        onClick={() => handleOpenDocumentation(integration.documentationUrl!, integration.id)}
                        title="Információ"
                      />
                    )}
                    <Button
                      appearance="subtle"
                      size="small"
                      icon={<Mail20Regular />}
                      onClick={() => window.location.href = `mailto:support@${integration.id}.hu?subject=Kapcsolatfelvétel - ${integration.name}`}
                      title="Kapcsolatfelvétel"
                    />
                    <Switch
                      checked={integration.enabled}
                      onChange={() => handleToggle(integration.id)}
                    />
                  </div>
                </div>
              </div>

              {/* Image - Logó */}
              <div className="w-full flex justify-center items-center py-8 px-4" style={{ height: '140px', backgroundColor: tokens.colorNeutralBackground2 }}>
                {integration.logoUrl ? (
                  <img 
                    src={integration.logoUrl} 
                    alt={integration.name}
                    className="max-w-full max-h-24 object-contain"
                  />
                ) : (
                  <Body1Strong style={{ color: tokens.colorNeutralForeground3 }}>{integration.name}</Body1Strong>
                )}
              </div>

              {/* Információk - Leírás és szinkronizáció */}
              <div className="p-4 space-y-2 flex-1">
                <Caption1 style={{ color: tokens.colorNeutralForeground2, display: 'block' }}>
                  {integration.description}
                </Caption1>
                {integration.enabled && integration.lastSync && (
                  <Caption1 style={{ color: tokens.colorNeutralForeground3, display: 'block' }}>
                    Utolsó szinkronizáció: {integration.lastSync}
                  </Caption1>
                )}
              </div>

              {/* Footer */}
              <CardFooter>
                <div className="grid grid-cols-2 gap-2 w-full">
                  {integration.enabled && integration.logs && integration.logs.length > 0 ? (
                    <Link href={`/integrations/${integration.id}`} className="flex">
                      <Button appearance="subtle" icon={<ChevronRight20Regular />} className="w-full">
                        Részletek
                      </Button>
                    </Link>
                  ) : (
                    <div></div>
                  )}
                  <Button
                    appearance="subtle"
                    icon={<Settings24Regular />}
                    disabled={!integration.enabled}
                    onClick={() => handleOpenSettings(integration.id)}
                    className="w-full"
                  >
                    Beállítások
                  </Button>
                </div>
              </CardFooter>
            </Card>
          ))}
        </div>
      </section>
      )}

      {/* PSD2 Integrációk */}
      {showPsd2 && filteredPsd2.length > 0 && (
      <section>
        <div className="flex items-center gap-2 mb-4">
          <Link20Regular />
          <h2 className="text-xl font-semibold">Banki adatok (PSD2)</h2>
        </div>
        <div className="p-3 mb-4 rounded shadow" style={{ backgroundColor: tokens.colorNeutralBackground1 }}>
          <Caption1 style={{ color: tokens.colorNeutralForeground2 }}>
            Kapcsolódj bankszámlákhoz és fogadj automatikusan banki tranzakciókat a PSD2 protokoll segítségével.
          </Caption1>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 xl:grid-cols-5 gap-4">
          {filteredPsd2.map((integration) => (
            <Card key={integration.id} className="max-w-xs flex flex-col h-full">
              {/* Fejléc - Név balra, Funkciók és Toggle jobbra */}
              <div className="p-4 pb-3">
                <div className="flex items-center justify-between gap-3">
                  <Body1Strong className="truncate flex-shrink">{integration.name}</Body1Strong>
                  <div className="flex items-center gap-1 flex-shrink-0">
                    {integration.documentationUrl && (
                      <Button
                        appearance="subtle"
                        size="small"
                        icon={<Info20Regular />}
                        onClick={() => handleOpenDocumentation(integration.documentationUrl!, integration.id)}
                        title="Információ"
                      />
                    )}
                    <Button
                      appearance="subtle"
                      size="small"
                      icon={<Mail20Regular />}
                      onClick={() => window.location.href = `mailto:support@${integration.id}.hu?subject=Kapcsolatfelvétel - ${integration.name}`}
                      title="Kapcsolatfelvétel"
                    />
                    <Switch
                      checked={integration.enabled}
                      onChange={() => handleToggle(integration.id)}
                    />
                  </div>
                </div>
              </div>

              {/* Image - Logó */}
              <div className="w-full flex justify-center items-center py-8 px-4" style={{ height: '140px', backgroundColor: tokens.colorNeutralBackground2 }}>
                {integration.logoUrl ? (
                  <img 
                    src={integration.logoUrl} 
                    alt={integration.name}
                    className="max-w-full max-h-24 object-contain"
                  />
                ) : (
                  <Body1Strong style={{ color: tokens.colorNeutralForeground3 }}>{integration.name}</Body1Strong>
                )}
              </div>

              {/* Információk - Leírás és szinkronizáció */}
              <div className="p-4 space-y-2 flex-1">
                <Caption1 style={{ color: tokens.colorNeutralForeground2, display: 'block' }}>
                  {integration.description}
                </Caption1>
                {integration.enabled && integration.lastSync && (
                  <Caption1 style={{ color: tokens.colorNeutralForeground3, display: 'block' }}>
                    Utolsó szinkronizáció: {integration.lastSync}
                  </Caption1>
                )}
              </div>

              {/* Footer */}
              <CardFooter>
                <div className="grid grid-cols-2 gap-2 w-full">
                  {integration.enabled && integration.logs && integration.logs.length > 0 ? (
                    <Link href={`/integrations/${integration.id}`} className="flex">
                      <Button appearance="subtle" icon={<ChevronRight20Regular />} className="w-full">
                        Részletek
                      </Button>
                    </Link>
                  ) : (
                    <div></div>
                  )}
                  <Button
                    appearance="subtle"
                    icon={<Settings24Regular />}
                    disabled={!integration.enabled}
                    onClick={() => handleOpenSettings(integration.id)}
                    className="w-full"
                  >
                    Beállítások
                  </Button>
                </div>
              </CardFooter>
            </Card>
          ))}
        </div>
      </section>
      )}

      {/* Fájl alapú importálás */}
      {(showFileBank || showFileCourier || showFilePos) && filteredFileBased.length > 0 && (
      <section>
        <div className="flex items-center gap-2 mb-4">
          <Link20Regular />
          <h2 className="text-xl font-semibold">Fájl alapú importálás</h2>
        </div>
        <div className="p-3 mb-4 rounded shadow" style={{ backgroundColor: tokens.colorNeutralBackground1 }}>
          <Caption1 style={{ color: tokens.colorNeutralForeground2 }}>
            Importálj adatokat közvetlenül fájlokból - banki kivonatok, futárszolgálati listák és bankkártya tranzakciók.
          </Caption1>
        </div>

        {/* Bankok */}
        {showFileBank && (
        <>
        <h3 className="text-lg font-semibold mb-3">Bankok</h3>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 xl:grid-cols-5 gap-4 mb-8">
          {filteredFileBased.filter(i => i.category === 'bank').map((integration) => (
            <Card key={integration.id} className="max-w-xs flex flex-col h-full">
              {/* Logo */}
              <div className="w-full flex justify-center items-center py-8 px-4" style={{ height: '140px', backgroundColor: tokens.colorNeutralBackground2 }}>
                {integration.logoUrl ? (
                  <img 
                    src={integration.logoUrl} 
                    alt={integration.name}
                    className="max-w-full max-h-24 object-contain"
                  />
                ) : (
                  <Body1Strong style={{ color: tokens.colorNeutralForeground3 }}>{integration.name}</Body1Strong>
                )}
              </div>

              {/* Információk */}
              <div className="p-4 space-y-2 flex-1">
                <Body1Strong className="block">{integration.name}</Body1Strong>
                <Caption1 style={{ color: tokens.colorNeutralForeground2, display: 'block' }}>
                  Formátum: {integration.format}
                </Caption1>
                {integration.note && (
                  <Caption1 style={{ color: tokens.colorNeutralForeground3, display: 'block', fontSize: '11px' }}>
                    {integration.note}
                  </Caption1>
                )}
                {integration.isNew && (
                  <Badge size="small" color="success">ÚJ</Badge>
                )}
              </div>

              {/* Footer */}
              <CardFooter>
                <Link href="#" className="w-full">
                  <Button appearance="primary" className="w-full">
                    Útmutató
                  </Button>
                </Link>
              </CardFooter>
            </Card>
          ))}
        </div>
        </>
        )}

        {/* Futárok */}
        {showFileCourier && (
        <>
        <h3 className="text-lg font-semibold mb-3">Csomag futárok</h3>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 xl:grid-cols-5 gap-4 mb-8">
          {filteredFileBased.filter(i => i.category === 'courier').map((integration) => (
            <Card key={integration.id} className="max-w-xs flex flex-col h-full">
              {/* Logo */}
              <div className="w-full flex justify-center items-center py-8 px-4" style={{ height: '140px', backgroundColor: tokens.colorNeutralBackground2 }}>
                {integration.logoUrl ? (
                  <img 
                    src={integration.logoUrl} 
                    alt={integration.name}
                    className="max-w-full max-h-24 object-contain"
                  />
                ) : (
                  <Body1Strong style={{ color: tokens.colorNeutralForeground3 }}>{integration.name}</Body1Strong>
                )}
              </div>

              {/* Információk */}
              <div className="p-4 space-y-2 flex-1">
                <Body1Strong className="block">{integration.name}</Body1Strong>
                <Caption1 style={{ color: tokens.colorNeutralForeground2, display: 'block' }}>
                  Formátum: {integration.format}
                </Caption1>
                {integration.note && (
                  <Caption1 style={{ color: tokens.colorNeutralForeground3, display: 'block', fontSize: '11px' }}>
                    {integration.note}
                  </Caption1>
                )}
                {integration.isNew && (
                  <Badge size="small" color="success">ÚJ</Badge>
                )}
              </div>

              {/* Footer */}
              <CardFooter>
                <Link href="#" className="w-full">
                  <Button appearance="primary" className="w-full">
                    Útmutató
                  </Button>
                </Link>
              </CardFooter>
            </Card>
          ))}
        </div>
        </>
        )}

        {/* POS rendszerek */}
        {showFilePos && (
        <>
        <h3 className="text-lg font-semibold mb-3">Bankkártya elfogadó rendszerek</h3>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 xl:grid-cols-5 gap-4">
          {filteredFileBased.filter(i => i.category === 'pos').map((integration) => (
            <Card key={integration.id} className="max-w-xs flex flex-col h-full">
              {/* Logo */}
              <div className="w-full flex justify-center items-center py-8 px-4" style={{ height: '140px', backgroundColor: tokens.colorNeutralBackground2 }}>
                {integration.logoUrl ? (
                  <img 
                    src={integration.logoUrl} 
                    alt={integration.name}
                    className="max-w-full max-h-24 object-contain"
                  />
                ) : (
                  <Body1Strong style={{ color: tokens.colorNeutralForeground3 }}>{integration.name}</Body1Strong>
                )}
              </div>

              {/* Információk */}
              <div className="p-4 space-y-2 flex-1">
                <Body1Strong className="block">{integration.name}</Body1Strong>
                <Caption1 style={{ color: tokens.colorNeutralForeground2, display: 'block' }}>
                  Formátum: {integration.format}
                </Caption1>
                {integration.note && (
                  <Caption1 style={{ color: tokens.colorNeutralForeground3, display: 'block', fontSize: '11px' }}>
                    {integration.note}
                  </Caption1>
                )}
                {integration.isNew && (
                  <Badge size="small" color="success">ÚJ</Badge>
                )}
              </div>

              {/* Footer */}
              <CardFooter>
                <Link href="#" className="w-full">
                  <Button appearance="primary" className="w-full">
                    Útmutató
                  </Button>
                </Link>
              </CardFooter>
            </Card>
          ))}
        </div>
        </>
        )}
      </section>
      )}

      {/* Dialógok */}
      <GlsSettingsDialog open={glsSettingsOpen} onOpenChange={setGlsSettingsOpen} />
      <FoxpostSettingsDialog open={foxpostSettingsOpen} onOpenChange={setFoxpostSettingsOpen} />
      <FoxpostInfoDialog open={foxpostInfoOpen} onOpenChange={setFoxpostInfoOpen} />
      <MplSettingsDialog open={mplSettingsOpen} onOpenChange={setMplSettingsOpen} />
      <MplInfoDialog open={mplInfoOpen} onOpenChange={setMplInfoOpen} />
      <SzamlazzSettingsDialog open={szamlazzSettingsOpen} onOpenChange={setSzamlazzSettingsOpen} />
      <SzamlazzInfoDialog open={szamlazzInfoOpen} onOpenChange={setSzamlazzInfoOpen} />
      <VivaWalletSettingsDialog open={vivaWalletSettingsOpen} onOpenChange={setVivaWalletSettingsOpen} />
      <VivaWalletInfoDialog open={vivaWalletInfoOpen} onOpenChange={setVivaWalletInfoOpen} />
      <AdrianaSettingsDialog open={adrianaSettingsOpen} onOpenChange={setAdrianaSettingsOpen} />
      <RlbSettingsDialog open={rlbSettingsOpen} onOpenChange={setRlbSettingsOpen} />
      <ActualSettingsDialog open={actualSettingsOpen} onOpenChange={setActualSettingsOpen} />
      <WoodpeckerSettingsDialog open={woodpeckerSettingsOpen} onOpenChange={setWoodpeckerSettingsOpen} />
      <CoimbraitsSettingsDialog open={coimbraitsSettingsOpen} onOpenChange={setCoimbraitsSettingsOpen} />
    </div>
  );
}
