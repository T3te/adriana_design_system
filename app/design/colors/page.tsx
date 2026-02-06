'use client';

import { 
  Title1,
  Title2,
  Caption1,
  Table,
  TableBody,
  TableCell,
  TableRow,
  TableHeader,
  TableHeaderCell,
  Input,
  Menu,
  MenuTrigger,
  MenuPopover,
  MenuList,
  MenuItemRadio,
  MenuGroup,
  Button,
  tokens
} from '@fluentui/react-components';
import { SearchRegular, FilterRegular } from '@fluentui/react-icons';
import { useState } from 'react';
import CodeBlock, { CodeComment } from '@/components/CodeBlock';
import TableContainer from '@/components/TableContainer';


interface ColorToken {
  name: string;
  light: string;
  dark: string;
  description?: string;
}

// Move ColorTable component outside of render
const ColorTable = ({ colors, title, filterTokens }: { 
  colors: ColorToken[], 
  title: string,
  filterTokens: (colors: ColorToken[]) => ColorToken[]
}) => {
  const filteredColors = filterTokens(colors);
  if (filteredColors.length === 0) return null;

  return (
    <div className="mb-12">
      <Title2>{title}</Title2>
      <TableContainer>
      <Table>
        <TableHeader>
          <TableRow>
            <TableHeaderCell>Token név</TableHeaderCell>
            <TableHeaderCell>Aktuális érték</TableHeaderCell>
            <TableHeaderCell>Leírás</TableHeaderCell>
          </TableRow>
        </TableHeader>
        <TableBody>
          {filteredColors.map((color) => {
            const currentValue = tokens[color.name as keyof typeof tokens];
            return (
              <TableRow key={color.name}>
                <TableCell>
                  <div className="font-mono text-[13px]">{color.name}</div>
                </TableCell>
                <TableCell>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                    <div 
                      className="w-10 h-10 rounded-md border" 
                      style={{ backgroundColor: currentValue, borderColor: tokens.colorNeutralStroke2 }}
                    />
                    <Caption1 className="font-mono text-xs" style={{ color: tokens.colorNeutralForeground3 }}>
                      {typeof currentValue === 'string' ? currentValue : 'complex'}
                    </Caption1>
                  </div>
                </TableCell>
                <TableCell>
                  <Caption1>{color.description || '-'}</Caption1>
                </TableCell>
              </TableRow>
            );
          })}
        </TableBody>
      </Table>
      </TableContainer>
    </div>
  );
};

const foregroundColors: ColorToken[] = [
  { name: 'colorNeutralForeground1', light: '#242424', dark: '#ffffff', description: 'Elsődleges szöveg' },
  { name: 'colorNeutralForeground1Hover', light: '#242424', dark: '#ffffff', description: 'Elsődleges szöveg hover' },
  { name: 'colorNeutralForeground1Pressed', light: '#242424', dark: '#ffffff', description: 'Elsődleges szöveg lenyomva' },
  { name: 'colorNeutralForeground1Selected', light: '#242424', dark: '#ffffff', description: 'Elsődleges szöveg kijelölve' },
  { name: 'colorNeutralForeground2', light: '#424242', dark: '#d6d6d6', description: 'Másodlagos szöveg' },
  { name: 'colorNeutralForeground2Hover', light: '#242424', dark: '#ffffff', description: 'Másodlagos szöveg hover' },
  { name: 'colorNeutralForeground2Pressed', light: '#242424', dark: '#ffffff', description: 'Másodlagos szöveg lenyomva' },
  { name: 'colorNeutralForeground2Selected', light: '#242424', dark: '#ffffff', description: 'Másodlagos szöveg kijelölve' },
  { name: 'colorNeutralForeground2BrandHover', light: '#0f6cbd', dark: '#479ef5', description: 'Másodlagos brand szöveg hover' },
  { name: 'colorNeutralForeground2BrandPressed', light: '#115ea3', dark: '#2886de', description: 'Másodlagos brand szöveg lenyomva' },
  { name: 'colorNeutralForeground2BrandSelected', light: '#0f6cbd', dark: '#479ef5', description: 'Másodlagos brand szöveg kijelölve' },
  { name: 'colorNeutralForeground3', light: '#616161', dark: '#adadad', description: 'Segítő szöveg' },
  { name: 'colorNeutralForeground3Hover', light: '#424242', dark: '#d6d6d6', description: 'Segítő szöveg hover' },
  { name: 'colorNeutralForeground3Pressed', light: '#424242', dark: '#d6d6d6', description: 'Segítő szöveg lenyomva' },
  { name: 'colorNeutralForeground3Selected', light: '#424242', dark: '#d6d6d6', description: 'Segítő szöveg kijelölve' },
  { name: 'colorNeutralForeground3BrandHover', light: '#0f6cbd', dark: '#479ef5', description: 'Segítő brand szöveg hover' },
  { name: 'colorNeutralForeground3BrandPressed', light: '#115ea3', dark: '#2886de', description: 'Segítő brand szöveg lenyomva' },
  { name: 'colorNeutralForeground3BrandSelected', light: '#0f6cbd', dark: '#479ef5', description: 'Segítő brand szöveg kijelölve' },
  { name: 'colorNeutralForeground4', light: '#707070', dark: '#999999', description: 'Placeholder szöveg' },
  { name: 'colorNeutralForegroundDisabled', light: '#bdbdbd', dark: '#5c5c5c', description: 'Letiltott szöveg' },
  { name: 'colorNeutralForegroundInvertedDisabled', light: 'rgba(255, 255, 255, 0.4)', dark: 'rgba(255, 255, 255, 0.4)', description: 'Invertált letiltott szöveg' },
  { name: 'colorBrandForegroundLink', light: '#115ea3', dark: '#479ef5', description: 'Brand link szöveg' },
  { name: 'colorBrandForegroundLinkHover', light: '#0f548c', dark: '#62abf5', description: 'Brand link hover' },
  { name: 'colorBrandForegroundLinkPressed', light: '#0c3b5e', dark: '#2886de', description: 'Brand link lenyomva' },
  { name: 'colorBrandForegroundLinkSelected', light: '#115ea3', dark: '#479ef5', description: 'Brand link kijelölve' },
  { name: 'colorNeutralForeground2Link', light: '#424242', dark: '#d6d6d6', description: 'Semleges link szöveg' },
  { name: 'colorNeutralForeground2LinkHover', light: '#242424', dark: '#ffffff', description: 'Semleges link hover' },
  { name: 'colorNeutralForeground2LinkPressed', light: '#242424', dark: '#ffffff', description: 'Semleges link lenyomva' },
  { name: 'colorNeutralForeground2LinkSelected', light: '#242424', dark: '#ffffff', description: 'Semleges link kijelölve' },
  { name: 'colorCompoundBrandForeground1', light: '#0f6cbd', dark: '#479ef5', description: 'Összetett brand szöveg' },
  { name: 'colorCompoundBrandForeground1Hover', light: '#115ea3', dark: '#62abf5', description: 'Összetett brand szöveg hover' },
  { name: 'colorCompoundBrandForeground1Pressed', light: '#0f548c', dark: '#2886de', description: 'Összetett brand szöveg lenyomva' },
  { name: 'colorBrandForeground1', light: '#0f6cbd', dark: '#479ef5', description: 'Brand elsődleges szöveg' },
  { name: 'colorBrandForeground2', light: '#115ea3', dark: '#62abf5', description: 'Brand másodlagos szöveg' },
  { name: 'colorBrandForeground2Hover', light: '#0f548c', dark: '#96c6fa', description: 'Brand másodlagos hover' },
  { name: 'colorBrandForeground2Pressed', light: '#0a2e4a', dark: '#ebf3fc', description: 'Brand másodlagos lenyomva' },
  { name: 'colorNeutralForeground1Static', light: '#242424', dark: '#242424', description: 'Statikus elsődleges szöveg' },
  { name: 'colorNeutralForegroundStaticInverted', light: '#ffffff', dark: '#ffffff', description: 'Statikus invertált szöveg' },
  { name: 'colorNeutralForegroundInverted', light: '#ffffff', dark: '#242424', description: 'Invertált szöveg' },
  { name: 'colorNeutralForegroundInvertedHover', light: '#ffffff', dark: '#242424', description: 'Invertált szöveg hover' },
  { name: 'colorNeutralForegroundInvertedPressed', light: '#ffffff', dark: '#242424', description: 'Invertált szöveg lenyomva' },
  { name: 'colorNeutralForegroundInvertedSelected', light: '#ffffff', dark: '#242424', description: 'Invertált szöveg kijelölve' },
  { name: 'colorNeutralForegroundInverted2', light: '#ffffff', dark: '#242424', description: 'Invertált szöveg 2' },
  { name: 'colorNeutralForegroundOnBrand', light: '#ffffff', dark: '#ffffff', description: 'Szöveg brand háttéren' },
  { name: 'colorNeutralForegroundInvertedLink', light: '#ffffff', dark: '#ffffff', description: 'Invertált link szöveg' },
  { name: 'colorNeutralForegroundInvertedLinkHover', light: '#ffffff', dark: '#ffffff', description: 'Invertált link hover' },
  { name: 'colorNeutralForegroundInvertedLinkPressed', light: '#ffffff', dark: '#ffffff', description: 'Invertált link lenyomva' },
  { name: 'colorNeutralForegroundInvertedLinkSelected', light: '#ffffff', dark: '#ffffff', description: 'Invertált link kijelölve' },
  { name: 'colorBrandForegroundInverted', light: '#479ef5', dark: '#0f6cbd', description: 'Invertált brand szöveg' },
  { name: 'colorBrandForegroundInvertedHover', light: '#62abf5', dark: '#115ea3', description: 'Invertált brand szöveg hover' },
  { name: 'colorBrandForegroundInvertedPressed', light: '#479ef5', dark: '#0f548c', description: 'Invertált brand szöveg lenyomva' },
  { name: 'colorBrandForegroundOnLight', light: '#0f6cbd', dark: '#0f6cbd', description: 'Brand szöveg világos háttéren' },
  { name: 'colorBrandForegroundOnLightHover', light: '#115ea3', dark: '#115ea3', description: 'Brand szöveg világos háttér hover' },
  { name: 'colorBrandForegroundOnLightPressed', light: '#0e4775', dark: '#0e4775', description: 'Brand szöveg világos háttér lenyomva' },
  { name: 'colorBrandForegroundOnLightSelected', light: '#0f548c', dark: '#0f548c', description: 'Brand szöveg világos háttér kijelölve' },
];

