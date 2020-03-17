export function digitalValidator(value) {
  return /^(\d|\.|,){1}$/.test(value.toString());
}

export function looseDigitalValidator(value) {
  if (value === undefined || value === null || value === "") return true;

  return /^(\d|\.|,)+$/.test(value.toString());
}
