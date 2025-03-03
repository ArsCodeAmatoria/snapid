import { createTamagui } from 'tamagui';
import { shorthands } from '@tamagui/shorthands';
import { themes, tokens } from '@tamagui/theme-base';

const appConfig = createTamagui({
  themes,
  tokens,
  shorthands,
});

export type AppConfig = typeof appConfig;

export default appConfig; 