var doc = app.activeDocument;
   
var outlineLayer = doc.layers.add();
outlineLayer.name = "Image Layer";
var placedOutline = outlineLayer.placedItems.add();
placedOutline.file = File("~/Pictures/youtube.png");