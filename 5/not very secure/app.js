function alphanumeric(string) {
    return /^[\da-z0-9]+$/gi.test(string)
  }