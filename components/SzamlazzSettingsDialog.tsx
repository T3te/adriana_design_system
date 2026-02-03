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
  tokens,
} from '@fluentui/react-components';
import { Dismiss24Regular, Copy24Regular } from '@fluentui/react-icons';

interface SzamlazzSettingsDialogProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
}

export default function SzamlazzSettingsDialog({ open, onOpenChange }: SzamlazzSettingsDialogProps) {
  const [settings, setSettings] = useState({
    identificationKey: 'yDXJqRKChksPjQKXgwmnfV2bZzItepFMVicf39rKaSJtzuKgDe9qipVN2BmrHi0L-atmtk',
  });

  const handleCopyKey = () => {
    navigator.clipboard.writeText(settings.identificationKey);
    // Optionally show a toast notification
  };

  const handleSave = () => {
    console.log('Számlázz.hu beállítások mentve:', settings);
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
            Számlázz.hu Autokassza Beállítások
          </DialogTitle>
          <DialogContent className="space-y-6">
            <div className="space-y-4">
              <h3 className="text-lg font-semibold">Számlázz.hu azonosító kulcs</h3>
              <Caption1 style={{ color: tokens.colorNeutralForeground2, display: 'block' }}>
                A lenti mezőben látható Számlázz.hu azonosító kulcsot másold be a céged Számlázz.hu fiókjába a Könyvelői adatkapcsolatok beállításainál.
              </Caption1>
              <Caption1 style={{ color: tokens.colorNeutralForeground2, display: 'block', marginTop: '0.5rem' }}>
                <strong>Fontos:</strong> A kulcs végén az "-atmtk" szöveg is beletartozik!
              </Caption1>
              
              <Field label="Azonosító kulcs" required>
                <div style={{ display: 'flex', gap: '8px' }}>
                  <Input
                    value={settings.identificationKey}
                    readOnly
                    style={{ flex: 1, fontFamily: 'monospace', backgroundColor: tokens.colorNeutralBackground3 }}
                  />
                  <Button
                    appearance="secondary"
                    icon={<Copy24Regular />}
                    onClick={handleCopyKey}
                  >
                    Másolás
                  </Button>
                </div>
              </Field>

              <div style={{ padding: '16px', backgroundColor: tokens.colorNeutralBackground2, borderRadius: '8px', marginTop: '16px' }}>
                <h4 className="font-semibold mb-2">Gyors útmutató:</h4>
                <ol className="space-y-2" style={{ paddingLeft: '1.5rem', listStyleType: 'decimal', fontSize: '14px' }}>
                  <li>Lépj be a Számlázz.hu fiókodba</li>
                  <li>Beállítások → Fiók beállításai → Könyvelői adatkapcsolatok</li>
                  <li>Új adatkapcsolat → Fogadó rendszer: <strong>Adriana (automatik.hu)</strong></li>
                  <li>Másold be az Azonosító kulcsot</li>
                  <li>Pipáld be: "Küldd át a banki tranzakciókat is"</li>
                  <li>Állítsd be a Tranzakciók küldésének kezdetét</li>
                </ol>
                <Caption1 style={{ marginTop: '12px', display: 'block' }}>
                  Részletes leírásért kattints az <strong>Információ</strong> gombra a kártyán.
                </Caption1>
              </div>
            </div>
          </DialogContent>
          <DialogActions>
            <Button appearance="secondary" onClick={() => onOpenChange(false)}>
              Mégse
            </Button>
            <Button appearance="primary" onClick={handleSave}>
              Bezárás
            </Button>
          </DialogActions>
        </DialogBody>
      </DialogSurface>
    </Dialog>
  );
}
