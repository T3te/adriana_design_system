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

interface SzamlazzInfoDialogProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
}

export default function SzamlazzInfoDialog({ open, onOpenChange }: SzamlazzInfoDialogProps) {
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
            Számlázz.hu Autokassza beállítása
          </DialogTitle>
          <DialogContent className="space-y-6">
            <div className="flex items-center gap-3 p-4" style={{ backgroundColor: tokens.colorNeutralBackground2, borderRadius: '8px' }}>
              <div style={{ width: '48px', height: '48px', borderRadius: '50%', backgroundColor: tokens.colorBrandBackground, display: 'flex', alignItems: 'center', justifyContent: 'center', color: 'white', fontWeight: 'bold' }}>AR</div>
              <div>
                <Body1Strong>Adriana (automatik.hu)</Body1Strong>
                <Caption1 style={{ color: tokens.colorNeutralForeground3 }}>Beállítási útmutató</Caption1>
              </div>
            </div>

            <div className="space-y-4">
              <div>
                <h3 className="text-lg font-semibold mb-3">Számlázz.hu azonosító kulcs</h3>
                <Body1 style={{ color: tokens.colorNeutralForeground2 }}>
                  Ez a legbonyolultabb lépés, de minden rendben lesz, menni fog!
                </Body1>
                <Body1 style={{ marginTop: '0.5rem' }}>
                  Ha elakadsz, nyugodtan hívd az ügyfélszolgálatunkat ezen a számon: <strong>+36-1-850-6006</strong>
                </Body1>
              </div>

              <div>
                <h3 className="text-lg font-semibold mb-3">Beállítási lépések</h3>
                <ol className="space-y-3" style={{ paddingLeft: '1.5rem', listStyleType: 'decimal' }}>
                  <li>
                    Lépj be annak a cégednek a Számlázz.hu fiókjába, aminek a bankszámla forgalmát elérhetővé szeretnéd tenni a pénzügyesed vagy könyvelőd számára.
                  </li>
                  <li>
                    Ellenőrizd, hogy be van-e kapcsolva az autokassza a Számlázz.hu fiókodban! Ha még nincs, akkor először azt kapcsold be.
                  </li>
                  <li>
                    Jobb felül a <strong>[Beállítások]</strong> legördülő menüben válaszd ki a <strong>[Fiók beállításai]</strong> menüpontot.
                  </li>
                  <li>
                    Ezen belül lent, a bal oldali menüben kattints a <strong>[Könyvelői adatkapcsolatok]</strong> menüpontra.
                  </li>
                  <li>
                    Itt az <strong>[Új adatkapcsolat beállítása]</strong> alatt a <strong>[Fogadó rendszer]</strong>-nél válaszd ki az <strong>[Adriana (automatik.hu)]</strong> opciót.
                  </li>
                  <li>
                    Alatta az <strong>[Azonosító kulcs]</strong> mező értéke ha üres, akkor másold be oda a Számlázz.hu azonosító kulcs értéket, amit a Beállítások menüpontban találsz.
                  </li>
                  <li>
                    Ha az <strong>[Azonosító kulcs]</strong> mező értéke már ki van töltve, akkor hagyd meg a régi kulcsot, és hívd fel az ügyfélszolgálatunkat.
                  </li>
                </ol>
              </div>

              <div>
                <h3 className="text-lg font-semibold mb-3">Számlák küldésének beállítása</h3>
                <ul className="space-y-2" style={{ paddingLeft: '1.5rem', listStyleType: 'disc' }}>
                  <li>
                    A <strong>[Számlák küldésének időszaka]</strong> értékeket, ha üresek, akkor mindkettőt állítsd be <strong>2022.12.31</strong>-re, mert számlákat még nem szeretnénk átküldeni.
                  </li>
                  <li>
                    Ha már ki vannak töltve, akkor hagyd úgy, ahogy most vannak.
                  </li>
                </ul>
              </div>

              <div>
                <h3 className="text-lg font-semibold mb-3">Banki tranzakciók beállítása</h3>
                <ol className="space-y-2" style={{ paddingLeft: '1.5rem', listStyleType: 'decimal' }}>
                  <li>
                    A <strong>[Banki tranzakciók küldése]</strong> cím alatt a <strong>[Küldd át a banki tranzakciókat is]</strong> melletti pipát kattintsd be.
                  </li>
                  <li>
                    A <strong>[Tranzakciók küldésének kezdete]</strong> értéket javasoljuk, hogy egy olyan napra állítsd be, amelyik napnak a teljes napi forgalma már benne van a Számlázz.hu-ban.
                  </li>
                  <li>
                    Tehát például, ha ma napközben állítottad be a Számlázz.hu-ban az autokassza kapcsolatot a bankkal, akkor itt <strong>holnapi dátumot</strong> adj meg.
                  </li>
                  <li>
                    A <strong>[Tranzakciók küldésének vége]</strong> érték maradjon üres. Ezt majd akkor kell csak beírnod, amikor meg akarod szüntetni a banki adatok átadását.
                  </li>
                </ol>
              </div>

              <div>
                <h3 className="text-lg font-semibold mb-3">Fontos tudnivalók</h3>
                <Body1>
                  Az azonosító kulcs végén az <strong>"-atmtk"</strong> szöveg beletartozik a kulcsba, ezt is másold be!
                </Body1>
                <Body1 style={{ marginTop: '0.5rem' }}>
                  Az azonosító kulcsot a rendszer <strong>Beállítások</strong> menüpontjában találod meg.
                </Body1>
              </div>

              <div>
                <h3 className="text-lg font-semibold mb-3">Segítségre van szükséged?</h3>
                <Body1>
                  Ügyfélszolgálat: <a href="tel:+3618506006" style={{ color: tokens.colorBrandForeground1, textDecoration: 'underline' }}>+36-1-850-6006</a>
                </Body1>
                <Body1 style={{ marginTop: '0.5rem' }}>
                  További információk: <a href="https://www.szamlazz.hu" target="_blank" rel="noopener noreferrer" style={{ color: tokens.colorBrandForeground1, textDecoration: 'underline' }}>www.szamlazz.hu</a>
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
