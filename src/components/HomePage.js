  import React, {Component} from 'react';
  import AdminView from './AdminView'

  class HomePage extends Component {

    constructor() {
      super();
      this.state = {
        itemCurrentlyOnSale: 'A Hammer',
        editSaleItem: true,
        productList: [
          {
            productName: 'Hammer',
            description: 'Itsa hammer',
            price: 12.3,
          },
          {
            productName: 'Nail',
            description: 'Itsa nail',
            price: 0.12,
          }
        ]};
    }

    toggleEditSaleItem = () => {
        const editSaleItem = !this.state.editSaleItem;
        this.setState({editSaleItem});
    }

    handleItemCurrentlyOnSaleChange = (event) => {
        const itemCurrentlyOnSale = event.target.value;
        this.setState({itemCurrentlyOnSale});
    }

    addNewProductToProductList = (newProduct) => {
        const productList = [...this.state.productList];
        productList.push(newProduct);
        this.setState({productList});
    };

    removeProductFromProductList = (inedex) => {
        const productList = [...this.state.productList]
        //const indexFound;
//        const productToDelte = productList.find((product,index) => {
//            if (product.id === productIdToDelete)
//                            {
//                            indexFound=index;
//                            return product;
//                            }
//        })
//
//        const indexToDelete = productList.indexOf(productToDelete)
        productList.splice(inedex, 1)

        this.setState({productList})
    };






    render() {
      return (
          <div>
            <h1>My Hardware Store</h1>
            <div>
                <span> Currently On Sale: {this.state.itemCurrentlyOnSale} ! </span>
                <span>
                    <button onClick = {this.toggleEditSaleItem}>
                        {this.state.editSaleItem? "Hide" : "Edit Sale Item  "}
                    </button>
                </span>
                {
                    this.state.editSaleItem ?
                      <div>
                        <input
                            onChange={this.handleItemCurrentlyOnSaleChange}
                            value={this.state.itemCurrentlyOnSale}
                            type="text"
                        />
                      </div>
                      : null
                  }
                  <AdminView
                      productList={this.state.productList}
                      addNewProductToProductList={this.addNewProductToProductList}
                      removeProductFromProductList={this.removeProductFromProductList}/>
            </div>
          </div>
      );
    }
  }

  export default HomePage;