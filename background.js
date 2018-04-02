$(function() {
    
        function setInputs(){
            var inputs = document.querySelectorAll('[type=text]');
            if( inputs.length == 0 ){
                currentInput = false;
                return false;
            }
            
            for(i=0;i<inputs.length;i++){
                inputs[i].onclick=function(){
                    currentInput = this;
                }
            }
        }
    
        function read(){
            if( typeof(Storage)!==undefined && localStorage.boxes ) return JSON.parse( localStorage.boxes );
            else return [];
        }
    
        function save( arr ){
            if( typeof(Storage)==undefined ) {
                alert('Nie można zapisać.');
                return false;
            }
            
            var x = read();
            x.push( arr[0] );
            
            localStorage.boxes = JSON.stringify( x );
            draw( arr );
        }
    
        function draw( arr ) { //aray of arrays with boxes title=>txt
            
            if( arr.length == 0) return false;
            
            var html, i;
            
            for(i=0; i<arr.length; i++){
                html = '<div class="kaf" id="kafelek' + index + '" title="' + arr[i][1]+ '"><a class="a">' + arr[i][0] + '</a></div>';
                
                $('#divzk').append(html);
                document.getElementById('kafelek'+index).onclick=wstaw;
                
                index++;
            }
            
            
         
        }
    
        function addNew(){
            var txt = prompt("Wpisz tekst");
            if( txt.length < 2 ) {
                alert('Co najmniej dwa znaki');
                return false;}
            else {
                    var title = txt.slice(0,2);
                    save( [[title, txt]] );
                }
            }
    
        function wstaw() {
            if(!currentInput) {
                alert('Nie wybrano żadnego pola');
                return false;
            }
            var id = document.getElementById(this.getAttribute('id'));

            currentInput.value = this.getAttribute('title');
        }
        
    
        document.getElementById('K_Dodaj').onclick = addNew;
    
        setInputs();
    
        var index=0;
        var currentInput; 
        draw( read() );
   
});


