'use client';

import React, { useState } from 'react';
import {
  Dialog,
  DialogTrigger,
  DialogSurface,
  DialogTitle,
  DialogBody,
  DialogActions,
  DialogContent,
  Button,
  Input,
  Label,
  tokens,
  MessageBar,
  MessageBarBody,
} from '@fluentui/react-components';
import { Copy20Regular, Checkmark20Regular } from '@fluentui/react-icons';

interface CoimbraitsSettingsDialogProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
}

export default function CoimbraitsSettingsDialog({ open, onOpenChange }: CoimbraitsSettingsDialogProps) {
  const [accessKeyId] = useState('jg78e42ih1d85egfee18f3fe9618h97gig82158g46j0340hf19ihh7h8936hf2ci');
  const [accessKeySecret] = useState('j59g1295h13hj7gj9f83i1172i352e84g39i8e9jge5ij19fh15690585e89ef95686262288f6840h6f351j466gg51h14e6f6hgg4gjjef695f3g98h037gegfgf94');
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
