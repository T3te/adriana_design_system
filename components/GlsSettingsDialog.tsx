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

interface GlsSettingsDialogProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
}

export default function GlsSettingsDialog({ open, onOpenChange }: GlsSettingsDialogProps) {
  const [settings, setSettings] = useState({
    username: '',
    password: '',
    clientNumber: '',
  });

  const handleSave = () => {
    console.log('GLS beállítások mentve:', settings);
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
            GLS Integráció Beállítások
          </DialogTitle>
          <DialogContent className="space-y-6">
            <div className="space-y-4">
              <h3 className="text-lg font-semibold">MyGLS Adatok</h3>
              <Caption1 className="text-gray-600">
                Ezek az adatok megegyeznek a mygls.hu belépési adataival
              </Caption1>
              
              <Field label="MyGLS Felhasználónév" required>
                <Input
                  value={settings.username}
                  onChange={(e) => setSettings({ ...settings, username: e.target.value })}
                  placeholder="felhasznalonev@example.com"
                />
              </Field>

              <Field label="MyGLS Jelszó" required>
                <Input
                  type="password"
                  value={settings.password}
                  onChange={(e) => setSettings({ ...settings, password: e.target.value })}
                  placeholder="••••••••"
                />
              </Field>

              <Field label="MyGLS Client Number" required>
                <Input
                  value={settings.clientNumber}
                  onChange={(e) => setSettings({ ...settings, clientNumber: e.target.value })}
                  placeholder="9 számjegyű azonosító"
                  maxLength={9}
                />
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
