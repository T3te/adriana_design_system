'use client';

import React from 'react';
import {
  Dialog,
  DialogSurface,
  DialogTitle,
  DialogBody,
  DialogActions,
  DialogContent,
  Button,
  Body1Strong,
  Body1,
  Caption1,
  tokens,
} from '@fluentui/react-components';
import { Dismiss24Regular } from '@fluentui/react-icons';

interface FoxpostInfoDialogProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
}

export default function FoxpostInfoDialog({ open, onOpenChange }: FoxpostInfoDialogProps) {
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
            Foxpost alkalmazás
          </DialogTitle>
          <DialogContent className="space-y-6">
            <div className="flex items-center gap-3 p-4" style={{ backgroundColor: tokens.colorNeutralBackground2, borderRadius: '8px' }}>
              <div style={{ width: '48px', height: '48px', borderRadius: '50%', backgroundColor: tokens.colorBrandBackground, display: 'flex', alignItems: 'center', justifyContent: 'center', color: 'white', fontWeight: 'bold' }}>SR</div>
              <div>
                <Body1Strong>Shoprenter Kft.</Body1Strong>
                <Caption1 style={{ color: tokens.colorNeutralForeground3 }}>2025. augusztus 14. 13:23</Caption1>
              </div>
            </div>

            <div className="space-y-4">
              <Body1>
                A Foxpost V2 alkalmazás célja, hogy a Shoprenterben leadott megrendelések kényelmesen átadhatóak legyenek a Foxpost rendszerébe. Az adatátadást követően címké nyomtatható a feladott csomaghoz, nyomon követhetők a csomagok státuszai. A megrendelések egyúttal megtalálhatóak a foxpost.hu rendszerében is.
              </Body1>

              <div>
                <h3 className="text-lg font-semibold mb-3">Főbb funkciók</h3>
                <ul className="space-y-2" style={{ paddingLeft: '1.5rem', listStyleType: 'disc' }}>
                  <li>Foxpost szállítási módú rendelések átvétele (új rendelés és minden módosítás esetén).</li>
                  <li>Rendelések listázása, szűrési lehetőségek (névre, státuszra, címké- és szállítólevél nyomtatásra, stb.)</li>
                  <li>Automatikus csomagfeladás a Foxpost rendszerébe megadott rendelés státusz esetén.</li>
                  <li>Automatikus státuszállítások bizonyos műveletek után (címké- vagy szállítólevél nyomtatás, Foxpost feladás).</li>
                  <li>Címkenyomtatás több méretben.</li>
                  <li>Szállítólevél nyomtatás.</li>
                </ul>
              </div>

              <div>
                <h3 className="text-lg font-semibold mb-3">Az alkalmazás telepítése</h3>
                <Body1>
                  A Shoprenter admin felületén az Alkalmazások közül ki kell választani a Foxpost V2 alkalmazást. A Telepítésre kattintva az alkalmazás engedélyezésre kerül a Shoprenter admin felületén.
                </Body1>
                <Body1 style={{ marginTop: '0.5rem' }}>
                  Az alkalmazásba belépni kizárólag a Shoprenter admin felületén keresztül van mód.
                </Body1>
              </div>

              <div>
                <h3 className="text-lg font-semibold mb-3">Foxpost API összekötés</h3>
                <Body1>
                  Az alkalmazás kötelező eleme a Foxpost API kapcsolat beállítása. Az API kapcsolathoz szükséges adatok a foxpost.hu oldalon belépve a Beállítások menüpont alatt találhatóak meg. Amennyiben nincs még ecomm api kulcs generálva, úgy a kulcs generálása az Új generálása gombra kattintással történik.
                </Body1>
              </div>

              <div>
                <h3 className="text-lg font-semibold mb-3">Alkalmazásbeállítások</h3>
                <Body1>
                  Az alkalmazás beállításaihoz javasoljuk a Foxpost tájékoztató dokumentumát, melyben részletes segítség található a beállítások módjáról.
                </Body1>
                <Body1 style={{ marginTop: '0.5rem' }}>
                  Amennyiben további segítségre van szükséged, kattints ide: <a href="https://foxpost.hu/kapcsolat" target="_blank" rel="noopener noreferrer" style={{ color: tokens.colorBrandForeground1, textDecoration: 'underline' }}>foxpost.hu/kapcsolat</a>.
                </Body1>
              </div>
            </div>
          </DialogContent>
          <DialogActions>
            <Button appearance="primary" onClick={() => onOpenChange(false)}>
              Bezárás
            </Button>
          </DialogActions>
        </DialogBody>
      </DialogSurface>
    </Dialog>
  );
}
