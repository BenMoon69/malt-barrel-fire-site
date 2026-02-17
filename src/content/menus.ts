export interface MenuItem {
  name: string;
  desc: string;
  price: string;
}

export interface MenuCategory {
  id: string;
  name: string;
  items: MenuItem[];
}

export interface MenuType {
  id: string;
  name: string;
  description: string;
  categories: MenuCategory[];
}

export const mainMenu: MenuType = {
  id: "main",
  name: "Main Menu",
  description: "Wood-fired cuisine, grilled to perfection",
  categories: [
    {
      id: "starters",
      name: "Starters",
      items: [
        { name: "Smoked Bone Marrow", desc: "Charred sourdough, herb gremolata, flaked salt", price: "R145" },
        { name: "Ember-Roasted Beets", desc: "Whipped goat cheese, candied walnuts, aged balsamic", price: "R115" },
        { name: "Whiskey-Cured Salmon", desc: "Dill crème fraîche, pickled shallots, rye crisps", price: "R155" },
        { name: "Charred Octopus", desc: "Romesco, crispy potatoes, smoked paprika oil", price: "R175" },
        { name: "Fire-Grilled Prawns", desc: "Garlic butter, lemon, micro herbs, served tableside", price: "R195" },
      ],
    },
    {
      id: "mains",
      name: "Mains",
      items: [
        { name: "Tomahawk Ribeye", desc: "Bone-in, dry-aged 45 days, roasted garlic butter", price: "R495" },
        { name: "Wood-Fired Branzino", desc: "Lemon, capers, brown butter, charred broccolini", price: "R285" },
        { name: "Smoked Short Rib", desc: "12-hour oak smoke, bourbon glaze, truffle mash", price: "R345" },
        { name: "Cast Iron Duck Breast", desc: "Cherry gastrique, roasted root vegetables, jus", price: "R325" },
        { name: "Flame-Grilled Lamb Rack", desc: "Herb crust, mint chimichurri, roasted potatoes", price: "R385" },
      ],
    },
    {
      id: "desserts",
      name: "Desserts",
      items: [
        { name: "Smoked Chocolate Fondant", desc: "Salted caramel ice cream, candied hazelnuts", price: "R115" },
        { name: "Crème Brûlée", desc: "Bourbon-infused vanilla bean, caramelised sugar", price: "R95" },
        { name: "Cheese Board", desc: "Selection of artisan cheeses, honeycomb, crackers", price: "R165" },
      ],
    },
  ],
};

export const drinksMenu: MenuType = {
  id: "drinks",
  name: "Drinks Menu",
  description: "Crafted cocktails, rare spirits, and fine wines",
  categories: [
    {
      id: "cocktails",
      name: "Signature Cocktails",
      items: [
        { name: "Barrel & Fire Old Fashioned", desc: "House bourbon blend, smoked maple, Angostura", price: "R135" },
        { name: "Espresso Martini", desc: "Premium vodka, fresh espresso, coffee liqueur", price: "R125" },
        { name: "Whiskey Sour", desc: "Johnnie Walker, fresh lemon, egg white foam", price: "R120" },
        { name: "Signature Smoky Negroni", desc: "Gin, Campari, sweet vermouth, hickory smoke", price: "R145" },
        { name: "Casamigos Margarita", desc: "Casamigos tequila, fresh lime, agave, salt rim", price: "R140" },
      ],
    },
    {
      id: "whiskey",
      name: "Whiskey & Spirits",
      items: [
        { name: "Macallan 18yr", desc: "Sherry oak, Highland Single Malt — neat or on rocks", price: "R295" },
        { name: "Johnnie Walker Black", desc: "Blended Scotch, 12 years — neat, rocks, or soda", price: "R85" },
        { name: "Don Julio Reposado", desc: "Aged tequila, smooth agave notes — sipped neat", price: "R145" },
        { name: "Hennessy VS", desc: "Cognac, rich and smooth — neat or on ice", price: "R110" },
        { name: "Jägermeister", desc: "Ice cold shot or Jäger Bomb", price: "R55" },
      ],
    },
    {
      id: "beers",
      name: "Beers & Ciders",
      items: [
        { name: "Corona Extra", desc: "Served ice cold with a wedge of lime", price: "R45" },
        { name: "Stella Artois", desc: "Belgian pilsner, crisp and refreshing", price: "R50" },
        { name: "Castle Lite", desc: "Light and easy drinking lager", price: "R35" },
        { name: "Castle Lager", desc: "South Africa's favourite beer", price: "R30" },
        { name: "Brutal Fruit", desc: "Flavoured sparkling cider — assorted flavours", price: "R40" },
      ],
    },
  ],
};

