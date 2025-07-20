export default (col, amt) => {
  let num = parseInt(col.slice(1), 16);

  let r = (num >> 16) + amt;
  let g = ((num >> 8) & 0xff) + amt;
  let b = (num & 0xff) + amt;

  r = Math.max(0, Math.min(255, r));
  g = Math.max(0, Math.min(255, g));
  b = Math.max(0, Math.min(255, b));

  const out = (r << 16) | (g << 8) | b;
  return `#${out.toString(16).padStart(6, '0')}`;
};
