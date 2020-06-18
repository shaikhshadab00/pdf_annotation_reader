(function($) {
    Drupal.behaviors.pdf_annotation_reader = {
        attach: function(context, settings) {
/*	    //var documentName = window.location.href.split("/").pop(-1);
	    // var documentId = '/system/files/pdf_aanotation_reader/' + documentName;
	    var fileId = window.location.href.split("/").pop(-1);
            var documentId = document.getElementById("document-id").textContent;
	    var RENDER_OPTIONS = {
		documentId: documentId,
		pdfDocument: null,
		scale: parseFloat(localStorage.getItem(documentId + '/scale'), 10) || 1.33,
		rotate: parseInt(localStorage.getItem(documentId + '/rotate'), 10) || 0
            };
	    setAnnotations();
	    function setAnnotations(annotations) {
		alert(annotations);
		localStorage.removeItem(RENDER_OPTIONS.documentId + '/annotations');
		if (typeof annotations === "undefined") {
		    //var annotations = localStorage.getItem(documentId + '/annotations');
		    var url = 'pdf-annotation-reader/set-annotations-ajax';
		    var parameter = JSON.stringify({"documentId": documentId, "fileId": fileId});
		    // Ajax call for saving hierarchy of node.
		    $.post(Drupal.settings.basePath + url, parameter, function(response) {
			if(response) {
			    alert(response);
			    alert('set by response');
			    localStorage.setItem(RENDER_OPTIONS.documentId + '/annotations', response);
			}
		    }).fail(function() {
			console.log( "Annotation not set" );
		    });
		}
		else {
		    alert('set by annotations ');
		    localStorage.setItem(RENDER_OPTIONS.documentId + '/annotations', annotations);
		    Drupal.behaviors.index.render();
		}
	    }

	    //console.log(localStorage.getItem(documentId + '/annotations'));
	    // Save annotation toolbar button
            (function () {
		function handleSaveClick(e) {
		    var annotations = localStorage.getItem(documentId + '/annotations');
		    if (typeof annotations === 'object' && annotations === null) {
			// alert('i am object and null value');
		    }
		    if (confirm('Are you sure you want to save annotations?')) {
			var url = Drupal.settings.basePath + 'pdf-annotation-reader/save-annotations-ajax';
                        //var parameter = JSON.stringify(annotations);
			var parameter = JSON.stringify({"documentId": documentId, "annotations": annotations, "fileId": fileId});

			// Ajax call for saving hierarchy of node.
			$.post(url, parameter, function() {
			    console.log( "success" );
			}).fail(function() {
			    console.log( "Annotation not save" );
			});
		    }
		}
	   	document.querySelector('a.save').addEventListener('click', handleSaveClick);
            })();

	    // Text stuff
	    (function () {
		// var user = void 0;
		// var textColor = void 0;

		function initUsers() {
		    var size = document.querySelector('.toolbar .users');
		    var url = 'pdf-annotation-reader/get-users-ajax';
		    var parameter = JSON.stringify({"fileId": fileId});
		    // Ajax call for saving hierarchy of node.
		    $.post(Drupal.settings.basePath + url, parameter, function(response) {
			if(response) {
			    getannoations(8);
			    for (let [value, text] of Object.entries(response)) {
				size.appendChild(new Option(text, value, '', 8));
			    }
			}
		    }).fail(function() {
			console.log( "not getting users" );
		    });
		}

		function getannoations(userId) {
		    var setAnnotations = document.querySelector('.toolbar .annotations');
		    var url = 'pdf-annotation-reader/get-annotations-ajax';
		    var parameter = JSON.stringify({"fileId": fileId, "userId": userId});
		    // Ajax call for saving hierarchy of node.
		    $.post(Drupal.settings.basePath + url, parameter, function(response) {
			if(response) {
			    //var hasChild = setAnnotations.hasChildNodes();
			    while (setAnnotations.hasChildNodes()) {
				setAnnotations.removeChild(setAnnotations.firstChild);
			    }
			    for (let [value, text] of Object.entries(response)) {
				setAnnotations.appendChild(new Option(timeConverter(text), value));
			    }
			}
		    }).fail(function() {
			console.log( "not getting annotations" );
		    });
		}
		function handleAnnotationsChange(e) {
		    setAnnotations(e.target.value);
		}
		document.querySelector('.toolbar .annotations').addEventListener('change', handleAnnotationsChange);

		function timeConverter(UNIX_timestamp){
		    var a = new Date(UNIX_timestamp * 1000);
		    var months = ['Jan','Feb','Mar','Apr','May','Jun','Jul','Aug','Sep','Oct','Nov','Dec'];
		    var year = a.getFullYear();
		    var month = months[a.getMonth()];
		    var date = a.getDate();
		    var hour = a.getHours();
		    var min = a.getMinutes();
		    var sec = a.getSeconds();
		    var time = date + ' ' + month + ' ' + year + ' ' + hour + ':' + min + ':' + sec ;
		    return time;
		}

		function handleUsersChange(e) {
		    getannoations(e.target.value);
		}
		document.querySelector('.toolbar .users').addEventListener('change', handleUsersChange);
		initUsers();
	    })();
	    // Text stuff
*/
        }
    };
})(jQuery);
