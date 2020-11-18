		alert("Welcome to my site. My name is Anki and I am SEO and website Development expert.");

		function changeContent() {
					document.getElementById("sample").innerHTML = "SEO Expert and Website Developer.";
			}
		function getValue() {
					alert(document.getElementById('demo').value);
			}
				
		function getValue() {
					alert(document.getElementById('demo').checked);
			}
		function readFile() {
					var reader = new FileReader();
					var file = document.getElementById('demo').files[0];
					
					reader.onload = function(e) {
						document.getElementById('result').src = e.target.result;
			}
					reader.readAsDataURL(file);
			}
		function getValue() {
					var radios = document.getElementsByName('gender');
					var number_of_radios = radios.length;
					
					for(var i = 0; i <number_of_radios; i++) {
						if(radios[i].checked) {
							alert(radios[i].value);
						}
					}
			}
			
