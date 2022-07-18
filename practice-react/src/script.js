const domContainer = document.querySelector('#root');
const root = ReactDOM.createRoot(domContainer);

const list = [
   {price: 2300,
   quantity: 4,
   name: 'Example_1'
   },
   {price: 2500,
     quantity: 6,
     name: 'Example_2'
   },
   {price: 1500,
     quantity: 3,
     name: 'Example_3'
   },
   {price: 2000,
     quantity: 10,
     name: 'Example_4'
   },
   {price: 2700,
     quantity: 7,
     name: 'Example_5'
   },
   {price: 3000,
     quantity: 5,
     name: 'Example_6'
     }
]

function AppContent(){
   return <div>
   <h1>Hello, world!</h1>
   <h2>This is my first React app.</h2>
</div>
}

const getRandomInt = (max, min=0) => {
   min = Math.ceil(min);
   max = Math.floor(max);
   return Math.floor(Math.random() * (max - min)) + min;
}

class RenderTable extends React.Component{
   constructor(props){
      super(props);

      if (this.props) this.state = {};

      if(this.props.data){
         this.state.stateData = JSON.parse(JSON.stringify(this.props.data)),
         this.state.selectedItems = [],
         this.state.nonSelectedItems = this.state.stateData.map((item, index) => index);
         this.state.border = undefined;

         const changeTR = setInterval(() => {

            let randomIndex = getRandomInt(this.state.nonSelectedItems.length);
            randomElementByIndex = this.state.nonSelectedItems[randomIndex];
            
            this.state.nonSelectedItems.splice(randomIndex, 1);
            this.state.selectedItems.push(randomElementByIndex);

            console.log(this.state.nonSelectedItems);
            console.log(this.state.selectedItems);

            if(this.state.nonSelectedItems.length === this.state.stateData.length / 2) {
               this.state.border = `10px solid aquamarine`
            }

            if(!this.state.nonSelectedItems.length) {
               clearInterval(changeTR);
               this.state.border = `20px solid green`
            }

            this.setState({});
   
         },2000)
      }

      console.log(`stateData:`, this.state.stateData); // [{…}, {…}, {…}, {…}, {…}, {…}]
      console.log(`non-selected items:`, this.state.nonSelectedItems); // [0, 1, 2, 3, 4, 5]
   }


   render(){
      if(this.state.stateData) {
         return <div>
         <table style={{border: this.state.border}}>
            <thead>
            <tr>
               <td>Name</td>
               <td>Quantity</td>
               <td>Price</td>
            </tr>
            </thead>
            <tbody>
            {this.state.stateData.map((item, index) => <tr 
               key={`tr`+index}
               className={this.state.selectedItems.indexOf(index) !==-1 ? `active` : undefined}
               >
                  {Object.keys(item).reverse().map(key => <td key={`td`+key}>{item[key]}</td>)}
               </tr>
            )}
            </tbody>
         </table>
      </div> 
      }
   }
} 

const App = <div>
   <AppContent/>
   <p>Here's the table rendered with React component:</p>
   <RenderTable data={list}/>
</div>

root.render(App);