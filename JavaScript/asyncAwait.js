/*
async function asAw() {
  var a = 15;
  setTimeout(function () {
    console.log("Hello");
  }, 5000);
  console.log(await a);
}
asAw().then((res) => console.log(res))
*/

//Instagram console Demo for post,like,comment,share

likeCode = async () =>{
    return new Promise((likePost) => {
        setTimeout(() => {
            likePost("Liked the Post Successfully")
        }, 5000);
    })
}

commentCode = async () =>{
    return new Promise((commentPost) => {
        setTimeout(() => {
            commentPost("Commented on the Post Successfully")
        }, 5000);
    })
}

shareCode = async () =>{
    return new Promise((sharePost) => {
        setTimeout(() => {
            sharePost("Shared the Post Successfully")
        }, 5000);
    })
}
async function postCode(){
    var post = new Promise((createPost) => {
        setTimeout(() => {
            createPost("Post Creartd Successfully")
        }, 5000);
    })
    const [pos,like,comment,share] = await Promise.all([post,likeCode(),commentCode(),shareCode()])
    console.log(pos)
    console.log(like);
    console.log(comment);
    console.log(share);
}
postCode()