// String structure//

enum NewProductScreen{
    mainText = "newProductScreen-main-text"

}

enum ProductListScreen{
    mainText = "productListScreen-main-text"

}

enum EditProductListScreen{
    mainText = "editProductListScreen-main-text"

}

export const tokens = {
    screens:{
        productListScreen : ProductListScreen,
        newProductScreen : NewProductScreen,
    }
}