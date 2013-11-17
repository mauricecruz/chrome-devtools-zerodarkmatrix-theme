// getDevTheme.js
// Inject any Chrome devtools theme hosted on Github or Gist.
//
// To change the theme, copy the raw url of any Github/Gist 
// hosted Custom.css stylesheet and paste it in the themeUrl var.
// -------------------------------------------------------
// Uses base64 decoder from http://www.webtoolkit.info/
// -------------------------------------------------------
// Run this snippet inside the inspector's inspector.
// http://stackoverflow.com/questions/12291138/how-do-you-inspect-the-web-inspector-in-chrome
	
(function(){
var themeUrl = 'https://github.com/mauricecruz/chrome-devtools-zerodarkmatrix-theme/blob/master/Custom.css';

function getDevTheme(url){
	var identifier = getDomainIdentifier(),
				css;
	
	function contains(source, findString){
		return source.indexOf(findString) !== -1;
	}
				
	function getDomainIdentifier(){
		var node = document.createElement('a'),
			identifier;
		
		node.href = url;
		identifier = node.hostname;
		
		if (contains(identifier,'github.com')){
		
			if (contains(identifier,'gist')){
				return 'gist';
			} else {
				return 'github';
			}
			
		} else return 'unknown';
	}
	
	function getAccountName(){
		return url.split('/')[3];
	}
	
	function getRepoName(){
		return url.split('/')[4];
	}
	
	function getFileName(){
		return url.split('/').reverse()[0];
	}
	
	function getBranch(){
		return url.split('/')[5] === 'blob' ? url.split('/')[6] : url.split('/')[5];
	}
	
	function getFolderPath(){
		var urlArray = url.split('/'),
			start = urlArray.indexOf(getBranch()) + 1,
			end = urlArray.length - 1,
			folderString;
			
		if (start !== end){
			folderString =  '/' + urlArray.slice(start,end).join('/');
		} else {
			folderString = '';
		}
			
		return folderString;                   
	}
	
	function getGistID(){
		return url.split('/')[4];
	}
	
	function getApiUrl(){
		var domain = 'https://api.github.com',
			builder = [],
			selector = {
				'gist': function(){
					builder = [domain, 'gists', getGistID()];
					return builder.join('/');
				},
				'github': function(){
					builder = [domain, 'repos', getAccountName(), getRepoName(), 'contents' + getFolderPath(), getFileName()];
					return builder.join('/') + '?ref=' + getBranch();
				}
			
			};
		
		return selector[identifier]();
		
	}
	
	function findCSS(data){
		var Base64 = {_keyStr:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=",encode:function(a){var c,d,e,f,g,h,i,b="",j=0;for(a=Base64._utf8_encode(a);j<a.length;)c=a.charCodeAt(j++),d=a.charCodeAt(j++),e=a.charCodeAt(j++),f=c>>2,g=(3&c)<<4|d>>4,h=(15&d)<<2|e>>6,i=63&e,isNaN(d)?h=i=64:isNaN(e)&&(i=64),b=b+this._keyStr.charAt(f)+this._keyStr.charAt(g)+this._keyStr.charAt(h)+this._keyStr.charAt(i);return b},decode:function(a){var c,d,e,f,g,h,i,b="",j=0;for(a=a.replace(/[^A-Za-z0-9\+\/\=]/g,"");j<a.length;)f=this._keyStr.indexOf(a.charAt(j++)),g=this._keyStr.indexOf(a.charAt(j++)),h=this._keyStr.indexOf(a.charAt(j++)),i=this._keyStr.indexOf(a.charAt(j++)),c=f<<2|g>>4,d=(15&g)<<4|h>>2,e=(3&h)<<6|i,b+=String.fromCharCode(c),64!=h&&(b+=String.fromCharCode(d)),64!=i&&(b+=String.fromCharCode(e));return b=Base64._utf8_decode(b)},_utf8_encode:function(a){a=a.replace(/\r\n/g,"\n");for(var b="",c=0;c<a.length;c++){var d=a.charCodeAt(c);128>d?b+=String.fromCharCode(d):d>127&&2048>d?(b+=String.fromCharCode(192|d>>6),b+=String.fromCharCode(128|63&d)):(b+=String.fromCharCode(224|d>>12),b+=String.fromCharCode(128|63&d>>6),b+=String.fromCharCode(128|63&d))}return b},_utf8_decode:function(a){for(var b="",c=0,d=c1=c2=0;c<a.length;)d=a.charCodeAt(c),128>d?(b+=String.fromCharCode(d),c++):d>191&&224>d?(c2=a.charCodeAt(c+1),b+=String.fromCharCode((31&d)<<6|63&c2),c+=2):(c2=a.charCodeAt(c+1),c3=a.charCodeAt(c+2),b+=String.fromCharCode((15&d)<<12|(63&c2)<<6|63&c3),c+=3);return b}},
			css,
			obj = JSON.parse(data),
			builder = {
				'gist': function(){
					return obj.files[getFileName()].content;
				},
				'github': function(){
					return Base64.decode(obj.content);
				}
			};
			
		css = builder[identifier]();
		
		return css;
		
	}
	
	function insertTheme(){
		var node = document.getElementById('custom-dev-theme');
		
		if (!!node){
			node.innerHTML = css;
		} else {
			var styleNode = document.createElement('style');
			styleNode.id = 'custom-dev-theme';
			styleNode.innerHTML = css;
			document.getElementsByTagName('head')[0].appendChild(styleNode);
			
		}
		
	}
	
	function requestTheme(){
		var xhr = new XMLHttpRequest();
			
		xhr.onreadystatechange = function(){
			if (xhr.readyState == 4 && xhr.status == 200){
				css = findCSS(xhr.responseText);
				insertTheme();
			}
		};
		xhr.open("GET", getApiUrl());
		xhr.send();
	}
		
	requestTheme();
	 
}

getDevTheme(themeUrl);
 
})();
