export class PolylineChart {
    private _points: string[];
    private _width: number;
    private _height: number;
    constructor(points: string[], width: 200, height: 50) {
        this._points = points;
        this._height = height;
        this._width = width;
    }

    public points() {
        let points = this._points.map(element => {
            let point = element.split(',')
            let x = Number(point[0])
            let y = Number(point[1])
            console.log(y)

            return [x, y].join(',')
        });

        return points;
    }

    public width() {
        return this._width;
    }

    public height() {
        return this.height;
    }
}