'use client';

import React from 'react';
import { useParams, useRouter } from 'next/navigation';
import {
  Card,
  Body1Strong,
  Body1,
  Caption1,
  Title3,
  Badge,
  Button,
  Divider,
  Accordion,
  AccordionItem,
  AccordionHeader,
  AccordionPanel,
  tokens,
} from '@fluentui/react-components';
import {
  ArrowLeft20Regular,
  CheckmarkCircle20Regular,
  ErrorCircle20Regular,
  Warning20Regular,
  Settings24Regular,
  Info20Regular,
  Mail20Regular,
} from '@fluentui/react-icons';
import { mockIntegrations } from '@/lib/mockIntegrations';

export default function IntegrationDetailPage() {
  const params = useParams();
  const router = useRouter();
  const integrationId = params.id as string;

  const integration = mockIntegrations.find((i) => i.id === integrationId);

  if (!integration) {
    return (
      <div className="container mx-auto p-6">
        <Card className="p-8">
          <div className="text-center">
            <Body1Strong>Az integráció nem található</Body1Strong>
          </div>
        </Card>
      </div>
    );
  }

  return (
    <div className="container mx-auto p-6 space-y-6">
      {/* Header */}
      <div className="flex items-center gap-4">
        <Button
          appearance="subtle"
          icon={<ArrowLeft20Regular />}
          onClick={() => router.back()}
        >
          Vissza
        </Button>
      </div>

      {/* Integration Info Card */}
      <Card className="p-6">
        <div className="flex items-start justify-between">
          <div className="flex-1">
            <div className="flex items-center gap-3 mb-2">
              <Title3>{integration.name}</Title3>
              <Badge
                appearance={integration.category === 'API' ? 'filled' : 'outline'}
                color="brand"
                size="small"
              >
                {integration.category}
              </Badge>
              {integration.enabled && (
                <Badge
                  appearance="filled"
                  color="success"
                  icon={<CheckmarkCircle20Regular />}
                >
                  Aktív
                </Badge>
              )}
              {!integration.enabled && (
                <Badge appearance="outline" color="subtle">
                  Inaktív
                </Badge>
              )}
            </div>
            <Caption1 style={{ color: tokens.colorNeutralForeground2, display: 'block' }}>
              {integration.description}
            </Caption1>
            <div className="flex items-center gap-4 mt-3">
              {integration.lastSync && (
                <Caption1 style={{ color: tokens.colorNeutralForeground3 }}>
                  Utolsó szinkronizáció: {integration.lastSync}
                </Caption1>
              )}
              {integration.validUntil && (
                <Caption1 style={{ color: tokens.colorNeutralForeground3 }}>
                  Érvényes eddig: {integration.validUntil}
                </Caption1>
              )}
            </div>
          </div>
          <div className="flex gap-2">
            {integration.documentationUrl && (
              <Button
                appearance="subtle"
                icon={<Info20Regular />}
                onClick={() => window.open(integration.documentationUrl, '_blank')}
              >
                Információ
              </Button>
            )}
            <Button
              appearance="subtle"
              icon={<Mail20Regular />}
              onClick={() => window.location.href = `mailto:support@${integration.id}.hu?subject=Kapcsolatfelvétel - ${integration.name}`}
            >
              Kapcsolatfelvétel
            </Button>
            <Button
              appearance="primary"
              icon={<Settings24Regular />}
              disabled={!integration.enabled}
            >
              Beállítások
            </Button>
          </div>
        </div>
      </Card>

      {/* Bank Accounts - PSD2 integrációkhoz */}
      {integration.bankAccounts && integration.bankAccounts.length > 0 && (
        <Card className="p-6">
          <Title3 className="mb-4">Kapcsolt bankszámlák</Title3>
          <Accordion collapsible multiple>
            {integration.bankAccounts.map((account, idx) => (
              <AccordionItem key={idx} value={idx.toString()}>
                <AccordionHeader>
                  <div className="flex items-center justify-between w-full pr-4">
                    <div className="flex items-center gap-3">
                      <Body1Strong>{account.accountNumber}</Body1Strong>
                      <Badge appearance="filled" color="brand" size="small">{account.currency}</Badge>
                    </div>
                    <Body1Strong style={{ color: tokens.colorBrandForeground1 }}>
                      {account.availableBalance}
                    </Body1Strong>
                  </div>
                </AccordionHeader>
                <AccordionPanel>
                  <div className="p-4 pt-0">
                    <Caption1 style={{ color: tokens.colorNeutralForeground2, display: 'block', marginBottom: '12px' }}>
                      {account.accountName}
                    </Caption1>

                    <div className="grid grid-cols-2 gap-4 mb-4">
                      <div>
                        <Caption1 style={{ color: tokens.colorNeutralForeground3, display: 'block', marginBottom: '4px' }}>
                          Aggreg8 azonosító
                        </Caption1>
                        <Body1>{account.aggreg8Id}</Body1>
                      </div>
                      <div>
                        <Caption1 style={{ color: tokens.colorNeutralForeground3, display: 'block', marginBottom: '4px' }}>
                          Tulajdonos
                        </Caption1>
                        <Body1>{account.owner}</Body1>
                      </div>
                      <div>
                        <Caption1 style={{ color: tokens.colorNeutralForeground3, display: 'block', marginBottom: '4px' }}>
                          Utolsó szinkronizáció
                        </Caption1>
                        <Body1>{account.lastSync}</Body1>
                      </div>
                      <div>
                        <Caption1 style={{ color: tokens.colorNeutralForeground3, display: 'block', marginBottom: '4px' }}>
                          Elérhető tranzakciók
                        </Caption1>
                        <Body1>{account.transactionCount} db</Body1>
                      </div>
                    </div>

                    <Divider className="my-4" />

                    <div className="flex items-center justify-between">
                      <div>
                        <Caption1 style={{ color: tokens.colorNeutralForeground3, display: 'block', marginBottom: '4px' }}>
                          Hozzárendelt cég a Connectben
                        </Caption1>
                        <Body1Strong>{account.assignedCompany}</Body1Strong>
                      </div>
                      <Button appearance="outline" size="small">Módosítás</Button>
                    </div>
                  </div>
                </AccordionPanel>
              </AccordionItem>
            ))}
          </Accordion>
        </Card>
      )}

      {/* Activity Log */}
      {integration.logs && integration.logs.length > 0 && (
        <Card className="p-6">
          <Title3 className="mb-4">Tevékenységi napló</Title3>
          <div className="space-y-3">
            {integration.logs.map((log, idx) => (
              <div 
                key={idx}
                className="flex items-center gap-4 p-4 rounded"
                style={{ 
                  backgroundColor: tokens.colorNeutralBackground2,
                  borderLeft: `4px solid ${
                    log.status === 'success' ? tokens.colorPaletteGreenBorder2 :
                    log.status === 'error' ? tokens.colorPaletteRedBorder2 :
                    tokens.colorPaletteYellowBorder2
                  }`
                }}
              >
                <div className="flex-shrink-0">
                  {log.status === 'success' && (
                    <CheckmarkCircle20Regular 
                      style={{ 
                        color: tokens.colorPaletteGreenForeground2,
                        fontSize: '20px'
                      }} 
                    />
                  )}
                  {log.status === 'error' && (
                    <ErrorCircle20Regular 
                      style={{ 
                        color: tokens.colorPaletteRedForeground2,
                        fontSize: '20px'
                      }} 
                    />
                  )}
                  {log.status === 'warning' && (
                    <Warning20Regular 
                      style={{ 
                        color: tokens.colorPaletteYellowForeground2,
                        fontSize: '20px'
                      }} 
                    />
                  )}
                </div>
                <Body1Strong className="flex-1">{log.message}</Body1Strong>
                {log.details && (
                  <Caption1 style={{ color: tokens.colorNeutralForeground3 }}>
                    {log.details}
                  </Caption1>
                )}
                <Caption1 style={{ color: tokens.colorNeutralForeground3, whiteSpace: 'nowrap' }}>
                  {log.timestamp}
                </Caption1>
              </div>
            ))}
          </div>
        </Card>
      )}

      {/* Empty State */}
      {(!integration.logs || integration.logs.length === 0) && (
        <Card className="p-8">
          <div className="text-center" style={{ color: tokens.colorNeutralForeground3 }}>
            <Body1>Még nincs tevékenységi napló ehhez az integrációhoz</Body1>
          </div>
        </Card>
      )}
    </div>
  );
}
