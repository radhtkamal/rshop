const products = [
  {
    name: "Chicken Basquaise",
    price: 9.99,
    category: "Entrée",
    image:
      "https://www.saveur.com/uploads/2019/02/08/E42B54E7FHVCG2H7X5QAHSXESA-1024x768.jpg?auto=webp&optimize=high&quality=70&width=1920",
    description: "This braised chicken recipe, adapted from chef Sébastien Gravé, is emblematic of the Basque region's affection for colorful, peppery stews. Though paprika can work in a pinch, it's the flakier, lightly spicy, more enigmatic Espelette pepper that's characteristic of the region."
  },
  {
    name: "Cinnamon Apple Bostock",
    price: 9.99,
    category: "Entrée",
    image:
      "https://www.saveur.com/uploads/2019/01/30/BCNBQGWA4KP4PWC6BADVUIK7OQ-1024x768.jpg?auto=webp&optimize=high&quality=70&width=1920",
    description: "This winey chicken braise dotted with pearl onions and button mushrooms is the first French dish many cooks outside France make, and no wonder: It's as simple to prepare as it is elegant to serve. Bostock is a sweet and crunchy breakfast pastry with roots in Normandy. Our version honors Calvados country with a schmear of apple butter and a splash of apple brandy added to the traditional frangipane cream. A generous layer of toasty almonds balances the soft and squishy filling below."
  },
  {
    name: "Basque-Style Fish with Green Peppers and Manila Clams",
    price: 9.99,
    category: "Entrée",
    image:
      "https://www.saveur.com/uploads/2019/02/08/6IDO5R26FHOQSV36E7BYDYGFNU-1024x768.jpg?auto=webp&optimize=high&quality=70&width=1920",
    description: "This riff on Basque pipérade, a classic dish of stewed peppers, incorporates seafood from the region. Hake is traditional, but mild, white-fleshed fish like striped bass or haddock make fine substitutes. Fresh clams offer a briny sweetness. Any assortment of mild peppers will work here."
  },
  {
    name: "Alsatian Bacon and Onion Tart",
    price: 9.99,
    category: "Canapé",
    image:
      "https://www.saveur.com/uploads/2019/02/08/LXZKMKITMJSDCIAXFIBNTFAM2U.jpg?auto=webp&optimize=high&quality=70&width=1920",
    description: "Cooking on a very hot pizza stone gives this bacon and onion tart a shatteringly crispy crust."
  },
  {
    name: "Cherry Gateau Basque",
    price: 9.99,
    category: "Dessert",
    image:
      "https://www.saveur.com/uploads/2019/02/08/URGVKJ7RNRC6ITIUZ7PNNNHN6Q-1024x768.jpg?auto=webp&optimize=high&quality=70&width=750",
    description: "The signature dessert of the region, gâteau basque is made by sandwiching a layer of jam or sweet pastry cream between two shortbread-like rounds. Cherry preserves are a classic filling—choosing a good-quality jam makes all the difference—and the dough itself resembles a cookie dough, with additional eggs lending a cakier texture. It can also be baked in a 9-inch fluted tart pan with a removable bottom; just be sure to grease the sides with butter before assembling."
  },
  {
    name: "Marquise au Chocolat",
    price: 9.99,
    category: "Dessert",
    image:
      "https://www.saveur.com/uploads/2019/02/08/65SS2ZDB6AJRI6POPYMNQDOSLQ-1024x768.jpg?auto=webp&optimize=high&quality=70&width=1080",
    description: "This dessert—a fudgy, frozen or semifrozen chocolate mousse that's sometimes coated in ganache, then sliced—likely came from the 17th or 18th century, when royal pastry chefs lived large. I like to crumble in Speculoos cookies, like Biscoff brand, before freezing, to add crunch and pretty golden flecks, but anything that works with chocolate—from candied ginger to rum-soaked raisins—is fair game. It's at its best when semifrozen or thawed but still chilly."
  },
  {
    name: "Crepes Suzette",
    price: 9.99,
    category: "Dessert",
    image:
      "https://www.saveur.com/uploads/2019/02/08/44K6ETPCZB2SGTAUNF67KUJSCU.jpg?auto=webp&optimize=high&quality=70&width=1080",
    description: "Credit for inventing crêpes Suzette is claimed by French restaurateur Henri Charpentier, who in 1894, at age 14, while an assistant waiter, accidentally set a sauce aflame when serving dessert to the Prince of Wales."
  },
  {
    name: "Salmon Rillettes",
    price: 9.99,
    category: "Canapé",
    image:
      "https://www.saveur.com/uploads/2019/02/08/3LIQ6UYXSNRLGPKD2XXYEL27IQ-1024x768.jpg?auto=webp&optimize=high&quality=70&width=1080",
    description: "Made with both smoked and cooked fish for textural contrast, salmon rillettes became a New Year's staple once I discovered that my husband wasn't the only non—oyster eater among us. Pack into jars the night before entertaining—the flavors improve with time."
  },
  {
    name: "Cervelle de Canut",
    price: 9.99,
    category: "Canapé",
    image:
      "https://www.saveur.com/uploads/2018/11/20/CXZMS3OJBNBXBENBPEAXVZYDE4-1024x768.jpg?auto=webp&optimize=high&quality=70&width=1080",
    description: "This dish, which translates literally to \"silk worker's brain,\" is said to be named for Lyon\'s 19th-century silk weavers, who\'d often make a lunch of the smooth herbed-cheese spread. Chef Boulud\'s family used to make it with fresh goat cheese, but fromage blanc works just as well. Serve with salad, potatoes, or toasted bread."
  },
  {
    name: "Meringue Floating in Crème Anglaise",
    price: 9.99,
    category: "Dessert",
    image:
      "https://www.saveur.com/uploads/2019/02/08/IDPIWFJJUJZMDA3TOI52D2ZPIU-1024x768.jpg?auto=webp&optimize=high&quality=70&width=1080",
    description: "Sprinkled on top of these delicate meringues—which float in a vanilla custard—are praline roses, caramel-coated almonds dyed a bright pink. The color's a bit shocking, but they're a staple of Lyonnaise pâtisseries and lend a nice crunch and color to this white-on-white backdrop."
  },
  {
    name: "Lyonnaise Potato Salad with Herring",
    price: 9.99,
    category: "Canapé",
    image:
      "https://www.saveur.com/uploads/2019/02/08/CIRBJ2URQUXFLX5J4ADF7GZKMM-1024x768.jpg?auto=webp&optimize=high&quality=70&width=1080",
    description: "The key to this potato salad is its powerful ingredients: Cured herring and bracing red wine vinegar give each bite a pop of flavor."
  },
  {
    name: "Tête de Veau",
    price: 9.99,
    category: "Entrée",
    image:
      "https://www.saveur.com/uploads/2019/02/08/GIYAKUOB7HDBXS2CO3UCBNQCYA-1024x768.jpg?auto=webp&optimize=high&quality=70&width=1080",
    description: "\"For me, eating calf's head is a must in Lyon—even for breakfast,\" says chef Daniel Boulud about this Lyonnaise specialty. \"It brings back memories of family gatherings and special occasions. We used to raise and slaughter our own calves growing up.\" Instead of tackling the butchery on your own, have your butcher do the heavy lifting for you: Ask for the meat, tongue, and brain to be separated from the skull, but leave the skin on because, as Boulud says, \"it\'s not tête de veau without the skin.\""
  },
  {
    name: "Provençal Stuffed Squid",
    price: 9.99,
    category: "Entrée",
    image:
      "https://www.saveur.com/uploads/2019/02/08/NNU5OO5YHI76OCWEQU5C7WR2PM-1024x768.jpg?auto=webp&optimize=high&quality=70&width=1080",
    description: "Fresh squid of every size, and cuttlefish too, are found at fishmongers throughout Provence. Lulu buys the tiny ones to fry, but chooses medium-size squid to stuff with herbs, chard, and bread crumbs (she prefers chard to spinach under most circumstances). To make things easier, the squid can be prepared in advance and cooked later in the day, roasted, grilled, or braised. Serve warm or at room temperature, drizzled with fruity oil or an anchovy vinaigrette."
  },
  {
    name: "Corsican Lemon Mousse",
    price: 9.99,
    category: "Dessert",
    image:
      "https://www.saveur.com/uploads/2019/02/08/2GCZPOUCTUUNK7VS6IXDAG7HGE.jpg?auto=webp&optimize=high&quality=70&width=1080",
    description: "This rich, silky mousse brightened with tangy lemons makes an elegant end to a meal."
  },
  {
    name: "Basque Seafood Stew",
    price: 9.99,
    category: "Entrée",
    image:
      "https://www.saveur.com/uploads/2019/02/08/OSWSIHHQSKI67MGXHLRZT6DRRE-1024x768.jpg?auto=webp&optimize=high&quality=70&width=1080",
    description: "Hearty \"bouillabasque\"—Darroze's tongue-in-cheek name for a Basque-style bouillabaisse, in which the fish is cooked separately and then added to a rich, reduced seafood-and-tomato stock—perfectly marries the culinary cornerstones of southwest France: duck fat, seafood, and armagnac. You can grill the fish on grates or a plancha, in the Spanish style, but a stovetop solution works just as well. Serve with aïoli, rouille, or any garlicky mayonnaise, along with some crusty bread."
  },
  {
    name: "Gratinéed Scallops",
    price: 9.99,
    category: "Canapé",
    image:
      "https://www.saveur.com/uploads/2019/02/08/T2DF2TT4O62IYEFMGCIMF5F6OQ.jpg?auto=webp&optimize=high&quality=70&width=1080",
    description: "While modern chefs tend towards lighter scallop recipes, this old French dish of scallops poached in white wine, placed atop a purée of mushrooms in a scallop shell, covered with a sauce made of the scallop poaching liquid, and gratinéed under a broiler, is a great way to prepare the bivalve."
  },
  {
    name: "Fish Stew with Aïoli",
    price: 9.99,
    category: "Entrée",
    image:
      "https://www.saveur.com/uploads/2019/02/08/5DKBYTZCY7LRNTOQ7KW3UUORAY-683x1024.jpg?auto=webp&optimize=high&quality=70&width=1080",
    description: "Homemade aïoli thickens the broth in this satisfying Marsellais stew made with halibut, shrimp, and white wine."
  },
  {
    name: "Provençal Vegetable Tian",
    price: 9.99,
    category: "Entrée",
    image:
      "https://www.saveur.com/uploads/2019/02/08/5DKBYTZCY7LRNTOQ7KW3UUORAY-683x1024.jpg?auto=webp&optimize=high&quality=70&width=1080",
    description: "A tian is a type of gratin, typically vegetables baked in an earthenware dish. (The word \"tian\" also refers to the earthenware dish itself.) This classic Provençal version is made with alternating rows of sliced zucchini, eggplant, and tomato. The flavors meld as the vegetables cook together, somewhat like ratatouille. Seasoned simply with thyme, garlic, and good fruity olive oil, the dish is best served at room temperature. Lulu insists it tastes even better made a day in advance."
  },
  {
    name: "Cauliflower and Goat Cheese Soufflés",
    price: 9.99,
    category: "Canapé",
    image:
      "https://www.saveur.com/uploads/2018/11/20/ED65DHE3ONBOZNVDZF7RV2BTBM-683x1024.jpg?auto=webp&optimize=high&quality=70&width=1080",
    description: "Adding puréed cauliflower to an appetizer-sized soufflé gives the dish the heartiness to be a vegetarian main when served with a salad."
  },
  {
    name: "Croque Tartine Parisienne",
    price: 9.99,
    category: "Entrée",
    image:
      "https://www.saveur.com/uploads/2019/02/08/SYUFE4R4PPGY7VWNND4ORJ336A-809x1024.jpg?auto=webp&optimize=high&quality=70&width=1080",
    description: "A fried egg crowns this decadent sandwich of ham enrobed in béchamel and melted cheese."
  },
  {
    name: "Sauternes Custard with Armagnac-Soaked Prunes",
    price: 9.99,
    category: "Dessert",
    image:
      "https://www.saveur.com/uploads/2019/02/08/BGRGPN5JU45Q35QHIPUDQZC4II-1024x768.jpg?auto=webp&optimize=high&quality=70&width=1080",
    description: "At Boulestin, Agen prunes, prized for their caramel notes and soft texture, are infused with brewed tea, cinnamon, and armagnac and then used to top this sumptuous custard. In lieu of vanilla sugar, you can substitute 3/4 cup sugar and 1 tsp. vanilla extract."
  },
  {
    name: "Whole Wheat Mille Crêpe Cake",
    price: 9.99,
    category: "Dessert",
    image:
      "https://www.saveur.com/uploads/2019/02/08/PGZDVHKR5P3POWHXEG2ZGLZ644-1024x768.jpg?auto=webp&optimize=high&quality=70&width=1080",
    description: "Layer nutty whole wheat crêpes with delicate honey whipped cream for a light but impressive dessert."
  },
  {
    name: "Butternut Squash Boulangère",
    price: 9.99,
    category: "Canapé",
    image:
      "https://www.saveur.com/uploads/2019/02/08/YP5K2DVSWGFSX7DKLDJK6U5XNQ-1024x768.jpg?auto=webp&optimize=high&quality=70&width=1080",
    description: "Braised squash with bacon and onions is an easy crowd-pleaser with loads of deep, caramelized flavors."
  },
  {
    name: "Brûléed Italian Plums with Armagnac Custard",
    price: 9.99,
    category: "Dessert",
    image:
      "https://www.saveur.com/uploads/2019/02/08/BOE7TXEJRQFX4MCAIKR27TX2BQ-1024x768.jpg?auto=webp&optimize=high&quality=70&width=1080",
    description: "Warming, caramel-scented Armagnac custard bathes fresh, barely-cooked Italian plums in this quick, simple dessert."
  },
  {
    name: "Crème Brûlée",
    price: 9.99,
    category: "Dessert",
    image:
      "https://www.saveur.com/uploads/2019/02/08/RWS6UMBIOEGOWUBGQTQ5NQLAUA-1024x768.jpg?auto=webp&optimize=high&quality=70&width=1080",
    description: "Beating egg yolks with sugar until pale and fluffy is the key to the smooth texture in this rich, classic French dessert, as made by Dennis Wist, father of Saveur Art Associate Allie Wist."
  },
  {
    name: "Strawberry Rhubarb Pâte de Fruit",
    price: 9.99,
    category: "Dessert",
    image:
      "https://www.saveur.com/uploads/2019/01/16/WBFZKBWQNWEVHVAYL5FCFYOI5A-1024x768.jpg?auto=webp&optimize=high&quality=70&width=1080",
    description: "Instead of coating his pâte de fruit with plain sugar, William Werner of San Francisco's Craftsman and Wolves flavors Demerara sugar with Clément Créole Shrubb, a spiced liqueur made of aged and white Agricole rums and bitter orange peels. It adds a clean, bright flavor to the glittering topping."
  },
  {
    name: "Almond Frangipane Tart with Cranberries and Honeyed Pistachios",
    price: 9.99,
    category: "Dessert",
    image:
      "https://www.saveur.com/uploads/2019/02/08/YVLDU2VUEMGTGKG25XZZYXALAM-1024x768.jpg?auto=webp&optimize=high&quality=70&width=1080",
    description: "Frangipane, an almond-based pastry filling, has a nutty fragrance and a consistency between buttery pound cake and airy sponge cake. In French-style fruit tarts, this classic filling is often studded with poached or fresh fruits. In summer, you can swap out the cranberries in this tart for halved pitted apricots, fresh pitted cherries, or sliced plums. Syrup-poached apples or pears, halved ripe figs, or quince would be delicious in cooler months."
  },
  {
    name: "Confit de Canard",
    price: 9.99,
    category: "Entrée",
    image:
      "https://www.saveur.com/uploads/2019/02/08/DEYVCYL3AIHLAQQ7SUZCTGTE6U-1024x768.jpg?auto=webp&optimize=high&quality=70&width=1080",
    description: "From the French verb confire, meaning \"to preserve,\" duck confit is a traditional means of cooking meat slowly in its own fat."
  },
  {
    name: "Roast Duck with Shallots and Concord Grapes",
    price: 9.99,
    category: "Entrée",
    image:
      "https://www.saveur.com/uploads/2019/02/08/25IOJ2ULCGPSOC2FZWTAP7DECE-1024x768.jpg?auto=webp&optimize=high&quality=70&width=1080",
    description: "As the bird steams in its Dutch oven, it releases its own fat which blends with the concord grapes and shallots into a rich sauce."
  },
  {
    name: "Duck Pâté en Croûte",
    price: 9.99,
    category: "Canapé",
    image:
      "https://www.saveur.com/uploads/2019/02/08/OOI633ULDYWIHZQY2TC32KRHWA-1024x768.jpg?auto=webp&optimize=high&quality=70&width=1080",
    description: "Pâté is a labor of love, but it's worth every step, especially when you bake it in flaky homemade pastry dough and top it with a flavorful gelée. Here, being careful to keep the ingredients cold during the process, and taking the same care when folding and filling the dough, yields a pâté that everyone will write home about."
  },
];

module.exports = products;