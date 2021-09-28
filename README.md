# L.ControlPosition
[*LeafletJS*](https://leafletjs.com/) Plugin for customizing Control position.

## Defined Corners
```javascript
        topcenter, topleft, topright,
        bottomcenter, bottomleft, bottomright,
        middlecenter, middleleft, middleright,

// you can define your own pair of corners by adding classes .customx and .customy in your stylesheets
        customxcustomy, 
        customxleft, customxright, customxcenter
        topcustomy, bottomcustomy, middlecustomy
```

![L.ControlPosition](https://github.com/schoepferisch/L.ControlPosition/raw/main/L.ControlPosition.PNG "Control position customization")

## Motivation
>Tired writing the same code in different projects. I found an example of L.Map.include on stackoverflow and extended it by some useful methods. 

## How to use
Import *Leaflet* first and *L.ControlPosition* after
```html
<link rel="stylesheet" href="https://unpkg.com/leaflet@1.7.1/dist/leaflet.css"
   integrity="sha512-xodZBNTC5n17Xt2atTPuE1HxjVMSvLVW9ocqUKLsCC5CXdbqCmblAshOMAS6/keqq/sMZMZ19scR4PsZChSR7A=="
   crossorigin=""/>

<link rel="stylesheet" href="src/L.ControlPosition.css">

<!-- Make sure you put this AFTER Leaflet's CSS -->
<script src="https://unpkg.com/leaflet@1.7.1/dist/leaflet.js"
   integrity="sha512-XQoYMqMTK8LvdxXYG3nZ448hOEQiglfqkJs1NOQV44cWnUrBc8PkAOcXy20w0vlaXaVUearIOBhiXZ5V3ynxwA=="
   crossorigin=""></script>

<script src="src/L.ControlPosition.js"></script>
<!-- other libraries -->

<!-- dont forget to put here the body and map div -->
<script>
var map = L.map("map", { maxZoom: 15 }).setView([11, 11], 9);
console.log(map.getCorner('middlecenter'));
</script>
```

### Tested with *Leaflet* 1.7.1, other versions unknown

## Methods

```javascript
// check if the corner was added to the map
hasCorner(pos: String): Boolean
//  returns `false` if the corner wasnt added to the map
```

```javascript
// get the String with a DIV according to the current corner
getCorner(pos: String): String or undefined
// retruns undefined if the corner wasnt added to the map
```

```javascript
// iterate through all corners, which were added to the map
eachCorner(fn: Function, context?: Object): this

// for example if you want to get a list of existing corners
map.eachCorner(function (position, cornerDiv) {
    console.log(position, cornerDiv);
});
```

```javascript
// check if to the existing corner a control was added to the map
hasControlAtCorner(pos: String): Boolean or undefined
// retruns undefined if the corner wasnt added to the map
```

# License
L.ControlPosition is free software, and may be redistributed under the MIT-LICENSE.

# To contributors
Contributors are welcome. If you want to contribute, please add a new issue.