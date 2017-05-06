const polyfill = <T> (array: T[], predicate: (value: T) => boolean): T | undefined => {
  for (let i = 0; i < array.length; i++) {
    if (predicate(array[i])) {
      return array[i]
    }
  }

  return undefined
}

const nativeWrapper = <T> (array: T[], predicate: (value: T) => boolean): T | undefined => {
  return array.find(predicate)
}

export default Array.prototype.find ? nativeWrapper : polyfill
