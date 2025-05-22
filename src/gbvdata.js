// Import the local fallback configuration for GBV cases from constants.js.
// This is used if the API call fails.
import { gbvCasesConfig as localGbvCasesConfig } from './constants.js';

/**
 * Fetches GBV (Gender-Based Violence) case data from an API.
 * If the API call is successful, the data is stored in `window.gbvCasesConfig`.
 * If the API call fails, it falls back to using `localGbvCasesConfig` from `constants.js`.
 * After attempting to fetch data (and setting a fallback if necessary), it loads the Phaser game.
 */
export async function classifyData() {
  // URL for the GBV data API
  const url = "https://gbv-ai-api.vercel.app/api/classify";

  // Data payload for the API request
  const data = {
    count: 5, // Number of scenarios to request
    categories: ["digital abuse", "workplace harassment", "intimate partner violence", "bystander intervention"], // Types of scenarios
  };

  try {
    // Attempt to fetch data from the API
    const response = await fetch(url, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data), // Convert the data payload to a JSON string
    });

    // Check if the network response was successful
    if (!response.ok) {
      // If not successful, throw an error to be caught by the catch block
      throw new Error(`Network response was not ok: ${response.status} ${response.statusText}`);
    }

    // If successful, parse the JSON response and store it in the global window object
    window.gbvCasesConfig = await response.json();
    console.log("Successfully fetched GBV data from API.");
  } catch (error) {
    // Fallback logic: If the API call fails, use the local configuration.
    // This ensures the game can still run with predefined scenarios if the API is unavailable.
    console.error("Error fetching GBV data from API:", error);
    console.log("Using fallback GBV cases data from constants.js");
    window.gbvCasesConfig = localGbvCasesConfig; // Assign local data to the global config
  }

  // Dynamically import and load the Phaser game.
  // This is done after gbvCasesConfig is guaranteed to be set (either from API or fallback).
  const { loadPhaserGame } = await import("./main.js");
  loadPhaserGame(); // Initialize and start the Phaser game
}
