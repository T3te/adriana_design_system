'use client';

import React, { useState } from 'react';
import {
  Dialog,
  DialogSurface,
  DialogTitle,
  DialogBody,
  DialogActions,
  DialogContent,
  Button,
  Field,
  Input,
  Dropdown,
  Option,
  Caption1,
  Checkbox,
} from '@fluentui/react-components';
import { Dismiss24Regular } from '@fluentui/react-icons';

interface VivaWalletSettingsDialogProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
}

const currencies = ['EUR', 'RON', 'PLN', 'CZK', 'HUF', 'SEK', 'DKK', 'BGN', 'GBP'];

export default function VivaWalletSettingsDialog({ open, onOpenChange }: VivaWalletSettingsDialogProps) {
  const [settings, setSettings] = useState({
    currency: 'HUF',
    clientId: '',
    clientSecret: '',
    merchantId: '',
    apiKey: '',
    testMode: false,
  });

  const handleSave = () => {
    console.log('Viva Wallet beállítások mentve:', settings);
    onOpenChange(false);
  };

  return (
    <Dialog open={open} onOpenChange={(_, data) => onOpenChange(data.open)}>
      <DialogSurface style={{ maxWidth: '800px' }}>
        <DialogBody>
          <DialogTitle
            action={
              <Button
                appearance="subtle"
                aria-label="close"
                icon={<Dismiss24Regular />}
                onClick={() => onOpenChange(false)}
              />
            }
          >
            Viva Wallet Integráció Beállítások
          </DialogTitle>
          <DialogContent className="space-y-6">
            <div className="space-y-4">
              <h3 className="text-lg font-semibold">Terminál adatok</h3>
              <Caption1 className="text-gray-600">
                Ezeket az adatokat a Viva Wallet felületén a Beállítások → API hozzáférés menüpontban találod meg
              </Caption1>
              
              <Field label="Terminál devizaneme" required>
                <Dropdown
                  value={settings.currency}
                  onOptionSelect={(_, data) => setSettings({ ...settings, currency: data.optionValue as string })}
                >
                  {currencies.map(currency => (
                    <Option key={currency} value={currency}>{currency}</Option>
                  ))}
                </Dropdown>
              </Field>

              <Field label="Ügyfél azonosító (Client ID)" required>
                <Input
                  value={settings.clientId}
                  onChange={(e) => setSettings({ ...settings, clientId: e.target.value })}
                  placeholder="Smart Checkout Hitelesítési Adatok blokkból"
                />
              </Field>

              <Field label="Titkos kód (Client Secret)" required>
                <Input
                  type="password"
                  value={settings.clientSecret}
                  onChange={(e) => setSettings({ ...settings, clientSecret: e.target.value })}
                  placeholder="Smart Checkout Hitelesítési Adatok blokkból"
                />
              </Field>

              <Field label="Kereskedő azonosító (Merchant ID)" required>
                <Input
                  value={settings.merchantId}
                  onChange={(e) => setSettings({ ...settings, merchantId: e.target.value })}
                  placeholder="Belépési azonosítók blokkból"
                />
              </Field>

              <Field label="API kulcs" required>
                <Input
                  value={settings.apiKey}
                  onChange={(e) => setSettings({ ...settings, apiKey: e.target.value })}
                  placeholder="Belépési azonosítók blokkból"
                />
              </Field>

              <Checkbox
                checked={settings.testMode}
                onChange={(_, data) => setSettings({ ...settings, testMode: data.checked as boolean })}
                label="Teszt mód (kikapcsolva éles terminál)"
              />
            </div>
          </DialogContent>
          <DialogActions>
            <Button appearance="secondary" onClick={() => onOpenChange(false)}>
              Mégse
            </Button>
            <Button appearance="primary" onClick={handleSave}>
              Beállítások mentése
            </Button>
          </DialogActions>
        </DialogBody>
      </DialogSurface>
    </Dialog>
  );
}
