//воруем как жулики из html L-ки
var inputl = {
    white: '',
    black100: '',
    black50: '',
    cyan100: '',
    cyan50: '',
    magenta100: '',
    magenta50: '',
    yellow100: '',
    yellow50: '',
    red: '',
    green: '',
    blue: '',
    overprint: ''
}
for (var key in inputl) {
    inputl[key] = document.querySelector('.parameter-L__item-'+key);
}
var l = {
    white: '',
    black100: '',
    black50: '',
    cyan100: '',
    cyan50: '',
    magenta100: '',
    magenta50: '',
    yellow100: '',
    yellow50: '',
    red: '',
    green: '',
    blue: '',
    overprint: ''
}

//а теперь a-шки
var inputa = {
    white: '',
    black100: '',
    black50: '',
    cyan100: '',
    cyan50: '',
    magenta100: '',
    magenta50: '',
    yellow100: '',
    yellow50: '',
    red: '',
    green: '',
    blue: '',
    overprint: ''
}
for (var key in inputa) {
    inputa[key] = document.querySelector('.parameter-a__item-'+key);
}
var a = {
    white: '',
    black100: '',
    black50: '',
    cyan100: '',
    cyan50: '',
    magenta100: '',
    magenta50: '',
    yellow100: '',
    yellow50: '',
    red: '',
    green: '',
    blue: '',
    overprint: ''
}

//и в конце b-шки
var inputb = {
    white: '',
    black100: '',
    black50: '',
    cyan100: '',
    cyan50: '',
    magenta100: '',
    magenta50: '',
    yellow100: '',
    yellow50: '',
    red: '',
    green: '',
    blue: '',
    overprint: ''
}
for (var key in inputb) {
    inputb[key] = document.querySelector('.parameter-b__item-'+key);
}
var b = {
    white: '',
    black100: '',
    black50: '',
    cyan100: '',
    cyan50: '',
    magenta100: '',
    magenta50: '',
    yellow100: '',
    yellow50: '',
    red: '',
    green: '',
    blue: '',
    overprint: ''
}

//const
var kappa = 24389/27;
var eta = 216/24389;
var kappa_eta = kappa*eta;
var d50x = 0.96422;
var d50y = 1;
var d50z = 0.82521;

//итоговые значения Dot Gain
var resultCyan = document.querySelector('.color-result__item-cyan');
var resultMagenta = document.querySelector('.color-result__item-magenta');
var resultYellow = document.querySelector('.color-result__item-yellow');
var resultBlacK = document.querySelector('.color-result__item-black');

//кнопОЧКА
var button = document.querySelector('.container-for-button__button');

//ага а теперь забираем значения из всех L
var inputInL = function(key) {
    inputl[key].oninput = function() {
        l[key] = parseInt(inputl[key].value,10);
    }
}
for (var key in inputl) {
    inputInL(key);
}

//а теперь забираем значения из всех a
var inputInA = function(key) {
    inputa[key].oninput = function() {
        a[key] = parseInt(inputa[key].value,10);
    }
}
for (var key in inputa) {
    inputInA(key);
}

//а теперь забираем значения из всех b
var inputInB = function(key) {
    inputb[key].oninput = function() {
        b[key] = parseInt(inputb[key].value,10);
    }
}
for (var key in inputb) {
    inputInB(key);
}

//вычисления:(
//yr сначала
var yr = {
    white: '',
    black100: '',
    black50: '',
    cyan100: '',
    cyan50: '',
    magenta100: '',
    magenta50: '',
    yellow100: '',
    yellow50: '',
};
var yrCalculate = function() {
    for(var key in yr) {
        if (l[key] > kappa_eta) {
            yr[key] = ((l[key]+16)*(l[key]+16)*(l[key]+16))/1560896;
        } else {
            yr[key] = (l[key]+16)/24389;
        }
    }
    return yr;
}

//fy теперь
var fy = {
    white: '',
    black100: '',
    black50: '',
    cyan100: '',
    cyan50: '',
    magenta100: '',
    magenta50: '',
    yellow100: '',
    yellow50: '',
};
var fyCalculate = function() {
    for(var key in fy) {
        if (yr[key] > eta) {
            fy[key] = (l[key]+16)/116;
        } else {
            fy[key] = (kappa*yr[key]+16)/116;
        }
    }
    return fy;
}

//fx потом
var fx = {
    white: '',
    black100: '',
    black50: '',
    cyan100: '',
    cyan50: '',
    magenta100: '',
    magenta50: '',
    yellow100: '',
    yellow50: '',
};
var fxCalculate = function() {
    for(var key in fx) {
        fx[key] = (a[key]*0.002)+fy[key];
    }
    return fx;
}

