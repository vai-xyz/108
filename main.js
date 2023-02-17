function StartClassification(){
    navigator.mediaDevices.getUserMedia({audio:true});
    classifier= ml5.soundClassifier('https://storage.googleapis.com/tm-model/_Tw783xR6/model.json',modelReady);

}
function modelReady(){
    classifier.classify(gotResults);
}
 var background_noise=0;
 var cat=0;
var dog=0;
var cow=0;
function gotResults(error,results){
    if (error){
        console.error(error);
    }
    else{
        console.log(results);
        random_number_r=Math.floor(Math.random()*255)+1;
        random_number_g=Math.floor(Math.random()*255)+1;
        random_number_b=Math.floor(Math.random()*255)+1;
        document.getElementById("result_label").innerHTML = 'Detected voice is of  - '+ results[0].label;
    document.getElementById("result_count").innerHTML = 'Detected Dog - '+dog+ ' Detected Cat - '+cat+'Detected cow - '+cow;
    document.getElementById("result_label").style.color = "rgb("+random_number_r+","+random_number_g+","+random_number_r+")";
    document.getElementById("result_count").style.color = "rgb("+random_number_r+","+random_number_g+","+random_number_r+")";

        img = document.getElementById('animal_image');

        if (results[0].label == "Barking") {
          img.src = 'dog image.png';
          dog = dog+1;
        } else if (results[0].label == "moo") {
          img.src = 'cow.png';
          cow= cow + 1;
        } 
        else if (results[0].label == "Meowing") {
            img.src = 'cat image.png';
            cat= cat + 1;
          }else{
          img.src = 'imgbin_ear-free-content-png.png';
        }
        
    }
}
