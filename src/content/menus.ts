export interface MenuItem {
  name: string;
  desc: string;
  price: string;
}

export interface MenuCategory {
  id: string;
  name: string;
  note?: string;
  items: MenuItem[];
}

export interface MenuType {
  id: string;
  name: string;
  description: string;
  categories: MenuCategory[];
}

// ═══════════════════════════════════════════════
// MAIN MENU
// ═══════════════════════════════════════════════

export const mainMenu: MenuType = {
  id: "main",
  name: "Main Menu",
  description: "Wood-fired cuisine, grilled to perfection",
  categories: [
    {
      id: "breakfast",
      name: "The Morning Fix",
      note: "Served until 11h30 — Not available at Malt Midrand",
      items: [
        { name: "Classic Breakfast", desc: "2 eggs, bacon, tomato, fries, toast and preserves", price: "R89" },
        { name: "Full House Breakfast", desc: "2 eggs, bacon, rump strips or boerewors, creamy chicken livers, fried onion rings, fries, toast and preserves", price: "R160" },
        { name: "Eggs Benedict", desc: "Perfectly poached eggs and ham on an English muffin with hollandaise sauce", price: "R86" },
        { name: "Loaded Scrambled Eggs", desc: "Scrambled eggs fried with onion, cherry tomatoes and bacon bits on toasted sourdough bread", price: "R86" },
        { name: "Seasonal Fruit", desc: "A deconstructed mix of seasonal fruit, Greek yoghurt, crunchy nut muesli and honey", price: "R89" },
        { name: "Smashed Avo", desc: "Avocado with cream cheese on toasted sourdough, topped with 2 poached eggs and red pepper flakes", price: "R69" },
        { name: "Omelette", desc: "3 egg omelette with cheese and your choice of fillings. Served with fries and toast", price: "R64" },
      ],
    },
    {
      id: "light-bites",
      name: "The Light Bites",
      items: [
        { name: "Garlic Snails", desc: "Prepared with a garlic butter sauce and smothered in cheese", price: "R99" },
        { name: "Nachos", desc: "Tortilla style sweet chili corn chips covered in Malt spicy salsa, smothered in cheese. Served with guacamole and salsa", price: "R139" },
        { name: "Chicken Livers", desc: "Prepared in a creamy peri-peri sauce. Served with a small focaccia", price: "R89" },
        { name: "Trinchado", desc: "Rump strips prepared in a creamy peri-peri sauce with olives. Served with a small focaccia", price: "R165" },
        { name: "Jalapeño Poppers", desc: "Deep fried jalapeño peppers filled with cream cheese, cheddar and mozzarella. Served with sweet chili sauce and fries", price: "R115" },
        { name: "Battered Chicken Tenders", desc: "Crumbed chicken tenders (spicy or plain). Served with your choice of sauce and fries", price: "R96" },
        { name: "Deep Fried Halloumi", desc: "Deep fried halloumi cheese with lemon butter or sweet chilli sauce", price: "R115" },
        { name: "Rib Basket", desc: "300g pork ribs in a basket with fries", price: "R175" },
        { name: "Loaded Fries", desc: "Fries loaded with cheese, spring onion and sour cream", price: "R75" },
        { name: "Chicken Wings Basket", desc: "8 battered & crumbed chicken wings tossed in either BBQ, Smokey Teriyaki or Porto sauce. Served with fries", price: "R135" },
        { name: "Ribs, Wings & Things", desc: "Pork ribs basted in sweet sticky BBQ, fried onion rings and deep-fried battered & basted wings. Served with fries", price: "R290" },
      ],
    },
    {
      id: "wood-fired",
      name: "Wood-Fired",
      note: "Authentic Italian thin based pizza with a tomato base and mozzarella",
      items: [
        { name: "Focaccia — Plain", desc: "Olive oil, garlic and herbs", price: "R46" },
        { name: "Focaccia — Tomato", desc: "Tomato base, garlic and chili", price: "R62" },
        { name: "Focaccia — Mozzarella", desc: "Mozzarella and herbs", price: "R85" },
        { name: "Classic Margherita", desc: "Mozzarella on a tomato base", price: "R99" },
        { name: "Sexy Hawaiian", desc: "Candied bacon and caramelized pineapple", price: "R129" },
        { name: "Pepperoni", desc: "Salami, peppers, chili and garlic", price: "R129" },
        { name: "Porky's", desc: "Bacon, avocado and feta cheese", price: "R139" },
        { name: "Carne", desc: "Salami, ham and bacon with feta or gorgonzola cheese", price: "R169" },
        { name: "Malt", desc: "200g rump strips, red and green peppers, caramelized onion, Grana Padano and a balsamic reduction", price: "R220" },
        { name: "Sweet & Spicy", desc: "Pulled pork, bacon, pineapple, jalapeños and cheddar cheese", price: "R149" },
        { name: "Vegetarian", desc: "Roasted brinjal, mushrooms, olives, roasted peppers, Peppadew, fried onions, garlic and feta", price: "R149" },
        { name: "Chilli Chicken Bacon Pesto", desc: "Sundried tomato pesto, grilled spicy chicken, bacon, garlic and chili", price: "R175" },
        { name: "Teriyaki Chicken", desc: "Teriyaki basted chicken, cheddar, avocado, fried onion with teriyaki sauce", price: "R165" },
        { name: "Mexicana", desc: "Spicy chicken, Malt spicy salsa, jalapeños, grilled corn, cheddar and guacamole", price: "R165" },
      ],
    },
    {
      id: "on-the-flame",
      name: "On the Flame",
      note: "All our steaks are wet aged for a minimum of 24 days. Served without sides",
      items: [
        { name: "Rump 200g", desc: "House or Mediterranean basting, optional sides", price: "R145" },
        { name: "Rump 300g", desc: "House or Mediterranean basting, optional sides", price: "R195" },
        { name: "Fillet 250g", desc: "House or Mediterranean basting, optional sides", price: "R265" },
        { name: "Sirloin 250g", desc: "House or Mediterranean basting, optional sides", price: "R175" },
        { name: "T-Bone 500g", desc: "House or Mediterranean basting, optional sides", price: "R280" },
        { name: "Rib Eye on the Bone 600g", desc: "Served on Malt Royale sauce", price: "R370" },
        { name: "Pork Spare Ribs 600g", desc: "House or Mediterranean basting, optional sides", price: "R295" },
        { name: "Sirloin on the Bone 500g", desc: "House or Mediterranean basting, optional sides", price: "R260" },
      ],
    },
    {
      id: "signature-plates",
      name: "Signature Plates",
      items: [
        { name: "Pepper Fillet Medallions", desc: "250g fillet medallions topped with our creamy pepper sauce. Served with potato wedges", price: "R325" },
        { name: "Malt Meaty Trio", desc: "3 skewers (200g each): deboned chicken thighs, marinated pork belly, Mediterranean rump. Served with potato wedges", price: "R265" },
        { name: "Eisbein", desc: "1kg Eisbein cooked and served crispy in authentic German style on a bed of sauerkraut with mashed potatoes", price: "R260" },
        { name: "Skinny Lamb Chops", desc: "Thinly cut loin chops marinated in lemon, rosemary and garlic. Served with potato wedges", price: "R235" },
        { name: "Firecracker Ribs", desc: "600g sweet pork ribs basted in our delicious lemon peri sauce. Served with fries", price: "R340" },
        { name: "Teriyaki Beef & Avo Stack", desc: "Layers of teriyaki basted sirloin steak, jasmine rice and avocado slices", price: "R240" },
        { name: "Pork Chops", desc: "400g pork chops on a bed of mash, served with cooked sweet sliced apples and honey mustard sauce", price: "R165" },
        { name: "Short Rib", desc: "Delicious slices of short rib marinated in sweet BBQ. Served with pap and Malt relish", price: "R220" },
        { name: "Mediterranean Lamb Ribs", desc: "400g Mediterranean lamb ribs on our signature spicy yoghurt", price: "R210" },
        { name: "Roasted Pork Belly", desc: "Slow roasted pork belly served on a bed of mashed potato with our signature honey mustard sauce", price: "R205" },
      ],
    },
    {
      id: "burgers",
      name: "Handcrafted Burgers",
      note: "100% pure beef mince, 200g beef patties. Served with fries",
      items: [
        { name: "The Malt", desc: "Original burger with our Malt secret basting sauce", price: "R128" },
        { name: "Classic Cheese", desc: "Original burger topped with a slice of cheddar cheese", price: "R132" },
        { name: "Mediterranean Lamb Burger", desc: "A lamb patty with red onion and our signature spicy yoghurt sauce", price: "R145" },
        { name: "Chicken Burger", desc: "Grilled or crumbed chicken breast topped with fried red onions, mayonnaise and rosa tomatoes", price: "R115" },
        { name: "Bacon, Egg & Cheese", desc: "Original burger with bacon, a fried egg and a slice of cheddar cheese", price: "R158" },
        { name: "Jalapeño Melt", desc: "Jalapeños and cheese filled patty with a slice of cheddar cheese", price: "R148" },
        { name: "Sassy Saucy Burger", desc: "Original burger topped with a sauce of your choice: pepper, mushroom, cheese, blue cheese, peri-peri or creamy garlic", price: "R148" },
        { name: "Rump Prego", desc: "Tender pieces of rump on 2 toasted buns in a white wine, garlic and chili sauce", price: "R179" },
        { name: "Chicken Prego", desc: "Chicken fillets on 2 toasted buns in a white wine, garlic and chili sauce", price: "R135" },
        { name: "Pulled Pork Burger", desc: "Original burger topped with pulled pork, caramelized onions and cheddar cheese", price: "R149" },
      ],
    },
    {
      id: "poultry",
      name: "Poultry Classics",
      items: [
        { name: "Health Breasts", desc: "Grilled chicken breasts with a side salad of tomato, cucumber and avocado", price: "R105" },
        { name: "Chicken Espetada", desc: "Deboned chicken thighs, Peppadew and pineapple on a skewer basted in sweet chili sauce. Served with fries", price: "R142" },
        { name: "Chicken Skewers", desc: "Chicken skewers basted with BBQ, Porto or sweet chili sauce served on a pita with spicy yoghurt and a side salad", price: "R148" },
        { name: "Chicken Schnitzel", desc: "Crumbed chicken breasts with a mushroom or cheese sauce. Served with fries", price: "R145" },
        { name: "Chicken Curry", desc: "Deboned chicken thighs in a creamy curry sauce. Served with jasmine rice, a poppadom and salsa", price: "R135" },
        { name: "Portuguese Baby Chicken — Full", desc: "Spatchcock spring chicken basted in Porto sauce, peri-peri or lemon & herb. Served with fries (30–40 min prep)", price: "R175" },
        { name: "Portuguese Baby Chicken — Half", desc: "Spatchcock spring chicken basted in Porto sauce, peri-peri or lemon & herb. Served with fries (30–40 min prep)", price: "R110" },
      ],
    },
    {
      id: "from-the-sea",
      name: "From the Sea",
      items: [
        { name: "Mussels", desc: "10 black mussels in a creamy lemon butter sauce. Served with a small focaccia", price: "R99" },
        { name: "Prawn Espetada", desc: "6 queen prawns on a skewer with lemon butter, Porto or peri-peri sauce. Served with jasmine rice", price: "R285" },
        { name: "Hake", desc: "Lightly battered, grilled or fried. Served with lemon mayo and fries", price: "R155" },
        { name: "Grilled Kingklip", desc: "Pan fried 300g kingklip with a rich lemon butter sauce. Served with jasmine rice", price: "R275" },
        { name: "Calamari", desc: "Falkland calamari lightly battered, deep fried or grilled with Porto or lemon butter sauce. Served with jasmine rice and fries", price: "R210" },
        { name: "Prawn Curry", desc: "Coconut cream prawn curry. Served with jasmine rice, a poppadom and salsa", price: "R175" },
      ],
    },
    {
      id: "salads",
      name: "Crisp Creations",
      items: [
        { name: "Greek", desc: "Tomato, cucumber, mixed lettuce, feta cheese, green pepper, olives and red onions with a Greek vinaigrette dressing", price: "R110" },
        { name: "Teriyaki Chicken", desc: "Teriyaki chicken strips, mixed lettuce, tomatoes, fried onions, avocado, rocket and grilled corn", price: "R146" },
        { name: "Bacon and Avocado", desc: "Bacon strips, avocado, mixed lettuce, cucumber and caramelized red onion topped with a balsamic glaze", price: "R142" },
      ],
    },
    {
      id: "platters",
      name: "The Social Spread",
      items: [
        { name: "Four-Way Chicken Platter", desc: "Battered chicken tenders, chicken wings, BBQ chicken skewers and a Portuguese baby chicken. Served with sauce and fries", price: "R440" },
        { name: "Malt Platter", desc: "300g Malt house pork ribs, rump strips, chicken wings and calamari. Served with 2 sauces and fries", price: "R525" },
        { name: "Seafood Platter", desc: "6 queen prawns, battered grilled hake, deep fried calamari and 10 mussels. Served with jasmine rice, fries, lemon butter & Porto sauce", price: "R620" },
        { name: "Mixed Grills", desc: "Perfectly grilled thinly cut lamb chops, boerewors, rib rashers and brisket. Served with pap and relish", price: "R595" },
        { name: "Mega Wing Bucket", desc: "16 battered & crumbed chicken wings tossed in BBQ, Smokey Teriyaki or Porto sauce. Served with sauce and fries", price: "R265" },
      ],
    },
    {
      id: "desserts",
      name: "Temptations",
      items: [
        { name: "English Toffee Pudding", desc: "Moist traditional sticky toffee pudding, baked with dates. Served with ice cream or cream", price: "R79" },
        { name: "Chocolate Volcano", desc: "A rich chocolate soufflé made with fine chocolate. Served with ice cream or cream", price: "R84" },
        { name: "Malva Pudding", desc: "Served with warm caramel sauce and ice cream", price: "R84" },
        { name: "Belgian Chocolate Mousse", desc: "Rich, thick and dark homemade chocolate mousse topped with flake", price: "R82" },
        { name: "Ice Cream & Bar One Sauce", desc: "Vanilla ice cream served in a wafer basket with Bar One chocolate or salty caramel sauce", price: "R59" },
        { name: "Waffles", desc: "Light and fluffy Belgian waffle served with ice cream or fresh cream. Choose your toppings", price: "R42" },
      ],
    },
    {
      id: "shakes",
      name: "The Shake Bar",
      items: [
        { name: "Classic Medium", desc: "Vanilla, chocolate, strawberry, banana, lime or bubblegum", price: "R48" },
        { name: "Classic Mega", desc: "Vanilla, chocolate, strawberry, banana, lime or bubblegum", price: "R59" },
        { name: "Delicious & Delectable", desc: "Oreo, Bar One, Milky Bar, Peppermint Crisp, peanut butter or banoffee", price: "R69" },
      ],
    },
    {
      id: "chill-bar",
      name: "Chill Bar",
      items: [
        { name: "Fruit Juice", desc: "Cranberry, fruit cocktail, mango, orange", price: "R39" },
        { name: "Freshly Squeezed", desc: "Apple, beetroot, carrot, orange, pineapple. Add ginger R18", price: "R59" },
        { name: "Iced Teas", desc: "Lemon or peach", price: "R38" },
        { name: "Tisers", desc: "Apple or red grape", price: "R48" },
        { name: "Valpré 350ml", desc: "Still or sparkling mineral water", price: "R32" },
        { name: "Valpré 750ml", desc: "Still or sparkling mineral water", price: "R55" },
      ],
    },
    {
      id: "brew-bar",
      name: "Brew Bar",
      items: [
        { name: "Espresso", desc: "Single shot", price: "R27" },
        { name: "Double Espresso", desc: "Double shot", price: "R42" },
        { name: "Cortado", desc: "Single shot espresso and single shot steamed milk", price: "R32" },
        { name: "Café Latte", desc: "Single shot in a tall glass of steamed milk", price: "R43" },
        { name: "Americano", desc: "Single shot with hot water, served with milk", price: "R34" },
        { name: "Cappuccino", desc: "Single shot with steamed milk", price: "R38" },
        { name: "Double Cappuccino", desc: "Double shot with steamed milk in a mug", price: "R49" },
        { name: "Café Mocha", desc: "Single shot, chocolate and steamed milk", price: "R46" },
        { name: "Hot Chocolate / Milo", desc: "Classic hot chocolate or Milo", price: "R38" },
        { name: "Authentic Belgian Hot Chocolate", desc: "Made with real Belgian chocolate", price: "R49" },
        { name: "Five Roses / Rooibos", desc: "Classic tea", price: "R28" },
        { name: "Earl Grey / Green / Chamomile", desc: "Speciality tea", price: "R35" },
      ],
    },
  ],
};

