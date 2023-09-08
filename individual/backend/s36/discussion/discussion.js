// using the aggregate method
db.fruits.aggregate([
    // $match - used to match or get documents that satisfies the condition
    // $match is similar to find(). You can use query operators to make your criteria more flexible
    /*
        $match -> Apple, Kiwi, Banana
    */
    { $match: { onSale: true }},
    // $group - allows us to group together documents and create an analysis out of the group elements
    // _id: $supplier_id
    /*
        Apple = 1.0
        Kiwi = 1.0
        Banana = 2.0

        _id: 1.0
            Apple, Kiwi

            total: sum of the fruit stock of 1.0
            total: Apple stocks + Kiwi Stocks
            total: 20           + 25
            total: 45

        _id: 2.0
            Banana

            total: sum of the fruit stock of 2.0
            total: Banana stocks
            total: 15
    */
    // $sum - used to add or total the values in a given field 
    { $group: { _id: "$supplier_id", total: { $sum: "$stock"}}}
  ]);

  db.fruit.aggregate([
    /*
        $match - Apple, Kiwi, Banana
    */
    { $match: {onSale: true }},
    /*
        Apple - 1.0
        Kiwi - 1.0
        Banana - 2.0

        _id: 1.0

            avgStocks: average stocks of fruits in 1.0
            avgStocks: (Apple Stocks + Kiwi Stocks) / 2
            avgStocks: (20           + 25         ) / 2
            avgStocks: 45 / 2
            avgStocks: 22.5
        
        _id: 2.0
            avgStocks: average stocks of fruits in 2.0
            avgStocks: (Banana Stocks) / 1
            avgStocks: 15 / 1
            avgStocks: 15
    */
    /*
        {
            _id: 1,
            avgStocks: 22.5
        }
        {
            _id: 2,
            avgStocks: 15
        }
    */
    // $avg- gets the average of the values of the given field per group
    { $group: {_id: '$supplier_id', avgStocks: { $avg: 'stock' }}},
    // $project - can be used when "aggregating" data to include/exclude fields from the returned results (Field Projection)
     /*
        {
            avgStocks: 22.5
        }
        {
            avgStocks: 15
        }
    */
    { $project: {_id: 0}}
  ]);

  db.fruits.aggregate([
    /*
        $match - Apple, Kiwi, Banana
    */
    { $match: { onSale: true}},
    /*
        Apple - 1.0
        Kiwi - 1.0
        Banana - 2.0

        _id: 1.0

           maxPrice: finds the highest price of fruit
           maxPrice: Apple Price vs Kiwi Price
           maxPrice: 40          vs 50
           maxPrice: 50
        
        _id: 2.0
           maxPrice: finds the highest price of fruit
           maxPrice: Banana Price
           maxPrice: 20
           maxPrice: 20
    */
    /*
        {
            _id: 1,
            maxPrice: 50
        }
        {
            _id: 2,
            maxPrice: 20
        }
    */
    { $group: { _id: '$supplier_id', maxPrice: { $max: '$price'}}},
    // $sort - to change the order of the aggregated result
    // Providing a value of -1 will sort the aggregated results in a reverse order
    { $sort: { maxPrice: -1}}
  ]);

  db.fruits.aggregate([
    // $unwind - deconstruct the array field from a collection with an array value to output result for each element
    { $unwind: "$origin"}
  ]);