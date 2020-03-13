export function digitalValidator(value) {
  return /^(\d|\.){1}$/.test(value.toString());
}

export function looseDigitalValidator(value) {
  if (value === undefined || value === null || value === "") return true;

  const numFormat = Intl.NumberFormat("en-US", {
    useGrouping: false,
    maximumFractionDigits: 20
  });

  const digitalsStr = numFormat.format(value);

  return /^[\d]+([.]{1}[\d]+){0,1}$/.test(digitalsStr);
}
