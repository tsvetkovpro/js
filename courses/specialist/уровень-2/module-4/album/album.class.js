
function Album(doc, elementID)
{
	this.doc = doc;
	this.photoDIV = doc.getElementById(elementID);
	if (!this.photoDIV)
	{
		this.photoDIV = doc.createElement("DIV");
		this.photoDIV.id = elementID;
		doc.body.appendChild(this.photoDIV);
		var img = doc.createElement("IMG");
		this.photoDIV.appendChild(img);
	}
	this.photos = [];
	this.currentPhotoIndex = -1;
	this.add = add;
	this.getNextIndex = getNextIndex;
	this.getPreviousIndex = getPreviousIndex;
	this.showPhoto = showPhoto;
	this.showNext = showNext;
	this.showPrevious = showPrevious;	


	function add(objPhoto)
	{
		this.photos[this.photos.length] = objPhoto;
	}

	function getNextIndex()
	{
		var index = this.currentPhotoIndex;
		index++;
		if (index >= this.photos.length) index = 0;
		return index;
	}

	function getPreviousIndex()
	{
		var index = this.currentPhotoIndex;
		index--;
		if (index <= 0) index = this.photos.length - 1;
		return index;
	}

	function showPhoto(objPhoto)
	{
		this.photoDIV.firstChild.src = objPhoto.url;
	}

	function showNext()
	{
		 var index = this.getNextIndex();
		 this.currentPhotoIndex = index;
		 this.showPhoto(this.photos[index]);
		 index = this.getNextIndex();
		 if (!this.photos[index].isLoaded) this.photos[index].load();
	}

	function showPrevious()
	{
		 var index = this.getPreviousIndex();
		 this.currentPhotoIndex = index;
		 this.showPhoto(this.photos[index]);
		 index = this.getPreviousIndex();
		 if (!this.photos[index].isLoaded) this.photos[index].load();
	}
}															  