L.ControlPosition = L.Map.include({
    _initControlPos: function() {
        var corners = this._controlCorners = {},
            l = 'leaflet-',
            container = this._controlContainer =
            L.DomUtil.create('div', l + 'control-container', this._container);

        function createCorner(vSide, hSide) {
            var className = l + vSide + ' ' + l + hSide;

            corners[vSide + hSide] = L.DomUtil.create('div', className, container);
        }

        createCorner('top', 'left');
        createCorner('top', 'right');
        createCorner('bottom', 'left');
        createCorner('bottom', 'right');

        createCorner('top', 'center');
        createCorner('middle', 'center');
        createCorner('middle', 'left');
        createCorner('middle', 'right');
        createCorner('bottom', 'center');

        createCorner('customx', 'customy');

        createCorner('customx', 'left');
        createCorner('customx', 'right');
        createCorner('customx', 'center');

        createCorner('top', 'customy');
        createCorner('bottom', 'customy');
        createCorner('middle', 'customy');
    },

    // @method hasCorner(pos: String): Boolean
    // Returns `true` if the given position is currently added to the map.
    hasCorner: function(pos) {
        var corner = this._controlCorners[pos];
        return (corner) ? true : false;
    },

    // @method getCorner(pos: String): String
    // Returns a string containing HTML of the corner with the given position.
    getCorner: function(pos) {
        var corner = this._controlCorners[pos];
        return (typeof corner !== 'undefined') ? corner : undefined;
    },

    // @method eachCorner(fn: Function, context?: Object): this
    // Iterates over the corners of the map, optionally specifying context of the iterator function.
    // ```js
    // map.eachCorner(function (position, cornerDiv) {
    // 	console.log(position, cornerDiv);
    // });
    // ```
    eachCorner: function(method, context) {
        var corners = this._controlCorners;
        for (var pos in corners) {
            method.call(context, pos, corners[pos]);
        }
        return this;
    },

    // @method hasControlAtCorner(pos: String): Boolean or undefined
    // Returns `true` if at the given position a control exists.
    hasControlAtCorner: function(pos) {
        var corner = this._controlCorners[pos];
        if (typeof corner !== 'undefined')
            return !!corner && ((corner.firstChild) ? true : false);
        return undefined;
    }
});