function find(){
	var book  = document.getElementById('book').value;

	// if textbox is empty

	if (book === "") {
		alert('enter valid text')
	}else{
		fetch("https://www.googleapis.com/books/v1/volumes?q="+book)
		.then(function(res){
			return res.json();
		})
		.then(function(result){
			var html = '<table class="table-success table-hover" border="5" width="100%"><tr><th  class="text-center">Book Title</th><th  class="text-center">Book Description</th><th  class="text-center">Book Authors</th></tr>';
			// for(var i =0; i<result.items.length; i++){
			// 	title = result.items[i].volumeInfo.title;
			// 	description = result.items[i].volumeInfo.description;
			// 	authors = result.items[i].volumeInfo.authors;
			// 	html += 'Book Title : ' + title + '<br><br> Book Description : ' + description + '<br><br>Authors : ' + authors +'<br><hr>'; 

			// }
			for(var i =0; i<result.items.length; i++){
				title = result.items[i].volumeInfo.title;
				description = result.items[i].volumeInfo.description;
				authors = result.items[i].volumeInfo.authors;
				html += '<tr><td>Book Title : ' + title + '</td><td> ' + description + '</td><td> ' + authors +'</td></tr>'; 

			}
			html +='</table>';
			document.getElementById('books').innerHTML = html;
		}),
		function(error){
			console.log(error)
		}
	}
}