const backgroundColors: ColorToken[] = [
  { name: 'colorNeutralBackground1', light: '#ffffff', dark: '#292929', description: 'Alapértelmezett háttér' },
  { name: 'colorNeutralBackground1Hover', light: '#f5f5f5', dark: '#3d3d3d', description: 'Alapértelmezett háttér hover' },
  { name: 'colorNeutralBackground1Pressed', light: '#e0e0e0', dark: '#1f1f1f', description: 'Alapértelmezett háttér lenyomva' },
  { name: 'colorNeutralBackground1Selected', light: '#ebebeb', dark: '#383838', description: 'Alapértelmezett háttér kijelölve' },
  { name: 'colorNeutralBackground2', light: '#fafafa', dark: '#1f1f1f', description: 'Emelt háttér' },
  { name: 'colorNeutralBackground2Hover', light: '#f0f0f0', dark: '#333333', description: 'Emelt háttér hover' },
  { name: 'colorNeutralBackground2Pressed', light: '#dbdbdb', dark: '#141414', description: 'Emelt háttér lenyomva' },
  { name: 'colorNeutralBackground2Selected', light: '#e6e6e6', dark: '#2e2e2e', description: 'Emelt háttér kijelölve' },
  { name: 'colorNeutralBackground3', light: '#f5f5f5', dark: '#141414', description: 'Kiemelt háttér' },
  { name: 'colorNeutralBackground3Hover', light: '#ebebeb', dark: '#292929', description: 'Kiemelt háttér hover' },
  { name: 'colorNeutralBackground3Pressed', light: '#d6d6d6', dark: '#0a0a0a', description: 'Kiemelt háttér lenyomva' },
  { name: 'colorNeutralBackground3Selected', light: '#e0e0e0', dark: '#242424', description: 'Kiemelt háttér kijelölve' },
  { name: 'colorNeutralBackground4', light: '#f0f0f0', dark: '#0a0a0a', description: 'Alternatív háttér' },
  { name: 'colorNeutralBackground4Hover', light: '#fafafa', dark: '#1f1f1f', description: 'Alternatív háttér hover' },
  { name: 'colorNeutralBackground4Pressed', light: '#f5f5f5', dark: '#000000', description: 'Alternatív háttér lenyomva' },
  { name: 'colorNeutralBackground4Selected', light: '#ffffff', dark: '#1a1a1a', description: 'Alternatív háttér kijelölve' },
  { name: 'colorNeutralBackground5', light: '#ebebeb', dark: '#000000', description: 'Extra háttér' },
  { name: 'colorNeutralBackground5Hover', light: '#f5f5f5', dark: '#141414', description: 'Extra háttér hover' },
  { name: 'colorNeutralBackground5Pressed', light: '#f0f0f0', dark: '#050505', description: 'Extra háttér lenyomva' },
  { name: 'colorNeutralBackground5Selected', light: '#fafafa', dark: '#0f0f0f', description: 'Extra háttér kijelölve' },
  { name: 'colorNeutralBackground6', light: '#e6e6e6', dark: '#333333', description: 'Kontrasztos háttér' },
  { name: 'colorNeutralBackgroundInverted', light: '#292929', dark: '#ffffff', description: 'Invertált háttér' },
  { name: 'colorNeutralBackgroundStatic', light: '#333333', dark: '#3d3d3d', description: 'Statikus háttér' },
  { name: 'colorNeutralBackgroundAlpha', light: 'rgba(255, 255, 255, 0.5)', dark: 'rgba(26, 26, 26, 0.5)', description: 'Átlátszó háttér' },
  { name: 'colorNeutralBackgroundAlpha2', light: 'rgba(255, 255, 255, 0.8)', dark: 'rgba(31, 31, 31, 0.7)', description: 'Átlátszó háttér 2' },
  { name: 'colorSubtleBackground', light: 'transparent', dark: 'transparent', description: 'Finom háttér' },
  { name: 'colorSubtleBackgroundHover', light: '#f5f5f5', dark: '#383838', description: 'Finom háttér hover' },
  { name: 'colorSubtleBackgroundPressed', light: '#e0e0e0', dark: '#2e2e2e', description: 'Finom háttér lenyomva' },
  { name: 'colorSubtleBackgroundSelected', light: '#ebebeb', dark: '#333333', description: 'Finom háttér kijelölve' },
  { name: 'colorSubtleBackgroundLightAlphaHover', light: 'rgba(255, 255, 255, 0.7)', dark: 'rgba(36, 36, 36, 0.8)', description: 'Finom világos átlátszó hover' },
  { name: 'colorSubtleBackgroundLightAlphaPressed', light: 'rgba(255, 255, 255, 0.5)', dark: 'rgba(36, 36, 36, 0.5)', description: 'Finom világos átlátszó lenyomva' },
  { name: 'colorSubtleBackgroundLightAlphaSelected', light: 'transparent', dark: 'transparent', description: 'Finom világos átlátszó kijelölve' },
  { name: 'colorSubtleBackgroundInverted', light: 'transparent', dark: 'transparent', description: 'Finom invertált háttér' },
  { name: 'colorSubtleBackgroundInvertedHover', light: 'rgba(0, 0, 0, 0.1)', dark: 'rgba(0, 0, 0, 0.1)', description: 'Finom invertált háttér hover' },
  { name: 'colorSubtleBackgroundInvertedPressed', light: 'rgba(0, 0, 0, 0.3)', dark: 'rgba(0, 0, 0, 0.3)', description: 'Finom invertált háttér lenyomva' },
  { name: 'colorSubtleBackgroundInvertedSelected', light: 'rgba(0, 0, 0, 0.2)', dark: 'rgba(0, 0, 0, 0.2)', description: 'Finom invertált háttér kijelölve' },
  { name: 'colorTransparentBackground', light: 'transparent', dark: 'transparent', description: 'Teljesen átlátszó háttér' },
  { name: 'colorTransparentBackgroundHover', light: 'transparent', dark: 'transparent', description: 'Teljesen átlátszó háttér hover' },
  { name: 'colorTransparentBackgroundPressed', light: 'transparent', dark: 'transparent', description: 'Teljesen átlátszó háttér lenyomva' },
  { name: 'colorTransparentBackgroundSelected', light: 'transparent', dark: 'transparent', description: 'Teljesen átlátszó háttér kijelölve' },
  { name: 'colorNeutralBackgroundDisabled', light: '#f0f0f0', dark: '#141414', description: 'Letiltott háttér' },
  { name: 'colorNeutralBackgroundInvertedDisabled', light: 'rgba(255, 255, 255, 0.1)', dark: 'rgba(255, 255, 255, 0.1)', description: 'Invertált letiltott háttér' },
  { name: 'colorNeutralStencil1', light: '#e6e6e6', dark: '#575757', description: 'Stencil minta 1' },
  { name: 'colorNeutralStencil2', light: '#fafafa', dark: '#333333', description: 'Stencil minta 2' },
  { name: 'colorNeutralStencil1Alpha', light: 'rgba(0, 0, 0, 0.1)', dark: 'rgba(255, 255, 255, 0.1)', description: 'Átlátszó stencil 1' },
  { name: 'colorNeutralStencil2Alpha', light: 'rgba(0, 0, 0, 0.05)', dark: 'rgba(255, 255, 255, 0.05)', description: 'Átlátszó stencil 2' },
  { name: 'colorBackgroundOverlay', light: 'rgba(0, 0, 0, 0.4)', dark: 'rgba(0, 0, 0, 0.5)', description: 'Fedő réteg háttér' },
  { name: 'colorScrollbarOverlay', light: 'rgba(0, 0, 0, 0.5)', dark: 'rgba(255, 255, 255, 0.6)', description: 'Görgetősáv fedő réteg' },
  { name: 'colorBrandBackground', light: '#0f6cbd', dark: '#115ea3', description: 'Brand háttér' },
  { name: 'colorBrandBackgroundHover', light: '#115ea3', dark: '#0f6cbd', description: 'Brand háttér hover' },
  { name: 'colorBrandBackgroundPressed', light: '#0c3b5e', dark: '#0c3b5e', description: 'Brand háttér lenyomva' },
  { name: 'colorBrandBackgroundSelected', light: '#0f548c', dark: '#0f548c', description: 'Brand háttér kijelölve' },
  { name: 'colorCompoundBrandBackground', light: '#0f6cbd', dark: '#479ef5', description: 'Összetett brand háttér' },
  { name: 'colorCompoundBrandBackgroundHover', light: '#115ea3', dark: '#62abf5', description: 'Összetett brand háttér hover' },
  { name: 'colorCompoundBrandBackgroundPressed', light: '#0f548c', dark: '#2886de', description: 'Összetett brand háttér lenyomva' },
  { name: 'colorBrandBackgroundStatic', light: '#0f6cbd', dark: '#0f6cbd', description: 'Statikus brand háttér' },
  { name: 'colorBrandBackground2', light: '#ebf3fc', dark: '#082338', description: 'Brand világos háttér' },
  { name: 'colorBrandBackground2Hover', light: '#cfe4fa', dark: '#0c3b5e', description: 'Brand világos háttér hover' },
  { name: 'colorBrandBackground2Pressed', light: '#96c6fa', dark: '#061724', description: 'Brand világos háttér lenyomva' },
  { name: 'colorBrandBackground3Static', light: '#0f548c', dark: '#0f548c', description: 'Statikus brand háttér 3' },
  { name: 'colorBrandBackground4Static', light: '#0c3b5e', dark: '#0c3b5e', description: 'Statikus brand háttér 4' },
  { name: 'colorBrandBackgroundInverted', light: '#ffffff', dark: '#ffffff', description: 'Invertált brand háttér' },
  { name: 'colorBrandBackgroundInvertedHover', light: '#ebf3fc', dark: '#ebf3fc', description: 'Invertált brand háttér hover' },
  { name: 'colorBrandBackgroundInvertedPressed', light: '#b4d6fa', dark: '#b4d6fa', description: 'Invertált brand háttér lenyomva' },
  { name: 'colorBrandBackgroundInvertedSelected', light: '#cfe4fa', dark: '#cfe4fa', description: 'Invertált brand háttér kijelölve' },
  { name: 'colorNeutralCardBackground', light: '#fafafa', dark: '#333333', description: 'Kártya háttér' },
  { name: 'colorNeutralCardBackgroundHover', light: '#ffffff', dark: '#3d3d3d', description: 'Kártya háttér hover' },
  { name: 'colorNeutralCardBackgroundPressed', light: '#f5f5f5', dark: '#2e2e2e', description: 'Kártya háttér lenyomva' },
  { name: 'colorNeutralCardBackgroundSelected', light: '#ebebeb', dark: '#383838', description: 'Kártya háttér kijelölve' },
  { name: 'colorNeutralCardBackgroundDisabled', light: '#f0f0f0', dark: '#141414', description: 'Kártya háttér letiltva' },
];

