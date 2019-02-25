const clamp = (n, min, max) => Math.max(Math.min(Math.round(n), max), min);

export default clamp;
