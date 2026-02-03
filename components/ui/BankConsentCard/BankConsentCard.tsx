import {
  Card,
  CardHeader,
  CardFooter,
  Accordion,
  AccordionItem,
  AccordionHeader,
  AccordionPanel,
  Button,
  Divider,
  Body1Strong,
  Body1Stronger,
} from '@fluentui/react-components';
import { Building24Regular, CheckmarkCircle32Regular } from '@fluentui/react-icons';

interface BankAccount {
  accountNumber: string;
  currency: string;
  aggreg8Id: string;
  owner: string;
  accountName: string;
  availableBalance: string;
  lastSync: string;
  transactionCount: number;
  assignedCompany: string;
}

interface BankConsent {
  bankName: string;
  accounts: BankAccount[];
  validUntil: string;
}

interface BankConsentCardProps {
  consent: BankConsent;
}

export default function BankConsentCard({ consent }: BankConsentCardProps) {
  return (
    <Card className="w-full">
      <CardHeader
        header={
          <div className="w-full flex items-center justify-between">
            <div className="flex items-center">
              <Building24Regular className="mr-2" />
              <Body1Stronger>{consent.bankName}</Body1Stronger>
            </div>
            <div className="flex items-center">
              <div className="p-2 rounded flex items-center">
                <CheckmarkCircle32Regular className="text-green-600 ml-2" />
              </div>
            </div>
          </div>
        }
        className="p-3"
      />

      <div className="p-2 my-4">
        <Accordion collapsible>
          {consent.accounts.map((account, accIdx) => (
            <AccordionItem key={accIdx} value={accIdx.toString()}>
              <AccordionHeader>
                <div className="!flex !w-full !p-4 !font-bold !items-center">
                  <div className="mr-2">{account.accountNumber}</div>
                  <div className="mr-2">{account.currency}</div>
                </div>
              </AccordionHeader>
              <AccordionPanel>
                <div className="flex flex-col gap-4 p-4">
                  <div>
                    <Body1Strong>Aggreg8 azonosító:</Body1Strong> {account.aggreg8Id}
                  </div>
                  <div>
                    <Body1Strong>Tulajdonos:</Body1Strong> {account.owner}
                  </div>
                  <div>
                    <Body1Strong>Számla megnevezése:</Body1Strong> {account.accountName}
                  </div>
                  <div>
                    <Body1Strong>Elérhető egyenleg:</Body1Strong> {account.availableBalance}
                  </div>
                  <div>
                    <Body1Strong>Utolsó sikeres szinkronizáció:</Body1Strong> {account.lastSync}
                  </div>
                  <div>
                    <Body1Strong>Elérhető tranzakciók:</Body1Strong> {account.transactionCount} db
                  </div>
                  <div className="flex items-center w-full justify-between">
                    <div className="flex items-center">
                      <Body1Strong className="mr-2">Hozzárendelt cég a Connectben:</Body1Strong>
                      <p>{account.assignedCompany}</p>
                    </div>
                    <Button appearance="outline">Módosítás</Button>
                  </div>
                </div>
              </AccordionPanel>
            </AccordionItem>
          ))}
        </Accordion>
      </div>

      <Divider />

      <CardFooter>
        <div className="w-full p-2 rounded flex items-center justify-between">
          <Body1Strong>Érvényes eddig: {consent.validUntil}</Body1Strong>
          <div>
            <Button appearance="outline" className="!mr-2 hover:!bg-red-800 hover:!text-white">
              Törlés
            </Button>
            <Button appearance="outline" className="hover:!bg-green-800 hover:!text-white">
              Hosszabbítás
            </Button>
          </div>
        </div>
      </CardFooter>
    </Card>
  );
}