const strokeColors: ColorToken[] = [
  { name: 'colorNeutralStrokeAccessible', light: '#616161', dark: '#adadad', description: 'Hozzáférhető keret' },
  { name: 'colorNeutralStrokeAccessibleHover', light: '#575757', dark: '#bdbdbd', description: 'Hozzáférhető keret hover' },
  { name: 'colorNeutralStrokeAccessiblePressed', light: '#4d4d4d', dark: '#b3b3b3', description: 'Hozzáférhető keret lenyomva' },
  { name: 'colorNeutralStrokeAccessibleSelected', light: '#0f6cbd', dark: '#479ef5', description: 'Hozzáférhető keret kijelölve' },
  { name: 'colorNeutralStroke1', light: '#d1d1d1', dark: '#666666', description: 'Alapértelmezett keret' },
  { name: 'colorNeutralStroke1Hover', light: '#c7c7c7', dark: '#757575', description: 'Alapértelmezett keret hover' },
  { name: 'colorNeutralStroke1Pressed', light: '#b3b3b3', dark: '#6b6b6b', description: 'Alapértelmezett keret lenyomva' },
  { name: 'colorNeutralStroke1Selected', light: '#bdbdbd', dark: '#707070', description: 'Alapértelmezett keret kijelölve' },
  { name: 'colorNeutralStroke2', light: '#e0e0e0', dark: '#525252', description: 'Világosabb keret' },
  { name: 'colorNeutralStroke3', light: '#f0f0f0', dark: '#3d3d3d', description: 'Legvilágosabb keret' },
  { name: 'colorNeutralStrokeSubtle', light: '#e0e0e0', dark: '#0a0a0a', description: 'Finom keret' },
  { name: 'colorNeutralStrokeOnBrand', light: '#ffffff', dark: '#292929', description: 'Keret brand háttéren' },
  { name: 'colorNeutralStrokeOnBrand2', light: '#ffffff', dark: '#ffffff', description: 'Keret brand háttéren 2' },
  { name: 'colorNeutralStrokeOnBrand2Hover', light: '#ffffff', dark: '#ffffff', description: 'Keret brand háttéren 2 hover' },
  { name: 'colorNeutralStrokeOnBrand2Pressed', light: '#ffffff', dark: '#ffffff', description: 'Keret brand háttéren 2 lenyomva' },
  { name: 'colorNeutralStrokeOnBrand2Selected', light: '#ffffff', dark: '#ffffff', description: 'Keret brand háttéren 2 kijelölve' },
  { name: 'colorBrandStroke1', light: '#0f6cbd', dark: '#479ef5', description: 'Brand keret' },
  { name: 'colorBrandStroke2', light: '#b4d6fa', dark: '#0e4775', description: 'Brand másodlagos keret' },
  { name: 'colorBrandStroke2Hover', light: '#77b7f7', dark: '#0e4775', description: 'Brand másodlagos keret hover' },
  { name: 'colorBrandStroke2Pressed', light: '#0f6cbd', dark: '#0a2e4a', description: 'Brand másodlagos keret lenyomva' },
  { name: 'colorBrandStroke2Contrast', light: '#b4d6fa', dark: '#0e4775', description: 'Brand másodlagos keret kontrasztos' },
  { name: 'colorCompoundBrandStroke', light: '#0f6cbd', dark: '#479ef5', description: 'Összetett brand keret' },
  { name: 'colorCompoundBrandStrokeHover', light: '#115ea3', dark: '#62abf5', description: 'Összetett brand keret hover' },
  { name: 'colorCompoundBrandStrokePressed', light: '#0f548c', dark: '#2886de', description: 'Összetett brand keret lenyomva' },
  { name: 'colorNeutralStrokeDisabled', light: '#e0e0e0', dark: '#424242', description: 'Letiltott keret' },
  { name: 'colorNeutralStrokeInvertedDisabled', light: 'rgba(255, 255, 255, 0.4)', dark: 'rgba(255, 255, 255, 0.4)', description: 'Invertált letiltott keret' },
  { name: 'colorTransparentStroke', light: 'transparent', dark: 'transparent', description: 'Átlátszó keret' },
  { name: 'colorTransparentStrokeInteractive', light: 'transparent', dark: 'transparent', description: 'Átlátszó interaktív keret' },
  { name: 'colorTransparentStrokeDisabled', light: 'transparent', dark: 'transparent', description: 'Átlátszó letiltott keret' },
  { name: 'colorNeutralStrokeAlpha', light: 'rgba(0, 0, 0, 0.05)', dark: 'rgba(255, 255, 255, 0.1)', description: 'Átlátszó semleges keret' },
  { name: 'colorNeutralStrokeAlpha2', light: 'rgba(255, 255, 255, 0.2)', dark: 'rgba(255, 255, 255, 0.2)', description: 'Átlátszó semleges keret 2' },
  { name: 'colorStrokeFocus1', light: '#ffffff', dark: '#000000', description: 'Fókusz keret 1' },
  { name: 'colorStrokeFocus2', light: '#000000', dark: '#ffffff', description: 'Fókusz keret 2' },
];

