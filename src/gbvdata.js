export function classifyData(gbvCasesConfig) {
  const url = "https://gbv-ai-api.vercel.app/api/classify";

  const data = {
    count: 1,
    categories: ["workplace harassment"],
  };

  console.log(JSON.stringify(data));

  fetch(url, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(data),
  })
    .then((result) => {
      console.log("Success:", result);
      gbvCasesConfig = result;
      alert("Response received successfully!");
    })
    .catch((error) => {
      console.error("Error:", error);
      alert("An error occurred. Check the console for details.");
    });
}
