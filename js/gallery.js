/*Name this external file gallery.js*/

// Debug: Check if script is loaded
console.log("✅ gallery.js loaded successfully!");

function upDate(previewPic){
    /* In this function you should 
    1) change the url for the background image of the div with the id = "image" 
    to the source file of the preview image
    
    2) Change the text  of the div with the id = "image" 
    to the alt text of the preview image 
    */
    
    console.log("🖱️ Mouseover event triggered!");
    console.log("📸 Preview image object:", previewPic);
    console.log("🔤 Alt text:", previewPic.alt);
    console.log("🔗 Image source:", previewPic.src);
    
    // 1) Change the background image URL
    document.getElementById('image').style.backgroundImage = "url('" + previewPic.src + "')";
    
    // 2) Change the text content
    document.getElementById('image').textContent = previewPic.alt;
    
    console.log("✅ Update completed successfully!");
}

function unDo(){
    /* In this function you should 
    1) Update the url for the background image of the div with the id = "image" 
    back to the orginal-image. You can use the css code to see what that original URL was
    
    2) Change the text  of the div with the id = "image" 
    back to the original text. You can use the html code to see what that original text was
    */
    
    console.log("🚪 Mouseout event triggered!");
    
    // 1) Reset background image to original (empty)
    document.getElementById('image').style.backgroundImage = "url('')";
    
    // 2) Reset text to original
    document.getElementById('image').textContent = "Hover over an image below to display here.";
    
    console.log("✅ Reset completed successfully!");
}