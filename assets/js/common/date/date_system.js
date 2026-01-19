/*

 Date Related Functions

 */

	/*
		Convert normal date str into words
	 */
	function strInDate(str)
	{
		if(str == null) return "";

        var day = moment(str,"DD-MMM-YYYY").format('D');
        var month = moment(str,"DD-MMM-YYYY").format('MMMM').toLowerCase();
        var year = moment(str,"DD-MMM-YYYY").format('YYYY');

        var res =[];

        if(day)
        {
            var day_text = numberInWords(day,numberSystemLangArr[sysLang]);
            for(var j = 0; j < day_text.length; j++)
            {
                (day_text[j])? res.push(day_text[j]):'';
            }
        }

        (month)? res.push(month):'';

        if(year)
        {
            var year_text = numberInWords(year,numberSystemLangArr[sysLang]);

            console.log("$$$ ",year_text);
            for(var j = 0; j < year_text.length; j++)
            {
                (year_text[j])? res.push(year_text[j]):'';
            }
        }

        return res;
	}

    function strInDateMonth(str)
    {
        if(str == null) return "";

        var day = moment(str,"DD-MMM-YYYY").format('D');
        var month = moment(str,"DD-MMM-YYYY").format('MMMM').toLowerCase();

        var res =[];

        if(day)
        {
            var day_text = numberInWords(day);
            for(var j = 0; j < day_text.length; j++)
            {
                (day_text[j])? res.push(day_text[j]):'';
            }
        }

        (month)? res.push(month):'';

        return res;
    }





