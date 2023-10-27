//your JS code here. If required.
var modal = document.getElementById("myModal");
        
       
        var btn = document.getElementById("openModal");
        
      
        var closeBtn = document.querySelector(".close-modal");
        
        
        function openModal() {
            modal.style.display = "block";
            modal.classList.remove("fade-out");
            modal.classList.add("fade-in");
        }
        
       
        function closeModal() {
            modal.classList.remove("fade-in");
            modal.classList.add("fade-out");
            
          
            setTimeout(function() {
                modal.style.display = "none";
            }, 300);
        }
        
        
        btn.addEventListener("click", openModal);
        closeBtn.addEventListener("click", closeModal);
        window.addEventListener("click", function(event) {
            if (event.target === modal) {
                closeModal();
            }
        });