document.getElementById("btn").addEventListener("click", function(){
    const inputField = document.getElementById("inputField").value;
    const promo_CODE = document.getElementById("promo_CODE").innerHTML;
    const total_balance = document.getElementById("total_balance").innerText;
    const newTotal_balance = parseFloat(total_balance);
    const discount = document.getElementById("discount");
    const total_price = document.getElementById("total_price");

    if(inputField == promo_CODE){
        
        const dis = newTotal_balance * 30 / 100;

        const newTotal_price = newTotal_balance - dis;
        document.getElementById("total_balance").innerText = newTotal_price;
        document.getElementById("inputField").value = '';
        document.getElementById("discount").innerHTML = dis;
        document.getElementById("total_price").innerText = newTotal_price;

    }else{
        alert("please write a valid code")
    }
});






const text = document.getElementById("text");
document.getElementById("size").addEventListener("click", function(){
    text.style.fontSize = '30px';
    
});
document.getElementById("color").addEventListener("click", function(){
    text.style.color = 'red';
})