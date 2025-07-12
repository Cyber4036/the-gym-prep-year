function transformString(text, callback1, callback2) {
    // Your code here
    const txt=callback1(text);
    return callback2(txt);
}

const upper=(txt)=>{
    return txt.toUpperCase()
}
const rev=(txt)=>{
    return txt.reverse()
}


const input= "hello world"

transformString(input, upper, rev)
// Expected output with uppercase and reverse callbacks:
// "DLROW OLLEH"