const statusColors: ColorToken[] = [
  { name: 'colorStatusSuccessBackground1', light: '#f1faf1', dark: '#052505', description: 'Sikeres - világos háttér' },
  { name: 'colorStatusSuccessBackground2', light: '#9fd89f', dark: '#094509', description: 'Sikeres - közepes háttér' },
  { name: 'colorStatusSuccessBackground3', light: '#107c10', dark: '#107c10', description: 'Sikeres - erős háttér' },
  { name: 'colorStatusSuccessForeground1', light: '#0e700e', dark: '#54b054', description: 'Sikeres - szöveg' },
  { name: 'colorStatusSuccessForeground2', light: '#094509', dark: '#9fd89f' },
  { name: 'colorStatusSuccessForeground3', light: '#107c10', dark: '#9fd89f' },
  { name: 'colorStatusSuccessForegroundInverted', light: '#54b054', dark: '#0e700e' },
  { name: 'colorStatusSuccessBorderActive', light: '#107c10', dark: '#54b054' },
  { name: 'colorStatusSuccessBorder1', light: '#9fd89f', dark: '#107c10' },
  { name: 'colorStatusSuccessBorder2', light: '#107c10', dark: '#9fd89f' },
  { name: 'colorStatusWarningBackground1', light: '#fff9f5', dark: '#4a1e04', description: 'Figyelmeztetés - világos háttér' },
  { name: 'colorStatusWarningBackground2', light: '#fdcfb4', dark: '#8a3707', description: 'Figyelmeztetés - közepes háttér' },
  { name: 'colorStatusWarningBackground3', light: '#f7630c', dark: '#f7630c', description: 'Figyelmeztetés - erős háttér' },
  { name: 'colorStatusWarningForeground1', light: '#bc4b09', dark: '#faa06b', description: 'Figyelmeztetés - szöveg' },
  { name: 'colorStatusWarningForeground2', light: '#8a3707', dark: '#fdcfb4' },
  { name: 'colorStatusWarningForeground3', light: '#bc4b09', dark: '#f98845' },
  { name: 'colorStatusWarningForegroundInverted', light: '#faa06b', dark: '#bc4b09' },
  { name: 'colorStatusWarningBorderActive', light: '#f7630c', dark: '#faa06b' },
  { name: 'colorStatusWarningBorder1', light: '#fdcfb4', dark: '#f7630c' },
  { name: 'colorStatusWarningBorder2', light: '#bc4b09', dark: '#f98845' },
  { name: 'colorStatusDangerBackground1', light: '#fdf3f4', dark: '#3b0509', description: 'Hiba - világos háttér' },
  { name: 'colorStatusDangerBackground2', light: '#eeacb2', dark: '#6e0811', description: 'Hiba - közepes háttér' },
  { name: 'colorStatusDangerBackground3', light: '#c50f1f', dark: '#c50f1f', description: 'Hiba - erős háttér' },
  { name: 'colorStatusDangerForeground1', light: '#b10e1c', dark: '#dc626d', description: 'Hiba - szöveg' },
  { name: 'colorStatusDangerForeground2', light: '#6e0811', dark: '#eeacb2' },
  { name: 'colorStatusDangerForeground3', light: '#c50f1f', dark: '#eeacb2' },
  { name: 'colorStatusDangerForegroundInverted', light: '#dc626d', dark: '#b10e1c' },
  { name: 'colorStatusDangerBorderActive', light: '#c50f1f', dark: '#dc626d' },
  { name: 'colorStatusDangerBorder1', light: '#eeacb2', dark: '#c50f1f' },
  { name: 'colorStatusDangerBorder2', light: '#c50f1f', dark: '#dc626d' },
  { name: 'colorStatusDangerBackground3Hover', light: '#b10e1c', dark: '#b10e1c' },
  { name: 'colorStatusDangerBackground3Pressed', light: '#960b18', dark: '#960b18' },
];

