class Display {
  constructor(height, width, element) {
    let _height = height;
    let _width = width;
    let _element = element;
    let _pixels = [];
    let _grid = [];

    let _initHtml = () => {
      let container = document.createElement("div");
      container.className = "container";
      let elementWidth = _element.offsetWidth;
      let pixelSize = (elementWidth / _width);
      pixelSize = Math.floor(pixelSize); //zaokrąglenie do 2 miejsc

      for (let x = 0; x < _width; x++) {
        const column = document.createElement("div");
        column.className = "column";

        for (let y = 0; y < _height; y++) {
          let cell = document.createElement("div");
          cell.className = "row";

          let pixel = _getPixel(x, y);
          cell.style.backgroundColor = pixel.color;
          cell.style.width = pixelSize + "px";
          cell.style.height = pixelSize + "px";

          column.appendChild(cell);
          _grid.push({
            x: pixel.x,
            y: pixel.y,
            color: pixel.color,
            html: null
          })
        }

        container.appendChild(column);
      }
      _element.innerHTML = container.outerHTML;


      for (const cell of _grid) {
        cell.html = document.querySelector("#snake > div > div:nth-child(" + (cell.x + 1) + ") > div:nth-child(" + (cell.y + 1) + ")");
        // _test.style.backgroundColor = "blue"
      }
    }

    let _initPixels = () => {
      for (let x = 0; x < _width; x++) {
        for (let y = 0; y < _height; y++) {
          let pixel = new Pixel(x, y, "black");
          _pixels.push(pixel);
        }
      }
    };

    let _getPixel = (x, y) => {
      return _pixels.find(function (p) {
        return p.x == x && p.y == y;
      });
    };

    this.clear = () => {
      _pixels = [];
      _initPixels();
    }

    this.changeColor = (x, y, color) => {
      let pixel = _getPixel(x, y);

      if (!pixel) {
        return;
      }

      pixel.color = color;
    }

    let _rendered = false;
    this.render = () => {
      // _initHtml();
      // return;
      for (let x = 0; x < _width; x++) {
        for (let y = 0; y < _height; y++) {
          let pixel = _getPixel(x, y);
          let gridCell = _grid.filter(cell => cell.x == x && cell.y == y)[0];

          if (pixel.color != gridCell.color) {
            gridCell.html.style.backgroundColor = gridCell.color = pixel.color;
          }
        }
      }

      _rendered = true;
    }

    _initPixels();
    _initHtml();
  }
}