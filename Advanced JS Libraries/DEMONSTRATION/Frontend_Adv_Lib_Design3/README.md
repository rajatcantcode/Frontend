**HOW TO DOWNLOAD IMAGES?**


inspect -> network -> Img -> pick any image ->copy an image -> copy all as an HAR

Console -> var har = paste -> will show undefined -> write har() -> copy the cost below to extract all images


```js
var imageUrls = [];
har.log.entries.forEach(function (entry) {
  if (entry.response.content.mimeType.indexOf("image/") !== 0) return;
  imageUrls.push(entry.request.url);
});
console.log(imageUrls.join('\n'));
```