const KEY = "quoteai_demo_v1";

export function getDemo() {
  try {
    return JSON.parse(localStorage.getItem(KEY) || "{}");
  } catch {
    return {};
  }
}

export function setDemo(patch) {
  const current = getDemo();
  const next = { ...current, ...patch };
  localStorage.setItem(KEY, JSON.stringify(next));
  return next;
}

export function resetDemo() {
  localStorage.removeItem(KEY);
}
