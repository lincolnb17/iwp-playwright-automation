import { PlaywrightTestConfig, devices, expect } from '@playwright/test';
import { matchers } from 'playwright-expect';

expect.extend(matchers);

const config: PlaywrightTestConfig = {
  use: {
    headless: true, // Disable headless mode globally
    viewport: null
  },
  projects: [
    {
      name: 'Chrome Stable',
      use: {
        browserName: 'chromium',
        channel: 'chrome',
      },
    // },
    // {
    //   name: 'Desktop Safari',
    //   use: {
    //     browserName: 'webkit',
    //   }
    // },
    // {
    //   name: 'Mobile Chrome',
    //   use: devices['Pixel 5'],
    // },
    // {
    //   name: 'Mobile Safari',
    //   use: devices['iPhone 12'],
    // },
    // {
    //   name: 'Desktop Firefox',
    //   use: {
    //     browserName: 'firefox',
    //   }
    },
  ],
};

export default config;// playwright.config.js

