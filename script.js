const app=Vue.createApp(
    {
        data()
        {
            return{
                productName: "Cruise ship",
                productSubtitle: "Subtitle of product",
                productDescription: "Cruise ship description"
                

            }
        }
    }
)
app.mount('#product')