// ═══════════════════════════════════════════════
// DRINKS MENU
// ═══════════════════════════════════════════════

export const drinksMenu: MenuType = {
  id: "drinks",
  name: "Drinks Menu",
  description: "Crafted cocktails, rare spirits, and fine wines",
  categories: [
    {
      id: "classic-cocktails",
      name: "Classic Cocktails",
      items: [
        { name: "Cosmopolitan", desc: "Vodka, Butlers triple sec, cranberry juice & freshly squeezed limes", price: "R75" },
        { name: "Pornstar Martini", desc: "Vodka, passion fruit & vanilla infusion with a side shot of sparkling wine", price: "R79" },
        { name: "Margarita", desc: "Gold tequila, Butlers triple sec and fresh limes, served shaken", price: "R78" },
        { name: "Long Island Iced Tea", desc: "Gordons gin, vodka, gold tequila, Bushcraft white rum, Butlers triple sec, fresh lime & coke", price: "R99" },
        { name: "Piña Colada", desc: "Pineapple rum, coconut rum, white rum, pineapple, coconut cream & fresh lime", price: "R99" },
        { name: "Don Julio Sunrise", desc: "Don Julio Reposado, orange juice & cranberry juice", price: "R165" },
        { name: "Mojito Blanco", desc: "Don Julio Blanco, sugar, fresh lime, mint & a dash of soda", price: "R135" },
        { name: "Aperol Spritz", desc: "Cinzano Pro Spritz, Aperol & soda", price: "R95" },
        { name: "Sexy Manhattan", desc: "Bulleit Bourbon, Martini Rosso, bitters & Maraschino cherries", price: "R125" },
        { name: "Malt Espresso Martini", desc: "Vodka, Kahlua, Illy espresso, vanilla, topped with cream & cocoa", price: "R99" },
        { name: "Old Fashioned", desc: "Bulleit Bourbon, sugar, bitters, orange zest & maraschino cherries", price: "R120" },
      ],
    },
    {
      id: "original-cocktails",
      name: "Originals & Daiquiris",
      items: [
        { name: "Dessert Delight", desc: "Amarula, hazelnut infusion, Ketel One vodka, coconut rum, cream", price: "R98" },
        { name: "Golden Litchi Tiki", desc: "Johnnie Walker Black, litchi & almond infusion, lemon juice & tonic", price: "R110" },
        { name: "Peachy Tequila Rita", desc: "Gold tequila, peach syrup, peach slices, lemon juice & topped with Corona", price: "R99" },
        { name: "Cranberry Cherry Sours", desc: "Gordons gin, cranberry infusion, orange juice & Martini Rosso", price: "R78" },
        { name: "Vanilla Passion Spritzer", desc: "Sweet rosé wine, passionfruit & vanilla infusion, lemon juice & soda", price: "R59" },
        { name: "Strawberry Daiquiri", desc: "Strawberries, strawberry infusion, Bushcraft white rum & sour mix", price: "R89" },
        { name: "Strawberry & Mango Daiquiri", desc: "Strawberries, fresh mango, mango infusion, Bushcraft white rum & fresh lemon juice", price: "R98" },
      ],
    },
    {
      id: "gin-cocktails",
      name: "Gin Cocktails",
      items: [
        { name: "Cucumber & Rose", desc: "Tanqueray gin, Schweppes tonic, sugar, lime, cucumber & rose infusion", price: "R105" },
        { name: "Orange Blossom Fizz", desc: "Tanqueray Sevilla gin, Butlers triple sec, orange juice, oranges & soda", price: "R99" },
        { name: "Blueberries, Thyme & Elderflower", desc: "Tanqueray Blackcurrant Royale, Schweppes tonic, blueberries, thyme & elderflower", price: "R105" },
        { name: "Pink Lady", desc: "Belgravia Pink gin, strawberries, Schweppes Floral Pink tonic, fresh lime & peppercorns", price: "R89" },
        { name: "Watermelon Lemonade", desc: "Tanqueray gin, Schweppes lemonade, watermelon cubes, watermelon infusion, fresh lime", price: "R105" },
        { name: "Sophisticated & Classy", desc: "Tanqueray 10 gin, Schweppes grapefruit, fresh grapefruit & fresh limes", price: "R145" },
      ],
    },
    {
      id: "whiskey-cocktails",
      name: "Whiskey Cocktails",
      items: [
        { name: "Peachy Blonde", desc: "Johnnie Walker Blonde & peach iced tea", price: "R79" },
        { name: "Black & Lemon", desc: "Johnnie Walker Black, fresh lime & lemonade", price: "R84" },
        { name: "Red Ginger", desc: "Johnnie Walker Red, fresh lime & ginger ale", price: "R59" },
        { name: "Single in Manhattan", desc: "Singleton 12 YO, Martini Rosso, bitters & cherries", price: "R115" },
        { name: "Whiskey Sour", desc: "Johnnie Walker Black, sweet & sour mix, bitters & cherries", price: "R115" },
      ],
    },
    {
      id: "vodka-cocktails",
      name: "Jam Jar Vodka Cocktails",
      note: "Infused with real fruit",
      items: [
        { name: "Grapefruit & Tonic", desc: "Cîroc vodka, fresh grapefruit, grapefruit infusion & Schweppes Floral Pink tonic", price: "R115" },
        { name: "Watermelon Lemonade", desc: "Cruz Watermelon vodka, watermelon & lemonade", price: "R95" },
        { name: "Pineapple & Strawberry Lemonade", desc: "Cîroc Pineapple, fresh pineapples & strawberries, Schweppes Floral Pink tonic", price: "R140" },
      ],
    },
    {
      id: "beer",
      name: "Beer",
      items: [
        { name: "Black Label", desc: "Local lager", price: "R38" },
        { name: "Castle", desc: "South Africa's favourite", price: "R35" },
        { name: "Castle Free", desc: "Non-alcoholic", price: "R32" },
        { name: "Castle Lite", desc: "Light and easy drinking", price: "R38" },
        { name: "Flying Fish Lemon", desc: "Flavoured lager", price: "R38" },
        { name: "Flying Fish Dry Apple", desc: "Flavoured lager", price: "R38" },
        { name: "Hansa", desc: "Pilsner", price: "R35" },
        { name: "Amstel", desc: "Imported pilsner", price: "R39" },
        { name: "Corona", desc: "Served ice cold with a wedge of lime", price: "R42" },
        { name: "Heineken", desc: "Premium Dutch lager", price: "R45" },
        { name: "Heineken Silver", desc: "Lighter premium lager", price: "R45" },
        { name: "Stella Artois", desc: "Belgian pilsner, crisp and refreshing", price: "R41" },
        { name: "Windhoek Draught 440ml", desc: "Namibian draught", price: "R49" },
        { name: "Windhoek Lager 440ml", desc: "Namibian lager", price: "R49" },
      ],
    },
    {
      id: "craft-beer",
      name: "Craft Beer",
      items: [
        { name: "Devils Peak Kings Blockhouse IPA", desc: "330ml craft IPA", price: "R54" },
        { name: "Cape Brewing Co. Krystal Weiss", desc: "340ml wheat beer", price: "R49" },
        { name: "Cape Brewing Co. Raspberry Weiss", desc: "340ml raspberry wheat beer", price: "R49" },
      ],
    },
    {
      id: "on-tap",
      name: "On Tap",
      items: [
        { name: "Black Label", desc: "300ml R32 | 500ml R49 | 1L R86", price: "From R32" },
        { name: "Castle Lite", desc: "300ml R32 | 500ml R49 | 1L R86", price: "From R32" },
        { name: "Castle", desc: "300ml R29 | 500ml R44 | 1L R77", price: "From R29" },
        { name: "Castle Double Malt", desc: "300ml R31 | 500ml R47", price: "From R31" },
        { name: "Guinness", desc: "300ml R42 | 500ml R64", price: "From R42" },
        { name: "Hoegaarden", desc: "300ml R43 | 500ml R65", price: "From R43" },
        { name: "Leffe", desc: "300ml R50 | 500ml R75", price: "From R50" },
        { name: "Stella Artois", desc: "300ml R38 | 500ml R58", price: "From R38" },
      ],
    },
    {
      id: "ciders-coolers",
      name: "Ciders & Coolers",
      items: [
        { name: "Hunters Dry", desc: "Crisp dry cider", price: "R44" },
        { name: "Hunters Gold", desc: "Golden cider", price: "R44" },
        { name: "Hunters Extreme", desc: "Extra strength cider", price: "R49" },
        { name: "Savanna Dry", desc: "Premium dry cider", price: "R49" },
        { name: "Savanna Light", desc: "Lighter cider option", price: "R49" },
        { name: "Savanna Lemon", desc: "Non-alcoholic lemon cider", price: "R49" },
        { name: "Ice Tropez", desc: "Sparkling wine cocktail", price: "R175" },
        { name: "Black Crown Gin & Tonic", desc: "Ready-to-drink G&T", price: "R39" },
        { name: "Brutal Fruit Ruby Apple", desc: "Flavoured sparkling cider", price: "R37" },
        { name: "Brutal Fruit Strawberry Spritz", desc: "Flavoured sparkling cider", price: "R37" },
      ],
    },
    {
      id: "whiskey-spirits",
      name: "Whiskeys",
      note: "Single malts and blended whiskeys",
      items: [
        { name: "Aberlour 12YO", desc: "Speyside single malt", price: "Ask" },
        { name: "Balvenie Doublewood 12YO", desc: "Speyside single malt", price: "Ask" },
        { name: "Glenfiddich 12YO", desc: "Speyside single malt", price: "Ask" },
        { name: "Glenfiddich 15YO", desc: "Speyside single malt, Solera reserve", price: "Ask" },
        { name: "Glenfiddich 18YO", desc: "Speyside single malt", price: "Ask" },
        { name: "Glenfiddich 21YO", desc: "Speyside single malt, Gran Reserva", price: "Ask" },
        { name: "Glenmorangie 10YO", desc: "Highland single malt", price: "Ask" },
        { name: "Glenmorangie 18YO", desc: "Highland single malt", price: "Ask" },
        { name: "Glenmorangie Signet", desc: "Highland single malt, chocolate & espresso notes", price: "Ask" },
        { name: "Lagavulin 16YO", desc: "Islay single malt, smoky & peaty", price: "Ask" },
        { name: "Macallan 12YO", desc: "Highland single malt, double cask", price: "Ask" },
        { name: "Macallan 15YO", desc: "Highland single malt, double cask", price: "Ask" },
        { name: "Macallan 18YO", desc: "Highland single malt, sherry oak", price: "Ask" },
        { name: "Macallan Rare Cask", desc: "Highland single malt", price: "Ask" },
        { name: "Nikka From the Barrel", desc: "Japanese whisky", price: "Ask" },
        { name: "Johnnie Walker Black", desc: "Blended Scotch, 12 years", price: "Ask" },
        { name: "Johnnie Walker Blue", desc: "Premium blended Scotch", price: "Ask" },
        { name: "Johnnie Walker Gold Reserve", desc: "Blended Scotch", price: "Ask" },
        { name: "Johnnie Walker Green", desc: "Blended malt, 15 years", price: "Ask" },
        { name: "Johnnie Walker 18YO", desc: "Aged blended Scotch", price: "Ask" },
        { name: "Jack Daniels", desc: "Tennessee whiskey", price: "Ask" },
        { name: "Monkey Shoulder", desc: "Blended malt Scotch", price: "Ask" },
      ],
    },
    {
      id: "tequila",
      name: "Tequila",
      items: [
        { name: "Don Julio Blanco", desc: "Premium silver tequila", price: "Ask" },
        { name: "Don Julio Reposado", desc: "Aged premium tequila", price: "Ask" },
        { name: "1942 Don Julio", desc: "Ultra-premium aged tequila", price: "Ask" },
        { name: "Casamigos Blanco", desc: "Small batch silver tequila", price: "Ask" },
        { name: "Casamigos Reposado", desc: "Small batch aged tequila", price: "Ask" },
        { name: "El Jimador Blanco", desc: "Silver tequila", price: "Ask" },
        { name: "El Jimador Reposado", desc: "Aged tequila", price: "Ask" },
        { name: "Jose Cuervo Especial Gold", desc: "Classic gold tequila", price: "Ask" },
        { name: "Jose Cuervo Especial Silver", desc: "Classic silver tequila", price: "Ask" },
      ],
    },
    {
      id: "cognac",
      name: "Cognac",
      items: [
        { name: "D'Ussé VSOP", desc: "Cognac, smooth and refined", price: "Ask" },
        { name: "Hennessy VS", desc: "Classic cognac", price: "Ask" },
        { name: "Hennessy VSOP", desc: "Very Superior Old Pale", price: "Ask" },
        { name: "Hennessy XO", desc: "Extra Old, premium cognac", price: "Ask" },
        { name: "Remy Martin VSOP", desc: "Fine Champagne cognac", price: "Ask" },
        { name: "Remy Martin XO Excellence", desc: "Premium Fine Champagne cognac", price: "Ask" },
      ],
    },
    {
      id: "wine-sparkling",
      name: "Champagne & Sparkling",
      items: [
        { name: "Moët & Chandon NV Brut", desc: "Champagne", price: "R1 650" },
        { name: "Moët & Chandon NV Rosé", desc: "Champagne rosé", price: "R2 000" },
        { name: "Moët & Chandon Ice", desc: "Champagne, served over ice", price: "R2 100" },
        { name: "Veuve Clicquot Brut", desc: "Champagne", price: "R1 800" },
        { name: "Veuve Clicquot Rosé", desc: "Champagne rosé", price: "R2 100" },
        { name: "Boschendal Brut NV", desc: "MCC — Glass R104 | Bottle R520", price: "R104" },
        { name: "Boschendal Brut Rosé NV", desc: "MCC — Glass R104 | Bottle R520", price: "R104" },
        { name: "Graham Beck Brut", desc: "MCC", price: "R540" },
        { name: "Graham Beck Brut Rosé", desc: "MCC rosé", price: "R540" },
      ],
    },
    {
      id: "wine-white",
      name: "White Wine",
      items: [
        { name: "Franschhoek Cellar Sauvignon Blanc", desc: "Glass R75 | Bottle R225", price: "R75" },
        { name: "Diemersdal Sauvignon Blanc", desc: "Bottle", price: "R235" },
        { name: "Oak Valley Fountain of Youth", desc: "Sauvignon Blanc — Glass R95 | Bottle R285", price: "R95" },
        { name: "Waterside Chardonnay", desc: "Glass R65 | Bottle R195", price: "R65" },
        { name: "Chamonix Unoaked Chardonnay", desc: "Glass R98 | Bottle R295", price: "R98" },
        { name: "Boschendal 1685 Chardonnay", desc: "Bottle", price: "R345" },
        { name: "Spier Signature Chenin Blanc", desc: "Glass R68 | Bottle R205", price: "R68" },
        { name: "Kleine Zalze Cellar Selection Chenin Blanc", desc: "Bottle", price: "R210" },
        { name: "Allée Bleue Chenin Blanc", desc: "Glass R105 | Bottle R315", price: "R105" },
      ],
    },
    {
      id: "wine-red",
      name: "Red Wine",
      items: [
        { name: "Spier Cabernet Sauvignon", desc: "Glass R75 | Bottle R225", price: "R75" },
        { name: "Brampton Cabernet Sauvignon", desc: "Bottle", price: "R270" },
        { name: "Fat Bastard Cabernet Sauvignon", desc: "Glass R115 | Bottle R345", price: "R115" },
        { name: "Franschhoek Cellar Merlot", desc: "Glass R75 | Bottle R225", price: "R75" },
        { name: "Le Bonheur Merlot", desc: "Glass R98 | Bottle R295", price: "R98" },
        { name: "Boschendal 1685 Merlot", desc: "Bottle", price: "R420" },
        { name: "Doolhof MR Pinotage", desc: "Glass R90 | Bottle R270", price: "R90" },
        { name: "Beyerskloof Pinotage", desc: "Bottle", price: "R280" },
        { name: "Saronsberg Provenance Shiraz", desc: "Glass R105 | Bottle R315", price: "R105" },
        { name: "Chamonix Rouge", desc: "Red blend — Glass R85 | Bottle R255", price: "R85" },
        { name: "Kanonkop Kadette Cape Blend", desc: "Bottle", price: "R335" },
        { name: "Rupert & Rothschild Classique", desc: "Red blend — Bottle", price: "R540" },
      ],
    },
    {
      id: "wine-rose",
      name: "Rosé",
      items: [
        { name: "GD Life Sweet Rosé", desc: "Glass R60 | Bottle R180", price: "R60" },
        { name: "Brampton Rosé", desc: "Bottle", price: "R225" },
        { name: "Allée Bleue Shiraz Rosé", desc: "Glass R98 | Bottle R295", price: "R98" },
        { name: "The Valley Rosé", desc: "Bottle", price: "R340" },
      ],
    },
  ],
};

