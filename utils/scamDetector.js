import { scamKeywords } from "../Services/scamKeywords";

export function checkScam(message) {
  const lowerMsg = message.toLowerCase();
  const matchedWords = scamKeywords.filter((word) =>
    lowerMsg.includes(word.toLowerCase())
  );

  const isScam = matchedWords.length > 0;
  const riskLevel =
    matchedWords.length >= 3 ? "High" : matchedWords.length >= 1 ? "Medium" : "Low";

  return { isScam, riskLevel, matchedWords };
}