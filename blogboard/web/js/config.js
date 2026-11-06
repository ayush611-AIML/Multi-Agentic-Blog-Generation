// Public client-side configuration only. Do not put secrets in this file.
const isLocalDevelopment = ["localhost", "127.0.0.1"].includes(window.location.hostname);

window.CONFIG = {
    R2_PUBLIC_URL: isLocalDevelopment
        ? window.location.origin
        : "https://pub-dc2d6fa38dd34e9c9398d723b321e423.r2.dev"
};
