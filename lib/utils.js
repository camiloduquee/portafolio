export const ValidateString = (value) => {
    if (!value || typeof value !== "string") {
        return false
      }
      return true
}