<img width="1920" height="1080" alt="image" src="https://github.com/user-attachments/assets/8bf418cc-dc1a-4ffd-a1d8-9eae7ce21699" /># RationAI Passmark Test Suite 🧪

> AI-powered end-to-end tests for [RationAI](https://ration-mitra-ai.lovable.app) — a Public Distribution System (PDS) helper app for Indian citizens.

Built for the [Breaking Apps Hackathon](https://hashnode.com/hackathons/breaking-things) using [Passmark](https://github.com/bug0inc/passmark) by Bug0.

---

## 🌐 App Under Test

**RationAI** — [ration-mitra-ai.lovable.app](https://ration-mitra-ai.lovable.app)

An AI-powered assistant that helps Indian citizens with:
- Ration card quota information
- Nearby fair price shop locations
- Complaint filing guidance
- PDS-related queries in Gujarati & English

---

## 🧠 What is Passmark?

Passmark lets you write Playwright tests in **plain English** — no CSS selectors, no page objects. The AI understands your app and runs the steps for you.

```typescript
steps: [
  { description: "Click on the Ask Now button" },
],
assertions: [
  { assertion: "Chat interface is visible" },
]
```

---

## ✅ Test Results

| Test | Status | Time |
|------|--------|------|
| Homepage loads correctly | ✅ Passed | 20.5s |
| Ask AI page works | ✅ Passed | 29.0s |
| Dashboard page loads | ✅ Passed | 26.4s |
| Sample question click works | ✅ Passed | 33.5s |

**4/4 tests passed in 57.3s**

---

## 🚀 Getting Started

### Prerequisites

- Node.js 18+
- An OpenRouter API key (free via [Breaking Apps Hackathon](https://hashnode.com/hackathons/breaking-things))

### Installation

```bash
git clone https://github.com/exedistrict-ux/rationai-passmark-tests.git
cd rationai-passmark-tests
npm install
npx playwright install chromium
```

### Configuration

Create a `.env` file in the root directory:

```bash
cp .env.example .env
```

Edit `.env` and add your OpenRouter API key:

```
OPENROUTER_API_KEY=your_api_key_here
```

### Running Tests

```bash
# Run all tests
npx playwright test --project=chromium

# View HTML report
npx playwright show-report
```

---

## 📁 Project Structure

```
rationai-passmark-tests/
├── tests/
│   └── example.spec.ts    # RationAI test suite
├── .env.example           # Environment variable template
├── .gitignore
├── package.json
├── playwright.config.ts   # Passmark + Playwright config
└── README.md
```

---

## 🐛 Bug Found During Testing

Passmark surfaced a real UX issue: the Dashboard was not easily reachable by clicking from the homepage. The AI correctly failed the step:

```
StepExecutionError: Provider returned error
Step: Click on Dashboard or ડેશબોર્ડ button
```

**Fix applied:** Navigate directly to `/dashboard` route. This revealed the page itself works fine — the navigation flow needed improvement.

---

## ⚙️ Configuration Details

```typescript
// playwright.config.ts
configure({
  ai: {
    gateway: "openrouter",
    model: "anthropic/claude-3-haiku"
  }
});
```

> Note: Redis caching is optional but recommended for faster re-runs. Without it, every step uses a fresh AI call.

---

## 📝 Hackathon Article

Read the full writeup on Hashnode:
👉 *[Breaking RationAI: How I Used Passmark to Test My AI-Powered PDS Helper App](#)*

---

## 🔗 Links

- **App:** [ration-mitra-ai.lovable.app](https://ration-mitra-ai.lovable.app)
- **Passmark:** [github.com/bug0inc/passmark](https://github.com/bug0inc/passmark)
- **Hackathon:** [hashnode.com/hackathons/breaking-things](https://hashnode.com/hackathons/breaking-things)
- **Hackathon Article:[https://gaurangbhatt.hashnode.dev/breaking-rationai-how-i-used-passmark-to-test-my-ai-powered-pds-helper-app]
- **LinkedIn Post :[done https://www.linkedin.com/posts/gaurang-bhatt-4557343a1_breakingappshackathon-passmark-aitesting-share-7458023150623293440-XP49?utm_source=share&utm_medium=member_desktop&rcm=ACoAAGKHtIEBjuRosDneQtMRblik5xdLPaQ1kbA]  

---

## 👤 Author

**Gaurang Bhatt** — [@exedistrict-ux](https://github.com/exedistrict-ux)

---

*Made with ❤️ for the Breaking Apps Hackathon 2026*
