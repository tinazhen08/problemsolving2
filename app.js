const switch2Bundles = [
    { sku: "NS2-001", name: "Base Bundle", includes: ["Nintendo Switch 2"], controllers: 1, games: [], stock: 5, price: 299 },
    { sku: "NS2-002", name: "Zelda Edition", includes: ["Nintendo Switch 2", "Zelda: Echoes of Time"], controllers: 1, games: ["Zelda: Echoes of Time"], stock: 3, price: 349 },
    { sku: "NS2-003", name: "Multiplayer Pack", includes: ["Nintendo Switch 2", "Mario Kart X"], controllers: 2, games: ["Mario Kart X"], stock: 2, price: 399 },
    { sku: "NS2-004", name: "Ultimate Gamer Bundle", includes: ["Nintendo Switch 2", "Zelda: Echoes of Time", "Mario Kart X"], controllers: 2, games: ["Zelda: Echoes of Time", "Mario Kart X"], stock: 1, price: 449 }
];

const customerQueue = [
    { name: "Christina", wantsControllers: 2, wantsGame: "Mario Kart X", maxBudget: 400 },
    { name: "Jason", wantsControllers: 1, wantsGame: "Zelda: Echoes of Time", maxBudget: 300 },
    { name: "Ava", wantsControllers: 2, wantsGame: null, maxBudget: 450 },
    { name: "Ryan", wantsControllers: 1, wantsGame: "Zelda: Echoes of Time", maxBudget: 350 }
];

const currentTime = "00:05"; // After midnight, purchases allowed
const [hours] = currentTime.split(/:| /);
let hour = parseInt (hours);

function sell(time, bundles, customers){
    if (time>12){
        console.log("Not after midnight. Can not buy any bundles! Please wait until later!")
    }else{
        output = []

        while (bundles.length > 0){ //while there are still bundles, run while loop
            for(i=0; i < customers.length; i++){ //while i is less than the amount of customers 
                let exists = false
                bundles.forEach((bundle)=> { //iterate through bundles 
                    if (customers[i].wantsControllers === bundle.controllers && (bundle.games.includes(customers[i].wantsGame) || customers[i].wantsGames===null) && customers[i].maxBudget >= bundle.price){ //if customer wants are met
                        if (output.find((customer) => customers[i].name === customer.name)){
                            exists = true
                        }else{
                            output.push({ //add customer and their purchase
                                customer: `${customers[i].name}`,
                                bundle: `${bundle.name}`,
                                pricePaid:`${bundle.price}`
                            })
                        }
                        bundle.stock-- //remove 1 stock of that bundle
                        if(bundle.stock<=0){
                            bundle.remove()
                        } 
                    }else{
                        output.push({ //no bundles matched what customer wanted
                            customer: `${customers[i].name}`,
                            status: `Left empty-handed (No suitable bundle)`
                        })
                    }
                })
            }
            return console.log(output)
        }
        return console.log(output)
    }
}

sell(hour, switch2Bundles, customerQueue)