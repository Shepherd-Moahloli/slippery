//https://picsum.photos/200
//https://picsum.photos/v2/list?page=5&limit=12

const page = 1;

const url = "https://picsum.photos/v2/list?limit=5&page=" + page;
console.log(url);

const response = await fetch(url);

if (response.status == 200) {
  const photos = await response.json();

  const davids = document.getElementsByTagName("div");

  davids[0].innerHTML = photos[0].author;
  davids[0].style.backgroundImage = "url('" + photos[0].download_url + "')";
  davids[1].innerHTML = photos[1].author;
  davids[1].style.backgroundImage = "url('" + photos[1].download_url + "')";
  davids[2].innerHTML = photos[2].author;
  davids[2].style.backgroundImage = "url('" + photos[2].download_url + "')";
  davids[3].innerHTML = photos[3].author;
  davids[3].style.backgroundImage = "url('" + photos[3].download_url + "')";
  davids[4].innerHTML = photos[4].author;
  davids[4].style.backgroundImage = "url('" + photos[4].download_url + "')";

  //console.log(davids[0].inn)
  photos.forEach((photo) => {
    console.log(photo);

    /*
  photos.forEach(function (photo, index) {
    davids[index].innerHTML = photos[index].author;
    davids[index].style.backgroundImage = "url('" + photo.download_url + "')";
  */
  });
} else {
  console.log("Failed to load url");
}

console.log(response);