// ═══════════════════════════════════════════════
// SUSHI MENU (Midrand + Monte Casino)
// ═══════════════════════════════════════════════

export const sushiMenu: MenuType = {
  id: "sushi",
  name: "Sushi Menu",
  description: "Fresh, handcrafted sushi — available at select locations",
  categories: [
    {
      id: "classic",
      name: "Classic",
      items: [
        { name: "Salmon Sashimi — 3pc", desc: "Fresh salmon sashimi", price: "R110" },
        { name: "Salmon Sashimi — 5pc", desc: "Fresh salmon sashimi", price: "R165" },
        { name: "Salmon Sashimi — 8pc", desc: "Fresh salmon sashimi", price: "R250" },
        { name: "Salmon Roses — 3pc", desc: "Delicate salmon roses", price: "R90" },
        { name: "Salmon Roses — 5pc", desc: "Delicate salmon roses", price: "R140" },
        { name: "California Roll — Avo & Cucumber (V) 4pc", desc: "Vegetarian california roll", price: "R55" },
        { name: "California Roll — Avo & Cucumber (V) 8pc", desc: "Vegetarian california roll", price: "R85" },
        { name: "California Roll — Prawn 4pc", desc: "Prawn california roll", price: "R65" },
        { name: "California Roll — Prawn 8pc", desc: "Prawn california roll", price: "R98" },
        { name: "California Roll — Salmon 4pc", desc: "Salmon california roll", price: "R70" },
        { name: "California Roll — Salmon 8pc", desc: "Salmon california roll", price: "R105" },
        { name: "Rainbow Roll — Salmon & Avocado 4pc", desc: "Salmon and avocado rainbow roll", price: "R80" },
        { name: "Rainbow Roll — Salmon & Avocado 8pc", desc: "Salmon and avocado rainbow roll", price: "R150" },
        { name: "Fashion Sandwich — Salmon 8pc", desc: "Salmon fashion sandwich", price: "R135" },
        { name: "Fashion Sandwich — Prawn 8pc", desc: "Prawn fashion sandwich", price: "R135" },
        { name: "Fashion Sandwich — Avo & Cucumber (V) 8pc", desc: "Vegetarian fashion sandwich", price: "R120" },
        { name: "Inari — Avo & Cucumber (V) 2pc", desc: "Battleship style, vegetarian", price: "R55" },
        { name: "Inari — Prawn 2pc", desc: "Battleship style", price: "R65" },
        { name: "Inari — Salmon 2pc", desc: "Battleship style", price: "R70" },
        { name: "Crispy Rice — Avo & Cucumber (V) 3pc", desc: "Crispy rice, vegetarian", price: "R60" },
        { name: "Crispy Rice — Prawn 3pc", desc: "Crispy rice with prawn", price: "R70" },
        { name: "Crispy Rice — Salmon 3pc", desc: "Crispy rice with salmon", price: "R75" },
      ],
    },
    {
      id: "signature-sushi",
      name: "Malt Signature Sushi",
      items: [
        { name: "The Rock & Roll (8pc)", desc: "Prawn, avocado, tempura prawn & avalanche sauce", price: "R155" },
        { name: "Rainbow Reloaded (8pc)", desc: "Salmon, spicy mayo, teriyaki sauce, spring onion & sesame seeds", price: "R140" },
        { name: "Philadelphia Roll (8pc)", desc: "Cream cheese, smoked salmon, avocado, cucumber & strawberry", price: "R168" },
        { name: "Deluxe Roses (2pc)", desc: "Salmon roses topped with spicy mayo, spring onion, sesame seeds, tempura crumbs & caviar", price: "R78" },
        { name: "Bamboo Roll (4pc)", desc: "Cucumber roll with tempura prawn & avocado, topped with mayo & caviar", price: "R85" },
        { name: "Crunchy Roll (6pc)", desc: "Deep fried salmon, prawn & avocado rolls with sweet chilli mayo & spring onion", price: "R155" },
        { name: "Volcano Roll (8pc)", desc: "Crispy California rolls with salmon, cream cheese, chilli & mayo", price: "R170" },
        { name: "Chicken Tempura Sushi Roll (8pc)", desc: "Crispy tempura chicken, avocado and cucumber, topped with tempura crumbs, sesame seeds, teriyaki & spicy mayo", price: "R155" },
        { name: "Doritos Roll (6pc)", desc: "Smoked salmon, cream cheese & avocado rolls, topped with Doritos, jalapeños & teriyaki sauce", price: "R155" },
        { name: "Tiger Roll (8pc)", desc: "Crispy tempura queen prawns in seasoned sushi rice, avocado, cucumber, topped with salmon, teriyaki & spicy mayo", price: "R195" },
      ],
    },
    {
      id: "poke-bowls",
      name: "Poké Bowls",
      items: [
        { name: "Seared Steak", desc: "Seared teriyaki rump strips with spring onion, sesame seeds, edamame beans, cocktail tomatoes, avocado, cucumber and corn on sushi rice", price: "R220" },
        { name: "Tempura Chicken", desc: "Tempura chicken strips with sweet chilli sauce, black sesame seeds, edamame beans, seared pineapple, avocado and julienne carrots on sushi rice", price: "R140" },
        { name: "Salmon", desc: "Salmon sashimi with black sesame seeds, edamame beans, julienne carrots, cucumber, avocado & ginger on sushi rice", price: "R220" },
      ],
    },
    {
      id: "sushi-platters",
      name: "Sushi Platters",
      items: [
        { name: "Salmon Platter", desc: "8 Salmon California Rolls, 4 Salmon Sashimi, 4 Salmon Fashion Sandwich, 2 Salmon Nigiri, 3 Salmon Roses", price: "R420" },
        { name: "4Way Platter", desc: "4 Crunch Roll, 4 Rock Roll, 4 Crispy Salmon Fashion Sandwiches, 4 Tempura Prawn", price: "R295" },
        { name: "VIP Platter", desc: "3 Deluxe Salmon Roses, 4 Volcano Roll, 4 Rock Roll, 4 Sashimi Salmon, 4 Rainbow Reloaded", price: "R450" },
      ],
    },
  ],
};

