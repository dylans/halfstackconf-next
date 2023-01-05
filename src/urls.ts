export function getProspectusUri(slug: string, year: number) {
  return `/assets/HalfStack${uppercaseFirst(slug)}${year}Prospectus.pdf`;
}

function uppercaseFirst(text: string) {
  return text[0].toUpperCase() + text.slice(1);
}

export const sponsorshipForm =
  "https://docs.google.com/forms/d/e/1FAIpQLSeKnyG1yon8UfBRVDQ3JT-MHK_4D8QRKEgPLcNELajC4sn3Pw/viewform";
