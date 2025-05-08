export async function classifyData() {
  const url = "https://gbv-ai-api.vercel.app/api/classify";

  const data = {
    count: 5,
    categories: ["workplace harassment", "bystander intervention","digital abuse", "intimate partner violence"],
  };
  try {
    const response = await fetch(url, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    });
    if (!response.ok) {
      throw new Error("Network response was not ok");
    }
    window.gbvCasesConfig = await response.json();
    // Load Phaser game via the wrapper
    const { loadPhaserGame } = await import("./main.js");
    loadPhaserGame();
  } catch (error) {
    console.error("Error:", error);
  }
}
