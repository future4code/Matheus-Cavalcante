~~~javascript
function calculaNota(ex, p1, p2) {
    let nota = (ex + 2 * p1 + 3 * p2) / 6
    let letra
    if (nota >= 9){
      letra = "A"
      } else if (nota >= 7.5 && nota < 9){
      letra =  "B" 
      } else if (nota >= 6 && nota < 7.5){
      letra =  "C" 
      } else if(nota < 6) {
      letra = "D" 
      }
      
    return letra
    
}