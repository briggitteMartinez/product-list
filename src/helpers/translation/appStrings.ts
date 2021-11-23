// String structure//

enum NewProductScreen{
    titleText = "newProductScreen-title-text"

}

enum ProductListScreen{
    name = "productListScreen-text1",
    type = "productListScreen-text2",
    price = "productListScreen-text3",
    centerText = "productListScreen-text4",

}

enum EditProductListScreen{
    text1 = "editProductListScreen-main-text"

}

export const tokens = {
    screens:{
        productListScreen : ProductListScreen,
        newProductScreen : NewProductScreen,
        editProductListScreen : EditProductListScreen,
    }
}