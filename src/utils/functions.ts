function formatCurrency(valor: number): string {
  const locale = "pt-BR"; 
  const formatter = new Intl.NumberFormat(locale, {
    style: "currency",
    currency: "BRL",
  });

  return formatter.format(valor);
}

export { formatCurrency };