const paletteColors: ColorToken[] = [
  { name: 'colorPaletteRedBackground1', light: '#fdf6f6', dark: '#3f1011', description: 'Piros háttér világos' },
  { name: 'colorPaletteRedBackground2', light: '#f1bbbc', dark: '#751d1f', description: 'Piros háttér közepes' },
  { name: 'colorPaletteRedBackground3', light: '#d13438', dark: '#d13438', description: 'Piros háttér erős' },
  { name: 'colorPaletteRedForeground1', light: '#bc2f32', dark: '#e37d80' },
  { name: 'colorPaletteRedForeground2', light: '#751d1f', dark: '#f1bbbc' },
  { name: 'colorPaletteRedForeground3', light: '#d13438', dark: '#e37d80' },
  { name: 'colorPaletteRedForegroundInverted', light: '#dc5e62', dark: '#d13438' },
  { name: 'colorPaletteRedBorderActive', light: '#d13438', dark: '#e37d80' },
  { name: 'colorPaletteRedBorder1', light: '#f1bbbc', dark: '#d13438' },
  { name: 'colorPaletteRedBorder2', light: '#d13438', dark: '#e37d80' },
  { name: 'colorPaletteGreenBackground1', light: '#f1faf1', dark: '#052505' },
  { name: 'colorPaletteGreenBackground2', light: '#9fd89f', dark: '#094509' },
  { name: 'colorPaletteGreenBackground3', light: '#107c10', dark: '#107c10' },
  { name: 'colorPaletteGreenForeground1', light: '#0e700e', dark: '#54b054' },
  { name: 'colorPaletteGreenForeground2', light: '#094509', dark: '#9fd89f' },
  { name: 'colorPaletteGreenForeground3', light: '#107c10', dark: '#9fd89f' },
  { name: 'colorPaletteGreenForegroundInverted', light: '#359b35', dark: '#107c10' },
  { name: 'colorPaletteGreenBorderActive', light: '#107c10', dark: '#54b054' },
  { name: 'colorPaletteGreenBorder1', light: '#9fd89f', dark: '#107c10' },
  { name: 'colorPaletteGreenBorder2', light: '#107c10', dark: '#9fd89f' },
  { name: 'colorPaletteDarkOrangeBackground1', light: '#fdf6f3', dark: '#411200' },
  { name: 'colorPaletteDarkOrangeBackground2', light: '#f4bfab', dark: '#7a2101' },
  { name: 'colorPaletteDarkOrangeBackground3', light: '#da3b01', dark: '#da3b01' },
  { name: 'colorPaletteDarkOrangeForeground1', light: '#c43501', dark: '#e9835e' },
  { name: 'colorPaletteDarkOrangeForeground2', light: '#7a2101', dark: '#f4bfab' },
  { name: 'colorPaletteDarkOrangeForeground3', light: '#da3b01', dark: '#e9835e' },
  { name: 'colorPaletteDarkOrangeBorderActive', light: '#da3b01', dark: '#e9835e' },
  { name: 'colorPaletteDarkOrangeBorder1', light: '#f4bfab', dark: '#da3b01' },
  { name: 'colorPaletteDarkOrangeBorder2', light: '#da3b01', dark: '#e9835e' },
  { name: 'colorPaletteYellowBackground1', light: '#fffef5', dark: '#4c4400' },
  { name: 'colorPaletteYellowBackground2', light: '#fef7b2', dark: '#817400' },
  { name: 'colorPaletteYellowBackground3', light: '#fde300', dark: '#fde300' },
  { name: 'colorPaletteYellowForeground1', light: '#817400', dark: '#feee66' },
  { name: 'colorPaletteYellowForeground2', light: '#817400', dark: '#fef7b2' },
  { name: 'colorPaletteYellowForeground3', light: '#fde300', dark: '#fdea3d' },
  { name: 'colorPaletteYellowForegroundInverted', light: '#fef7b2', dark: '#817400' },
  { name: 'colorPaletteYellowBorderActive', light: '#fde300', dark: '#feee66' },
  { name: 'colorPaletteYellowBorder1', light: '#fef7b2', dark: '#fde300' },
  { name: 'colorPaletteYellowBorder2', light: '#fde300', dark: '#fdea3d' },
  { name: 'colorPaletteBerryBackground1', light: '#fdf5fc', dark: '#3a1136' },
  { name: 'colorPaletteBerryBackground2', light: '#edbbe7', dark: '#6d2064' },
  { name: 'colorPaletteBerryBackground3', light: '#c239b3', dark: '#c239b3' },
  { name: 'colorPaletteBerryForeground1', light: '#af33a1', dark: '#da7ed0' },
  { name: 'colorPaletteBerryForeground2', light: '#6d2064', dark: '#edbbe7' },
  { name: 'colorPaletteBerryForeground3', light: '#c239b3', dark: '#d161c4' },
  { name: 'colorPaletteBerryBorderActive', light: '#c239b3', dark: '#da7ed0' },
  { name: 'colorPaletteBerryBorder1', light: '#edbbe7', dark: '#c239b3' },
  { name: 'colorPaletteBerryBorder2', light: '#c239b3', dark: '#d161c4' },
  { name: 'colorPaletteLightGreenBackground1', light: '#f2fbf2', dark: '#063004' },
  { name: 'colorPaletteLightGreenBackground2', light: '#a7e3a5', dark: '#0b5a08' },
  { name: 'colorPaletteLightGreenBackground3', light: '#13a10e', dark: '#13a10e' },
  { name: 'colorPaletteLightGreenForeground1', light: '#11910d', dark: '#5ec75a' },
  { name: 'colorPaletteLightGreenForeground2', light: '#0b5a08', dark: '#a7e3a5' },
  { name: 'colorPaletteLightGreenForeground3', light: '#13a10e', dark: '#3db838' },
  { name: 'colorPaletteLightGreenBorderActive', light: '#13a10e', dark: '#5ec75a' },
  { name: 'colorPaletteLightGreenBorder1', light: '#a7e3a5', dark: '#13a10e' },
  { name: 'colorPaletteLightGreenBorder2', light: '#13a10e', dark: '#3db838' },
  { name: 'colorPaletteMarigoldBackground1', light: '#fefbf4', dark: '#463100' },
  { name: 'colorPaletteMarigoldBackground2', light: '#f9e2ae', dark: '#835b00' },
  { name: 'colorPaletteMarigoldBackground3', light: '#eaa300', dark: '#eaa300' },
  { name: 'colorPaletteMarigoldForeground1', light: '#d39300', dark: '#f2c661' },
  { name: 'colorPaletteMarigoldForeground2', light: '#835b00', dark: '#f9e2ae' },
  { name: 'colorPaletteMarigoldForeground3', light: '#eaa300', dark: '#efb839' },
  { name: 'colorPaletteMarigoldBorderActive', light: '#eaa300', dark: '#f2c661' },
  { name: 'colorPaletteMarigoldBorder1', light: '#f9e2ae', dark: '#eaa300' },
  { name: 'colorPaletteMarigoldBorder2', light: '#eaa300', dark: '#efb839' },
  { name: 'colorPalettePurpleBackground3', light: '#5c2e91', dark: '#5c2e91' },
  { name: 'colorPaletteBlueBackground3', light: '#0078d4', dark: '#0078d4' },
  { name: 'colorPaletteMagentaBackground3', light: '#bf0077', dark: '#bf0077' },
];

