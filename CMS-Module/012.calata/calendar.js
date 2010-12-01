/**
 * calInit, mingelz 2010-6-30 21:25
 * calInit(yyyy,mm,dd,type);
 * type=1:calBig; type=0:calSmall; type=2:calList
 */

var calTips,
	calTips_x, calTips_y,
	calToBody_x, calToBody_y;

function pointerPosition(W3CEvent){
	W3CEvent = W3CEvent || window.event;
	calTips_x = W3CEvent.pageX || (W3CEvent.clientX + (document.documentElement.scrollLeft || document.body.scrollLeft)),
	calTips_y = W3CEvent.pageY || (W3CEvent.clientY + (document.documentElement.scrollTop || document.body.scrollTop));
}
function posToBody(obj){
	var x=0, y=0;
	function posToParent(obj){
		x += obj.offsetLeft, y += obj.offsetTop;
		if(obj.offsetParent.nodeName != 'BODY' && obj.offsetParent.nodeName != 'HTML'){
			posToParent(obj.offsetParent);
		}
	}
	posToParent(obj);
	return {x:x, y:y};
}

function calInit(yyyy,mm,dd,type){
	var td, // storage the TD's id name
		tdHTML, // storage the TD's inner HTML code
		someday, // a temp var to storage JSON data
		firstDay = new Date(yyyy,mm-1,1).getDay(),
		startID = firstDay == 0 ? 7 : firstDay,
		daysInMonth = 32 - new Date(yyyy,mm-1,32).getDate();

	calTips = document.getElementById('calTips');
	calTips.style.display = 'none';
	calToBody_x = posToBody(calTips.parentNode).x,
	calToBody_y = posToBody(calTips.parentNode).y;

	switch(type){
		case 1: //big calendar
			for(var i=1,j=startID;i<=daysInMonth;i++,j++){
				td = document.getElementById('day'+j);
				td.className += ' thisMonth';
				td.innerHTML = '<h3>' + i + '</h3>';
				if(caldata[mm+'-'+i]!='' && caldata[mm+'-'+i]){
					td.onclick = function(i){
						return function(){
							showDay2(i);
						};
					}(i);
				}else{
					td.className += ' nodata';
				}
			}
			showDay2(dd);
			calTips.style.display = '';
			beautifyTable();
			break;
		case 0: // small calendar
			for(var i=1,j=startID;i<=daysInMonth;i++,j++){
				td = document.getElementById('day'+j);
				td.className += ' thisMonth';
				td.innerHTML = '<h3>' + i + '</h3>';
				if(caldata[mm+'-'+i]!='' && caldata[mm+'-'+i]){
					td.onclick = function(i){
						return function(){
							showDay(i);
						};
					}(i);
				}else{
					td.className += ' nodata';
				}
			}
			beautifyTable();
			break;
		case 2: // day calendar
			if(caldata[mm+'-'+dd]!='' && caldata[mm+'-'+dd]){
				someday = caldata[mm+'-'+dd];
				tdHTML = '<ul>';
				for(var k=0;k<someday.length;k++){
					tdHTML += '<li><a href="' + someday[k]['activity_url'] + '" onmouseover="pointerPosition(event);showItem(' + dd + ',' + k + ')" onmouseout="hide()" target="_blank"><img src="' + someday[k]['activity_icon'] + '" alt="" /></a></li>';
				}
				document.getElementById('calMain').innerHTML = tdHTML + '</ul>';
			}else{
				document.getElementById('calMain').innerHTML = '<div id="calError">\u4ECA\u65E5\u65E0\u6D3B\u52A8</div>';
			}
			document.getElementById('calendar').getElementsByTagName('h2')[0].childNodes[0].nodeValue = yyyy + '\u5E74' + mm + '\u6708';
			break;
		default: // failure
			document.getElementById('calMain').innerHTML = '<div id="calError">\u65E5\u5386\u7C7B\u578B\u8BBE\u7F6E\u9519\u8BEF\uFF0C\u8BF7\u68C0\u67E5\u0074\u0079\u0070\u0065\u005F\u006E\u006F\u503C</div>';
	}

	function beautifyTable(){ // add today, other month day and weekend's class name
		document.getElementById('calendar').getElementsByTagName('h2')[0].childNodes[0].nodeValue = yyyy + '\u5E74' + mm + '\u6708';
		document.getElementById('day'+(startID+dd-1)).className += ' today';
		for(var i=0;i<42;i++){
			someday = document.getElementById('day'+i);
			if(i<startID) someday.className += ' previousMonth';
			if(i>=startID+daysInMonth) someday.className += ' nextMonth';
			if(i%7 == 0) someday.className += ' sunday';
			else if(i%7 == 6) someday.className += ' saturday';
		}
	}
}

function showDay(day){
	var li='',
		currentday = caldata[month_no+'-'+day];
	for(var i=0;i<currentday.length;i++){
		li += '<li><h4>';
		if(currentday[i]['activity_url'])
			li += '<a href="' + currentday[i]['activity_url'] + '" target="_blank">' + currentday[i]['activity_name'] + '</a>';
		else
			li += currentday[i]['activity_name'];
		if(currentday[i]['activity_type_name'])
			li += '<sup>' + currentday[i]['activity_type_name'] + '</sup>';
		li += '</h4></li>';
	}
	calTips.innerHTML = '<h3>' + month_no + '\u6708' + day + '\u65E5' + '</h3><ul>' + li + '</ul><a id="calTipsCloseBtn" href="javascript:;" onclick="this.parentNode.style.display=\'none\'">&times;</a>';
	calTips.style.display = '';
}
function showDay2(day){
	var li='',
		li_h4,li_p,
		currentday = caldata[month_no+'-'+day];
	for(var i=0;i<currentday.length;i++){
		li += '<li><h4>';
		if(currentday[i]['activity_url'])
			li += '<a href="' + currentday[i]['activity_url'] + '" target="_blank">' + currentday[i]['activity_name'] + '</a>';
		else
			li += currentday[i]['activity_name'];
		if(currentday[i]['activity_type_name'])
			li += '<sup>' + currentday[i]['activity_type_name'] + '</sup>';
		li += '</h4><div><a href="' + currentday[i]['activity_url'] + '" title="' + currentday[i]['activity_name'] + '" target="_blank"><img src="' + currentday[i]['activity_icon'] + '" alt="' + currentday[i]['activity_name'] + '" /></a></div><p>' + currentday[i]['activity_content'] + '</p></li>';
	}
	calTips.innerHTML = '<h3>' + month_no + '\u6708' + day + '\u65E5' + '</h3><ul>' + li + '</ul>';

	lis = calTips.getElementsByTagName('li');
	for(var i=0;i<lis.length;i++){
		lis[i].onmouseover = function(){
			if(this.className != 'current'){
				for(var j=0;j<lis.length;j++){
					lis[j].className = '';
				}
				this.className = 'current';
			}
		}
	}
	lis[0].className = 'current';
}
function showItem(day,sn){
	var li,
		currentday = caldata[month_no+'-'+day];
	li = '<li><h4>' + currentday[sn]['activity_name'];
	if(currentday[sn]['activity_type_name'])
		li += '<sup>' + currentday[sn]['activity_type_name'] + '</sup>';
	li += '</h4><p>' + currentday[sn]['activity_content'] + '</p></li>';
	calTips.innerHTML = '<ul>' + li + '</ul>';
	calTips.style.left = calTips_x - calToBody_x + 10 + 'px';
	calTips.style.top = calTips_y - calToBody_y + 10 + 'px';
	calTips.style.display = '';
}
function hide(){
	calTips.style.display = 'none';
}
