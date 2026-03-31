const expenceTracker = {
    expences: [],
    id: 1,

    addExpence(title, amount, category) {
        if(!title || amount <= 0 || !category) {
            console.log("Incorrect input");
            return;
        }

        this.expences.push({
            id: this.id++,
            title,
            amount,
            category
        });
    },

    printAllExpences() {
        this.expences.forEach(e => {
            console.log(`${e.id} | ${e.title} | ${e.amount} | ${e.category}`)
        });
    },

    getTotalAmount() {
        let total = this.expences.reduce((sum, e) => sum += e.amount, 0);
        console.log(total);
    },

    getExpencesByCategory(category) {
        let filtered = this.expences.filter(e => e.category === category);
        let total = filtered.reduce((sum, e) => sum += e.amount, 0);

        console.log(`Category ${category}`);
        filtered.forEach(e => {
            console.log(`${e.title} | ${e.amount} | ${e.category}`)
        });

        console.log(`Spent: ${total}`);
    },

    findExpenceByTitle(title) {
        let expence = this.expences.find(e => e.title.includes(title));

        if(!expence) {
            console.log("Not found");
            return null;
        }else {
            console.log(expence)
            return expence
        }
    },

    deleteById(id) {
        this.expences = this.expences.filter(e => e.id !== id);
    },

    printCategoryStats() {
        let stats = {};

        this.expences.forEach(e => {
            stats[e.category] = (stats[e.category] || 0) + e.amount;
        });

        for (let category in stats) {
            console.log(`${category}: ${stats[category]}`)
        }
    }
}

expenceTracker.addExpence("Products", 1000, "SomeProducts");
expenceTracker.addExpence("Taxi", 500, "someTaxi");
expenceTracker.addExpence("Coffe", 200, "SomeProducts");

expenceTracker.printAllExpences();
expenceTracker.getTotalAmount();
expenceTracker.getExpencesByCategory("SomeProducts");
expenceTracker.printCategoryStats();