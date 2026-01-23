const steps = ["Upload", "Analyze", "Scope", "Pricing", "Preview"];

export default function Stepper({ current }) {
  return (
    <div className="stepper">
      {steps.map((step, index) => {
        const state = index < current ? "complete" : index === current ? "current" : "upcoming";
        return (
          <div key={step} className={`stepper__step stepper__step--${state}`}>
            <div className="stepper__dot" />
            <span>{step}</span>
          </div>
        );
      })}
    </div>
  );
}