export const sushiMenu: MenuType = {
  id: "sushi",
  name: "Sushi Menu",
  description: "Fresh, handcrafted sushi — available at select locations",
  categories: [
    {
      id: "rolls",
      name: "Signature Rolls",
      items: [
        { name: "Rainbow Roll", desc: "Assorted sashimi, avocado, cucumber, tobiko", price: "R165" },
        { name: "Spicy Tuna Crunch", desc: "Spicy tuna, tempura flakes, sriracha mayo", price: "R145" },
        { name: "Salmon Roses", desc: "Fresh salmon, cream cheese, avocado, sesame", price: "R155" },
        { name: "Prawn Tempura Roll", desc: "Crispy prawn tempura, avocado, teriyaki drizzle", price: "R135" },
        { name: "Dragon Roll", desc: "Eel, avocado, cucumber, unagi sauce", price: "R175" },
      ],
    },
    {
      id: "sashimi",
      name: "Sashimi & Nigiri",
      items: [
        { name: "Salmon Sashimi (6pc)", desc: "Fresh Norwegian salmon, wasabi, pickled ginger", price: "R145" },
        { name: "Tuna Sashimi (6pc)", desc: "Yellowfin tuna, soy reduction, micro herbs", price: "R155" },
        { name: "Mixed Nigiri (8pc)", desc: "Chef's selection of salmon, tuna, prawn, avo", price: "R165" },
      ],
    },
    {
      id: "platters",
      name: "Sushi Platters",
      items: [
        { name: "Malt Platter (24pc)", desc: "Chef's selection of rolls, nigiri, and sashimi for one", price: "R285" },
        { name: "Fire Platter (40pc)", desc: "Premium sharing platter for two — chef's choice", price: "R495" },
        { name: "Barrel Platter (60pc)", desc: "The ultimate sharing experience for 3-4 guests", price: "R695" },
      ],
    },
  ],
};

export const signatureMenu: MenuType = {
  id: "signature",
  name: "Signature Menu",
  description: "Exclusive dishes — only at Midrand",
  categories: [
    {
      id: "signature-starters",
      name: "Signature Starters",
      items: [
        { name: "Truffle Burrata", desc: "Fresh burrata, truffle honey, grilled peach, rocket", price: "R185" },
        { name: "Wagyu Tataki", desc: "Seared wagyu, ponzu, pickled radish, sesame", price: "R225" },
        { name: "Lobster Bisque", desc: "Rich bisque, cognac cream, garlic croutons", price: "R175" },
      ],
    },
    {
      id: "signature-mains",
      name: "Signature Mains",
      items: [
        { name: "Wagyu Ribeye 300g", desc: "Full-blood wagyu, bone marrow butter, truffle fries", price: "R695" },
        { name: "Whole Grilled Lobster", desc: "Garlic herb butter, charred corn, hand-cut chips", price: "R595" },
        { name: "Lamb Shank Osso Buco", desc: "Slow-braised, saffron risotto, gremolata", price: "R345" },
        { name: "Pan-Roasted Duck", desc: "Five-spice glaze, sweet potato puree, bok choy", price: "R365" },
      ],
    },
  ],
};

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
