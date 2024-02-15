const app=Vue.createApp(
    {
        data()
        {
            return{
                productName: "Cruise ship",
                productSubtitle: "Subtitle of product",
                productDescription: "Cruise ship description",
                ship:"https://www.nationalgeographic.com/content/dam/expeditions/transports/islander-ii/new-day-2-islander-ii-jan23-1000x666.jpg",
                description: {'background-color':'yellow', 'color':'blue'}

            }
        }
    }
)
app.mount('#product')