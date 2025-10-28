console.log("🎯 script.js chargé !");

document.addEventListener('DOMContentLoaded', function() {
    console.log("✅ DOM complètement chargé");
    
    const previewImages = document.querySelectorAll('.preview');
    const mainImageDiv = document.getElementById('image');
    
    console.log(`📸 ${previewImages.length} images trouvées`);
    console.log(`🎯 Div principale:`, mainImageDiv);
    
    if (!mainImageDiv || previewImages.length === 0) {
        console.error("❌ Éléments non trouvés !");
        return;
    }
    
    previewImages.forEach((image, index) => {
        console.log(`✅ Configuration image ${index + 1}: ${image.alt}`);
        
        image.addEventListener('mouseover', function() {
            console.log(`🖱️ Souris sur: ${this.alt}`);
            
            // RÈGLE 1 & 2 : Mise à jour texte et image
            mainImageDiv.textContent = this.alt;
            mainImageDiv.style.backgroundImage = `url('${this.src}')`;
            
            console.log("✅ Image mise à jour !");
        });
        
        image.addEventListener('mouseout', function() {
            console.log(`🚪 Souris quitte: ${this.alt}`);
            
            // RÈGLE 3 & 4 : Réinitialisation (codage en dur)
            mainImageDiv.textContent = "Hover over an image below to display here.";
            mainImageDiv.style.backgroundImage = "url('')";
            
            console.log("✅ Image réinitialisée !");
        });
    });
    
    console.log("🎉 Configuration terminée ! Survole les images !");
});