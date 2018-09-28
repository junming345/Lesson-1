function removedashes(cardNum){}

function isValidLength(cardNum)
{
    if(cardNum.length != 16)
    {
    return false;
    }
    return true;
}

let card = "9999-9999-9999-9990";
isValidLength(card)