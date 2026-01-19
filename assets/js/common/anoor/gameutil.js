/*
    Utility Functions
 */

    function getParameterByName(name, url)
    {
        if (!url) {
            url = window.location.href;
        }
        name = name.replace(/[\[\]]/g, "\\$&");
        var regex = new RegExp("[?&]" + name + "(=([^&#]*)|&|#|$)"),
            results = regex.exec(url);
        if (!results) return null;
        if (!results[2]) return '';
        return decodeURIComponent(results[2].replace(/\+/g, " "));
    }

    function getBaseURL() {
        var url = window.location.origin + window.location.pathname;
        var url_comp = url.split('index.html');
        return url_comp[0];
    }

    function GetFriendlyName(pname)
    {
        if((pname != "")&&(pname != null)){
            pname = pname.trim();
            if(window.flow_slug=="sbilm_smart_bachat" || window.flow_slug=="sbilsa_smart_bachat"){
                var sp = pname.toString().replace(/ +/g, '_').toLowerCase();
                var ap= sp.replace(/[^\w\s]/gi, '_').toLowerCase();
                return ap.substring(0,8);
            }else{
            var op = pname.toString().replace(/ +/g, '_').toLowerCase();
            return op.replace(/[^\w\s]/gi, '_').toLowerCase();
           }
        }
        else {
            return pname;
        }
    }

    function capitalizeFirstLetter(string)
    {
        return string.charAt(0).toUpperCase() + string.slice(1);
    }

    function findObjListKey(obj,keyName)
    {
        for(var i = 0; i < obj.length; i++)
        {
            if(obj[i].key == keyName)
            {
                return i;
            }
        }
    }

	var languageMap = new Map();
	languageMap.set('tamil','தமிழ்');
	languageMap.set('telugu','తెలుగు');
	languageMap.set('malayalam','മലയാളം');
	languageMap.set('kannada','ಕನ್ನಡ');
	languageMap.set('bengali','বাংলা');
	languageMap.set('marathi','\nमराठी');//मराठी//मराठी
	languageMap.set('gujarati','ગુજરાતી');//'ગુજરાતિ'
	languageMap.set('punjabi','ਪੰਜਾਬੀ');
	languageMap.set('oriya','ଓଡ଼ିଆ');
	languageMap.set('marwari','मारवाड़ी');//मारवाड़ी
	languageMap.set('assamese','অসমীয়া');
	languageMap.set('mizo','Mizo');
    languageMap.set('hindi','हिन्दी');
	languageMap.set('english','English');

	function getLocalName(lang)
	{
		lang = lang.toLowerCase();

		return languageMap.get(lang);
	}
