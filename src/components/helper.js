export function digitalValidator(value) {
  return /^(\d|\.){1}$/.test(value.toString());
}

export function looseDigitalValidator(value) {
  if (value === undefined || value === null || value === "") return true;
  const digitalsStr = value.toLocaleString("en-US", {
    useGrouping: false
  });

  return /^[\d]+([.]{1}[\d]+){0,1}$/.test(digitalsStr);
}