// ═══════════════════════════════════════════════
// SIGNATURE MENU (Midrand only)
// ═══════════════════════════════════════════════

export const signatureMenu: MenuType = {
  id: "signature",
  name: "Signature Selections",
  description: "Exclusive selections — only at Midrand",
  categories: [
    {
      id: "shisha",
      name: "Shisha",
      note: "Silky, aromatic smoke in bold or fruity flavours, served in sleek stainless steel & glass hookahs",
      items: [
        { name: "Single Premium Shisha", desc: "Single flavour (1 extra coal refill included)", price: "R350" },
        { name: "Single Executive Shisha", desc: "Mixed flavours (1 extra coal refill included)", price: "R400" },
        { name: "Top-Up Tobacco", desc: "Additional tobacco refill", price: "R150" },
        { name: "Special Additions — Ice", desc: "Add ice to your shisha", price: "R20" },
        { name: "Special Additions — Milk", desc: "Add milk to your shisha", price: "R60" },
        { name: "Special Additions — Fresh Fruit", desc: "Add fresh fruit to your shisha", price: "R60" },
      ],
    },
    {
      id: "prime-cuts",
      name: "Prime Cuts",
      items: [
        { name: "Tomahawk Steak", desc: "A 900g showstopping rib-eye on the bone, expertly flame grilled. Served with a side of your choice", price: "R680" },
        { name: "The Grand T", desc: "An impressive 1kg cut full of flavour. Ideal for sharing or as a centerpiece. Served with a side of your choice", price: "R620" },
        { name: "Fillet on the Bone", desc: "A 600g premium cut of tender beef fillet left on the bone. Finished with sea salt, cracked pepper and herb-infused butter. Served with a side", price: "R420" },
      ],
    },
    {
      id: "oceans-crown",
      name: "Oceans Crown",
      items: [
        { name: "Tiger Giants", desc: "Succulent flame grilled tiger giant prawns with herb-infused lemon butter, Porto sauce or flaming peri-peri. Served with jasmine rice or fries", price: "R195 each" },
        { name: "The Prawn Collection", desc: "3 tiger giants, 6 king prawns and 12 queen prawns with jasmine rice, fries and 2 sauces (lemon butter, Porto or peri-peri)", price: "R1 595" },
        { name: "Calamari Duo", desc: "Tender calamari tubes lightly battered and grilled, paired with crispy calamari. Served with jasmine rice, fries, lemon butter and Porto sauce", price: "R420" },
      ],
    },
    {
      id: "reserve-cellar",
      name: "The Reserve Cellar",
      items: [
        { name: "Dom Pérignon Blanc", desc: "Champagne", price: "R7 500" },
        { name: "Dom Pérignon Rosé", desc: "Champagne rosé", price: "R10 000" },
        { name: "Armand de Brignac Gold Brut", desc: "Ace of Spades champagne", price: "R11 000" },
        { name: "Armand de Brignac Demi-Sec", desc: "Ace of Spades demi-sec", price: "R12 500" },
        { name: "Allée Bleue Isabeau Chardonnay", desc: "White wine", price: "R620" },
        { name: "Rupert & Rothschild Baroness Nadine Chardonnay", desc: "White wine", price: "R750" },
        { name: "L'Avenir Single Block Chenin Blanc", desc: "White wine", price: "R820" },
        { name: "Framingham Sauvignon Blanc", desc: "White wine", price: "R920" },
        { name: "Ken Forrester FMC Chenin Blanc", desc: "White wine", price: "R1 750" },
        { name: "Allée Bleue Single Vineyard Syrah", desc: "Red wine", price: "R950" },
        { name: "L'Avenir Single Block Pinotage", desc: "Red wine", price: "R1 290" },
        { name: "Warwick Triology", desc: "Red blend", price: "R1 350" },
        { name: "Vilafonte Series M", desc: "Red blend", price: "R2 100" },
        { name: "Simonsig The Garland Cabernet Sauvignon", desc: "Red wine", price: "R2 750" },
      ],
    },
    {
      id: "bottle-service",
      name: "Bottle Service",
      items: [
        { name: "Hennessy VS", desc: "Cognac", price: "R1 350" },
        { name: "Hennessy VSOP", desc: "Cognac", price: "R1 950" },
        { name: "Hennessy XO", desc: "Cognac", price: "R5 450" },
        { name: "Remy Martin VSOP", desc: "Cognac", price: "R2 050" },
        { name: "Remy Martin 1738", desc: "Cognac", price: "R2 950" },
        { name: "Remy Martin XO", desc: "Cognac", price: "R6 200" },
        { name: "Glenfiddich 12YO", desc: "Single malt whisky", price: "R1 600" },
        { name: "Glenfiddich 15YO", desc: "Single malt whisky", price: "R2 250" },
        { name: "Glenfiddich 18YO", desc: "Single malt whisky", price: "R3 700" },
        { name: "Glenfiddich 21YO", desc: "Single malt whisky", price: "R6 950" },
        { name: "Johnnie Walker Gold Reserve", desc: "Blended Scotch", price: "R1 650" },
        { name: "Johnnie Walker Green", desc: "Blended malt", price: "R2 400" },
        { name: "Johnnie Walker 18YO", desc: "Aged blended Scotch", price: "R3 250" },
        { name: "Johnnie Walker Blue", desc: "Premium blended Scotch", price: "R5 950" },
        { name: "Glenmorangie 12YO", desc: "Highland single malt", price: "R1 850" },
        { name: "Glenmorangie 18YO", desc: "Highland single malt", price: "R4 050" },
        { name: "Glenmorangie Signet", desc: "Highland single malt", price: "R6 100" },
        { name: "Macallan Double Cask 12YO", desc: "Highland single malt", price: "R2 750" },
        { name: "Macallan Double Cask 15YO", desc: "Highland single malt", price: "R4 750" },
        { name: "Macallan Rare Cask", desc: "Highland single malt", price: "R7 950" },
        { name: "Don Julio Blanco", desc: "Premium tequila", price: "R1 750" },
        { name: "Don Julio Reposado", desc: "Aged premium tequila", price: "R2 250" },
        { name: "Don Julio 1942", desc: "Ultra-premium tequila", price: "R8 950" },
        { name: "Casamigos Blanco", desc: "Small batch tequila", price: "R1 400" },
        { name: "Casamigos Reposado", desc: "Aged small batch tequila", price: "R1 850" },
        { name: "Cîroc", desc: "Premium vodka", price: "R1 100" },
        { name: "Hendrick's", desc: "Scottish gin", price: "R1 200" },
        { name: "Tanqueray 10", desc: "Premium gin", price: "R1 200" },
      ],
    },
  ],
};

// ═══════════════════════════════════════════════
// LOCATION LOGIC
// ═══════════════════════════════════════════════

export function getMenusForLocation(slug: string): MenuType[] {
  const menus: MenuType[] = [mainMenu, drinksMenu];

  switch (slug) {
    case "midrand":
      menus.push(sushiMenu, signatureMenu);
      break;
    case "monte-casino":
      menus.push(sushiMenu);
      break;
    // silver-lakes and queenswood: main + drinks only
  }

  return menus;
}

export const allMenuTypes: MenuType[] = [mainMenu, drinksMenu, sushiMenu, signatureMenu];
