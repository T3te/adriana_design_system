'use client';

import { useState } from 'react';
import { 
  Title1, 
  Label, 
  Dropdown, 
  Option, 
  Checkbox, 
  Radio, 
  RadioGroup, 
  Switch, 
  Slider,
  Rating,
  makeStyles 
} from '@fluentui/react-components';
import DemoSection from '@/components/DemoSection';

const useStyles = makeStyles({
  title: {
    marginBottom: '32px',
  },
  inputGroup: {
    display: 'flex',
    flexDirection: 'column',
    gap: '8px',
    maxWidth: '400px',
  },
  checkboxGroup: {
    display: 'flex',
    flexDirection: 'column',
    gap: '12px',
  },
});

export default function SelectionPage() {
  const styles = useStyles();
  const [switchChecked, setSwitchChecked] = useState(false);
  const [sliderValue, setSliderValue] = useState(50);

  return (
    <div className="max-w-7xl mx-auto">
      <div className="mb-8">
        <Title1 className="mb-4 bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">Választók (Selection Controls)</Title1>
        <p className="text-lg text-gray-600 dark:text-gray-400 leading-relaxed mb-8">
          A kiválasztó komponensek lehetővé teszik az opciók közül való választást.
        </p>
      </div>

      <DemoSection title="Dropdown - Legördülő menü">
        <div className={styles.inputGroup}>
          <Label htmlFor="dropdown1">Válassz egy gyümölcsöt</Label>
          <Dropdown id="dropdown1" placeholder="Válassz egy opciót">
            <Option>Alma</Option>
            <Option>Banán</Option>
            <Option>Narancs</Option>
            <Option>Szőlő</Option>
            <Option>Eper</Option>
          </Dropdown>
        </div>

        <div className={styles.inputGroup}>
          <Label htmlFor="dropdown2">Előre kiválasztott érték</Label>
          <Dropdown id="dropdown2" defaultValue="Banán" defaultSelectedOptions={['Banán']}>
            <Option>Alma</Option>
            <Option>Banán</Option>
            <Option>Narancs</Option>
          </Dropdown>
        </div>

        <div className={styles.inputGroup}>
          <Label htmlFor="dropdown3" disabled>Letiltott dropdown</Label>
          <Dropdown id="dropdown3" placeholder="Nem választható" disabled>
            <Option>Opció 1</Option>
            <Option>Opció 2</Option>
          </Dropdown>
        </div>
      </DemoSection>

      <DemoSection title="Checkbox - Jelölőnégyzet">
        <div className={styles.checkboxGroup}>
          <Checkbox label="Alapértelmezett checkbox" />
          <Checkbox label="Bejelölt checkbox" defaultChecked />
          <Checkbox label="Letiltott checkbox" disabled />
          <Checkbox label="Bejelölt és letiltott" defaultChecked disabled />
        </div>
      </DemoSection>

      <DemoSection title="Checkbox méretek">
        <div className={styles.checkboxGroup}>
          <Checkbox label="Közepes méret" size="medium" />
          <Checkbox label="Nagy méret" size="large" />
        </div>
      </DemoSection>

      <DemoSection title="Radio gombok">
        <div className={styles.inputGroup}>
          <Label>Válassz egy opciót</Label>
          <RadioGroup defaultValue="B">
            <Radio value="A" label="Első opció" />
            <Radio value="B" label="Második opció" />
            <Radio value="C" label="Harmadik opció" />
          </RadioGroup>
        </div>

        <div className={styles.inputGroup}>
          <Label>Horizontális elrendezés</Label>
          <RadioGroup defaultValue="medium" layout="horizontal">
            <Radio value="small" label="Kicsi" />
            <Radio value="medium" label="Közepes" />
            <Radio value="large" label="Nagy" />
          </RadioGroup>
        </div>

        <div className={styles.inputGroup}>
          <Label disabled>Letiltott radio csoport</Label>
          <RadioGroup disabled>
            <Radio value="A" label="Nem választható" />
            <Radio value="B" label="Ez sem" />
          </RadioGroup>
        </div>
      </DemoSection>

      <DemoSection title="Switch - Kapcsoló">
        <div className={styles.checkboxGroup}>
          <Switch 
            label="Kapcsoló címke"
          />
          <Switch 
            label="Bekapcsolva"
            defaultChecked
          />
          <Switch 
            label="Letiltott kapcsoló"
            disabled
          />
          <Switch 
            label={switchChecked ? 'Bekapcsolva' : 'Kikapcsolva'}
            checked={switchChecked}
            onChange={(e, data) => setSwitchChecked(data.checked)}
          />
        </div>
      </DemoSection>

      <DemoSection title="Slider - Csúszka">
        <div className={styles.inputGroup}>
          <Label htmlFor="slider1">Egyszerű slider - Érték: {sliderValue}</Label>
          <Slider 
            id="slider1"
            value={sliderValue}
            onChange={(e, data) => setSliderValue(data.value)}
            min={0}
            max={100}
          />
        </div>

        <div className={styles.inputGroup}>
          <Label htmlFor="slider2">Léptetős slider (lépés: 10)</Label>
          <Slider 
            id="slider2"
            defaultValue={50}
            min={0}
            max={100}
            step={10}
          />
        </div>

        <div className={styles.inputGroup}>
          <Label htmlFor="slider3" disabled>Letiltott slider</Label>
          <Slider 
            id="slider3"
            defaultValue={30}
            disabled
          />
        </div>

        <div className={styles.inputGroup}>
          <Label htmlFor="slider4">Függőleges slider</Label>
          <Slider 
            id="slider4"
            defaultValue={50}
            vertical
            style={{ height: '150px' }}
          />
        </div>
      </DemoSection>

      <DemoSection title="Rating - Értékelés">
        <div className={styles.inputGroup}>
          <Label>Értékeld a terméket</Label>
          <Rating defaultValue={3} max={5} />
        </div>

        <div className={styles.inputGroup}>
          <Label>10 csillagos értékelés</Label>
          <Rating defaultValue={7} max={10} />
        </div>

        <div className={styles.inputGroup}>
          <Label>Csak olvasható</Label>
          <Rating value={4} max={5} />
        </div>

        <div className={styles.inputGroup}>
          <Label>Különböző méretek</Label>
          <Rating defaultValue={3} max={5} size="small" />
          <Rating defaultValue={3} max={5} size="medium" />
          <Rating defaultValue={3} max={5} size="large" />
        </div>
      </DemoSection>
    </div>
  );
}