//а дальше что? xrTmp какой-то...........
var xrTmp = {
    white: '',
    black100: '',
    black50: '',
    cyan100: '',
    cyan50: '',
    magenta100: '',
    magenta50: '',
    yellow100: '',
    yellow50: '',
};
var xrTmpCalculate = function() {
    for(var key in xrTmp) {
        xrTmp[key] = fx[key]*fx[key]*fx[key];
    }
    return xrTmp;
}

//икс эр (xr)
var xr = {
    white: '',
    black100: '',
    black50: '',
    cyan100: '',
    cyan50: '',
    magenta100: '',
    magenta50: '',
    yellow100: '',
    yellow50: '',
}
var xrCalculate = function() {
    for(var key in xr) {
        if (xrTmp[key] <= eta) {
            xr[key] = (116*fx[key]-16)/kappa;
        } else {
            xr[key] = xrTmp[key];
        }
    }
    return xr;
}

//fz
var fz = {
    white: '',
    black100: '',
    black50: '',
    cyan100: '',
    cyan50: '',
    magenta100: '',
    magenta50: '',
    yellow100: '',
    yellow50: '',
}
var fzCalculate = function() {
    for(var key in fz) {
        fz[key] = fy[key]-(b[key]*0.005);
    }
    return fz;
}

//zrTmp да кто эти ваши Tmp
var zrTmp = {
    white: '',
    black100: '',
    black50: '',
    cyan100: '',
    cyan50: '',
    magenta100: '',
    magenta50: '',
    yellow100: '',
    yellow50: '',
}
var zrTmpCalculate = function() {
    for(var key in zrTmp) {
        zrTmp[key] = fz[key]*fz[key]*fz[key];
    }
    return zrTmp;
}

//zr (зе рэ)
var zr = {
    white: '',
    black100: '',
    black50: '',
    cyan100: '',
    cyan50: '',
    magenta100: '',
    magenta50: '',
    yellow100: '',
    yellow50: '',
}
var zrCalculate = function() {
    for(var key in zr) {
        if (zrTmp[key] <= eta) {
            zr[key] = (116*fz[key]-16)/kappa;
        } else {
            zr[key] = zrTmp[key];
        }
    }
    return zr;
}

//леееееее почти финалОЧКА
var x = {
    white: '',
    black100: '',
    black50: '',
    cyan100: '',
    cyan50: '',
    magenta100: '',
    magenta50: '',
    yellow100: '',
    yellow50: '',
}
var xCalculate = function() {
    for(var key in x) {
        x[key] = xr[key]/d50x;
    }
    return x;
}

//еще чучуть сейчас уже игрик прописываем.....
var y = {
    white: '',
    black100: '',
    black50: '',
    cyan100: '',
    cyan50: '',
    magenta100: '',
    magenta50: '',
    yellow100: '',
    yellow50: '',
}
var yCalculate = function() {
    for(var key in y) {
        y[key] = yr[key]/d50y;
    }
    return y;
}

//ну всё эта ластовая - z
var z = {
    white: '',
    black100: '',
    black50: '',
    cyan100: '',
    cyan50: '',
    magenta100: '',
    magenta50: '',
    yellow100: '',
    yellow50: '',
}
var zCalculate = function() {
    for(var key in z) {
        z[key] = zr[key]/d50z;
    }
    return z;
}

//вычисления , объединяемся
var calculates = function() {
    yrCalculate();
    fyCalculate();
    fxCalculate();
    xrTmpCalculate();
    xrCalculate();
    fzCalculate();
    zrTmpCalculate();
    zrCalculate();
    xCalculate();
    yCalculate();
    zCalculate();
    dotGainCyan = 100*(((1-(x.cyan50/x.white))/(1-(x.cyan100/x.white)))-0.5);
    dotGainCyan = dotGainCyan.toFixed(1);
    resultCyan.textContent = dotGainCyan;
    dotGainMagenta = 100*(((1-(y.magenta50/y.white))/(1-(y.magenta100/y.white)))-0.5);
    dotGainMagenta = dotGainMagenta.toFixed(1);
    resultMagenta.textContent = dotGainMagenta;
    dotGainYellow = 100*(((1-(z.yellow50/z.white))/(1-(z.yellow100/z.white)))-0.5);
    dotGainYellow = dotGainYellow.toFixed(1);
    resultYellow.textContent = dotGainYellow;
    dotGainBlacK = 100*(((1-(y.black50/y.white))/(1-(y.black100/y.white)))-0.5);
    dotGainBlacK = dotGainBlacK.toFixed(1);
    resultBlacK.textContent = dotGainBlacK;
}

//клик по кнопке
button.onclick = function() {
    calculates();
}