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
  Input,
  Label,
  MessageBar,
  MessageBarBody,
} from '@fluentui/react-components';
import { Copy20Regular, Checkmark20Regular } from '@fluentui/react-icons';

interface RlbSettingsDialogProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
}

export default function RlbSettingsDialog({ open, onOpenChange }: RlbSettingsDialogProps) {
  const [accessKeyId] = useState('cd45b19ef8a52bdcba85c0cb6385e64dfb59825d13g7017ec86fee4e5603ec9f');
  const [accessKeySecret] = useState('g26d8962e80eg4dg6c50f7849f029b51d06f5b6gdb2fg86ce82367252b56bc62353929955c3507e3c028g133dd28e81b3c3edd1dgbbc362c0d65e704dbfbd61');
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
