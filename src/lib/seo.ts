export const siteName = "Satyam Raj Portfolio";

export const siteDescription =
  "Satyam Raj is an aspiring Product Manager with AI product, product delivery, and engineering experience across fast-paced startup environments.";

export function getSiteUrl() {
  const url =
    process.env.NEXT_PUBLIC_SITE_URL ??
    "https://satyamraj1643.com";

  return url.startsWith("http") ? url : `https://${url}`;
}

export function absoluteUrl(path = "/") {
  return new URL(path, getSiteUrl()).toString();
}
