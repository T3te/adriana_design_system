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

interface AdrianaSettingsDialogProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
}

export default function AdrianaSettingsDialog({ open, onOpenChange }: AdrianaSettingsDialogProps) {
  const [accessKeyId] = useState('ab89a06dc7f47fcaa74b9ba5474d53ceab48714c02f6906db75edd3d4592db8e');
  const [accessKeySecret] = useState('f15c7851d79df3cf5b49e6738e918a40c95e4a5fca1ef75bd71256141a45b351242818844a2396d2b917f022cc17dd2870a2dbc0cfaab251b9c54d693caeac50');
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
