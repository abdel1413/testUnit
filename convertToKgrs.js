function convertToKgs(lbs) {
  const kgs = (lbs * 0.453592).toFixed(2);    
  console.log(kgs);   
  const kgsNumber = Number(kgs);     

  const poundWord = (lbs === 1 ? "pound" : "pounds");
  const kgWord = (kgsNumber === 1 ? "kilogram" : "kilograms");

  return `${lbs} ${poundWord} equals ${kgs} ${kgWord}.`;
}
