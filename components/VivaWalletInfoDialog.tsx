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

interface VivaWalletInfoDialogProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
}

export default function VivaWalletInfoDialog({ open, onOpenChange }: VivaWalletInfoDialogProps) {
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
            Viva Wallet alkalmazás
          </DialogTitle>
          <DialogContent className="space-y-6">
            <div className="flex items-center gap-3 p-4" style={{ backgroundColor: tokens.colorNeutralBackground2, borderRadius: '8px' }}>
              <div style={{ width: '48px', height: '48px', borderRadius: '50%', backgroundColor: tokens.colorBrandBackground, display: 'flex', alignItems: 'center', justifyContent: 'center', color: 'white', fontWeight: 'bold' }}>SR</div>
              <div>
                <Body1Strong>Shoprenter</Body1Strong>
                <Caption1 style={{ color: tokens.colorNeutralForeground3 }}>2026. január 23. 14:48</Caption1>
              </div>
            </div>

            <div className="space-y-4">
              <Body1>
                A Viva Wallet az első európai, teljes mértékben felhőalapú, Microsoft Azure-t használó neobank, ami 24 országában van jelen Európa területén.
              </Body1>

              <Body1>
                Viva Wallet a mikrovállalkozásoktól a nagyvállalatokig terjedő ügyfelei számára kártyaelfogadási megoldásokat kínál az innovatív Viva Terminal App, a Google Play Áruházzal rendelkező kártyatermináljai és a fizetési átjárói segítségével.
              </Body1>

              <div>
                <h3 className="text-lg font-semibold mb-3">A Viva Wallet által nyújtott szolgáltatások</h3>
                <ul className="space-y-2" style={{ paddingLeft: '1.5rem', listStyleType: 'disc' }}>
                  <li>A smart checkoutban <strong>34 féle fizetési mód</strong> érhető el, köztük az Apple Pay és Google Pay is.</li>
                  <li>A fizetőoldal <strong>dizájnolható</strong>, egyedi háttérszín és logó is beállítható.</li>
                  <li>A vásárló jóváhagyásával a <strong>kártyaadatok és a fizetési mód megjegyezhető</strong> és később visszatérő vásárlás során már nem szükséges ezek megadása.</li>
                  <li>A fizetési mód a <strong>Nevogate (korábbi Big Fish) Payment Gateway</strong> alkalmazás igénybevételével használható.</li>
                </ul>
              </div>

              <div>
                <h3 className="text-lg font-semibold mb-3">Elérhetőség</h3>
                <Body1>
                  A funkció <strong>Silver, Gold és Platinum</strong> csomagban érhető el.
                </Body1>
              </div>

              <div>
                <h3 className="text-lg font-semibold mb-3">Támogatott valuták</h3>
                <Body1>
                  EUR, RON, PLN, CZK, HUF, SEK, DKK, BGN, GBP
                </Body1>
              </div>

              <div>
                <h3 className="text-lg font-semibold mb-3">Szükséges terminál adatok</h3>
                <ul className="space-y-1" style={{ paddingLeft: '1.5rem', listStyleType: 'disc' }}>
                  <li>Terminál devizaneme</li>
                  <li>Ügyfél azonosító</li>
                  <li>Titkos kód</li>
                  <li>Kereskedő azonosító</li>
                  <li>API kulcs</li>
                </ul>
              </div>

              <div>
                <h3 className="text-lg font-semibold mb-3">Terminál adatok előállítása - Lépés 1</h3>
                <Body1>Lépj be a Viva Wallet felületére, és végezd el az alábbiakat:</Body1>
                <ol className="space-y-2 mt-2" style={{ paddingLeft: '1.5rem', listStyleType: 'decimal' }}>
                  <li>Válaszd ki a megfelelő Viva Wallet profilt</li>
                  <li>Kattints az <strong>Értesítés</strong> menüpontra</li>
                  <li>Kattints a <strong>Weboldalak / applikációk</strong> almenüpontra</li>
                  <li>Kattints az <strong>Online fizetések</strong> almenüpontra</li>
                  <li>Válaszd ki a <strong>Weboldal / applikáció hozzáadása</strong> opciót</li>
                  <li><strong>Forrás neve:</strong> webhely vagy alkalmazás neve</li>
                  <li><strong>Protokol:</strong> HTTPS</li>
                  <li><strong>Domain név:</strong> system.paymentgateway.hu</li>
                  <li><strong>Integrációs mód:</strong> Redirection/Native Checkout v2</li>
                  <li><strong>Sikeres URL:</strong> VivaWalletResponse</li>
                  <li><strong>Sikertelen URL:</strong> VivaWalletResponse</li>
                  <li>Kattints a <strong>Létrehoz</strong> gombra</li>
                </ol>
              </div>

              <div>
                <h3 className="text-lg font-semibold mb-3">Terminál adatok előállítása - Lépés 2</h3>
                <ol className="space-y-2" style={{ paddingLeft: '1.5rem', listStyleType: 'decimal' }}>
                  <li>Kattints a <strong>Beállítások</strong> menüpontra</li>
                  <li>Válaszd ki az <strong>API hozzáférés</strong> menüt</li>
                  <li>Válaszd ki az <strong>Általános</strong> menüt</li>
                  <li>Navigálj a <strong>Belépési azonosítók</strong> blokkhoz, és másold ki:
                    <ul style={{ paddingLeft: '1.5rem', listStyleType: 'circle', marginTop: '0.5rem' }}>
                      <li>Kereskedő azonosító</li>
                      <li>API kulcs</li>
                    </ul>
                  </li>
                  <li>Navigálj a <strong>Smart Checkout Hitelesítési Adatok</strong> blokkhoz, és másold ki:
                    <ul style={{ paddingLeft: '1.5rem', listStyleType: 'circle', marginTop: '0.5rem' }}>
                      <li>Ügyfél azonosító</li>
                      <li>Titkos kód</li>
                    </ul>
                  </li>
                </ol>
              </div>

              <div>
                <h3 className="text-lg font-semibold mb-3">Tesztelés</h3>
                <Body1>Ellenőrizd az éles terminál működését próbafizetéssel:</Body1>
                <ul className="space-y-2 mt-2" style={{ paddingLeft: '1.5rem', listStyleType: 'disc' }}>
                  <li>Teszteléshez <strong>valós kártyaadatok használata szükséges</strong></li>
                  <li>A fizetés indítását követően megtörtént-e az átirányítás a fizetőoldalra</li>
                  <li>A fizetőoldalon megfelelő céges adatok jelennek-e meg</li>
                  <li>A tranzakció sikeresen lezárult-e</li>
                </ul>
              </div>

              <div>
                <Body1>
                  További információk: <a href="https://www.vivawallet.com" target="_blank" rel="noopener noreferrer" style={{ color: tokens.colorBrandForeground1, textDecoration: 'underline' }}>www.vivawallet.com</a>
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
