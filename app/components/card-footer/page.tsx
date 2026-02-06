'use client';

import { 
  Title1,
  Title2,
  Caption1,
  Button,
  CardFooter,
  tokens,
} from '@fluentui/react-components';
import {
  ArrowReplyRegular,
  ShareRegular,
  MoreHorizontalRegular,
} from '@fluentui/react-icons';
import CodeBlock, { CodeComment } from '@/components/CodeBlock';

export default function CardFooterPage() {
  return (
    <div className="max-w-7xl mx-auto">
      <div className="mb-8">
        <Title1>CardFooter</Title1>
        <Caption1 style={{ color: tokens.colorNeutralForeground3 }}>
          A CardFooter komponens a Card belsejében használható, flex elrendezést
          használ a műveletek szervezésére, amelyeket a felhasználó végrehajthat
          a Card-dal, például tartalom megosztása vagy üzenetre válaszolás.
        </Caption1>
      </div>

      {/* Használat */}
      <div className="mb-12">
        <div className="mb-6">
          <Title2>Használat</Title2>
        </div>
        <CodeBlock>
          <CodeComment>{'// Import'}</CodeComment>
          {`import { CardFooter, Button } from '@fluentui/react-components';

`}
          <CodeComment>{'// Használat'}</CodeComment>
          {`<CardFooter>
  <Button icon={<ArrowReplyRegular />}>Válasz</Button>
  <Button icon={<ShareRegular />}>Megosztás</Button>
</CardFooter>`}
        </CodeBlock>
      </div>

      {/* Alapértelmezett */}
      <div className="mb-12">
        <div className="mb-6">
          <Title2>Alapértelmezett</Title2>
        </div>
        <CardFooter style={{ width: '400px' }}>
          <Button icon={<ArrowReplyRegular />}>Válasz</Button>
          <Button icon={<ShareRegular />}>Megosztás</Button>
        </CardFooter>
      </div>

      {/* Action Slot */}
      <div className="mb-12">
        <div className="mb-6">
          <Title2>Action Slot-tal</Title2>
        </div>
        <Caption1 style={{ color: tokens.colorNeutralForeground3 }} className="mb-4 block">
          Az action slot a footer végén jelenik meg, műveleti gombokhoz
          használható.
        </Caption1>
        <CardFooter
          style={{ width: '400px' }}
          action={
            <Button
              appearance="transparent"
              icon={<MoreHorizontalRegular />}
              aria-label="További opciók"
            />
          }
        >
          <Button icon={<ArrowReplyRegular />}>Válasz</Button>
          <Button icon={<ShareRegular />}>Megosztás</Button>
        </CardFooter>
      </div>
    </div>
  );
}
