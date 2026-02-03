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

interface MplInfoDialogProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
}

export default function MplInfoDialog({ open, onOpenChange }: MplInfoDialogProps) {
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
            MPL Alkalmazás
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
                A postai szolgáltatások nyújtásának részletes szabályait tartalmazó 335/2012. (XII. 4.) Korm. rendelettel (Postai kormányrendelet) kapcsolatos beállításokról ebben a cikkben olvashatunk.
              </Body1>

              <div>
                <ul className="space-y-2" style={{ paddingLeft: '1.5rem', listStyleType: 'disc' }}>
                  <li>
                    Szabályozás részletei: <a href="https://www.posta.hu/webaruhazi_jogszabaly" target="_blank" rel="noopener noreferrer" style={{ color: tokens.colorBrandForeground1, textDecoration: 'underline' }}>www.posta.hu/webaruhazi_jogszabaly</a>
                  </li>
                  <li>
                    Gyakori kérdések: <a href="https://posta.hu/webaruhaz_jogszabaly_gyik" target="_blank" rel="noopener noreferrer" style={{ color: tokens.colorBrandForeground1, textDecoration: 'underline' }}>posta.hu/webaruhaz_jogszabaly_gyik</a>
                  </li>
                </ul>
              </div>

              <Body1>
                Az MPL Alkalmazással közvetlenül a webáruházunkból nyomtathatunk címiratot, és így kényelmesebben elérhetjük az MPL 3000-nél is több csomagátvételi pontját.
              </Body1>

              <div>
                <h3 className="text-lg font-semibold mb-3">Az alkalmazással járó előnyök</h3>
                <ul className="space-y-2" style={{ paddingLeft: '1.5rem', listStyleType: 'disc' }}>
                  <li><strong>Gyors:</strong> címiratkitöltő program nélkül, pár kattintással adhatunk fel csomagot, nem kell CSV vagy XLS fájlokat használni.</li>
                  <li><strong>Biztonságos:</strong> az adatok biztonságos módon kerülnek beküldésre.</li>
                  <li><strong>Költséghatékony:</strong> egyszerűsíti és gyorsítja a vállalati folyamatokat, így időt és pénzt takaríthatunk meg.</li>
                  <li><strong>Informatív:</strong> a rendelést a bővítményből is nyomon tudjuk követni.</li>
                </ul>
              </div>

              <div>
                <h3 className="text-lg font-semibold mb-3">Az alkalmazás bemutatása</h3>
                <Body1>
                  Az MPL Alkalmazás használatához MPL szerződéskötésre és regisztrációra van szükség.
                </Body1>
                <Body1 style={{ marginTop: '0.5rem' }}>
                  A rendeléseket pár lépésben, egyszerűen kezelhetjük:
                </Body1>
                <ul className="space-y-2 mt-2" style={{ paddingLeft: '1.5rem', listStyleType: 'disc' }}>
                  <li>rendelések feldolgozása, adatainak ellenőrzése, címkekérés</li>
                  <li>a feldolgozás végén a napi feladás zárása</li>
                </ul>
              </div>

              <div>
                <h3 className="text-lg font-semibold mb-3">Főbb funkciók</h3>
                <ul className="space-y-2" style={{ paddingLeft: '1.5rem', listStyleType: 'disc' }}>
                  <li>Rendelések gyors megtalálása rendelésszámra vagy időintervallumra keresve</li>
                  <li>Csoportos feldolgozás kezdeményezése</li>
                  <li>Nap végén a feladni kívánt rendelések véglegesítése</li>
                  <li>Rendelések szerkesztése: csomagok súlyának megadása és extrák választása</li>
                  <li>Korábbi feladásösszesítők letöltése</li>
                  <li>Alapbeállítások módosítása</li>
                  <li>Csomagok kiszállításának nyomon követése</li>
                  <li>Rendeléshez tartozó címke letöltése</li>
                  <li>Rendelés-visszaküldések kezelése (inverz szolgáltatás)</li>
                </ul>
              </div>

              <div>
                <h3 className="text-lg font-semibold mb-3">Hol és hogyan érhető el az alkalmazás?</h3>
                <Body1>
                  Az alkalmazás minden Shoprenter webáruház tulajdonos számára elérhető. Az alkalmazáson keresztüli használatot kizárólag a Shoprenter adminban, az Alkalmazások menüpontban vehetjük igénybe.
                </Body1>
                <Body1 style={{ marginTop: '0.5rem' }}>
                  Az alkalmazás beállítása 5 perc alatt elvégezhető, mely után élvezhetjük az automatizálás előnyeit.
                </Body1>
              </div>

              <div>
                <h3 className="text-lg font-semibold mb-3">Mennyibe kerül?</h3>
                <Body1>
                  Az alkalmazás díjmentesen használható, csupán a csomagfeladásokért kell fizetni.
                </Body1>
              </div>

              <div>
                <h3 className="text-lg font-semibold mb-3">Ügyfélszolgálat</h3>
                <Body1>
                  Amennyiben további segítségre van szükséged, vedd fel a kapcsolatot az MPL ügyfélszolgálattal a <a href="https://www.posta.hu" target="_blank" rel="noopener noreferrer" style={{ color: tokens.colorBrandForeground1, textDecoration: 'underline' }}>posta.hu</a> oldalon.
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
