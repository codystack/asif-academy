const currency = new Intl.NumberFormat("en-GB", { style: "currency", currency: "GBP" });

export function formatCurrency(value: number | string | undefined): string {
  return currency.format(Number(value) || 0);
}

// Matches PHP's date('Y-m-d H:i:s'), which the JSON data files already use.
export function timestamp(date = new Date()): string {
  const p = (n: number) => String(n).padStart(2, "0");
  return (
    `${date.getFullYear()}-${p(date.getMonth() + 1)}-${p(date.getDate())} ` +
    `${p(date.getHours())}:${p(date.getMinutes())}:${p(date.getSeconds())}`
  );
}
