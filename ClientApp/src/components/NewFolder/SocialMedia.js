

//Facebook Share 
export const fbShareCall = (url) => {

    let x = `https://www.facebook.com/sharer.php?u=${url}`
     window.open(x, '_blank');

}

//Twitter Share 
export const twitterShareCall = (url, data) => {
    let x = `https://twitter.com/share?url=${url}&text=${data}`
    window.open(x, '_blank');
}

//Linkedin Share 
export const linkedInCall = (url, data) => {
    let x = `https://www.linkedin.com/shareArticle?url= ${url}&title= ${data}`
    window.open(x, '_blank');

}

//WhatApp Share 
export const whatsappCall = (title,url) => {
    let x = `https://api.whatsapp.com/send?text= ${title} ${url}`
    window.open(x, '_blank');

}


//Google Share 
export const googleCall = ( url) => {
    let x = `https://plus.google.com/share?url=${url}`
    window.open(x, '_blank');

}

