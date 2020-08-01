const owie = {
    kick: () => {
        this.yelp = "Ouch!";
        setImmediate(() => console.log(this.yelp))
    }
}

owie.kick()