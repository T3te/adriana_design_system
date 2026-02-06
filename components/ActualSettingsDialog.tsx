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

interface ActualSettingsDialogProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
}

export default function ActualSettingsDialog({ open, onOpenChange }: ActualSettingsDialogProps) {
  const [accessKeyId] = useState('de56c20fg9b63cedcb96d1dc7496f75egc60936e24h8128fd97gff5f6714fd0ag');
  const [accessKeySecret] = useState('h37e9073f91fh5eh7d61g8950g130c62e17g6c7hec3gh97df93478363c67cd73464040066d4618f4d139h244ee39f92c4d4fee2ehccd473d1e76f815ecedc72');
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
