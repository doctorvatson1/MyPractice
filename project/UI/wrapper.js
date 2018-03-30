;var module =(function(){

    var posts = control.getPhotoPosts();
    var postList = document.querySelector(".divMain");

    function createPhotoPost(postConfig){
        var hit = false;
        for (var like of postConfig.likes){
            if (like===window.userName) {
                document.getElementById("iconLike").style.display = "block";
                document.getElementById("iconNoLike").style.display = "none";
                hit = true;
                break;
            }
        }
        if (!hit){
            document.getElementById("iconLike").style.display = "none";
            document.getElementById("iconNoLike").style.display = "block";
        }

        var post = document.getElementById("templatePost").cloneNode(true);
        post.className = "none";
        post.id = postConfig.id;


        post.querySelector(".divNamePost").innerText = postConfig.author;
        post.querySelector(".divDescriptionPost").innerText = postConfig.description;
        post.querySelector(".divDatePost").innerText = postConfig.date.toDateString();
        post.querySelector(".image").src = postConfig.photoLink;
        post.querySelector(".numberLike").innerText = postConfig.likes.length;
        var hashtags = "";
        for (var i=0;i<postConfig.hashtags.length;i++){
            hashtags += postConfig.hashtags[i] + " ";
        }
        post.querySelector(".divHashtags").innerText = hashtags;

        if (postConfig.author === window.userName){
            post.querySelector(".buttonEdit").style.display = "block";
            post.querySelector(".buttonDelete").style.display = "block";
        }

        postList.appendChild(post);
        return post;
    }

    function update(){
        if (window.userName!==undefined){
            document.getElementById("name").innerText = window.userName;
            document.getElementById("buttonLogout").style.display = "block";
            document.getElementById("buttonLogin").style.display = "none";
            document.getElementById("buttonAddPhotoPost").style.display = "block";
            document.getElementById("iconAddPhoto").style.display = "block";
        }
        else{
            document.getElementById("name").innerText = "";
            document.getElementById("buttonLogout").style.display = "none";
            document.getElementById("buttonLogin").style.display = "block";
            document.getElementById("buttonAddPhotoPost").style.display = "none";
            document.getElementById("iconAddPhoto").style.display = "none";
        }

        var authors = control.getAuthors();
        var datalist1 = document.getElementById("optionNames");
        while(datalist1.firstChild){
            datalist1.removeChild(datalist1.firstChild);
        }
        for (var author of authors){
            var option1 = document.createElement("option");
            option1.value = author;
            datalist1.appendChild(option1);
        }

        var hashtags = control.getHashtags();
        var datalist2 = document.getElementById("optionHashtags");
        while(datalist2.firstChild){
            datalist2.removeChild(datalist2.firstChild);
        }
        for (var hashtag of hashtags){
            var option2 = document.createElement("option");
            option2.value = hashtag;
            datalist2.appendChild(option2);
        }

        while (postList.firstChild) {
            postList.removeChild(postList.firstChild);
        }
        for (var p of posts) {
            createPhotoPost(p);
        }

    }

    function showPhotoPosts(skip, top, filter){
        posts = control.getPhotoPosts(skip,top,filter);
        update();
    }

    function addPhotoPost(post){
        control.addPhotoPost(post);
        posts = control.getPhotoPosts();
        update();
    }

    function deletePhotoPost(id){
        control.removePhotoPost(id);
        posts = control.getPhotoPosts();
        update();
    }

    function editPhotoPost(id, post){
        control.editPhotoPost(id,post);
        posts = control.getPhotoPosts();
        update();
    }

    function likePhotoPost(id){
        control.likePhotoPost(id,window.userName);
        posts = control.getPhotoPosts();
        update();
    }

    function addHashtag(id, hashtag){
        control.addHashtag(id, hashtag);
        posts = control.getPhotoPosts();
        update();
    }

    return{
        showPhotoPosts : showPhotoPosts,
        addPhotoPost: addPhotoPost,
        deletePhotoPost: deletePhotoPost,
        editPhotoPost: editPhotoPost,
        likePhotoPost: likePhotoPost,
        update: update
    }

}());

module.showPhotoPosts();


