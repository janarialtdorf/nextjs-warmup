"use client";

import { useState } from "react";

export default function ServerMessage() {
  const [message, setMessage] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  async function loadMessage() {
    setLoading(true);
    setError("");
    setMessage("");

    try {
      const response = await fetch("/api/message");

      if (!response.ok) {
        throw new Error("Failed to load server message");
      }

      const data = await response.json();

      setMessage(data.message);
    } catch (error) {
      setError("Could not load server message");
    } finally {
      setLoading(false);
    }
  }

  return (
    <div>
      <button onClick={loadMessage}>Load server message</button>

      {loading && <p>Loading...</p>}

      {message && <p>{message}</p>}

      {error && <p>{error}</p>}
    </div>
  );
}
