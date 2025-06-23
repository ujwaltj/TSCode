import type { PlaywrightTestConfig } from "@playwright/test";
import { dot } from "node:test/reporters";

const config: PlaywrightTestConfig = {
  testDir: './tests',
  retries:0,
  reporter: [["dot"],["json", {
    outputFile:"jsonReports/jsonReport.json"
  }], ["html", {
    open: "always"
  }] ],
  use : {
    headless: false,
    screenshot: "only-on-failure",
    video: "on",
    
  }
};

export default config;