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
  Caption1,
} from '@fluentui/react-components';
import { Dismiss24Regular } from '@fluentui/react-icons';

interface FoxpostSettingsDialogProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
}

export default function FoxpostSettingsDialog({ open, onOpenChange }: FoxpostSettingsDialogProps) {
  const [settings, setSettings] = useState({
    apiUsername: '',
    apiPassword: '',
    apiKey: '',
  });

  const handleSave = () => {
    console.log('Foxpost beállítások mentve:', settings);
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
            Foxpost Integráció Beállítások
          </DialogTitle>
          <DialogContent className="space-y-6">
            <div className="space-y-4">
              <h3 className="text-lg font-semibold">Foxpost API Adatok</h3>
              <Caption1 className="text-gray-600">
                Ezek az adatok a foxpost.hu oldalon a Beállítások menüpont alatt találhatóak meg
              </Caption1>
              
              <Field label="API Felhasználónév" required>
                <Input
                  value={settings.apiUsername}
                  onChange={(e) => setSettings({ ...settings, apiUsername: e.target.value })}
                  placeholder="foxpost_felhasznalo"
                />
              </Field>

              <Field label="API Jelszó" required>
                <Input
                  type="password"
                  value={settings.apiPassword}
                  onChange={(e) => setSettings({ ...settings, apiPassword: e.target.value })}
                  placeholder="••••••••"
                />
              </Field>

              <Field label="Ecomm API Kulcs" required>
                <Input
                  value={settings.apiKey}
                  onChange={(e) => setSettings({ ...settings, apiKey: e.target.value })}
                  placeholder="xxxxxxxx-xxxx-xxxx-xxxx-xxxxxxxxxxxx"
                />
                <Caption1 style={{ marginTop: '0.5rem', display: 'block' }}>
                  Amennyiben nincs még ecomm api kulcs generálva, úgy a kulcs generálása az "Új generálása" gombra kattintással történik a foxpost.hu oldalon.
                </Caption1>
              </Field>
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
