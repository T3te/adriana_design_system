'use client';

import { useState } from 'react';
import {
  Card,  Title3,
  Body1Strong,
  Caption1,
  Button,
  Input,
  Field,
  Divider,
  Radio,
  RadioGroup,
  tokens,
} from '@fluentui/react-components';
import {
  Person24Regular,
  Building24Regular,
  PaintBrush24Regular,
  Save24Regular,
} from '@fluentui/react-icons';
import { useAppSelector, useAppDispatch } from '@/lib/redux/hooks';
import { setTheme, type ThemeName } from '@/lib/redux/slices/themeSlice';
import { ThemeToggle } from '@/components/ui/ThemeToggle';

interface ProfileData {
  // Személyes adatok
  firstName: string;
  lastName: string;
  email: string;
  phone: string;
  
  // Céges adatok
  companyName: string;
  taxNumber: string;
  registrationNumber: string;
  address: string;
  city: string;
  postalCode: string;
  country: string;
  billingEmail: string;
  billingPhone: string;
}

export default function ProfilePage() {
  const currentThemeName = useAppSelector((state) => state.theme.currentTheme);
  const dispatch = useAppDispatch();

  const [profileData, setProfileData] = useState<ProfileData>({
    firstName: 'Teszt',
    lastName: 'Elek',
    email: 'teszt.elek@adriana.hu',
    phone: '+36 30 123 4567',
    companyName: 'Teszt Kft.',
    taxNumber: '12345678-2-42',
    registrationNumber: '01-09-123456',
    address: 'Fő utca 1.',
    city: 'Budapest',
    postalCode: '1011',
    country: 'Magyarország',
    billingEmail: 'szamla@teszt.hu',
    billingPhone: '+36 1 234 5678',
  });

  const isDarkMode = currentThemeName.includes('Dark');
  const themeFamily = currentThemeName.includes('Connect') ? 'Connect' : 'Adriana';

  const handleInputChange = (field: keyof ProfileData, value: string) => {
    setProfileData((prev) => ({ ...prev, [field]: value }));
  };

  const handleThemeFamilyChange = (value: string) => {
    const newThemeFamily = value as 'Connect' | 'Adriana';
    const mode = isDarkMode ? 'Dark' : 'Light';
    const newTheme = `${newThemeFamily} ${mode}` as ThemeName;
    dispatch(setTheme(newTheme));
  };

  const handleThemeToggle = () => {
    if (currentThemeName === 'Connect Light') {
      dispatch(setTheme('Connect Dark'));
    } else if (currentThemeName === 'Connect Dark') {
      dispatch(setTheme('Connect Light'));
    } else if (currentThemeName === 'Adriana Light') {
      dispatch(setTheme('Adriana Dark'));
    } else if (currentThemeName === 'Adriana Dark') {
      dispatch(setTheme('Adriana Light'));
    }
  };

  const handleSave = () => {
    console.log('Profil mentve:', profileData);
    // Itt történne az API hívás
  };

  return (
    <div className="container mx-auto p-6 space-y-6">
      {/* Header */}
      <div>
        <Title3>Profil beállítások</Title3>
        <Caption1 style={{ color: tokens.colorNeutralForeground2 }}>
          Kezeld a személyes és céges adataidat, valamint a megjelenési beállításokat
        </Caption1>
      </div>

      {/* Személyes adatok */}
      <Card className="p-6">
        <div className="flex items-center gap-2 mb-4">
          <Person24Regular />
          <Body1Strong>Személyes adatok</Body1Strong>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <Field label="Vezetéknév">
            <Input
              value={profileData.lastName}
              onChange={(e) => handleInputChange('lastName', e.target.value)}
            />
          </Field>
          <Field label="Keresztnév">
            <Input
              value={profileData.firstName}
              onChange={(e) => handleInputChange('firstName', e.target.value)}
            />
          </Field>
          <Field label="E-mail cím">
            <Input
              type="email"
              value={profileData.email}
              onChange={(e) => handleInputChange('email', e.target.value)}
            />
          </Field>
          <Field label="Telefonszám">
            <Input
              type="tel"
              value={profileData.phone}
              onChange={(e) => handleInputChange('phone', e.target.value)}
            />
          </Field>
        </div>
      </Card>

      {/* Céges adatok */}
      <Card className="p-6">
        <div className="flex items-center gap-2 mb-4">
          <Building24Regular />
          <Body1Strong>Céges adatok</Body1Strong>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <Field label="Cégnév">
            <Input
              value={profileData.companyName}
              onChange={(e) => handleInputChange('companyName', e.target.value)}
            />
          </Field>
          <Field label="Adószám">
            <Input
              value={profileData.taxNumber}
              onChange={(e) => handleInputChange('taxNumber', e.target.value)}
            />
          </Field>
          <Field label="Cégjegyzékszám">
            <Input
              value={profileData.registrationNumber}
              onChange={(e) => handleInputChange('registrationNumber', e.target.value)}
            />
          </Field>
          <Field label="Ország">
            <Input
              value={profileData.country}
              onChange={(e) => handleInputChange('country', e.target.value)}
            />
          </Field>
          <Field label="Cím">
            <Input
              value={profileData.address}
              onChange={(e) => handleInputChange('address', e.target.value)}
            />
          </Field>
          <Field label="Város">
            <Input
              value={profileData.city}
              onChange={(e) => handleInputChange('city', e.target.value)}
            />
          </Field>
          <Field label="Irányítószám">
            <Input
              value={profileData.postalCode}
              onChange={(e) => handleInputChange('postalCode', e.target.value)}
            />
          </Field>
          <div></div>
          <Field label="Számlázási e-mail">
            <Input
              type="email"
              value={profileData.billingEmail}
              onChange={(e) => handleInputChange('billingEmail', e.target.value)}
            />
          </Field>
          <Field label="Számlázási telefonszám">
            <Input
              type="tel"
              value={profileData.billingPhone}
              onChange={(e) => handleInputChange('billingPhone', e.target.value)}
            />
          </Field>
        </div>
      </Card>

      {/* Megjelenés beállítások */}
      <Card className="p-6">
        <div className="flex items-center gap-2 mb-4">
          <PaintBrush24Regular />
          <Body1Strong>Megjelenés</Body1Strong>
        </div>
        
        <div className="space-y-6">
          {/* Theme család választó */}
          <Field label="Téma">
            <RadioGroup
              value={themeFamily}
              onChange={(_, data) => handleThemeFamilyChange(data.value)}
            >
              <Radio value="Connect" label="Connect (alapértelmezett)" />
              <Radio value="Adriana" label="Adriana" />
            </RadioGroup>
          </Field>

          <Divider />

          {/* Dark mode toggle */}
          <div className="flex items-center justify-between">
            <div className="space-y-1">
              <Body1Strong>Sötét mód</Body1Strong>
              <div>
                <Caption1 style={{ color: tokens.colorNeutralForeground2 }}>
                  {isDarkMode ? 'Sötét téma aktív' : 'Világos téma aktív'}
                </Caption1>
              </div>
            </div>
            <ThemeToggle isDarkMode={isDarkMode} onToggle={handleThemeToggle} />
          </div>

          <Caption1 style={{ color: tokens.colorNeutralForeground3 }}>
            Aktuális téma: <strong>{currentThemeName}</strong>
          </Caption1>
        </div>
      </Card>

      {/* Mentés gomb */}
      <div className="flex justify-end">
        <Button
          appearance="primary"
          icon={<Save24Regular />}
          onClick={handleSave}
          size="large"
        >
          Változtatások mentése
        </Button>
      </div>
    </div>
  );
}
