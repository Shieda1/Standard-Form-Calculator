// https://www.omnicalculator.com/math/standard-form
// doesnot work in negatives

const v1 =  document.getElementById('v1');
const btn = document.getElementById('btn');
const result1 = document.getElementById('result1');
const result2 = document.getElementById('result2');

btn.addEventListener('click', function() {
  
    result1.textContent = `Number written in scientific notation = ${computeNumberwritteninscientificnotation()}`;
})

// calculation

function computeNumberwritteninscientificnotation() {
  
  return `${Number(v1.value) / (Math.pow(10, String(v1.value).length - 1))} * 10^${computeOrderofmagnitude()}`;
}

function computeOrderofmagnitude() {
  return String(v1.value).length - 1;
}