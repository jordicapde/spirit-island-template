window.onload = function startMain(){
    var html = document.querySelectorAll('board')[0].innerHTML;
    document.querySelectorAll('board')[0].innerHTML = replaceIcon(html);
    adjustComplexityValue();
    createPowerProperties();
    addUsesTokens();
}

function adjustComplexityValue() {
    var complexityValue = document.getElementsByTagName("complexity-value")[0].getAttribute("value");
    //add 45px for each value
    var basePixels = 120;
    var addedPixels = (complexityValue*45);
    var totalPixels = basePixels+addedPixels+"px";
    document.getElementsByTagName("complexity-value")[0].style.width = totalPixels;
}

function createPowerProperties(){

    var offenseTag = document.getElementsByClassName("offense")[0];
    var controlTag = document.getElementsByClassName("control")[0];
    var fearTag = document.getElementsByClassName("fear")[0];
    var defenseTag = document.getElementsByClassName("defense")[0];
    var utilityTag = document.getElementsByClassName("utility")[0];

    var offenseValue = offenseTag.getAttribute("value");
    var controlValue = controlTag.getAttribute("value");
    var fearValue = fearTag.getAttribute("value");
    var defenseValue = defenseTag.getAttribute("value");
    var utilityValue = utilityTag.getAttribute("value");

    offenseTag.style.height = (offenseValue * 14) + 'px';
    controlTag.style.height = (controlValue * 14) + 'px';
    fearTag.style.height = (fearValue * 14) + 'px';
    defenseTag.style.height = (defenseValue * 14) + 'px';
    utilityTag.style.height = (utilityValue * 14) + 'px';
}

function addUsesTokens() {
    var usesTokensTag = document.getElementsByTagName("uses-tokens")[0];
    if (usesTokensTag) {
        var border = document.createElement("uses-tokens-border");
        usesTokensTag.parentNode.insertBefore(border, usesTokensTag);

        var usesHTML = "<table><tr><td colspan='100%'>USES<td></tr><tr>";
        var tokenValues = usesTokensTag.getAttribute("values").split(",");

        for (i = 0; i < tokenValues.length; i++) {
            if (i == 2)
                usesHTML += "</tr><tr>";

            // 3 token elements
            if (tokenValues.length == 3 && i == 2)
                usesHTML += "<td colspan='2'>";
            else
                usesHTML += "<td>";

            usesHTML += `${replaceIcon('{' + tokenValues[i] + '}')}</td>`
        }
        usesHTML += "</tr></table>";

        document.getElementsByTagName("uses-tokens")[0].removeAttribute("values");

        document.getElementsByTagName("uses-tokens")[0].innerHTML = usesHTML;
    }
}
