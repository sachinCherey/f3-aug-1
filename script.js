document.addEventListener("DOMContentLoaded", function() {
    const apikey = document.getElementById("api");
    const apibtn = document.getElementById("apibtn");
    const container=document.getElementById('g');
    const sp=document.getElementById('sp');
    sp.style.display='none';
    
    // Function to be called when the button is clicked
    function handleButtonClick() {
        const key = apikey.value; // Get the text from the input
        
        if (key) {
            sp.style.display='flex';
            fetch(key).then(x=>x.json()).then(x=>{
               
                setTimeout(()=>{
                    sp.style.display='none';
                    for(let i=0;i<=9;i++){
                        let ele=`<div class="card">
                        <img src="${x.Poster}" alt="pic">
                        <p>Title: ${x.Title}</p>
                        <p>Released: ${x.Released}</p>
                        <a href="#">More Details</a>
            
                    </div>`
        
                    container.insertAdjacentHTML('beforeend', ele);
        
        
                        }
                },5000);
               
            })
            .catch(e=>{
                alert('Enter correct api key');
            });
            
            // Call your desired function with the input value
            // For example: myFunction(inputValue);
        } else {
            alert("Input is empty.");
        }
    }
    
    // Attach the click event listener to the button
    apibtn.addEventListener("click", handleButtonClick);
});