const shadowColors: ColorToken[] = [
  { name: 'colorNeutralShadowAmbient', light: 'rgba(0,0,0,0.12)', dark: 'rgba(0,0,0,0.24)', description: 'Környező árnyék' },
  { name: 'colorNeutralShadowKey', light: 'rgba(0,0,0,0.14)', dark: 'rgba(0,0,0,0.28)', description: 'Kulcs árnyék' },
  { name: 'colorNeutralShadowAmbientLighter', light: 'rgba(0,0,0,0.06)', dark: 'rgba(0,0,0,0.12)', description: 'Világosabb környező árnyék' },
  { name: 'colorNeutralShadowKeyLighter', light: 'rgba(0,0,0,0.07)', dark: 'rgba(0,0,0,0.14)', description: 'Világosabb kulcs árnyék' },
  { name: 'colorNeutralShadowAmbientDarker', light: 'rgba(0,0,0,0.20)', dark: 'rgba(0,0,0,0.40)', description: 'Sötétebb környező árnyék' },
  { name: 'colorNeutralShadowKeyDarker', light: 'rgba(0,0,0,0.24)', dark: 'rgba(0,0,0,0.48)', description: 'Sötétebb kulcs árnyék' },
  { name: 'colorBrandShadowAmbient', light: 'rgba(0,0,0,0.30)', dark: 'rgba(0,0,0,0.30)', description: 'Brand környező árnyék' },
  { name: 'colorBrandShadowKey', light: 'rgba(0,0,0,0.25)', dark: 'rgba(0,0,0,0.25)', description: 'Brand kulcs árnyék' },
];

