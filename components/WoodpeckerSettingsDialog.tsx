'use client';

import  { useState } from 'react';
import {
  Dialog,
  DialogSurface,
  DialogTitle,
  DialogBody,
  DialogActions,
  DialogContent,
  Button,
  Input,
  Label,
  MessageBar,
  MessageBarBody,
} from '@fluentui/react-components';
import { Copy20Regular, Checkmark20Regular } from '@fluentui/react-icons';

interface WoodpeckerSettingsDialogProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
}

export default function WoodpeckerSettingsDialog({ open, onOpenChange }: WoodpeckerSettingsDialogProps) {
  const [accessKeyId] = useState('ef67d31gh0c74dfedd07e2ed8507g86fhd71047f35i9239ge08hgg6g7825ge1bh');
  const [accessKeySecret] = useState('i48f0184g02gi6fi8e72h0061h241d73f28h7d8ifd4hi08eg04589474d78de84575151177e5729g5e240i355ff40g03d5e5gff3fiide584e2f87g926fdefe83');
  const [copiedId, setCopiedId] = useState(false);
  const [copiedSecret, setCopiedSecret] = useState(false);

  const handleCopyId = () => {
    navigator.clipboard.writeText(accessKeyId);
    setCopiedId(true);
    setTimeout(() => setCopiedId(false), 2000);
  };

  const handleCopySecret = () => {
    navigator.clipboard.writeText(accessKeySecret);
    setCopiedSecret(true);
    setTimeout(() => setCopiedSecret(false), 2000);
  };

  return (
    <Dialog open={open} onOpenChange={(_, data) => onOpenChange(data.open)}>
      <DialogSurface style={{ maxWidth: '600px' }}>
        <DialogBody>
          <DialogTitle>Hozzáférési adatok</DialogTitle>
          <DialogContent>
            <MessageBar intent="warning" style={{ marginBottom: '16px' }}>
              <MessageBarBody>
                Kérjük mentse az adatokat biztonságos helyre, mert az Access Key Secret-et csak egyszer és csak most jelenítjük meg, később nem tudja módosítani, csak újat generálni!
              </MessageBarBody>
            </MessageBar>

            <div style={{ marginBottom: '16px' }}>
              <Label htmlFor="accessKeyId" style={{ marginBottom: '4px', display: 'block' }}>
                Access Key Id
              </Label>
              <div style={{ display: 'flex', gap: '8px' }}>
                <Input
                  id="accessKeyId"
                  value={accessKeyId}
                  readOnly
                  style={{ flex: 1, fontFamily: 'monospace', fontSize: '12px' }}
                />
                <Button
                  appearance="subtle"
                  icon={copiedId ? <Checkmark20Regular /> : <Copy20Regular />}
                  onClick={handleCopyId}
                >
                  {copiedId ? 'Másolva' : 'Másolás'}
                </Button>
              </div>
            </div>

            <div style={{ marginBottom: '16px' }}>
              <Label htmlFor="accessKeySecret" style={{ marginBottom: '4px', display: 'block' }}>
                Access Key Secret
              </Label>
              <div style={{ display: 'flex', gap: '8px' }}>
                <Input
                  id="accessKeySecret"
                  value={accessKeySecret}
                  readOnly
                  style={{ flex: 1, fontFamily: 'monospace', fontSize: '12px' }}
                />
                <Button
                  appearance="subtle"
                  icon={copiedSecret ? <Checkmark20Regular /> : <Copy20Regular />}
                  onClick={handleCopySecret}
                >
                  {copiedSecret ? 'Másolva' : 'Másolás'}
                </Button>
              </div>
            </div>
          </DialogContent>
          <DialogActions>
            <Button appearance="secondary" onClick={() => onOpenChange(false)}>
              Mégse
            </Button>
          </DialogActions>
        </DialogBody>
      </DialogSurface>
    </Dialog>
  );
}
