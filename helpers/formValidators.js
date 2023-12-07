export function emailValidator(value) {
    return !value
        ? true
        : /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|.(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(
              value
          )
}

export function nameValidator(value) {
    return !value ? true : value.length >= 2
}

export function phoneValidator(value) {
    return !value
        ? true
        : /^(\+380[0-9]{9})$/.test(value) || /^0[0-9]{9}$/.test(value)
}