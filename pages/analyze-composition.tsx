import { useState } from "react";

const AnalyzeComposition = () => {
  const [prompt, setPrompt] = useState("");
  const [result, setResult] = useState("");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!prompt) return;

    const response = await fetch("/api/analyze-composition", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ prompt }),
    });

    const data = await response.json();
    setResult(data.data);
  };

  return (
    <div>
      <h1>Analyze Composition</h1>
      <form onSubmit={handleSubmit}>
        <label>
          Prompt:
          <textarea
            value={prompt}
            onChange={(e) => setPrompt(e.target.value)}
          />
        </label>
        <button type="submit">Analyze</button>
      </form>
      <div>
        <h2>Result:</h2>
        <pre>{result}</pre>
      </div>
    </div>
  );
};

export default AnalyzeComposition;
