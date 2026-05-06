import { test, expect } from "@playwright/test";
import { runSteps } from "passmark";

test("RationAI - Homepage loads correctly", async ({ page }) => {
  test.setTimeout(120_000);
  await runSteps({
    page,
    userFlow: "Visit RationAI homepage",
    steps: [
      { description: "Navigate to https://ration-mitra-ai.lovable.app" },
    ],
    assertions: [
      { assertion: "RationAI homepage is visible with Ask Now button and Dashboard button" },
    ],
    test,
    expect,
  });
});

test("RationAI - Ask AI page works", async ({ page }) => {
  test.setTimeout(120_000);
  await runSteps({
    page,
    userFlow: "Navigate to Ask AI section",
    steps: [
      { description: "Navigate to https://ration-mitra-ai.lovable.app" },
      { description: "Click on the Ask Now or પૂછો button" },
    ],
    assertions: [
      { assertion: "Ask AI page or chat interface is visible" },
    ],
    test,
    expect,
  });
});

test("RationAI - Dashboard page loads", async ({ page }) => {
  test.setTimeout(120_000);
  await runSteps({
    page,
    userFlow: "Navigate to Dashboard",
    steps: [
      { description: "Navigate to https://ration-mitra-ai.lovable.app/dashboard" },
    ],
    assertions: [
      { assertion: "Dashboard page is visible" },
    ],
    test,
    expect,
  });
});

test("RationAI - Sample question click works", async ({ page }) => {
  test.setTimeout(120_000);
  await runSteps({
    page,
    userFlow: "Click a sample question on homepage",
    steps: [
      { description: "Navigate to https://ration-mitra-ai.lovable.app" },
      { description: "Click on the sample question 'મારો ration quota કેટલો છે?'" },
    ],
    assertions: [
      { assertion: "A response or chat page appears after clicking the question" },
    ],
    test,
    expect,
  });
});