import { ticker } from "../data.js";

export default function Ticker() {
  const line = ticker.join("   ///   ") + "   ///   ";

  return (
    <div className="ticker" aria-hidden="true">
      <div className="ticker-track">
        <span>{line}</span>
        <span>{line}</span>
      </div>
    </div>
  );
}
