var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var domContainer = document.querySelector('#root');
var root = ReactDOM.createRoot(domContainer);

var list = [{ price: 2300,
   quantity: 4,
   name: 'Example_1'
}, { price: 2500,
   quantity: 6,
   name: 'Example_2'
}, { price: 1500,
   quantity: 3,
   name: 'Example_3'
}, { price: 2000,
   quantity: 10,
   name: 'Example_4'
}, { price: 2700,
   quantity: 7,
   name: 'Example_5'
}, { price: 3000,
   quantity: 5,
   name: 'Example_6'
}];

function AppContent() {
   return React.createElement(
      'div',
      null,
      React.createElement(
         'h1',
         null,
         'Hello, world!'
      ),
      React.createElement(
         'h2',
         null,
         'This is my first React app.'
      )
   );
}

var getRandomInt = function getRandomInt(max) {
   var min = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 0;

   min = Math.ceil(min);
   max = Math.floor(max);
   return Math.floor(Math.random() * (max - min)) + min;
};

var RenderTable = function (_React$Component) {
   _inherits(RenderTable, _React$Component);

   function RenderTable(props) {
      _classCallCheck(this, RenderTable);

      var _this = _possibleConstructorReturn(this, (RenderTable.__proto__ || Object.getPrototypeOf(RenderTable)).call(this, props));

      if (_this.props) _this.state = {};

      if (_this.props.data) {
         _this.state.stateData = JSON.parse(JSON.stringify(_this.props.data)), _this.state.selectedItems = [], _this.state.nonSelectedItems = _this.state.stateData.map(function (item, index) {
            return index;
         });
         _this.state.border = undefined;

         var changeTR = setInterval(function () {

            var randomIndex = getRandomInt(_this.state.nonSelectedItems.length);
            randomElementByIndex = _this.state.nonSelectedItems[randomIndex];

            _this.state.nonSelectedItems.splice(randomIndex, 1);
            _this.state.selectedItems.push(randomElementByIndex);

            console.log(_this.state.nonSelectedItems);
            console.log(_this.state.selectedItems);

            if (_this.state.nonSelectedItems.length === _this.state.stateData.length / 2) {
               _this.state.border = '10px solid aquamarine';
            }

            if (!_this.state.nonSelectedItems.length) {
               clearInterval(changeTR);
               _this.state.border = '20px solid green';
            }

            _this.setState({});
         }, 2000);
      }

      console.log('stateData:', _this.state.stateData); // [{…}, {…}, {…}, {…}, {…}, {…}]
      console.log('non-selected items:', _this.state.nonSelectedItems); // [0, 1, 2, 3, 4, 5]
      return _this;
   }

   _createClass(RenderTable, [{
      key: 'render',
      value: function render() {
         var _this2 = this;

         if (this.state.stateData) {
            return React.createElement(
               'div',
               null,
               React.createElement(
                  'table',
                  { style: { border: this.state.border } },
                  React.createElement(
                     'thead',
                     null,
                     React.createElement(
                        'tr',
                        null,
                        React.createElement(
                           'td',
                           null,
                           'Name'
                        ),
                        React.createElement(
                           'td',
                           null,
                           'Quantity'
                        ),
                        React.createElement(
                           'td',
                           null,
                           'Price'
                        )
                     )
                  ),
                  React.createElement(
                     'tbody',
                     null,
                     this.state.stateData.map(function (item, index) {
                        return React.createElement(
                           'tr',
                           {
                              key: 'tr' + index,
                              className: _this2.state.selectedItems.indexOf(index) !== -1 ? 'active' : undefined
                           },
                           Object.keys(item).reverse().map(function (key) {
                              return React.createElement(
                                 'td',
                                 { key: 'td' + key },
                                 item[key]
                              );
                           })
                        );
                     })
                  )
               )
            );
         }
      }
   }]);

   return RenderTable;
}(React.Component);

var App = React.createElement(
   'div',
   null,
   React.createElement(AppContent, null),
   React.createElement(
      'p',
      null,
      'Here\'s the table rendered with React component:'
   ),
   React.createElement(RenderTable, { data: list })
);

root.render(App);