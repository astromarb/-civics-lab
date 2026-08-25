# USCIS Civics Lab

Private-account study app for the **2025 USCIS Naturalization Civics Test**.

## Features

- Full official 128-question civics bank
- Supabase email/password authentication
- Supabase-backed study sessions and progress
- Flashcards, short-response practice, deeper study context, and long-form writing
- Timed 20-question quiz mode with 60 seconds per question
- Daily study gate before quiz access
- Weak-question tracking
- Dynamic/location-based answer storage
- Long-form Markdown export for optional grading in ChatGPT or another LLM
- Light/dark mode with account-synced preference
- Responsive desktop, tablet, and mobile layouts

## Architecture

This is a static Vercel frontend backed by Supabase. The Supabase publishable key is intentionally browser-visible; privileged `service_role` credentials are not used in the client.

The question bank is split across `bank1.js` through `bank4.js`. Runtime logic is split across `app1.txt` through `app5.txt` and assembled by `bootstrap.js` at load time. `bootstrap.js` verifies that all 128 questions are present before launching the app.

## Deployment

The production app is currently available at:

https://uscis-civics-lab.vercel.app

For Vercel, import this repository as a static project. No build command is required.

## Data

User-specific data is stored in the dedicated USCIS Civics Lab Supabase project with Row Level Security enabled. This includes settings, study sessions, study activity, question statistics, quiz attempts, and long-form responses.

## Source

The civics content is based on the official USCIS 2025 civics test question bank. Dynamic answers for current officials and state/district questions should be rechecked shortly before the naturalization interview.
