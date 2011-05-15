var defaultCalendarOptions = null;
jq(document).ready(function() {
    if (defaultCalendarOptions !== null) {
	if (defaultCalendarOptions.preview) {
	    defaultCalendarOptions['eventRender'] = function(event, element) {
		addPreviewText(event, element);
	    };
	}
	jq('#jquery-fullcalendar').fullCalendar(defaultCalendarOptions);
    }
});

var addPreviewText = function(event, element) {
    element.find('a').each(function() {
	var preview = '<a href="'+jq(this).attr('href')+'"><span class="preview">' + defaultCalendarOptions.preview + '</span></a>';
	jq(this).html(jq(this).html() + preview);
	jq(this).find('a').prepOverlay({
            subtype: 'ajax',
            filter: '#content > *'
	});
    });
};
