const TERMINO = 6;

if (TERMINO < 3) // o sea... si es 1 o 2... los primeros dos terminos valen 1
{
    console.log('El valor es 1');
}
else
{
    var num1 = 1;
    var num2 = 1;
    var num3 = 0;
    for (var i = 3; i <= TERMINO; i++)
    {
        num3 = num1 + num2;
        num1 = num2;
        num2 = num3;
    }
    console.log ('El valor es', num3);
}