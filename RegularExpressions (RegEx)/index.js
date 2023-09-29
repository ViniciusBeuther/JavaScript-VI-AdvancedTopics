function phoneNumber(phoneNumberStr) {
    const fixedStr = phoneNumberStr.replace(/[\sa-zA-z]/g, "")
    this.contryCode = fixedStr.match(/(?<=\+)\d{1,3}/)[0]
    this.ddd = fixedStr.replace(/.*\((\d{2})\).*/g, '$1')
}

console.log(new phoneNumber('+55 (47) 99999-0000'))
console.log(new phoneNumber('aaadds +17 (47) 99999-0000'))