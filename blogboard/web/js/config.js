// Public client-side configuration only. Do not put secrets in this file.
const siteBaseUrl = new URL("../", document.currentScript.src).href.replace(/\/$/, "");

window.CONFIG = {
    R2_PUBLIC_URL: siteBaseUrl
};
