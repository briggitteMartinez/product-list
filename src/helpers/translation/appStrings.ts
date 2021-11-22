// String structure//

enum NewProductScreen{
    mainText = "newProductScreen-main-text"

}

enum ProductListScreen{
    text1 = "productListScreen-text1",
    text2 = "productListScreen-text2",
    text3 = "productListScreen-text3",
    text4 = "productListScreen-text4",

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