function appendToResult(value)
{
    document.getElementById('display').value += value;
}
function clearresult()
{
    document.getElementById('display').value = '';
}
function deleteresult()
{
    document.getElementById('display').value = display.value.toString().slice(0,-1);
}

function calculateResult()
{
    var display= document.getElementById('display').value;
    try{
        var answer= eval(display);
        document.getElementById('display').value = answer;
    }
    catch(error)
    {
        document.getElementById('display').value='error';

    }
}