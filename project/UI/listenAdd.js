;var listenerAdd =(function(){
    var newPost = {
        id: (control.posts.length + 1).toString(),
        description: "",
        date: new Date(),
        author: window.userName,
        photoLink: undefined,
        hashtags : [],
        likes: []
    };
    document.getElementById("buttonAddPhotoPost").addEventListener("click", addPhotoPost);
    document.getElementById("buttonLoadPhoto").addEventListener("click",loadPhoto);
    document.getElementById("addNewHashtag").addEventListener("click", addNewHashtag);
    document.getElementById("buttonSubmitPhotoPost").addEventListener("click", submitPhotoPost);

    function addPhotoPost(){
        document.getElementById("modalWindow").style.display = "block";
        document.getElementById("body").style.overflow = "hidden";
        document.getElementById("newPostAuthor").innerText = window.userName;
        document.getElementById("newHashtags").innerText = "";
        document.getElementById("newPhotoURL").value = "URL";
        document.getElementById("newImage").src = "../images/Drag&drop.jpg";
    }
    function loadPhoto(){
        var URL = document.getElementById("newPhotoURL").value;
        document.getElementById("newImage").src = URL;
        newPost.photoLink = URL;
    }
    function addNewHashtag(){
        var hashtag = document.getElementById("newHashtag").value;
        newPost.hashtags.push(hashtag);
        document.getElementById("newHashtags").innerText += " " + hashtag;
    }

    function submitPhotoPost(){
        if (!control.validatePhotoPost(newPost)){
            document.getElementById("modalWindow").style.display = "none";
            document.getElementById("body").style.overflow = "auto";
            window.location = "error.html";
        }
        else{
            newPost.description = document.getElementById("newDescription").value;
            module.addPhotoPost(newPost);
            document.getElementById("modalWindow").style.display = "none";
            document.getElementById("body").style.overflow = "auto";
        }
    }
}());