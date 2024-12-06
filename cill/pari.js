function valueArray(fieldOrDatumDef, values) {
  if (Array.isArray(values)) {
    return values;
  } else if (typeof values === 'string') {
    return [values];
  } else if (typeof values === 'number') {
    return [values];
  } else {
    throw new Error('Invalid value type');
  }
}