export default function ColorsPage() {
  const [searchQuery, setSearchQuery] = useState('');
  const [usageFilter, setUsageFilter] = useState<string>('');
  const [stateFilter, setStateFilter] = useState<string>('');
  const [styleFilter, setStyleFilter] = useState<string>('');

  const filterTokens = (tokens: ColorToken[]) => {
    let filtered = tokens;

    // Text search filter
    if (searchQuery) {
      filtered = filtered.filter(token => 
        token.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
        token.description?.toLowerCase().includes(searchQuery.toLowerCase())
      );
    }

    // Usage filter
    if (usageFilter) {
      filtered = filtered.filter(token => {
        const name = token.name.toLowerCase();
        switch (usageFilter) {
          case 'background': return name.includes('background');
          case 'foreground': return name.includes('foreground');
          case 'stencil': return name.includes('stencil');
          case 'shadow': return name.includes('shadow');
          case 'stroke': return name.includes('stroke');
          case 'border': return name.includes('stroke') || name.includes('border');
          default: return true;
        }
      });
    }

    // State filter
    if (stateFilter) {
      filtered = filtered.filter(token => {
        const name = token.name.toLowerCase();
        switch (stateFilter) {
          case 'hover': return name.includes('hover');
          case 'pressed': return name.includes('pressed');
          case 'selected': return name.includes('selected');
          case 'focus': return name.includes('focus');
          case 'disabled': return name.includes('disabled');
          default: return true;
        }
      });
    }

    // Style filter
    if (styleFilter) {
      filtered = filtered.filter(token => {
        const name = token.name.toLowerCase();
        const desc = token.description?.toLowerCase() || '';
        switch (styleFilter) {
          case 'inverted': return name.includes('inverted') || desc.includes('invertált');
          case 'static': return name.includes('static') || desc.includes('statikus');
          case 'transparent': return name.includes('transparent') || desc.includes('átlátszó');
          case 'alpha': return name.includes('alpha');
          case 'link': return name.includes('link');
          case 'accessible': return name.includes('accessible') || desc.includes('hozzáférhető');
          case 'subtle': return name.includes('subtle') || desc.includes('finom');
          default: return true;
        }
      });
    }

    return filtered;
  };

  return (
    <div className="max-w-7xl mx-auto">
      <div className="mb-8">
        <Title1>Színek</Title1>
      </div>

      <div className="mb-8 space-y-6">
        <div>
          <Title2 className="mb-3">Custom Theme létrehozása</Title2>
          <CodeBlock>
            <div>
              <CodeComment>{'// 1. Brand színek definiálása (lib/themes.ts)'}</CodeComment>
              <div className="pl-4 space-y-1">
                <div>export const adriana: BrandVariants = &#123;</div>
                <div className="pl-4">10: &quot;#060200&quot;,</div>
                <div className="pl-4">20: &quot;#241400&quot;,</div>
                <div className="pl-4">{'// ... további árnyalatok'}</div>
                <div className="pl-4">130: &quot;#FF8C00&quot;,  {'// Elsődleges brand szín'}</div>
                <div className="pl-4">140: &quot;#FFA451&quot;,</div>
                <div className="pl-4">150: &quot;#FFBA7F&quot;,</div>
                <div className="pl-4">160: &quot;#FFCFA8&quot;,</div>
                <div>&#125;;</div>
              </div>
            </div>
            
            <div className="mt-4">
              <CodeComment>{'// 2. Téma létrehozása felülírásokkal'}</CodeComment>
              <div className="pl-4 space-y-1">
                <div>function applyBrandOverrides(theme: Theme, brand: BrandVariants) &#123;</div>
                <div className="pl-4">theme.colorBrandBackground = brand[130];</div>
                <div className="pl-4">theme.colorBrandForeground1 = brand[130];</div>
                <div className="pl-4">theme.colorStrokeFocus2 = brand[130];</div>
                <div className="pl-4">{'// ... további overrides'}</div>
                <div className="pl-4">return theme;</div>
                <div>&#125;</div>
                <div className="mt-2"></div>
                <div>export const adrianaLightTheme = applyBrandOverrides(</div>
                <div className="pl-4">createLightTheme(adriana), adriana</div>
                <div>);</div>
              </div>
            </div>
            
            <div className="mt-4">
              <CodeComment>{'// 3. Téma alkalmazása (app/ClientLayout.tsx)'}</CodeComment>
              <div className="pl-4 space-y-1">
                <div>import &#123; FluentProvider &#125; from &apos;@fluentui/react-components&apos;;</div>
                <div>import &#123; adrianaLightTheme &#125; from &apos;@/lib/themes&apos;;</div>
                <div className="mt-2"></div>
                <div>&lt;FluentProvider theme=&#123;adrianaLightTheme&#125;&gt;</div>
                <div className="pl-4">&#123;children&#125;</div>
                <div>&lt;/FluentProvider&gt;</div>
              </div>
            </div>
          </CodeBlock>
        </div>

        <div>
          <Title2 className="mb-3">Color Tokens használata</Title2>
          <CodeBlock>
            <div>
              <CodeComment>{'// Import'}</CodeComment>
              <div className="pl-4">import &#123; tokens &#125; from &apos;@fluentui/react-components&apos;;</div>
            </div>
            
            <div className="mt-4">
              <CodeComment>{'// Inline style használat'}</CodeComment>
              <div className="pl-4 space-y-1">
                <div>&lt;div style=&#123;&#123; color: tokens.colorBrandForeground1 &#125;&#125;&gt;</div>
                <div>&lt;div style=&#123;&#123; backgroundColor: tokens.colorNeutralBackground1 &#125;&#125;&gt;</div>
                <div>&lt;div style=&#123;&#123; borderColor: tokens.colorBrandStroke1 &#125;&#125;&gt;</div>
              </div>
            </div>
            
            <div className="mt-4">
              <CodeComment>{'// CSS változókkal (makeStyles vagy CSS-ben)'}</CodeComment>
              <div className="pl-4 space-y-1">
                <div>const useStyles = makeStyles(&#123;</div>
                <div className="pl-4">container: &#123;</div>
                <div className="pl-8">color: tokens.colorBrandForeground1,</div>
                <div className="pl-8">backgroundColor: tokens.colorNeutralBackground1,</div>
                <div className="pl-8">&apos;&:hover&apos;: &#123;</div>
                <div className="pl-12">backgroundColor: tokens.colorNeutralBackground1Hover,</div>
                <div className="pl-8">&#125;,</div>
                <div className="pl-4">&#125;,</div>
                <div>&#125;);</div>
              </div>
            </div>
          </CodeBlock>
        </div>

        <div>
          <Title2 className="mb-3">Fontos Brand Tokenek</Title2>
          <div style={{ 
            backgroundColor: tokens.colorNeutralBackground3, 
            borderLeft: `4px solid ${tokens.colorBrandStroke1}`,
            padding: '16px',
            borderRadius: '8px' 
          }}>
            <div className="space-y-2 text-sm" style={{ color: tokens.colorNeutralForeground1 }}>
              <div className="font-semibold mb-2">Gyakran használt brand színek:</div>
              <div className="pl-4 space-y-1">
                <div>• <span className="font-mono" style={{ color: tokens.colorBrandForeground1 }}>colorBrandBackground</span> - Elsődleges gombok, kiemelt elemek háttere</div>
                <div>• <span className="font-mono" style={{ color: tokens.colorBrandForeground1 }}>colorBrandForeground1</span> - Brand szöveg színe, linkek</div>
                <div>• <span className="font-mono" style={{ color: tokens.colorBrandForeground1 }}>colorBrandStroke1</span> - Brand keretek, outline</div>
                <div>• <span className="font-mono" style={{ color: tokens.colorBrandForeground1 }}>colorStrokeFocus2</span> - Fókusz keret (Tab billentyűvel)</div>
                <div>• <span className="font-mono" style={{ color: tokens.colorBrandForeground1 }}>colorCompoundBrandForeground1</span> - Összetett gombok ikonja/szövege</div>
                <div>• <span className="font-mono" style={{ color: tokens.colorBrandForeground1 }}>colorNeutralStrokeAccessibleSelected</span> - Checkbox, radio, input fókusz</div>
              </div>
              <div style={{ 
                marginTop: '12px', 
                paddingTop: '12px', 
                borderTop: `1px solid ${tokens.colorNeutralStroke2}`
              }}>
                <span className="font-semibold">Tipp:</span> Az <span className="font-mono" style={{ color: tokens.colorBrandForeground1 }}>applyBrandOverrides</span> függvény 
                biztosítja, hogy ezek a tokenek mind a custom brand színt használják!
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="flex gap-3 mb-8 flex-wrap items-center">
        <Input
          className="max-w-md"
          contentBefore={<SearchRegular />}
          placeholder="Keresés tokennév vagy leírás alapján..."
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
        />

        <Menu checkedValues={{ usage: [usageFilter || 'all'] }}>
          <MenuTrigger>
            <Button appearance="outline" icon={<FilterRegular />}>
              Használat {usageFilter && `(${usageFilter})`}
            </Button>
          </MenuTrigger>
          <MenuPopover>
            <MenuList>
              <MenuGroup>
                <MenuItemRadio
                  name="usage"
                  value="all"
                  onClick={() => setUsageFilter('')}
                >
                  Összes
                </MenuItemRadio>
                <MenuItemRadio
                  name="usage"
                  value="background"
                  onClick={() => setUsageFilter('background')}
                >
                  Background
                </MenuItemRadio>
                <MenuItemRadio
                  name="usage"
                  value="foreground"
                  onClick={() => setUsageFilter('foreground')}
                >
                  Foreground
                </MenuItemRadio>
                <MenuItemRadio
                  name="usage"
                  value="stencil"
                  onClick={() => setUsageFilter('stencil')}
                >
                  Stencil
                </MenuItemRadio>
                <MenuItemRadio
                  name="usage"
                  value="shadow"
                  onClick={() => setUsageFilter('shadow')}
                >
                  Shadow
                </MenuItemRadio>
                <MenuItemRadio
                  name="usage"
                  value="stroke"
                  onClick={() => setUsageFilter('stroke')}
                >
                  Stroke
                </MenuItemRadio>
                <MenuItemRadio
                  name="usage"
                  value="border"
                  onClick={() => setUsageFilter('border')}
                >
                  Border
                </MenuItemRadio>
              </MenuGroup>
            </MenuList>
          </MenuPopover>
        </Menu>

        <Menu checkedValues={{ state: [stateFilter || 'all'] }}>
          <MenuTrigger>
            <Button appearance="outline" icon={<FilterRegular />}>
              Állapot {stateFilter && `(${stateFilter})`}
            </Button>
          </MenuTrigger>
          <MenuPopover>
            <MenuList>
              <MenuGroup>
                <MenuItemRadio
                  name="state"
                  value="all"
                  onClick={() => setStateFilter('')}
                >
                  Összes
                </MenuItemRadio>
                <MenuItemRadio
                  name="state"
                  value="hover"
                  onClick={() => setStateFilter('hover')}
                >
                  Hover
                </MenuItemRadio>
                <MenuItemRadio
                  name="state"
                  value="pressed"
                  onClick={() => setStateFilter('pressed')}
                >
                  Pressed
                </MenuItemRadio>
                <MenuItemRadio
                  name="state"
                  value="selected"
                  onClick={() => setStateFilter('selected')}
                >
                  Selected
                </MenuItemRadio>
                <MenuItemRadio
                  name="state"
                  value="focus"
                  onClick={() => setStateFilter('focus')}
                >
                  Focus
                </MenuItemRadio>
                <MenuItemRadio
                  name="state"
                  value="disabled"
                  onClick={() => setStateFilter('disabled')}
                >
                  Disabled
                </MenuItemRadio>
              </MenuGroup>
            </MenuList>
          </MenuPopover>
        </Menu>

        <Menu checkedValues={{ style: [styleFilter || 'all'] }}>
          <MenuTrigger>
            <Button appearance="outline" icon={<FilterRegular />}>
              Stílus {styleFilter && `(${styleFilter})`}
            </Button>
          </MenuTrigger>
          <MenuPopover>
            <MenuList>
              <MenuGroup>
                <MenuItemRadio
                  name="style"
                  value="all"
                  onClick={() => setStyleFilter('')}
                >
                  Összes
                </MenuItemRadio>
                <MenuItemRadio
                  name="style"
                  value="inverted"
                  onClick={() => setStyleFilter('inverted')}
                >
                  Inverted
                </MenuItemRadio>
                <MenuItemRadio
                  name="style"
                  value="static"
                  onClick={() => setStyleFilter('static')}
                >
                  Static
                </MenuItemRadio>
                <MenuItemRadio
                  name="style"
                  value="transparent"
                  onClick={() => setStyleFilter('transparent')}
                >
                  Transparent
                </MenuItemRadio>
                <MenuItemRadio
                  name="style"
                  value="alpha"
                  onClick={() => setStyleFilter('alpha')}
                >
                  Alpha
                </MenuItemRadio>
                <MenuItemRadio
                  name="style"
                  value="link"
                  onClick={() => setStyleFilter('link')}
                >
                  Link
                </MenuItemRadio>
                <MenuItemRadio
                  name="style"
                  value="accessible"
                  onClick={() => setStyleFilter('accessible')}
                >
                  Accessible
                </MenuItemRadio>
                <MenuItemRadio
                  name="style"
                  value="subtle"
                  onClick={() => setStyleFilter('subtle')}
                >
                  Subtle
                </MenuItemRadio>
              </MenuGroup>
            </MenuList>
          </MenuPopover>
        </Menu>
      </div>

      <ColorTable colors={foregroundColors} title="Szövegszínek (Foreground)" filterTokens={filterTokens} />
      <ColorTable colors={backgroundColors} title="Háttérszínek (Background)" filterTokens={filterTokens} />
      <ColorTable colors={strokeColors} title="Keretszínek (Stroke/Border)" filterTokens={filterTokens} />
      <ColorTable colors={statusColors} title="Státusz színek" filterTokens={filterTokens} />
      <ColorTable colors={paletteColors} title="Színpaletta" filterTokens={filterTokens} />
      <ColorTable colors={shadowColors} title="Árnyékszínek (Shadow)" filterTokens={filterTokens} />
    </div>
  );
}