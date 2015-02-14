var file;

function init(){
	$('input[type=file]').on('change', prepareUpload);
	$('form').on('submit', uploadFiles);
}

function prepareUpload(event){
  file = event.target.files[0];
}

function uploadFiles(event){
  	event.stopPropagation();
    event.preventDefault(); 
    
	var reader = new FileReader();  
	reader.onload = function(e) { 
	    var dataUrl = e.target.result;
	    var frame = $('#pdf_display');
	    alert(dataUrl);
	    frame.attr('src',dataUrl);
		window.URL.revokeObjectURL(dataUrl);
	};  
	reader.readAsDataURL(file);
}

