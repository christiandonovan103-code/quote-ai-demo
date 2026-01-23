import Button from "./Button.jsx";

export default function QuoteSummary({ onSave }) {
  return (
    <div className="summary-panel">
      <div className="summary-panel__header">
        <div>
          <div className="summary-panel__title">Quote Summary</div>
          <div className="summary-panel__subtitle">Auto-synced from scope and pricing.</div>
        </div>
        {onSave ? (
          <Button variant="secondary" size="sm" onClick={onSave}>
            Save
          </Button>
        ) : null}
      </div>

      <div className="summary-panel__block">
        <div className="summary-panel__label">Client</div>
        <div className="summary-panel__value">Smith Family</div>
        <div className="summary-panel__muted">12 Example St, Sydney NSW</div>
      </div>

      <div className="summary-panel__block">
        <div className="summary-panel__label">Job</div>
        <div className="summary-panel__value">Kitchen Renovation</div>
        <div className="summary-panel__muted">Plans + photos uploaded</div>
      </div>

      <div className="summary-panel__totals">
        <div className="summary-panel__row">
          <span>Subtotal</span>
          <span>$7,900</span>
        </div>
        <div className="summary-panel__row">
          <span>Margin</span>
          <span>25%</span>
        </div>
        <div className="summary-panel__row summary-panel__row--total">
          <span>Total</span>
          <span>$8,827.50</span>
        </div>
      </div>
    </div>
  );
}
