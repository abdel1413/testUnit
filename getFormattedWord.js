export default function getFormattedWord(str){
   if(!str) return ""
   return str.chartAt(0).toUpperCase() + str.slice(1);
}