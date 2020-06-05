export const SelectInput = (name) =>
  (value) => page.select(`select[name='${name}']`, value)

export const TextInput = (name) => async (value) => {
  await page.evaluate((name, value) => {
    (document.querySelector(`[name='${name}']`) as any).value = value
  }, name, value)
}
