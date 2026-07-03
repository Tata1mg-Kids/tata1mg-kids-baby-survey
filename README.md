# The Parent Pulse - Kids & Baby Care Survey

This folder contains a GitHub Pages-ready survey for Tata 1mg Kids & Baby.

## Files
- `index.html` - the survey page
- `google-apps-script.gs` - optional Google Sheets backend to collect responses

## Publish as a GitHub Pages link
1. Create a new GitHub repository, for example: `1mg-parent-pulse-survey`.
2. Upload `index.html` to the root of the repository.
3. Go to Settings > Pages.
4. Under Build and deployment, choose Source: Deploy from a branch.
5. Select Branch: `main`, Folder: `/root`, then Save.
6. Your link will look like: `https://YOUR-GITHUB-USERNAME.github.io/1mg-parent-pulse-survey/`

## Collect responses in Google Sheets
GitHub Pages only hosts the form. To collect responses:
1. Create a Google Sheet.
2. Open Extensions > Apps Script.
3. Paste the code from `google-apps-script.gs`.
4. Deploy it as a Web App: Execute as Me, Access Anyone.
5. Copy the Web App URL.
6. Open `index.html` and paste the URL here:

```js
const SUBMIT_URL = "PASTE_WEB_APP_URL_HERE";
```

If `SUBMIT_URL` is blank, the survey will download each response as a JSON file instead of saving to Google Sheets.
