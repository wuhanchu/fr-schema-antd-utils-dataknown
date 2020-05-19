export const s2ab = function (s) {
    const buf = new ArrayBuffer(s.length)
    let view = new Uint8Array(buf)
    for (let i = 0; i !== s.length; i++) {
        view[i] = s.charCodeAt(i) & 0xff
    }
    return buf
}
