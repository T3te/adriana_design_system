'use client';

import { 
  Title1,
  Title2,
  Caption1,
  Button,
  CardHeader,
  Body1,
  tokens,
} from '@fluentui/react-components';
import {
  MoreHorizontalRegular,
} from '@fluentui/react-icons';
import CodeBlock, { CodeComment } from '@/components/CodeBlock';

const resolveAsset = (asset: string) => {
  const ASSET_URL =
    "https://raw.githubusercontent.com/microsoft/fluentui/master/packages/react-components/react-card/stories/src/assets/";
  return `${ASSET_URL}${asset}`;
};

export default function CardHeaderPage() {
  return (
    <div className="max-w-7xl mx-auto">
      <div className="mb-8">
        <Title1>CardHeader</Title1>
        <Caption1 style={{ color: tokens.colorNeutralForeground3 }}>
          A CardHeader komponens a Card belsejében használható, és egy Fluent UI
          szabványnak megfelelő kártya fejlécet jelent.
        </Caption1>
      </div>

      {/* Használat */}
      <div className="mb-12">
        <div className="mb-6">
          <Title2>Használat</Title2>
        </div>
        <CodeBlock>
          <CodeComment>// Import</CodeComment>
          {`import { CardHeader, Body1, Caption1 } from '@fluentui/react-components';

`}
          <CodeComment>// Használat</CodeComment>
          {`<CardHeader
  image={<img src="..." alt="..." />}
  header={<Body1><b>Cím</b></Body1>}
  description={<Caption1>Leírás</Caption1>}
  action={<Button icon={<MoreHorizontalRegular />} />}
/>`}
        </CodeBlock>
      </div>

      {/* Alapértelmezett - Teljes */}
      <div className="mb-12">
        <div className="mb-6">
          <Title2>Alapértelmezett - Minden slot-tal</Title2>
        </div>
        <Caption1 style={{ color: tokens.colorNeutralForeground3 }} className="mb-4 block">
          CardHeader minden elérhető slot-tal: image, header, description és action.
        </Caption1>
        <CardHeader
          style={{ width: '400px' }}
          image={
            <img
              src={resolveAsset("app_logo.svg")}
              alt="App logo"
              style={{ width: '32px', height: '32px' }}
            />
          }
          header={
            <Body1>
              <b>App Name</b>
            </Body1>
          }
          description={<Caption1 style={{ color: tokens.colorNeutralForeground3 }}>Developer</Caption1>}
          action={
            <Button
              appearance="transparent"
              icon={<MoreHorizontalRegular />}
              aria-label="További opciók"
            />
          }
        />
      </div>

      {/* Header és Description */}
      <div className="mb-12">
        <div className="mb-6">
          <Title2>Header és Description</Title2>
        </div>
        <Caption1 style={{ color: tokens.colorNeutralForeground3 }} className="mb-4 block">
          Csak a header és description slot-okkal.
        </Caption1>
        <CardHeader
          style={{ width: '400px' }}
          header={
            <Body1>
              <b>App Name</b>
            </Body1>
          }
          description={<Caption1 style={{ color: tokens.colorNeutralForeground3 }}>Developer</Caption1>}
        />
      </div>

      {/* Image és Header */}
      <div className="mb-12">
        <div className="mb-6">
          <Title2>Image és Header</Title2>
        </div>
        <Caption1 style={{ color: tokens.colorNeutralForeground3 }} className="mb-4 block">
          Image és header slot-okkal, description nélkül.
        </Caption1>
        <CardHeader
          style={{ width: '400px' }}
          image={
            <img
              src={resolveAsset("app_logo.svg")}
              alt="App logo"
              style={{ width: '32px', height: '32px' }}
            />
          }
          header={
            <Body1>
              <b>App Name</b>
            </Body1>
          }
        />
      </div>

      {/* Image, Header és Description */}
      <div className="mb-12">
        <div className="mb-6">
          <Title2>Image, Header és Description</Title2>
        </div>
        <Caption1 style={{ color: tokens.colorNeutralForeground3 }} className="mb-4 block">
          Image, header és description slot-okkal, action nélkül.
        </Caption1>
        <CardHeader
          style={{ width: '400px' }}
          image={
            <img
              src={resolveAsset("app_logo.svg")}
              alt="App logo"
              style={{ width: '32px', height: '32px' }}
            />
          }
          header={
            <Body1>
              <b>App Name</b>
            </Body1>
          }
          description={<Caption1 style={{ color: tokens.colorNeutralForeground3 }}>Developer</Caption1>}
        />
      </div>

      {/* Header és Action */}
      <div className="mb-12">
        <div className="mb-6">
          <Title2>Header és Action</Title2>
        </div>
        <Caption1 style={{ color: tokens.colorNeutralForeground3 }} className="mb-4 block">
          Header és action slot-okkal, image és description nélkül.
        </Caption1>
        <CardHeader
          style={{ width: '400px' }}
          header={
            <Body1>
              <b>App Name</b>
            </Body1>
          }
          action={
            <Button
              appearance="transparent"
              icon={<MoreHorizontalRegular />}
              aria-label="További opciók"
            />
          }
        />
      </div>

      {/* Image, Header és Action */}
      <div className="mb-12">
        <div className="mb-6">
          <Title2>Image, Header és Action</Title2>
        </div>
        <Caption1 style={{ color: tokens.colorNeutralForeground3 }} className="mb-4 block">
          Image, header és action slot-okkal, description nélkül.
        </Caption1>
        <CardHeader
          style={{ width: '400px' }}
          image={
            <img
              src={resolveAsset("app_logo.svg")}
              alt="App logo"
              style={{ width: '32px', height: '32px' }}
            />
          }
          header={
            <Body1>
              <b>App Name</b>
            </Body1>
          }
          action={
            <Button
              appearance="transparent"
              icon={<MoreHorizontalRegular />}
              aria-label="További opciók"
            />
          }
        />
      </div>

      {/* Csak Header */}
      <div className="mb-12">
        <div className="mb-6">
          <Title2>Csak Header</Title2>
        </div>
        <Caption1 style={{ color: tokens.colorNeutralForeground3 }} className="mb-4 block">
          Minimális CardHeader csak header slot-tal.
        </Caption1>
        <CardHeader
          style={{ width: '400px' }}
          header={
            <Body1>
              <b>App Name</b>
            </Body1>
          }
        />
      </div>

      {/* Header és Description action-nel */}
      <div className="mb-12">
        <div className="mb-6">
          <Title2>Header, Description és Action</Title2>
        </div>
        <Caption1 style={{ color: tokens.colorNeutralForeground3 }} className="mb-4 block">
          Header, description és action slot-okkal, image nélkül.
        </Caption1>
        <CardHeader
          style={{ width: '400px' }}
          header={
            <Body1>
              <b>App Name</b>
            </Body1>
          }
          description={<Caption1 style={{ color: tokens.colorNeutralForeground3 }}>Developer</Caption1>}
          action={
            <Button
              appearance="transparent"
              icon={<MoreHorizontalRegular />}
              aria-label="További opciók"
            />
          }
        />
      </div>
    </div>
  );
}
