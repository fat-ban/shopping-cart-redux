export default function formatCurrency(num){
    //add $ to price toFixed() number after comma 
    return "$" + Number(num.toFixed(1)).toLocaleString() + " ";
}