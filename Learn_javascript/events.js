// 1.Select element
const btnSumElt=document.getElementById('btnSum')
console.log(btnSumElt)

// 2.Add event listener
// btnSumElt.addEventListener('click', function handleClick(){
//     console.log('Please, donot click me')
// })
// btnSumElt.addEventListener('dblclick', handleMouseLeave )

// btnSumElt.addEventListener('mouseover', function handleMouseEnter(){
//     console.log('Please, donot hover me')
// })

//  function handleMouseLeave(){
//     console.log('Please, donot double click me')
// }

btnSumElt.addEventListener('click', handleClickMin)
function handleClickMin(){
    const number1Elt=document.getElementById('number1').value
    const number2Elt=document.getElementById('number2').value
    console.log(number1Elt);
    console.log(number2Elt);
    



    const sum=parseInt(number1Value) + parseInt(number2Value);

    // 
    document.getElementById('result').innerHTML=sum;

    console.log('Please, donot click me');
}

    function handleClick(){
        const number1Elt=document.getElementById('number1')
        const number2Elt=document.getElementById('number2')
        console.log(number1Elt)
        console.log(number2Elt);
        

        const number1Value=number1Elt.value;
        const number2Value=number2Elt.value;

        const sum=parseInt(number1Value) + parseInt(number2Value);

        // 
        document.getElementById('result').innerHTML=sum;

        console.log('Please, donot click me');
}

   
