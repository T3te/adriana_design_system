'use client';

import { useState } from 'react';
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

interface MplSettingsDialogProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
}

export default function MplSettingsDialog({ open, onOpenChange }: MplSettingsDialogProps) {
  const [settings, setSettings] = useState({
    apiKey: '',
    contractNumber: '',
    senderName: '',
    senderAddress: '',
  });

  const handleSave = () => {
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
            MPL Integráció Beállítások
          </DialogTitle>
          <DialogContent className="space-y-6">
            <div className="space-y-4">
              <h3 className="text-lg font-semibold">MPL API Adatok</h3>
              <Caption1 className="text-gray-600">
                Az MPL Alkalmazás használatához MPL szerződéskötésre és regisztrációra van szükség
              </Caption1>
              
              <Field label="API Kulcs" required>
                <Input
                  value={settings.apiKey}
                  onChange={(e) => setSettings({ ...settings, apiKey: e.target.value })}
                  placeholder="xxxxxxxx-xxxx-xxxx-xxxx-xxxxxxxxxxxx"
                />
              </Field>

              <Field label="Szerződésszám" required>
                <Input
                  value={settings.contractNumber}
                  onChange={(e) => setSettings({ ...settings, contractNumber: e.target.value })}
                  placeholder="Szerződésszám"
                />
              </Field>

              <Field label="Feladó neve" required>
                <Input
                  value={settings.senderName}
                  onChange={(e) => setSettings({ ...settings, senderName: e.target.value })}
                  placeholder="Cég neve"
                />
              </Field>

              <Field label="Feladó címe" required>
                <Input
                  value={settings.senderAddress}
                  onChange={(e) => setSettings({ ...settings, senderAddress: e.target.value })}
                  placeholder="Irányítószám, Város, Utca, Házszám"
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
