export const Codegen = (digits) => {

        //random number
        let x = Math.random();
        x = x * 100;
        x = Math.floor(x);
    
    
    //for code generation
     const Alphabets = ["A", "B", "C", "D", "E", "F", "G", "h", "I", "J", "K", "L", "M",
        "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];

    //defining code
    let code = x.toString();
    let i;
    let random = (min = 0, max = 25) => { return (Math.random() * (max - min) + min) }

    //creating code
    for (i = 0; i < digits; i++) {
        code = code + `${Alphabets[Math.floor(random())]}`;
    }

    return code;

}




