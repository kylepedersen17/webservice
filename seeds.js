var mongoose = require("mongoose");
var Campground = require("./models/campground");
var Comment   = require("./models/comment");

var data = [
    {
        name: "Cloud's Rest", 
        author: "Chris",
        image: "https://farm4.staticflickr.com/3795/10131087094_c1c0a1c859.jpg",
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec at dictum ante. Duis velit augue, condimentum et scelerisque ac, facilisis a felis. Duis commodo sollicitudin blandit. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Maecenas semper consectetur enim, at fermentum est iaculis ac. Morbi non dapibus velit. Duis consectetur ut risus ut efficitur. Aenean quis augue neque. Suspendisse vitae dignissim lorem, sit amet rhoncus lorem. Vivamus molestie ut ligula et gravida. Sed dignissim orci a tortor accumsan pharetra vitae id ipsum. Ut placerat elit vehicula, suscipit tellus et, euismod urna. Proin fringilla nunc ac commodo iaculis. Suspendisse pulvinar, libero sed posuere dignissim, leo sapien vestibulum ante, sed mattis nibh ligula a dolor. Ut tempus elementum ultrices. Donec porta nunc sit amet turpis semper, et commodo nisi consequat."
    },
    {
        name: "Desert Mesa", 
        author: "Adam",
        image: "https://cdn.pixabay.com/photo/2016/02/18/22/16/tent-1208201__340.jpg",
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec at dictum ante. Duis velit augue, condimentum et scelerisque ac, facilisis a felis. Duis commodo sollicitudin blandit. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Maecenas semper consectetur enim, at fermentum est iaculis ac. Morbi non dapibus velit. Duis consectetur ut risus ut efficitur. Aenean quis augue neque. Suspendisse vitae dignissim lorem, sit amet rhoncus lorem. Vivamus molestie ut ligula et gravida. Sed dignissim orci a tortor accumsan pharetra vitae id ipsum. Ut placerat elit vehicula, suscipit tellus et, euismod urna. Proin fringilla nunc ac commodo iaculis. Suspendisse pulvinar, libero sed posuere dignissim, leo sapien vestibulum ante, sed mattis nibh ligula a dolor. Ut tempus elementum ultrices. Donec porta nunc sit amet turpis semper, et commodo nisi consequat."
        
    },
    {
        name: "Canyon Floor", 
        author: "Matt",
        image: "https://farm1.staticflickr.com/189/493046463_841a18169e.jpg",
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec at dictum ante. Duis velit augue, condimentum et scelerisque ac, facilisis a felis. Duis commodo sollicitudin blandit. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Maecenas semper consectetur enim, at fermentum est iaculis ac. Morbi non dapibus velit. Duis consectetur ut risus ut efficitur. Aenean quis augue neque. Suspendisse vitae dignissim lorem, sit amet rhoncus lorem. Vivamus molestie ut ligula et gravida. Sed dignissim orci a tortor accumsan pharetra vitae id ipsum. Ut placerat elit vehicula, suscipit tellus et, euismod urna. Proin fringilla nunc ac commodo iaculis. Suspendisse pulvinar, libero sed posuere dignissim, leo sapien vestibulum ante, sed mattis nibh ligula a dolor. Ut tempus elementum ultrices. Donec porta nunc sit amet turpis semper, et commodo nisi consequat."
    }
]

function seedDB(){
   //Remove all campgrounds
   Campground.remove({}, function(err){
        if(err){
            console.log(err);
        }
        console.log("removed campgrounds!");
         //add a few campgrounds
    //     data.forEach(function(seed){
    //         Campground.create(seed, function(err, campground){
    //             if(err){
    //                 console.log(err)
    //             } else {
    //                 console.log("added a campground");
    //                 //create a comment
    //                 Comment.create(
    //                     {
    //                         text: "This place is great, but I wish there was internet",
    //                         author: "Homer"
    //                     }, function(err, comment){
    //                         if(err){
    //                             console.log(err);
    //                         } else {
    //                             campground.comments.push(comment);
    //                             campground.save();
    //                             console.log("Created new comment");
    //                         }
    //                     });
    //             }
    //         });
    //     });
    }); 
    //add a few comments
}

module.exports = seedDB;