# DARI Landing Page

This is a static landing page for DARI. All backend code has been removed for static deployment.

## How to update the waitlist
- Use the script in `scripts/update-waitlist.cjs` to add emails to the waitlist before deploying.

## Deployment
- Deploy the contents of `client/public` as your static site root.
- No backend or API endpoints are present.

## Downloading the Waitlist

If you are running the full-stack (Node.js/Express) version, you can download the waitlist file at:

    http://localhost:5000/download-waitlist

This will download the latest `waitlist.txt` file containing all submitted emails.

If deployed on Render, replace `localhost:5000` with your Render service URL.
