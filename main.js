//https://storage.googleapis.com/tm-model/qXr5b16ij/model.json
function startClassification()
{
    navigator.mediaDevices.getUserMedia({audio:true});
    classifier = ml5.soundClassifier('https://storage.googleapis.com/tm-model/qXr5b16ij/model.json',modelReady);
}

function modelReady()
{
    classifier.classify(gotResults);
}

function gotResults(error,results){
    if(error)
    {
        console.error(error);
    }
    else
    {
        console.log(results);
        
        document.getElementById("result_label").innerHTML="I can hear - "+results[0].label;
        document.getElementById("result_confidence").innerHTML="Accuracy - "+(results[0].confidence*100).toFixed(2)+" %";
        document.getElementById("result_label").style.color="rgb("+random_number_r+","+random_number_g+","+random_number_b+")";
        document.getElementById("result_confidence").style.color="rgb("+random_number_r+","+random_number_g+","+random_number_b+")";

        img1 = document.getElementById("doggo.avif");
        img2 = document.getElementById("kitten.png");


        if(results[0].label=="clap")
        {
            img1.src = "doggo.avif";
        }

       else
        {
            img1.src = "kitten.png";
        }
    }
}