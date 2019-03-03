


function addTabs(){
    var tabsMap = getTabNamesAndUrl();
    var tabsKeys = Object.keys(tabsMap);
    var tabsCount = tabsKeys.length;
    var tabsHalfCount = tabsCount/2;
    var lTabsHtml = "";
    var rTabsHtml = "";
    var margin = (40/tabsHalfCount)+"%";
    for(var i=0; i<tabsHalfCount; i++){ //populate ltabsCount
        lTabsHtml += getTabHtml(i,tabsKeys[i],tabsMap[tabsKeys[i]],margin);
    }
    for(var i=tabsHalfCount; i<tabsCount; i++){ //populate rtabsCount
        rTabsHtml += getTabHtml(i,tabsKeys[i],tabsMap[tabsKeys[i]],margin);
    }
    $('#ltabs_container').html(lTabsHtml);
    $('#rtabs_container').html(rTabsHtml);
    drawConnectorsForTabs(tabsCount);
}

function drawConnectorsForTabs(totalBtns){
    var canvas = document.getElementById('canvas');
    var ctx = canvas.getContext('2d');
    ctx.lineWidth = 3;
    for(var i=0; i<totalBtns; i++){
        var $btn = $(('#btn'+i));
        drawConnectorToBtn($btn,i,totalBtns/2,ctx)
    }
}

function drawConnectorToBtn($btn,index,totalBtnsInCol,ctx){
    //$btn = $('#btn1')
    var yTotalGap = (($('#manImg').height()) / 5);
    var endYRelative = (yTotalGap/(totalBtnsInCol-1) * (index%totalBtnsInCol));
    var start = $btn.offset();
    var end = $('#manImg').offset();
    var startlx = (start.left + $btn.width());
    var midlx = end.left;
    var startrx = (start.left);
    var midrx = end.left+$('#manImg').width();
    var endx = end.left+($('#manImg').width()/2);
    var starty = start.top + ($btn.height()/2)+1;
    var midy = start.top + ($btn.height()/2);
    var endy = ((end.top+$('#manImg').height()/3)+endYRelative);
    if(startlx<midlx) drawConnector(startlx,starty,midlx,midy,endx,endy,ctx);
    else drawConnector(startrx,starty,midrx,midy,endx,endy,ctx);
}


function drawConnector(startx,starty,midx,midy,endx,endy,ctx){
    ctx.beginPath();
    ctx.moveTo(startx, starty);
    ctx.lineTo(midx, midy);
    ctx.lineTo(endx, endy);
    ctx.stroke();
}


function getTabNamesAndUrl(){
    //all start from url index.html
    return {"Projects":"../projects/index.html",
    "Skills":"../skills/index.html",
    "Open Source":"../openSource/index.html", 
    "Research Papers":"../research/index.html", 
    "Internships":"../internships/index.html", 
    "Recommendations":"../recommendations/index.html", 
    "School Achievements":"../school/index.html", 
    "College Achievements":"../college/index.html"};
}

function getProjectsTabNamesAndUrl(){
    //all start from url ../projects/index.html
    return {"WebDev":"../webDev.html",
    "Computer Vision":"../compVision.html",
    "Automation":"../automation.html", 
    "Android":"../android.html"};
}

function getOpenSourceTabNamesAndUrl(){
    //all start from url ../openSource/index.html
    return {"Appium":"../appium.html",
    "OpenCV":"../openCV.html",
    "Mozilla":"../mozilla.html", 
    "OpenMP":"../openMP.html",
    "VLC":"../VLC.html"};
}

function getTabHtml(i,title,redirUrl,margin){
    return `
    <a id="btn`+i+`" type="button" class="btn btn-default" href="`+redirUrl+`" style="margin-top="`+margin+`";margin-bottom="`+margin+`";>` + title + `</a>
    <br>
    `;
}